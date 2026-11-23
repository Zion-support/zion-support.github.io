#!/usr/bin/env python3
"""Run the canonical publisher's actual freshness and provenance regressions.

The prior entry point executed inline GitHub-script guards removed from the
publishers. PR #71963 now owns the equivalent event-SHA checkout, before/after
assembly freshness guards, queue, and consumer-result contracts. Load and run
that complete real unittest class instead of keeping a second stale copy.
Missing or empty suites fail closed. No API or deployment requests are made.
"""
from pathlib import Path
import runpy
import sys
import unittest

ROOT = Path(__file__).resolve().parents[2]
CONTRACTS = ROOT / "tests/publication/test_contracts.py"


def suite():
    namespace = runpy.run_path(str(CONTRACTS), run_name="canonical_freshness_contracts")
    case = namespace.get("PublicationContracts")
    if not isinstance(case, type) or not issubclass(case, unittest.TestCase):
        raise AssertionError("Canonical publisher contract class is missing")
    loaded = unittest.defaultTestLoader.loadTestsFromTestCase(case)
    if loaded.countTestCases() < 15:
        raise AssertionError("Canonical publisher freshness/provenance contract is incomplete")
    return loaded


if __name__ == "__main__":
    result = unittest.TextTestRunner(verbosity=2).run(suite())
    sys.exit(0 if result.wasSuccessful() else 1)
