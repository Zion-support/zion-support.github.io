#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.securityIssues = [];
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [SECURITY-AUDITOR] ${message}`);
  }

  async auditDependencies() {
    this.log('📦 Auditing dependencies for vulnerabilities...');
    
    try {
      const result = execSync('npm audit --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        
        this.vulnerabilities.push({
          type: 'dependency',
          severity: vulnCount > 0 ? 'high' : 'none',
          count: vulnCount,
          details: vulnCount > 0 ? 'Dependencies with known vulnerabilities found' : 'No dependency vulnerabilities found'
        });
        
        this.log(`${vulnCount > 0 ? '⚠️' : '✅'} Found ${vulnCount} dependency vulnerabilities`);
      }
      
    } catch (error) {
      this.log(`❌ Dependency audit failed: ${error.message}`);
    }
  }

  async auditCodeSecurity() {
    this.log('🔍 Auditing code for security issues...');
    
    try {
      const srcFiles = this.findSourceFiles();
      let securityIssues = 0;
      
      for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          { pattern: /eval\s*\(/, message: 'eval() usage detected - potential code injection risk' },
          { pattern: /Function\s*\(/, message: 'Function() constructor usage detected - potential code injection risk' },
          { pattern: /innerHTML\s*=/, message: 'innerHTML assignment detected - potential XSS risk' },
          { pattern: /dangerouslySetInnerHTML/, message: 'dangerouslySetInnerHTML usage detected - potential XSS risk' },
          { pattern: /document\.write/, message: 'document.write usage detected - potential XSS risk' },
          { pattern: /window\.location\s*=/, message: 'Direct window.location assignment detected - potential open redirect' },
          { pattern: /localStorage\.setItem.*password/i, message: 'Password storage in localStorage detected - security risk' },
          { pattern: /sessionStorage\.setItem.*password/i, message: 'Password storage in sessionStorage detected - security risk' },
          { pattern: /console\.log.*password/i, message: 'Password logging detected - potential data exposure' },
          { pattern: /process\.env\.\w+.*password/i, message: 'Password in environment variable detected - potential exposure' }
        ];
        
        for (const { pattern, message } of dangerousPatterns) {
          if (pattern.test(content)) {
            securityIssues++;
            this.securityIssues.push({
              file: file,
              type: 'code_security',
              severity: 'warning',
              message: message,
              line: this.findLineNumber(content, pattern)
            });
          }
        }
      }
      
      this.log(`${securityIssues > 0 ? '⚠️' : '✅'} Found ${securityIssues} code security issues`);
      
    } catch (error) {
      this.log(`❌ Code security audit failed: ${error.message}`);
    }
  }

  async auditEnvironmentVariables() {
    this.log('🔐 Auditing environment variables...');
    
    try {
      const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
      let envIssues = 0;
      
      for (const envFile of envFiles) {
        const envPath = path.join(this.projectRoot, envFile);
        if (fs.existsSync(envPath)) {
          const content = fs.readFileSync(envPath, 'utf8');
          const lines = content.split('\n');
          
          for (const line of lines) {
            if (line.includes('PASSWORD') || line.includes('SECRET') || line.includes('KEY')) {
              if (line.includes('=') && !line.includes('#')) {
                envIssues++;
                this.securityIssues.push({
                  file: envFile,
                  type: 'environment',
                  severity: 'warning',
                  message: 'Sensitive environment variable detected - ensure proper security',
                  line: line.trim()
                });
              }
            }
          }
        }
      }
      
      this.log(`${envIssues > 0 ? '⚠️' : '✅'} Found ${envIssues} environment variable issues`);
      
    } catch (error) {
      this.log(`❌ Environment variables audit failed: ${error.message}`);
    }
  }

  async auditFilePermissions() {
    this.log('📁 Auditing file permissions...');
    
    try {
      const sensitiveFiles = [
        '.env',
        '.env.local',
        'package.json',
        'next.config.cjs',
        'ecosystem.config.cjs'
      ];
      
      for (const file of sensitiveFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const mode = stats.mode.toString(8);
          
          // Check if file is world-readable (permission 644 or higher)
          if (parseInt(mode.slice(-3)) >= 644) {
            this.securityIssues.push({
              file: file,
              type: 'permissions',
              severity: 'info',
              message: 'File is world-readable - consider restricting permissions',
              details: `Current permissions: ${mode}`
            });
          }
        }
      }
      
    } catch (error) {
      this.log(`❌ File permissions audit failed: ${error.message}`);
    }
  }

  findSourceFiles() {
    const srcFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');
    
    const dirs = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of dirs) {
      this.findFilesRecursively(dir, srcFiles);
    }
    
    return srcFiles.filter(file => 
      /\.(ts|tsx|js|jsx)$/.test(file) && 
      !file.includes('node_modules') &&
      !file.includes('.next')
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (/\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }

  findLineNumber(content, pattern) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (pattern.test(lines[i])) {
        return i + 1;
      }
    }
    return 0;
  }

  generateRecommendations() {
    this.log('💡 Generating security recommendations...');
    
    // Generate recommendations based on findings
    if (this.vulnerabilities.length > 0) {
      this.recommendations.push({
        priority: 'high',
        category: 'dependencies',
        message: 'Update dependencies with known vulnerabilities',
        action: 'Run npm audit fix to automatically fix vulnerabilities'
      });
    }
    
    const codeIssues = this.securityIssues.filter(issue => issue.type === 'code_security');
    if (codeIssues.length > 0) {
      this.recommendations.push({
        priority: 'high',
        category: 'code_security',
        message: 'Address code security issues',
        action: 'Review and fix dangerous code patterns identified in the audit'
      });
    }
    
    const envIssues = this.securityIssues.filter(issue => issue.type === 'environment');
    if (envIssues.length > 0) {
      this.recommendations.push({
        priority: 'medium',
        category: 'environment',
        message: 'Secure environment variables',
        action: 'Ensure sensitive environment variables are properly secured and not committed to version control'
      });
    }
    
    const permIssues = this.securityIssues.filter(issue => issue.type === 'permissions');
    if (permIssues.length > 0) {
      this.recommendations.push({
        priority: 'low',
        category: 'permissions',
        message: 'Review file permissions',
        action: 'Consider restricting file permissions for sensitive files'
      });
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      securityIssues: this.securityIssues,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.reduce((sum, v) => sum + (v.count || 0), 0),
        totalSecurityIssues: this.securityIssues.length,
        criticalIssues: this.securityIssues.filter(i => i.severity === 'error').length,
        warnings: this.securityIssues.filter(i => i.severity === 'warning').length,
        info: this.securityIssues.filter(i => i.severity === 'info').length,
        totalRecommendations: this.recommendations.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Security audit report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Security Auditor...');
    
    try {
      await this.auditDependencies();
      await this.auditCodeSecurity();
      await this.auditEnvironmentVariables();
      await this.auditFilePermissions();
      
      this.generateRecommendations();
      const report = this.generateReport();
      
      this.log('✅ Security Auditor completed!');
      this.log(`📈 Found ${report.summary.totalVulnerabilities} vulnerabilities and ${report.summary.totalSecurityIssues} security issues`);
      
      return report;
    } catch (error) {
      this.log(`❌ Security Auditor failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the security auditor
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);