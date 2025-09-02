#!/bin/bash
if [ "$1" ]; then
    pm2 logs "$1" --lines 50
else
    echo "Usage: ./view-logs.sh <process-name>"
    echo "Available processes:"
    pm2 list | grep -E "│.*│" | awk '{print $2}' | grep -v "name"
fi
