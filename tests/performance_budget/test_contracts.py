"""Offline contract tests: execute the workflow's actual Bash and real enforcer.

No npm install/build, browser, network, secrets, or notifications are invoked.
Run: python3 -I -m unittest discover -s tests/performance_budget -p 'test_*.py' -v
"""
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
WORKFLOW = (ROOT / ".github/workflows/performance-budget.yml").read_text()
NODE = shutil.which("node")


def step(name):
    # Deliberately reject an unfamiliar layout instead of accidentally testing a
    # copy of the commands. Only this workflow's explicit step indentation.
    match = re.search(r"^    - name: " + re.escape(name) + r"\n(.*?)(?=^    - name:|^    timeout-minutes:)",
                      WORKFLOW, re.M | re.S)
    if not match:
        raise AssertionError("Missing workflow step: " + name)
    return match.group(1)


def shell(name):
    block = step(name)
    match = re.search(r"^      run: \|\n((?:        .*\n|\n)+)", block, re.M)
    if not match:
        raise AssertionError("Missing literal run block: " + name)
    return "\n".join(line[8:] for line in match.group(1).splitlines())


class Sandbox(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix="performance-contract-")
        self.root = Path(self.tmp.name)
        self.bin = self.root / "bin"
        self.bin.mkdir()
        self.env = {**os.environ, "PATH": str(self.bin) + os.pathsep + os.environ["PATH"],
                    "RUNNER_TEMP": str(self.root), "GITHUB_OUTPUT": str(self.root / "outputs")}
        self.env.pop("NODE_OPTIONS", None)
        self.addCleanup(self.tmp.cleanup)

    def command(self, name, source):
        file = self.bin / name
        file.write_text("#!/bin/bash\n" + source)
        file.chmod(0o755)

    def run_step(self, name, **env):
        return subprocess.run(["bash", "--noprofile", "--norc", "-e", "-o", "pipefail", "-c", shell(name)],
                              cwd=self.root, env={**self.env, **env}, text=True,
                              capture_output=True, timeout=10)

    def out(self):
        (self.root / "out").mkdir(exist_ok=True)
        (self.root / "out/index.html").write_text("<html>compiled</html>")


class WorkflowTests(Sandbox):
    def test_build_failure_and_oom_keep_status_and_diagnostics(self):
        for code in (1, 134, 137):
            with self.subTest(code=code):
                self.out()  # Stale output must not turn a failed build green.
                self.command("npm", f"echo 'FATAL ERROR: heap out of memory' >&2\nexit {code}\n")
                result = self.run_step("Build site")
                self.assertEqual(result.returncode, code)
                self.assertNotIn("Next.js build succeeded", result.stdout)
                self.assertIn("heap out of memory", (self.root / "performance-build.log").read_text())

    def test_success_without_export_fails(self):
        self.command("npm", "exit 0\n")
        self.assertNotEqual(self.run_step("Build site").returncode, 0)

    def test_empty_export_fails(self):
        self.out()
        (self.root / "out/index.html").write_text("")
        self.command("npm", "exit 0\n")
        self.assertNotEqual(self.run_step("Build site").returncode, 0)

    def test_success_with_export_passes(self):
        self.command("npm", "mkdir -p out; echo compiled > out/index.html\n")
        self.assertEqual(self.run_step("Build site").returncode, 0)

    def test_build_deadline_remains_bounded_and_fails(self):
        self.command("timeout", 'printf "%s\\n" "$@" > timeout-args; echo "build deadline exceeded"; exit 124')
        result = self.run_step("Build site")
        self.assertEqual(result.returncode, 124)
        self.assertEqual((self.root / "timeout-args").read_text().splitlines(),
                         ["--signal=TERM", "--kill-after=30s", "300s", "npm", "run", "build"])
        self.assertIn("build deadline exceeded", (self.root / "performance-build.log").read_text())

    def test_server_without_export_never_invokes_serve(self):
        self.command("npx", "touch served\n")
        self.assertNotEqual(self.run_step("Start local server (background)").returncode, 0)
        self.assertFalse((self.root / "served").exists())

    def server(self, curl):
        self.out()
        self.command("npx", 'printf "%s\\n" "$@" > serve-args; exec /bin/sleep 30\n')
        self.command("curl", 'for i in {1..100}; do test ! -f serve-args || break; /bin/sleep 0.01; done\n' + curl)
        self.command("sleep", "exit 0\n")
        try:
            return self.run_step("Start local server (background)")
        finally:
            pid = self.root / "performance-server.pid"
            if pid.exists():
                try:
                    os.kill(int(pid.read_text()), 15)
                except ProcessLookupError:
                    pass

    def test_server_success_serves_only_out(self):
        self.assertEqual(self.server("printf 200").returncode, 0)
        self.assertEqual((self.root / "serve-args").read_text().splitlines(), ["serve", "out", "-l", "3000"])

    def test_server_http_failure_and_timeout_fail(self):
        for response in ("printf 404", "exit 28", "printf 301"):
            with self.subTest(response=response):
                self.assertNotEqual(self.server(response).returncode, 0)

    def test_server_process_failure_fails(self):
        self.out()
        self.command("npx", "exit 1")
        self.command("curl", "/bin/sleep 0.05; printf 503")
        self.command("sleep", "/bin/sleep 0.05")
        self.assertNotEqual(self.run_step("Start local server (background)").returncode, 0)

    def test_enforcer_shell_preserves_exit_code_stdout_and_stderr(self):
        for code in (0, 1, 42, 137):
            with self.subTest(code=code):
                self.command("node", f'printf "%s\\n" "$@" > audit-args; echo diagnostic; echo error-detail >&2; exit {code}')
                result = self.run_step("Run Performance Budget Enforcer")
                self.assertEqual(result.returncode, code)
                self.assertEqual((self.root / "outputs").read_text().splitlines()[-1], f"exit_code={code}")
                self.assertIn("error-detail", result.stdout)
                self.assertIn("diagnostic", (self.root / "perf-output.txt").read_text())
                self.assertEqual((self.root / "audit-args").read_text().splitlines(),
                                 ["automation/performance-budget-enforcer.cjs", "--url", "http://localhost:3000"])

    def test_policy_invariants(self):
        self.assertIn("if: always()", step("Upload performance artifacts"))
        for artifact in ("perf-output.txt", "performance-build.log", "performance-server.log",
                         ".hermes/memory/performance-budget/"):
            self.assertIn(artifact, step("Upload performance artifacts"))
        self.assertIn("if: success() && steps.perf.outcome == 'success' && steps.perf.outputs.exit_code == '0'",
                      step("Notify Telegram on success"))
        for name in ("Build site", "Start local server (background)", "Run Performance Budget Enforcer"):
            self.assertNotIn("continue-on-error", step(name))
            self.assertNotIn("|| true", step(name))
        self.assertNotRegex(WORKFLOW, r"serve\s+\.")
        self.assertNotIn("Comment posted", WORKFLOW)
        self.assertIn("permissions:\n  contents: read\n", WORKFLOW)
        self.assertIn("    permissions:\n      contents: write\n      pull-requests: write\n", WORKFLOW)
        self.assertIn("  schedule:\n    - cron: 0 3 * * *\n", WORKFLOW)
        self.assertIn("  pull_request:\n    branches:\n    - main\n", WORKFLOW)
        self.assertIn("node tests/test-performance-metrics.cjs automation/performance-budget-enforcer.cjs",
                      step("Validate performance metric semantics"))

    def test_offline_regression_lane_is_read_only_and_complete(self):
        lane = (ROOT / ".github/workflows/performance-budget-regression.yml").read_text()
        self.assertIn("permissions:\n  contents: read\n", lane)
        self.assertIn("node-version: '22'", lane)
        self.assertIn("CANDIDATE_SHA: ${{ github.sha }}", lane)
        self.assertIn("git -c credential.helper= fetch --no-tags --depth=1", lane)
        self.assertIn("python3 -I -m unittest discover -s tests/performance_budget", lane)
        self.assertIn("node tests/test-performance-metrics.cjs automation/performance-budget-enforcer.cjs", lane)
        for changed in ["performance-budget.yml", "performance-budget-regression.yml",
                        "automation/performance-budget-enforcer.cjs", "tests/test-performance-metrics.cjs",
                        "tests/performance_budget/**"]:
            self.assertIn(changed, lane)
        for forbidden in ["secrets.", "npm ", "pull_request_target", "contents: write", "pages:",
                          "workflow_dispatch:", "schedule:", "actions/checkout@"]:
            self.assertNotIn(forbidden, lane)


class EnforcerTests(Sandbox):
    def setUp(self):
        super().setUp()
        self.assertIsNotNone(NODE, "Node.js is required; do not skip audit tests.")
        self.report = {
            "audits": {key: {"numericValue": value} for key, value in {
                "largest-contentful-paint": 2000, "first-input-delay": 100,
                "cumulative-layout-shift": 0.1, "first-contentful-paint": 1500,
                "time-to-first-byte": 500}.items()},
            "categories": {"performance": {"score": 0.9}}}
        self.command("npx", '''
printf "%s\\n" "$@" > lighthouse-args
test "${AUDIT_EXIT:-0}" = 0 || exit "$AUDIT_EXIT"
for arg in "$@"; do
  case "$arg" in --output-path=*) dest="${arg#--output-path=}";; esac
done
cp "$RUNNER_TEMP/fixture.json" "$dest"
''')

    def audit(self, report=None, baseline=None, args=None, **env):
        (self.root / "fixture.json").write_text(json.dumps(self.report if report is None else report))
        argv = [NODE, str(ROOT / "automation/performance-budget-enforcer.cjs")]
        argv += ["--url", "http://localhost:3000"] if args is None else args
        if baseline is not None:
            (self.root / "baseline.json").write_text(baseline if isinstance(baseline, str) else json.dumps(baseline))
            argv += ["--baseline-file", str(self.root / "baseline.json")]
        return subprocess.run(argv, cwd=self.root, env={**self.env, **env},
                              text=True, capture_output=True, timeout=10)

    def test_valid_complete_report_passes_and_saves_evidence(self):
        result = self.audit()
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        self.assertTrue((self.root / ".hermes/memory/performance-budget/latest-report.json").exists())
        self.assertIn("--no-install", (self.root / "lighthouse-args").read_text())
        self.assertNotIn("--puppeteer", (self.root / "lighthouse-args").read_text())
        self.assertIn("only hard limits", result.stdout)

    def test_missing_url_fails(self):
        self.assertNotEqual(self.audit(args=[]).returncode, 0)

    def test_audit_process_failure_fails(self):
        self.assertNotEqual(self.audit(AUDIT_EXIT="1").returncode, 0)

    def test_missing_invalid_metrics_fail(self):
        for key in self.report["audits"]:
            for value in (None, "100", -1):
                with self.subTest(key=key, value=value):
                    report = json.loads(json.dumps(self.report))
                    report["audits"][key]["numericValue"] = value
                    self.assertNotEqual(self.audit(report).returncode, 0)
            report = json.loads(json.dumps(self.report))
            del report["audits"][key]
            self.assertNotEqual(self.audit(report).returncode, 0)

    def test_runtime_error_and_invalid_score_fail(self):
        self.assertNotEqual(self.audit({**self.report, "runtimeError": {"code": "FAILED"}}).returncode, 0)
        for score in (None, -1, 2, "0.9"):
            report = {**self.report, "categories": {"performance": {"score": score}}}
            self.assertNotEqual(self.audit(report).returncode, 0)

    def test_each_hard_limit_is_enforced_in_correct_units(self):
        for key, value in {"largest-contentful-paint": 4001, "first-input-delay": 301,
                           "cumulative-layout-shift": 0.251, "first-contentful-paint": 3001,
                           "time-to-first-byte": 2001}.items():
            with self.subTest(key=key):
                report = json.loads(json.dumps(self.report))
                report["audits"][key]["numericValue"] = value
                self.assertNotEqual(self.audit(report).returncode, 0)

    def test_baseline_direction_and_score(self):
        metrics = {"lcp": 2, "fid": .1, "cls": .1, "fcp": 1.5, "ttfb": .5, "performance": 90}
        self.assertEqual(self.audit(baseline={"metrics": metrics}).returncode, 0)
        for key in metrics:
            with self.subTest(key=key):
                # Current timing is 25% worse, or score is >10% worse.
                base = {**metrics, key: 100 if key == "performance" else metrics[key] * .8}
                report = json.loads(json.dumps(self.report))
                if key == "performance":
                    report["categories"]["performance"]["score"] = .89
                self.assertNotEqual(self.audit(report, baseline={"metrics": base}).returncode, 0)
        improved = {key: (80 if key == "performance" else value * 1.5) for key, value in metrics.items()}
        self.assertEqual(self.audit(baseline={"metrics": improved}).returncode, 0)
        self.assertNotEqual(self.audit(baseline={"metrics": {**metrics, "cls": 0}}).returncode, 0)

    def test_invalid_or_missing_requested_baseline_fails(self):
        for baseline in ("invalid JSON", {}, {"metrics": {"lcp": 2}}):
            self.assertNotEqual(self.audit(baseline=baseline).returncode, 0)
        self.assertNotEqual(self.audit(args=["--url", "http://localhost:3000",
                                             "--baseline-file", "missing.json"]).returncode, 0)

    def test_complete_local_and_live_success_pass(self):
        result = self.audit(args=["--url", "http://localhost:3000",
                                  "--live-url", "https://example.invalid"])
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_live_success_cannot_mask_local_failure_or_violation(self):
        for local_case in ("exit 1", 'printf \'{"audits": {}}\' > "$dest"; exit 0',
                           'sed \'s/"numericValue": 0.1/"numericValue": 0.5/\' "$RUNNER_TEMP/fixture.json" > "$dest"; exit 0'):
            self.command("npx", '''
for arg in "$@"; do
  case "$arg" in --output-path=*) dest="${arg#--output-path=}";; esac
done
case "$3" in *localhost*) ''' + local_case + ''';; esac
cp "$RUNNER_TEMP/fixture.json" "$dest"
''')
            self.assertNotEqual(self.audit(args=["--url", "http://localhost:3000",
                                                "--live-url", "https://example.invalid"]).returncode, 0)


if __name__ == "__main__":
    unittest.main()
