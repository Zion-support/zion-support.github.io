"""Inert source-contract and bounded-queue fixtures; no builds or network calls."""
from pathlib import Path
import os
import subprocess
import sys
import tempfile
import textwrap
import unittest

ROOT = Path(__file__).resolve().parents[2]
W = ROOT / ".github/workflows"

def source(name):
    return (W / name).read_text()

def admitted_validation(ref, result, source_sha, event_sha):
    return ref == "refs/heads/main" and result == "success" and source_sha == event_sha

class Queue:
    def __init__(self, capacity=100):
        self.active = None
        self.pending = []
        self.rejected = []
        self.capacity = capacity

    def admit(self, event):
        if self.active is None:
            self.active = event
        elif len(self.pending) < self.capacity:
            self.pending.append(event)
        else:
            self.rejected.append(event)

    def finish(self):
        self.active = self.pending.pop(0) if self.pending else None

class PublicationContracts(unittest.TestCase):
    def test_actual_guards(self):
        code = source("canonical-pages.yml")
        guards = code.split("<<'PY_GUARD'\n")[1:]
        self.assertEqual(len(guards), 2)
        for guard in guards:
            body = textwrap.dedent(guard.split("          PY_GUARD", 1)[0])
            for data, success in [(b"", True), (b"ops/comms/STATUS.md\0", True),
                                  (b"public/STATUS.md\0", False),
                                  (b"public/ops/STATUS.md\0", False),
                                  (b"ops/comms/STATUS.md\0public/index.html\0", False)]:
                with tempfile.NamedTemporaryFile() as f:
                    f.write(data)
                    f.flush()
                    run = subprocess.run([sys.executable, "-I", "-c", body, f.name], capture_output=True)
                    self.assertEqual(run.returncode == 0, success)
            run = subprocess.run([sys.executable, "-I", "-c", body, "/missing-inert-fixture"], capture_output=True)
            self.assertNotEqual(run.returncode, 0)

    def test_stale_arrival_does_not_cancel_current_pending(self):
        q = Queue()
        for event in ["active", "current-B", "delayed-A"]:
            q.admit(event)
        q.finish()
        self.assertEqual(q.active, "current-B")
        self.assertEqual(q.pending, ["delayed-A"])
        self.assertEqual(q.rejected, [])

    def test_default_single_pending_counterexample(self):
        # GitHub's default replaces the pending job, even when the active one is not cancelled.
        pending = "current-B"
        pending = "delayed-A"
        self.assertEqual(pending, "delayed-A")
        self.assertNotEqual(pending, "current-B")
        self.assertIn("queue: max", source("canonical-pages.yml"))

    def test_reverse_arrival_and_capacity_limit(self):
        q = Queue()
        q.admit("active")
        q.admit("stale-A")
        q.admit("current-B")
        q.finish()
        self.assertEqual(q.active, "stale-A")
        q.finish()
        self.assertEqual(q.active, "current-B")
        q = Queue()
        for i in range(102):
            q.admit(i)
        self.assertEqual(q.rejected, [101])
        self.assertEqual(len(q.pending), 100)

    def test_event_loss_has_no_invented_recovery(self):
        q = Queue()
        q.admit("A")
        q.finish()
        self.assertIsNone(q.active)
        self.assertNotIn("schedule:", source("gh-pages.yml"))

    def test_single_lock_native_source_and_attempt_artifact(self):
        c = source("canonical-pages.yml")
        self.assertIn("queue: max", c)
        self.assertIn("cancel-in-progress: false", c)
        self.assertIn('test "$sha" = "$GITHUB_SHA"', c)
        self.assertIn("CANDIDATE_SHA: ${{ github.sha }}", c)
        self.assertEqual(c.count("canonical-pages-${{ github.run_id }}-${{ github.run_attempt }}"), 2)
        self.assertNotIn("download-artifact", c)
        self.assertNotIn("npm ", c)
        for n in ["gh-pages.yml", "static-deploy.yml"]:
            self.assertNotIn("concurrency:", source(n))
        # Deployment is unconditional after fail-closed guards; no masked failure.
        self.assertNotIn("continue-on-error:", c)
        self.assertEqual(c.count("      - name: Deploy canonical artifact"), 1)
        self.assertNotIn("if:", c)

    def test_trigger_and_status_parity(self):
        self.assertIn("- '**'\n      - '!ops/comms/STATUS.md'", source("gh-pages.yml"))
        self.assertNotIn("push:", source("static-deploy.yml"))
        h = source("deploy-on-push.yml")
        self.assertNotIn("actions/deploy-pages@", h)
        self.assertNotIn("canonical-pages.yml", h)
        self.assertIn("name: Deploy on Push", h)

    def test_consumer_is_direct_success_dependency(self):
        expected = "github.ref == 'refs/heads/main' && needs.deploy.result == 'success' && needs.deploy.outputs.source_sha == github.sha"
        for n in ["gh-pages.yml", "static-deploy.yml"]:
            s = source(n)
            tail = s.split("  validate-production:", 1)[1]
            self.assertIn("needs: deploy", tail)
            self.assertIn(expected, tail)
            self.assertIn("source_sha: ${{ needs.deploy.outputs.source_sha }}", tail)
            self.assertIn("permissions:\n      contents: read", tail)
        c = source("ai-production-deploy-validation.yml")
        self.assertNotIn("workflow_run:", c)
        self.assertIn("workflow_call:", c)
        self.assertIn("inputs.source_sha == github.sha", c)
        self.assertIn("CANDIDATE_SHA: ${{ github.sha }}", c)
        self.assertIn("name: AI Production Deploy Validation", c)
        self.assertIn("  validate:", c)
        self.assertIn("Live observations are not proof", c)

    def test_failed_skipped_cancelled_and_nonmain_consumer(self):
        for result in ["failure", "skipped", "cancelled", "timed_out", ""]:
            self.assertFalse(admitted_validation("refs/heads/main", result, "A", "A"))
        self.assertFalse(admitted_validation("refs/heads/topic", "success", "A", "A"))
        self.assertFalse(admitted_validation("refs/heads/main", "success", "", "A"))
        self.assertFalse(admitted_validation("refs/heads/main", "success", "old", "A"))
        self.assertTrue(admitted_validation("refs/heads/main", "success", "A", "A"))

    def checkout_shell(self, name="publication-contract-tests.yml"):
        step = source(name).split("      - name: Checkout public event without stored credentials\n", 1)[1].split("      - name:", 1)[0]
        return textwrap.dedent(step.split("        run: |\n", 1)[1])

    def test_checkout_broken_gitlink_and_merge_event(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            repo = root / "repo"
            work = root / "work"
            repo.mkdir()
            work.mkdir()
            def git(*args):
                return subprocess.check_output(["git", "-C", str(repo), *args], stderr=subprocess.DEVNULL, text=True).strip()
            git("init", "-q")
            git("config", "user.name", "Fixture")
            git("config", "user.email", "fixture@example.invalid")
            (repo / "file").write_text("base")
            git("add", ".")
            git("commit", "-qm", "base")
            base = git("rev-parse", "HEAD")
            git("update-index", "--add", "--cacheinfo", "160000," + base + ",.pageploy")
            git("commit", "-qm", "broken gitlink")
            head = git("rev-parse", "HEAD")
            # A real two-parent synthetic merge commit, matching pull_request event semantics.
            merge = git("commit-tree", git("rev-parse", "HEAD^{tree}"), "-p", base, "-p", head, "-m", "merge fixture")
            for name in ["publication-contract-tests.yml", "canonical-pages.yml", "ai-production-deploy-validation.yml"]:
                with self.subTest(workflow=name):
                    target = work / name
                    target.mkdir()
                    code = self.checkout_shell(name).replace("https://github.com/Zion-support/zion-support.github.io.git", str(repo))
                    env = dict(os.environ, CANDIDATE_SHA=merge, GIT_TERMINAL_PROMPT="0")
                    run = subprocess.run(["bash", "-c", code], cwd=target, env=env, capture_output=True, text=True)
                    self.assertEqual(run.returncode, 0, run.stderr)
                    actual = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=target, text=True).strip()
                    self.assertEqual(actual, merge)
                    self.assertNotEqual(actual, head)
                    cleanup = subprocess.run(["git", "submodule", "foreach", "--recursive", "true"], cwd=target, capture_output=True, text=True)
                    self.assertNotEqual(cleanup.returncode, 0)
                    self.assertIn("No url found for submodule path '.pageploy'", cleanup.stderr)
                    self.assertNotIn("submodule", self.checkout_shell(name))
                    cfg = (target / ".git/config").read_text()
                    self.assertNotIn("extraheader", cfg.lower())
                    self.assertNotIn("credential", cfg.lower())

    def test_all_transport_paths_identical_and_permissions_preserved(self):
        expected = self.checkout_shell()
        for name in ["canonical-pages.yml", "ai-production-deploy-validation.yml"]:
            self.assertEqual(self.checkout_shell(name), expected)
            self.assertNotIn("actions/checkout@", source(name))
            self.assertIn("CANDIDATE_SHA: ${{ github.sha }}", source(name))
        self.assertIn("permissions:\n  contents: read\n  pages: write\n  id-token: write", source("canonical-pages.yml"))
        self.assertIn("permissions:\n  contents: read\n", source("ai-production-deploy-validation.yml"))
        self.assertNotIn("pages: write", source("ai-production-deploy-validation.yml"))

    def test_shallow_real_guards_need_trees_not_history(self):
        workflow = source("canonical-pages.yml")
        guards = []
        for marker in ["Reject obsolete event inputs before assembly", "Reject changed publication inputs before deploy"]:
            step = workflow.split("      - name: " + marker + "\n", 1)[1].split("      - name:", 1)[0]
            guards.append(textwrap.dedent(step.split("        run: |\n", 1)[1]))
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            repo = root / "repo"
            work = root / "work"
            repo.mkdir()
            work.mkdir()
            def git(*args):
                return subprocess.check_output(["git", "-C", str(repo), *args], stderr=subprocess.DEVNULL, text=True).strip()
            git("init", "-q", "-b", "main")
            git("config", "user.name", "Fixture")
            git("config", "user.email", "fixture@example.invalid")
            (repo / "public").mkdir()
            (repo / "public/index.html").write_text("original")
            git("add", ".")
            git("commit", "-qm", "original")
            sha = git("rev-parse", "HEAD")
            code = self.checkout_shell("canonical-pages.yml").replace("https://github.com/Zion-support/zion-support.github.io.git", str(repo))
            env = dict(os.environ, CANDIDATE_SHA=sha, SOURCE_SHA=sha, RUNNER_TEMP=str(root))
            subprocess.run(["bash", "-c", code], cwd=work, env=env, capture_output=True, check=True)
            for mode in ["same", "metadata", "public"]:
                if mode != "same":
                    path = repo / ("ops/comms/STATUS.md" if mode == "metadata" else "public/STATUS.md")
                    path.parent.mkdir(parents=True, exist_ok=True)
                    path.write_text(mode)
                    git("add", ".")
                    git("commit", "-qm", mode)
                for guard in guards:
                    run = subprocess.run(["bash", "-c", guard], cwd=work, env=env, capture_output=True, text=True)
                    self.assertEqual(run.returncode == 0, mode != "public", run.stderr)
                actual = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=work, text=True).strip()
                self.assertEqual(actual, sha)
            # Source and latest snapshots are both shallow roots; no merge-base/history required.
            self.assertTrue((work / ".git/shallow").exists())

    def test_checkout_invalid_sha_and_existing_files(self):
        for sha, existing in [("invalid", False), ("a" * 40, True)]:
            with tempfile.TemporaryDirectory() as td:
                p = Path(td)
                if existing:
                    (p / "keep").write_text("preserve")
                run = subprocess.run(["bash", "-c", self.checkout_shell()], cwd=p,
                                     env=dict(os.environ, CANDIDATE_SHA=sha), capture_output=True)
                self.assertNotEqual(run.returncode, 0)
                self.assertFalse((p / ".git").exists())
                if existing:
                    self.assertEqual((p / "keep").read_text(), "preserve")

    def test_checkout_wrong_revision_assertion(self):
        with tempfile.TemporaryDirectory() as td:
            root = Path(td)
            binary = root / "git"
            binary.write_text('#!/bin/sh\nif [ "$1" = rev-parse ]; then printf "%040d\\n" 0; fi\n')
            binary.chmod(0o755)
            work = root / "work"
            work.mkdir()
            run = subprocess.run(["bash", "-c", self.checkout_shell()], cwd=work,
                                 env=dict(os.environ, CANDIDATE_SHA="a" * 40, PATH=str(root) + os.pathsep + os.environ["PATH"]), capture_output=True)
            self.assertNotEqual(run.returncode, 0)
            self.assertIn(b"Checked out revision differs", run.stdout)

    def test_inert_pr_lane_scope(self):
        s = source("publication-contract-tests.yml")
        self.assertIn("pull_request:", s)
        self.assertNotIn("pull_request_target", s)
        self.assertIn("permissions:\n  contents: read", s)
        for forbidden in ["secrets", "pages: write", "id-token:", "npm ", "curl ", "workflow_dispatch:", "schedule:"]:
            self.assertNotIn(forbidden, s)
        self.assertNotIn("actions/checkout@", s)
        self.assertIn("CANDIDATE_SHA: ${{ github.sha }}", s)
        self.assertIn("git -c credential.helper= fetch --no-tags --depth=1", s)

if __name__ == "__main__":
    unittest.main()
