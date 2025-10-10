#!/bin/bash

# Script to sync with remote and push changes
echo "Syncing with remote main branch..."

# Pull latest changes from main
git pull origin main --rebase

# Push the changes
git push origin main

echo "Successfully synced and pushed to main branch!"