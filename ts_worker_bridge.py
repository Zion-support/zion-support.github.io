"""
V71 – TypeScript Worker Bridge (Python)
ts_worker_bridge.py

Spawns node node_wrapper.mjs with 5s timeout.
JSON I/O via stdin/stdout.
Falls back to error response on timeout or crash.
Thread-safe via subprocess management.
"""

import subprocess
import json
import threading
import time
import os
from typing import Any, Optional
from dataclasses import dataclass
from enum import Enum

NODE_PATH = "node"  # use PATH-resolved node
WRAPPER_PATH = os.path.join(os.path.dirname(__file__), "node_wrapper.mjs")
DEFAULT_TIMEOUT = 5.0


class BridgeError(Exception):
    """Base exception for bridge errors."""
    pass


class TimeoutError(BridgeError):
    """Node process timed out."""
    pass


class NodeCrashError(BridgeError):
    """Node process crashed or returned non-zero."""
    pass


@dataclass
class BridgeResult:
    """Result of a bridge call."""
    success: bool
    result: Optional[dict] = None
    error: Optional[dict] = None
    latency_ms: float = 0.0
    timed_out: bool = False
    crashed: bool = False


class TSWorkerBridge:
    """
    Thread-safe Python bridge to the Node.js worker.

    Usage:
        bridge = TSWorkerBridge()
        result = bridge.call("adjust_email_tone", {
            "subject": "Help needed",
            "body": "I am frustrated with...",
            "sender": "customer@example.com"
        })
        print(result.result)
        bridge.close()
    """

    def __init__(self, node_path: str = NODE_PATH, wrapper_path: str = WRAPPER_PATH,
                 timeout: float = DEFAULT_TIMEOUT):
        self.node_path = node_path
        self.wrapper_path = wrapper_path
        self.timeout = timeout
        self._lock = threading.Lock()
        self._proc = None
        self._ready = False
        self._init()

    def _init(self):
        """Start the node subprocess."""
        try:
            self._proc = subprocess.Popen(
                [self.node_path, self.wrapper_path],
                stdin=subprocess.PIPE,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                cwd=os.path.dirname(self.wrapper_path),
                env={**os.environ},
            )
            # Wait for ready signal
            self._proc.stdout.readline()
            self._ready = True
        except FileNotFoundError:
            self._ready = False
        except Exception as e:
            self._ready = False

    def _ensure_ready(self):
        """Restart node if not ready."""
        if not self._ready or self._proc is None or self._proc.poll() is not None:
            self._cleanup()
            self._init()

    def _cleanup(self):
        """Kill and clean up the node process."""
        if self._proc:
            try:
                self._proc.kill()
                self._proc.wait()
            except:
                pass
            self._proc = None
        self._ready = False

    def call(self, method: str, params: Optional[dict] = None) -> BridgeResult:
        """
        Call a method on the node worker.

        Args:
            method: Method name (e.g., "adjust_email_tone")
            params: Parameters dict

        Returns:
            BridgeResult with result, error, or timeout info.
        """
        start = time.time()
        with self._lock:
            self._ensure_ready()
            if not self._ready:
                return BridgeResult(
                    success=False,
                    error={"code": "NODE_NOT_READY", "message": "Node process unavailable"},
                    latency_ms=(time.time() - start) * 1000,
                )

            request = {"id": 1, "method": method, "params": params or {}}
            try:
                self._proc.stdin.write(json.dumps(request).encode("utf8"))
                self._proc.stdin.write(b"\n")
                self._proc.stdin.flush()
            except Exception as e:
                self._ready = False
                return BridgeResult(
                    success=False,
                    error={"code": "STDIN_ERROR", "message": str(e)},
                    latency_ms=(time.time() - start) * 1000,
                )

            # Read response with timeout
            try:
                import select
                ready, _, _ = select.select([self._proc.stdout], [], [], self.timeout)
                if not ready:
                    self._ready = False
                    return BridgeResult(
                        success=False,
                        timed_out=True,
                        error={"code": "TIMEOUT", "message": f"Node call timed out after {self.timeout}s"},
                        latency_ms=self.timeout * 1000,
                    )
                line = self._proc.stdout.readline()
                if not line:
                    self._ready = False
                    return BridgeResult(
                        success=False,
                        crashed=True,
                        error={"code": "NODE_STDOUT_EMPTY", "message": "Node stdout closed unexpectedly"},
                        latency_ms=(time.time() - start) * 1000,
                    )
                response = json.loads(line)
                latency_ms = (time.time() - start) * 1000
                if "error" in response:
                    return BridgeResult(success=False, error=response["error"], latency_ms=latency_ms)
                return BridgeResult(success=True, result=response.get("result"), latency_ms=latency_ms)
            except json.JSONDecodeError as e:
                self._ready = False
                return BridgeResult(
                    success=False,
                    crashed=True,
                    error={"code": "INVALID_JSON", "message": f"Node returned invalid JSON: {e}"},
                    latency_ms=(time.time() - start) * 1000,
                )
            except Exception as e:
                self._ready = False
                return BridgeResult(
                    success=False,
                    crashed=True,
                    error={"code": "EXECUTION_ERROR", "message": str(e)},
                    latency_ms=(time.time() - start) * 1000,
                )

    def call_batch(self, calls: list) -> list:
        """
        Batch call - sends array of requests, returns array of results.
        """
        start = time.time()
        with self._lock:
            self._ensure_ready()
            if not self._ready:
                return [{"success": False, "error": {"code": "NODE_NOT_READY", "message": "Node unavailable"}} for _ in calls]

            batch = [{"id": i + 1, "method": c["method"], "params": c.get("params", {})} for i, c in enumerate(calls)]
            try:
                self._proc.stdin.write(json.dumps(batch).encode("utf8"))
                self._proc.stdin.write(b"\n")
                self._proc.stdin.flush()
            except Exception as e:
                self._ready = False
                return [{"success": False, "error": {"code": "STDIN_ERROR", "message": str(e)}} for _ in calls]

            try:
                import select
                ready, _, _ = select.select([self._proc.stdout], [], [], self.timeout)
                if not ready:
                    self._ready = False
                    return [{"success": False, "timed_out": True, "error": {"code": "TIMEOUT", "message": f"Batch timed out after {self.timeout}s"}} for _ in calls]
                line = self._proc.stdout.readline()
                if not line:
                    self._ready = False
                    return [{"success": False, "crashed": True, "error": {"code": "NODE_STDOUT_EMPTY", "message": "Node closed stdout"}} for _ in calls]
                results = json.loads(line)
                latency_ms = (time.time() - start) * 1000
                return [{
                    "success": "error" not in r,
                    "result": r.get("result"),
                    "error": r.get("error"),
                    "latency_ms": latency_ms,
                } for r in results]
            except Exception as e:
                self._ready = False
                return [{"success": False, "crashed": True, "error": {"code": "EXECUTION_ERROR", "message": str(e)}} for _ in calls]

    def close(self):
        """Shutdown the node process."""
        with self._lock:
            self._cleanup()

    def __enter__(self):
        return self

    def __exit__(self, *args):
        self.close()

    @property
    def is_ready(self) -> bool:
        return self._ready and self._proc is not None and self._proc.poll() is None


def create_bridge() -> TSWorkerBridge:
    """Factory function to create a new bridge instance."""
    return TSWorkerBridge()


# ─── Convenience wrappers ────────────────────────────────────────────────────

def adjust_email_tone(subject: str, body: str, sender: str,
                      sender_domain: Optional[str] = None,
                      thread_length: Optional[int] = None,
                      thread_tone_history: Optional[list] = None) -> BridgeResult:
    """Wrapper for adjust_email_tone method."""
    bridge = TSWorkerBridge()
    try:
        return bridge.call("adjust_email_tone", {
            "subject": subject, "body": body, "sender": sender,
            "sender_domain": sender_domain, "thread_length": thread_length,
            "thread_tone_history": thread_tone_history,
        })
    finally:
        bridge.close()


def cross_language_analyze(body: str, subject: str = "", sender: str = "") -> BridgeResult:
    """Wrapper for cross_language_analyze method."""
    bridge = TSWorkerBridge()
    try:
        return bridge.call("cross_language_analyze", {
            "body": body, "subject": subject, "sender": sender,
        })
    finally:
        bridge.close()


def categorize_email(subject: str, body: str, sender: str) -> BridgeResult:
    """Wrapper for categorize_email method."""
    bridge = TSWorkerBridge()
    try:
        return bridge.call("categorize_email", {
            "subject": subject, "body": body, "sender": sender,
        })
    finally:
        bridge.close()


if __name__ == "__main__":
    # Smoke test
    print("Testing TSWorkerBridge...")
    bridge = TSWorkerBridge()
    r = bridge.call("ping")
    print(f"Ping result: {r}")
    if r.success:
        print(f"  version: {r.result.get('version')}")
        print(f"  status: {r.result.get('status')}")
    bridge.close()
    print("Done.")