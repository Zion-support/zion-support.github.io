#!/bin/bash
echo "🚀 SUPREME MONITORING SCRIPT"
echo "============================"

while true; do
    echo "⏰ $(date)"
    
    # Get branch count
    remaining=$(git branch -r | grep -E "(cursor|codex)" | grep -v "backup" | wc -l)
    echo "📊 Remaining branches: $remaining"
    
    # Check processes
    processes=$(ps aux | grep python3 | grep merge | wc -l)
    echo "🔄 Active merge processes: $processes"
    
    # Check recent merges
    echo "📝 Recent merges:"
    git log --oneline -3 | grep -i merge | head -2
    
    echo "---"
    sleep 30
done
