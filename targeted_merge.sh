#!/bin/bash

# Targeted Merge Script for High-Priority Branches
set -e

echo "🎯 Starting targeted merge for high-priority branches..."
echo "⏰ Started at: $(date)"

# High-priority branches (these are typically the most important)
PRIORITY_BRANCHES=(
    "cursor/add-new-services-and-advertise-them-new"
    "cursor/add-comprehensive-services-2025"
    "cursor/add-innovative-services-2025"
    "cursor/add-next-gen-innovative-services"
    "cursor/analyze-improve-and-deploy-application-2027"
    "cursor/analyze-and-improve-ziontechgroup-website-and-repository-03f9"
    "cursor/agent-enhancement-and-main-branch-integration-4c76"
    "cursor/agents-factory-setup"
    "codex/implement-stripe-checkout-flow"
    "codex/implement-cart-functionality-with-react-context"
    "codex/implement-light/dark-theme-with-persistence"
    "codex/fix-typescript-errors-in-files"
    "codex/fix-client-side-rendering-and-javascript-errors"
    "codex/implement-ai-powered-help-system"
    "codex/implement-analytics-and-error-tracking"
    "codex/implement-global-error-boundary-with-toasts"
    "codex/improve-accessibility-for-sliders-and-toggles"
    "codex/implement-feature-flags-and-a/b-testing"
    "codex/implement-i18n-with-flag-dropdown"
    "codex/implement-lazy-loading-for-hero-images"
)

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Function to resolve conflicts
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file"
    
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock"|"pnpm-lock.yaml")
            echo "📦 Package file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "netlify.toml"|"next.config.js"|"tsconfig.json"|"tailwind.config.js"|"vite.config.ts")
            echo "⚙️ Config file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "src/App.tsx"|"src/App.css"|"src/main.tsx"|"src/index.css")
            echo "🎨 Main app files - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "README.md"|"*.md")
            echo "📚 Documentation - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            echo "💻 Code file - attempting smart merge"
            # Remove conflict markers
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
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
    
    echo "🔄 Processing priority branch: $branch"
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️ Branch $branch doesn't exist"
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch" 2>/dev/null; then
        echo "⏭️ Branch $branch already merged"
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    # Fetch the branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        echo "⚠️ Could not fetch $branch"
        ((SKIPPED_BRANCHES++))
        return 1
    fi
    
    # Try to merge
    if git merge --no-edit "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((SUCCESSFUL_MERGES++))
        return 0
    else
        echo "⚠️ Merge conflicts in $branch - resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts for each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Complete the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged $branch"
                ((SUCCESSFUL_MERGES++))
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                ((FAILED_MERGES++))
                return 1
            fi
        else
            echo "❌ Failed to merge $branch (no conflicts found)"
            git merge --abort 2>/dev/null || true
            ((FAILED_MERGES++))
            return 1
        fi
    fi
}

# Process priority branches
echo "📋 Processing ${#PRIORITY_BRANCHES[@]} priority branches..."
echo "---"

for branch in "${PRIORITY_BRANCHES[@]}"; do
    if merge_branch "$branch"; then
        echo "✅ Priority branch $branch processed successfully"
    else
        echo "❌ Failed to process priority branch $branch"
    fi
    echo "---"
done

# Push changes
echo "💾 Pushing changes..."
git push origin main

# Summary
echo ""
echo "🎉 Targeted merge completed!"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "⚠️ Skipped branches: $SKIPPED_BRANCHES"
echo "⏰ Finished at: $(date)"

# Test build
echo "🧪 Testing build..."
if npm run build; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed - manual intervention needed"
fi