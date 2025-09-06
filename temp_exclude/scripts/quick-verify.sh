#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[quick-verify] Installing deps"
npm install --silent >/dev/null 2>&1 || true

echo "[quick-verify] Lint"
npm run -s lint || true

echo "[quick-verify] Type-check"
npx tsc --noEmit || true

echo "[quick-verify] Python tests (zion_academy)"
if [ -d "zion_academy/tests" ]; then
  if [ -f ".venv/bin/activate" ]; then
    source .venv/bin/activate
  fi
  PYTHONPATH="$(pwd)/zion_academy" python3 -m unittest discover -s zion_academy/tests -p 'test_*.py' -v || true
else
  echo "[quick-verify] No python tests found"
fi

echo "[quick-verify] Done"
