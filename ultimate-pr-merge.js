#!/usr/bin/env node

/**
 * Ultimate PR Merge - Comprehensive merge of all remaining branches
 */ import { execSync } from 'child_process';
import fs from 'fs';

// //Step 1: Ensure we're on main and up to date
// try {
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git pull origin main', { stdio: 'inherit' });
//   } catch (error) {
//   process.exit(1);
}

//Step 2: Get all branches that need merging
// //Get all remote branches
const allBranches = execSync('git branch -r', { encoding: 'utf8' })
  .split('\n')
  .map(branch => branch.trim())
  .filter(branch => branch && !branch.includes('HEAD'))
  .filter(branch => !branch.includes('backup'))
  .filter(branch => !branch.includes('aggressive'))
  .filter(branch => !branch.includes('automation'))
  .map(branch => branch.replace('origin/', ''));

//Filter for relevant branches
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

//Step 4: Process branches in batches
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

// //Process in batches of 10 to avoid overwhelming the system
// const batchSize = 10;
// const totalBatches = Math.ceil(relevantBranches.length / batchSize);

for (let batch = 0; batch < totalBatches; batch++) {
//   const start = batch * batchSize;
//   const end = Math.min(start + batchSize, relevantBranches.length);
  const _batchBranches = relevantBranches.slice(start, end);

//   ...`
  );

  for (const branch of batchBranches) {
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

  //Push changes after each batch
  if (batch % 5 === 0 || batch === totalBatches - 1) {
    try {
      execSync('git push origin main', { stdio: 'inherit' });
//       } catch (error) {
//       }
  }
}

//Step 5: Generate final report
// const report = {
  ...results,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync(
  'ultimate-pr-merge-report.json',
  JSON.stringify(report, null, 2)
);

//Step 6: Final push
// try {
  execSync('git push origin main', { stdio: 'inherit' });
//   } catch (error) {
//   }

// Step 7: Summary
// // // // // // // // // // // // // // 