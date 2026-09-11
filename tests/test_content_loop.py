#!/usr/bin/env python3
"""Unit tests for the Zion SEO content loop."""

from __future__ import annotations

import json
import sys
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.content_loop.quality import evaluate_html, word_count
from scripts.content_loop.render import render_article
from scripts.content_loop.select import slugify, spawn_satellites


MINI = {
    "slug": "test-quality-post",
    "lang": "en",
    "cluster": "Test",
    "title": "Test Quality Post for the Content Loop",
    "h1": "Test Quality Post for the Content Loop",
    "description": "A test article that must clear Zion quality gates: unique advice, schema, canonical, and a Discovery $99 call to action without fake ROI.",
    "keywords": ["test content loop", "quality gates"],
    "date": "2026-09-11",
    "read_minutes": 8,
    "tags": "Test",
    "excerpt": "Quality gates exist so thin stubs never ship.",
    "primary_keyword": "content loop quality gates",
    "intro": [
        "This intro exists so the word count clears the bar for a serious commercial page on <a href=\"/book/\">Discovery</a>.",
        "Internal links also point at <a href=\"/plans/\">plans</a> and <a href=\"/discovery/\">discovery</a>.",
    ],
    "sections": [
        {"h2": "Section one is the job", "paras": ["A first workflow is a job with a stop rule. " * 20]},
        {"h2": "Section two is isolation", "paras": ["Tenant isolation is the product, not a slogan. " * 20]},
        {"h2": "Section three is cost", "paras": ["We do not invent a savings percentage. " * 20]},
        {"h2": "Section four is the path", "paras": ["Book the paid Discovery. Implementation is scoped later. " * 20]},
    ],
    "faqs": [
        {"q": "Is this a stub?", "a": "No. Stubs are rejected by the gate."},
        {"q": "Is consultation free?", "a": "No. Discovery is paid."},
        {"q": "Do you guarantee ROI?", "a": "No. We map the first metric."},
    ],
    "cta": {"h2": "Book Discovery", "p": "Paid map, not a free consult."},
    "related": [{"href": "/blog/ai-automation-for-msps/", "label": "MSP agents"}],
    "satellites": [
        {"slug": "test-satellite-one", "title": "Test Satellite One", "angle": "Child topic", "primary_keyword": "satellite"}
    ],
}


class QualityTests(unittest.TestCase):
    def test_render_passes_gates(self):
        html = render_article(MINI)
        cfg = json.loads((ROOT / "content-loop" / "config.json").read_text())
        result = evaluate_html(html, cfg["quality_gates"])
        self.assertTrue(result["ok"], result["issues"])
        self.assertGreaterEqual(result["words"], 700)
        self.assertIn("/book/", html)
        self.assertIn("BlogPosting", html)
        self.assertNotIn("temporarily unavailable", html)

    def test_stub_fails(self):
        html = render_article(MINI)
        html = html.replace("Test Quality Post", "temporarily unavailable", 1)
        cfg = json.loads((ROOT / "content-loop" / "config.json").read_text())
        result = evaluate_html(html, cfg["quality_gates"])
        self.assertFalse(result["ok"])

    def test_word_count_ignores_css(self):
        html = "<style>body { color: red; extra extra extra }</style><p>Hello world again today</p>"
        self.assertLess(word_count(html), 12)

    def test_slugify(self):
        self.assertEqual(slugify("AI FinOps for SMBs!"), "ai-finops-for-smbs")

    def test_spawn_satellites(self):
        with tempfile.TemporaryDirectory() as tmp:
            bank = Path(tmp) / "bank.json"
            n = spawn_satellites(bank, MINI, per_publish=3, max_queue=10)
            self.assertEqual(n, 1)
            data = json.loads(bank.read_text())
            self.assertEqual(data["topics"][0]["parent"], "test-quality-post")


if __name__ == "__main__":
    unittest.main()
