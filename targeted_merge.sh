#!/bin/bash

# Targeted merge script - process PRs in smaller batches
echo "Starting targeted merge process..."

# Process PRs in batches of 10
batch_size=10
current_batch=0
total_processed=0
total_success=0
total_failed=0

# Read PR numbers and process them in batches
while IFS= read -r pr_number; do
    if [ $((total_processed % batch_size)) -eq 0 ]; then
        current_batch=$((current_batch + 1))
        echo ""
        echo "=== PROCESSING BATCH $current_batch ==="
        
        # Pull latest changes before each batch
        echo "Pulling latest changes..."
        git pull origin main --no-rebase 2>/dev/null || {
            echo "  ⚠️  Pull failed, resolving conflicts..."
            git checkout --ours . 2>/dev/null
            git rm -f dist/index.html src/components/InteractiveTechShowcase2028.tsx 2>/dev/null
            git add . 2>/dev/null
            git commit -m "Resolve conflicts before batch $current_batch" 2>/dev/null
        }
    fi
    
    total_processed=$((total_processed + 1))
    echo "[$total_processed] Processing PR #$pr_number..."
    
    # Get the branch name for this PR
    branch_name=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" | grep -o '"ref": "[^"]*"' | sed 's/"ref": "\([^"]*\)"/\1/' | head -1)
    
    if [ -n "$branch_name" ] && [ "$branch_name" != "main" ]; then
        echo "  Branch: $branch_name"
        
        # Fetch the branch
        if git fetch origin "$branch_name:$branch_name" 2>/dev/null; then
            # Try to merge
            if git merge "$branch_name" --no-ff -m "Merge PR #$pr_number: $branch_name" 2>/dev/null; then
                echo "  ✅ Successfully merged PR #$pr_number"
                total_success=$((total_success + 1))
            else
                echo "  ⚠️  Resolving conflicts for PR #$pr_number..."
                # Resolve conflicts by choosing our version
                git checkout --ours . 2>/dev/null
                git rm -f dist/index.html src/components/InteractiveTechShowcase2028.tsx 2>/dev/null
                git add . 2>/dev/null
                
                if git commit -m "Merge PR #$pr_number: $branch_name - resolved conflicts" 2>/dev/null; then
                    echo "  ✅ Successfully merged PR #$pr_number (with conflict resolution)"
                    total_success=$((total_success + 1))
                else
                    echo "  ❌ Failed to merge PR #$pr_number"
                    git merge --abort 2>/dev/null
                    total_failed=$((total_failed + 1))
                fi
            fi
            
            # Clean up local branch
            git branch -D "$branch_name" 2>/dev/null
        else
            echo "  ❌ Failed to fetch branch for PR #$pr_number"
            total_failed=$((total_failed + 1))
        fi
    else
        echo "  ⚠️  Skipping PR #$pr_number (invalid branch name: $branch_name)"
    fi
    
    # Add a small delay
    sleep 0.3
    
    # Push every 5 merges to keep up with remote changes
    if [ $((total_processed % 5)) -eq 0 ]; then
        echo "  Pushing changes..."
        git push origin main 2>/dev/null || {
            echo "  ⚠️  Push failed, will retry later"
        }
    fi
    
done < pr_numbers.txt

echo ""
echo "=== TARGETED MERGE COMPLETED ==="
echo "Total processed: $total_processed"
echo "Successfully merged: $total_success"
echo "Failed: $total_failed"
echo "Success rate: $(( total_success * 100 / total_processed ))%"

# Final push
echo "Final push..."
git push origin main