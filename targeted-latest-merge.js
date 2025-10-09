#!/usr/bin/env node

/**
 * Targeted Latest Merge - Focuses on specific new branches
 * This script targets only the specific new branches we identified
 */ import { execSync } from 'child_process';
import fs from 'fs';

//Step 1: Ensure we're on main

try {
  execSync('git checkout main', { stdio: 'inherit' });

} catch (error) {

  process.exit(1);
}

//Step 2: Target specific new branches we identified

const targetBranches = [
  'cursor/fix-errors-and-merge-to-main-016f',
  'cursor/fix-errors-and-merge-to-main-073a',
  'cursor/fix-errors-and-merge-to-main-0ebe',
  'cursor/fix-errors-and-merge-to-main-0fc7',
  'cursor/fix-errors-and-merge-to-main-19db',
  'cursor/fix-errors-and-merge-to-main-5597',
  'cursor/fix-errors-and-merge-to-main-77cd',
  'cursor/fix-errors-and-merge-to-main-8510',
  'cursor/fix-errors-and-merge-to-main-9658',
  'cursor/fix-errors-and-merge-to-main-afb8',
  'cursor/fix-errors-and-merge-to-main-b319',
  'cursor/fix-errors-and-merge-to-main-cf0f',
  'cursor/fix-errors-and-merge-to-main-e15f',
];

//Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try initial merge
    execSync(`git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`, {
      stdio: 'inherit',
    });

    return { success: true, method: 'direct' };
  } catch (error) {

    try {
      //Check for merge conflicts
      const _status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (status.includes('UU') || status.includes('AA') || status.includes('DD')) {

        //Strategy 1: Auto-resolve with theirs for most conflicts
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );

          return { success: true, method: 'theirs' };
        } catch () {}//Strategy 2: Auto-resolve with ours
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );

          return { success: true, method: 'ours' };
        } catch () {}//Strategy 3: Manual conflict resolution
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });

          //Get conflicted files
          const conflictedFiles = execSync('git diff --name-only --diff-filter=U', {
            encoding: 'utf8',
          })
            .split('\n')
            .filter(file => file.trim());

          //For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                //Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });

              } catch () {}}
          }

          //Complete the merge
          execSync(`git commit -m "Manual conflict resolution for ${branchName}"`, {
            stdio: 'inherit',
          });

          return { success: true, method: 'manual' };
        } catch () {}}
    } catch () {}//If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });

    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Step 4: Execute merge process

const results = {
  successful: [],
  failed: [],
  summary: {
    total: 0,
    successful: 0,
    failed: 0,
    methods: { direct: 0, theirs: 0, ours: 0, manual: 0, failed: 0 },
  },
};

//Process each target branch
for (const branch of targetBranches) {
  const _result = resolveConflictsAndMerge(branch);
  results.summary.total++;

  if (result.success) {
    results.successful.push({ branch, ...result });
    results.summary.successful++;
    results.summary.methods[result.method]++;
  } else {
    results.failed.push({ branch, ...result });
    results.summary.failed++;
    results.summary.methods.failed++;
  }
}

//Step 5: Generate comprehensive report

results.timestamp = new Date().toISOString();
results.branchCounts = {
  total: targetBranches.length,
  processed: results.summary.total,
  successful: results.summary.successful,
  failed: results.summary.failed,
};

fs.writeFileSync('targeted-latest-merge-report.json', JSON.stringify(results, null, 2));

//Step 6: Display summary

if (results.failed.length > 0) {

  results.failed.forEach(result => // console.log(`  - ${result.branch}`));
}

// Step 7: Push changes

try {
  execSync('git push origin main', { stdio: 'inherit' });

} catch () {}