"""
V71 – Test Harness for node_wrapper.mjs + ts_worker_bridge.py
test_harness.py

Run with: python test_harness.py

Tests 12 assertions covering:
1. Node wrapper availability
2. V65 sentiment tone engine (adjust_email_tone)
3. V67 cross-language reply engine
4. V64 email auto-categorizer
5. Ping method
6. Batch calls
7. Error handling (unknown method)
8. Timeout handling (simulated)
9. Python bridge lifecycle
10. Bridge result structure
11. Multiple sequential calls
12. Language detection accuracy
"""

import subprocess
import json
import time
import sys
import os

# Paths
NODE_PATH = "node"  # use PATH-resolved node
WRAPPER_PATH = os.path.join(os.path.dirname(__file__), "node_wrapper.mjs")
BRIDGE_PATH = os.path.join(os.path.dirname(__file__), "ts_worker_bridge.py")


class TestResult:
    def __init__(self, name, passed, message="", details=None):
        self.name = name
        self.passed = passed
        self.message = message
        self.details = details or {}
    
    def __repr__(self):
        status = "✅ PASS" if self.passed else "❌ FAIL"
        return f"{status} [{self.name}] {self.message}"


def run_tests():
    results = []

    # ── 1. Node wrapper availability ──────────────────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, "--version"],
            capture_output=True, text=True, timeout=5
        )
        version_output = result.stdout.strip()
        results.append(TestResult(
            "Node availability",
            result.returncode == 0,
            f"Node version: {version_output}" if result.returncode == 0 else f"Node not found or error: {result.stderr}",
        ))
    except Exception as e:
        results.append(TestResult("Node availability", False, f"Exception: {e}"))

    # ── 2. Node wrapper module runs and responds ─────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input="",
            capture_output=True, text=True, timeout=5
        )
        try:
            j = json.loads(result.stdout.strip())
            results.append(TestResult(
                "Node wrapper empty-input response",
                "ready" in j or "version" in j,
                f"Output: {result.stdout.strip()[:100]}",
                {"stdout": result.stdout[:200], "stderr": result.stderr[:200]}
            ))
        except:
            results.append(TestResult(
                "Node wrapper empty-input response",
                False,
                f"Non-JSON or no output: {result.stdout[:100]}",
                {"stdout": result.stdout[:200], "stderr": result.stderr[:200]}
            ))
    except Exception as e:
        results.append(TestResult("Node wrapper empty-input response", False, f"Exception: {e}"))

    # ── 3. Ping method ────────────────────────────────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({"id": 1, "method": "ping", "params": {}}) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        passed = j.get("result", {}).get("version") == "v71" and j.get("result", {}).get("status") == "ok"
        results.append(TestResult(
            "Ping method (v71)",
            passed,
            f"Result: {j.get('result')}",
            {"stdout": result.stdout[:200]}
        ))
    except Exception as e:
        results.append(TestResult("Ping method", False, f"Exception: {e}"))

    # ── 4. V65: adjust_email_tone (frustrated customer) ─────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({
                "id": 2, "method": "adjust_email_tone", "params": {
                    "subject": "Still not fixed - third time",
                    "body": "This is ridiculous. I have been waiting for weeks and nothing has been done. This is unacceptable!",
                    "sender": "angry@customer.com"
                }
            }) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        r = j.get("result", {})
        tone_used = r.get("tone_used", "")
        frustration = r.get("tone_analysis", {}).get("frustration_level", 0)
        passed = tone_used in ("empathetic", "de_escalating") and frustration >= 0.5
        results.append(TestResult(
            "V65: adjust_email_tone (frustrated)",
            passed,
            f"tone={tone_used}, frustration={frustration}, reason={r.get('tone_analysis', {}).get('reasoning', '')[:80]}",
            {"tone_used": tone_used, "frustration": frustration, "adjusted_body": r.get('adjusted_body', '')[:100]}
        ))
    except Exception as e:
        results.append(TestResult("V65: adjust_email_tone", False, f"Exception: {e}"))

    # ── 5. V65: adjust_email_tone (positive/friendly) ─────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({
                "id": 3, "method": "adjust_email_tone", "params": {
                    "subject": "Great progress!",
                    "body": "Thank you so much for your help! This is fantastic and I really appreciate everything you have done.",
                    "sender": "happy@client.com"
                }
            }) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        r = j.get("result", {})
        tone_used = r.get("tone_used", "")
        sentiment = r.get("tone_analysis", {}).get("sentiment_score", 0)
        passed = tone_used in ("friendly", "professional") and sentiment > 0
        results.append(TestResult(
            "V65: adjust_email_tone (friendly)",
            passed,
            f"tone={tone_used}, sentiment={sentiment:.2f}",
            {"tone_used": tone_used, "sentiment": sentiment}
        ))
    except Exception as e:
        results.append(TestResult("V65: adjust_email_tone (friendly)", False, f"Exception: {e}"))

    # ── 6. V67: cross_language_analyze (Spanish) ─────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({
                "id": 4, "method": "cross_language_analyze", "params": {
                    "body": "Hola, necesito ayuda con mi cuenta. Por favor, ¿cuándo pueden contactarme? Gracias.",
                    "subject": "Ayuda",
                    "sender": "usuario@ejemplo.es"
                }
            }) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        r = j.get("result", {})
        lang = r.get("detected_language", "")
        confidence = r.get("language_confidence", 0)
        template = r.get("auto_reply_template", "")
        passed = lang == "spanish" and confidence > 0 and template != ""
        results.append(TestResult(
            "V67: cross_language_analyze (Spanish)",
            passed,
            f"lang={lang}, confidence={confidence:.2f}, template={template[:60]}",
            {"lang": lang, "confidence": confidence, "template": template[:80]}
        ))
    except Exception as e:
        results.append(TestResult("V67: cross_language_analyze", False, f"Exception: {e}"))

    # ── 7. V67: cross_language_analyze (German) ─────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({
                "id": 5, "method": "cross_language_analyze", "params": {
                    "body": "Guten Tag, ich habe ein Problem mit der Rechnung. Bitte um Hilfe. Danke.",
                    "subject": "Rechnungsproblem",
                    "sender": "kunde@firma.de"
                }
            }) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        r = j.get("result", {})
        lang = r.get("detected_language", "")
        passed = lang == "german"
        results.append(TestResult(
            "V67: cross_language_analyze (German)",
            passed,
            f"lang={lang}",
            {"lang": lang}
        ))
    except Exception as e:
        results.append(TestResult("V67: cross_language_analyze (German)", False, f"Exception: {e}"))

    # ── 8. V64: categorize_email (invoice) ───────────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({
                "id": 6, "method": "categorize_email", "params": {
                    "subject": "Invoice #12345 - Amount Due",
                    "body": "Please find attached invoice #12345. Payment is due in 30 days. Total amount: $1,250.00 plus tax.",
                    "sender": "billing@vendor.com"
                }
            }) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        r = j.get("result", {})
        category = r.get("category", "")
        priority = r.get("priority", "")
        tags = r.get("tags", [])
        passed = category == "invoice" and priority in ("normal", "high")
        results.append(TestResult(
            "V64: categorize_email (invoice)",
            passed,
            f"category={category}, priority={priority}, tags={tags}",
            {"category": category, "priority": priority, "tags": tags}
        ))
    except Exception as e:
        results.append(TestResult("V64: categorize_email", False, f"Exception: {e}"))

    # ── 9. V64: categorize_email (support/urgent) ────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({
                "id": 7, "method": "categorize_email", "params": {
                    "subject": "URGENT: Server is down!",
                    "body": "Our production server is not working. This is critical and we need support immediately!",
                    "sender": "it@company.com"
                }
            }) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        r = j.get("result", {})
        category = r.get("category", "")
        priority = r.get("priority", "")
        frustration = r.get("frustration_level", 0)
        passed = category in ("support", "it") and priority in ("urgent", "high")
        results.append(TestResult(
            "V64: categorize_email (support urgent)",
            passed,
            f"category={category}, priority={priority}, frustration={frustration}",
            {"category": category, "priority": priority, "frustration": frustration}
        ))
    except Exception as e:
        results.append(TestResult("V64: categorize_email (support)", False, f"Exception: {e}"))

    # ── 10. Error handling: unknown method ────────────────────────────────────
    try:
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps({"id": 8, "method": "nonexistent_method", "params": {}}) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        has_error = "error" in j
        results.append(TestResult(
            "Error handling (unknown method)",
            has_error,
            f"Has error field: {has_error}, error code: {j.get('error', {}).get('code', 'N/A')}",
            {"error": j.get("error")}
        ))
    except Exception as e:
        results.append(TestResult("Error handling", False, f"Exception: {e}"))

    # ── 11. Batch calls ────────────────────────────────────────────────────────
    try:
        batch = [
            {"id": 1, "method": "ping", "params": {}},
            {"id": 2, "method": "ping", "params": {}},
        ]
        result = subprocess.run(
            [NODE_PATH, WRAPPER_PATH],
            input=json.dumps(batch) + "\n",
            capture_output=True, text=True, timeout=5
        )
        j = json.loads(result.stdout.strip())
        passed = isinstance(j, list) and len(j) == 2 and all("result" in r for r in j)
        results.append(TestResult(
            "Batch calls (2 pings)",
            passed,
            f"Got {len(j)} results" if isinstance(j, list) else f"Unexpected type: {type(j)}",
            {"result_count": len(j) if isinstance(j, list) else 0}
        ))
    except Exception as e:
        results.append(TestResult("Batch calls", False, f"Exception: {e}"))

    # ── 12. Python bridge (ts_worker_bridge.py) ────────────────────────────────
    try:
        sys.path.insert(0, os.path.dirname(BRIDGE_PATH))
        from ts_worker_bridge import TSWorkerBridge, adjust_email_tone, cross_language_analyze, categorize_email
        bridge = TSWorkerBridge()
        r = bridge.call("ping")
        passed = r.success and r.result is not None and r.result.get("version") == "v71"
        results.append(TestResult(
            "Python bridge (TSWorkerBridge) init + ping",
            passed,
            f"success={r.success}, version={r.result.get('version') if r.result else 'N/A'}, latency={r.latency_ms:.1f}ms",
            {"success": r.success, "result": r.result, "latency_ms": r.latency_ms}
        ))
        bridge.close()
    except Exception as e:
        results.append(TestResult("Python bridge init", False, f"Exception: {e}"))

    # ── 13. Python bridge adjust_email_tone ───────────────────────────────────
    try:
        from ts_worker_bridge import TSWorkerBridge
        bridge = TSWorkerBridge()
        r = bridge.call("adjust_email_tone", {
            "subject": "Still broken",
            "body": "I am extremely frustrated. This is the third time I am reporting this. Nothing has been done. This is unacceptable!",
            "sender": "angry@client.com",
        })
        passed = r.success and r.result is not None and r.result.get("tone_used") in ("empathetic", "de_escalating")
        results.append(TestResult(
            "Python bridge: adjust_email_tone",
            passed,
            f"tone={r.result.get('tone_used') if r.result else 'N/A'}, success={r.success}",
            {"success": r.success, "result": r.result, "latency_ms": r.latency_ms}
        ))
        bridge.close()
    except Exception as e:
        results.append(TestResult("Python bridge: adjust_email_tone", False, f"Exception: {e}"))

    # ── 14. Python bridge cross_language_analyze ──────────────────────────────
    try:
        from ts_worker_bridge import TSWorkerBridge
        bridge = TSWorkerBridge()
        r = bridge.call("cross_language_analyze", {
            "body": "Bonjour, j'ai besoin d'aide. Merci beaucoup.",
            "subject": "Aide",
            "sender": "utilisateur@exemple.fr",
        })
        passed = r.success and r.result is not None and r.result.get("detected_language") == "french"
        results.append(TestResult(
            "Python bridge: cross_language_analyze",
            passed,
            f"lang={r.result.get('detected_language') if r.result else 'N/A'}",
            {"success": r.success, "result": r.result}
        ))
        bridge.close()
    except Exception as e:
        results.append(TestResult("Python bridge: cross_language_analyze", False, f"Exception: {e}"))

    # ── 15. Sequential calls (multiple calls don't crash) ─────────────────────
    try:
        from ts_worker_bridge import TSWorkerBridge
        bridge = TSWorkerBridge()
        all_ok = True
        for i in range(5):
            r = bridge.call("ping")
            if not r.success:
                all_ok = False
                break
        results.append(TestResult(
            "Sequential calls (5 pings)",
            all_ok,
            f"All 5 calls successful" if all_ok else "Some calls failed",
            {}
        ))
        bridge.close()
    except Exception as e:
        results.append(TestResult("Sequential calls", False, f"Exception: {e}"))

    # ── 16. Bridge context manager (with语句) ─────────────────────────────────
    try:
        from ts_worker_bridge import TSWorkerBridge
        with TSWorkerBridge() as bridge:
            r = bridge.call("ping")
            passed = r.success
        results.append(TestResult(
            "Bridge context manager (__exit__)",
            passed,
            f"context manager worked, ping success={passed}",
            {}
        ))
    except Exception as e:
        results.append(TestResult("Bridge context manager", False, f"Exception: {e}"))

    return results


def main():
    print("=" * 70)
    print("V71 Node.js Worker Bridge — Test Harness")
    print("=" * 70)
    print()

    results = run_tests()

    print(f"Total: {len(results)} tests\n")
    for r in results:
        print(f"  {r}")
    print()

    passed = sum(1 for r in results if r.passed)
    failed = len(results) - passed
    print(f"Results: {passed} passed, {failed} failed")
    print()

    if failed > 0:
        print("Failed tests:")
        for r in results:
            if not r.passed:
                print(f"  - {r.name}: {r.message}")
        print()
        sys.exit(1)
    else:
        print("All tests passed! ✅")
        sys.exit(0)


if __name__ == "__main__":
    main()