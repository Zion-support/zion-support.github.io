#!/bin/bash
echo "🛑 Stopping Error Automation System..."
pm2 stop ecosystem.error-automation.config.cjs
pm2 delete ecosystem.error-automation.config.cjs
echo "✅ Error automation system stopped"
