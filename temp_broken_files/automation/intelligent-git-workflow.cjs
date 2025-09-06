#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentGitWorkflow {
  constructor() {
    this.projectRoot = process.cwd();
    this.workflowResults = [];
    this.gitStatus = {};
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [GIT-WORKFLOW] ${message}`);
  }

  async checkGitStatus() {
    this.log('📊 Checking Git status...');
    
    try {
      const status = execSync('git status --porcelain', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const changes = status.trim().split('\n').filter(line => line.length > 0);
      
      this.gitStatus = {
        hasChanges: changes.length > 0,
        changes: changes,
        totalChanges: changes.length
      };
      
      this.workflowResults.push({
        type: 'git_status',
        status: 'completed',
        details: `Found ${changes.length} changes`
      });
      
    } catch (error) {
      this.log(`❌ Git status check failed: ${error.message}`);
      this.gitStatus = { hasChanges: false, changes: [], totalChanges: 0 };
    }
  }

  async checkBranches() {
    this.log('🌿 Checking branches...');
    
    try {
      const branches = execSync('git branch -a', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const currentBranch = execSync('git branch --show-current', { 
        stdio: 'pipe',
        encoding: 'utf8'
      }).trim();
      
      this.workflowResults.push({
        type: 'branches',
        status: 'completed',
        details: `Current branch: ${currentBranch}`,
        currentBranch: currentBranch
      });
      
    } catch (error) {
      this.log(`❌ Branch check failed: ${error.message}`);
    }
  }

  async checkMergeConflicts() {
    this.log('🔀 Checking for merge conflicts...');
    
    try {
      const status = execSync('git status', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const hasConflicts = status.includes('both modified') || 
                          status.includes('both added') || 
                          status.includes('deleted by us') ||
                          status.includes('deleted by them');
      
      this.workflowResults.push({
        type: 'merge_conflicts',
        status: hasConflicts ? 'conflicts_found' : 'clean',
        details: hasConflicts ? 'Merge conflicts detected' : 'No merge conflicts'
      });
      
    } catch (error) {
      this.log(`❌ Merge conflict check failed: ${error.message}`);
    }
  }

  async checkRemoteStatus() {
    this.log('🌐 Checking remote status...');
    
    try {
      const remotes = execSync('git remote -v', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const hasOrigin = remotes.includes('origin');
      
      if (hasOrigin) {
        // Check if we're ahead/behind
        const status = execSync('git status -uno', { 
          stdio: 'pipe',
          encoding: 'utf8'
        });
        
        const isAhead = status.includes('Your branch is ahead');
        const isBehind = status.includes('Your branch is behind');
        
        this.workflowResults.push({
          type: 'remote_status',
          status: 'completed',
          details: `Remote status: ${isAhead ? 'ahead' : isBehind ? 'behind' : 'up to date'}`,
          isAhead: isAhead,
          isBehind: isBehind
        });
      } else {
        this.workflowResults.push({
          type: 'remote_status',
          status: 'no_remote',
          details: 'No remote repository configured'
        });
      }
      
    } catch (error) {
      this.log(`❌ Remote status check failed: ${error.message}`);
    }
  }

  async suggestActions() {
    this.log('💡 Generating workflow suggestions...');
    
    const suggestions = [];
    
    // Check if there are uncommitted changes
    if (this.gitStatus.hasChanges) {
      suggestions.push({
        priority: 'high',
        action: 'commit_changes',
        message: 'You have uncommitted changes. Consider committing them.',
        command: 'git add . && git commit -m "Your commit message"'
      });
    }
    
    // Check for merge conflicts
    const conflictResult = this.workflowResults.find(r => r.type === 'merge_conflicts');
    if (conflictResult && conflictResult.status === 'conflicts_found') {
      suggestions.push({
        priority: 'critical',
        action: 'resolve_conflicts',
        message: 'Merge conflicts detected. Resolve them before proceeding.',
        command: 'git status to see conflicted files, then resolve manually'
      });
    }
    
    // Check remote status
    const remoteResult = this.workflowResults.find(r => r.type === 'remote_status');
    if (remoteResult && remoteResult.isBehind) {
      suggestions.push({
        priority: 'medium',
        action: 'pull_changes',
        message: 'Your branch is behind remote. Consider pulling latest changes.',
        command: 'git pull origin main'
      });
    }
    
    if (remoteResult && remoteResult.isAhead) {
      suggestions.push({
        priority: 'medium',
        action: 'push_changes',
        message: 'Your branch is ahead of remote. Consider pushing changes.',
        command: 'git push origin main'
      });
    }
    
    this.workflowResults.push({
      type: 'suggestions',
      status: 'generated',
      details: `Generated ${suggestions.length} suggestions`,
      suggestions: suggestions
    });
    
    return suggestions;
  }

  async executeWorkflow() {
    this.log('🔄 Executing intelligent Git workflow...');
    
    const suggestions = await this.suggestActions();
    
    // Execute high priority actions automatically
    const highPriorityActions = suggestions.filter(s => s.priority === 'high');
    
    for (const action of highPriorityActions) {
      if (action.action === 'commit_changes') {
        try {
          this.log(`Executing: ${action.message}`);
          execSync('git add .', { stdio: 'pipe' });
          execSync('git commit -m "Automated commit by intelligent workflow"', { stdio: 'pipe' });
          this.log('✅ Changes committed successfully');
        } catch (error) {
          this.log(`❌ Failed to commit changes: ${error.message}`);
        }
      }
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      gitStatus: this.gitStatus,
      workflowResults: this.workflowResults,
      summary: {
        totalChanges: this.gitStatus.totalChanges,
        hasConflicts: this.workflowResults.some(r => r.type === 'merge_conflicts' && r.status === 'conflicts_found'),
        suggestionsCount: this.workflowResults.find(r => r.type === 'suggestions')?.suggestions?.length || 0
      }
    };

    const reportPath = path.join(this.projectRoot, 'git-workflow-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Workflow report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Intelligent Git Workflow...');
    
    try {
      await this.checkGitStatus();
      await this.checkBranches();
      await this.checkMergeConflicts();
      await this.checkRemoteStatus();
      await this.executeWorkflow();
      
      const report = this.generateReport();
      
      this.log('✅ Intelligent Git Workflow completed!');
      this.log(`📈 Processed ${report.summary.totalChanges} changes and generated ${report.summary.suggestionsCount} suggestions`);
      
      return report;
    } catch (error) {
      this.log(`❌ Intelligent Git Workflow failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the workflow
const workflow = new IntelligentGitWorkflow();
workflow.run().catch(console.error);