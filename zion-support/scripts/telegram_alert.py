#!/usr/bin/env python3
"""Send 404 alert to Telegram group using Hermes gateway bot."""

import json
import os
import subprocess
from datetime import datetime

TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "YOUR_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID", "-1003886112318")
MESSAGE_TEXT = os.environ.get("MESSAGE_TEXT", "")

def send_telegram_alert(message: str, report_path: str = "scripts/404_report.json") -> bool:
    """Send alert message via Telegram bot."""
    
    if "YOUR_BOT_TOKEN" in TELEGRAM_BOT_TOKEN:
        print("Warning: TELEGRAM_BOT_TOKEN not configured, skipping alert")
        return False
    
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }
    
    try:
        import urllib.request
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode(),
            headers={"Content-Type": "application/json"},
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.load(resp)
            return result.get("ok", False)
    except Exception as e:
        print(f"Telegram alert failed: {e}")
        return False

if __name__ == "__main__":
    with open("scripts/404_report.json") as f:
        report = json.load(f)
    
    if report.get("initial_404_count", 0) > 0:
        msg = f"""🚨 Monitor de 404s - ziontechgroup.com

**Status:** {report['total_checked']} endpoints verificados
**404s detectados:** {report['initial_404_count']}

Endpoints com 404:
"""
        for ep in report.get("404_found_initial", []):
            msg += f"- `{ep}`\n"
        
        if report.get("resolved_count", 0) > 0:
            msg += f"\n✅ **Resolvidos:** {report['resolved_count']} redirects criados"
        
        send_telegram_alert(msg)