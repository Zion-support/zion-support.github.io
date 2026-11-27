#!/usr/bin/env python3
"""Inert output contracts for the four service-page emitters.

Only the audited rendering function definitions are compiled. Import-time
initialization, data loading, outreach and deployment entry points never run.
All file writes are beneath TemporaryDirectory using fixed synthetic IDs.
"""
import ast
import hashlib
import logging
from pathlib import Path
import tempfile
from typing import Dict, List
import unittest

ROOT = Path(__file__).resolve().parents[2]
EMITTERS = (
    "service_pipeline_deployer.py",
    "service_pipeline_optimizer.py",
    "instant_pipeline_orchestrator.py",
    "comprehensive_growth_pipeline.py",
)
RENDER_FUNCTIONS = {
    "escape_js_string",
    "escape_html_content",
    "generate_features_list",
    "generate_benefits_list",
    "generate_landing_pages_for_new_services",
}
FIXTURES = [
    {
        "id": "fixture-standard",
        "name": "Synthetic Standard",
        "description": "Inert renderer contract, not a commercial offering.",
        "features": ["First", "Second", "Third", "Fourth", "Fifth", "Must be omitted"],
        "benefits": ["Synthetic benefit"],
        "pricing": {"basic": "$12.50", "pro": "50", "enterprise": "N/A"},
    },
    {
        "id": "fixture-escaped",
        "name": 'Synthetic "quotes" & <tag>',
        "description": "Literal @context and @type keywords, a backslash \\ and an apostrophe ' remain data.",
        "features": ['<&> "quoted"', "O'Reilly"],
        "benefits": ["A & B"],
        "pricing": {},
    },
    {"id": "fixture-fallback", "title": "Synthetic fallback"},
]
# Derived from the unchanged pre-repair emitters at c92e30fc, normalizing only
# their default component identifier. These cover every emitted byte, including
# metadata, canonical URLs, escaped payload, optional values and list limits.
EXPECTED_SHA256 = {
    "fixture-standard": "39274aa30785f075676699e89fe68e9b0fe991446fa2d3348aad8a4676ecbe7f",
    "fixture-escaped": "6747295a2ea061d1d82085257c2271fba3433a0eb55bf828748ea09e1867d467",
    "fixture-fallback": "28572472f725c561e20761917d987aa954b97ca521192a2a13abbb0ce6706934",
}


def renderer(filename, destination):
    source = ROOT / "scripts" / "growth-automation" / filename
    tree = ast.parse(source.read_text(encoding="utf-8"), filename=str(source))
    functions = [
        node for node in tree.body
        if isinstance(node, ast.FunctionDef) and node.name in RENDER_FUNCTIONS
    ]
    if len(functions) != len(RENDER_FUNCTIONS) or {node.name for node in functions} != RENDER_FUNCTIONS:
        raise AssertionError("The reviewed rendering function set changed")
    if any(node.decorator_list for node in functions):
        raise AssertionError("Renderer definitions must not execute decorators")
    if any(isinstance(node, (ast.Import, ast.ImportFrom)) for fn in functions for node in ast.walk(fn)):
        raise AssertionError("Renderer fixtures must not import pipeline modules")
    namespace = {
        "BASE": destination,
        "List": List,
        "Dict": Dict,
        "logger": logging.getLogger("inert-service-template-contract"),
    }
    isolated = ast.Module(body=functions, type_ignores=[])
    exec(compile(isolated, str(source), "exec"), namespace)
    return namespace["generate_landing_pages_for_new_services"]


class ServicePageTemplateTests(unittest.TestCase):
    def test_all_emitters_preserve_output_and_default_component_contract(self):
        for filename in EMITTERS:
            with self.subTest(emitter=filename), tempfile.TemporaryDirectory() as temp:
                destination = Path(temp)
                emit = renderer(filename, destination)
                self.assertEqual(emit(FIXTURES), len(FIXTURES))
                actual_files = sorted(str(p.relative_to(destination)) for p in destination.rglob("*") if p.is_file())
                expected_files = sorted("app/services/" + item["id"] + "/page.tsx" for item in FIXTURES)
                self.assertEqual(actual_files, expected_files)
                for item in FIXTURES:
                    with self.subTest(emitter=filename, fixture=item["id"]):
                        data = (destination / "app/services" / item["id"] / "page.tsx").read_bytes()
                        source = data.decode("utf-8")
                        self.assertEqual(source.count("export default function Page() {"), 1)
                        self.assertEqual(source.count("export default "), 1)
                        self.assertEqual(source.count("export const metadata = {"), 1)
                        self.assertNotIn("function ServicePage", source)
                        self.assertIn("https://ziontechgroup.com/services/" + item["id"], source)
                        self.assertEqual(hashlib.sha256(data).hexdigest(), EXPECTED_SHA256[item["id"]])

    def test_empty_input_emits_no_files(self):
        for filename in EMITTERS:
            with self.subTest(emitter=filename), tempfile.TemporaryDirectory() as temp:
                destination = Path(temp)
                self.assertEqual(renderer(filename, destination)([]), 0)
                self.assertEqual([p for p in destination.rglob("*") if p.is_file()], [])


if __name__ == "__main__":
    unittest.main()
