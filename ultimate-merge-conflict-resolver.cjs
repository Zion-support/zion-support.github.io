#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require('fs');
const path = require('path');

class UltimateMergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedFiles = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);

  async getConflictedFiles() {
    this.log('🔍 Finding files with merge conflicts...');
    try {
      const status = execSync("git status --porcelain", {
        cwd: this.projectRoot,
        encoding: "utf8"
      });
      
      const conflictedFiles = status
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.substring(3).trim())
        .filter(file => file.length > 0);
`;
      this.log(`📊 Found ${conflictedFiles.length} conflicted files`);
      return conflictedFiles;
    } catch (error) {`;
      this.log(`❌ Error finding conflicted files: ${error.message}`, 'ERROR');
      return [];

  async resolveConflict(filePath) {`;
    this.log(`🔧 Resolving conflicts in ${filePath}...`);
    
      if (!fs.existsSync(filePath)) {`;
        this.log(`⚠️ File ${filePath} does not exist, skipping`, 'WARNING');
        return false;

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflict markers
      if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {`;
        this.log(`✅ No conflicts found in ${filePath}`, 'SUCCESS');
        return true;

      let resolvedContent = content;
      let conflictCount = 0;

      // Strategy 1: Use "ours" version (current branch) for most files
      if (filePath.includes('automation/') || filePath.includes('scripts/')) {
        resolvedContent = this.resolveWithOurs(content);
        conflictCount = (content.match(/<<<<<<< HEAD/g) || []).length;
      // Strategy 2: Use "theirs" version for configuration files
      else if (filePath.includes('.config.') || filePath.includes('eslint') || filePath.includes('jest')) {
        resolvedContent = this.resolveWithTheirs(content);
      // Strategy 3: Smart merge for component files
      else if (filePath.includes('components/') || filePath.includes('App.tsx')) {
        resolvedContent = this.smartMerge(content);
      // Strategy 4: Default to ours for other files
      else {

      // Write resolved content
      fs.writeFileSync(filePath, resolvedContent);
      
      // Add to git`;
      execSync(`git add "${filePath}"`, { cwd: this.projectRoot });
      
      this.resolvedFiles.push({
        file: filePath,
        conflicts: conflictCount,
        strategy: this.getStrategy(filePath)
      this.log(`✅ Resolved ${conflictCount} conflicts in ${filePath}`, 'SUCCESS');
      
      this.log(`❌ Error resolving ${filePath}: ${error.message}`, 'ERROR');`;
      this.errors.push(`${filePath}: ${error.message}`);

  resolveWithOurs(content) {
    return content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< [^\n]+\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> HEAD/g, '$1');

  resolveWithTheirs(content) {
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$2')

  smartMerge(content) {
    // For components, prefer the more complete version
    const oursMatch = content.match(/<<<<<<< HEAD\n([\s\S]*?)\n=======/);
    const theirsMatch = content.match(/=======\n([\s\S]*?)\n>>>>>>>/);
    
    if (oursMatch && theirsMatch) {
      const ours = oursMatch[1];
      const theirs = theirsMatch[1];
      
      // Choose the longer, more complete version
      if (theirs.length > ours.length) {
        return this.resolveWithTheirs(content);
      } else {
        return this.resolveWithOurs(content);
    

  getStrategy(filePath) {
    if (filePath.includes('automation/') || filePath.includes('scripts/')) return 'ours';
    if (filePath.includes('.config.') || filePath.includes('eslint') || filePath.includes('jest')) return 'theirs';
    if (filePath.includes('components/') || filePath.includes('App.tsx')) return 'smart';
    return 'ours';

  async commitMerge() {
    this.log('💾 Committing merge resolution...');
    try {`;
      const commitMessage = `feat: resolve merge conflicts automatically

- Resolved conflicts in ${this.resolvedFiles.length} files
- Used intelligent conflict resolution strategies
- Preserved automation scripts and configurations
- Maintained code quality and functionality

Files resolved:`;
${this.resolvedFiles.map(f => `- ${f.file} (${f.conflicts} conflicts, ${f.strategy} strategy)`).join('\n')}
Total conflicts resolved: ${this.resolvedFiles.reduce((sum, f) => sum + f.conflicts, 0)}`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      this.log('✅ Merge conflicts committed successfully', 'SUCCESS');
      this.log(`❌ Error committing merge: ${error.message}`, 'ERROR');

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),`;
      duration: `${Math.round(duration / 1000)}s`,
      summary: {
        totalFiles: this.resolvedFiles.length,
        totalConflicts: this.resolvedFiles.reduce((sum, f) => sum + f.conflicts, 0),
        errors: this.errors.length,
        strategies: {
          ours: this.resolvedFiles.filter(f => f.strategy === 'ours').length,
          theirs: this.resolvedFiles.filter(f => f.strategy === 'theirs').length,
          smart: this.resolvedFiles.filter(f => f.strategy === 'smart').length
      },
      resolvedFiles: this.resolvedFiles,
      errors: this.errors,
      recommendations: [
        'Review resolved files for any manual adjustments needed',
        'Run tests to ensure functionality is preserved',
        'Consider setting up automated conflict resolution for future merges
      ]
    };

    const reportPath = path.join(this.projectRoot, 'merge-conflict-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));`;
    this.log(`📊 Report saved to ${reportPath}`, 'INFO');
    return report;

  async run() {
    this.log('🚀 Starting Ultimate Merge Conflict Resolution...');
    
      // Get conflicted files
      const conflictedFiles = await this.getConflictedFiles();
      
      if (conflictedFiles.length === 0) {
        this.log('✅ No merge conflicts found', 'SUCCESS');
        return;

      // Resolve each conflict
      for (const file of conflictedFiles) {
        await this.resolveConflict(file);

      // Commit the merge
      await this.commitMerge();

      // Generate report
      const report = await this.generateReport();
      
      this.log('🎉 Merge conflict resolution completed successfully!', 'SUCCESS');`;
      this.log(`📊 Summary: ${report.summary.totalFiles} files, ${report.summary.totalConflicts} conflicts resolved`);
      
      if (this.errors.length > 0) {`;
        this.log(`⚠️ ${this.errors.length} errors encountered:`, 'WARNING');`;
        this.errors.forEach(error => this.log(`   - ${error}`, 'WARNING'));

      this.log(`💥 Merge conflict resolution failed: ${error.message}`, 'ERROR');
      throw error;

if (require.main === module) {
  const resolver = new UltimateMergeConflictResolver();
  resolver.run().catch(console.error);

module.exports = UltimateMergeConflictResolver;`;