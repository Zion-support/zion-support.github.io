/**
 * Main Improvement Runner
 * Entry point for running all improvements
 */

import { improvementOrchestrator } from './improvementOrchestrator';
import { performanceOptimizer } from './performanceOptimizer';
import { codeQualityImprover } from './codeQualityImprover';
import { securityEnhancer } from './securityEnhancer';
import { testingFramework } from './testingFramework';
import { documentationGenerator } from './documentationGenerator';

/**
 * Initialize and run all improvements
 */
export async function runAllImprovements(): Promise<void> {
  try {
    console.log('🚀 Starting comprehensive improvement process...');
    
    // Initialize the improvement orchestrator
    await improvementOrchestrator.initialize();
    
    // Run comprehensive analysis
    const report = await improvementOrchestrator.runImprovementAnalysis();
    
    console.log('📊 Improvement Analysis Results:');
    console.log(`Overall Score: ${report.overallScore}/100`);
    console.log(`Performance: ${report.performance.score}/100`);
    console.log(`Code Quality: ${report.codeQuality.score}/100`);
    console.log(`Security: ${report.security.score}/100`);
    console.log(`Testing: ${report.testing.score}/100`);
    console.log(`Documentation: ${report.documentation.score}/100`);
    
    // Execute high-priority improvements
    const highPriorityActions = report.improvements.filter(a => a.priority === 'critical' || a.priority === 'high');
    
    for (const action of highPriorityActions) {
      console.log(`🔄 Executing: ${action.description}`);
      await improvementOrchestrator.executeImprovementAction(action.id);
    }
    
    console.log('✅ All improvements completed successfully!');
    
    // Generate final report
    const finalReport = await improvementOrchestrator.runImprovementAnalysis();
    console.log(`🎯 Final Overall Score: ${finalReport.overallScore}/100`);
    
  } catch (error) {
    console.error('❌ Improvement process failed:', error);
    throw error;
  }
}

/**
 * Run specific improvement category
 */
export async function runPerformanceImprovements(): Promise<void> {
  console.log('🚀 Running performance improvements...');
  await performanceOptimizer.initialize();
  const report = performanceOptimizer.generateReport();
  console.log(`Performance Score: ${report.score}/100`);
  console.log('Recommendations:', report.recommendations);
}

export async function runCodeQualityImprovements(): Promise<void> {
  console.log('🔧 Running code quality improvements...');
  const report = await codeQualityImprover.analyzeCodeQuality();
  console.log(`Code Quality Score: ${report.overallScore}/100`);
  console.log('Recommendations:', report.recommendations);
}

export async function runSecurityImprovements(): Promise<void> {
  console.log('🔒 Running security improvements...');
  await securityEnhancer.initialize();
  const report = securityEnhancer.generateSecurityReport();
  console.log(`Security Score: ${report.overallScore}/100`);
  console.log('Recommendations:', report.recommendations);
}

export async function runTestingImprovements(): Promise<void> {
  console.log('🧪 Running testing improvements...');
  const results = testingFramework.getResults();
  const report = testingFramework.generateReport(results);
  console.log(`Testing Score: ${report.summary.passed}/${report.summary.total} tests passed`);
  console.log(`Coverage: ${report.coverage.statements}%`);
}

export async function runDocumentationImprovements(): Promise<void> {
  console.log('📚 Running documentation improvements...');
  await documentationGenerator.generateDocumentation();
  const stats = documentationGenerator.getStatistics();
  console.log(`Documentation Coverage: ${stats.coverage}%`);
}

/**
 * Get improvement status
 */
export function getImprovementStatus(): any {
  return improvementOrchestrator.getDashboardData();
}

/**
 * Get improvement statistics
 */
export function getImprovementStatistics(): any {
  return improvementOrchestrator.getStatistics();
}

/**
 * Export improvement data
 */
export function exportImprovementData(): string {
  return improvementOrchestrator.exportData();
}

/**
 * Cleanup resources
 */
export function cleanupImprovements(): void {
  improvementOrchestrator.cleanup();
}

// Auto-run improvements if this module is imported
if (typeof window !== 'undefined') {
  // Browser environment - run improvements after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      runAllImprovements().catch(console.error);
    }, 2000); // Wait 2 seconds after page load
  });
}