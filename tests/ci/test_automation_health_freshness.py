"""CI adapter: execute the real, offline Node snapshot freshness regression suite."""
from pathlib import Path
import re
import subprocess
import unittest

ROOT = Path(__file__).resolve().parents[2]
TEST = ROOT / 'scripts/automation/check-automation-health-static-freshness.test.cjs'
CHECKER = ROOT / 'scripts/automation/check-automation-health-static-freshness.cjs'


class AutomationHealthFreshnessTests(unittest.TestCase):
    def test_real_node_regression_fixtures(self):
        """Do not replace a missing regression suite with a successful no-op."""
        self.assertTrue(TEST.is_file(), f'Missing Node regression suite: {TEST}')
        result = subprocess.run(
            ['node', '--test', str(TEST)], cwd=ROOT,
            capture_output=True, text=True, timeout=60, check=False,
        )
        self.assertEqual(result.returncode, 0, result.stdout + '\n' + result.stderr)
        passes = re.search(r'(?m)^# pass (\d+)\s*$', result.stdout)
        self.assertIsNotNone(passes, 'Cannot verify Node test pass count\n' + result.stdout)
        self.assertGreaterEqual(int(passes.group(1)), 8, 'Expected at least 8 real freshness tests')

    def test_checker_observes_published_url(self):
        content = CHECKER.read_text(encoding='utf-8')
        self.assertIn('https://ziontechgroup.com/api/automation-health.json', content)
        self.assertIn('AbortSignal.timeout(15000)', content)
        self.assertIn("report.staticHealthFresh =", content)
        self.assertIn("if (report.staticHealthFresh !== 'true') process.exitCode = 1", content)


if __name__ == '__main__':
    unittest.main()
