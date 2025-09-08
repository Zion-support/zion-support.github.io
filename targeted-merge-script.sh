#!/bin/bash

# TARGETED MERGE SCRIPT - Process specific branches efficiently
echo "🎯 TARGETED MERGE SCRIPT - STARTING"
echo "===================================="

# Get specific branches to process
TARGET_BRANCHES=(
    "0nylrk-codex/fix-footer-contact-link"
    "0parff-codex/centralize-api-error-handling-and-add-errorboundary"
    "0smfo8-codex/fix-404-error-for-non-existent-route"
    "0t8m4m-codex/update-project-color-palette"
    "0une71-codex/fix-unsupported-shell-syntax-in-setup.sh"
    "14gqd5-codex/implement-checkout-flow-with-auth-redirect"
    "1dcwqi-codex/implement-global-pricing-with-currency-selection"
    "1fjs4s-codex/implement-instant-messaging-for-negotiations"
    "1m9jcs-codex/fix-client-side-rendering-and-javascript-errors"
    "1nc0kn-codex/fix-blank-screen-on-app-load"
    "1nq1ky-codex/render-talent-profiles-with-error-states"
    "1ry69n-codex/fix-npm-eio-error-during-install"
    "1sqc9r-codex/implement-light/dark-theme-with-persistence"
    "1tg4fy-codex/support-metric--imperial-units"
    "1wzbwr-codex/fix-typescript-errors-in-files"
    "2025-comprehensive-services-expansion"
    "22xuo1-codex/implement-wishlist-functionality"
    "24727i-codex/implement-stripe-checkout-flow"
    "2503nr-codex/fix-ts2614-error-with-suspense-import"
    "26ywwb-codex/fix-client-side-rendering-and-javascript-errors"
)

# Function to safely execute git commands with timeout
safe_git() {
    timeout 30 git "$@" 2>/dev/null
    return $?
}

# Ensure we're on main
echo "🔄 Switching to main branch..."
safe_git checkout main
if [ $? -ne 0 ]; then
    echo "❌ Failed to switch to main"
    exit 1
fi

# Pull latest
echo "📥 Pulling latest changes..."
safe_git pull origin main

SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Process each target branch
for branch in "${TARGET_BRANCHES[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        ((ERROR_COUNT++))
        continue
    fi
    
    # Create and checkout branch
    if safe_git checkout -b "$branch" "origin/$branch"; then
        echo "✅ Checked out: $branch"
        
        # Try to merge with main
        if safe_git merge main --no-edit; then
            echo "✅ Successfully merged: $branch"
            ((SUCCESS_COUNT++))
            
            # Push the merged branch
            safe_git push origin "$branch"
            
        else
            echo "⚠️  Merge conflict in: $branch"
            ((CONFLICT_COUNT++))
            
            # Try automatic conflict resolution
            echo "🔧 Attempting conflict resolution..."
            safe_git merge --abort
            
            # Try with strategy
            if safe_git merge main -X theirs --no-edit; then
                echo "✅ Auto-resolved conflicts: $branch"
                ((SUCCESS_COUNT++))
                safe_git push origin "$branch"
            else
                echo "❌ Manual resolution needed for: $branch"
                safe_git merge --abort
            fi
        fi
        
        # Return to main
        safe_git checkout main
        
        # Clean up
        safe_git branch -D "$branch" 2>/dev/null || true
        
    else
        echo "❌ Failed to checkout: $branch"
        ((ERROR_COUNT++))
    fi
done

echo ""
echo "🎉 TARGETED MERGE COMPLETED!"
echo "============================"
echo "Successfully merged: $SUCCESS_COUNT"
echo "Conflicts encountered: $CONFLICT_COUNT"
echo "Errors encountered: $ERROR_COUNT"
echo ""
echo "✅ Target branches processed!"
echo "🚀 Ready for next batch!"