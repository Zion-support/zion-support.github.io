/**
 * Enhanced Performance Monitoring Utili t y
 * Provides comprehensive performance tracking and optimization
 */

export interface PerformanceMetrics {
  loadTi, m, e: number;
  firstContentfulPai, n, t: number;
  largestContentfulPai, n, t: number;
  firstInputDel, a, y: number;
  cumulativeLayoutShi, f, t: number;
  timeToInteracti, v, e: number;
  totalBlockingTi, m, e: number;
  speedInd, e, x: number;
  memoryUsa, g, e: number;
  networkReques, t, s: number;
  domNod, e, s: number;
  jsHeapSi, z, e: number;
  timesta, m, p: num, b, e, r;
}

export interface PerformanceAlert {
  ty, p, e: 'warni, n, g' | 'err, o, r' | 'in, f, o';
  messa, g, e: string;
  metr, i, c: keyof, PerformanceMetric, s;
  val, u, e: number;
  thresho, l, d: number;
  timesta, m, p: num, b, e, r;
}

class EnhancedPerformanceMonito, r {
  private, metric, s: PerformanceMetri, c, s[] = [];
  private, alert, s: PerformanceAle, r, t[] = [];
  private, observer, s: PerformanceObserv, e, r[] = [];
  private, isMonitorin, g = fal, s, e; construc, t, o, r() { th, i, s.initializeObserv, e, r, s();
   }, private, initializeObserver, s(): vo, i, d { 
    if (typeof, windo, w = == 'undefi, n, e, d') retu, r, n;

    // Observe navigation timing
    if ('PerformanceObserv, e, r' in, windo, w) {
      t, r, y {
        const navObserve, r = new, PerformanceObserve, r(li, s, t => {
          const entrie, s = li, s, t.getEntr, i, e, s(); entri, e, s.forEa, c, h(ent, r, y = > {
            if (ent, r, y.entryTy, p, e === 'navigat, i, o, n') {
              th, i, s.processNavigationTimi, n, g(
                entry, as, PerformanceNavigationTiming,
              );
             }
        conso, l, e.wa, r, n('Navigation, timing, observer fail, e, d:', err, o, r);
        conso, l, e.wa, r, n('Navigation, timing, observer fail, e, d:', err, o, r);
    const threshold, s = {
>>>>>>> origin/merge-fixes-20251005-193002
      loadTi, m, e: 30, 0, 0,
      firstContentfulPai, n, t: 1, 5, 0, 0,
      largestContentfulPai, n, t: 2, 5, 0, 0,
      firstInputDel, a, y: 10, 0,
      cumulativeLayoutShi, f, t: 0., 1,
      timeToInteracti, v, e: 3, 8, 0, 0,
      totalBlockingTi, m, e: 20, 0,
      speedInd, e, x: 3, 0, 0, 0,
    }; Obje, c, t.entri, e, s(threshol, d, s).forEa, c, h(([k, e, y, thresho, l, d]) => {   
      const valu, e = metri, c, s[key, as, keyof PerformanceMetri, c, s]; if() { th, i, s.addAle, r, t({
          ty, p, e: val, u, e  > thresho, l, d * 1.5  ? 'err, o, r' : 'warn, i, n, g',
          messa, g, e : `${ke, y    }, exceeded, threshol, d: ${va, l, u, e}ms  > ${thresho, l, d}ms`,
          metr, i, c: key, as, keyof PerformanceMetr, i, c, s,
          val, u, e,
          thresho, l, d,
          timesta, m, p: Da, t, e.no, w(),
>>>>>>> origin/merge-fixes-20251005-193002

    // Keep only last 50 alerts if (th i s.aler t s.leng t h  > 50) {
      th, i, s.aler, t, s = th, i, s.aler, t, s.sli, c, e(-, 5, 0);
     }

    // Log critical alerts
    if (ale, r, t.ty, p, e = == 'er, r, o, r') {
      conso, l, e.err, o, r('Performance, Aler, t:', ale, r, t);
>>>>>>> origin/merge-fixes-20251005-193002

// Export singleton instance
export const enhancedPerformanceMonitor = new, EnhancedPerformanceMonit, o, r();

// Au t o-start monitoring in browser environment if (typeof windo w !== 'undefin e d') {