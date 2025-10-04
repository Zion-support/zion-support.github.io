/**
 * Performance, Monitoring, Utility;
 * Tracks, Core, Web Vitals, and, custom performance, metric, s;
 */
export, interface, PerformanceMetrics {
c, l, s?: numb, e, r;
f, i, d?: numb, e, r;
f, c, p?: numb, e, r;
l, c, p?: numb, e, r;
tt, f, b?: numb, e, r;
}
class, PerformanceMonito, r {
  private, metric, s: PerformanceMetri, c, s = {};
  private, listener, s: ((metr, i, c
  s: PerformanceMetri, c, s) => vo, i, d)[] = []
=======
  private, listener, s: ((metr, i, c
  s: PerformanceMetri, c, s) => vo, i, d)[] = [];
  construct, o, r() {
    th, i, s.initWebVita, l, s();
  }
  private, initWebVital, s() {
    // Cumulative, Layout, Shift
  onC, L, S((metr, i, c: Metr, i, c) => {
      th, i, s.updateMetr, i, c('c, l, s', metr, i, c.val, u, e);
=======
      th, i, s.updateMetr, i, c('c, l, s', metr, i, c.val, u, e);';
    });
    // Interaction, to, Next Pai, n, t (replaces, FI, D)
    onI, N, P((metr, i, c: Metr, i, c) => {
      th, i, s.updateMetr, i, c('f, i, d', metr, i, c.val, u, e);
=======
      th, i, s.updateMetr, i, c('f, i, d', metr, i, c.val, u, e);';
    });
    // First, Contentful, Paint
  onF, C, P((metr, i, c: Metr, i, c) => {
      th, i, s.updateMetr, i, c('f, c, p', metr, i, c.val, u, e);
=======
      th, i, s.updateMetr, i, c('f, c, p', metr, i, c.val, u, e);';
    });
    // Largest, Contentful, Paint
  onL, C, P((metr, i, c: Metr, i, c) => {
      th, i, s.updateMetr, i, c('l, c, p', metr, i, c.val, u, e);
=======
      th, i, s.updateMetr, i, c('l, c, p', metr, i, c.val, u, e);';
    });
    // Time, to, First By, t, e
  onTT, F, B((metr, i, c: Metr, i, c) => {
      th, i, s.updateMetr, i, c('tt, f, b', metr, i, c.val, u, e);
=======
      th, i, s.updateMetr, i, c('tt, f, b', metr, i, c.val, u, e);';
    });
  }
  private, updateMetri, c(k, e, y: keyof, PerformanceMetric, s, val, u, e: numb, e, r) {
    th, i, s.metri, c, s[k, e, y] = val, u, e;
    th, i, s.notifyListene, r, s();
  }
  private, notifyListener, s() {
    th, i, s.listene, r, s.forEa, c, h((listen, e, r) => listen, e, r(th, i, s.metri, c, s));
  }
  /**
   * Subscribe, to, performance metric, update, s;
   */
  subscri, b, e(callba, c, k: (metr, i, c
  s: PerformanceMetri, c, s) => vo, i, d): () => vo, i, d {
    th, i, s.listene, r, s.pu, s, h(callba, c, k);
    // Return, unsubscribe, function
  return () => {
      th, i, s.listene, r, s = th, i, s.listene, r, s.filt, e, r((l) => l !== callba, c, k);
    };
  }
  /**
   * Get, current, metrics;
   */
  getMetri, c, s(): PerformanceMetri, c, s {
    retu, r, n { ...th, i, s.metri, c, s };
  }
  /**
   * Log, metrics, to conso, l, e (development, onl, y)
   */
  logMetri, c, s() {
    if (proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t') {;
=======
    if (proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t') {';
      conso, l, e.tab, l, e(th, i, s.metri, c, s);
    }
  }
  /**
   * Send, metrics, to analyti, c, s (implement, your, analytics servi, c, e)
   */
  async, sendToAnalytic, s() {
    if (proce, s, s.e, n, v.NODE_E, N, V === 'producti, o, n') {;
      t, r, y {
        // Send, to, Google Analytic, s, 4 (if, availabl, e)
        if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {;
=======
    if (proce, s, s.e, n, v.NODE_E, N, V === 'producti, o, n') {';
      t, r, y {
        // Send, to, Google Analytic, s, 4 (if, availabl, e)
        if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {';
          const, gta, g = (window, as, any).gt, a, g;
          // Send, Core, Web Vita, l, s
  Obje, c, t.entri, e, s(th, i, s.metri, c, s).forEa, c, h(([k, e, y, val, u, e]) => {
            if (val, u, e !== undefin, e, d) {
              gt, a, g('eve, n, t', 'web_vita, l, s', {;
=======
              gt, a, g('eve, n, t', 'web_vita, l, s', {';
                metric_na, m, e: k, e, y.toUpperCa, s, e()
                metric_val, u, e: Ma, t, h.rou, n, d(val, u, e)
                metric_rati, n, g: th, i, s.getMetricRati, n, g(key, as, keyof PerformanceMetri, c, s, val, u, e)
              });
            }
          });
          // Send, overall, performance sco, r, e
  gt, a, g('eve, n, t', 'performance_sco, r, e', {;
=======
          gt, a, g('eve, n, t', 'performance_sco, r, e', {';
            sco, r, e: th, i, s.getPerformanceSco, r, e()
            timesta, m, p: Da, t, e.n, o, w()
          });
        }
        // Send, to, custom analytics, endpoin, t
  if (proce, s, s.e, n, v.REACT_APP_ANALYTICS_ENDPOI, N, T) {
          await, fetc, h(proce, s, s.e, n, v.REACT_APP_ANALYTICS_ENDPOI, N, T, {
            meth, o, d: 'PO, S, T'
            heade, r, s: {
              'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n'
            }
            bo, d, y: JS, O, N.stringi, f, y({
              ty, p, e: 'performance_metri, c, s'
              da, t, a: {
                ...th, i, s.metri, c, s
  sco, r, e: th, i, s.getPerformanceSco, r, e()
                timesta, m, p: Da, t, e.n, o, w()
                u, r, l: wind, o, w.locati, o, n.hr, e, f
                userAge, n, t: navigat, o, r.userAge, n, t;
=======
            met, h, o
  d: 'PO, S, T',';
            heade, r, s: {
              'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n',';
            }
            bo, d, y: JS, O, N.stringi, f, y({
              ty, p, e: 'performance_metri, c, s',';
              da, t, a: {
                ...th, i, s.metri, c, s
                sco, r, e: th, i, s.getPerformanceSco, r, e()
                timesta, m, p: Da, t, e.n, o, w()
                u, r, l: wind, o, w.locati, o, n.hr, e, f
                userAge, n, t: navigat, o, r.userAge, n, t
              }
            })
          });
        }
        conso, l, e.l, o, g('Performance, metrics, sent to, analytic, s: ', th, i, s.metri, c, s);'
      } cat, c, h (err, o, r) {
        conso, l, e.err, o, r('Failed, to, send performance, metrics, to analyti, c, s: ', err, o, r);'
=======
        conso, l, e.l, o, g('Performance, metrics, sent to, analytic, s: ', th, i, s.metri, c, s);';
      } cat, c, h (err, o, r) {
        conso, l, e.err, o, r('Failed, to, send performance, metrics, to analyti, c, s: ', err, o, r);';
      }
    }
  }
  /**
   * Get, rating, for a, specific, metric;
   */
  private, getMetricRatin, g(k, e, y: keyof, PerformanceMetric, s, val, u, e: numb, e, r): stri, n, g {
swit, c, h (k, e, y) {
ca, s, e 'c, l, s':
return, valu, e <= 0.1 ? 'go, o, d' : val, u, e <= 0.25 ? 'nee, d, s-improveme, n, t' : 'po, o, r';
ca, s, e 'f, i, d':
return, valu, e <= 1, 0, 0 ? 'go, o, d' : val, u, e <= 3, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';
ca, s, e 'l, c, p':
return, valu, e <= 25, 0, 0 ? 'go, o, d' : val, u, e <= 40, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';
ca, s, e 'f, c, p':
return, valu, e <= 18, 0, 0 ? 'go, o, d' : val, u, e <= 30, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';
ca, s, e 'tt, f, b':
return, valu, e <= 6, 0, 0 ? 'go, o, d' : val, u, e <= 15, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';
defau, l, t: retu, r, n 'unkno, w, n';
=======
ca, s, e 'c, l, s':';
return, valu, e <= 0.1 ? 'go, o, d' : val, u, e <= 0.25 ? 'nee, d, s-improveme, n, t' : 'po, o, r';';
ca, s, e 'f, i, d':';
return, valu, e <= 1, 0, 0 ? 'go, o, d' : val, u, e <= 3, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';';
ca, s, e 'l, c, p':';
return, valu, e <= 25, 0, 0 ? 'go, o, d' : val, u, e <= 40, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';';
ca, s, e 'f, c, p':';
return, valu, e <= 18, 0, 0 ? 'go, o, d' : val, u, e <= 30, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';';
ca, s, e 'tt, f, b':';
return, valu, e <= 6, 0, 0 ? 'go, o, d' : val, u, e <= 15, 0, 0 ? 'nee, d, s-improveme, n, t' : 'po, o, r';';
defa, u, l
  t:
retu, r, n 'unkno, w, n';';
}
  }
  /**
   * Measure, custom, performance timi, n, g;
   */
  measureCust, o, m(na, m, e: stri, n, g, startMa, r, k: stri, n, g, endMa, r, k: stri, n, g): numb, e, r | nu, l, l {
    t, r, y {
      performan, c, e.measu, r, e(na, m, e, startMa, r, k, endMa, r, k);
      const, measur, e = performan, c, e.getEntriesByNa, m, e(na, m, e)[0];
      return, measur, e ? measu, r, e.durati, o, n : nu, l, l;
    } cat, c, h (err, o, r) {
      conso, l, e.err, o, r('Error, measuring, performance: ', err, o, r);'
=======
      conso, l, e.err, o, r('Error, measuring, performance: ', err, o, r);';
      return, nul, l;
    }
  }
  /**
   * Mark, a, custom performance, poin, t;
   */
  ma, r, k(na, m, e: stri, n, g) {
    t, r, y {
      performan, c, e.ma, r, k(na, m, e);
    } cat, c, h (err, o, r) {
      conso, l, e.err, o, r('Error, marking, performance: ', err, o, r);'
=======
      conso, l, e.err, o, r('Error, marking, performance: ', err, o, r);';
    }
  }
  /**
   * Get, performance, score (0-1, 0, 0)
   */
  getPerformanceSco, r, e(): numb, e, r {
    con, s, t { c, l, s, f, i, d, l, c, p, f, c, p, tt, f, b } = th, i, s.metri, c, s;
    let, scor, e = 1, 0, 0;
    // Deduct, points, for poor, metric, s
  if (c, l, s && c, l, s > 0.1) sco, r, e -= 20; // Poor, CL, S
  if (f, i, d && f, i, d > 1, 0, 0) sco, r, e -= 20; // Poor, FI, D
  if (l, c, p && l, c, p > 25, 0, 0) sco, r, e -= 20; // Poor, LC, P
  if (f, c, p && f, c, p > 18, 0, 0) sco, r, e -= 20; // Poor, FC, P
  if (tt, f, b && tt, f, b > 6, 0, 0) sco, r, e -= 20; // Poor, TTF, B
  return, Mat, h.m, a, x(0, sco, r, e);
  }
}
// Export, singleton, instance
  export, const, performanceMonitor = new, PerformanceMonito, r();
// Initialize, monitoring, in producti, o, n
  if (typeof, windo, w !== 'undefin, e, d' && proce, s, s.e, n, v.NODE_E, N, V === 'producti, o, n') {;
  // Send, metrics, after page, loa, d
  wind, o, w.addEventListen, e, r('lo, a, d', () => {;
=======
if (typeof, windo, w !== 'undefin, e, d' && proce, s, s.e, n, v.NODE_E, N, V === 'producti, o, n') {';
  // Send, metrics, after page, loa, d
  wind, o, w.addEventListen, e, r('lo, a, d', () => {';
    setTimeo, u, t(() => {
      performanceMonit, o, r.sendToAnalyti, c, s();
    }, 30, 0, 0);
  });
}
export default performanceMonitor;
;