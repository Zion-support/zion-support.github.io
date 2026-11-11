"""Offline only: never import the operational worker or Gmail helpers."""
import ast
import copy
import json
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
import sys
import unittest

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

    def test_all_known_send_entrypoints_block_before_dependencies(self):
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

if __name__ == '__main__':
    unittest.main()
