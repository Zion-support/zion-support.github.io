#!/bin/bash

# Systematic PR Merge Script with Conflict Resolution
echo "Starting systematic PR merge process..."

# Function to merge a PR with comprehensive conflict resolution
merge_pr_systematic() {
    local pr_number=$1
    local pr_title=$2
    local branch_name=$3
    
    echo "🔄 Processing PR #$pr_number: $pr_title"
    echo "   Branch: $branch_name"
    
    # Fetch the branch
    if ! git fetch origin "$branch_name" 2>/dev/null; then
        echo "   ❌ Failed to fetch branch $branch_name"
        return 1
    fi
    
    echo "   ✅ Successfully fetched $branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        echo "   ✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "   ⚠️  Merge conflict detected in PR #$pr_number - resolving..."
        
        # Get list of conflicted files
        conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
        
        if [ -z "$conflicted_files" ]; then
            echo "   ℹ️  No conflicts to resolve, committing..."
            git add .
            if git commit -m "Merge PR #$pr_number: $pr_title" 2>/dev/null; then
                echo "   ✅ Successfully committed PR #$pr_number"
                return 0
            else
                echo "   ❌ Failed to commit PR #$pr_number"
                git merge --abort 2>/dev/null
                return 1
            fi
        fi
        
        # Resolve conflicts systematically
        echo "   🔧 Resolving conflicts in files: $conflicted_files"
        
        for file in $conflicted_files; do
            echo "     Processing: $file"
            
            # Use our preferred version for common files
            case "$file" in
                "build.sh"|"build-npm.sh"|"netlify.toml"|"package.json"|".yarnrc"*|"yarn.lock")
                    echo "       Using our preferred version for $file"
                    git checkout --ours "$file" 2>/dev/null
                    ;;
                "dist/"*|"out/"*|"node_modules/"*)
                    echo "       Using our preferred version for $file"
                    git checkout --ours "$file" 2>/dev/null
                    ;;
                *)
                    echo "       Using our preferred version for $file"
                    git checkout --ours "$file" 2>/dev/null
                    ;;
            esac
        done
        
        # Add all resolved files
        git add .
        
        # Commit the merge
        if git commit -m "Merge PR #$pr_number: $pr_title - resolved conflicts by preferring main branch changes" 2>/dev/null; then
            echo "   ✅ Successfully resolved conflicts and merged PR #$pr_number"
            return 0
        else
            echo "   ❌ Failed to commit merge for PR #$pr_number"
            git merge --abort 2>/dev/null
            return 1
        fi
    fi
}

# Get all open PRs
echo "📋 Fetching open PRs..."
prs_json=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100")

# Extract PR information and process
echo "$prs_json" | grep -E '"number":|"title":|"ref":' | while IFS= read -r line; do
    if echo "$line" | grep -q '"number":'; then
        pr_number=$(echo "$line" | grep -o '[0-9]\+')
    elif echo "$line" | grep -q '"title":'; then
        pr_title=$(echo "$line" | sed 's/.*"title": *"\([^"]*\)".*/\1/')
    elif echo "$line" | grep -q '"ref":'; then
        pr_ref=$(echo "$line" | sed 's/.*"ref": *"\([^"]*\)".*/\1/')
        if [ -n "$pr_number" ] && [ -n "$pr_title" ] && [ -n "$pr_ref" ] && [ "$pr_ref" != "main" ]; then
            merge_pr_systematic "$pr_number" "$pr_title" "$pr_ref"
            echo "---"
        fi
    fi
done

echo "🎉 PR merge process completed!"
echo "📤 Pushing all changes to main..."

# Push all changes
if git push origin main; then
    echo "✅ All changes successfully pushed to main branch!"
else
    echo "❌ Failed to push changes to main branch"
    exit 1
fi

echo "📊 Final status check..."
git status
echo "✅ Systematic PR merge process completed successfully!"