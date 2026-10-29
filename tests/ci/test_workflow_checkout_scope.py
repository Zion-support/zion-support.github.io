"""Offline Git and shell regressions for the two bounded workflow checkouts.

Run from the repository root with Python 3 and Git; no npm, network or secrets.
"""
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile
import textwrap
import unittest


ROOT = Path(os.environ.get("ZION_WORKFLOW_FIXTURE_ROOT", Path(__file__).resolve().parents[2]))
IMPACT = (ROOT / ".github/workflows/apps-change-impact-report.yml").read_text()
ESLINT = (ROOT / ".github/workflows/custom-eslint.yml").read_text()


def depth(source):
    values = re.findall(r"^\s+fetch-depth: (\d+)\s*$", source, re.M)
    if len(values) != 1 or int(values[0]) <= 0:
        raise AssertionError("Expected one bounded checkout, not all history")
    return int(values[0])


def block(source, name):
    lines = source.splitlines()
    start = next(i for i, line in enumerate(lines) if line.strip() == "- name: " + name)
    step_indent = len(lines[start]) - len(lines[start].lstrip())
    end = next((i for i in range(start + 1, len(lines))
                if lines[i].strip() and len(lines[i]) - len(lines[i].lstrip()) <= step_indent), len(lines))
    run = next(i for i in range(start + 1, end) if lines[i].strip() == "run: |")
    indent = len(lines[run]) - len(lines[run].lstrip())
    stop = next((i for i in range(run + 1, end)
                 if lines[i].strip() and len(lines[i]) - len(lines[i].lstrip()) <= indent), end)
    return textwrap.dedent("\n".join(lines[run + 1:stop])) + "\n"


def command(cwd, *args, check=True, env=None):
    result = subprocess.run(args, cwd=cwd, env=env, text=True, capture_output=True)
    if check and result.returncode:
        raise AssertionError(f"{args[0]} failed ({result.returncode}): {result.stderr}")
    return result


def git(cwd, *args):
    return command(cwd, "git", *args).stdout.strip()


class CheckoutScopeTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory(prefix="zion-checkout-regression-")
        cls.root = Path(cls.temp.name)
        cls.source = cls.root / "source"
        cls.source.mkdir()
        git(cls.source, "init", "-b", "main")
        git(cls.source, "config", "user.name", "Workflow fixture")
        git(cls.source, "config", "user.email", "fixture@example.invalid")
        git(cls.source, "config", "commit.gpgsign", "false")

        def commit(path, content):
            target = cls.source / path
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(content)
            git(cls.source, "add", "--", path)
            git(cls.source, "commit", "-m", "fixture")
            return git(cls.source, "rev-parse", "HEAD")

        cls.initial = commit("public/apps/obsolete.html", "obsolete\n")
        commit("public/apps/rename-me.html", "rename content\n")
        for i in range(8):
            commit("base-history.txt", f"base {i}\n")
        git(cls.source, "checkout", "-b", "feature")
        for i in range(12):
            commit(f"public/pt/apps/feature-{i}.html", f"feature {i}\n")
        git(cls.source, "rm", "public/apps/obsolete.html")
        git(cls.source, "mv", "public/apps/rename-me.html", "public/apps/renamed.html")
        git(cls.source, "commit", "-m", "fixture rename and delete")
        cls.feature = git(cls.source, "rev-parse", "HEAD")
        git(cls.source, "checkout", "main")
        for i in range(4):
            commit("public/apps/base-only.html", f"base advance {i}\n")
        cls.base = git(cls.source, "rev-parse", "HEAD")
        git(cls.source, "merge", "--no-ff", "feature", "-m", "fixture PR merge")
        cls.merge = git(cls.source, "rev-parse", "HEAD")
        git(cls.source, "tag", "manual-release", cls.merge)
        cls.tip = commit("public/discovery/index.html", "manual follow-up\n")
        git(cls.source, "checkout", "-b", "unrelated", cls.initial)
        for i in range(5):
            commit("unrelated.txt", f"unrelated history {i}\n")
        git(cls.source, "tag", "unrelated-tag")
        git(cls.source, "checkout", "main")
        cls.remote = cls.root / "origin.git"
        git(cls.root, "clone", "--bare", "--no-local", str(cls.source), str(cls.remote))
        git(cls.remote, "update-ref", "refs/pull/71/merge", cls.merge)
        cls.sequence = 0

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def checkout(self, sha, fetch_depth):
        type(self).sequence += 1
        target = self.root / f"checkout-{self.sequence}"
        target.mkdir()
        git(target, "init")
        git(target, "remote", "add", "origin", self.remote.as_uri())
        # Same single-ref/SHA form used by checkout when fetch-depth is positive.
        git(target, "-c", "protocol.file.allow=always", "fetch", "--no-tags", "--prune",
            "--no-recurse-submodules", f"--depth={fetch_depth}", "origin",
            f"+{sha}:refs/remotes/origin/workflow")
        git(target, "checkout", "--detach", sha)
        self.assertEqual(git(target, "tag", "--list"), "")
        self.assertNotIn("unrelated", git(target, "for-each-ref", "--format=%(refname)"))
        return target

    def report(self, target, event, base, head):
        env = os.environ.copy()
        env.update(EVENT_NAME=event, BASE_SHA=base, HEAD_SHA=head,
                   GITHUB_STEP_SUMMARY=str(target / "summary.md"))
        result = command(target, "bash", "-euo", "pipefail", "-c",
                         block(IMPACT, "Build Apps change impact report"), check=False, env=env)
        output = target / "automation/reports/apps-change-impact.json"
        return result, json.loads(output.read_text()) if result.returncode == 0 else None

    def test_pr_merge_preserves_complete_two_endpoint_diff(self):
        target = self.checkout(self.merge, depth(IMPACT))
        result, actual = self.report(target, "pull_request", self.base, self.merge)
        self.assertEqual(result.returncode, 0, result.stderr)
        expected = git(self.source, "diff", "--name-only", self.base, self.merge).splitlines()
        self.assertEqual(actual["changed_files"], expected)
        self.assertIn("public/apps/obsolete.html", expected)
        self.assertIn("public/apps/renamed.html", expected)
        self.assertIn("public/pt/apps/feature-0.html", expected)
        self.assertNotIn("public/apps/base-only.html", expected)
        self.assertEqual(actual["locales_touched"], ["en", "pt-BR"])
        self.assertLessEqual(int(git(target, "rev-list", "--all", "--count")), 3)

    def test_manual_branch_preserves_first_parent_diff(self):
        target = self.checkout(self.tip, depth(IMPACT))
        result, actual = self.report(target, "workflow_dispatch", "ignored", self.tip)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(actual["base_sha"], "HEAD^")
        self.assertEqual(actual["changed_files"],
                         git(self.source, "diff", "--name-only", self.tip + "^", self.tip).splitlines())

    def test_manual_merge_tag_preserves_first_parent_diff(self):
        target = self.checkout(self.merge, depth(IMPACT))
        result, actual = self.report(target, "workflow_dispatch", "ignored", self.merge)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(actual["changed_files"],
                         git(self.source, "diff", "--name-only", self.merge + "^", self.merge).splitlines())

    def test_missing_parent_and_missing_base_fail_closed(self):
        for sha, event, base in [(self.initial, "workflow_dispatch", ""),
                                 (self.merge, "pull_request", "f" * 40)]:
            with self.subTest(event=event):
                target = self.checkout(sha, depth(IMPACT))
                result, report = self.report(target, event, base, sha)
                self.assertNotEqual(result.returncode, 0)
                self.assertIsNone(report)

    def test_depth_one_would_lose_the_pr_base(self):
        target = self.checkout(self.merge, 1)
        result, report = self.report(target, "pull_request", self.base, self.merge)
        self.assertNotEqual(result.returncode, 0)
        self.assertIsNone(report)

    def test_eslint_current_tree_is_complete_for_all_triggers(self):
        for event, sha in [("push", self.tip), ("schedule", self.tip),
                           ("pull_request", self.merge), ("workflow_dispatch", self.feature)]:
            with self.subTest(event=event):
                target = self.checkout(sha, depth(ESLINT))
                self.assertEqual(git(target, "ls-tree", "-r", "HEAD"),
                                 git(self.source, "ls-tree", "-r", sha))
                self.assertEqual(git(target, "rev-list", "--all", "--count"), "1")


class LintExitTests(unittest.TestCase):
    def gate(self, code, cwd):
        env = os.environ.copy()
        if code is None:
            env.pop("ESLINT_EXIT_CODE", None)
        else:
            env["ESLINT_EXIT_CODE"] = code
        return command(cwd, "bash", "-eo", "pipefail", "-c",
                       block(ESLINT, "Check for errors"), env=env, check=False)

    def test_linter_status_and_report_are_preserved(self):
        for status in (0, 1, 2):
            with self.subTest(status=status), tempfile.TemporaryDirectory() as temp:
                root = Path(temp)
                npx = root / "npx"
                npx.write_text('#!/bin/sh\nprintf "%s\\n" "$@" > "$MOCK_NPX_ARGS"\n'
                               'printf \'[{"filePath":"fixture.tsx","messages":[]}]\\n\'\n'
                               'exit "$MOCK_ESLINT_STATUS"\n')
                npx.chmod(0o755)
                report = root / "eslint-report.json"
                env = os.environ.copy()
                env.update(PATH=str(root) + os.pathsep + env["PATH"],
                           MOCK_ESLINT_STATUS=str(status), MOCK_NPX_ARGS=str(root / "args"),
                           GITHUB_OUTPUT=str(root / "output"))
                script = block(ESLINT, "Run Autonomous ESLint").replace(
                    "/tmp/eslint-report.json", str(report))
                result = command(root, "bash", "-eo", "pipefail", "-c", script, env=env, check=False)
                self.assertEqual(result.returncode, status)
                self.assertEqual((root / "output").read_text(), f"exit_code={status}\n")
                self.assertIsInstance(json.loads(report.read_text()), list)
                self.assertEqual((root / "args").read_text().splitlines(), [
                    "eslint", "-c", ".eslintrc-autonomous.cjs", ".",
                    "--ignore-pattern", ".next/**", "--ignore-pattern", "out/**",
                    "--ignore-pattern", "dist/**", "--ignore-pattern", "build/**",
                    "--ignore-pattern", "coverage/**", "--ignore-pattern", ".hermes/**",
                    "--ignore-pattern", "automation/reports/**", "--max-warnings", "0",
                    "--format", "json"])
                self.assertEqual(self.gate(str(status), root).returncode, 0 if status == 0 else 1)

    def test_missing_or_malformed_status_fails_closed(self):
        with tempfile.TemporaryDirectory() as temp:
            for code in (None, "", "invalid", "00", "0;exit 0"):
                with self.subTest(code=code):
                    self.assertNotEqual(self.gate(code, temp).returncode, 0)


if __name__ == "__main__":
    unittest.main(verbosity=2)
