"""Workflow integration invariants for the read-only Next build observer."""
import unittest
from test_contracts import WORKFLOW, shell, step


class BuildObserverContracts(unittest.TestCase):
    def test_original_build_deadline_and_exit_behavior_are_unchanged(self):
        self.assertEqual(shell("Build site"), "\n".join([
            "set -euo pipefail",
            'timeout --signal=TERM --kill-after=30s 300s npm run build 2>&1 | tee "$RUNNER_TEMP/performance-build.log"',
            "if [ ! -s out/index.html ]; then",
            '  echo "::error::Build did not produce out/index.html; refusing to audit a fallback."',
            "  exit 1",
            "fi",
            'echo "Next.js build succeeded"',
        ]))
        self.assertIn("    timeout-minutes: 20", WORKFLOW)

    def test_heap_limits_and_worker_setting_are_unchanged(self):
        block = step("Build site")
        self.assertIn("NODE_OPTIONS: --max-old-space-size=12288 --max-semi-space-size=64 --require=./scripts/ci/observe-next-build-memory.cjs", block)
        self.assertIn('NEXT_BUILD_WORKER_COUNT: "1"', block)

    def test_debug_is_only_the_audited_compiler_namespace(self):
        self.assertIn("        DEBUG: next:build:webpack-build\n", step("Build site"))
        self.assertEqual(WORKFLOW.count("DEBUG:"), 1)
        self.assertIn('ZION_NEXT_MEMORY_OBSERVER: "1"', step("Build site"))
        self.assertEqual(WORKFLOW.count("ZION_NEXT_MEMORY_OBSERVER:"), 1)
        self.assertNotIn("--heapsnapshot", WORKFLOW)
        self.assertNotIn("--heap-prof", WORKFLOW)

    def test_observer_is_validated_before_build(self):
        validation = step("Validate bounded Next build observer")
        self.assertIn("NODE_OPTIONS: --max-old-space-size=512", validation)
        self.assertIn("run: node scripts/ci/test-next-build-memory-observer.cjs", validation)
        self.assertNotIn("continue-on-error", validation)
        self.assertLess(WORKFLOW.index("name: Validate bounded Next build observer"), WORKFLOW.index("name: Build site"))

    def test_diagnostics_use_existing_build_log_without_raw_trace_artifacts(self):
        self.assertIn("${{ runner.temp }}/performance-build.log", step("Upload performance artifacts"))
        self.assertNotIn(".next/trace", WORKFLOW)
        self.assertEqual(WORKFLOW.count("--require=./scripts/ci/observe-next-build-memory.cjs"), 1)


if __name__ == "__main__":
    unittest.main()
