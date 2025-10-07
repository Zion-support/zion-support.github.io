#!/usr/bin/env node

/**
 * Ultimate PR Merge - Comprehensive merge of all remaining branches
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting Ultimate PR Merge Process...\n');

// Step 1: Ensure we're on main and up to date
console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  console.log('✅ Main branch is up to date\n');
} catch (error) {
  console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

// Step 2: Get all branches that need merging
console.log('📊 Step 2: Identifying all branches to merge...');

// Get all remote branches
const allBranches = execSync('git branch -r', { encoding: 'utf8' })
  .split('\n')
  .map(branch => branch.trim())
  .filter(branch => branch && !branch.includes('HEAD'))
  .filter(branch => !branch.includes('backup'))
  .filter(branch => !branch.includes('aggressive'))
  .filter(branch => !branch.includes('automation'))
  .map(branch => branch.replace('origin/', ''));

// Filter for relevant branches
const relevantBranches = allBranches.filter(
  branch =>
    branch.includes('cursor') ||
    branch.includes('fix') ||
    branch.includes('merge') ||
    branch.includes('candidate') ||
    branch.includes('chore') ||
    branch.includes('add-new') ||
    branch.includes('ai-') ||
    branch.includes('codex') ||
    branch.includes('pr-') ||
    branch.includes('resolve-')
);

console.log(
  `📊 Found ${relevantBranches.length} relevant branches to process\n`
);

// Step 3: Enhanced merge function with conflict resolution
function mergeBranch(branchName) {
  console.log(`\n🔄 Processing ${branchName}...`);

  try {
    // Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    // Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
      console.log(`✅ Branch ${branchName} is already merged, skipping...`);
      return { success: true, method: 'already_merged' };
    }

    // Try to merge
    try {
      execSync(
        `git merge origin/${branchName} --no-ff -m "Merge ${branchName}: automated merge"`,
        { stdio: 'inherit' }
      );
      console.log(`✅ Successfully merged ${branchName}`);
      return { success: true, method: 'direct' };
    } catch (mergeError) {
      console.log(
        `⚠️  Merge conflict detected for ${branchName}, attempting resolution...`
      );

      // Try different conflict resolution strategies
      try {
        // Strategy 1: Use theirs
        execSync(
          `git merge origin/${branchName} --strategy-option=theirs --no-ff -m "Merge ${branchName}: using theirs strategy"`,
          { stdio: 'inherit' }
        );
        console.log(
          `✅ Successfully merged ${branchName} using 'theirs' strategy`
        );
        return { success: true, method: 'theirs' };
      } catch (theirsError) {
        try {
          // Strategy 2: Use ours
          execSync(
            `git merge origin/${branchName} --strategy-option=ours --no-ff -m "Merge ${branchName}: using ours strategy"`,
            { stdio: 'inherit' }
          );
          console.log(
            `✅ Successfully merged ${branchName} using 'ours' strategy`
          );
          return { success: true, method: 'ours' };
        } catch (oursError) {
          console.log(
            `❌ Failed to merge ${branchName} after trying all strategies`
          );
          return { success: false, method: 'failed' };
        }
      }
    }
  } catch (error) {
    console.log(`❌ Branch ${branchName} not found or error: ${error.message}`);
    return { success: false, method: 'not_found' };
  }
}

// Step 4: Process branches in batches
const results = {
  successful: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: {
      direct: 0,
      theirs: 0,
      ours: 0,
      already_merged: 0,
      not_found: 0,
      failed: 0,
    },
  },
};

console.log('🚀 Step 3: Executing merge strategy...\n');

// Process in batches of 10 to avoid overwhelming the system
const batchSize = 10;
const totalBatches = Math.ceil(relevantBranches.length / batchSize);

for (let batch = 0; batch < totalBatches; batch++) {
  const start = batch * batchSize;
  const end = Math.min(start + batchSize, relevantBranches.length);
  const batchBranches = relevantBranches.slice(start, end);

  console.log(
    `\n📦 Processing batch ${batch + 1}/${totalBatches} (${batchBranches.length} branches)...`
  );

  for (const branch of batchBranches) {
    const result = mergeBranch(branch);
    results.summary.total++;

    if (result.success) {
      results.successful.push({
        branch: branch,
        success: true,
        method: result.method,
      });
      results.summary.successful++;
      results.summary.methods[result.method]++;
    } else {
      results.failed.push({
        branch: branch,
        success: false,
        method: result.method,
      });
      results.summary.failed++;
      results.summary.methods[result.method]++;
    }
  }

  // Push changes after each batch
  if (batch % 5 === 0 || batch === totalBatches - 1) {
    try {
      execSync('git push origin main', { stdio: 'inherit' });
      console.log(`✅ Pushed changes after batch ${batch + 1}`);
    } catch (error) {
      console.log(
        `⚠️  Warning: Failed to push after batch ${batch + 1}:`,
        error.message
      );
    }
  }
}

// Step 5: Generate final report
console.log('\n📊 Step 4: Generating final merge report...');
const report = {
  ...results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(
  'ultimate-pr-merge-report.json',
  JSON.stringify(report, null, 2)
);

// Step 6: Final push
console.log('\n🚀 Step 5: Final push...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  console.log('⚠️  Warning: Failed to push final changes:', error.message);
}

// Step 7: Summary
console.log('\n🎉 ULTIMATE PR MERGE PROCESS COMPLETED!\n');
console.log('📊 SUMMARY:');
console.log(`  Total branches processed: ${results.summary.total}`);
console.log(`  Successful merges: ${results.summary.successful}`);
console.log(`  Failed merges: ${results.summary.failed}\n`);

console.log('🔧 RESOLUTION METHODS:');
console.log(`  Direct merges: ${results.summary.methods.direct}`);
console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
console.log(`  Already merged: ${results.summary.methods.already_merged}`);
console.log(`  Not found: ${results.summary.methods.not_found}`);
console.log(`  Failed: ${results.summary.methods.failed}\n`);

console.log('📄 Detailed report saved to: ultimate-pr-merge-report.json');
console.log('🎯 Ultimate PR merge process completed successfully!');
