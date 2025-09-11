#!/usr/bin/env python3

import requests
import json
from datetime import datetime

# Configuration
TOKEN = "ghs_2CijlF4cOrlTIwzwz3nvWrTnWL9uZC0Q24TL"
REPO = "Zion-Holdings/zion.app"
BASE_URL = "https://api.github.com"

headers = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def check_pr_status(pr_number):
    """Check the status of a specific PR"""
    try:
        url = f"{BASE_URL}/repos/{REPO}/pulls/{pr_number}"
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            pr_data = response.json()
            return {
                "number": pr_number,
                "title": pr_data.get("title"),
                "state": pr_data.get("state"),
                "merged": pr_data.get("merged", False),
                "merged_at": pr_data.get("merged_at"),
                "mergeable": pr_data.get("mergeable")
            }
        elif response.status_code == 404:
            return {
                "number": pr_number,
                "state": "not_found",
                "message": "PR not found (may have been deleted)"
            }
        else:
            return {
                "number": pr_number,
                "state": "error",
                "message": f"HTTP {response.status_code}"
            }
    except Exception as e:
        return {
            "number": pr_number,
            "state": "error",
            "message": str(e)
        }

def get_open_prs():
    """Get all currently open PRs"""
    try:
        url = f"{BASE_URL}/repos/{REPO}/pulls?state=open"
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Failed to fetch open PRs: HTTP {response.status_code}")
            return []
    except Exception as e:
        print(f"❌ Error fetching open PRs: {e}")
        return []

def get_recent_commits():
    """Get recent commits on main branch"""
    try:
        url = f"{BASE_URL}/repos/{REPO}/commits?sha=main&per_page=10"
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            commits = response.json()
            return [(commit["sha"][:8], commit["commit"]["message"].split('\n')[0]) for commit in commits]
        else:
            return []
    except Exception as e:
        print(f"❌ Error fetching commits: {e}")
        return []

def main():
    print("🔍 Verifying PR merge status...")
    print(f"📅 Timestamp: {datetime.now().isoformat()}")
    print("=" * 50)
    
    # Check the specific PRs we were trying to merge
    target_prs = [12994, 12993]
    
    print("\n📋 Checking target PRs:")
    for pr_number in target_prs:
        print(f"\n🔍 PR #{pr_number}:")
        status = check_pr_status(pr_number)
        
        if status["state"] == "closed" and status.get("merged"):
            print(f"✅ MERGED - {status['title']}")
            print(f"   Merged at: {status['merged_at']}")
        elif status["state"] == "open":
            print(f"⏳ STILL OPEN - {status['title']}")
            print(f"   Mergeable: {status.get('mergeable', 'Unknown')}")
        elif status["state"] == "closed" and not status.get("merged"):
            print(f"❌ CLOSED WITHOUT MERGE - {status['title']}")
        else:
            print(f"❓ {status['state'].upper()} - {status.get('message', 'Unknown status')}")
    
    # Check for any remaining open PRs
    print("\n📋 Checking for remaining open PRs:")
    open_prs = get_open_prs()
    
    if not open_prs:
        print("✅ No open PRs found")
    else:
        print(f"⚠️ Found {len(open_prs)} open PR(s):")
        for pr in open_prs:
            print(f"   • PR #{pr['number']}: {pr['title']}")
    
    # Show recent commits
    print("\n📋 Recent commits on main branch:")
    recent_commits = get_recent_commits()
    
    if recent_commits:
        for sha, message in recent_commits:
            print(f"   • {sha}: {message}")
    else:
        print("❌ Could not fetch recent commits")
    
    # Summary
    print("\n" + "=" * 50)
    merged_count = sum(1 for pr_num in target_prs if check_pr_status(pr_num).get("merged", False))
    print(f"📊 Summary: {merged_count}/{len(target_prs)} target PRs merged")
    print(f"📊 Remaining open PRs: {len(open_prs)}")
    
    # Save verification results
    verification_results = {
        "timestamp": datetime.now().isoformat(),
        "target_prs": [check_pr_status(pr_num) for pr_num in target_prs],
        "open_prs_count": len(open_prs),
        "open_prs": [{"number": pr["number"], "title": pr["title"]} for pr in open_prs],
        "recent_commits": recent_commits,
        "merged_count": merged_count,
        "total_target_prs": len(target_prs)
    }
    
    with open("/workspace/verification_results.json", "w") as f:
        json.dump(verification_results, f, indent=2)
    
    print("💾 Verification results saved to verification_results.json")
    
    if merged_count == len(target_prs) and len(open_prs) == 0:
        print("🎉 All target PRs merged successfully! No remaining open PRs.")
        return True
    else:
        print("⚠️ Some PRs may still need attention.")
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)