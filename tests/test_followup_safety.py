"""Offline only: never import the operational worker or Gmail helpers."""
import ast
import copy
import json
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
import sys
import unittest
from unittest.mock import Mock

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts/outreach'))
from followup_safety import evaluate_followup, require_live_clearance, FollowupBlocked, WEEK_SECONDS

NOW = 2000000

def evidence():
    return dict(history_complete=True, suppression_complete=True, query_ok=True,
        checked_at=NOW, suppressed=False, send_state='clear',
        required_accounts=['ceo@zion.test', 'sdm@zion.test', 'carlos@zion.test'],
        checked_accounts=['ceo@zion.test', 'sdm@zion.test', 'carlos@zion.test'],
        history=[dict(id='sent-1', ts=NOW-WEEK_SECONDS, kind='outbound', **{'from':'ceo@zion.test'})])

def attempt(_):
    try:
        require_live_clearance(evidence(), NOW)
    except FollowupBlocked:
        return 'blocked'
    return 'UNSAFE'

class SafetyTests(unittest.TestCase):
    def test_167h59_and_168h(self):
        e = evidence()
        e['history'][0]['ts'] += 60
        self.assertEqual(evaluate_followup(e, NOW), 'cooldown_168h')
        e['history'][0]['ts'] -= 60
        self.assertEqual(evaluate_followup(e, NOW), 'eligible_for_coordinator_review')

    def test_other_zion_senders_reset_clock(self):
        for sender in ['sdm@zion.test', 'carlos@zion.test']:
            e = evidence()
            e['history'].append(dict(id='sent-2', ts=NOW-1, kind='outbound', **{'from':sender}))
            self.assertEqual(evaluate_followup(e, NOW), 'cooldown_168h')

    def test_human_reply_goes_to_review(self):
        e = evidence()
        e['history'].append(dict(id='reply-1', ts=NOW-10, kind='human_reply', **{'from':'buyer@example.test'}))
        self.assertEqual(evaluate_followup(e, NOW), 'human_reply_review')

    def test_internal_copy_does_not_reset_clock(self):
        e = evidence()
        e['history'].append(dict(id='copy-1', ts=NOW-1, kind='internal_copy', **{'from':'sdm@zion.test'}))
        self.assertEqual(evaluate_followup(e, NOW), 'eligible_for_coordinator_review')

    def test_suppression_and_query_errors(self):
        for key, value in [('suppressed', True), ('suppressed', None), ('query_ok', False),
                           ('suppression_complete', False), ('history_complete', False)]:
            e = evidence(); e[key] = value
            self.assertNotEqual(evaluate_followup(e, NOW), 'eligible_for_coordinator_review')

    def test_uncertain_and_reserved_send(self):
        for state in ['unknown', 'reserved', 'sending', 'sent', None]:
            e = evidence(); e['send_state'] = state
            self.assertEqual(evaluate_followup(e, NOW), 'unreconciled_send')

    def test_corrupt_evidence(self):
        for bad in [None, [], {}, '{broken', json.loads('{"history":null}')]:
            self.assertNotEqual(evaluate_followup(bad, NOW), 'eligible_for_coordinator_review')
        for bad in [float('nan'), float('inf'), True, '123', -1]:
            e = evidence(); e['history'][0]['ts'] = bad
            self.assertEqual(evaluate_followup(e, NOW), 'invalid_evidence')

    def test_account_coverage_and_staleness(self):
        e = evidence(); e['checked_accounts'].pop()
        self.assertEqual(evaluate_followup(e, NOW), 'account_scope_incomplete')
        e = evidence(); e['checked_at'] = NOW-61
        self.assertEqual(evaluate_followup(e, NOW), 'stale_evidence')

    def test_duplicate_receipt_and_unknown_inbound(self):
        e = evidence(); e['history'].append(copy.deepcopy(e['history'][0]))
        self.assertEqual(evaluate_followup(e, NOW), 'invalid_history')
        e = evidence(); e['history'].append(dict(id='auto-1', ts=NOW-10, kind='unknown', **{'from':'buyer@example.test'}))
        self.assertEqual(evaluate_followup(e, NOW), 'classification_review')

    def test_eligibility_never_enables_live(self):
        with self.assertRaises(FollowupBlocked):
            require_live_clearance(evidence(), NOW)

    def test_multiple_processes_all_block(self):
        # Tests containment, NOT a distributed lock or exactly-once transport.
        with ProcessPoolExecutor(max_workers=4) as pool:
            self.assertEqual(list(pool.map(attempt, range(12))), ['blocked']*12)

    def test_contained_followup_entrypoints_block_before_dependencies(self):
        targets = [('outreach_worker_automation.py', 'send_ceo_reply', ('t','a','s','b','m')),
                   ('send_hot_followup_ceo.py','send_via_helper',('a','s','b','m')),
                   ('send_hot_followup_ceo.py','main',())]
        for filename, name, args in targets:
            tree = ast.parse((ROOT/'scripts/outreach'/filename).read_text())
            fn = next(n for n in tree.body if isinstance(n, ast.FunctionDef) and n.name == name)
            # Extract function alone: no module initialization/authentication occurs.
            module = ast.Module(body=[fn], type_ignores=[])
            scope = {}
            exec(compile(module, filename, 'exec'), scope)
            with self.assertRaises(FollowupBlocked):
                scope[name](*args)


    def worker_send_scope(self, error):
        source = (ROOT/'scripts/outreach/outreach_worker_automation.py').read_text()
        fn = next(n for n in ast.parse(source).body if isinstance(n, ast.FunctionDef)
                  and n.name == 'run_high_frequency_outreach')
        block = next(n for n in ast.walk(fn) if isinstance(n, ast.Try)
                     and any(isinstance(c, ast.Call) and isinstance(c.func, ast.Name)
                             and c.func.id == 'send_ceo_reply' for c in ast.walk(n)))
        # Execute only the real contact-send try/except inside a synthetic loop.
        # No operational module initialization, Gmail, filesystem state or network.
        loop = ast.For(target=ast.Name(id='_contact', ctx=ast.Store()),
                       iter=ast.List(elts=[ast.Constant(None)], ctx=ast.Load()),
                       body=[block], orelse=[])
        scope = dict(FollowupBlocked=FollowupBlocked, DRY_RUN=False,
                     REQUIRES_APPROVAL=False, email='buyer@example.test',
                     thread_id='thread-test', contact_key='contact-test',
                     lead=dict(body='Test', subject='Test', msg_id='message-test'),
                     sent_count=0, skipped=0, sanitize_outreach_body=lambda body: body,
                     send_ceo_reply=Mock(side_effect=error), record_send=Mock(),
                     mark_seen_message_id=Mock(), record_bounce=Mock(), print=Mock())
        exec(compile(ast.fix_missing_locations(ast.Module(body=[loop], type_ignores=[])),
                     '<isolated-worker-send-block>', 'exec'), scope)
        return scope

    def test_policy_hold_is_skipped_without_bounce_or_sent_state(self):
        scope = self.worker_send_scope(FollowupBlocked('outreach_live_hold'))
        self.assertEqual(scope['skipped'], 1)
        self.assertEqual(scope['sent_count'], 0)
        for name in ['record_bounce', 'record_send', 'mark_seen_message_id']:
            scope[name].assert_not_called()
        scope['print'].assert_called_once_with('CONTACT_END', 'buyer@example.test',
                                              'policy_hold', flush=True)

    def test_non_policy_error_keeps_existing_error_route(self):
        # Existing generic bounce classification is a separate known limitation.
        scope = self.worker_send_scope(RuntimeError('synthetic error'))
        scope['record_bounce'].assert_called_once()
        self.assertEqual(scope['sent_count'], 0)
        scope['record_send'].assert_not_called()
        scope['mark_seen_message_id'].assert_not_called()

if __name__ == '__main__':
    unittest.main()
