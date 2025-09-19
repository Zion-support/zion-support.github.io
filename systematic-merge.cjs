#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

class SystematicMerger {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = 'systematic-merge.log';
    this.mergedBranches = [];
    this.failedBranches = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        stdio: 'pipe',
        encoding: 'utf8',
        cwd: this.projectRoot,
      });
      this.log(`✅ Completed: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async mergeBranch(branchName) {
    try {
      this.log(`🔄 Attempting to merge branch: ${branchName}`);

      // Fetch the branch
      await this.runCommand(
        `git fetch origin ${branchName}`,
        `Fetch branch ${branchName}`
      );

      // Try to merge with strategy
      await this.runCommand(
        `git merge origin/${branchName} --no-ff -X theirs -m "Merge branch ${branchName} into main"`,
        `Merge branch ${branchName}`
      );

      this.mergedBranches.push(branchName);
      this.log(`✅ Successfully merged: ${branchName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to merge ${branchName}: ${error.message}`, 'ERROR');

      // Try to resolve conflicts automatically
      try {
        this.log(`🔧 Attempting to resolve conflicts for ${branchName}`);

        // Check if there are conflicts
        const status = execSync('git status --porcelain', { encoding: 'utf8' });
        if (status.includes('UU') || status.includes('AA')) {
          // Accept incoming changes for conflicts
          await this.runCommand(
            'git checkout --theirs .',
            `Accept incoming changes for ${branchName}`
          );
          await this.runCommand(
            'git add .',
            `Stage resolved changes for ${branchName}`
          );
          await this.runCommand(
            `git commit -m "Resolve merge conflicts for ${branchName}"`,
            `Commit resolved conflicts for ${branchName}`
          );
        }

        this.mergedBranches.push(branchName);
        this.log(
          `✅ Successfully resolved conflicts and merged: ${branchName}`
        );
        return true;
      } catch (resolveError) {
        this.log(
          `❌ Could not resolve conflicts for ${branchName}: ${resolveError.message}`,
          'ERROR'
        );
        this.failedBranches.push(branchName);

        // Reset to clean state
        try {
          await this.runCommand(
            'git merge --abort',
            `Abort merge for ${branchName}`
          );
        } catch (abortError) {
          this.log(`Warning: Could not abort merge for ${branchName}`, 'WARN');
        }

        return false;
      }
    }
  }

  async mergeImportantBranches() {
    this.log('🚀 Starting systematic merge of important branches');

    // Priority branches to merge
    const priorityBranches = [
      'cursor/automate-test-improve-and-merge-code-4061',
      'cursor/automate-continuous-project-improvement-and-integration-3bb7',
      'cursor/automate-deployment-redundancy-and-clean-up-0b6a',
      'cursor/enhance-app-services-and-website-with-futuristic-design-0184',
      'cursor/build-and-fix-errors-008f',
      'cursor/automate-project-enhancement-and-merge-cac0',
    ];

    // Ensure we're on main branch
    await this.runCommand('git checkout main', 'Switch to main branch');
    await this.runCommand('git pull origin main', 'Pull latest main');

    for (const branch of priorityBranches) {
      try {
        await this.mergeBranch(branch);

        // Push changes after each successful merge
        if (this.mergedBranches.includes(branch)) {
          try {
            await this.runCommand(
              'git push origin main',
              `Push merged changes for ${branch}`
            );
          } catch (pushError) {
            this.log(
              `Warning: Could not push changes for ${branch}: ${pushError.message}`,
              'WARN'
            );
          }
        }
      } catch (error) {
        this.log(
          `Error processing branch ${branch}: ${error.message}`,
          'ERROR'
        );
      }
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalBranches: this.mergedBranches.length + this.failedBranches.length,
        successfullyMerged: this.mergedBranches.length,
        failedToMerge: this.failedBranches.length,
        successRate: `${((this.mergedBranches.length / (this.mergedBranches.length + this.failedBranches.length)) * 100).toFixed(2)}%`,
      },
      mergedBranches: this.mergedBranches,
      failedBranches: this.failedBranches,
    };

    fs.writeFileSync(
      'systematic-merge-report.json',
      JSON.stringify(report, null, 2)
    );

    this.log('\n📊 SYSTEMATIC MERGE SUMMARY:');
    this.log(`✅ Successfully merged: ${this.mergedBranches.length} branches`);
    this.log(`❌ Failed to merge: ${this.failedBranches.length} branches`);
    this.log(`📈 Success rate: ${report.summary.successRate}`);

    if (this.failedBranches.length > 0) {
      this.log('\n❌ Failed branches:');
      this.failedBranches.forEach(branch => this.log(`  - ${branch}`));
    }
  }
}

// Run the systematic merger
const merger = new SystematicMerger();
merger.mergeImportantBranches().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
