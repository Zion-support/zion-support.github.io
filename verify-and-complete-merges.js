#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Verifying and Completing Merge Process');
console.log('==========================================');

// Function to run git commands safely
function runGitCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    const result = execSync(command, { 
      cwd: '/workspace',
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 30000
    });
    console.log(`✅ ${description} completed`);
    return result.trim();
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return null;
  }
}

// Function to check for merge conflicts
function checkForConflicts() {
  console.log('\n📋 Checking for merge conflicts...');
  
  const status = runGitCommand('git status --porcelain', 'Checking git status');
  if (!status) return false;
  
  const hasConflicts = status.includes('UU') || status.includes('AA') || status.includes('DD');
  if (hasConflicts) {
    console.log('⚠️  Merge conflicts detected!');
    return true;
  } else {
    console.log('✅ No merge conflicts found');
    return false;
  }
}

// Function to resolve conflicts automatically
function resolveConflicts() {
  console.log('\n🔧 Resolving merge conflicts...');
  
  const conflictFiles = runGitCommand('git diff --name-only --diff-filter=U', 'Getting conflict files');
  if (!conflictFiles) return false;
  
  const files = conflictFiles.split('\n').filter(f => f.trim());
  console.log(`Found ${files.length} files with conflicts`);
  
  for (const file of files) {
    console.log(`  - Resolving conflicts in: ${file}`);
    
    // Strategy: Keep our changes (HEAD) for most files
    if (file.includes('package.json') || file.includes('package-lock.json')) {
      // For package files, prefer incoming changes
      runGitCommand(`git checkout --theirs "${file}"`, `Resolving ${file} (prefer incoming)`);
    } else {
      // For other files, keep our changes
      runGitCommand(`git checkout --ours "${file}"`, `Resolving ${file} (keep ours)`);
    }
    
    runGitCommand(`git add "${file}"`, `Adding resolved ${file}`);
  }
  
  // Commit the resolved conflicts
  const commitResult = runGitCommand('git commit -m "Resolve merge conflicts automatically"', 'Committing resolved conflicts');
  return commitResult !== null;
}

// Function to get remote branches
function getRemoteBranches() {
  console.log('\n📋 Getting remote branches...');
  
  const branches = runGitCommand('git branch -r', 'Getting remote branches');
  if (!branches) return [];
  
  return branches
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'))
    .slice(0, 20); // Limit to first 20 branches
}

// Function to merge a branch
function mergeBranch(branchName) {
  console.log(`\n🔄 Processing branch: ${branchName}`);
  
  // Switch to main
  if (!runGitCommand('git checkout main', 'Switching to main')) return false;
  
  // Pull latest changes
  if (!runGitCommand('git pull origin main', 'Pulling latest main')) return false;
  
  // Fetch the branch
  if (!runGitCommand(`git fetch origin ${branchName}`, `Fetching ${branchName}`)) return false;
  
  // Try to merge
  const mergeResult = runGitCommand(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`, `Merging ${branchName}`);
  
  if (mergeResult !== null) {
    console.log(`✅ Successfully merged ${branchName}`);
    
    // Push to main
    if (runGitCommand('git push origin main', `Pushing updated main`)) {
      console.log(`✅ Successfully pushed ${branchName} to main`);
      return true;
    }
  } else {
    console.log(`⚠️  Merge conflicts detected for ${branchName}`);
    
    // Try to resolve conflicts
    if (resolveConflicts()) {
      console.log(`✅ Successfully resolved conflicts for ${branchName}`);
      
      // Push the resolved merge
      if (runGitCommand('git push origin main', `Pushing resolved merge for ${branchName}`)) {
        console.log(`✅ Successfully pushed resolved merge for ${branchName}`);
        return true;
      }
    }
  }
  
  return false;
}

// Main function
async function main() {
  try {
    console.log('📍 Starting verification and completion process...');
    
    // Check if we're in a git repository
    if (!runGitCommand('git rev-parse --git-dir', 'Checking git repository')) {
      console.log('❌ Not in a git repository');
      return;
    }
    
    // Check current branch
    const currentBranch = runGitCommand('git branch --show-current', 'Getting current branch');
    console.log(`📍 Current branch: ${currentBranch}`);
    
    // Switch to main if not already there
    if (currentBranch !== 'main') {
      if (!runGitCommand('git checkout main', 'Switching to main')) {
        console.log('❌ Could not switch to main branch');
        return;
      }
    }
    
    // Pull latest changes
    if (!runGitCommand('git pull origin main', 'Pulling latest main')) {
      console.log('⚠️  Could not pull latest main, continuing...');
    }
    
    // Check for existing conflicts
    if (checkForConflicts()) {
      console.log('🔧 Resolving existing conflicts...');
      if (resolveConflicts()) {
        console.log('✅ Successfully resolved existing conflicts');
      } else {
        console.log('❌ Failed to resolve existing conflicts');
        return;
      }
    }
    
    // Get remote branches to process
    const remoteBranches = getRemoteBranches();
    console.log(`Found ${remoteBranches.length} remote branches to process`);
    
    if (remoteBranches.length === 0) {
      console.log('✅ No remote branches to process');
      return;
    }
    
    let mergedCount = 0;
    let failedCount = 0;
    
    // Process each branch
    for (const branch of remoteBranches) {
      if (mergeBranch(branch)) {
        mergedCount++;
      } else {
        failedCount++;
      }
      
      // Small delay between branches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n🎉 Process completed!');
    console.log(`✅ Successfully merged: ${mergedCount} branches`);
    console.log(`❌ Failed to merge: ${failedCount} branches`);
    
    // Final status check
    console.log('\n📊 Final status check...');
    const finalStatus = runGitCommand('git status --porcelain', 'Final status check');
    if (finalStatus && finalStatus.trim() === '') {
      console.log('✅ Repository is clean - no uncommitted changes');
    } else {
      console.log('⚠️  Repository has uncommitted changes:');
      console.log(finalStatus);
    }
    
  } catch (error) {
    console.error('❌ Error during process:', error.message);
  }
}

// Run the main function
main();