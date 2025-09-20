#!/bin/bash

# Targeted Merge Script - Focus on specific important branches
set -e

echo "🚀 Starting Targeted Merge for Important Branches..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="targeted-merge-backup-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file"
    
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock")
            echo "📦 Package file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "netlify.toml"|"next.config.js"|"tsconfig.json"|"tailwind.config.js"|"vite.config.ts")
            echo "⚙️ Config file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "src/App.tsx"|"src/App.css"|"src/main.tsx"|"src/index.css"|"app/page.tsx"|"app/layout.tsx")
            echo "🎨 Main app files - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "README.md"|"*.md")
            echo "📚 Documentation - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "🔄 Generic file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    git add "$file" 2>/dev/null || true
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "🔄 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️ Branch $branch does not exist, skipping..."
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch_name"; then
        echo "⏭️ Branch $branch_name already merged, skipping..."
        ((SKIPPED_BRANCHES++))
        return 0
    fi
    
    # Try to merge
    if git merge --no-ff --no-edit "$branch" 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        ((SUCCESSFUL_MERGES++))
        return 0
    else
        echo "⚠️ Conflicts detected in: $branch_name"
        
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts..."
            
            # Resolve conflicts for each file
            git diff --name-only --diff-filter=U | while read -r file; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Complete the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged: $branch_name"
                ((SUCCESSFUL_MERGES++))
                ((CONFLICT_RESOLUTIONS++))
                return 0
            else
                echo "❌ Failed to commit after conflict resolution: $branch_name"
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "❌ Merge failed for: $branch_name (no conflicts detected)"
            git merge --abort 2>/dev/null || true
        fi
        
        ((FAILED_MERGES++))
        return 1
    fi
}

# Get specific important branches
echo "📋 Fetching important branches..."
git fetch --all

# Target specific important branches
TARGET_BRANCHES=(
    "origin/cursor/add-2030q1-services-ui-8deb1aee36d"
    "origin/cursor/add-and-advertise-new-services-then-build-0357"
    "origin/cursor/add-and-advertise-new-services-then-build-03b6"
    "origin/cursor/add-and-advertise-new-services-then-build-06aa"
    "origin/cursor/add-and-advertise-new-services-then-build-0756"
    "origin/cursor/add-and-advertise-new-services-then-build-0c04"
    "origin/cursor/add-and-advertise-new-services-then-build-0cca"
    "origin/cursor/add-and-advertise-new-services-then-build-174e"
    "origin/cursor/add-and-advertise-new-services-then-build-17cc"
    "origin/cursor/add-and-advertise-new-services-then-build-192f"
)

TOTAL_BRANCHES=${#TARGET_BRANCHES[@]}
echo "📊 Processing $TOTAL_BRANCHES targeted branches..."

# Process each target branch
for branch in "${TARGET_BRANCHES[@]}"; do
    echo "🔄 Processing: $branch"
    
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Push after each successful merge
    if [ $SUCCESSFUL_MERGES -gt 0 ] && [ $((SUCCESSFUL_MERGES % 3)) -eq 0 ]; then
        echo "🚀 Pushing progress..."
        git push origin main
    fi
    
    echo "---"
done

# Final push
echo "🚀 Final push to main..."
git push origin main

# Summary
echo ""
echo "🎉 Targeted Merge completed!"
echo "⏰ Finished at: $(date)"
echo "📊 Final Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "⏭️ Skipped branches: $SKIPPED_BRANCHES"
echo "📋 Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES + SKIPPED_BRANCHES))"
echo "🔒 Backup branch: $BACKUP_BRANCH"

echo ""
echo "💡 Next steps:"
echo "   1. Review merged changes: git log --oneline -20"
echo "   2. Test the application: npm run build"
echo "   3. Delete backup when satisfied: git push origin --delete $BACKUP_BRANCH"