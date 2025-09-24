#!/bin/bash

# Test script to merge first 10 codex branches
set -e

echo "Testing merge with first 10 codex branches..."

# Get first 10 codex branches
git branch -r | grep "origin/.*-codex/" | head -10 | while read -r branch; do
    BRANCH_NAME=$(echo "$branch" | sed 's/origin\///')
    echo "Processing: $BRANCH_NAME"
    
    if git merge --no-edit "$branch" 2>/dev/null; then
        echo "✅ Success: $BRANCH_NAME"
    else
        echo "❌ Failed: $BRANCH_NAME"
        git merge --abort 2>/dev/null || true
    fi
done

echo "Test completed"