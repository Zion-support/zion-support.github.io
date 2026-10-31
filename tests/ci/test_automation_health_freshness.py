"""Black-box regressions for the static snapshot freshness CLI."""

import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[2] / "scripts/automation/check-automation-health-static-freshness.cjs"
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
    def run_guard(self, hours=UNSET, timestamp="2026-10-31T00:00:00.000Z", raw=UNSET):
        with tempfile.TemporaryDirectory() as directory:
            snapshot = Path(directory) / "public/api/automation-health.json"
            snapshot.parent.mkdir(parents=True)
            if raw is UNSET:
                snapshot.write_text(json.dumps({"timestamp": timestamp}), encoding="utf-8")
            elif raw is not None:
                snapshot.write_text(raw, encoding="utf-8")
            environment = os.environ.copy()
            environment.pop("AUTOMATION_HEALTH_STATIC_MAX_HOURS", None)
            if hours is not UNSET:
                environment["AUTOMATION_HEALTH_STATIC_MAX_HOURS"] = hours
            result = subprocess.run(
                ["node", "-e", FIXED_CLOCK, str(SCRIPT)],
                cwd=directory, env=environment, text=True, capture_output=True, timeout=10,
            )
            self.assertIn(result.returncode, (0, 1), result.stderr)
            return result, json.loads(result.stdout)

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


if __name__ == "__main__":
    unittest.main()
