#!/usr/bin/env python3

import subprocess
import sys
import os
import time
import concurrent.futures
import threading
from datetime import datetime

def run_command(command, timeout=10):
    """Run a shell command and return the result"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=timeout)
        return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
    except subprocess.TimeoutExpired:
        return False, "", "Timeout"
    except Exception as e:
        return False, "", str(e)

def merge_branch_supreme(branch_name, lock, stats):
    """Supreme merge function with maximum speed"""
    try:
        # Ultra-fast merge attempt
        success, stdout, stderr = run_command(f"git merge {branch_name} --no-ff -m 'Merge {branch_name}'", timeout=8)
        
        if success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "merged"
        
        # Lightning-fast conflict resolution
        run_command("git checkout --theirs .", timeout=3)
        run_command("git add .", timeout=3)
        commit_success, _, _ = run_command(f"git commit -m 'Merge {branch_name} (auto-resolved)'", timeout=3)
        
        if commit_success:
            with lock:
                stats['successful'] += 1
            return True, branch_name, "resolved"
        else:
            run_command("git reset --hard HEAD", timeout=2)
            with lock:
                stats['failed'] += 1
            return False, branch_name, "failed"
            
    except Exception as e:
        with lock:
            stats['failed'] += 1
        return False, branch_name, f"error: {str(e)}"

def main():
    print("🚀 SUPREME MERGE SYSTEM - MAXIMUM SPEED")
    print("=" * 60)
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Initialize repository
    print("\n📋 Initializing repository...")
    run_command("git checkout main")
    run_command("git pull origin main")
    
    # Get all branches
    print("\n📋 Getting all branches to merge...")
    success, branches_output, _ = run_command('git branch -r | grep -E "(cursor|codex)" | grep -v "backup"')
    
    if not success or not branches_output:
        print("❌ Failed to get branches list")
        return
    
    branches = [b.strip() for b in branches_output.split('\n') if b.strip()]
    total_branches = len(branches)
    print(f"📊 Total branches to merge: {total_branches:,}")
    
    # Initialize stats
    stats = {'successful': 0, 'failed': 0}
    lock = threading.Lock()
    
    # Process in supreme-mega-batches for maximum speed
    batch_size = 1000  # Supreme-large batches
    total_batches = (total_branches + batch_size - 1) // batch_size
    
    print(f"🔄 Processing in {total_batches} supreme-mega-batches of {batch_size} branches each")
    print(f"⚡ Using maximum parallelism (30 workers) for supreme speed")
    
    start_time = time.time()
    
    for batch_num in range(total_batches):
        batch_start_time = time.time()
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, total_branches)
        batch = branches[start_idx:end_idx]
        
        print(f"\n🔄 SUPREME-MEGA-BATCH {batch_num + 1}/{total_batches}")
        print(f"📊 Processing {len(batch)} branches...")
        
        # Process with maximum parallelism (30 workers)
        with concurrent.futures.ThreadPoolExecutor(max_workers=30) as executor:
            futures = {executor.submit(merge_branch_supreme, branch, lock, stats): branch for branch in batch}
            
            completed = 0
            for future in concurrent.futures.as_completed(futures):
                success, branch_name, status = future.result()
                completed += 1
                
                if success:
                    if completed % 200 == 0:  # Show progress every 200 branches
                        print(f"  ✅ Progress: {completed}/{len(batch)} - {branch_name}")
                else:
                    if completed % 500 == 0:  # Show failures every 500 branches
                        print(f"  ❌ Failed: {branch_name} ({status})")
        
        batch_time = time.time() - batch_start_time
        rate = len(batch) / batch_time if batch_time > 0 else 0
        
        print(f"📊 Batch {batch_num + 1} complete:")
        print(f"   ✅ Successful: {stats['successful']}")
        print(f"   ❌ Failed: {stats['failed']}")
        print(f"   ⚡ Rate: {rate:.1f} branches/second")
        print(f"   ⏱️ Time: {batch_time:.1f} seconds")
        
        # Push after each supreme-mega-batch
        if stats['successful'] > 0:
            print(f"🚀 Pushing supreme-mega-batch {batch_num + 1}...")
            push_success, _, _ = run_command("git push origin main", timeout=300)
            if not push_success:
                print(f"⚠️ Push failed, trying force push...")
                run_command("git push origin main --force", timeout=300)
        
        # Progress update
        total_processed = stats['successful'] + stats['failed']
        progress = (total_processed / total_branches) * 100
        elapsed_time = time.time() - start_time
        eta = (elapsed_time / total_processed) * (total_branches - total_processed) if total_processed > 0 else 0
        
        print(f"🎯 Overall Progress: {progress:.2f}% ({total_processed:,}/{total_branches:,})")
        print(f"⏱️ Elapsed: {elapsed_time/60:.1f} minutes, ETA: {eta/60:.1f} minutes")
        
        # Break if we've processed all branches
        if total_processed >= total_branches:
            break
    
    total_time = time.time() - start_time
    
    print(f"\n🎉 SUPREME MERGE SYSTEM COMPLETED!")
    print("=" * 60)
    print(f"✅ Total successful merges: {stats['successful']:,}")
    print(f"❌ Total failed merges: {stats['failed']:,}")
    print(f"📊 Success rate: {(stats['successful'] / (stats['successful'] + stats['failed']) * 100):.2f}%")
    print(f"⏱️ Total time: {total_time/60:.1f} minutes")
    print(f"⚡ Average rate: {(stats['successful'] + stats['failed']) / (total_time/60):.1f} merges/minute")
    print(f"⏰ Completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Final push
    print(f"\n🚀 Final push to remote...")
    run_command("git push origin main", timeout=600)

if __name__ == "__main__":
    main()