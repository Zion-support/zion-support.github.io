#!/usr/bin/env python3
"""Canonical artifact publication regressions; no build or network requests.

The historical filename stays as the required workflow entry point. Production
assembly now belongs to canonical-pages.yml (PR #71963), not Deploy on Push.
Execute its real ordered assembly commands against a synthetic preparation
fixture and the unchanged production privacy guard. The separate full-static
job must subsequently assemble and inspect the real checked-out public tree.
"""
from pathlib import Path
import os
import re
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
WORKFLOWS = ROOT / ".github/workflows"
CANONICAL = WORKFLOWS / "canonical-pages.yml"
PREPARE = "Prepare canonical pages from public"
UPLOAD = "Upload canonical Pages artifact"
EXPECTED = ["bash scripts/prepare-pages-out.sh",
            "python3 scripts/assert-no-private-ops.py out"]


def steps(source):
    # Keep unnamed Actions steps visible. Ignoring '- run:' here would let a
    # publisher mutate the artifact while this contract still claims parity.
    found = re.findall(r"(?ms)^      - ([^\n]+)\n(.*?)(?=^      - |\Z)", source)
    return [(header[6:], body) if header.startswith("name: ")
            else (None, "        " + header + "\n" + body)
            for header, body in found]


def command(block):
    found = re.findall(r"(?m)^        run: (.+)$", block)
    if len(found) != 1 or found[0] in ("|", ">", "|-", ">-"):
        raise AssertionError("Expected one literal artifact command")
    return found[0]


def artifact_steps(source):
    ordered = steps(source)
    names = [name for name, _ in ordered]
    return ordered[names.index(PREPARE):names.index(UPLOAD)]


class CanonicalArtifactTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = CANONICAL.read_text()
        cls.qa = (WORKFLOWS / "productivity-full-build-check.yml").read_text()

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix="canonical-artifact-contract-")
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        (self.root / "scripts").mkdir()
        shutil.copyfile(ROOT / "scripts/assert-no-private-ops.py",
                        self.root / "scripts/assert-no-private-ops.py")
        (self.root / "public/ops/comms").mkdir(parents=True)
        (self.root / "public/index.html").write_text("synthetic source homepage")
        (self.root / "public/ops/comms/index.html").write_text("synthetic approved index")
        (self.root / "out").mkdir()
        (self.root / "out/unrelated-next-output.txt").write_text("discarded diagnostic output")
        (self.root / "scripts/prepare-pages-out.sh").write_text(
            "set -euo pipefail\n"
            'if [ "${FAIL_PREPARE:-}" = 1 ]; then exit 42; fi\n'
            "rm -rf out\ncp -a public out\n"
            'if [ "${INJECT_PRIVATE:-}" = 1 ]; then mkdir -p out/pt/OPS/COMMS; '
            "printf fixture > out/pt/OPS/COMMS/private.txt; fi\n"
            'if [ "${REMOVE_OUT:-}" = 1 ]; then rm -rf out; fi\n'
        )

    def run_artifact(self, source=None, **extra):
        commands = [command(block) for _, block in artifact_steps(source or self.source)]
        script = "\n".join(commands + ["test -d out", "printf verified > uploaded"])
        return subprocess.run(["bash", "-e", "-o", "pipefail", "-c", script],
                              cwd=self.root, env=dict(os.environ, **extra),
                              text=True, capture_output=True)

    def test_actual_publisher_commands_and_default_success_boundary(self):
        self.assertEqual([command(block) for _, block in artifact_steps(self.source)], EXPECTED)
        upload = dict(steps(self.source))[UPLOAD]
        for name, block in artifact_steps(self.source) + [(UPLOAD, upload)]:
            self.assertNotRegex(block, r"(?m)^        (if|continue-on-error):", name)
        self.assertIn("uses: actions/upload-pages-artifact@", upload)
        self.assertRegex(upload, r"(?m)^          path: out$")
        self.assertIn("name: canonical-pages-${{ github.run_id }}-${{ github.run_attempt }}", upload)
        deployment = dict(steps(self.source))["Deploy canonical artifact"]
        self.assertIn("uses: actions/deploy-pages@v4", deployment)
        self.assertNotRegex(deployment, r"(?m)^        (if|continue-on-error):")
        self.assertIn("artifact_name: canonical-pages-${{ github.run_id }}-${{ github.run_attempt }}", deployment)

    def test_valid_static_artifact_replaces_diagnostic_output(self):
        result = self.run_artifact()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual((self.root / "uploaded").read_text(), "verified")
        self.assertEqual((self.root / "out/index.html").read_bytes(),
                         (self.root / "public/index.html").read_bytes())
        self.assertFalse((self.root / "out/unrelated-next-output.txt").exists())
        self.assertIn("OK: public ops/comms", result.stdout)

    def test_unnamed_publisher_steps_cannot_hide_extra_transforms(self):
        for injected in ("      - run: node scripts/unmodeled-renderer.cjs out\n",
                         "      - uses: fixture/unmodeled-action@v1\n"):
            changed = self.source.replace("      - name: " + UPLOAD + "\n",
                                          injected + "      - name: " + UPLOAD + "\n")
            self.assertNotEqual(changed, self.source)
            selected = artifact_steps(changed)
            self.assertTrue(any(name is None for name, _ in selected))
            if "- run:" in injected:
                actual = [command(block) for _, block in selected]
                self.assertNotEqual(actual, EXPECTED)
                self.assertIn("node scripts/unmodeled-renderer.cjs out", actual)
            else:
                with self.assertRaisesRegex(AssertionError, "literal artifact command"):
                    [command(block) for _, block in selected]

    def test_preparation_failure_stops_before_upload(self):
        result = self.run_artifact(FAIL_PREPARE="1")
        self.assertEqual(result.returncode, 42)
        self.assertFalse((self.root / "uploaded").exists())

    def test_private_file_added_after_preparation_cannot_reach_upload(self):
        result = self.run_artifact(INJECT_PRIVATE="1")
        self.assertEqual(result.returncode, 1)
        self.assertIn("pt/OPS/COMMS/private.txt", result.stderr)
        self.assertFalse((self.root / "uploaded").exists())

    def test_missing_final_tree_fails_closed(self):
        result = self.run_artifact(REMOVE_OUT="1")
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("missing publication tree", result.stderr)
        self.assertFalse((self.root / "uploaded").exists())

    def test_negative_control_without_final_guard_reaches_upload(self):
        without_guard = self.source.replace(
            "      - name: Validate final publication boundary\n"
            "        run: python3 scripts/assert-no-private-ops.py out\n", "")
        self.assertNotEqual(without_guard, self.source)
        result = self.run_artifact(without_guard, INJECT_PRIVATE="1")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertTrue((self.root / "uploaded").exists())
        self.assertTrue((self.root / "out/pt/OPS/COMMS/private.txt").exists())

    def test_qa_assembles_the_same_tree_without_extra_renderers(self):
        self.assertIn("  full-static-artifact:\n", self.qa)
        self.assertIn("ref: ${{ github.event.pull_request.head.sha }}", self.qa)
        self.assertIn("persist-credentials: false", self.qa)
        self.assertIn("permissions:\n  contents: read", self.qa)
        self.assertNotIn("pages: write", self.qa)
        self.assertNotIn("actions/deploy-pages", self.qa)
        self.assertNotIn("continue-on-error:", self.qa)
        sequence = ["run: bash scripts/prepare-pages-out.sh",
                    "run: python3 scripts/assert-no-private-ops.py out",
                    "run: node scripts/verify-productivity-publication.cjs out",
                    "run: node scripts/prepare-productivity-qa.cjs out productivity-qa _productivity-catalog.md",
                    "uses: actions/upload-artifact@"]
        positions = [self.qa.index(item) for item in sequence]
        self.assertEqual(positions, sorted(positions))
        for line in self.qa.splitlines():
            self.assertFalse(re.match(r"\s*run: node scripts/render-", line),
                             "QA must validate actual publisher bytes, not a separately rendered tree")

    def test_required_semantic_and_staging_dependencies_exist(self):
        required = ["productivity-qa-contract.cjs", "verify-productivity-publication.cjs",
                    "test-field-evidence-release.cjs", "verify-catalog-app-routes.cjs",
                    "publication-required-routes.cjs", "verify-operational-artifact.cjs",
                    "prepare-productivity-qa.cjs", "test-productivity-qa.cjs"]
        for script in required:
            with self.subTest(script=script):
                self.assertTrue((ROOT / "scripts" / script).is_file(), script)

    def test_semantic_checks_reject_failure_or_artifact_mutation(self):
        result = subprocess.run(["node", "--test", "scripts/test-productivity-publication.cjs"],
                                cwd=ROOT, text=True, capture_output=True)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def test_only_canonical_publisher_assembles_and_uploads_pages(self):
        for filename in ("gh-pages.yml", "static-deploy.yml"):
            source = (WORKFLOWS / filename).read_text()
            self.assertIn("uses: ./.github/workflows/canonical-pages.yml", source)
            self.assertNotIn("actions/upload-pages-artifact@", source)
            self.assertNotIn("actions/deploy-pages@", source)
        self.assertNotIn("actions/upload-pages-artifact@", (WORKFLOWS / "deploy-on-push.yml").read_text())


if __name__ == "__main__":
    unittest.main()
