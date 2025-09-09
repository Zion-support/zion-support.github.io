#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WorkingAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'working-automation.log');
    this.ensureDirectories()}

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n')}

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000, // 5 minutes timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result }} catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message }}
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    try {
      const result = execSync('npm audit --audit-level=moderate' {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      this.log('✅ Security audit completed');
      return { success: true, output: result }} catch (error) {
      this.log(`⚠️ Security audit found issues: ${error.message}`);
      return { success: false, error: error.message }}
  }

  async runPerformanceCheck() {
    this.log('📊 Running performance check...');
    try {
      // Check build size
      const buildResult = execSync('npm run build' {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      
      // Analyze bundle size
      const bundleSize = this.analyzeBundleSize();
      
      this.log('✅ Performance check completed');
      return { 
        success: true, 
        buildOutput: buildResult,
        bundleSize: bundleSize
      }} catch (error) {
      this.log(`❌ Performance check failed: ${error.message}`);
      return { success: false, error: error.message }}
  }

  analyzeBundleSize() {
    const nextDir = path.join(this.projectRoot, '.next');
    if (!fs.existsSync(nextDir)) {
      return { error: 'Build directory not found' }}

    try {
      const staticDir = path.join(nextDir, 'static');
      if (fs.existsSync(staticDir)) {
        const files = this.getAllFiles(staticDir);
        let totalSize = 0;
        const fileSizes = {};

        files.forEach(file => {
          const stats = fs.statSync(file);
          const size = stats.size;
          totalSize += size;
          const relativePath = path.relative(staticDir, file);
          fileSizes[relativePath] = size});

        return {
          totalSize: totalSize,
          totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
          fileCount: files.length,
          fileSizes: fileSizes
        }}
    } catch (error) {
      return { error: error.message }}

    return { error: 'Could not analyze bundle size' }}

  getAllFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath))} else {
        files.push(fullPath)}
    }
    
    return files}

  async runQualityChecks() {
    this.log('🔍 Running quality checks...');
    
    const checks = [
      {
        name: 'File Structure Check',
        check: () => this.checkFileStructure()
      }, {
        name: 'Dependency Check',
        check: () => this.checkDependencies()
      }, {
        name: 'Configuration Check',
        check: () => this.checkConfiguration()
      }
    ];

    const results = [];
    for (const check of checks) {
      try {
        const result = await check.check();
        results.push({ name: check.name, success: true, result });
        this.log(`✅ ${check.name} passed`)} catch (error) {
        results.push({ name: check.name, success: false, error: error.message });
        this.log(`❌ ${check.name} failed: ${error.message}`)}
    }

    return results}

  checkFileStructure() {
    const requiredFiles = [
      'package.json',
      'next.config.js',
      'pages',
      'src'
    ];

    const missing = [];
    for (const file of requiredFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        missing.push(file)}
    }

    return {
      missing: missing,
      isValid: missing.length === 0
    }}

  checkDependencies() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      throw new Error('package.json not found')}

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    const devDependencies = Object.keys(packageJson.devDependencies || {});

    return {
      dependencies: dependencies,
      devDependencies: devDependencies,
      totalDeps: dependencies.length + devDependencies.length
    }}

  checkConfiguration() {
    const configFiles = [
      'next.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'eslint.config.js'
    ];

    const existing = [];
    const missing = [];

    for (const file of configFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        existing.push(file)} else {
        missing.push(file)}
    }

    return {
      existing: existing,
      missing: missing,
      coverage: (existing.length / configFiles.length) * 100
    }}

  async run() {
    this.log('🎯 Starting Working Automation Suite');
    
    const results = {
      timestamp: new Date().toISOString(),
      securityAudit: null,
      performanceCheck: null,
      qualityChecks: null
    };

    // Run security audit
    results.securityAudit = await this.runSecurityAudit();

    // Run performance check
    results.performanceCheck = await this.runPerformanceCheck();

    // Run quality checks
    results.qualityChecks = await this.runQualityChecks();

    // Generate report
    const reportPath = path.join(this.reportsDir, 'working-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

    this.log('📊 Report generated: ' + reportPath);
    this.log('🎉 Working Automation Suite Completed');

    return results}
}

// Run the automation suite
const suite = new WorkingAutomationSuite();
suite.run().catch(console.error);