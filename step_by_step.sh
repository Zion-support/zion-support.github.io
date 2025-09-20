#!/bin/bash

# Step by step merge script
cd /workspace

echo "Step 1: Check current status"
git status --short

echo "Step 2: Switch to main"
git checkout main

echo "Step 3: Pull latest"
git pull origin main

echo "Step 4: Fetch all"
git fetch --all

echo "Step 5: Get cursor branches"
git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -3

echo "Step 6: Try to merge first branch"
FIRST_BRANCH=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -1)
echo "First branch: $FIRST_BRANCH"

if [ -n "$FIRST_BRANCH" ]; then
    echo "Attempting to merge: $FIRST_BRANCH"
    git merge --no-commit --no-ff "origin/$FIRST_BRANCH" || echo "Merge failed or conflicts"
    
    if [ $? -eq 0 ]; then
        echo "Merge successful, committing..."
        git commit -m "Merge $FIRST_BRANCH"
    else
        echo "Handling conflicts..."
        git diff --name-only --diff-filter=U | while read file; do
            if [ -f "$file" ]; then
                echo "Resolving: $file"
