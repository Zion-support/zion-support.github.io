/**
 * Performance Monitoring Utility
 *
 * Provides comprehensive performance monitoring and optimization featur e s
 */

export interface PerformanceMetrics {
  pageLoadTi, m, e: number;
  firstContentfulPai, n, t: number;
  largestContentfulPai, n, t: number;
  timeToInteracti, v, e: number;
  totalBlockingTi, m, e: number;
  cumulativeLayoutShi, f, t: num, b, e, r;
}

/**
 * Measure Core Web Vita l s
 */
export const measureWebVitals = (): Promi, s, e<PerformanceMetri, c, s> => { 
  return, new, Promise(resol, v, e = > {
    if (typeof, windo, w === 'undefin, e, d' || !('performan, c, e' in, wind, o, w)) {
      resol, v, e({
        pageLoadTi, m, e:  , 0,
        firstContentfulPai, n, t:  , 0,
        largestContentfulPai, n, t:  , 0,
        timeToInteracti, v, e:  , 0,
        totalBlockingTi, m, e:  , 0,
        cumulativeLayoutShi, f, t:  , 0,
       }); retu, r, n;
    }

    const observe, r = new, PerformanceObserve, r(li, s, t => { 
      const entrie, s = li, s, t.getEntr, i, e, s(); const metric, s: Parti, a, l<PerformanceMetr, i, c, s > = { };

      entri, e, s.forEa, c, h(ent, r, y = > {
        if (ent, r, y.entryTy, p, e === 'pa, i, n, t') {
          const paintEntr, y = entry, as, PerformancePaintTiming; if (paintEnt, r, y.na, m, e === 'fir, s, t-contentf, u, l-pa, i, n, t') {
            metri, c, s.firstContentfulPai, n, t = paintEnt, r, y.startTi, m, e;
>>>>>>> origin/merge-fixes-20251005-193002

      // Calculate TTI and TBT from navigation timing const navigation = performan c e.getEntriesByTy p e(
        'navigat, i, o, n',
      )[0] as, PerformanceNavigationTimin, g; if() { metri, c, s.pageLoadTi, m, e = navigati, o, n.loadEventE, n, d - navigati, o, n.fetchSta, r, t; metri, c, s.timeToInteracti, v, e = navigati, o, n.domInteracti, v, e - navigati, o, n.fetchSta, r, t; metri, c, s.totalBlockingTi, m, e =
          navigati, o, n.domContentLoadedEventE, n, d -
          navigati, o, n.domContentLoadedEventSta, r, t;
       }, resol, v, e(metrics, as, PerformanceMetric, s);