#!/bin/bash

# Ultimate Merge Resolution Script
set -e

echo "🚀 Starting Ultimate Merge Resolution Process..."
echo "📅 $(date)"

# Function to safely merge a branch with comprehensive conflict resolution
merge_branch_ultimately() {
    local branch_name="$1"
    local timestamp=$(date +%Y%m%d-%H%M%S)
    
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch_name" main 2>/dev/null; then
        echo "✅ Branch $branch_name already merged, skipping..."
        return 0
    fi
    
    echo "🔄 Attempting to merge $branch_name..."
    
    # Try direct merge first
    if git merge "origin/$branch_name" --no-commit --no-ff 2>/dev/null; then
        git commit -m "Merge $branch_name - resolved automatically - $timestamp"
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving automatically..."
        
        # Get list of conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Auto-resolving conflicts in: $conflicted_files"
            
            # Resolve conflicts intelligently
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    echo "  - Resolving $file"
                    
                    # Different resolution strategies based on file type
                    case "$file" in
                        *.json|package-lock.json|yarn.lock)
                            # For package files, prefer incoming changes
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                            ;;
                        *.md|*.txt|*.yml|*.yaml)
                            # For documentation, prefer incoming changes
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                            ;;
                        *)
                            # For source code, prefer our changes but fall back to theirs
                            git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null || true
                            ;;
                    esac
                    
                    git add "$file"
                fi
            done
            
            # Try to commit the resolved merge
            if git commit -m "Merge $branch_name - auto-resolved conflicts - $timestamp"; then
                echo "✅ Successfully merged $branch_name with auto-resolved conflicts"
                return 0
            else
                echo "❌ Failed to commit resolved merge for $branch_name"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ No conflicted files found, aborting merge for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all recent branches that need merging
echo "🔍 Finding branches to merge..."

# Get the specific cursor branches that were just fetched
cursor_branches=(
    "cursor/check-fix-push-and-merge-to-main-0a34"
    "cursor/check-fix-push-and-merge-to-main-2148"
    "cursor/check-fix-push-and-merge-to-main-2b29"
    "cursor/check-fix-push-and-merge-to-main-43bd"
    "cursor/check-fix-push-and-merge-to-main-5149"
    "cursor/check-fix-push-and-merge-to-main-59e4"
    "cursor/check-fix-push-and-merge-to-main-6972"
    "cursor/check-fix-push-and-merge-to-main-6d12"
    "cursor/check-fix-push-and-merge-to-main-6df3"
    "cursor/check-fix-push-and-merge-to-main-8c36"
    "cursor/check-fix-push-and-merge-to-main-b528"
    "cursor/check-fix-push-and-merge-to-main-d62b"
    "cursor/check-fix-push-and-merge-to-main-d753"
    "cursor/check-fix-push-and-merge-to-main-dd78"
)

# Get other branches
other_branches=(
    "maintenance/deps-minor-20250924-125228"
    "push-to-main-merge-automation-20250924-130735"
)

echo "📊 Found ${#cursor_branches[@]} cursor branches and ${#other_branches[@]} other branches to process"

successful_merges=0
failed_merges=0

# Process cursor branches
echo ""
echo "🔄 Phase 1: Processing cursor branches..."
for branch in "${cursor_branches[@]}"; do
    echo ""
    echo "🔄 Processing: $branch"
    
    if merge_branch_ultimately "$branch"; then
        ((successful_merges++))
        echo "✅ Success: $branch"
    else
        ((failed_merges++))
        echo "❌ Failed: $branch"
    fi
    
    # Small delay
    sleep 0.1
done

# Process other branches
echo ""
echo "🔄 Phase 2: Processing other branches..."
for branch in "${other_branches[@]}"; do
    echo ""
    echo "🔄 Processing: $branch"
    
    if merge_branch_ultimately "$branch"; then
        ((successful_merges++))
        echo "✅ Success: $branch"
    else
        ((failed_merges++))
        echo "❌ Failed: $branch"
    fi
    
    # Small delay
    sleep 0.1
done

echo ""
echo "📊 Ultimate Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📊 Total processed: $((successful_merges + failed_merges))"
echo "📅 Completed at: $(date)"

# Push all changes to remote
if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🚀 Pushing changes to remote..."
    git push origin main --force-with-lease
    echo "✅ All changes pushed successfully!"
fi

echo "🎉 Ultimate merge resolution completed!"