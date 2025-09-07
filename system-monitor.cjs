#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SystemMonitor {
  constructor() {
    this.metrics = {
      timestamp: new Date().toISOString(),
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
      platform: process.platform,
      nodeVersion: process.version
    };
  }

  async generateReport() {
    console.log('📊 Generating System Monitor Report...');
    const report = {
      ...this.metrics,
      recommendations: this.getRecommendations()
    };

    fs.writeFileSync('system-monitor-report.json', JSON.stringify(report, null, 2));
    console.log('✅ System monitor report generated');
  }

  getRecommendations() {
    const recommendations = [];
    const memoryUsage = this.metrics.memoryUsage.heapUsed / 1024 / 1024;

    if (memoryUsage > 100) {
      recommendations.push('Consider optimizing memory usage');
    }
    if (this.metrics.uptime > 86400) {
      recommendations.push('Consider restarting the application');
    }

    return recommendations;
  }
}

const monitor = new SystemMonitor();
monitor.generateReport().catch(console.error);
