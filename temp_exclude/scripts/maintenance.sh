#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

mkdir -p logs

echo "[maintenance] $(date -Is) starting"

echo "[maintenance] installing deps"
npm install --no-progress --loglevel=warn

echo "[maintenance] linting (non-fatal)"
npm run lint || true

echo "[maintenance] formatting"
npx prettier -w . || true

echo "[maintenance] type-check"
npm run -s type-check

echo "[maintenance] build"
npm run -s build

echo "[maintenance] $(date -Is) done"

