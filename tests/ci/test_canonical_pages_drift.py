import importlib.util
import io
import json
import tarfile
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("drift", ROOT / "scripts/ci/canonical-pages-drift.py")
drift = importlib.util.module_from_spec(spec)
spec.loader.exec_module(drift)

SHA = "a" * 40
ENV = {"GITHUB_REF": "refs/heads/main", "SOURCE_SHA": SHA, "GITHUB_SHA": SHA,
       "GITHUB_RUN_ID": "45898439584", "GITHUB_RUN_ATTEMPT": "1"}
HOME = b"Zion Tech Group Apps Discovery"
OTHER = b"same exact body"


class CanonicalDrift(unittest.TestCase):
    def fixture(self, path, omit=None, extras=()):
        with tarfile.open(path, "w") as tar:
            for name in drift.ROUTES.values():
                if name == omit:
                    continue
                body = HOME if name == "index.html" else OTHER
                item = tarfile.TarInfo("./" + name)
                item.size = len(body)
                tar.addfile(item, io.BytesIO(body))
            for name, kind in extras:
                item = tarfile.TarInfo(name)
                item.type = kind
                tar.addfile(item)

    def run_audit(self, *, omit=None, extras=(), altered=None, env=ENV):
        with tempfile.TemporaryDirectory() as tmp:
            archive = Path(tmp) / "artifact.tar"
            result = Path(tmp) / "report.json"
            self.fixture(archive, omit=omit, extras=extras)

            def fetch(route):
                if route == altered:
                    return 200, b"different"
                return 200, HOME if route == "/" else OTHER

            code = drift.audit(archive, result, env, fetch=fetch)
            return code, json.loads(result.read_text())

    def test_exact_receipt(self):
        code, report = self.run_audit()
        self.assertEqual(code, 0, report)
        self.assertEqual(report["state"], "PASS")
        self.assertEqual(report["deploy_run_id"], 45898439584)
        self.assertEqual(report["deploy_run_attempt"], 1)
        self.assertEqual(report["source_sha"], SHA)
        self.assertEqual(report["source_artifact"], "canonical-pages-45898439584-1")
        self.assertEqual(len(report["checks"]), 20)

    def test_page_mismatch(self):
        code, report = self.run_audit(altered="/fr/apps/")
        self.assertEqual((code, report["failure_count"], report["state"]), (1, 1, "FAIL"))

    def test_home_requires_markers(self):
        self.assertEqual(self.run_audit(altered="/")[0], 1)

    def test_missing_archive_route(self):
        self.assertEqual(self.run_audit(omit="apps/index.html")[0], 1)

    def test_duplicate_path_rejected(self):
        self.assertEqual(self.run_audit(extras=[("apps/index.html", tarfile.REGTYPE)])[0], 1)

    def test_nonregular_unrelated_path_rejected(self):
        self.assertEqual(self.run_audit(extras=[("unrelated-link", tarfile.SYMTYPE)])[0], 1)

    def test_traversal_anywhere_rejected(self):
        self.assertEqual(self.run_audit(extras=[("../unexpected", tarfile.REGTYPE)])[0], 1)

    def test_wrong_sha_branch_and_attempt_rejected(self):
        for key, val in (("SOURCE_SHA", "b" * 40), ("GITHUB_REF", "refs/heads/feature"),
                         ("GITHUB_RUN_ATTEMPT", "0")):
            with self.subTest(key=key), self.assertRaises(ValueError):
                drift.provenance({**ENV, key: val})

    def test_incomplete_or_oversize_response_not_hashed(self):
        with self.assertRaises(ValueError):
            drift.read_body(io.BytesIO(b"ab"), 3)
        with self.assertRaises(ValueError):
            drift.read_body(io.BytesIO(b"ab"), drift.MAX_BODY + 1)


if __name__ == "__main__":
    unittest.main()
