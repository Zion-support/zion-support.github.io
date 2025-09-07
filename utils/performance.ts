// Performance utilities
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const getPerformanceScore = (value: number, threshold: { good: number; needsImprovement: number }, reverse = false): 'good' | 'needs-improvement' | 'poor' => {
  const compareValue = reverse ? threshold.good / value : value / threshold.good;
  if (compareValue <= 1) return 'good';
  if (compareValue <= (reverse ? threshold.needsImprovement / threshold.good : threshold.needsImprovement / threshold.good)) return 'needs-improvement';
  return 'poor';
};

export const calculatePerformanceScores = (metrics: PerformanceMetrics, thresholds: any) => {
  const scores = {
    loadTime: getPerformanceScore(metrics.loadTime, thresholds.loadTime),
    firstContentfulPaint: getPerformanceScore(metrics.firstContentfulPaint, thresholds.firstContentfulPaint),
    largestContentfulPaint: getPerformanceScore(metrics.largestContentfulPaint, thresholds.largestContentfulPaint),
    cumulativeLayoutShift: getPerformanceScore(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift, true),
    firstInputDelay: getPerformanceScore(metrics.firstInputDelay, thresholds.firstInputDelay)
  };
  
  const poorCount = Object.values(scores).filter(score => score === 'poor').length;
  const needsImprovementCount = Object.values(scores).filter(score => score === 'needs-improvement').length;
  
  let overall: 'good' | 'needs-improvement' | 'poor';
  if (poorCount > 0) {
    overall = 'poor';
  } else if (needsImprovementCount > 0) {
    overall = 'needs-improvement';
  } else {
    overall = 'good';
  }
  
  return { overall, scores };
};

export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {
  console.group(`🚀 ${label}`);
  console.log('Load Time: ', `${metrics.loadTime.toFixed(2)}ms`);
  console.log('First Contentful Paint: ', `${metrics.firstContentfulPaint.toFixed(2)}ms`);
  console.log('Largest Contentful Paint: ', `${metrics.largestContentfulPaint.toFixed(2)}ms`);
  console.log('Cumulative Layout Shift: ', metrics.cumulativeLayoutShift.toFixed(4));
  console.log('First Input Delay: ', `${metrics.firstInputDelay.toFixed(2)}ms`);
  console.groupEnd();
};