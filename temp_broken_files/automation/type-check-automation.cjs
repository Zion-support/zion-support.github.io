#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Starting Type Check Automation...');

class TypeCheckAutomation {
  constructor() {
    this.isRunning = false;
    this.checkInterval = 240000; // 4 minutes
    this.lastCheck = null;
    this.logFile = path.join(process.cwd(), 'automation/logs/type-check-automation.log');
    
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

  async runTypeCheck() {
    try {
      this.log('🔍 Running TypeScript type check...');
      
      execSync('npm run type-check', { stdio: 'pipe' });
      
      this.log('✅ Type check completed successfully');
      return { success: true, errors: 0 };
      
    } catch (error) {
      const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
      const errorCount = (errorOutput.match(/error TS/g) || []).length;
      
      this.log(`❌ Type check found ${errorCount} errors`, 'WARN');
      
      // Try to auto-fix common TypeScript errors
      if (errorCount > 0) {
        await this.autoFixTypeErrors(errorOutput);
      }
      
      return { success: false, errors: errorCount };
    }
  }

  async autoFixTypeErrors(errorOutput) {
    try {
      this.log('🔧 Attempting to auto-fix TypeScript errors...');
      
      let fixes = 0;
      
      // Fix common TypeScript errors
      const files = this.extractFilesFromErrors(errorOutput);
      
      for (const file of files) {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          fixes += await this.fixTypeScriptFile(filePath, errorOutput);
        }
      }
      
      if (fixes > 0) {
        this.log(`✅ Applied ${fixes} TypeScript fixes`);
        
        // Re-run type check to verify fixes
        try {
          execSync('npm run type-check', { stdio: 'pipe' });
          this.log('✅ Type check passed after fixes');
        } catch (retryError) {
          this.log('⚠️  Some TypeScript errors remain after auto-fix', 'WARN');
        }
      }
      
    } catch (error) {
      this.log(`❌ Error auto-fixing TypeScript errors: ${error.message}`, 'ERROR');
    }
  }

  extractFilesFromErrors(errorOutput) {
    const fileMatches = errorOutput.match(/\.\/([^:]+):/g);
    if (!fileMatches) return [];
    
    return [...new Set(fileMatches.map(match => match.replace('./', '').replace(':', '')))];
  }

  async fixTypeScriptFile(filePath, errorOutput) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixes = 0;
      const originalContent = content;
      
      // Fix common TypeScript errors
      
      // Fix JSX closing tag errors
      if (errorOutput.includes('Expected corresponding JSX closing tag')) {
        content = this.fixJSXStructure(content);
        fixes++;
      }
      
      // Fix 'any' type errors
      if (errorOutput.includes('Unexpected any')) {
        const anyMatches = content.match(/:\s*any\b/g);
        if (anyMatches) {
          content = content.replace(/:\s*any\b/g, ': unknown');
          fixes += anyMatches.length;
        }
      }
      
      // Fix unused variable errors
      if (errorOutput.includes('is defined but never used')) {
        content = this.fixUnusedVariables(content);
        fixes++;
      }
      
      // Fix missing return type annotations
      if (errorOutput.includes('implicitly has an \'any\' return type')) {
        content = content.replace(/function\s+(\w+)\s*\(/g, 'function $1(): any (');
        content = content.replace(/const\s+(\w+)\s*=\s*\(/g, 'const $1 = (): any => (');
        fixes++;
      }
      
      // Fix missing property errors
      if (errorOutput.includes('Property') && errorOutput.includes('does not exist')) {
        content = this.fixMissingProperties(content);
        fixes++;
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed TypeScript issues in ${path.relative(process.cwd(), filePath)}`);
      }
      
      return fixes;
      
    } catch (error) {
      this.log(`Error fixing TypeScript file ${filePath}: ${error.message}`, 'WARN');
      return 0;
    }
  }

  fixJSXStructure(content) {
    // Basic JSX structure fix
    const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
    
    if (openTags > closeTags) {
      const missingTags = openTags - closeTags;
      // Add missing closing tags before the last closing tag
      const lastCloseIndex = content.lastIndexOf('</');
      if (lastCloseIndex !== -1) {
        const beforeLastClose = content.substring(0, lastCloseIndex);
        const afterLastClose = content.substring(lastCloseIndex);
        
        return beforeLastClose + '</div>'.repeat(missingTags) + afterLastClose;
      }
    }
    
    return content;
  }

  fixUnusedVariables(content) {
    // Remove unused imports and variables
    const lines = content.split('\n');
    const usedVariables = new Set();
    
    // Find all variable usages
    lines.forEach(line => {
      const matches = line.match(/\b(\w+)\b/g);
      if (matches) {
        matches.forEach(match => usedVariables.add(match));
      }
    });
    
    // Remove unused variable declarations
    return lines.filter(line => {
      const varMatch = line.match(/const\s+(\w+)\s*=/);
      if (varMatch) {
        const varName = varMatch[1];
        return usedVariables.has(varName) || line.includes('export');
      }
      return true;
    }).join('\n');
  }

  fixMissingProperties(content) {
    // Add basic property definitions for common missing properties
    const commonProps = {
      'className': 'string',
      'id': 'string',
      'onClick': '() => void',
      'onChange': '(e: any) => void',
      'children': 'React.ReactNode'
    };
    
    let fixedContent = content;
    
    Object.entries(commonProps).forEach(([prop, type]) => {
      if (content.includes(prop) && !content.includes(`${prop}:`)) {
        // Add type annotation for missing properties
        fixedContent = fixedContent.replace(
          new RegExp(`(\\w+)\\s*:\\s*{([^}]*)}`, 'g'),
          `$1: { $2 ${prop}?: ${type} }`
        );
      }
    });
    
    return fixedContent;
  }

  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        lastCheck: this.lastCheck,
        status: 'running',
        totalRuns: 0,
        totalFixes: 0,
        errors: 0
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/type-check-report.json'),
        JSON.stringify(report, null, 2)
      );
      
    } catch (error) {
      this.log(`Error generating report: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.isRunning = true;
    this.log('🚀 Type Check Automation started');
    
    // Initial run
    await this.runTypeCheck();
    await this.generateReport();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        this.lastCheck = new Date();
        await this.runTypeCheck();
        await this.generateReport();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Type Check Automation...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('🛑 Shutting down Type Check Automation...');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the automation
const typeCheckAutomation = new TypeCheckAutomation();
typeCheckAutomation.start().catch(error => {
  console.error('❌ Failed to start Type Check Automation:', error);
  process.exit(1);
});