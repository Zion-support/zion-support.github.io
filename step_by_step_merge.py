#!/usr/bin/env python3
"""
Step-by-step merge resolution script
"""

import subprocess
import sys
import time

def run_step(step_name, command):
    """Run a single step with error handling"""
    print(f"\n🔄 {step_name}...")
    print(f"Command: {command}")
    
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=60, cwd='/workspace')
        
        if result.returncode == 0:
            print(f"✅ {step_name} completed successfully")
            if result.stdout.strip():
                print(f"Output: {result.stdout.strip()}")
            return True
        else:
            print(f"❌ {step_name} failed")
            print(f"Error: {result.stderr.strip()}")
            return False
    except subprocess.TimeoutExpired:
        print(f"⏰ {step_name} timed out")
        return False
    except Exception as e:
        print(f"💥 {step_name} error: {e}")
        return False

def main():
    print("🚀 Starting Step-by-Step Merge Resolution")
    print("=" * 50)
    
    steps = [
        ("Check git status", "git status --porcelain"),
        ("Get current branch", "git branch --show-current"),
        ("Add all changes", "git add ."),
        ("Commit changes", 'git commit -m "Add comprehensive AI content and promotional components"'),
        ("Fetch latest", "git fetch origin"),
        ("Merge main", "git merge origin/main"),
        ("Push current branch", "git push origin cursor/create-and-deploy-new-content-6e3b"),
        ("Switch to main", "git checkout main"),
        ("Pull main", "git pull origin main"),
        ("Merge content branch", "git merge cursor/create-and-deploy-new-content-6e3b"),
        ("Push main", "git push origin main")
    ]
    
    for step_name, command in steps:
        if not run_step(step_name, command):
            print(f"\n❌ Failed at step: {step_name}")
            print("Please resolve the issue and try again.")
            return False
        
        # Small delay between steps
        time.sleep(1)
    
    print("\n" + "=" * 50)
    print("🎉 ALL STEPS COMPLETED SUCCESSFULLY!")
    print("=" * 50)
    print("✅ All changes have been merged into main branch")
    print("✅ Content branch has been pushed to remote")
    print("✅ Main branch has been updated and pushed")
    
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)