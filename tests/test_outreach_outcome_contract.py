import ast
import contextlib
import io
import json
import subprocess
import tempfile
import time
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock

ROOT = Path(__file__).resolve().parents[1]
WORKER = ROOT / 'scripts/outreach/outreach_worker_automation.py'
WORKFLOW = ROOT / '.github/workflows/outreach-live-llm-tailoring.yml'


class OfflineTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        missing = Path(self.tmp.name) / 'absent'
        tree = ast.parse(WORKER.read_text())
        # Never import the worker: its top-level code reads local auth/config.
        functions = [n for n in tree.body if isinstance(n, ast.FunctionDef)
                     and n.name in ('run_high_frequency_outreach', 'main')]
        self.g = dict(time=time, json=json, Path=Path, service=SimpleNamespace(users=lambda: None),
                      DRY_RUN=True, REQUIRES_APPROVAL=False, LLM_TAILOR_ENABLED=False,
                      LLM_API_ENDPOINT='', DEDUP_COOLDOWN_SECONDS=86400,
                      HOT_FOLLOWUP_REPLY_LEDGER=missing, LEDGER_FILE=missing,
                      BOUNCE_HISTORY_FILE=missing, PENDING_APPROVAL_FILE=missing,
                      DRY_RUN_REPORT=missing)
        for name in ('_llm_readiness_report', 'append_dry_run_report', 'append_pending_approval',
                     'record_send', 'mark_seen_message_id', 'save_state', 'record_bounce'):
            self.g[name] = Mock()
        self.g.update(_resolve_hot_label_id=lambda: None, search_all_folders=lambda *a, **kw: [],
                      _load_hot_followup_ledger_contacts=lambda: [dict(email='person@example.test', thread_id='t1', thread_subject='Proposal')],
                      load_state=lambda: {}, recent_sent_exists=lambda *a, **kw: False,
                      same_subject_recently_sent=lambda *a, **kw: False,
                      fetch_or_create_lead_from_inbox=lambda *a: dict(body='Fixture', subject='Proposal', msg_id='m1', lang='en'),
                      probe_thread_alive=lambda *a: True, sanitize_outreach_body=lambda body: body,
                      send_ceo_reply=Mock(return_value={'id':'receipt1', 'threadId':'t1'}))
        exec(compile(ast.Module(body=functions, type_ignores=[]), str(WORKER), 'exec'), self.g)

    def run_worker(self):
        with contextlib.redirect_stdout(io.StringIO()):
            return self.g['run_high_frequency_outreach']()

    def test_missing_and_boolean_client_fail_before_discovery(self):
        for client in (None, True):
            self.g['service'] = client
            result = self.run_worker()
            self.assertEqual(result['status'], 'auth_unavailable')
            self.g['send_ceo_reply'].assert_not_called()
            with contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(self.g['main'](), 1)

    def test_simulation_never_sends_or_records_receipt(self):
        result = self.run_worker()
        self.assertEqual((result['sent'], result['simulated'], result['mode']), (0, 1, 'dry_run'))
        self.g['send_ceo_reply'].assert_not_called()
        self.g['record_send'].assert_not_called()
        self.g['mark_seen_message_id'].assert_not_called()

    def test_approval_does_not_count_as_send(self):
        self.g.update(DRY_RUN=False, REQUIRES_APPROVAL=True)
        result = self.run_worker()
        self.assertEqual((result['sent'], result['pending_approval']), (0, 1))
        self.g['send_ceo_reply'].assert_not_called()

    def test_fake_live_receipt_counts_once(self):
        self.g['DRY_RUN'] = False
        result = self.run_worker()
        self.assertEqual((result['sent'], result['simulated']), (1, 0))
        self.g['record_send'].assert_called_once()

    def test_skips_and_exclusions_do_not_create_receipts(self):
        self.g['DRY_RUN'] = False
        for response in ({'skipped': True}, {'error': 'excluded'}):
            self.g['send_ceo_reply'].return_value = response
            result = self.run_worker()
            self.assertEqual((result['sent'], result['skipped']), (0, 1))
        self.g['record_send'].assert_not_called()

    def test_missing_receipt_is_failure(self):
        self.g['DRY_RUN'] = False
        self.g['send_ceo_reply'].return_value = {}
        result = self.run_worker()
        self.assertEqual((result['sent'], result['failed'], result['status']), (0, 1, 'send_failed'))
        self.g['record_send'].assert_not_called()

    def test_confirmed_send_survives_bookkeeping_failure(self):
        self.g['DRY_RUN'] = False
        self.g['record_send'].side_effect = OSError('fixture ledger unavailable')
        result = self.run_worker()
        self.assertEqual((result['sent'], result['failed'], result['status']), (1, 1, 'send_failed'))
        self.g['send_ceo_reply'].assert_called_once()

    def test_dry_run_requires_explicit_false(self):
        tree = ast.parse(WORKER.read_text())
        assignment = next(n for n in tree.body if isinstance(n, ast.Assign)
                          and any(isinstance(t, ast.Name) and t.id == 'DRY_RUN' for t in n.targets))
        for value, expected in [(None, True), ('', True), ('typo', True), ('1', True), ('true', True), ('0', False), ('false', False), ('no', False)]:
            fake_os = SimpleNamespace(getenv=lambda key, default: default if value is None else value)
            scope = {'os': fake_os}
            exec(compile(ast.Module(body=[assignment], type_ignores=[]), '<mode>', 'exec'), scope)
            self.assertEqual(scope['DRY_RUN'], expected)

    def test_cli_summary_and_exit(self):
        self.g['run_high_frequency_outreach'] = lambda: dict(status='ok', mode='dry_run', sent=0, simulated=3, pending_approval=0, failed=0)
        out = io.StringIO()
        with contextlib.redirect_stdout(out):
            self.assertEqual(self.g['main'](), 0)
        self.assertEqual(json.loads(out.getvalue().removeprefix('OUTREACH_RESULT '))['simulated'], 3)
        tree = ast.parse(WORKER.read_text())
        entry = tree.body[-1]
        self.assertEqual(ast.unparse(entry.body[0]), 'sys.exit(main())')

    def test_workflow_contract_and_pipe_failure(self):
        text = WORKFLOW.read_text()
        self.assertIn('concurrency:\n  group: outreach-live-llm-tailoring\n  cancel-in-progress: false', text)
        self.assertNotIn('continue-on-error:', text)
        self.assertIn("OUTREACH_DRY_RUN: ${{ secrets.OUTREACH_DRY_RUN || '1' }}", text)
        self.assertIn('shell: bash\n        run: |\n          set -euo pipefail', text)
        # Inert process exercises propagation through the exact pipe shape.
        result = subprocess.run(['/bin/bash', '-c', 'set -euo pipefail\n(exit 23) | tee /dev/null\necho unexpected'], capture_output=True)
        self.assertEqual(result.returncode, 23)
        self.assertNotIn(b'unexpected', result.stdout)


if __name__ == '__main__':
    unittest.main()
