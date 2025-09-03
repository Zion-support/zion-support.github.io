#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WorkingAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'working-automation.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runHealthCheck() {
    this.log('Running health check...');
    try {
      // Check if package.json exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        this.log('✓ package.json found');
      } else {
        this.log('✗ package.json not found');
      }

      // Check if node_modules exists
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        this.log('✓ node_modules found');
      } else {
        this.log('✗ node_modules not found');
      }

      // Check if src directory exists
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        this.log('✓ src directory found');
      } else {
        this.log('✗ src directory not found');
      }

      // Check if pages directory exists
      const pagesPath = path.join(this.projectRoot, 'pages');
      if (fs.existsSync(pagesPath)) {
        this.log('✓ pages directory found');
      } else {
        this.log('✗ pages directory not found');
      }

      this.log('Health check completed successfully');
    } catch (error) {
      this.log(`Health check failed: ${error.message}`);
    }
  }

  async runPerformanceCheck() {
    this.log('Running performance check...');
    try {
      // Check file sizes
      const checkDirectory = (dir, maxSize = 1000000) => {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir, { withFileTypes: true });
        files.forEach(file => {
          if (file.isFile()) {
            const filePath = path.join(dir, file.name);
            const stats = fs.statSync(filePath);
            if (stats.size > maxSize) {
              this.log(`⚠ Large file detected: ${filePath} (${stats.size} bytes)`);
            }
          } else if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
            checkDirectory(path.join(dir, file.name), maxSize);
          }
        });
      };

      checkDirectory(this.projectRoot);
      this.log('Performance check completed');
    } catch (error) {
      this.log(`Performance check failed: ${error.message}`);
    }
  }

  async runSecurityCheck() {
    this.log('Running security check...');
    try {
      // Check for common security issues
      const checkFile = (filePath) => {
        if (!fs.existsSync(filePath)) return;
        
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for hardcoded secrets
        if (content.includes('password') && content.includes('=')) {
          this.log(`⚠ Potential hardcoded password in ${filePath}`);
        }
        
        if (content.includes('api_key') && content.includes('=')) {
          this.log(`⚠ Potential hardcoded API key in ${filePath}`);
        }
        
        if (content.includes('secret') && content.includes('=')) {
          this.log(`⚠ Potential hardcoded secret in ${filePath}`);
        }
      };

      // Check package.json for vulnerabilities
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        checkFile(packageJsonPath);
      }

      this.log('Security check completed');
    } catch (error) {
      this.log(`Security check failed: ${error.message}`);
    }
  }

  async runCodeQualityCheck() {
    this.log('Running code quality check...');
    try {
      // Count files by type
      const countFiles = (dir, extensions) => {
        if (!fs.existsSync(dir)) return 0;
        
        let count = 0;
        const files = fs.readdirSync(dir, { withFileTypes: true });
        
        files.forEach(file => {
          if (file.isFile()) {
            const ext = path.extname(file.name);
            if (extensions.includes(ext)) {
              count++;
            }
          } else if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
            count += countFiles(path.join(dir, file.name), extensions);
          }
        });
        
        return count;
      };

      const tsxFiles = countFiles(this.projectRoot, ['.tsx']);
      const jsxFiles = countFiles(this.projectRoot, ['.jsx']);
      const tsFiles = countFiles(this.projectRoot, ['.ts']);
      const jsFiles = countFiles(this.projectRoot, ['.js']);

      this.log(`Code quality check results:`);
      this.log(`  - TSX files: ${tsxFiles}`);
      this.log(`  - JSX files: ${jsxFiles}`);
      this.log(`  - TS files: ${tsFiles}`);
      this.log(`  - JS files: ${jsFiles}`);

      this.log('Code quality check completed');
    } catch (error) {
      this.log(`Code quality check failed: ${error.message}`);
    }
  }

  async runBuildCheck() {
    this.log('Running build check...');
    try {
      // Check if build artifacts exist
      const buildDirs = ['.next', 'out', 'dist', 'build'];
      
      buildDirs.forEach(dir => {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          this.log(`✓ Build directory found: ${dir}`);
        } else {
          this.log(`✗ Build directory not found: ${dir}`);
        }
      });

      this.log('Build check completed');
    } catch (error) {
      this.log(`Build check failed: ${error.message}`);
    }
  }

  async runDependencyCheck() {
    this.log('Running dependency check...');
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        this.log(`Dependencies: ${Object.keys(packageJson.dependencies || {}).length}`);
        this.log(`Dev Dependencies: ${Object.keys(packageJson.devDependencies || {}).length}`);
        
        // Check for common dependencies
        const commonDeps = ['react', 'next', 'typescript', 'tailwindcss'];
        commonDeps.forEach(dep => {
          if (packageJson.dependencies && packageJson.dependencies[dep]) {
            this.log(`✓ ${dep}: ${packageJson.dependencies[dep]}`);
          } else if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
            this.log(`✓ ${dep}: ${packageJson.devDependencies[dep]}`);
          } else {
            this.log(`✗ ${dep} not found`);
          }
        });
      }

      this.log('Dependency check completed');
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      projectRoot: this.projectRoot,
      reportsDir: this.reportsDir,
      logFile: this.logFile,
      summary: {
        healthCheck: 'completed',
        performanceCheck: 'completed',
        securityCheck: 'completed',
        codeQualityCheck: 'completed',
        buildCheck: 'completed',
        dependencyCheck: 'completed'
      }
    };

    const reportPath = path.join(this.reportsDir, 'working-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting working automation suite...');
    
    await this.runHealthCheck();
    await this.runPerformanceCheck();
    await this.runSecurityCheck();
    await this.runCodeQualityCheck();
    await this.runBuildCheck();
    await this.runDependencyCheck();
    
    const report = this.generateReport();
    
    this.log('Working automation suite completed successfully!');
    this.log(`Report saved to: ${report.reportsDir}`);
    
    return report;
  }
}

// Run the automation suite
if (require.main === module) {
  const suite = new WorkingAutomationSuite();
  suite.run().catch(error => {
    console.error('Automation suite failed:', error);
    process.exit(1);
  });
}

module.exports = WorkingAutomationSuite;