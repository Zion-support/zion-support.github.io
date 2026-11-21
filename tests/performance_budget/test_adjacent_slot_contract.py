"""The optional build acceleration cannot bypass existing semantic checks."""
import unittest
from test_contracts import WORKFLOW, shell, step


class AdjacentSlotContract(unittest.TestCase):
    def test_validate_install_and_recheck_before_real_build(self):
        validation = step("Validate adjacent slot cache")
        install = step("Cache unchanged adjacent slot names")
        self.assertIn("NODE_OPTIONS: --max-old-space-size=512", validation)
        self.assertIn("run: node scripts/ci/test-next-adjacent-slot-cache.cjs", validation)
        self.assertEqual(shell("Cache unchanged adjacent slot names"),
                         "node scripts/ci/install-next-adjacent-slot-cache.cjs\n"
                         "node scripts/ci/test-next-static-entry-loader.cjs")
        self.assertNotIn("continue-on-error", validation + install)
        self.assertNotIn("|| true", validation + install)
        order = ["Remove redundant pinned Next static-entry metadata",
                 "Validate adjacent slot cache", "Cache unchanged adjacent slot names",
                 "Validate bounded Next build observer", "Build site"]
        positions = [WORKFLOW.index("name: " + name) for name in order]
        self.assertEqual(positions, sorted(positions))


if __name__ == "__main__":
    unittest.main()
