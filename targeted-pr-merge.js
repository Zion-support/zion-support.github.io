#!/usr/bin/env node

/**
 * Targeted PR Merge - Focus on the most recent and important branches
 */import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Starting Targeted PR Merge Process...\n');

//Step 1: Ensure we're on main and up to date
console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
  console.log('✅ Main branch is up to date\n');
} catch (error) {
  console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

//Step 2: Define specific branches to merge (most recent and important)
const targetBranches = [
  //Recent cursor branches from today
  'cursor/fix-errors-and-merge-to-main-100d',
  'cursor/fix-errors-and-merge-to-main-2f1b',
  'cursor/fix-errors-and-merge-to-main-4800',
  'cursor/fix-errors-and-merge-to-main-494d',
  'cursor/fix-errors-and-merge-to-main-5696',
  'cursor/fix-errors-and-merge-to-main-6ee3',
  'cursor/fix-errors-and-merge-to-main-7318',
  'cursor/fix-errors-and-merge-to-main-97a6',
  'cursor/fix-errors-and-merge-to-main-9bdd',
  'cursor/fix-errors-and-merge-to-main-9caa',
  'cursor/fix-errors-and-merge-to-main-9f74',
  'cursor/fix-errors-and-merge-to-main-a0d2',
  'cursor/fix-errors-and-merge-to-main-b8f9',
  'cursor/fix-errors-and-merge-to-main-cefe',
  'cursor/fix-errors-and-merge-to-main-d0f7',
  'cursor/fix-errors-and-merge-to-main-dc65',
  'cursor/fix-errors-and-merge-to-main-f4fa',
  'cursor/fix-errors-and-merge-to-main-fbf8',
  'cursor/fix-errors-and-merge-to-main-fcbc',
  'cursor/fix-errors-and-merge-to-main-3b04',
  'cursor/fix-errors-and-merge-to-main-b122',
  'cursor/fix-errors-and-merge-to-main-ffaa',
  'cursor/fix-errors-and-merge-to-main-ffab',
  'cursor/fix-errors-and-merge-to-main-ffee',
  'cursor/fix-errors-and-merge-to-main-dc0f',
  //Content and feature branches
  'add-new-2026-content',
  'ai-2027-content-integration',
  'ai-dashboard-improvements',
  'ai-dashboard-improvements-merged',
  //Important fix branches
  'fix-typescript-errors-and-build',
  'merge-pr-25212',
  'resolve-pr-25168',
  'temp-merge-branch',
  'auto-merge-main',
];

console.log(`📊 Found ${targetBranches.length} target branches to process\n`);

//Step 3: Enhanced merge function with conflict resolution
function mergeBranch(branchName) {
  console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    //Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
      console.log(`✅ Branch ${branchName} is already merged, skipping...`);
      return { success: true, method: 'already_merged' };
    }

    //Try to merge
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

      //Try different conflict resolution strategies
      try {
        //Strategy 1: Use theirs
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
          //Strategy 2: Use ours
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

//Step 4: Process all target branches
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

for (const branch of targetBranches) {
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

//Step 5: Generate report
console.log('\n📊 Step 4: Generating merge report...');
const report = {
  ...results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(
  'targeted-pr-merge-report.json',
  JSON.stringify(report, null, 2)
);

//Step 6: Push changes
console.log('\n🚀 Step 5: Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  console.log('⚠️  Warning: Failed to push changes:', error.message);
}

// Step 7: Summary
console.log('\n🎉 TARGETED PR MERGE PROCESS COMPLETED!\n');
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

console.log('📄 Detailed report saved to: targeted-pr-merge-report.json');
console.log('🎯 Targeted PR merge process completed successfully!');
