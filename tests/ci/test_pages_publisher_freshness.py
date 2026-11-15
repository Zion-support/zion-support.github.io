"""Static publisher contracts: measured-only updates, main-only, authenticated dispatch."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[2]
PUBLISHER = ROOT / 'scripts/automation/publish-health-snapshot.cjs'
GUARD = ROOT / '.github/workflows/ai-automation-health-static-freshness-guard.yml'


class HealthPublisherContracts(unittest.TestCase):
    def test_publisher_requires_main_and_fresh_measured_routes(self):
        source = PUBLISHER.read_text(encoding='utf-8')
        self.assertIn("process.env.GITHUB_REF!=='refs/heads/main'", source)
        self.assertIn('Date.now()-Date.parse(snapshot.timestamp)', source)
        self.assertIn('snapshot.routes.length===0', source)
        self.assertIn('age>600000', source)
        self.assertIn("'Authorization':`Bearer ${token}`", source)

    def test_publish_dispatch_is_after_successful_snapshot_update(self):
        source = PUBLISHER.read_text(encoding='utf-8')
        self.assertIn("method:'PUT'", source)
        self.assertIn("method:'POST'", source)
        self.assertLess(source.index("method:'PUT'"), source.index("method:'POST'"))
        self.assertIn('static-deploy.yml/dispatches', source)
        self.assertIn("if(!update.ok)throw new Error", source)
        self.assertIn("if(!dispatch.ok)throw new Error", source)

    def test_freshness_is_evaluated_before_refresh_and_issue_handling(self):
        source = GUARD.read_text(encoding='utf-8')
        check = source.index('name: Evaluate published health snapshot before refreshing')
        stale = source.index('name: Escalate stale static health snapshot')
        refresh = source.index('name: Refresh snapshot from actual production observations')
        publish = source.index('name: Persist and publish the measured snapshot')
        self.assertLess(check, stale)
        self.assertLess(stale, refresh)
        self.assertLess(refresh, publish)
        self.assertIn('continue-on-error: true', source)
        self.assertIn("steps.refresh.outcome == 'success'", source)
        self.assertIn('name: Fail when the previously published snapshot was stale', source)


if __name__ == '__main__':
    unittest.main()
