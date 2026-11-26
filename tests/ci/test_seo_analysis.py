#!/usr/bin/env python3
"""Offline regressions for the SEO optimizer's real command-line helper."""

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import textwrap
import unittest


HELPER = Path(__file__).resolve().parents[2] / "scripts/automation/seo-analysis.py"
WORKFLOW = HELPER.parents[2] / ".github/workflows/ai-seo-content-optimizer.yml"


class SeoAnalysisContract(unittest.TestCase):
    def invoke(self, command, raw, *options):
        with tempfile.TemporaryDirectory() as directory:
            source = Path(directory) / "input.json"
            source.write_text(raw, encoding="utf-8")
            return subprocess.run(
                [sys.executable, str(HELPER), command, str(source), *options],
                text=True,
                capture_output=True,
                check=False,
            )

    def response(self, value, status="200"):
        return self.invoke("response", json.dumps(value), "--http-status", status)

    def assert_rejected(self, result):
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(result.stdout, "")
        self.assertIn("SEO analysis failed:", result.stderr)

    def test_json_null_and_booleans_are_data(self):
        metadata = [{"route": "/example", "title": None, "hasTitle": False,
                     "hasDescription": True}]
        result = self.invoke("request", json.dumps(metadata))
        self.assertEqual(result.returncode, 0, result.stderr)
        payload = json.loads(result.stdout)
        self.assertEqual(payload["model"], "openrouter/auto")
        self.assertEqual(payload["max_tokens"], 2048)
        data = payload["messages"][1]["content"].split("Page metadata:\n", 1)[1]
        self.assertEqual(json.loads(data), metadata)

    def test_unicode_quotes_backslashes_and_newlines_round_trip(self):
        metadata = [{"title": "São Paulo: \\" + ' "quoted"\nsecond line',
                     "description": "日本語 • français"}]
        result = self.invoke("request", json.dumps(metadata))
        self.assertEqual(result.returncode, 0, result.stderr)
        payload = json.loads(result.stdout)
        data = payload["messages"][1]["content"].split("Page metadata:\n", 1)[1]
        self.assertEqual(json.loads(data), metadata)

    def test_audit_content_is_not_executed(self):
        with tempfile.TemporaryDirectory() as directory:
            sentinel = Path(directory) / "must-not-exist"
            text = f"$(touch {sentinel}); __import__('pathlib').Path({str(sentinel)!r}).touch()"
            result = self.invoke("request", json.dumps([{"title": text}]))
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertFalse(sentinel.exists())
            payload = json.loads(result.stdout)
            data = payload["messages"][1]["content"].split("Page metadata:\n", 1)[1]
            self.assertEqual(json.loads(data)[0]["title"], text)

    def test_request_retains_twenty_page_limit(self):
        metadata = [{"route": f"/example-{i}"} for i in range(30)]
        result = self.invoke("request", json.dumps(metadata))
        self.assertEqual(result.returncode, 0, result.stderr)
        payload = json.loads(result.stdout)
        data = payload["messages"][1]["content"].split("Page metadata:\n", 1)[1]
        self.assertEqual(json.loads(data), metadata[:20])

    def test_invalid_metadata_is_rejected(self):
        for value in ({}, None, [None], ["page"], "metadata"):
            with self.subTest(value=value):
                self.assert_rejected(self.invoke("request", json.dumps(value)))

    def test_malformed_metadata_is_rejected(self):
        for raw in ("", "{broken", '[{"value": NaN}]'):
            with self.subTest(raw=raw):
                self.assert_rejected(self.invoke("request", raw))

    def test_valid_analysis_is_preserved(self):
        analysis = "## SEO review\n\nImprove this title — ação.\n"
        result = self.response({"choices": [{"message": {"content": analysis}}]})
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout, analysis + "\n")

    def test_http_failures_reject_even_a_valid_looking_body(self):
        value = {"choices": [{"message": {"content": "Do not publish this"}}]}
        for status in ("000", "301", "401", "402", "429", "500"):
            with self.subTest(status=status):
                result = self.response(value, status)
                self.assert_rejected(result)
                self.assertNotIn("Do not publish this", result.stderr)

    def test_http_error_precedes_malformed_body(self):
        result = self.invoke("response", "<html>payment error</html>", "--http-status", "402")
        self.assert_rejected(result)
        self.assertIn("HTTP 402", result.stderr)
        self.assertNotIn("payment error", result.stderr)

    def test_provider_error_with_http_200_is_rejected(self):
        for error in ({"code": 402, "message": "private-provider-message"}, None):
            with self.subTest(error=error):
                result = self.response({"error": error})
                self.assert_rejected(result)
                self.assertNotIn("private-provider-message", result.stderr)

    def test_empty_or_wrong_response_shapes_are_rejected(self):
        values = [None, [], {}, {"choices": []}, {"choices": {}},
                  {"choices": [None]}, {"choices": [{}]},
                  {"choices": [{"message": None}]},
                  {"choices": [{"message": {"content": None}}]},
                  {"choices": [{"message": {"content": []}}]},
                  {"choices": [{"message": {"content": " \n\t"}}]}]
        for value in values:
            with self.subTest(value=value):
                self.assert_rejected(self.response(value))

    def test_malformed_response_is_rejected(self):
        for raw in ("", "not JSON", "[", '{"choices": NaN}'):
            with self.subTest(raw=raw):
                self.assert_rejected(self.invoke("response", raw, "--http-status", "200"))


class SeoWorkflowContract(unittest.TestCase):
    def run_analysis_step(self, metadata, body, *, http_status="200", curl_exit="0",
                          api_key="synthetic-test-key"):
        # Execute the actual workflow shell block with an offline curl fixture.
        workflow = WORKFLOW.read_text(encoding="utf-8")
        step = workflow.split("      - name: AI SEO analysis via OpenRouter\n", 1)[1]
        step = step.split("      - name: Build verification\n", 1)[0]
        script = textwrap.dedent(step.split("        run: |\n", 1)[1])
        script = script.replace("${{ github.repository }}", "example/synthetic-site")
        self.assertNotIn("${{", script)

        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "scripts/automation").mkdir(parents=True)
            shutil.copyfile(HELPER, root / "scripts/automation/seo-analysis.py")
            reports = root / "seo-reports"
            reports.mkdir()
            (reports / "metadata-audit.json").write_text(metadata, encoding="utf-8")
            runtime = root / "runtime"
            runtime.mkdir()
            binaries = root / "bin"
            binaries.mkdir()
            fake_curl = binaries / "curl"
            fake_curl.write_text(
                f"#!{sys.executable}\n" + textwrap.dedent("""\
                import json, os, sys
                from pathlib import Path
                args = sys.argv[1:]
                assert '--fail-with-body' in args
                request = args[args.index('--data-binary') + 1]
                assert request.startswith('@')
                data = json.loads(Path(request[1:]).read_text(encoding='utf-8'))
                Path(os.environ['CAPTURE_PATH']).write_text(json.dumps(data), encoding='utf-8')
                output = args[args.index('--output') + 1]
                Path(output).write_text(os.environ['RESPONSE_BODY'], encoding='utf-8')
                print(os.environ['HTTP_STATUS'], end='')
                raise SystemExit(int(os.environ['CURL_EXIT']))
                """),
                encoding="utf-8",
            )
            fake_curl.chmod(0o755)
            summary = root / "summary.md"
            capture = root / "captured-request.json"
            env = {
                "PATH": str(binaries) + os.pathsep + os.defpath,
                "RUNNER_TEMP": str(runtime),
                "GITHUB_STEP_SUMMARY": str(summary),
                "OPENROUTER_API_KEY": api_key,
                "CAPTURE_PATH": str(capture),
                "RESPONSE_BODY": body,
                "HTTP_STATUS": http_status,
                "CURL_EXIT": curl_exit,
            }
            result = subprocess.run(
                ["bash", "--noprofile", "--norc", "-e", "-o", "pipefail", "-c", script],
                cwd=root, env=env, text=True, capture_output=True, check=False,
            )
            analysis = reports / "ai-seo-analysis.md"
            return {
                "result": result,
                "analysis": analysis.read_text() if analysis.exists() else None,
                "summary": summary.read_text() if summary.exists() else None,
                "request": json.loads(capture.read_text()) if capture.exists() else None,
                "runtime_files": list(runtime.iterdir()),
            }

    def test_workflow_serializes_real_json_and_publishes_valid_analysis(self):
        metadata = [{"title": None, "hasTitle": False, "hasDescription": True,
                     "description": "ação\nquoted \"data\"; $(echo should-not-execute)"}]
        body = json.dumps({"choices": [{"message": {"content": "## Synthetic review"}}]})
        outcome = self.run_analysis_step(json.dumps(metadata), body)
        self.assertEqual(outcome["result"].returncode, 0, outcome["result"].stderr)
        data = outcome["request"]["messages"][1]["content"].split("Page metadata:\n", 1)[1]
        self.assertEqual(json.loads(data), metadata)
        self.assertEqual(outcome["analysis"], "## Synthetic review\n")
        self.assertIn("## Synthetic review", outcome["summary"])
        self.assertEqual(outcome["runtime_files"], [])

    def test_workflow_does_not_publish_provider_or_transport_failures(self):
        cases = [
            ("402", "22", '{"error":{"message":"synthetic payment error"}}'),
            ("000", "28", ""),
            ("200", "0", '{"error":{"message":"synthetic provider error"}}'),
            ("200", "0", '{"choices":[]}'),
            ("200", "0", 'not JSON'),
        ]
        for status, exit_code, body in cases:
            with self.subTest(status=status, exit_code=exit_code, body=body):
                outcome = self.run_analysis_step('[{"title":null}]', body,
                                                 http_status=status, curl_exit=exit_code)
                self.assertNotEqual(outcome["result"].returncode, 0)
                self.assertIsNone(outcome["analysis"])
                self.assertIsNone(outcome["summary"])
                self.assertEqual(outcome["runtime_files"], [])

    def test_workflow_rejects_invalid_metadata_before_request(self):
        outcome = self.run_analysis_step('not JSON', '{}')
        self.assertNotEqual(outcome["result"].returncode, 0)
        self.assertIsNone(outcome["request"])
        self.assertIsNone(outcome["analysis"])
        self.assertEqual(outcome["runtime_files"], [])

    def test_existing_missing_key_skip_remains_explicit(self):
        outcome = self.run_analysis_step('[]', '{}', api_key="")
        self.assertEqual(outcome["result"].returncode, 0)
        self.assertIn("OPENROUTER_API_KEY not set", outcome["result"].stdout)
        self.assertIsNone(outcome["request"])
        self.assertIsNone(outcome["analysis"])


if __name__ == "__main__":
    unittest.main()
