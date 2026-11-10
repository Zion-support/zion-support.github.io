"""The optimization cannot bypass the existing fail-closed build gates."""
import unittest
from test_contracts import WORKFLOW, shell, step

class DirectoryDependencyContract(unittest.TestCase):
    def test_validation_install_order_and_failures(self):
        validation = step("Validate directory snapshot coverage")
        install = step("Collapse redundant missing-file snapshots")
        self.assertIn("NODE_OPTIONS: --max-old-space-size=512", validation)
        for name in ("dependencies", "eligibility", "tokens", "snapshots", "cache"):
            self.assertIn("node scripts/ci/test-next-directory-" + name + ".cjs", validation)
        self.assertEqual(shell("Collapse redundant missing-file snapshots"),
                         "node scripts/ci/install-next-directory-dependencies.cjs\n"
                         "node scripts/ci/test-next-static-entry-loader.cjs")
        self.assertNotIn("continue-on-error", validation + install)
        self.assertNotIn("|| true", validation + install)
        order = ["Cache unchanged adjacent slot names", "Validate directory snapshot coverage",
                 "Collapse redundant missing-file snapshots", "Validate bounded Next build observer", "Build site"]
        positions = [WORKFLOW.index("name: " + name) for name in order]
        self.assertEqual(positions, sorted(positions))

if __name__ == "__main__":
    unittest.main()
