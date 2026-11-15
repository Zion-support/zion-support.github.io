"""Contract tests: publishing uses a complete static Pages artifact, never a stub."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[2]
PREPARE = ROOT / 'scripts/prepare-pages-out.sh'
DEPLOY = ROOT / '.github/workflows/static-deploy.yml'


class PagesArtifactContracts(unittest.TestCase):
    def test_artifact_preparation_preserves_public_source_and_fails_closed(self):
        source = PREPARE.read_text(encoding='utf-8')
        self.assertIn('set -euo pipefail', source)
        self.assertIn('rm -rf out', source)
        self.assertIn('cp -a public/. out/', source)
        self.assertIn('assert_money_path services/ai-automation/index.html', source)
        self.assertIn('assert_money_path plans/index.html', source)
        self.assertIn('assert_money_path discovery/index.html', source)
        self.assertIn('stub-sized', source)
        self.assertIn('PLACEHOLDER', source)
        self.assertIn('exit 1', source)

    def test_production_pages_deployment_uses_artifact_and_main_guard(self):
        source = DEPLOY.read_text(encoding='utf-8')
        self.assertIn('workflow_dispatch:', source)
        self.assertNotIn('\n  push:', source)
        self.assertIn('refs/heads/main', source)
        self.assertIn('bash scripts/prepare-pages-out.sh', source)
        self.assertIn('actions/upload-pages-artifact@v3', source)
        self.assertIn('path: out', source)
        self.assertIn('actions/deploy-pages@v4', source)
        self.assertLess(source.index('actions/upload-pages-artifact@v3'), source.index('actions/deploy-pages@v4'))


if __name__ == '__main__':
    unittest.main()
