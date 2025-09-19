
/**,
 * Start All Automations,
 *,
 * Main entry point for starting the comprehensive automation scripts manager,
 * that discovers, starts, monitors, and continuously improves all automation scripts.,
 */,
const path = require('path');
const AutomationScriptsManager = require('./scripts/automation-scripts-manager.cjs');
class StartAllAutomations {,
  constructor() {,
    this.manager = new AutomationScriptsManager();
    this.setupEventHandlers();
  }
,
  setupEventHandlers() {,
    // Handle manager events,
    this.manager.on('started', () => {,
      console.log('🎉 Automation Scripts Manager started successfully!');
      this.printStatus();
    });
    this.manager.on('stopped', () => {,
      console.log('👋 Automation Scripts Manager stopped');
    });
    this.manager.on('scriptsDiscovered', (scripts) => {,
      console.log(`🔍 Discovered ${scripts.size} automation scripts`);
    });
    this.manager.on('scriptStarted', ({ script, processInfo }) => {,
      console.log(`🚀 Started: ${script.name,} (PID: ${processInfo.process.pid,})`);
    });
    this.manager.on('scriptCompleted', ({ script, processInfo, code }) => {,
      const status = code === 0 ? '✅' : '❌';
      console.log(`${status} Completed: ${script.name,} (${processInfo.duration}ms)`);
    });
    this.manager.on('scriptImproved', ({ script, improvements }) => {,
      console.log(`🔧 Improved: ${script.name,} (${improvements.join()})`);
    });
    this.manager.on('improvementCycleCompleted', (results) => {,
      const successful = results.filter(r => r.result.success).length;
      console.log(`🔧 Improvement cycle: ${successful,}/${results.length} scripts improved`);
    });
    this.manager.on('healthCheck', (status) => {,
      console.log(`🏥 Health: ${status.runningScripts,} running, ${status.totalScripts} total scripts`);
    });
    // Handle graceful shutdown,
    process.on('SIGINT', async () => {,
      console.log('\n🛑 Received SIGINT, shutting down gracefully...');
      await this.shutdown();
    });
    process.on('SIGTERM', async () => {,
      console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
      await this.shutdown();
    });
  }
,
  printStatus() {,
    const status = this.manager.getStatus();
    console.log('\n📊 Automation Scripts Manager Status');
    console.log('='.repeat(50));
    console.log(`Status: ${status.isRunning ? '✅ Running' : '❌ Stopped',}`);
    console.log(`Total Scripts: ${status.totalScripts,}`);
    console.log(`Running Scripts: ${status.runningScripts.length,}`);
    console.log(`Uptime: ${Math.round(status.uptime / 1000),}s`);
    console.log(`Last Discovery: ${status.lastDiscovery ? status.lastDiscovery.toLocaleString() : 'Never',}`);
    console.log(`Last Improvement: ${status.lastImprovement ? status.lastImprovement.toLocaleString() : 'Never',}`);
    if (status.runningScripts.length > 0) {,
      console.log('\n🔄 Currently Running: ');
      status.runningScripts.forEach(scriptPath => {,
        const script = this.manager.scripts.get(scriptPath);
        if (script) {,
          console.log(`  - ${script.name}`);
        }
      });
    }
,
    console.log('\n🎯 Available Commands: ');
    console.log('  npm run automation:status    # Check status');
    console.log('  npm run automation:discover  # Discover scripts');
    console.log('  npm run automation:improve   # Improve scripts');
    console.log('  npm run automation:report    # Generate report');
    console.log('  npm run automation: stop      # Stop manager'),}
,
  async shutdown() {,
    try {,
      await this.manager.stop();
      console.log('✅ Shutdown completed successfully');
      process.exit(0);
    } catch (error) {,
      console.error('❌ Error during shutdown:', error);
      process.exit(1);
    }
  }
,
  async start() {,
    console.log('🚀 Starting All Automations...');
    console.log('='.repeat(50));
    try {,
      await this.manager.start();
      // Keep the process running,
      process.stdin.resume();
    } catch (error) {,
      console.error('❌ Failed to start automation manager:', error);
      process.exit(1);
    }
  }
}
,
// Start the automation system,
if (require.main === module) {,
  const starter = new StartAllAutomations();
  starter.start().catch(error => {,
    console.error('Failed to start automation system:', error);
    process.exit(1);
  });
}
,
module.exports = StartAllAutomations;