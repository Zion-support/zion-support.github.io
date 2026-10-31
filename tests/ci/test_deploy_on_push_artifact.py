#!/usr/bin/env python3
"""Offline publication-boundary regressions; no GitHub or website requests.

Execute the workflow's actual artifact commands with synthetic preparation,
renderer, and operational guard fixtures, then the unchanged real privacy guard.
A local marker stands in for upload. Default-success conditions are checked so a
future continue-on-error/always override cannot invalidate that fail-closed model.
This does not certify full renderer output or a live Pages deployment.
"""
from pathlib import Path
from datetime import datetime, timezone, timedelta
import hashlib
import json
import os
import re
import shutil
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[2]
WORKFLOW = ROOT / ".github/workflows/deploy-on-push.yml"
PREPARE = "Overlay docs pages onto out/"
UPLOAD = "Upload Pages artifact"
EXPECTED = [
    "bash scripts/prepare-pages-out.sh",
    "node scripts/render-productivity-release.cjs out",
    "node scripts/render-field-evidence-release.cjs out",
    "node scripts/test-operational-tools.cjs out --artifact-only",
    "python3 scripts/assert-no-private-ops.py out",
    "node scripts/automation/pages-automation-health-artifact.cjs verify",
]


def job(source, name):
    match = re.search(r"(?ms)^  " + re.escape(name) + r":\n(.*?)(?=^  [\w-]+:\n|\Z)", source)
    if not match:
        raise AssertionError("Missing job: " + name)
    return match.group(1)


def build_steps(source):
    return re.findall(r"(?ms)^    - name: ([^\n]+)\n(.*?)(?=^    - |\Z)", job(source, "build"))


def artifact_steps(source):
    steps = build_steps(source)
    names = [name for name, _ in steps]
    return steps[names.index(PREPARE):names.index(UPLOAD)]


def command(block):
    # The publication stages intentionally use single-line commands. Reject
    # unsupported structure rather than silently testing a different command.
    lines = re.findall(r"(?m)^      run: (.+)$", block)
    if len(lines) != 1 or lines[0] in ("|", ">", "|-", ">-"):
        raise AssertionError("Expected one literal publication command")
    return lines[0]


class ArtifactPublicationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = WORKFLOW.read_text()

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix="zion-pages-gate-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        (self.root / "scripts/automation").mkdir(parents=True)
        shutil.copyfile(ROOT / "scripts/automation/pages-automation-health-artifact.cjs",
                        self.root / "scripts/automation/pages-automation-health-artifact.cjs")
        stamp = (datetime.now(timezone.utc) - timedelta(seconds=1)).isoformat(timespec="milliseconds").replace("+00:00", "Z")
        repository = "Zion-support/zion-support.github.io"
        report = {
            "schemaVersion": 2, "scope": "latest_production_pages_publisher_and_github_pages_configuration",
            "repository": repository, "branch": "main", "status": "ok", "severity": "nominal",
            "timestamp": stamp, "generatedAt": stamp, "publicSnapshotUpdated": True,
            "collection": {"complete": True, "errors": [], "maxRunAgeHours": 24, "sources": [
                {"url": "https://api.github.com/repos/" + repository + endpoint,
                 "httpStatus": 200, "checkedAt": stamp}
                for endpoint in ("/actions/workflows/gh-pages.yml/runs",
                                 "/actions/workflows/static-deploy.yml/runs",
                                 "/actions/workflows/deploy-on-push.yml/runs",
                                 "/pages", "/actions/runs/300/jobs")]},
            "publisher": {"workflow": "gh-pages.yml", "workflowId": 400, "runId": 300, "runAttempt": 1,
                          "headSha": "a" * 40, "branch": "main", "status": "completed", "conclusion": "success",
                          "createdAt": stamp, "updatedAt": stamp,
                          "runUrl": "https://github.com/" + repository + "/actions/runs/300"},
            "checks": {name: True for name in ("build", "deploy", "pages")},
            "details": {name: {"state": "passed", "healthy": True} for name in ("build", "deploy", "pages")},
        }
        # Assembly fixtures model a completed collection; the separate Node
        # controls execute the real collector and prove failure cannot issue a receipt.
        health = json.dumps(report).encode()
        self.receipt = hashlib.sha256(health).hexdigest()
        (self.root / "public/api").mkdir(parents=True)
        (self.root / "public/api/automation-health.json").write_bytes(health)
        (self.root / "public/ops/comms").mkdir(parents=True)
        (self.root / "public/index.html").write_text("synthetic static homepage")
        (self.root / "public/ops/comms/index.html").write_text("synthetic approved public index")
        (self.root / "out").mkdir()
        (self.root / "out/next-diagnostic-output.txt").write_text("discarded Next output")
        shutil.copyfile(ROOT / "scripts/assert-no-private-ops.py", self.root / "scripts/assert-no-private-ops.py")
        (self.root / "scripts/prepare-pages-out.sh").write_text(
            "set -euo pipefail\n"
            "printf 'prepare\\n' >> trace\n"
            "if [ \"${FAIL_STAGE:-}\" = prepare ]; then exit 42; fi\n"
            "rm -rf out\ncp -a public out\n"
        )
        for stage, filename in (("productivity", "render-productivity-release.cjs"),
                                ("field", "render-field-evidence-release.cjs")):
            (self.root / "scripts" / filename).write_text(
                "const fs = require('node:fs');\n"
                "const out = process.argv[2];\n"
                "if (out !== 'out') process.exit(43);\n"
                "const stage = " + repr(stage) + ";\n"
                "fs.appendFileSync('trace', stage + '\\n');\n"
                "if (process.env.FAIL_STAGE === stage) process.exit(42);\n"
                "fs.writeFileSync(out + '/' + stage + '.txt', 'synthetic rendered output');\n"
                "if (stage === 'field' && process.env.INJECT_PRIVATE === '1') {\n"
                "  fs.mkdirSync(out + '/pt/OPS/COMMS', {recursive:true});\n"
                "  fs.writeFileSync(out + '/pt/OPS/COMMS/synthetic-private.txt', 'fixture');\n"
                "}\n"
                "if (stage === 'field' && process.env.REMOVE_OUT === '1') fs.rmSync(out, {recursive:true});\n"
            )
        # Model the operational guard's command and rejection boundary without
        # replacing the real privacy guard or duplicating content validation.
        (self.root / "scripts/test-operational-tools.cjs").write_text(
            "const fs = require('node:fs');\n"
            "if (JSON.stringify(process.argv.slice(2)) !== JSON.stringify(['out', '--artifact-only'])) process.exit(43);\n"
            "fs.appendFileSync('trace', 'operational-gate\\n');\n"
            "if (process.env.FAIL_STAGE === 'operational-gate') {\n"
            "  console.error('synthetic operational artifact rejected');\n"
            "  process.exit(42);\n"
            "}\n"
        )

    def run_artifact(self, source=None, **extra_env):
        commands = [command(block) for _, block in artifact_steps(source or self.source)]
        script = "\n".join(commands + ["test -d out", "printf 'uploaded out\\n' > published"])
        env = dict(os.environ, GITHUB_REPOSITORY="Zion-support/zion-support.github.io",
                   AUTOMATION_HEALTH_ARTIFACT_SHA256=self.receipt,
                   AUTOMATION_HEALTH_MAX_RUN_AGE_HOURS="24")
        env.update(extra_env)
        return subprocess.run(["bash", "-e", "-o", "pipefail", "-c", script],
                              cwd=self.root, env=env, capture_output=True, text=True)

    def test_pipeline_uses_same_render_order_and_final_scan(self):
        stages = artifact_steps(self.source)
        self.assertEqual([command(block) for _, block in stages], EXPECTED)
        upload = dict(build_steps(self.source))[UPLOAD]
        for name, block in stages + [(UPLOAD, upload)]:
            self.assertNotRegex(block, r"(?m)^      (if|continue-on-error):", name)
        self.assertIn("uses: actions/upload-pages-artifact@v4", upload)
        self.assertRegex(upload, r"(?m)^        path: out$")
        deploy = job(self.source, "deploy")
        self.assertRegex(deploy, r"(?m)^    needs: build$")
        self.assertNotRegex(deploy, r"(?m)^    (if|continue-on-error):")
        self.assertIn("uses: actions/deploy-pages@v4", deploy)

    def test_valid_static_artifact_replaces_next_output_and_reaches_upload(self):
        result = self.run_artifact()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual((self.root / "published").read_text(), "uploaded out\n")
        self.assertEqual((self.root / "trace").read_text(), "prepare\nproductivity\nfield\noperational-gate\n")
        self.assertFalse((self.root / "out/next-diagnostic-output.txt").exists())
        self.assertEqual((self.root / "out/index.html").read_text(), "synthetic static homepage")
        for stage in ("productivity", "field"):
            self.assertTrue((self.root / "out" / (stage + ".txt")).is_file())
        self.assertIn("OK: public ops/comms", result.stdout)

    def test_preparation_or_either_renderer_failure_stops_before_upload(self):
        for stage in ("prepare", "productivity", "field"):
            with self.subTest(stage=stage):
                result = self.run_artifact(FAIL_STAGE=stage)
                self.assertEqual(result.returncode, 42, result.stderr)
                self.assertFalse((self.root / "published").exists())

    def test_operational_artifact_rejection_stops_before_privacy_scan_and_upload(self):
        result = self.run_artifact(FAIL_STAGE="operational-gate")
        self.assertEqual(result.returncode, 42, result.stderr)
        self.assertEqual((self.root / "trace").read_text(), "prepare\nproductivity\nfield\noperational-gate\n")
        self.assertIn("synthetic operational artifact rejected", result.stderr)
        self.assertNotIn("OK: public ops/comms", result.stdout)
        self.assertFalse((self.root / "published").exists())

    def test_private_file_added_after_source_preparation_blocks_upload(self):
        result = self.run_artifact(INJECT_PRIVATE="1")
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertFalse((self.root / "public/pt/OPS/COMMS/synthetic-private.txt").exists())
        self.assertIn("pt/OPS/COMMS/synthetic-private.txt", result.stderr)
        self.assertFalse((self.root / "published").exists())

    def test_missing_final_artifact_fails_closed(self):
        result = self.run_artifact(REMOVE_OUT="1")
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertIn("missing publication tree", result.stderr)
        self.assertFalse((self.root / "published").exists())

    def test_negative_control_without_final_scan_allows_late_private_file(self):
        without_scan = self.source.replace(
            "    - name: Reject private operational files in final Pages artifact\n"
            "      run: python3 scripts/assert-no-private-ops.py out\n", "")
        self.assertNotEqual(without_scan, self.source)
        result = self.run_artifact(without_scan, INJECT_PRIVATE="1")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.root / "published").exists())
        self.assertTrue((self.root / "out/pt/OPS/COMMS/synthetic-private.txt").is_file())

    def test_missing_health_receipt_blocks_upload_even_with_fresh_fixture(self):
        result = self.run_artifact(AUTOMATION_HEALTH_ARTIFACT_SHA256="")
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertIn("missing receipt", result.stderr)
        self.assertFalse((self.root / "published").exists())

    def test_source_replaced_after_collection_cannot_reach_upload(self):
        (self.root / "public/api/automation-health.json").write_text('{"timestamp":"2026-07-07T23:06:26.830Z"}')
        result = self.run_artifact()
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertIn("final artifact differs", result.stderr)
        self.assertFalse((self.root / "published").exists())

    def test_negative_control_without_health_gate_publishes_old_source(self):
        without_gate = self.source.replace(
            "    - name: Validate collected automation health in final Pages artifact\n"
            "      env:\n"
            "        AUTOMATION_HEALTH_ARTIFACT_SHA256: ${{ steps.automation-health.outputs.snapshot_sha256 }}\n"
            "      run: node scripts/automation/pages-automation-health-artifact.cjs verify\n", "")
        self.assertNotEqual(without_gate, self.source)
        (self.root / "public/api/automation-health.json").write_text('{"timestamp":"2026-07-07T23:06:26.830Z"}')
        result = self.run_artifact(without_gate)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.root / "published").exists())

    def test_next_diagnostic_failure_is_visible_but_static_gate_is_independent(self):
        next_step = [(name, block) for name, block in build_steps(self.source)
                     if "run: npm run build" in block]
        self.assertEqual(len(next_step), 1)
        name, block = next_step[0]
        self.assertIn("diagnostic", name)
        self.assertRegex(block, r"(?m)^      continue-on-error: true$")
        executable = self.root / "bin/npm"
        executable.parent.mkdir()
        executable.write_text("#!/bin/sh\nprintf 'synthetic Next build failed\\n' >&2\nexit 2\n")
        executable.chmod(0o755)
        result = subprocess.run(["bash", "-e", "-o", "pipefail", "-c", command(block)],
                                cwd=self.root,
                                env=dict(os.environ, PATH=str(executable.parent) + os.pathsep + os.environ["PATH"]),
                                capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)
        self.assertIn("synthetic Next build failed", result.stderr)
        self.assertFalse((self.root / "published").exists())
        static_result = self.run_artifact()
        self.assertEqual(static_result.returncode, 0, static_result.stderr)
        self.assertTrue((self.root / "published").exists())


class CheckoutScopeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = WORKFLOW.read_text()

    def checkout(self, name):
        block = re.search(r"(?ms)^    - name: Checkout\n(.*?)(?=^    - |\Z)", job(self.source, name))
        self.assertIsNotNone(block, name)
        return block.group(1)

    def test_exact_refs_and_complete_tree_settings_are_preserved(self):
        refs = {
            "build": "${{ github.event_name == 'workflow_run' && github.event.workflow_run.head_sha || github.sha }}",
            "smoke-tests": "${{ needs.build.outputs.sha }}",
        }
        for name, ref in refs.items():
            with self.subTest(job=name):
                block = self.checkout(name)
                self.assertRegex(block, r"(?m)^      uses: actions/checkout@v4$")
                self.assertRegex(block, r"(?m)^        fetch-depth: 1$")
                self.assertIn("        ref: " + ref + "\n", block)
                self.assertNotRegex(block, r"(?m)^        (sparse-checkout|filter):")
        self.assertIn("      sha: ${{ steps.resolve-sha.outputs.sha }}", job(self.source, "build"))
        self.assertIn('echo "sha=$sha" >> "$GITHUB_OUTPUT"', job(self.source, "build"))

    def test_all_checkout_contexts_keep_exact_sha_full_tree_and_one_commit(self):
        def git(cwd, *args):
            result = subprocess.run(["git", *args], cwd=cwd, capture_output=True, text=True)
            self.assertEqual(result.returncode, 0, result.stderr)
            return result.stdout.strip()

        with tempfile.TemporaryDirectory(prefix="zion-checkout-depth-") as td:
            root = Path(td)
            origin = root / "origin"
            origin.mkdir()
            git(origin, "init", "-b", "main")
            git(origin, "config", "user.name", "Synthetic Checkout Fixture")
            git(origin, "config", "user.email", "fixture@example.invalid")
            git(origin, "config", "commit.gpgsign", "false")
            for path in ("public/index.html", "public/old.txt", "scripts/render.cjs", ".github/workflows/example.yml"):
                target = origin / path
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_text("synthetic first revision: " + path)
            git(origin, "add", ".")
            git(origin, "commit", "-m", "fixture ancestor")
            ancestor = git(origin, "rev-parse", "HEAD")
            git(origin, "tag", "unrelated-release", ancestor)
            git(origin, "branch", "unrelated-history", ancestor)
            (origin / "public/old.txt").rename(origin / "public/renamed.txt")
            (origin / "public/index.html").write_text("synthetic workflow-run revision")
            git(origin, "add", "-A")
            git(origin, "commit", "-m", "fixture workflow-run head")
            earlier_sha = git(origin, "rev-parse", "HEAD")
            (origin / "public/renamed.txt").unlink()
            (origin / "public/new.txt").write_text("synthetic later main revision")
            git(origin, "add", "-A")
            git(origin, "commit", "-m", "fixture advanced main")
            main_sha = git(origin, "rev-parse", "HEAD")
            cases = (
                ("push", "build", main_sha, main_sha),
                ("workflow_dispatch", "build", "refs/heads/main", main_sha),
                ("workflow_run", "build", earlier_sha, earlier_sha),
                ("smoke-tests", "smoke-tests", earlier_sha, earlier_sha),
            )
            for event, name, ref, expected_sha in cases:
                with self.subTest(context=event):
                    destination = root / event
                    destination.mkdir()
                    git(destination, "init")
                    git(destination, "remote", "add", "origin", origin.as_uri())
                    depth = re.search(r"(?m)^        fetch-depth: (\d+)$", self.checkout(name)).group(1)
                    git(destination, "fetch", "--no-tags", "--depth=" + depth, "origin", ref)
                    git(destination, "checkout", "--detach", "FETCH_HEAD")
                    self.assertEqual(git(destination, "rev-parse", "HEAD"), expected_sha)
                    self.assertEqual(git(destination, "rev-list", "--count", "HEAD"), "1")
                    self.assertEqual(git(destination, "ls-tree", "-r", "HEAD"), git(origin, "ls-tree", "-r", expected_sha))
                    self.assertEqual(git(destination, "tag", "--list"), "")
                    for path in git(origin, "ls-tree", "-r", "--name-only", expected_sha).splitlines():
                        self.assertEqual((destination / path).read_text(), git(origin, "show", expected_sha + ":" + path))
            # Full-history negative control has the same tree but three commits.
            full = root / "full-history"
            full.mkdir()
            git(full, "init")
            git(full, "remote", "add", "origin", origin.as_uri())
            git(full, "fetch", "--no-tags", "origin", "refs/heads/main")
            git(full, "checkout", "--detach", "FETCH_HEAD")
            self.assertEqual(git(full, "rev-list", "--count", "HEAD"), "3")
            self.assertEqual(git(full, "ls-tree", "-r", "HEAD"), git(origin, "ls-tree", "-r", main_sha))


class HealthReceiptContractTests(unittest.TestCase):
    def test_real_collector_receipts_and_all_publisher_boundaries(self):
        result = subprocess.run(
            ["node", "--test", "scripts/automation/test-pages-automation-health-artifact.cjs"],
            cwd=ROOT, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
