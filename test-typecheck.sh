#!/bin/bash
cd /workspace
./node_modules/.bin/tsc --noEmit -p tsconfig.typecheck.json
echo "Exit code: $?"