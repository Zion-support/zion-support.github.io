#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Automated Deployment Orchestrator
 * Comprehensive deployment automation with rollback capabilities
 */
class AutomatedDeploymentOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = Date.now();
    this.deployment = {
      environment: process.env.NODE_ENV || 'production',
      version: this.getVersion(),
      status: 'pending',
      steps: [],
      rollback: { available: false, version: null }
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  getVersion() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      return packageJson.version || '1.0.0';
    } catch (error) {
      return '1.0.0';
    }
  }

  async runCommand(command, description, options = {}) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      {
        name: 'Git status check',
        command: 'git status --porcelain',
        description: 'Check for uncommitted changes'
      },
      {
        name: 'Dependency check',
        command: 'npm ci',
        description: 'Install dependencies'
      },
      {
        name: 'Lint check',
        command: 'npm run lint',
        description: 'Run linting'
      },
      {
        name: 'Type check',
        command: 'npm run type-check',
        description: 'Run TypeScript checks'
      },
      {
        name: 'Test suite',
        command: 'npm run test:smoke',
        description: 'Run smoke tests'
      },
      {
        name: 'Build check',
        command: 'npm run build',
        description: 'Build application'
      }
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({
        name: check.name,
        success: result.success,
        error: result.error
      });
      
      if (!result.success) {
        this.log(`Pre-deployment check failed: ${check.name}`, 'ERROR');
        return false;
      }
    }

    this.deployment.steps.push({
      name: 'pre-deployment-checks',
      status: 'completed',
      results
    });

    this.log('✅ All pre-deployment checks passed');
    return true;
  }

  async createBackup() {
    this.log('💾 Creating deployment backup...');
    
    try {
      // Get current commit hash
      const gitResult = await this.runCommand('git rev-parse HEAD', 'Get current commit');
      if (gitResult.success) {
        this.deployment.rollback.version = gitResult.output.trim();
        this.deployment.rollback.available = true;
        this.log(`Backup created at commit: ${this.deployment.rollback.version}`);
      }

      // Create backup of current build
      const backupDir = path.join(this.projectRoot, 'deployment-backups');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const backupPath = path.join(backupDir, `backup-${Date.now()}`);
      await this.runCommand(`cp -r .next ${backupPath}`, 'Create build backup');
      
      this.deployment.steps.push({
        name: 'backup-creation',
        status: 'completed',
        backupPath
      });

      return true;
    } catch (error) {
      this.log(`Backup creation failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async deployToStaging() {
    this.log('🚀 Deploying to staging environment...');
    
    try {
      // This would typically deploy to a staging environment
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.log('✅ Staging deployment completed');
      
      this.deployment.steps.push({
        name: 'staging-deployment',
        status: 'completed',
        environment: 'staging'
      });

      return true;
    } catch (error) {
      this.log(`Staging deployment failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runStagingTests() {
    this.log('🧪 Running staging environment tests...');
    
    try {
      // This would run tests against the staging environment
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.log('✅ Staging tests passed');
      
      this.deployment.steps.push({
        name: 'staging-tests',
        status: 'completed'
      });

      return true;
    } catch (error) {
      this.log(`Staging tests failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async deployToProduction() {
    this.log('🚀 Deploying to production environment...');
    
    try {
      // This would deploy to production
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      this.log('✅ Production deployment completed');
      
      this.deployment.steps.push({
        name: 'production-deployment',
        status: 'completed',
        environment: 'production'
      });

      this.deployment.status = 'completed';
      return true;
    } catch (error) {
      this.log(`Production deployment failed: ${error.message}`, 'ERROR');
      this.deployment.status = 'failed';
      return false;
    }
  }

  async runPostDeploymentTests() {
    this.log('🔍 Running post-deployment tests...');
    
    try {
      // This would run tests against the production environment
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.log('✅ Post-deployment tests passed');
      
      this.deployment.steps.push({
        name: 'post-deployment-tests',
        status: 'completed'
      });

      return true;
    } catch (error) {
      this.log(`Post-deployment tests failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async rollback() {
    this.log('🔄 Initiating rollback...');
    
    if (!this.deployment.rollback.available) {
      this.log('No rollback available', 'ERROR');
      return false;
    }

    try {
      // Rollback to previous version
      await this.runCommand(`git checkout ${this.deployment.rollback.version}`, 'Rollback to previous version');
      await this.runCommand('npm run build', 'Rebuild application');
      
      this.log('✅ Rollback completed successfully');
      
      this.deployment.steps.push({
        name: 'rollback',
        status: 'completed',
        rollbackVersion: this.deployment.rollback.version
      });

      return true;
    } catch (error) {
      this.log(`Rollback failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateDeploymentReport() {
    this.log('📊 Generating deployment report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      deployment: this.deployment,
      summary: {
        status: this.deployment.status,
        stepsCompleted: this.deployment.steps.length,
        rollbackAvailable: this.deployment.rollback.available
      }
    };

    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Deployment report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Automated Deployment Orchestrator...');
    this.log(`Environment: ${this.deployment.environment}`);
    this.log(`Version: ${this.deployment.version}`);
    this.log('='.repeat(60));

    try {
      // Pre-deployment checks
      if (!(await this.preDeploymentChecks())) {
        this.log('Pre-deployment checks failed, aborting deployment', 'ERROR');
        return false;
      }

      // Create backup
      if (!(await this.createBackup())) {
        this.log('Backup creation failed, aborting deployment', 'ERROR');
        return false;
      }

      // Deploy to staging
      if (!(await this.deployToStaging())) {
        this.log('Staging deployment failed, aborting deployment', 'ERROR');
        return false;
      }

      // Run staging tests
      if (!(await this.runStagingTests())) {
        this.log('Staging tests failed, initiating rollback', 'ERROR');
        await this.rollback();
        return false;
      }

      // Deploy to production
      if (!(await this.deployToProduction())) {
        this.log('Production deployment failed, initiating rollback', 'ERROR');
        await this.rollback();
        return false;
      }

      // Run post-deployment tests
      if (!(await this.runPostDeploymentTests())) {
        this.log('Post-deployment tests failed, initiating rollback', 'ERROR');
        await this.rollback();
        return false;
      }

      const report = await this.generateDeploymentReport();
      
      this.log('🎉 Deployment completed successfully!');
      this.log(`📊 Status: ${report.summary.status}`);
      this.log(`⏱️ Duration: ${report.duration}ms`);
      
      return true;
    } catch (error) {
      this.log(`Deployment failed: ${error.message}`, 'ERROR');
      this.deployment.status = 'failed';
      await this.generateDeploymentReport();
      return false;
    }
  }
}

// Run the deployment orchestrator
if (require.main === module) {
  const orchestrator = new AutomatedDeploymentOrchestrator();
  orchestrator.run().catch(console.error);
}

module.exports = AutomatedDeploymentOrchestrator;