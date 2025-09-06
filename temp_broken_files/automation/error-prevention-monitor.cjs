#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🛡️  Starting Error Prevention Monitor...');

class ErrorPreventionMonitor {
  constructor() {
    this.isRunning = false;
    this.checkInterval = 300000; // 5 minutes
    this.lastCheck = null;
    this.errorCount = 0;
    this.maxErrors = 10;
    this.logFile = path.join(process.cwd(), 'automation/logs/error-prevention-monitor.log');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkForErrors() {
    try {
      this.log('🔍 Running comprehensive error check...');
      
      // Check TypeScript errors
      const tsErrors = await this.checkTypeScriptErrors();
      
      // Check ESLint errors
      const lintErrors = await this.checkLintErrors();
      
      // Check build errors
      const buildErrors = await this.checkBuildErrors();
      
      // Check for critical file issues
      const fileErrors = await this.checkFileIntegrity();
      
      const totalErrors = tsErrors + lintErrors + buildErrors + fileErrors;
      
      if (totalErrors > 0) {
        this.errorCount++;
        this.log(`❌ Found ${totalErrors} errors (${this.errorCount}/${this.maxErrors})`, 'ERROR');
        
        if (this.errorCount >= this.maxErrors) {
          this.log('🚨 Maximum error threshold reached, triggering auto-fix...', 'CRITICAL');
          await this.triggerAutoFix();
          this.errorCount = 0;
        }
      } else {
        this.log('✅ No errors found');
        this.errorCount = 0;
      }
      
      this.lastCheck = new Date();
      
    } catch (error) {
      this.log(`❌ Error during check: ${error.message}`, 'ERROR');
    }
  }

  async checkTypeScriptErrors() {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      return 0;
    } catch (error) {
      const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (errorOutput.match(/error TS/g) || []).length;
      this.log(`TypeScript errors: ${errorCount}`, 'WARN');
      return errorCount;
    }
  }

  async checkLintErrors() {
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      return 0;
    } catch (error) {
      const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (errorOutput.match(/error/g) || []).length;
      this.log(`Lint errors: ${errorCount}`, 'WARN');
      return errorCount;
    }
  }

  async checkBuildErrors() {
    try {
      execSync('npm run build', { stdio: 'pipe' });
      return 0;
    } catch (error) {
      const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (errorOutput.match(/error/g) || []).length;
      this.log(`Build errors: ${errorCount}`, 'WARN');
      return errorCount;
    }
  }

  async checkFileIntegrity() {
    let errorCount = 0;
    
    // Check for common file issues
    const criticalFiles = [
      'components/Homepage2025.tsx',
      'pages/index.tsx',
      'next.config.js',
      'package.json'
    ];
    
    for (const file of criticalFiles) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for git merge conflict markers
        if (content.includes('<<<<<<<') || content.includes('>>>>>>>') || content.includes('=======')) {
          this.log(`Git merge conflict markers found in ${file}`, 'ERROR');
          errorCount++;
        }
        
        // Check for malformed JSX
        if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
          const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
          
          if (Math.abs(openTags - closeTags) > 2) {
            this.log(`Potential JSX structure issue in ${file}`, 'WARN');
            errorCount++;
          }
        }
      } else {
        this.log(`Critical file missing: ${file}`, 'ERROR');
        errorCount++;
      }
    }
    
    return errorCount;
  }

  async triggerAutoFix() {
    try {
      this.log('🔧 Triggering automated error fix...');
      
      // Run the error fixer
      execSync('node automation/error-fixer.cjs', { stdio: 'inherit' });
      
      this.log('✅ Auto-fix completed');
      
      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        action: 'auto_fix_triggered',
        errorCount: this.errorCount,
        status: 'completed'
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/auto-fix-report.json'),
        JSON.stringify(report, null, 2)
      );
      
    } catch (error) {
      this.log(`❌ Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.isRunning = true;
    this.log('🚀 Error Prevention Monitor started');
    
    // Initial check
    await this.checkForErrors();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        await this.checkForErrors();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Error Prevention Monitor...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('🛑 Shutting down Error Prevention Monitor...');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the monitor
const monitor = new ErrorPreventionMonitor();
monitor.start().catch(error => {
  console.error('❌ Failed to start Error Prevention Monitor:', error);
  process.exit(1);
});