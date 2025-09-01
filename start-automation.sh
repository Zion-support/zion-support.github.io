#!/bin/bash

# Zion.app Automation Startup Script
# Quick access to automation management from project root

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Zion.app PM2 Automation System${NC}"
echo ""

# Check if automation directory exists
if [ ! -d "automation" ]; then
    echo "❌ Automation directory not found. Please run this from the project root."
    exit 1
fi

# Navigate to automation directory and run management script
cd automation

echo -e "${GREEN}Starting automation management...${NC}"
echo ""

# Pass all arguments to the management script
./manage.sh "$@"
