#!/bin/bash

echo "=== Zion Tech Group - Strategic Merge Strategy ==="
echo ""

# Function to check if a command succeeded
check_success() {
    if [ $? -eq 0 ]; then
        echo "✅ $1 completed successfully"
    else
        echo "❌ $1 failed"
        exit 1
    fi
}

# Step 1: Create a backup branch
echo "Step 1: Creating backup branch..."
git checkout -b backup-main-$(date +%Y%m%d-%H%M%S)
check_success "Backup branch creation"

# Step 2: Return to main and reset to a clean state
echo "Step 2: Resetting main branch to clean state..."
git checkout main
git reset --hard HEAD
check_success "Reset to clean state"

# Step 3: Fetch latest changes
echo "Step 3: Fetching latest changes..."
git fetch origin
check_success "Fetch latest changes"

# Step 4: Create a new integration branch
echo "Step 4: Creating integration branch..."
git checkout -b integration-branch-$(date +%Y%m%d-%H%M%S)
check_success "Integration branch creation"

# Step 5: Cherry-pick our performance improvements
echo "Step 5: Cherry-picking performance improvements..."
git cherry-pick c023ef00500
check_success "Cherry-pick performance improvements"

# Step 6: Merge remote main
echo "Step 6: Merging remote main..."
git merge origin/main --no-edit
check_success "Merge remote main"

# Step 7: Check for conflicts
echo "Step 7: Checking for conflicts..."
if git status | grep -q "CONFLICT"; then
    echo "⚠️  Conflicts detected. Resolving automatically..."
    
    # Auto-resolve common conflicts
    echo "Auto-resolving common conflicts..."
    
    # For deleted files that were modified, keep the modified version
    git status --porcelain | grep "^DU" | while read line; do
        file=$(echo $line | cut -d' ' -f3)
        if [ -f "$file" ]; then
            echo "Keeping modified version of $file"
            git add "$file"
        fi
    done
    
    # For modified files, try to auto-merge
    git status --porcelain | grep "^UU" | while read line; do
        file=$(echo $line | cut -d' ' -f3)
        echo "Attempting to auto-resolve $file"
        
        # For specific files, use our version
        case "$file" in
            "src/App.tsx"|"src/components/EnhancedErrorBoundary.tsx"|"src/components/EnhancedSEO.tsx"|"src/components/SecurityEnhancer.tsx")
                echo "Using our version for $file"
                git checkout --ours "$file"
                git add "$file"
                ;;
            *)
                echo "Using remote version for $file"
                git checkout --theirs "$file"
                git add "$file"
                ;;
        esac
    done
    
    # Commit the resolved conflicts
    git commit -m "Auto-resolve merge conflicts - keep performance improvements"
    check_success "Auto-resolve conflicts"
else
    echo "✅ No conflicts detected"
fi

# Step 8: Switch back to main and merge
echo "Step 8: Merging integration branch to main..."
git checkout main
git merge integration-branch-$(date +%Y%m%d-%H%M%S) --no-edit
check_success "Merge integration branch"

# Step 9: Push to remote
echo "Step 9: Pushing to remote..."
git push origin main
check_success "Push to remote"

echo ""
echo "🎉 Strategic merge completed successfully!"
echo "📋 Summary:"
echo "   - Backup branch created"
echo "   - Performance improvements preserved"
echo "   - Remote changes integrated"
echo "   - Conflicts auto-resolved"
echo "   - Changes pushed to remote main"