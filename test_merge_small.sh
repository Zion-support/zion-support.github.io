#!/bin/bash

echo "Testing PR merge process with first 3 PRs..."
echo "============================================"
echo "Repository: Zion-Holdings/zion.app"
echo "Target branch: main"
echo ""

# Function to log messages with timestamps
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to handle merge conflicts
resolve_conflicts() {
    local pr_number=$1
    local branch_name=$2
    
    log_message "Resolving conflicts for PR #$pr_number ($branch_name)..."
    
    # Check if there are unmerged paths
    if git status | grep -q "unmerged paths"; then
        log_message "Conflicts detected, attempting automatic resolution..."
        
        # Get list of conflicted files
        local conflicted_files=$(git status --porcelain | grep "^UU" | awk '{print $2}')
        
        if [ -n "$conflicted_files" ]; then
            log_message "Conflicted files: $conflicted_files"
            
            # Try to resolve conflicts by accepting incoming changes for common file types
            for file in $conflicted_files; do
                if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.jsx ]]; then
                    log_message "Resolving TypeScript/JavaScript file: $file"
                    git checkout --theirs "$file" 2>/dev/null
                elif [[ "$file" == *.css ]] || [[ "$file" == *.scss ]]; then
                    log_message "Resolving CSS file: $file"
                    git checkout --theirs "$file" 2>/dev/null
                elif [[ "$file" == *.json ]]; then
                    log_message "Resolving JSON file: $file"
                    git checkout --theirs "$file" 2>/dev/null
                elif [[ "$file" == *.md ]]; then
                    log_message "Resolving Markdown file: $file"
                    git checkout --theirs "$file" 2>/dev/null
                else
                    log_message "Resolving other file: $file"
                    git checkout --theirs "$file" 2>/dev/null
                fi
            done
            
            # Add all resolved files
            git add . 2>/dev/null
            
            # Try to commit the resolved conflicts
            if git commit -m "Merge PR #$pr_number: $branch_name (auto-resolved conflicts)" 2>/dev/null; then
                log_message "✓ Conflicts resolved and merge committed for PR #$pr_number"
                return 0
            else
                log_message "✗ Failed to commit resolved conflicts for PR #$pr_number"
                return 1
            fi
        else
            log_message "No conflicted files found, but merge status indicates conflicts"
            return 1
        fi
    else
        log_message "No conflicts detected"
        return 0
    fi
}

# Function to process a single PR
process_pr() {
    local pr_number=$1
    local branch_name=$2
    
    log_message "Processing PR #$pr_number from branch: $branch_name"
    
    # Fetch the branch
    log_message "Fetching branch $branch_name..."
    if ! git fetch origin "$branch_name" 2>/dev/null; then
        log_message "✗ Failed to fetch branch $branch_name"
        return 1
    fi
    
    # Check if we can fast-forward merge
    if git merge-base --is-ancestor HEAD "origin/$branch_name" 2>/dev/null; then
        log_message "Branch can be fast-forwarded, performing fast-forward merge..."
        if git merge "origin/$branch_name" --ff-only --no-edit 2>/dev/null; then
            log_message "✓ Fast-forward merge successful for PR #$pr_number"
            return 0
        else
            log_message "Fast-forward merge failed, trying regular merge..."
        fi
    fi
    
    # Attempt regular merge
    log_message "Attempting regular merge..."
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        log_message "✓ Successfully merged PR #$pr_number"
        return 0
    else
        log_message "✗ Merge failed for PR #$pr_number, attempting conflict resolution..."
        
        # Try to resolve conflicts
        if resolve_conflicts "$pr_number" "$branch_name"; then
            return 0
        else
            log_message "✗ Conflict resolution failed for PR #$pr_number, aborting merge..."
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Main processing loop - only process first 3 PRs
log_message "Starting to process first 3 open PRs..."

# Extract PR information and process each one (limit to first 3)
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
    count++
}
/"head":/ {
    in_head = 1
}
/"ref":/ && in_head {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url" && count <= 3) {
        printf "%s|%s\n", pr_number, ref
        in_head = 0
    }
}
' prs.json | while IFS='|' read -r pr_number branch_name; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ]; then
        echo ""
        echo "=========================================="
        log_message "Processing PR #$pr_number from branch: $branch_name"
        echo "=========================================="
        
        if process_pr "$pr_number" "$branch_name"; then
            log_message "✓ PR #$pr_number processed successfully"
        else
            log_message "✗ PR #$pr_number processing failed"
        fi
        
        echo "=========================================="
        echo ""
    fi
done

# Final status
echo ""
log_message "Test completed. Checking final status..."
git status

echo ""
log_message "Test process complete!"
log_message "Summary:"
git log --oneline -5