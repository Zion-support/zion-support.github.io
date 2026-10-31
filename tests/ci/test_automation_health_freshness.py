"""Black-box regressions for the static snapshot freshness CLI."""

import json
import os
import re
from pathlib import Path
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[2]
SCRIPT = ROOT / "scripts/automation/check-automation-health-static-freshness.cjs"
GUARD = ROOT / ".github/workflows/ai-automation-health-static-freshness-guard.yml"
REGRESSION = ROOT / ".github/workflows/automation-health-freshness-test.yml"
UNSET = object()
FIXED_CLOCK = """
const OriginalDate = Date;
const now = OriginalDate.parse('2026-10-31T12:00:00.000Z');
global.Date = class extends OriginalDate {
  constructor(...args) { super(...(args.length ? args : [now])); }
  static now() { return now; }
};
require(process.argv[1]);
"""


class AutomationHealthFreshnessTest(unittest.TestCase):
    def run_guard(self, hours=UNSET, timestamp="2026-10-31T00:00:00.000Z", raw=UNSET, with_output=True):
        with tempfile.TemporaryDirectory() as directory:
            snapshot = Path(directory) / "public/api/automation-health.json"
            snapshot.parent.mkdir(parents=True)
            if raw is UNSET:
                snapshot.write_text(json.dumps({"timestamp": timestamp}), encoding="utf-8")
            elif raw is not None:
                snapshot.write_text(raw, encoding="utf-8")
            before = snapshot.read_bytes() if snapshot.exists() else None
            output = Path(directory) / "step-output"
            environment = os.environ.copy()
            environment.pop("GITHUB_OUTPUT", None)
            if with_output:
                output.write_text("existing_output=preserved\n")
                environment["GITHUB_OUTPUT"] = str(output)
            environment.pop("AUTOMATION_HEALTH_STATIC_MAX_HOURS", None)
            if hours is not UNSET:
                environment["AUTOMATION_HEALTH_STATIC_MAX_HOURS"] = hours
            result = subprocess.run(
                ["node", "-e", FIXED_CLOCK, str(SCRIPT)],
                cwd=directory, env=environment, text=True, capture_output=True, timeout=10,
            )
            self.assertIn(result.returncode, (0, 1), result.stderr)
            report = json.loads(result.stdout)
            report_path = Path(directory) / "automation/reports/automation-health-static-freshness-latest.json"
            self.assertTrue(report_path.is_file())
            self.assertEqual(report_path.read_text(), result.stdout)
            self.assertEqual(json.loads(report_path.read_text()), report)
            self.last_output = output.read_text() if output.exists() else None
            if with_output:
                self.assertEqual(self.last_output, "existing_output=preserved\nstatic_health_fresh=" +
                                 report["staticHealthFresh"] + "\n")
            else:
                self.assertIsNone(self.last_output)
            self.assertEqual(snapshot.read_bytes() if snapshot.exists() else None, before)
            return result, report

    def test_unset_and_empty_use_and_report_the_same_default(self):
        for hours in (UNSET, ""):
            with self.subTest(hours=repr(hours)):
                result, report = self.run_guard(hours)
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertEqual(report["maxHoursAllowed"], 24)
                self.assertEqual(report["staticHealthAgeHours"], 12)
                self.assertEqual(report["staticHealthFresh"], "true")

    def test_explicit_lower_threshold_rejects_an_older_snapshot(self):
        result, report = self.run_guard("6")
        self.assertEqual(result.returncode, 1)
        self.assertEqual(report["maxHoursAllowed"], 6)
        self.assertEqual(report["staticHealthFresh"], "false")

    def test_fractional_threshold_is_preserved(self):
        result, report = self.run_guard("12.5")
        self.assertEqual(result.returncode, 0)
        self.assertEqual(report["maxHoursAllowed"], 12.5)

    def test_threshold_boundary_is_inclusive(self):
        result, report = self.run_guard("12")
        self.assertEqual(result.returncode, 0)
        self.assertEqual(report["maxHoursAllowed"], 12)
        result, report = self.run_guard("11.999")
        self.assertEqual(result.returncode, 1)

    def test_explicit_zero_does_not_fall_back_to_default(self):
        result, report = self.run_guard("0", timestamp="2026-10-31T12:00:00.000Z")
        self.assertEqual(result.returncode, 0)
        self.assertEqual(report["maxHoursAllowed"], 0)
        result, report = self.run_guard("0", timestamp="2026-10-31T11:59:59.000Z")
        self.assertEqual(result.returncode, 1)
        self.assertEqual(report["maxHoursAllowed"], 0)

    def test_nonnumeric_thresholds_fail_without_claiming_a_default(self):
        for hours in ("bad", "NaN"):
            with self.subTest(hours=hours):
                result, report = self.run_guard(hours)
                self.assertEqual(result.returncode, 1)
                self.assertIsNone(report["maxHoursAllowed"])
                self.assertEqual(report["staticHealthFresh"], "false")

    def test_actual_stale_snapshot_remains_a_failure(self):
        result, report = self.run_guard("", timestamp="2026-07-07T23:06:26.830Z")
        self.assertEqual(result.returncode, 1)
        self.assertEqual(report["coreStatus"], "stale")
        self.assertEqual(report["maxHoursAllowed"], 24)
        self.assertEqual(report["staticHealthTimestamp"], "2026-07-07T23:06:26.830Z")

    def test_future_snapshot_is_rejected(self):
        result, report = self.run_guard(timestamp="2026-11-01T12:00:00.000Z")
        self.assertEqual(result.returncode, 1)
        self.assertEqual(report["staticHealthFresh"], "false")

    def test_missing_empty_and_malformed_snapshot_fail_closed(self):
        for raw in (None, "", "{broken", "{}"):
            with self.subTest(raw=raw):
                result, report = self.run_guard(raw=raw)
                self.assertEqual(result.returncode, 1)
                self.assertFalse(report["staticHealthValid"])
                self.assertEqual(report["staticHealthFresh"], "false")

    def test_invalid_timestamp_remains_a_failure(self):
        result, report = self.run_guard(timestamp="not-a-date")
        self.assertEqual(result.returncode, 1)
        self.assertEqual(report["staticHealthFresh"], "false")

    def test_generated_at_fallback_is_preserved(self):
        result, report = self.run_guard(raw='{"generatedAt":"2026-10-31T11:00:00.000Z"}')
        self.assertEqual(result.returncode, 0)
        self.assertEqual(report["staticHealthAgeHours"], 1)


    def test_controlled_output_does_not_interpolate_source_timestamp(self):
        result, report = self.run_guard(timestamp="bad\nstatic_health_fresh=true")
        self.assertEqual(result.returncode, 1)
        self.assertEqual(report["staticHealthFresh"], "false")
        self.assertEqual(self.last_output, "existing_output=preserved\nstatic_health_fresh=false\n")

    def test_local_cli_without_actions_output_still_writes_report(self):
        result, report = self.run_guard(with_output=False)
        self.assertEqual(result.returncode, 0)
        self.assertEqual(report["maxHoursAllowed"], 24)
        self.assertIsNone(self.last_output)


CONDITION_HARNESS = r"""
const fs = require('node:fs');
const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const steps = {freshness: {outcome: input.outcome, outputs: {static_health_fresh: input.output}}};
const success = () => input.success;
const failure = () => input.failure;
const cancelled = () => input.cancelled;
const explicitStatus = /\b(?:success|failure|cancelled|always)\s*\(/.test(input.expression);
const condition = new Function('steps', 'success', 'failure', 'cancelled',
  'return (' + input.expression + ')')(steps, success, failure, cancelled);
// Model GitHub's documented implicit success() only when no status function
// is present. This is an expression fixture, not a hosted runner assertion.
process.stdout.write(JSON.stringify(Boolean(condition && (explicitStatus || success()))));
"""


class SourceGuardWorkflowTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.source = GUARD.read_text()

    def condition(self, name):
        block = re.search(r"(?ms)^      - name: " + re.escape(name) + r"\n(.*?)(?=^      - |\Z)", self.source)
        self.assertIsNotNone(block)
        match = re.search(r"(?m)^        if: (.+)$", block.group(1))
        self.assertIsNotNone(match)
        return match.group(1)

    def evaluate(self, expression, outcome, output, success=False, failure=False, cancelled=False):
        result = subprocess.run(["node", "-e", CONDITION_HARNESS], input=json.dumps({
            "expression": expression, "outcome": outcome, "output": output,
            "success": success, "failure": failure, "cancelled": cancelled,
        }), text=True, capture_output=True, timeout=10)
        self.assertEqual(result.returncode, 0, result.stderr)
        return json.loads(result.stdout)

    def test_executed_stale_or_invalid_check_reaches_intended_escalation_condition(self):
        expression = self.condition("Escalate stale static health snapshot")
        for description in ("stale", "malformed", "missing"):
            with self.subTest(description=description):
                self.assertTrue(self.evaluate(expression, "failure", "false", failure=True))
        # The old condition was suppressed by implicit success() after exit1.
        self.assertFalse(self.evaluate("steps.freshness.outputs.static_health_fresh != 'true'",
                                       "failure", "false", failure=True))

    def test_skipped_check_cancellation_and_missing_output_do_not_escalate(self):
        expression = self.condition("Escalate stale static health snapshot")
        for outcome, output, cancelled in (("skipped", "", False), ("skipped", "false", False),
                                           ("failure", "false", True), ("failure", "", False),
                                           ("success", "false", False), ("success", "true", False)):
            with self.subTest(outcome=outcome, output=output, cancelled=cancelled):
                self.assertFalse(self.evaluate(expression, outcome, output, failure=True, cancelled=cancelled))

    def test_recovery_requires_true_output_and_successful_prior_steps(self):
        expression = self.condition("Close stale-static-health issue on recovery")
        self.assertTrue(self.evaluate(expression, "success", "true", success=True))
        self.assertFalse(self.evaluate(expression, "failure", "false", failure=True))
        self.assertFalse(self.evaluate(expression, "skipped", "", failure=True))
        self.assertFalse(self.evaluate(expression, "success", "true", cancelled=True))
        self.assertFalse(self.evaluate(expression, "success", "true", failure=True))

    def test_guard_preserves_source_main_ref_nonzero_check_and_existing_actions(self):
        self.assertIn("          ref: main\n", self.source)
        freshness = re.search(r"(?ms)^      - name: Evaluate static health freshness\n(.*?)(?=^      - |\Z)",
                              self.source).group(1)
        self.assertNotIn("continue-on-error:", freshness)
        self.assertIn("run: node scripts/automation/check-automation-health-static-freshness.cjs", freshness)
        self.assertIn("run: node scripts/automation/gh-issue-close-on-recovery.cjs", self.source)
        self.assertIn("node scripts/automation/gh-issue-dedupe-or-create.cjs", self.source)
        self.assertIn('ISSUE_COOLDOWN_HOURS: "24"', self.source)
        self.assertIn("path: automation/reports/automation-health-static-freshness-latest.json", self.source)
        self.assertIn("if: always()", self.source)
        # A workflow-only condition change must rerun the focused contract.
        self.assertEqual(REGRESSION.read_text().count(
            "      - '.github/workflows/ai-automation-health-static-freshness-guard.yml'\n"), 2)


if __name__ == "__main__":
    unittest.main()
