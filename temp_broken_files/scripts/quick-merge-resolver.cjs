#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting quick merge conflict resolution...');

try {
  // Check current status
  console.log('📋 Checking git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' }
});
  console.log('Current status:', status);

  // Fetch latest changes
  console.log('📥 Fetching latest changes...');
  execSync('git fetch origin', { stdio: 'inherit' }
});
  execSync('git fetch --all', { stdio: 'inherit' }
});

  // Switch to main branch
  console.log('🔄 Switching to main branch...');
  execSync('git checkout main', { stdio: 'inherit' }
});

  // Pull latest changes
  console.log('📥 Pulling latest changes...');
  try {
    execSync('git pull origin main', { stdio: 'inherit' }
});
  } catch (error) {
    console.log('⚠️ Pull failed, attempting reset...');
    execSync('git reset --hard origin/main', { stdio: 'inherit' }
});
  }

  // Check for open PRs
  console.log('📋 Checking for open PRs...');
  try {
    const prs = execSync('gh pr list --state open --json number,title', { encoding: 'utf8' }
});
    const prList = JSON.parse(prs);
    console.log(`Found ${prList.length} open PRs:`);
    
    for (const pr of prList) {
      console.log(`- PR #${pr.number}: ${pr.title}`);
    }

    // Merge each PR
    for (const pr of prList) {
      console.log(`🔄 Merging PR #${pr.number}...`);
      try {
        execSync(`gh pr merge ${pr.number} --merge --delete-branch`, { stdio: 'inherit' }
});
        console.log(`✅ PR #${pr.number} merged successfully`);
      } catch (error) {
        console.log(`❌ Failed to merge PR #${pr.number}: ${error.message}`);
      }
    }
  } catch (error) {
    console.log('⚠️ Could not list PRs:', error.message);
  }

  // Cleanup
  console.log('🧹 Cleaning up...');
  try {
    execSync('git branch --merged | grep -v "\\*\\|main\\|master" | xargs -n 1 git branch -d', { stdio: 'inherit' }
});
  } catch (error) {
    // Ignore cleanup errors
  }

  console.log('✅ Merge conflict resolution completed!');

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}