"""Offline regression tests for the production route smoke check."""
import ast
import contextlib
import io
from pathlib import Path
import runpy
import ssl
import subprocess
import sys
import unittest
import urllib.error
from unittest.mock import Mock, call, patch

ROOT = Path(__file__).resolve().parents[2]
SCRIPT = ROOT / "smoke_routes.py"
ROUTES = [
    "/", "/about/", "/contact/", "/services/", "/pricing/", "/dashboard/",
    "/configurator/", "/status/", "/automation/", "/blog/",
    "/blog/cyber-incident-response-retainer-ready-before-breach/",
]


class SmokeRoutesTests(unittest.TestCase):
    def run_script(self, outcomes):
        output = io.StringIO()
        original_context = ssl._create_default_https_context
        with patch("urllib.request.urlopen", side_effect=outcomes) as request:
            with patch("ssl._create_unverified_context") as insecure_context:
                with contextlib.redirect_stdout(output):
                    with self.assertRaises(SystemExit) as result:
                        runpy.run_path(str(SCRIPT), run_name="__main__")
                insecure_context.assert_not_called()
        self.assertIs(ssl._create_default_https_context, original_context)
        self.assertEqual(request.call_args_list, [
            call("https://ziontechgroup.com" + route, timeout=30)
            for route in ROUTES
        ])
        return result.exception.code, ast.literal_eval(output.getvalue())

    def response(self, status=200):
        return Mock(status=status, headers={"content-type": "text/html"})

    def test_all_success_exits_zero_and_closes_responses(self):
        responses = [self.response() for _ in ROUTES]
        code, failures = self.run_script(responses)
        self.assertEqual(code, 0)
        self.assertEqual(failures, [])
        for response in responses:
            response.close.assert_called_once_with()

    def test_http_error_exits_one_and_continues_after_failure(self):
        responses = [self.response() for _ in ROUTES]
        responses[1] = urllib.error.HTTPError(
            "https://ziontechgroup.com/about/", 404, "Not Found",
            {"content-type": "text/html"}, None,
        )
        code, failures = self.run_script(responses)
        self.assertEqual(code, 1)
        self.assertEqual(failures, [
            {"route": "/about/", "status": 404, "content_type": "text/html"},
        ])

    def test_non_200_response_exits_one(self):
        responses = [self.response() for _ in ROUTES]
        responses[-1] = self.response(503)
        code, failures = self.run_script(responses)
        self.assertEqual(code, 1)
        self.assertEqual(failures, [
            {"route": ROUTES[-1], "status": 503, "content_type": "text/html"},
        ])

    def test_network_and_timeout_errors_exit_one(self):
        for error in (
            urllib.error.URLError("DNS lookup failed"),
            TimeoutError("request timed out"),
        ):
            with self.subTest(error=type(error).__name__):
                responses = [self.response() for _ in ROUTES]
                responses[3] = error
                code, failures = self.run_script(responses)
                self.assertEqual(code, 1)
                self.assertEqual(len(failures), 1)
                self.assertEqual(failures[0]["route"], "/services/")
                self.assertEqual(failures[0]["status"], "ERROR")
                self.assertIn(str(error), failures[0]["content_type"])

    def test_certificate_errors_exit_one_without_retry_or_bypass(self):
        error = ssl.SSLCertVerificationError(1, "certificate verify failed")
        for outcome in (error, urllib.error.URLError(error)):
            with self.subTest(wrapped=isinstance(outcome, urllib.error.URLError)):
                responses = [self.response() for _ in ROUTES]
                responses[0] = outcome
                code, failures = self.run_script(responses)
                self.assertEqual(code, 1)
                self.assertEqual(len(failures), 1)
                self.assertEqual(failures[0]["route"], "/")
                self.assertIn("certificate verify failed", failures[0]["content_type"])

    def test_every_route_failing_exits_one_and_reports_all_routes(self):
        code, failures = self.run_script(
            [urllib.error.URLError("offline") for _ in ROUTES]
        )
        self.assertEqual(code, 1)
        self.assertEqual([entry["route"] for entry in failures], ROUTES)

    def test_real_process_exit_status_is_nonzero_on_failure(self):
        program = (
            "import runpy, sys, urllib.error; from unittest.mock import patch\n"
            "with patch('urllib.request.urlopen', "
            "side_effect=urllib.error.URLError('offline')):\n"
            "    runpy.run_path(sys.argv[1], run_name='__main__')\n"
        )
        result = subprocess.run(
            [sys.executable, "-B", "-c", program, str(SCRIPT)],
            capture_output=True, text=True, timeout=10,
        )
        self.assertEqual(result.returncode, 1, result.stderr)
        self.assertEqual(len(ast.literal_eval(result.stdout)), len(ROUTES))


if __name__ == "__main__":
    unittest.main()
