// Performance monitoring utilities;
export const measurePerformance = (name: string, fn: () => void) => {const start = performance.now()fn()const end = performance.now()console.log(`${name} took ${end - start} milliseconds`)}export const lazyLoadComponent = (importFn: () => Promise<any>) => {return React.lazy(importFn)}// Web Vitals monitoring;
export const reportWebVitals = (metric: any) => {if (process.env.NODE_ENV === 'production') {// Send to analytics service;
    console.log('Web Vital:', metric)}
}ursor/automate-test-improve-and-merge-code-646c;
    return null;
  }try {import { PerformanceMetrics   } from '../types';export const measure_performance = (): PerformanceMetrics | null => {if () {) {$2;
}
    return null;
  }try {const navigation = performance.getEntriesByType ('navigation')[0] as PerformanceNavigationTiming;
    const paint_entries = performance.getEntriesByType ('paint')const fcp = paint_entries.find (entry => entry.name === 'first - contentful - paint')const lcp = performance.getEntriesByType ('largest - contentful - paint')[0] as PerformanceEntry;
    const cls = performance.getEntriesByType ('layout - shift').reduce ((acc, entry) => {return acc + (entry as any).value;
    }, 0)return {fcp: fcp ? fcp.startTime : undefined;
      lcp: lcp ? lcp.startTime : undefined;
      fid: fid ? fid.processingStart - fid.startTime : undefined;
      cls: cls;
      ttfb: navigation ? navigation.responseStart - navigation.requestStart : undefined;
    }const fid  = performance.getEntriesByType ('first - input')[0] as PerformanceEventTiming;return {fcp: fcp ? fcp.start_time : undefined,lcp: lcp ? lcp.start_time : undefined,fid: fid ? fid.processing_start - fid.start_time : undefined,cls: cls,ttfb: navigation ? navigation.response_start - navigation.request_start : undefined;
    }} catch (error) {console.warn ('Error measuring performance:', error)ttfb: navigation ? navigation.response_start - navigation.request_start : undefined;
    }
      ttfb: navigation ? navigation.response_start - navigation.request_start : undefined;
    }} catch (error) {console.warn ('Error measuring performance:', error)return null;
  }}export const getPerformanceScore = (metrics: PerformanceMetrics): {overall: 'good' | 'needs - improvement' | 'poor';
  scores: {}export const getPerformanceScore = (metrics: PerformanceMetrics): {}
export const getPerformanceScore  = (metrics: PerformanceMetrics): {}export const getPerformanceScore  = (metrics: PerformanceMetrics): {overall: 'good' | 'needs-improvement' | 'poor';
  scores: {fcp: 'good' | 'needs-improvement' | 'poor';

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};



origin/cursor/expand-services-advertise-and-build-project-c28b
;
export const measure_performance = (): PerformanceMetrics | null => {
  if () {) {
  $2
}
    return null;
  }
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b


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

origin/cursor/expand-services-advertise-and-build-project-c28b


    const fid = performance.getEntriesByType ('first - input')[0] as PerformanceEventTiming;
;
    return {
      fcp: fcp ? fcp.start_time : undefined,
      lcp: lcp ? lcp.start_time : undefined,
      fid: fid ? fid.processing_start - fid.start_time : undefined,
      cls: cls,
      ttfb: navigation ? navigation.response_start - navigation.request_start : undefined;
    }
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b



import { PerformanceMetrics } from '../types';
export const measurePerformance = $2;
    const paintEntries = performance.getEntriesByType($2);
    const fcp = paintEntries.find($2);
    const lcp = $2;
    const cls = performance
      .getEntriesByType('layout-shift')
      .reduce((acc, entry) => {
        return acc + (entry as any).value
      }, 0),

    const fid = $2;
    return {
      loadTim: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPain: fcp ? fcp.startTim: 0,
      largestContentfulPain: lcp ? lcp.startTim: 0,
      cumulativeLayoutShif: cls,
      firstInputDela: fid ? fid.processingStart - fid.startTim: 0}
  } catch (error) {
    console.warn($2);
    return null
  }
},

}
export const getPerformanceScore = (metrics: PerformanceMetrics): {

};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;


origin/cursor/expand-services-advertise-and-build-project-c28b

  scores: {};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;

  scores: {};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;
  overall: 'good' | 'needs-improvement' | 'poor';
  scores: {
    fcp: 'good' | 'needs-improvement' | 'poor';
    lcp: 'good' | 'needs-improvement' | 'poor';
    fid: 'good' | 'needs-improvement' | 'poor';
    cls: 'good' | 'needs-improvement' | 'poor';
    ttfb: 'good' | 'needs-improvement' | 'poor';
  }
export const getPerformanceScore = (metrics: PerformanceMetrics): {
  overall: 'good' | 'needs - improvement' | 'poor';
  scores: {
    fcp: { good: 1000, needsImprovement: 2000 }
} => {const thresholds = {export const getPerformanceScore = (metrics: PerformanceMetrics): {overall: 'good' | 'needs - improvement' | 'poor';
  scores: {export const getPerformanceScore = (metrics: PerformanceMetrics): {overall: 'good' | 'needs - improvement' | 'poor';
  scores: {fcp: { good: 1000, needsImprovement: 2000 }
    lcp: { good: 1500, needsImprovement: 3000 }
    fid: { good: 50, needsImprovement: 100 }
    cls: { good: 0.05, needsImprovement: 0.1 }
    ttfb: { good: 200, needsImprovement: 400 }
  }

origin/cursor/expand-services-advertise-and-build-project-c28b

  const getScore = (value: number | undefined, threshold: { good: number; needsImprovement: number }, reverse = false): 'good' | 'needs-improvement' | 'poor' => {if (value === undefined) return 'poor';const compareValue = reverse ? threshold.good / value : value / threshold.good;
    if (compareValue <= 1) return 'good';
    if (compareValue <= (reverse ? threshold.needsImprovement / threshold.good : threshold.needsImprovement / threshold.good)) return 'needs-improvement';
    return 'poor';}
  const scores = {}
  const scores = {fcp: getScore(metrics.fcp, thresholds.fcp)lcp: getScore(metrics.lcp, thresholds.lcp)fid: getScore(metrics.fid, thresholds.fid)cls: getScore(metrics.cls, thresholds.cls, true)ttfb: getScore(metrics.ttfb, thresholds.ttfb)}
  const poorCount = Object.values(scores).filter(score => score === 'poor').length;
  const needsImprovementCount  = Object.values(scores).filter(score => score === 'needs-improvement').length;let overall: 'good' | 'needs-improvement' | 'poor';
  if (poorCount > 0) {fcp: 'good' | 'needs - improvement' | 'poor';
} => {
  const thresholds = {
export const getPerformanceScore = (metrics: PerformanceMetrics): {
  overall: 'good' | 'needs - improvement' | 'poor';
  scores: {


    const compareValue = reverse ? threshold.good / value : value / threshold.good;
    if (compareValue <= 1) return 'good';
    if (compareValue <= (reverse ? threshold.needsImprovement / threshold.good : threshold.needsImprovement / threshold.good)) return 'needs-improvement';
    return 'poor';


origin/cursor/expand-services-advertise-and-build-project-c28b

  let overall: 'good' | 'needs-improvement' | 'poor';
export const getPerformanceScore = $2;
  score: {
    loadTim: 'good' | 'needs-improvement' | 'poor',
    firstContentfulPain: 'good' | 'needs-improvement' | 'poor',
    largestContentfulPain: 'good' | 'needs-improvement' | 'poor',
    cumulativeLayoutShif: 'good' | 'needs-improvement' | 'poor',
    firstInputDela: 'good' | 'needs-improvement' | 'poor'
  }
} => {
  const thresholds = {
    loadTim: { goo: 2000, needsImprovemen: 4000},
    firstContentfulPain: { goo: 1000, needsImprovemen: 2000},
    largestContentfulPain: { goo: 1500, needsImprovemen: 3000},
    cumulativeLayoutShif: { goo: 0.05, needsImprovemen: 0.1 },
    firstInputDela: { goo: 50, needsImprovemen: 100}
  },

  const getScore = $2;
    threshol: { goo: number, needsImprovemen: number},
    reverse = $2;
    if (compareValue <= 1) return 'good',
    if (
      compareValue <=
      (reverse
        ? threshold.needsImprovement / threshold.goo: threshold.needsImprovement / threshold.good)
    )
      return 'needs-improvement',
    return 'poor'
  },

  const scores = {
    loadTim: getScore($2);
    firstContentfulPain: getScore($2);
    largestContentfulPain: getScore($2);
    cumulativeLayoutShif: getScore($2);
    firstInputDela: getScore(
      metrics.firstInputDelay,
      thresholds.firstInputDelay
    )
  },

  const poorCount = $2;
  const needsImprovementCount = $2;
  let: overall: 'good' | 'needs-improvement' | 'poor',
  if (poorCount > 0) {
    overall = 'poor'
  } else if (needsImprovementCount > 0) {
    overall = 'needs-improvement'
  } else {
    overall = 'good'
  }







origin/cursor/expand-services-advertise-and-build-project-c28b



  return { overall, scores };
};


  return { overall, scores }
}
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {;


export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {;


origin/cursor/expand-services-advertise-and-build-project-c28b



  console.group(`🚀 ${label}`);
  if (metrics.fcp !== undefined) console.log('First Contentful Paint:', `${metrics.fcp.toFixed(2)}ms`);
  if (metrics.lcp !== undefined) console.log('Largest Contentful Paint:', `${metrics.lcp.toFixed(2)}ms`);
  if (metrics.fid !== undefined) console.log('First Input Delay:', `${metrics.fid.toFixed(2)}ms`);
  if (metrics.cls !== undefined) console.log('Cumulative Layout Shift:', metrics.cls.toFixed(4));
  if (metrics.ttfb !== undefined) console.log('Time to First Byte:', `${metrics.ttfb.toFixed(2)}ms`);
  console.groupEnd();
  return { overall, scores }
},

export const logPerformanceMetrics = $2;
  label = 'Performance Metrics'
) => {
  console.group($2);
  console.log('Load: Time: ', `${metrics.loadTime.toFixed(2)}ms`),
  console.log(
    'First Contentful: Paint: ',
    `${metrics.firstContentfulPaint.toFixed(2)}ms`
  ),
  console.log(
    'Largest Contentful: Paint: ',
    `${metrics.largestContentfulPaint.toFixed(2)}ms`
  ),
  console.log(
    'Cumulative Layout: Shift: ',
    metrics.cumulativeLayoutShift.toFixed(4)
  ),
  console.log('First Input: Delay: ', `${metrics.firstInputDelay.toFixed(2)}ms`),
  console.groupEnd()
},






origin/cursor/automate-test-improve-and-merge-code-382a
};
};
origin/cursor/expand-services-advertise-and-build-project-c28b

};



};


};
  return { overall, scores }
}
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {return { overall, scores }
}
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {export const logPerformanceMetrics  = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {console.group(`🚀 ${label}`)if (metrics.fcp !== undefined) console.log('First Contentful Paint:', `${metrics.fcp.toFixed(2)}ms`)if (metrics.lcp !== undefined) console.log('Largest Contentful Paint:', `${metrics.lcp.toFixed(2)}ms`)if (metrics.fid !== undefined) console.log('First Input Delay:', `${metrics.fid.toFixed(2)}ms`)if (metrics.cls !== undefined) console.log('Cumulative Layout Shift:', metrics.cls.toFixed(4))if (metrics.ttfb !== undefined) console.log('Time to First Byte:', `${metrics.ttfb.toFixed(2)}ms`)console.groupEnd()import { PerformanceMetrics } from '../types'; export const measurePerformance = (): PerformanceMetrics | null = > { if (typeof window = = = 'undefined' || !('performance' in window)) { return null} try { const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; const paintEntries = performance && performance.getEntriesByType('paint')const fcp = paintEntries && paintEntries.find(entry = > entry && entry.name = = = 'first-contentful-paint')const lcp = performance && performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry; const cls = performance && performance.getEntriesByType('layout-shift').reduce((acc, entry) = > { return acc + (entry as any).value}, 0)const fid = performance && performance.getEntriesByType('first-input')[0] as PerformanceEventTiming; return { loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart firstContentfulPaint: fcp ? fcp && fcp.startTime: 0 largestContentfulPaint: lcp ? lcp && lcp.startTime: 0 cumulativeLayoutShift: cls firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime: 0 }} catch (error) { console && console.warn('Error measuring performance: ', error)return null}
}export const getPerformanceScore = (metrics: PerformanceMetrics): { overall: 'good' | 'needs-improvement' | 'poor', scores: { loadTime: 'good' | 'needs-improvement' | 'poor', firstContentfulPaint: 'good' | 'needs-improvement' | 'poor', largestContentfulPaint: 'good' | 'needs-improvement' | 'poor', cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor',firstInputDelay: 'good' | 'needs-improvement' | 'poor'}} = > { const thresholds = { loadTime: { good: 2000, needsImprovement: 4000 } firstContentfulPaint: { good: 1000, needsImprovement: 2000 } largestContentfulPaint: { good: 1500, needsImprovement: 3000 } cumulativeLayoutShift: { good: 0 && 0.05, needsImprovement: 0 && 0.1 } firstInputDelay: { good: 50, needsImprovement: 100 } }const getScore = (value: number, threshold: { good: number,needsImprovement: number }, reverse = false) = > { const compareValue = reverse ? threshold && threshold.good / value: value / threshold && threshold.good, if (compareValue < = 1) return 'good', if (compareValue < = (reverse ? threshold && threshold.needsImprovement / threshold && threshold.good: threshold && threshold.needsImprovement / threshold && threshold.good)) return 'needs-improvement'; return 'poor'}const scores = { loadTime: getScore(metrics && metrics.loadTime, thresholds && thresholds.loadTime) firstContentfulPaint: getScore(metrics && metrics.firstContentfulPaint, thresholds && thresholds.firstContentfulPaint) largestContentfulPaint: getScore(metrics && metrics.largestContentfulPaint, thresholds && thresholds.largestContentfulPaint) cumulativeLayoutShift: getScore(metrics && metrics.cumulativeLayoutShift, thresholds && thresholds.cumulativeLayoutShift, true) firstInputDelay: getScore(metrics && metrics.firstInputDelay, thresholds && thresholds.firstInputDelay) }const poorCount = Object && Object.values(scores).filter(score = > score = = = 'poor').length; const needsImprovementCount = Object && Object.values(scores).filter(score = > score = = = 'needs-improvement').length; let overall: 'good' | 'needs-improvement' | 'poor'; if (poorCount > 0) { overall = 'poor'} else if (needsImprovementCount > 0) { overall = 'needs-improvement'} else { overall = 'good'} return { overall, scores }}export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') = > { console && console.group(`🚀 ${label}`)console && console.log('Load Time: ', `${metrics && metrics.loadTime.toFixed(2)}ms`)console && console.log('First Contentful Paint: ', `${metrics && metrics.firstContentfulPaint.toFixed(2)}ms`)console && console.log('Largest Contentful Paint: ', `${metrics && metrics.largestContentfulPaint.toFixed(2)}ms`)console && console.log('Cumulative Layout Shift: ', metrics && metrics.cumulativeLayoutShift.toFixed(4))console && console.log('First Input Delay: ', `${metrics && metrics.firstInputDelay.toFixed(2)}ms`)console && console.groupEnd()}}}return { overall, scores }
}
}export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') =>: any {console.group (`🚀 ${label}`)if (console.log ('First Contentful Paint:', `${metrics.fcp.to_fixed (2)}ms`)) {$2;
}
  if (console.log ('Largest Contentful Paint:', `${metrics.lcp.to_fixed (2)}ms`)) {$2;
}
  if (console.log ('First Input Delay:', `${metrics.fid.to_fixed (2)}ms`)) {$2;
}
  if (console.log ('Cumulative Layout Shift:', metrics.cls.to_fixed (4))) {$2;
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b
  if (console.log ('Time to First Byte:', `${metrics.ttfb.to_fixed (2)}ms`)) {$2;
}
  console.group_end ()}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/fix-netlify-build-and-merge-to-main-9571;
// Performance monitoring utilities;
export const measurePerformance = (name: string, fn: () => void) => {const start = performance.now()fn()const end = performance.now()console.log(`${name} took ${end - start} milliseconds`)}ursor/automate-test-improve-and-merge-code-646c;
export const lazyLoadComponent = (importFn: () => Promise<any>) => {return React.lazy(importFn)}// Web Vitals monitoring;
export const reportWebVitals = (metric: any) => {if (process.env.NODE_ENV === 'production') {// Send to analytics service;
    console.log('Web Vital:', metric)}
}ursor/automate-test-improve-and-merge-code-646c;
import { PerformanceMetrics } from '../types'; export const measurePerformance = (): PerformanceMetrics | null = > { if (typeof window = = = 'undefined' || !('performance' in window)) { return null} try { const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; const paintEntries = performance.getEntriesByType('paint')const fcp = paintEntries.find(entry = > entry.name = = = 'first-contentful-paint')const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry; const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) = > { return acc + (entry as any).value}, 0)const fid = performance.getEntriesByType('first-input')[0] as PerformanceEventTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart firstContentfulPaint: fcp ? fcp.startTime: 0 largestContentfulPaint: lcp ? lcp.startTime: 0 cumulativeLayoutShift: cls firstInputDelay: fid ? fid.processingStart - fid.startTime: 0 }} catch (error) { console.warn('Error measuring performance: ', error)return null}
}export const getPerformanceScore = (metrics: PerformanceMetrics): { overall: 'good' | 'needs-improvement' | 'poor', scores: { loadTime: 'good' | 'needs-improvement' | 'poor', firstContentfulPaint: 'good' | 'needs-improvement' | 'poor', largestContentfulPaint: 'good' | 'needs-improvement' | 'poor', cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor',firstInputDelay: 'good' | 'needs-improvement' | 'poor'}} = > { const thresholds = { loadTime: { good: 2000, needsImprovement: 4000 } firstContentfulPaint: { good: 1000, needsImprovement: 2000 } largestContentfulPaint: { good: 1500, needsImprovement: 3000 } cumulativeLayoutShift: { good: 0.05, needsImprovement: 0.1 } firstInputDelay: { good: 50, needsImprovement: 100 } }const getScore = (value: number, threshold: { good: number,needsImprovement: number }, reverse = false) = > { const compareValue = reverse ? threshold.good / value: value / threshold.good, if (compareValue < = 1) return 'good', if (compareValue < = (reverse ? threshold.needsImprovement / threshold.good: threshold.needsImprovement / threshold.good)) return 'needs-improvement'; return 'poor'}const scores = { loadTime: getScore(metrics.loadTime, thresholds.loadTime) firstContentfulPaint: getScore(metrics.firstContentfulPaint, thresholds.firstContentfulPaint) largestContentfulPaint: getScore(metrics.largestContentfulPaint, thresholds.largestContentfulPaint) cumulativeLayoutShift: getScore(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift, true) firstInputDelay: getScore(metrics.firstInputDelay, thresholds.firstInputDelay) }const poorCount = Object.values(scores).filter(score = > score = = = 'poor').length; const needsImprovementCount = Object.values(scores).filter(score = > score = = = 'needs-improvement').length; let overall: 'good' | 'needs-improvement' | 'poor'; if (poorCount > 0) { overall = 'poor'} else if (needsImprovementCount > 0) { overall = 'needs-improvement'} else { overall = 'good'} return { overall, scores }}export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') = > { console.group(`🚀 ${label}`)console.log('Load Time: ', `${metrics.loadTime.toFixed(2)}ms`)console.log('First Contentful Paint: ', `${metrics.firstContentfulPaint.toFixed(2)}ms`)console.log('Largest Contentful Paint: ', `${metrics.largestContentfulPaint.toFixed(2)}ms`)console.log('Cumulative Layout Shift: ', metrics.cumulativeLayoutShift.toFixed(4))console.log('First Input Delay: ', `${metrics.firstInputDelay.toFixed(2)}ms`)console.groupEnd()}




// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const lazyLoadComponent = (importFn: () => Promise<any>) => {
  return React.lazy(importFn);
};

// Web Vitals monitoring
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log('Web Vital:', metric);
  }
};
main






import { PerformanceMetrics } from '../types'; export const measurePerformance = (): PerformanceMetrics | null = > { if (typeof window = = = 'undefined' || !('performance' in window)) { return null} try { const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; const paintEntries = performance.getEntriesByType('paint'); const fcp = paintEntries.find(entry = > entry.name = = = 'first-contentful-paint'); const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry; const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) = > { return acc + (entry as any).value}, 0); const fid = performance.getEntriesByType('first-input')[0] as PerformanceEventTiming; return { loadTime: navigation.loadEventEnd - navigation.loadEventStart firstContentfulPaint: fcp ? fcp.startTime: 0 largestContentfulPaint: lcp ? lcp.startTime: 0 cumulativeLayoutShift: cls firstInputDelay: fid ? fid.processingStart - fid.startTime: 0 }} catch (error) { console.warn('Error measuring performance: ', error); return null}
}; export const getPerformanceScore = (metrics: PerformanceMetrics): { overall: 'good' | 'needs-improvement' | 'poor', scores: { loadTime: 'good' | 'needs-improvement' | 'poor', firstContentfulPaint: 'good' | 'needs-improvement' | 'poor', largestContentfulPaint: 'good' | 'needs-improvement' | 'poor', cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor',
    firstInputDelay: 'good' | 'needs-improvement' | 'poor'}} = > { const thresholds = { loadTime: { good: 2000, needsImprovement: 4000 } firstContentfulPaint: { good: 1000, needsImprovement: 2000 } largestContentfulPaint: { good: 1500, needsImprovement: 3000 } cumulativeLayoutShift: { good: 0.05, needsImprovement: 0.1 } firstInputDelay: { good: 50, needsImprovement: 100 } }; const getScore = (value: number, threshold: { good: number,
    needsImprovement: number }, reverse = false) = > { const compareValue = reverse ? threshold.good / value: value / threshold.good, if (compareValue < = 1) return 'good', if (compareValue < = (reverse ? threshold.needsImprovement / threshold.good: threshold.needsImprovement / threshold.good)) return 'needs-improvement'; return 'poor'}; const scores = { loadTime: getScore(metrics.loadTime, thresholds.loadTime) firstContentfulPaint: getScore(metrics.firstContentfulPaint, thresholds.firstContentfulPaint) largestContentfulPaint: getScore(metrics.largestContentfulPaint, thresholds.largestContentfulPaint) cumulativeLayoutShift: getScore(metrics.cumulativeLayoutShift, thresholds.cumulativeLayoutShift, true) firstInputDelay: getScore(metrics.firstInputDelay, thresholds.firstInputDelay) }; const poorCount = Object.values(scores).filter(score = > score = = = 'poor').length; const needsImprovementCount = Object.values(scores).filter(score = > score = = = 'needs-improvement').length; let overall: 'good' | 'needs-improvement' | 'poor'; if (poorCount > 0) { overall = 'poor'} else if (needsImprovementCount > 0) { overall = 'needs-improvement'} else { overall = 'good'} return { overall, scores }}; export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') = > { console.group(`🚀 ${label}`); console.log('Load Time: ', `${metrics.loadTime.toFixed(2)}ms`); console.log('First Contentful Paint: ', `${metrics.firstContentfulPaint.toFixed(2)}ms`); console.log('Largest Contentful Paint: ', `${metrics.largestContentfulPaint.toFixed(2)}ms`); console.log('Cumulative Layout Shift: ', metrics.cumulativeLayoutShift.toFixed(4)); console.log('First Input Delay: ', `${metrics.firstInputDelay.toFixed(2)}ms`); console.groupEnd()};
origin/cursor/automate-test-improve-and-merge-code-2533

