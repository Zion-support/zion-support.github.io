#!/usr/bin/env node

/**
 * Targeted Latest Merge - Focuses on specific new branches
 * This script targets only the specific new branches we identified
 */ import { execSync } from 'child_process';
import fs from 'fs';

// console.log('🚀 Starting Targeted Latest Merge Process...\n');

//Step 1: Ensure we're on main
// console.log('📋 Step 1: Preparing main branch...');
try {
  execSync('git checkout main', { stdio: 'inherit' });
  // console.log('✅ Main branch checked out\n');
} catch (error) {
  // console.error('❌ Failed to prepare main branch:', error.message);
  process.exit(1);
}

//Step 2: Target specific new branches we identified
// console.log('🔍 Step 2: Targeting specific new branches...');
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

// console.log(`📊 Found ${targetBranches.length} target branches to process\n`);

//Step 3: Enhanced conflict resolution function
function resolveConflictsAndMerge(branchName) {
  // console.log(`\n🔄 Processing ${branchName}...`);

  try {
    //Fetch the branch
    execSync(`git fetch origin ${branchName}`, { stdio: 'inherit' });

    //Try initial merge
    execSync(
      `git merge origin/${branchName} --no-ff -m "Merge ${branchName} into main"`,
      { stdio: 'inherit' }
    );

    // console.log(`✅ Successfully merged ${branchName}`);
    return { success: true, method: 'direct' };
  } catch (error) {
    // console.log(
      `⚠️  Direct merge failed for ${branchName}, attempting conflict resolution...`
    );

    try {
      //Check for merge conflicts
      const status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (
        status.includes('UU') ||
        status.includes('AA') ||
        status.includes('DD')
      ) {
        // console.log(`🔧 Resolving conflicts for ${branchName}...`);

        //Strategy 1: Auto-resolve with theirs for most conflicts
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X theirs --no-ff -m "Auto-merge ${branchName} (theirs strategy)"`,
            { stdio: 'inherit' }
          );
          // console.log(
            `✅ Auto-resolved conflicts for ${branchName} using 'theirs' strategy`
          );
          return { success: true, method: 'theirs' };
        } catch (theirsError) {
          // console.log(
            `⚠️  'Theirs' strategy failed, trying 'ours' strategy...`
          );
        }

        //Strategy 2: Auto-resolve with ours
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });
          execSync(
            `git merge origin/${branchName} -X ours --no-ff -m "Auto-merge ${branchName} (ours strategy)"`,
            { stdio: 'inherit' }
          );
          // console.log(
            `✅ Auto-resolved conflicts for ${branchName} using 'ours' strategy`
          );
          return { success: true, method: 'ours' };
        } catch (oursError) {
          // console.log(
            `⚠️  'Ours' strategy failed, trying manual resolution...`
          );
        }

        //Strategy 3: Manual conflict resolution
        try {
          execSync('git reset --hard HEAD', { stdio: 'inherit' });

          //Get conflicted files
          const conflictedFiles = execSync(
            'git diff --name-only --diff-filter=U',
            { encoding: 'utf8' }
          )
            .split('\n')
            .filter(file => file.trim());

          // console.log(
            `🔧 Manually resolving ${conflictedFiles.length} conflicted files...`
          );

          //For each conflicted file, try to resolve
          for (const file of conflictedFiles) {
            if (file.trim()) {
              try {
                //Try to resolve by taking the incoming version
                execSync(`git checkout --theirs "${file}"`, {
                  stdio: 'inherit',
                });
                execSync(`git add "${file}"`, { stdio: 'inherit' });
                // console.log(`  ✅ Resolved conflict in ${file}`);
              } catch (fileError) {
                // console.log(`  ⚠️  Could not resolve ${file}, skipping...`);
              }
            }
          }

          //Complete the merge
          execSync(
            `git commit -m "Manual conflict resolution for ${branchName}"`,
            { stdio: 'inherit' }
          );
          // console.log(`✅ Manually resolved conflicts for ${branchName}`);
          return { success: true, method: 'manual' };
        } catch (manualError) {
          // console.log(`❌ Manual resolution failed for ${branchName}`);
        }
      }
    } catch (statusError) {
      // console.log(`❌ Could not check merge status for ${branchName}`);
    }

    //If all strategies fail, abort and skip
    try {
      execSync('git merge --abort', { stdio: 'inherit' });
      // console.log(`⏭️  Skipping ${branchName} due to unresolvable conflicts`);
    } catch (abortError) {
      execSync('git reset --hard HEAD', { stdio: 'inherit' });
    }

    return { success: false, method: 'failed' };
  }
}

//Step 4: Execute merge process
// console.log('🚀 Step 4: Executing merge process...\n');

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
  const result = resolveConflictsAndMerge(branch);
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
// console.log('\n📊 Step 5: Generating merge report...');
results.timestamp = new Date().toISOString();
results.branchCounts = {
  total: targetBranches.length,
  processed: results.summary.total,
  successful: results.summary.successful,
  failed: results.summary.failed,
};

fs.writeFileSync(
  'targeted-latest-merge-report.json',
  JSON.stringify(results, null, 2)
);

//Step 6: Display summary
// console.log('\n🎉 MERGE PROCESS COMPLETED!\n');
// console.log('📊 SUMMARY:');
// console.log(`  Total branches processed: ${results.summary.total}`);
// console.log(`  Successful merges: ${results.summary.successful}`);
// console.log(`  Failed merges: ${results.summary.failed}`);
// console.log('\n🔧 RESOLUTION METHODS:');
// console.log(`  Direct merges: ${results.summary.methods.direct}`);
// console.log(`  'Theirs' strategy: ${results.summary.methods.theirs}`);
// console.log(`  'Ours' strategy: ${results.summary.methods.ours}`);
// console.log(`  Manual resolution: ${results.summary.methods.manual}`);
// console.log(`  Failed: ${results.summary.methods.failed}`);

if (results.failed.length > 0) {
  // console.log('\n❌ FAILED BRANCHES:');
  results.failed.forEach(result => // console.log(`  - ${result.branch}`));
}

// Step 7: Push changes
// console.log('\n🚀 Step 7: Pushing merged changes...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  // console.log('✅ Successfully pushed all merged changes to main');
} catch (error) {
  // console.error('❌ Failed to push changes:', error.message);
  // console.log('You may need to push manually: git push origin main');
}

// console.log('\n📄 Detailed report saved to: targeted-latest-merge-report.json');
// console.log('🎯 Targeted latest merge process completed successfully!');
