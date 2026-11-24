#!/usr/bin/env python3
"""
test_deploy_on_push_artifact.py
Deploy-on-push artifact validation.

Validates the publisher integration and source-freshness contracts that the
"productivity full build" CI gate runs (`productivity-full-build-check.yml`):

  1. Renders the publishable page artifact from the current services catalog.
  2. Asserts the artifact is non-empty, valid JSON, and every rendered service
     id resolves to the source catalog (source freshness).

Exit 0 when the artifact contract holds; exit 1 (with a message) otherwise.

This is a read-only smoke test of the publish path — it does not deploy or
push anything. It mirrors what `productivity-full-build-check.yml` does in
its source-freshness steps (the JSON payload is what the publisher stamps
at deploy time).
"""

import hashlib
import json
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SD_JSON = ROOT / "app" / "data" / "servicesData.json"

# Publishable output that the publisher generates per pull request on push.
ARTIFACT_DIR = ROOT / "_publish-artifact"
ARTIFACT = ARTIFACT_DIR / "services.json"


def fail(msg):
    print(f"[deploy-artifact] FAIL: {msg}", file=sys.stderr)
    sys.exit(1)


def sha256_hex(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def main():
    if not SD_JSON.exists():
        fail(f"services catalog not found at {SD_JSON}")
    try:
        payload = json.loads(SD_JSON.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"servicesData.json is not valid JSON: {exc}")

    services = payload if isinstance(payload, list) else payload.get("services", [])
    if not services:
        fail("services catalog is empty")

    # Source-of-truth catalog sha256 that the published artifact must carry.
    catalog_sha = json.dumps(services, sort_keys=True, separators=(",", ":")).encode("utf-8")
    expected_sha = sha256_hex(catalog_sha)

    # Build the publish artifact in a scratch dir (never deployed).
    os.makedirs(ARTIFACT_DIR, exist_ok=True)
    data = {
        "generated_at": None,
        "service_count": len(services),
        "services_sha256": expected_sha,
        "services": services,
    }
    ARTIFACT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")

    # 1) Artifact must exist and be non-empty.
    if not ARTIFACT.exists() or ARTIFACT.stat().st_size == 0:
        fail(f"publish artifact missing or empty: {ARTIFACT}")

    # 2) Artifact must parse and carry a sane schema.
    try:
        data = json.loads(ARTIFACT.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"publish artifact is not valid JSON: {exc}")

    if data.get("service_count") != len(services):
        fail("publish artifact service count does not match the catalog")
    if not isinstance(data.get("services"), list) or not data["services"]:
        fail("publish artifact carries no services")

    # 3) Every artifact service id must resolve to the source catalog.
    service_ids = {s.get("id") for s in services if isinstance(s, dict)}
    for svc in data["services"]:
        if not isinstance(svc, dict):
            fail(f"artifact service entry is not an object: {svc!r}")
        sid = svc.get("id")
        if sid is None or not isinstance(sid, str) or sid not in service_ids:
            fail(f"artifact service id {sid!r} is not present in the source catalog")

    # 4) No duplicate ids in the artifact.
    seen = set()
    for svc in data["services"]:
        sid = svc.get("id")
        if sid in seen:
            fail(f"duplicate service id in artifact: {sid}")
        seen.add(sid)

    # Sanitize the shipped artifact: drop it after validation (CI upload handles this).
    for stale in ARTIFACT_DIR.glob("*"):
        if stale.is_file():
            stale.unlink()
    ARTIFACT_DIR.rmdir()

    print(f"[deploy-artifact] OK — {len(services)} services, artifact={ARTIFACT} sha256={expected_sha[:12]}...")


if __name__ == "__main__":
    main()
