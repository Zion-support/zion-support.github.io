#!/usr/bin/env node

/**
 * Targeted PR Merge - Focus on the most recent and important branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
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

// //Step 3: Enhanced merge function with conflict resolution
function mergeBranch(branchName) {
//   try {
    //Check if branch exists
    execSync(`git fetch origin ${branchName}`, { stdio: 'pipe' });

    //Check if already merged
    const isMerged = execSync(
      `git branch --merged main | grep -q "${branchName}" || echo "not_merged"`,
      { encoding: 'utf8' }
    ).trim();
    if (isMerged !== 'not_merged') {
//       return { success: true, method: 'already_merged' };
    }

    //Try to merge
    try {
      execSync(
        `git merge origin/${branchName} --no-ff -m "Merge ${branchName}: automated merge"`,
        { stdio: 'inherit' }
      );
//       return { success: true, method: 'direct' };
    } catch (mergeError) {
//       //Try different conflict resolution strategies
      try {
        //Strategy 1: Use theirs
        execSync(
          `git merge origin/${branchName} --strategy-option=theirs --no-ff -m "Merge ${branchName}: using theirs strategy"`,
          { stdio: 'inherit' }
        );
//         return { success: true, method: 'theirs' };
      } catch (theirsError) {
        try {
          //Strategy 2: Use ours
          execSync(
            `git merge origin/${branchName} --strategy-option=ours --no-ff -m "Merge ${branchName}: using ours strategy"`,
            { stdio: 'inherit' }
          );
//           return { success: true, method: 'ours' };
        } catch (oursError) {
//           return { success: false, method: 'failed' };
        }
      }
    }
  } catch (error) {
//     return { success: false, method: 'not_found' };
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

// for (const branch of targetBranches) {
  const _result = mergeBranch(branch);
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
// const report = {
  ...results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(
  'targeted-pr-merge-report.json',
  JSON.stringify(report, null, 2)
);

//Step 6: Push changes
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   }

// Step 7: Summary
// // // // // // // // // // // // // // 