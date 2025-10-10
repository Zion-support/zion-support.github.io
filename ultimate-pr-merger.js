#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// // //Function to safely execute git commands
function safeGitCommand(command, description) {
  try {
//     //     const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
//     return { success: true, result };
  } catch (error) {
//     return { success: false, error: error.message };
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
    branch: 'cursor/fix-web-application-console-errors-0 bf5',
    sha: 'd4 e66 d09 ceb2 c6 c48 f1 f522 df7030 a5261 c4 c661',
    priority: 'critical',
    description: 'Critical console errors and PWA fixes',
  },
  {
    number: 25063,
    title: 'Build and deploy with vite and netlify',
    branch: 'cursor/build-and-deploy-with-vite-and-netlify-8 b37',
    sha: 'd2 deed6 f7 d4 ef805058 d58 bdadeb11 ca5 a746580',
    priority: 'high',
    description: 'Netlify configuration updates',
  },
  {
    number: 25062,
    title: 'Fix errors and merge to main',
    branch: 'cursor/fix-errors-and-merge-to-main-fcbd',
    sha: 'a5 f35 d4 a9 ddcf46941 c797 da316 bb3 a2 b7 b05 b56',
    priority: 'high',
    description: 'Remove unused PerformanceOptimizer import',
  },
  {
    number: 25061,
    title: 'Fix errors and merge to main',
    branch: 'cursor/fix-errors-and-merge-to-main-e6 e1',
    sha: '29 f97 d68 b44 ddf467 a8 bada29 cb68 cb2100 d59 db',
    priority: 'high',
    description: 'Remove unused PerformanceOptimizer import',
  },
];

//Ensure we're on main branch
// safeGitCommand('git checkout main', 'Switch to main branch');
safeGitCommand('git pull origin main', 'Pull latest changes from main');

// let mergedCount = 0;
// const skippedCount = 0;

//Process each PR
for (const pr of allPRs) {
//   // console.log(
    `\n--- Processing PR #${pr.number}: ${pr.title} (Priority: ${pr.priority}) ---`
  );
//   //Check if branch exists
  if (!branchExists(pr.branch)) {
//     notFoundCount++;
    results.push({
      pr: pr.number,
      title: pr.title,
      status: 'not_found',
      branch: pr.branch,
      priority: pr.priority,
    });
    continue;
  }

//   //Try to merge the branch
  const mergeResult = safeGitCommand(
    `git merge origin/${pr.branch} --no-ff -m "Merge PR #${pr.number}: ${pr.title}"`,
    `Merge ${pr.branch}`
  );

  if (mergeResult.success) {
    mergedCount++;
//     results.push({
      pr: pr.number,
      title: pr.title,
      status: 'merged',
      branch: pr.branch,
      priority: pr.priority,
    });
  } else {
    conflictCount++;
//     //Try to abort the merge if there was a conflict
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
// const typeCheck = safeGitCommand(
  'pnpm run type-check',
  'TypeScript type checking'
);
const buildCheck = safeGitCommand(
  'pnpm run build:no-check',
  'Production build'
);

//Push changes if any were merged
if (mergedCount > 0) {
//   const pushResult = safeGitCommand(
    'git push origin main',
    'Push changes to main'
  );
  if (pushResult.success) {
//     } else {
//     }
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

// // // // // // // // // // // if (finalReport.systemChecks.allPassed) {
//   } else {
//   }

// // // 