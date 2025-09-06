import { PerformanceMetrics } from '../types';
export const measurePerformance = (): PerformanceMetrics | null => {
  if (typeof window === 'undefined' |!('performance' in window)) {
  if (typeof window === 'undefined' || !('performance' in window)) {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
export const getPerformanceScore = (metrics: PerformanceMetrics): {
};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
  return { overall, scores }
}
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {

  return { overall, scores };
};

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  console.group(`🚀 ${label}`);
  if (metrics.fcp !== undefined) console.log('First Contentful Paint:', `${metrics.fcp.toFixed(2)}ms`);
  if (metrics.lcp !== undefined) console.log('Largest Contentful Paint:', `${metrics.lcp.toFixed(2)}ms`);
  if (metrics.fid !== undefined) console.log('First Input Delay:', `${metrics.fid.toFixed(2)}ms`);
  if (metrics.cls !== undefined) console.log('Cumulative Layout Shift:', metrics.cls.toFixed(4));
  if (metrics.ttfb !== undefined) console.log('Time to First Byte:', `${metrics.ttfb.toFixed(2)}ms`);
  console.groupEnd();
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
};
=======
  return { overall, scores }
}

};

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
