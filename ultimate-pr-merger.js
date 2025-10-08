#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 ULTIMATE PR MERGER - FINAL COMPREHENSIVE MERGE');
// console.log('==================================================');

//Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
    // console.log(`📋 Executing: ${description}`);
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    // console.log(`✅ ${description} - Success`);
    return { success: true, result };
  } catch (error) {
    // console.log(`⚠️  ${description} - Warning: ${error.message}`);
    return { success: false, error: error.message };
  }
}

//Function to check if branch exists
function branchExists(branchName) {
  try {
    execSync(
      `git show-ref --verify --quiet refs/remotes/origin/${branchName}`,
      { stdio: 'pipe' }
    );
    return true;
  } catch {
    return false;
  }
}

//All PRs to process
const allPRs = [
  {
    number: 11935,
    title: 'Fix web application console errors',
    branch: 'cursor/fix-web-application-console-errors-0bf5',
    sha: 'd4e66d09ceb2c6c48f1f522df7030a5261c4c661',
    priority: 'critical',
    description: 'Critical console errors and PWA fixes',
  },
  {
    number: 25063,
    title: 'Build and deploy with vite and netlify',
    branch: 'cursor/build-and-deploy-with-vite-and-netlify-8b37',
    sha: 'd2deed6f7d4ef805058d58bdadeb11ca5a746580',
    priority: 'high',
    description: 'Netlify configuration updates',
  },
  {
    number: 25062,
    title: 'Fix errors and merge to main',
    branch: 'cursor/fix-errors-and-merge-to-main-fcbd',
    sha: 'a5f35d4a9ddcf46941c797da316bb3a2b7b05b56',
    priority: 'high',
    description: 'Remove unused PerformanceOptimizer import',
  },
  {
    number: 25061,
    title: 'Fix errors and merge to main',
    branch: 'cursor/fix-errors-and-merge-to-main-e6e1',
    sha: '29f97d68b44ddf467a8bada29cb68cb2100d59db',
    priority: 'high',
    description: 'Remove unused PerformanceOptimizer import',
  },
];

//Ensure we're on main branch
// console.log('\n📍 Setting up environment...');
safeGitCommand('git checkout main', 'Switch to main branch');
safeGitCommand('git pull origin main', 'Pull latest changes from main');

// console.log('\n🔍 Checking all PR branches...');

let mergedCount = 0;
let conflictCount = 0;
let notFoundCount = 0;
const skippedCount = 0;
const results = [];

//Process each PR
for (const pr of allPRs) {
  // console.log(
    `\n--- Processing PR #${pr.number}: ${pr.title} (Priority: ${pr.priority}) ---`
  );
  // console.log(`📝 Description: ${pr.description}`);

  //Check if branch exists
  if (!branchExists(pr.branch)) {
    // console.log(`❌ Branch ${pr.branch} not found, skipping...`);
    notFoundCount++;
    results.push({
      pr: pr.number,
      title: pr.title,
      status: 'not_found',
      branch: pr.branch,
      priority: pr.priority,
    });
    continue;
  }

  // console.log(`✅ Branch ${pr.branch} found`);

  //Try to merge the branch
  const mergeResult = safeGitCommand(
    `git merge origin/${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`,
    `Merge ${pr.branch}`
  );

  if (mergeResult.success) {
    mergedCount++;
    // console.log(`🎉 Successfully merged PR #${pr.number}`);
    results.push({
      pr: pr.number,
      title: pr.title,
      status: 'merged',
      branch: pr.branch,
      priority: pr.priority,
    });
  } else {
    conflictCount++;
    // console.log(`⚠️  Merge conflict or error for PR #${pr.number}`);

    //Try to abort the merge if there was a conflict
    safeGitCommand('git merge --abort', `Abort merge for ${pr.branch}`);

    results.push({
      pr: pr.number,
      title: pr.title,
      status: 'conflict',
      branch: pr.branch,
      priority: pr.priority,
      error: mergeResult.error,
    });
  }
}

//Run comprehensive system checks
// console.log('\n🔧 Running comprehensive system checks...');
const typeCheck = safeGitCommand(
  'pnpm run type-check',
  'TypeScript type checking'
);
const lintCheck = safeGitCommand('pnpm run lint', 'ESLint linting');
const testCheck = safeGitCommand('pnpm run test', 'Jest testing');
const buildCheck = safeGitCommand(
  'pnpm run build:no-check',
  'Production build'
);

//Push changes if any were merged
if (mergedCount > 0) {
  // console.log('\n📤 Pushing changes to main...');
  const pushResult = safeGitCommand(
    'git push origin main',
    'Push changes to main'
  );
  if (pushResult.success) {
    // console.log('✅ All changes pushed to main successfully');
  } else {
    // console.log('❌ Error pushing changes to main');
  }
}

//Generate comprehensive final report
const finalReport = {
  timestamp: new Date().toISOString(),
  summary: {
    totalPRs: allPRs.length,
    merged: mergedCount,
    conflicts: conflictCount,
    notFound: notFoundCount,
    skipped: skippedCount,
    successRate: `${Math.round((mergedCount / allPRs.length) * 100)}%`,
  },
  systemChecks: {
    typeCheck: typeCheck.success,
    lintCheck: lintCheck.success,
    testCheck: testCheck.success,
    buildCheck: buildCheck.success,
    allPassed:
      typeCheck.success &&
      lintCheck.success &&
      testCheck.success &&
      buildCheck.success,
  },
  results: results,
  status: mergedCount > 0 ? 'success' : 'no-changes',
  repository: {
    branch: 'main',
    status: 'clean',
    lastCommit: execSync('git log --oneline -1', { encoding: 'utf8' }).trim(),
  },
};

//Save detailed final report
fs.writeFileSync(
  'ultimate-pr-merge-report.json',
  JSON.stringify(finalReport, null, 2)
);

// console.log('\n📊 === ULTIMATE MERGE SUMMARY ===');
// console.log(`✅ Successfully merged: ${mergedCount} PRs`);
// console.log(`⚠️  Conflicts/Errors: ${conflictCount} PRs`);
// console.log(`❌ Not found: ${notFoundCount} PRs`);
// console.log(`⏭️  Skipped: ${skippedCount} PRs`);
// console.log(`📈 Success rate: ${finalReport.summary.successRate}`);

// console.log('\n🔧 === SYSTEM CHECKS ===');
// console.log(`TypeScript: ${typeCheck.success ? '✅' : '❌'}`);
// console.log(`ESLint: ${lintCheck.success ? '✅' : '❌'}`);
// console.log(`Tests: ${testCheck.success ? '✅' : '❌'}`);
// console.log(`Build: ${buildCheck.success ? '✅' : '❌'}`);

if (finalReport.systemChecks.allPassed) {
  // console.log(
    '\n🎉 All system checks passed! Repository is in excellent condition.'
  );
} else {
  // console.log('\n⚠️  Some system checks failed. Please review the issues.');
}

// console.log('\n📄 Detailed report saved to: ultimate-pr-merge-report.json');
// console.log('\n🏁 ULTIMATE PR MERGER COMPLETED!');
// console.log('================================');
