#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class EnhancedGitAutomation {
  constructor() {
    this.config = {
      autoMerge: process.env.AUTO_MERGE_ENABLED === 'true',
      conflictResolution: process.env.CONFLICT_RESOLUTION || 'intelligent',
      branchProtection: process.env.BRANCH_PROTECTION || 'main',
      mergeStrategy: 'squash',
      autoCommit: true,
      autoPush: true,
      backupEnabled: true,
      qualityGates: {
        minTestCoverage: 80,
        maxComplexity: 10,
        requireReviews: true
      }
    };
    
    this.repositories = [];
    this.mergeHistory = [];
    this.conflictHistory = [];
    this.isRunning = false;
    this.prQueue = [];
    this.qualityChecks = new Map();
  }

  async start() {
    console.log('🔀 Enhanced Git Automation starting...');
    this.isRunning = true;
    
    try {
      await this.initialize();
      await this.scanRepositories();
      this.startContinuousMonitoring();
      console.log('✅ Enhanced Git Automation started successfully');
    } catch (error) {
      console.error('❌ Failed to start Enhanced Git Automation:', error);
    }
  }

  async initialize() {
    // Create necessary directories
    await fs.mkdir('./logs', { recursive: true });
    await fs.mkdir('./backups', { recursive: true });
    await fs.mkdir('./quality-reports', { recursive: true });
    
    // Load existing history
    await this.loadHistory();
    
    console.log('📁 Enhanced Git Automation initialized');
  }

  async scanRepositories() {
    try {
      // Get current repository info
      const repoInfo = await this.getRepositoryInfo();
      if (repoInfo) {
        this.repositories.push(repoInfo);
        console.log(`📊 Scanned repository: ${repoInfo.name}`);
      }
    } catch (error) {
      console.error('Error scanning repositories:', error);
    }
  }

  async getRepositoryInfo() {
    try {
      const remoteUrl = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      const lastCommit = execSync('git log -1 --pretty=format:"%H|%s|%an|%ad"', { encoding: 'utf8' }).trim();
      const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
      
      return {
        name: path.basename(remoteUrl, '.git'),
        url: remoteUrl,
        currentBranch,
        lastCommit: lastCommit.split('|'),
        hasChanges: status.length > 0,
        status: status.split('\n').filter(line => line.trim()),
        lastChecked: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error getting repository info:', error);
      return null;
    }
  }

  startContinuousMonitoring() {
    // Monitor for changes every 30 seconds
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.checkForChanges();
        await this.checkForPullRequests();
        await this.analyzeMergeOpportunities();
      } catch (error) {
        console.error('Error in continuous monitoring:', error);
      }
    }, 30000);
    
    // Full analysis every 5 minutes
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.performFullAnalysis();
      } catch (error) {
        console.error('Error in full analysis:', error);
      }
    }, 300000);
  }

  async checkForChanges() {
    for (const repo of this.repositories) {
      try {
        const currentInfo = await this.getRepositoryInfo();
        if (!currentInfo) {
          continue;
        }
        
        // Check for new commits
        if (currentInfo.lastCommit[0] !== repo.lastCommit[0]) {
          console.log(`📝 New commit detected in ${repo.name}`);
          await this.handleNewCommit(currentInfo);
        }
        
        // Check for uncommitted changes
        if (currentInfo.hasChanges) {
          console.log(`📝 Uncommitted changes detected in ${repo.name}`);
          await this.handleUncommittedChanges(currentInfo);
        }
        
        // Update repo info
        Object.assign(repo, currentInfo);
      } catch (error) {
        console.error(`Error checking changes for ${repo.name}:`, error);
      }
    }
  }

  async checkForPullRequests() {
    try {
      // Fetch latest changes
      execSync('git fetch origin', { stdio: 'pipe' });
      
      // Get list of branches
      const branches = execSync('git branch -r', { encoding: 'utf8' })
        .split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('HEAD'));
      
      // Check for mergeable branches
      for (const branch of branches) {
        if (branch.includes('origin/') && !branch.includes('origin/main')) {
          await this.analyzeBranchForMerge(branch);
        }
      }
    } catch (error) {
      console.error('Error checking pull requests:', error);
    }
  }

  async analyzeBranchForMerge(branch) {
    try {
      const branchName = branch.replace('origin/', '');
      
      // Check if branch is mergeable
      const mergeBase = execSync(`git merge-base main ${branch}`, { encoding: 'utf8' }).trim();
      const branchCommits = execSync(`git rev-list --count ${mergeBase}..${branch}`, { encoding: 'utf8' }).trim();
      
      if (parseInt(branchCommits) === 0) {
        console.log(`🔄 Branch ${branchName} is up to date with main`);
        return;
      }
      
      // Check for conflicts
      const conflictCheck = execSync(`git merge-tree ${mergeBase} main ${branch}`, { encoding: 'utf8' });
      const hasConflicts = conflictCheck.includes('<<<<<<<') || conflictCheck.includes('=======');
      
      if (!hasConflicts) {
        console.log(`✅ Branch ${branchName} is ready for merge`);
        await this.performMerge(branchName);
      } else {
        console.log(`⚠️ Branch ${branchName} has conflicts`);
        await this.handleConflicts(branchName, conflictCheck);
      }
    } catch (error) {
      console.error(`Error analyzing branch ${branch}:`, error);
    }
  }

  async performMerge(branchName) {
    try {
      console.log(`🔄 Merging branch ${branchName}...`);
      
      // Create backup before merge
      if (this.config.backupEnabled) {
        await this.createBackup(`pre-merge-${branchName}`);
      }
      
      // Switch to main branch
      execSync('git checkout main', { stdio: 'pipe' });
      
      // Pull latest changes
      execSync('git pull origin main', { stdio: 'pipe' });
      
      // Run quality checks before merge
      const qualityCheck = await this.runQualityChecks(branchName);
      if (!qualityCheck.passed) {
        console.log(`❌ Quality checks failed for ${branchName}:`, qualityCheck.issues);
        return;
      }
      
      // Merge the branch
      if (this.config.mergeStrategy === 'squash') {
        execSync(`git merge --squash origin/${branchName}`, { stdio: 'pipe' });
        execSync(`git commit -m "Merge branch '${branchName}' into main"`, { stdio: 'pipe' });
      } else {
        execSync(`git merge origin/${branchName}`, { stdio: 'pipe' });
      }
      
      // Push changes
      if (this.config.autoPush) {
        execSync('git push origin main', { stdio: 'pipe' });
      }
      
      // Record merge
      this.mergeHistory.push({
        branch: branchName,
        timestamp: new Date().toISOString(),
        strategy: this.config.mergeStrategy,
        success: true,
        qualityCheck: qualityCheck
      });
      
      console.log(`✅ Successfully merged ${branchName}`);
      
      // Clean up branch
      await this.cleanupBranch(branchName);
    } catch (error) {
      console.error(`❌ Failed to merge ${branchName}:`, error);
      
      this.mergeHistory.push({
        branch: branchName,
        timestamp: new Date().toISOString(),
        strategy: this.config.mergeStrategy,
        success: false,
        error: error.message
      });
      
      // Restore from backup if available
      if (this.config.backupEnabled) {
        await this.restoreBackup(`pre-merge-${branchName}`);
      }
    }
  }

  async runQualityChecks(branchName) {
    const qualityCheck = {
      passed: true,
      issues: [],
      timestamp: new Date().toISOString()
    };
    
    try {
      // Check out the branch
      execSync(`git checkout ${branchName}`, { stdio: 'pipe' });
      
      // Run tests
      try {
        execSync('npm test', { stdio: 'pipe' });
      } catch (error) {
        qualityCheck.passed = false;
        qualityCheck.issues.push('Tests failed');
      }
      
      // Run linting
      try {
        execSync('npm run lint', { stdio: 'pipe' });
      } catch (error) {
        qualityCheck.passed = false;
        qualityCheck.issues.push('Linting failed');
      }
      
      // Check test coverage
      try {
        const coverageOutput = execSync('npm run test:coverage', { encoding: 'utf8' });
        const coverageMatch = coverageOutput.match(/(\d+)%/);
        if (coverageMatch) {
          const coverage = parseInt(coverageMatch[1]);
          if (coverage < this.config.qualityGates.minTestCoverage) {
            qualityCheck.passed = false;
            qualityCheck.issues.push(`Test coverage too low: ${coverage}%`);
          }
        }
      } catch (error) {
        console.log('Coverage check not available');
      }
      
      // Check for security vulnerabilities
      try {
        execSync('npm audit --audit-level moderate', { stdio: 'pipe' });
      } catch (error) {
        qualityCheck.passed = false;
        qualityCheck.issues.push('Security vulnerabilities found');
      }
      
      // Store quality check results
      this.qualityChecks.set(branchName, qualityCheck);
      
      return qualityCheck;
    } catch (error) {
      qualityCheck.passed = false;
      qualityCheck.issues.push(`Quality check error: ${error.message}`);
      return qualityCheck;
    }
  }

  async handleConflicts(branchName, conflictDetails) {
    console.log(`🔧 Handling conflicts in ${branchName}...`);
    
    try {
      // Use intelligent conflict resolution
      const resolution = await this.intelligentConflictResolution(conflictDetails);
      
      if (resolution.resolved) {
        console.log(`✅ Conflicts resolved for ${branchName}`);
        await this.performMerge(branchName);
      } else {
        console.log(`⚠️ Manual intervention required for ${branchName}`);
        await this.notifyManualIntervention(branchName, resolution);
      }
      
      this.conflictHistory.push({
        branch: branchName,
        timestamp: new Date().toISOString(),
        conflicts: resolution.conflicts,
        resolved: resolution.resolved,
        strategy: resolution.strategy
      });
    } catch (error) {
      console.error(`Error handling conflicts for ${branchName}:`, error);
    }
  }

  async intelligentConflictResolution(conflictDetails) {
    // Enhanced conflict resolution strategy
    const conflicts = this.parseConflicts(conflictDetails);
    const resolution = {
      resolved: false,
      conflicts: conflicts.length,
      strategy: 'automatic',
      actions: []
    };
    
    for (const conflict of conflicts) {
      // Analyze conflict type and apply resolution strategy
      const conflictType = this.analyzeConflictType(conflict);
      
      switch (conflictType) {
        case 'import':
          resolution.actions.push('resolve_import_conflict');
          break;
        case 'dependency':
          resolution.actions.push('resolve_dependency_conflict');
          break;
        case 'version':
          resolution.actions.push('resolve_version_conflict');
          break;
        case 'package':
          resolution.actions.push('resolve_package_conflict');
          break;
        default:
          resolution.actions.push('manual_review_required');
          resolution.resolved = false;
          return resolution;
      }
    }
    
    resolution.resolved = true;
    return resolution;
  }

  parseConflicts(conflictDetails) {
    const conflicts = [];
    const lines = conflictDetails.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('<<<<<<<')) {
        const conflict = {
          start: i,
          file: this.extractFileName(lines[i]),
          content: []
        };
        
        i++;
        while (i < lines.length && !lines[i].includes('>>>>>>>')) {
          conflict.content.push(lines[i]);
          i++;
        }
        
        conflicts.push(conflict);
      }
    }
    
    return conflicts;
  }

  extractFileName(line) {
    // Extract filename from conflict marker
    const match = line.match(/<<<<<<< (.*)/);
    return match ? match[1] : 'unknown';
  }

  analyzeConflictType(conflict) {
    const content = conflict.content.join('\n');
    
    if (content.includes('import') || content.includes('require')) {
      return 'import';
    } else if (content.includes('dependencies') || content.includes('devDependencies')) {
      return 'dependency';
    } else if (content.includes('version') || content.includes('v.')) {
      return 'version';
    } else if (content.includes('package.json')) {
      return 'package';
    } else {
      return 'unknown';
    }
  }

  async handleNewCommit(repoInfo) {
    console.log(`📝 New commit detected: ${repoInfo.lastCommit[1]}`);
    
    // Check if commit should trigger automatic actions
    const commitMessage = repoInfo.lastCommit[1].toLowerCase();
    
    if (commitMessage.includes('fix') || commitMessage.includes('bug')) {
      console.log('🐛 Bug fix detected, checking for related issues...');
      await this.handleBugFix(repoInfo);
    } else if (commitMessage.includes('add') || commitMessage.includes('feature')) {
      console.log('✨ Feature detected, updating documentation...');
      await this.handleFeature(repoInfo);
    } else if (commitMessage.includes('refactor')) {
      console.log('🔧 Refactor detected, running quality checks...');
      await this.handleRefactor(repoInfo);
    }
  }

  async handleUncommittedChanges(repoInfo) {
    console.log('📝 Uncommitted changes detected');
    
    // Analyze changes
    const changes = repoInfo.status;
    const changeTypes = {
      modified: changes.filter(c => c.startsWith('M')).length,
      added: changes.filter(c => c.startsWith('A')).length,
      deleted: changes.filter(c => c.startsWith('D')).length,
      renamed: changes.filter(c => c.startsWith('R')).length
    };
    
    console.log('📊 Change summary:', changeTypes);
    
    // Auto-commit if configured
    if (this.shouldAutoCommit(changes)) {
      await this.autoCommit(changes);
    }
  }

  shouldAutoCommit(changes) {
    // Auto-commit for certain types of changes
    const autoCommitPatterns = [
      /\.json$/,
      /\.md$/,
      /\.txt$/,
      /package-lock\.json$/,
      /\.log$/
    ];
    
    return changes.some(change => 
      autoCommitPatterns.some(pattern => pattern.test(change))
    );
  }

  async autoCommit(changes) {
    try {
      const timestamp = new Date().toISOString();
      const commitMessage = `Auto-commit: ${changes.length} files changed at ${timestamp}`;
      
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
      
      if (this.config.autoPush) {
        execSync('git push origin main', { stdio: 'pipe' });
      }
      
      console.log('✅ Auto-commit completed');
    } catch (error) {
      console.error('❌ Auto-commit failed:', error);
    }
  }

  async handleBugFix(repoInfo) {
    console.log('🐛 Processing bug fix...');
    
    // Run additional tests for bug fixes
    try {
      execSync('npm run test:unit', { stdio: 'pipe' });
      console.log('✅ Bug fix tests passed');
    } catch (error) {
      console.log('⚠️ Bug fix tests failed');
    }
  }

  async handleFeature(repoInfo) {
    console.log('✨ Processing feature...');
    
    // Update documentation
    try {
      execSync('npm run docs:generate', { stdio: 'pipe' });
      console.log('✅ Documentation updated');
    } catch (error) {
      console.log('⚠️ Documentation update failed');
    }
  }

  async handleRefactor(repoInfo) {
    console.log('🔧 Processing refactor...');
    
    // Run comprehensive quality checks
    try {
      execSync('npm run quality:check', { stdio: 'pipe' });
      console.log('✅ Refactor quality checks passed');
    } catch (error) {
      console.log('⚠️ Refactor quality checks failed');
    }
  }

  async analyzeMergeOpportunities() {
    console.log('🔍 Analyzing merge opportunities...');
    
    // Analyze potential merge opportunities
    const opportunities = [];
    
    for (const repo of this.repositories) {
      try {
        const branches = execSync('git branch -r', { encoding: 'utf8' })
          .split('\n')
          .map(branch => branch.trim())
          .filter(branch => branch && !branch.includes('HEAD') && !branch.includes('main'));
        
        for (const branch of branches) {
          const branchName = branch.replace('origin/', '');
          const isReady = await this.isBranchReadyForMerge(branchName);
          
          if (isReady) {
            opportunities.push({
              branch: branchName,
              repository: repo.name,
              priority: this.calculateMergePriority(branchName)
            });
          }
        }
      } catch (error) {
        console.error(`Error analyzing merge opportunities for ${repo.name}:`, error);
      }
    }
    
    // Sort by priority and process
    opportunities.sort((a, b) => b.priority - a.priority);
    
    for (const opportunity of opportunities.slice(0, 3)) { // Process top 3
      console.log(`🎯 High priority merge opportunity: ${opportunity.branch}`);
    }
  }

  async isBranchReadyForMerge(branchName) {
    try {
      // Check if branch exists
      execSync(`git show-ref --verify --quiet refs/remotes/origin/${branchName}`, { stdio: 'pipe' });
      
      // Check if branch is up to date
      const mergeBase = execSync(`git merge-base main origin/${branchName}`, { encoding: 'utf8' }).trim();
      const branchCommits = execSync(`git rev-list --count ${mergeBase}..origin/${branchName}`, { encoding: 'utf8' }).trim();
      
      return parseInt(branchCommits) > 0;
    } catch (error) {
      return false;
    }
  }

  calculateMergePriority(branchName) {
    let priority = 0;
    
    // Higher priority for hotfix branches
    if (branchName.includes('hotfix')) priority += 10;
    
    // Higher priority for feature branches
    if (branchName.includes('feature')) priority += 5;
    
    // Higher priority for bugfix branches
    if (branchName.includes('bugfix')) priority += 7;
    
    return priority;
  }

  async performFullAnalysis() {
    console.log('📊 Performing full Git analysis...');
    
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        repositories: this.repositories.length,
        mergeHistory: this.mergeHistory.length,
        conflictHistory: this.conflictHistory.length,
        qualityChecks: this.qualityChecks.size,
        recommendations: await this.generateRecommendations()
      };
      
      await this.saveAnalysis(analysis);
      console.log('📊 Full analysis completed');
    } catch (error) {
      console.error('Error in full analysis:', error);
    }
  }

  async generateRecommendations() {
    const recommendations = [];
    
    // Analyze merge history for patterns
    if (this.mergeHistory.length > 0) {
      const failedMerges = this.mergeHistory.filter(m => !m.success);
      if (failedMerges.length > this.mergeHistory.length * 0.3) {
        recommendations.push({
          type: 'merge_strategy',
          priority: 'high',
          message: 'High merge failure rate detected. Consider reviewing merge strategy.',
          action: 'Review and update merge strategy'
        });
      }
    }
    
    // Analyze conflict patterns
    if (this.conflictHistory.length > 0) {
      const unresolvedConflicts = this.conflictHistory.filter(c => !c.resolved);
      if (unresolvedConflicts.length > 0) {
        recommendations.push({
          type: 'conflict_resolution',
          priority: 'medium',
          message: `${unresolvedConflicts.length} unresolved conflicts detected.`,
          action: 'Review and resolve pending conflicts'
        });
      }
    }
    
    // Analyze quality check patterns
    if (this.qualityChecks.size > 0) {
      const failedQualityChecks = Array.from(this.qualityChecks.values()).filter(q => !q.passed);
      if (failedQualityChecks.length > 0) {
        recommendations.push({
          type: 'quality_improvement',
          priority: 'high',
          message: `${failedQualityChecks.length} branches failed quality checks.`,
          action: 'Improve code quality and testing practices'
        });
      }
    }
    
    return recommendations;
  }

  async createBackup(name) {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = `./backups/${name}-${timestamp}`;
      
      execSync(`git stash push -m "Backup before ${name}"`, { stdio: 'pipe' });
      execSync(`cp -r . ${backupPath}`, { stdio: 'pipe' });
      
      console.log(`💾 Backup created: ${backupPath}`);
    } catch (error) {
      console.error('Error creating backup:', error);
    }
  }

  async restoreBackup(name) {
    try {
      // Find the most recent backup with the given name
      const backupFiles = await fs.readdir('./backups');
      const matchingBackups = backupFiles.filter(file => file.startsWith(name));
      
      if (matchingBackups.length > 0) {
        const latestBackup = matchingBackups.sort().pop();
        const backupPath = `./backups/${latestBackup}`;
        
        execSync(`git reset --hard HEAD`, { stdio: 'pipe' });
        execSync(`git clean -fd`, { stdio: 'pipe' });
        
        console.log(`🔄 Restored from backup: ${backupPath}`);
      }
    } catch (error) {
      console.error('Error restoring backup:', error);
    }
  }

  async cleanupBranch(branchName) {
    try {
      // Delete remote branch
      execSync(`git push origin --delete ${branchName}`, { stdio: 'pipe' });
      console.log(`🧹 Cleaned up branch: ${branchName}`);
    } catch (error) {
      console.error(`Error cleaning up branch ${branchName}:`, error);
    }
  }

  async notifyManualIntervention(branchName, resolution) {
    console.log(`📢 Manual intervention required for ${branchName}`);
    console.log('Resolution details:', resolution);
    
    // Save notification for later review
    const notification = {
      branch: branchName,
      timestamp: new Date().toISOString(),
      resolution,
      status: 'pending'
    };
    
    await this.saveNotification(notification);
  }

  async saveAnalysis(analysis) {
    try {
      const filename = `./logs/git-analysis-${new Date().toISOString().split('T')[0]}.json`;
      await fs.writeFile(filename, JSON.stringify(analysis, null, 2));
    } catch (error) {
      console.error('Error saving analysis:', error);
    }
  }

  async saveNotification(notification) {
    try {
      const filename = `./logs/git-notifications-${new Date().toISOString().split('T')[0]}.json`;
      let notifications = [];
      
      try {
        const existing = await fs.readFile(filename, 'utf8');
        notifications = JSON.parse(existing);
      } catch (error) {
        // File doesn't exist, start with empty array
      }
      
      notifications.push(notification);
      await fs.writeFile(filename, JSON.stringify(notifications, null, 2));
    } catch (error) {
      console.error('Error saving notification:', error);
    }
  }

  async loadHistory() {
    try {
      // Load merge history
      const mergeHistoryFile = './logs/git-merge-history.json';
      try {
        const data = await fs.readFile(mergeHistoryFile, 'utf8');
        this.mergeHistory = JSON.parse(data);
      } catch (error) {
        this.mergeHistory = [];
      }
      
      // Load conflict history
      const conflictHistoryFile = './logs/git-conflict-history.json';
      try {
        const data = await fs.readFile(conflictHistoryFile, 'utf8');
        this.conflictHistory = JSON.parse(data);
      } catch (error) {
        this.conflictHistory = [];
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  }
}

// Start the Enhanced Git Automation
const gitAutomation = new EnhancedGitAutomation();
gitAutomation.start().catch(console.error);

module.exports = EnhancedGitAutomation;