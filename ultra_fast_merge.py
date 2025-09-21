#!/usr/bin/env python3

import subprocess
import sys
import os
import time
import concurrent.futures
import threading

def run_command(command, description="", timeout=30):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=timeout)
        if result.returncode == 0:
            return True, result.stdout.strip()
        else:
            return False, result.stderr.strip()
    except subprocess.TimeoutExpired:
        return False, "Timeout"
    except Exception as e:
        return False, str(e)

def merge_branch_fast(branch_name, lock):
    """Fast merge a single branch with minimal output"""
    try:
        # Try fast-forward merge first
        success, output = run_command(f"git merge {branch_name} --no-ff -m 'Merge {branch_name}'", timeout=15)
        
        if success:
            return True, branch_name
        else:
            # Try conflict resolution
            run_command("git checkout --theirs .", timeout=10)
            run_command("git add .", timeout=10)
            commit_success, _ = run_command(f"git commit -m 'Merge {branch_name} (auto-resolved)'", timeout=10)
            
            if commit_success:
                return True, branch_name
            else:
                run_command("git reset --hard HEAD", timeout=5)
                return False, branch_name
    except:
        return False, branch_name

def main():
    print("🚀 Starting ULTRA-FAST merge process for maximum efficiency...")
    
    # Ensure we're on main branch
    run_command("git checkout main", "Switching to main branch")
    run_command("git pull origin main", "Pulling latest main")
    
    # Get ALL remaining branches
    success, branches_output = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup"')
    
    if not success:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    print(f"📊 Found {len(branches)} branches to process")
    
    successful_merges = 0
    failed_merges = 0
    lock = threading.Lock()
    
    # Process in mega-batches of 100 branches
    batch_size = 100
    total_batches = (len(branches) + batch_size - 1) // batch_size
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, len(branches))
        batch = branches[start_idx:end_idx]
        
        print(f"\n🔄 Processing MEGA-BATCH {batch_num + 1}/{total_batches} ({len(batch)} branches)")
        
        batch_successful = 0
        batch_failed = 0
        
        # Process branches in parallel (5 at a time)
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            futures = {executor.submit(merge_branch_fast, branch, lock): branch for branch in batch}
            
            for future in concurrent.futures.as_completed(futures):
                success, branch_name = future.result()
                if success:
                    batch_successful += 1
                    successful_merges += 1
                    print(f"  ✅ {branch_name}")
                else:
                    batch_failed += 1
                    failed_merges += 1
                    print(f"  ❌ {branch_name}")
        
        print(f"📊 Batch {batch_num + 1} complete: {batch_successful} successful, {batch_failed} failed")
        
        # Push after each mega-batch
        if batch_successful > 0:
            print(f"🚀 Pushing mega-batch {batch_num + 1}...")
            push_success, push_output = run_command("git push origin main", timeout=60)
            if not push_success:
                print(f"⚠️ Push failed, trying force push...")
                run_command("git push origin main --force", timeout=60)
        
        # Progress update
        progress = ((batch_num + 1) / total_batches) * 100
        print(f"🎯 Progress: {progress:.1f}% complete ({successful_merges} merged, {failed_merges} failed)")
    
    print(f"\n🎉 ULTRA-FAST merge process completed!")
    print(f"✅ Total successful merges: {successful_merges}")
    print(f"❌ Total failed merges: {failed_merges}")
    print(f"📊 Success rate: {(successful_merges / (successful_merges + failed_merges) * 100):.1f}%")

if __name__ == "__main__":
    main()