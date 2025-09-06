

=======
;
export const measure_performance = (): PerformanceMetrics | null => {
  if () {) {
  $2
}
    return null;
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;
    const paint_entries = performance.getEntriesByType ('paint');
    const fcp = paint_entries.find (entry => entry.name === 'first - contentful - paint');
    const lcp = performance.getEntriesByType ('largest - contentful - paint')[0] as PerformanceEntry;
    const cls = performance.getEntriesByType ('layout - shift').reduce ((acc, entry) => {
      return acc + (entry as any).value;
    }, 0);

    return {
      fcp: fcp ? fcp.startTime : undefined
      lcp: lcp ? lcp.startTime : undefined
      fid: fid ? fid.processingStart - fid.startTime : undefined
      cls: cls
      ttfb: navigation ? navigation.responseStart - navigation.requestStart : undefined
    }

=======
    const fid = performance.getEntriesByType ('first - input')[0] as PerformanceEventTiming;
;
    return {
      fcp: fcp ? fcp.start_time : undefined,
      lcp: lcp ? lcp.start_time : undefined,
      fid: fid ? fid.processing_start - fid.start_time : undefined,
      cls: cls,
      ttfb: navigation ? navigation.response_start - navigation.request_start : undefined;
    }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (error) {
    console.warn('Error measuring performance:', error);
    return null;
  }

}
;

export const getPerformanceScore = (metrics: PerformanceMetrics): {
  overall: 'good' | 'needs - improvement' | 'poor';
  scores: {

}
export const getPerformanceScore = (metrics: PerformanceMetrics): {
=======

};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;


  overall: 'good' | 'needs-improvement' | 'poor';
  scores: {
    fcp: 'good' | 'needs-improvement' | 'poor';
    lcp: 'good' | 'needs-improvement' | 'poor';
    fid: 'good' | 'needs-improvement' | 'poor';
    cls: 'good' | 'needs-improvement' | 'poor';
    ttfb: 'good' | 'needs-improvement' | 'poor';
  }
} => {
  const thresholds = {
    fcp: { good: 1000, needsImprovement: 2000 }
    lcp: { good: 1500, needsImprovement: 3000 }
    fid: { good: 50, needsImprovement: 100 }
    cls: { good: 0.05, needsImprovement: 0.1 }
    ttfb: { good: 200, needsImprovement: 400 }
  }
  const getScore = (value: number | undefined, threshold: { good: number; needsImprovement: number }, reverse = false): 'good' | 'needs-improvement' | 'poor' => {
    if (value === undefined) return 'poor';
    const compareValue = reverse ? threshold.good / value : value / threshold.good;
    if (compareValue <= 1) return 'good';
    if (compareValue <= (reverse ? threshold.needsImprovement / threshold.good : threshold.needsImprovement / threshold.good)) return 'needs-improvement';
    return 'poor';

  }
  const scores = {
    fcp: getScore(metrics.fcp, thresholds.fcp)
    lcp: getScore(metrics.lcp, thresholds.lcp)
    fid: getScore(metrics.fid, thresholds.fid)
    cls: getScore(metrics.cls, thresholds.cls, true)
    ttfb: getScore(metrics.ttfb, thresholds.ttfb)
  }
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


  return { overall, scores }
}
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {
=======
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {;


  console.group(`🚀 ${label}`);
  if (metrics.fcp !== undefined) console.log('First Contentful Paint:', `${metrics.fcp.toFixed(2)}ms`);
  if (metrics.lcp !== undefined) console.log('Largest Contentful Paint:', `${metrics.lcp.toFixed(2)}ms`);
  if (metrics.fid !== undefined) console.log('First Input Delay:', `${metrics.fid.toFixed(2)}ms`);
  if (metrics.cls !== undefined) console.log('Cumulative Layout Shift:', metrics.cls.toFixed(4));
  if (metrics.ttfb !== undefined) console.log('Time to First Byte:', `${metrics.ttfb.toFixed(2)}ms`);
  console.groupEnd();


import { PerformanceMetrics } from '../types'; export const measurePerformance = (): PerformanceMetrics | null = > { if (typeof window = = = 'undefined' || !('performance' in window)) { return null} try { const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; const paintEntries = performance && performance.getEntriesByType('paint'); const fcp = paintEntries && paintEntries.find(entry = > entry && entry.name = = = 'first-contentful-paint'); const lcp = performance && performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry; const cls = performance && performance.getEntriesByType('layout-shift').reduce((acc, entry) = > { return acc + (entry as any).value}, 0); const fid = performance && performance.getEntriesByType('first-input')[0] as PerformanceEventTiming; return { loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart firstContentfulPaint: fcp ? fcp && fcp.startTime: 0 largestContentfulPaint: lcp ? lcp && lcp.startTime: 0 cumulativeLayoutShift: cls firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime: 0 }} catch (error) { console && console.warn('Error measuring performance: ', error); return null}
}; export const getPerformanceScore = (metrics: PerformanceMetrics): { overall: 'good' | 'needs-improvement' | 'poor', scores: { loadTime: 'good' | 'needs-improvement' | 'poor', firstContentfulPaint: 'good' | 'needs-improvement' | 'poor', largestContentfulPaint: 'good' | 'needs-improvement' | 'poor', cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor',
    firstInputDelay: 'good' | 'needs-improvement' | 'poor'}} = > { const thresholds = { loadTime: { good: 2000, needsImprovement: 4000 } firstContentfulPaint: { good: 1000, needsImprovement: 2000 } largestContentfulPaint: { good: 1500, needsImprovement: 3000 } cumulativeLayoutShift: { good: 0 && 0.05, needsImprovement: 0 && 0.1 } firstInputDelay: { good: 50, needsImprovement: 100 } }; const getScore = (value: number, threshold: { good: number,
    needsImprovement: number }, reverse = false) = > { const compareValue = reverse ? threshold && threshold.good / value: value / threshold && threshold.good, if (compareValue < = 1) return 'good', if (compareValue < = (reverse ? threshold && threshold.needsImprovement / threshold && threshold.good: threshold && threshold.needsImprovement / threshold && threshold.good)) return 'needs-improvement'; return 'poor'}; const scores = { loadTime: getScore(metrics && metrics.loadTime, thresholds && thresholds.loadTime) firstContentfulPaint: getScore(metrics && metrics.firstContentfulPaint, thresholds && thresholds.firstContentfulPaint) largestContentfulPaint: getScore(metrics && metrics.largestContentfulPaint, thresholds && thresholds.largestContentfulPaint) cumulativeLayoutShift: getScore(metrics && metrics.cumulativeLayoutShift, thresholds && thresholds.cumulativeLayoutShift, true) firstInputDelay: getScore(metrics && metrics.firstInputDelay, thresholds && thresholds.firstInputDelay) }; const poorCount = Object && Object.values(scores).filter(score = > score = = = 'poor').length; const needsImprovementCount = Object && Object.values(scores).filter(score = > score = = = 'needs-improvement').length; let overall: 'good' | 'needs-improvement' | 'poor'; if (poorCount > 0) { overall = 'poor'} else if (needsImprovementCount > 0) { overall = 'needs-improvement'} else { overall = 'good'} return { overall, scores }}; export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') = > { console && console.group(`🚀 ${label}`); console && console.log('Load Time: ', `${metrics && metrics.loadTime.toFixed(2)}ms`); console && console.log('First Contentful Paint: ', `${metrics && metrics.firstContentfulPaint.toFixed(2)}ms`); console && console.log('Largest Contentful Paint: ', `${metrics && metrics.largestContentfulPaint.toFixed(2)}ms`); console && console.log('Cumulative Layout Shift: ', metrics && metrics.cumulativeLayoutShift.toFixed(4)); console && console.log('First Input Delay: ', `${metrics && metrics.firstInputDelay.toFixed(2)}ms`); console && console.groupEnd()};





=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
};
=======
  return { overall, scores }
}
;
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') =>: any {
  console.group (`🚀 ${label}`);
  if (console.log ('First Contentful Paint:', `${metrics.fcp.to_fixed (2)}ms`)) {
  $2
}
  if (console.log ('Largest Contentful Paint:', `${metrics.lcp.to_fixed (2)}ms`)) {
  $2
}
  if (console.log ('First Input Delay:', `${metrics.fid.to_fixed (2)}ms`)) {
  $2
}
  if (console.log ('Cumulative Layout Shift:', metrics.cls.to_fixed (4))) {
  $2
}
  if (console.log ('Time to First Byte:', `${metrics.ttfb.to_fixed (2)}ms`)) {
  $2
}
  console.group_end ();
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
