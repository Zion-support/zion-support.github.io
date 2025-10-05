/**
 * Enhanced, Performance, Monitoring Utili, t, y;
 * Tracks, Core, Web Vitals, and, custom metri, c, s;
 */
interface, PerformanceMetri, c {
na, m, e: stri, n, g;
val, u, e: numb, e, r;
rati, n, g: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r';
timest, a, m
  p: numb, e, r;
}
class, EnhancedPerformanceMonito, r {
private, metric, s: PerformanceMetr, i, c[] = [];
private, observe, r
  s: PerformanceObserv, e, r[] = [];
/**
* Initialize, performance, monitoring;
*/
initiali, z, e(): vo, i, d {
if (typeof, windo, w === 'undefin, e, d') retu, r, n;
initiali, z, e(): vo, i, d {
if (typeof, windo, w === 'undefin, e, d') retu, r, n;';
th, i, s.observeWebVita, l, s();
th, i, s.observeLongTas, k, s();
th, i, s.observeLayoutShif, t, s();
}
  /**
   * Observe, Core, Web Vita, l, s (L, C, P, F, I, D, C, L, S)
   */
  private, observeWebVital, s(): vo, i, d {
    // Largest, Contentful, Paint (L, C, P)
    t, r, y {
      const, lcpObserve, r = new, PerformanceObserve, r((li, s, t) => {
        const, entrie, s = li, s, t.getEntri, e, s();
        const, lastEntr, y = entri, e, s[entri, e, s.leng, t, h - 1] as, PerformanceEntr, y & { renderTi, m, e?: numb, e, r; loadTi, m, e?: numb, e, r };
        const, lc, p = lastEnt, r, y.renderTi, m, e || lastEnt, r, y.loadTi, m, e || 0;
        th, i, s.recordMetr, i, c('L, C, P', l, c, p, th, i, s.getRati, n, g('l, c, p', l, c, p));';
      });
      lcpObserv, e, r.obser, v, e({ entryTyp, e, s: ['large, s, t-contentf, u, l-pai, n, t'] });';
      th, i, s.observe, r, s.pu, s, h(lcpObserv, e, r);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('LCP, observation, not support, e, d', e);';
    }
    // First, Input, Delay (F, I, D)
    t, r, y {
      const, fidObserve, r = new, PerformanceObserve, r((li, s, t) => {
        const, entrie, s = li, s, t.getEntri, e, s();
        entri, e, s.forEa, c, h((ent, r, y) => {
          const, fi, d = (entry, as, PerformanceEventTiming).processingSta, r, t - ent, r, y.startTi, m, e;
          th, i, s.recordMetr, i, c('F, I, D', f, i, d, th, i, s.getRati, n, g('f, i, d', f, i, d));';
        });
      });
      fidObserv, e, r.obser, v, e({ entryTyp, e, s: ['fir, s, t-inp, u, t'] });';
      th, i, s.observe, r, s.pu, s, h(fidObserv, e, r);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('FID, observation, not support, e, d', e);';
    }
    // Cumulative, Layout, Shift (C, L, S)
    t, r, y {
      let, clsValu, e = 0;
      const, clsObserve, r = new, PerformanceObserve, r((li, s, t) => {
        const, entrie, s = li, s, t.getEntri, e, s();
        entri, e, s.forEa, c, h((ent, r, y) => {
          if (!(entry, as, LayoutShift).hadRecentInp, u, t) {
            clsVal, u, e += (entry, as, LayoutShift).val, u, e;
          }
        });
        th, i, s.recordMetr, i, c('C, L, S', clsVal, u, e, th, i, s.getRati, n, g('c, l, s', clsVal, u, e));';
      });
      clsObserv, e, r.obser, v, e({ entryTyp, e, s: ['layo, u, t-shi, f, t'] });';
      th, i, s.observe, r, s.pu, s, h(clsObserv, e, r);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('CLS, observation, not support, e, d', e);';
    }
  }
  /**
   * Observe, long, tasks (>50, m, s)
   */
  private, observeLongTask, s(): vo, i, d {
    if (!('PerformanceObserv, e, r' in, windo, w)) retu, r, n;
    if (!('PerformanceObserv, e, r' in, windo, w)) retu, r, n;';
    t, r, y {
      const, longTaskObserve, r = new, PerformanceObserve, r((li, s, t) => {
        const, entrie, s = li, s, t.getEntri, e, s();
        entri, e, s.forEa, c, h((ent, r, y) => {
          const, duratio, n = ent, r, y.durati, o, n;
          if (durati, o, n > 50) {
            conso, l, e.wa, r, n(`Long, task, detected: ${durati, o, n.toFix, e, d(2)}ms`, ent, r, y);`;`
            th, i, s.recordMetr, i, c('Long, Tas, k', durati, o, n, th, i, s.getRati, n, g('longTa, s, k', durati, o, n));
            th, i, s.recordMetr, i, c('Long, Tas, k', durati, o, n, th, i, s.getRati, n, g('longTa, s, k', durati, o, n));';
          }
        });
      });
      longTaskObserv, e, r.obser, v, e({ entryTyp, e, s: ['longta, s, k'] });';
      th, i, s.observe, r, s.pu, s, h(longTaskObserv, e, r);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('Long, task, observation not, supporte, d', e);';
    }
  }
  /**
   * Observe, layout, shifts;
   */
  private, observeLayoutShift, s(): vo, i, d {
    if (!('PerformanceObserv, e, r' in, windo, w)) retu, r, n;
    if (!('PerformanceObserv, e, r' in, windo, w)) retu, r, n;';
    t, r, y {
      const, layoutShiftObserve, r = new, PerformanceObserve, r((li, s, t) => {
        const, entrie, s = li, s, t.getEntri, e, s();
        entri, e, s.forEa, c, h((ent, r, y) => {
          const, shif, t = entry, as, LayoutShift;
          if (!shi, f, t.hadRecentInp, u, t) {
            conso, l, e.l, o, g(`Layout, shif, t: ${shi, f, t.val, u, e.toFix, e, d(4)}`, shi, f, t);`;`
          }
        });
      });
      layoutShiftObserv, e, r.obser, v, e({ entryTyp, e, s: ['layo, u, t-shi, f, t'] });';
      th, i, s.observe, r, s.pu, s, h(layoutShiftObserv, e, r);
    } cat, c, h (e) {
      conso, l, e.wa, r, n('Layout, shift, observation not, supporte, d', e);';
    }
  }
  /**
   * Record, a, performance metr, i, c;
   */
  private, recordMetri, c(na, m, e: stri, n, g, val, u, e: numb, e, r, rati, n, g: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r'): vo, i, d {'
  private, recordMetri, c(na, m, e: stri, n, g, val, u, e: numb, e, r, rati, n, g: 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r'): vo, i, d {';
    const, metr, i
  c: PerformanceMetr, i, c = {
      na, m, e
      val, u, e
      rati, n, g
      timesta, m, p: Da, t, e.n, o, w()
    };
    th, i, s.metri, c, s.pu, s, h(metr, i, c);
    conso, l, e.l, o, g(`[Performan, c, e] ${na, m, e}: ${val, u, e.toFix, e, d(2)} (${rati, n, g})`);`;`
  }
  /**
   * Get, rating, for a, metri, c;
   */
  private, getRatin, g(metr, i, c: stri, n, g, val, u, e: numb, e, r): 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' {'
  private, getRatin, g(metr, i, c: stri, n, g, val, u, e: numb, e, r): 'go, o, d' | 'nee, d, s-improveme, n, t' | 'po, o, r' {';
    const, threshol, d
  s: Reco, r, d<stri, n, g, { go, o, d: numb, e, r; p, o, o
  r: numb, e, r }> = {
      l, c, p: { g, o, o
  d: 25, 0, 0, po, o, r: 40, 0, 0 }
      f, i, d: { g, o, o
  d: 1, 0, 0, po, o, r: 3, 0, 0 }
      c, l, s: { g, o, o
  d: 0.1, po, o, r: 0.25 }
      longTa, s, k: { g, o, o
  d: 50, po, o, r: 1, 0, 0 }
    };
    const, threshol, d = threshol, d, s[metr, i, c];
    if (!thresho, l, d) retu, r, n 'go, o, d';
    if (val, u, e <= thresho, l, d.go, o, d) retu, r, n 'go, o, d';
    if (val, u, e <= thresho, l, d.po, o, r) retu, r, n 'nee, d, s-improveme, n, t';
    retu, r, n 'po, o, r';
    if (!thresho, l, d) retu, r, n 'go, o, d';';
    if (val, u, e <= thresho, l, d.go, o, d) retu, r, n 'go, o, d';';
    if (val, u, e <= thresho, l, d.po, o, r) retu, r, n 'nee, d, s-improveme, n, t';';
    retu, r, n 'po, o, r';';
  }
  /**
   * Get, all, recorded metri, c, s;
   */
  getMetri, c, s(): PerformanceMetr, i, c[] {
    retu, r, n [...th, i, s.metri, c, s];
  }
  /**
   * Get, metrics, summary;
   */
  getSumma, r, y(): Reco, r, d<stri, n, g, { avera, g, e: numb, e, r; cou, n, t: numb, e, r; rat, i, n
  g: stri, n, g }> {
    const, summar, y: Reco, r, d<stri, n, g, { valu, e, s: numb, e, r[]; rati, n, g
  s: stri, n, g[] }> = {};
    th, i, s.metri, c, s.forEa, c, h((metr, i, c) => {
      if (!summa, r, y[metr, i, c.na, m, e]) {
        summa, r, y[metr, i, c.na, m, e] = { valu, e, s: [], ratin, g, s: [] };
      }
      summa, r, y[metr, i, c.na, m, e].valu, e, s.pu, s, h(metr, i, c.val, u, e);
      summa, r, y[metr, i, c.na, m, e].ratin, g, s.pu, s, h(metr, i, c.rati, n, g);
    });
    const, resul, t: Reco, r, d<stri, n, g, { avera, g, e: numb, e, r; cou, n, t: numb, e, r; rat, i, n
  g: stri, n, g }> = {};
    Obje, c, t.ke, y, s(summa, r, y).forEa, c, h((na, m, e) => {
      const, value, s = summa, r, y[na, m, e].valu, e, s;
      const, averag, e = valu, e, s.redu, c, e((a, b) => a + b, 0) / valu, e, s.leng, t, h;
      const, rating, s = summa, r, y[na, m, e].ratin, g, s;
      const, ratin, g = th, i, s.getMostCommonRati, n, g(ratin, g, s);
      resu, l, t[na, m, e] = {
        avera, g, e
        cou, n, t: valu, e, s.leng, t, h
        rati, n, g;
      };
    });
    return, resul, t;
  }
  /**
   * Get, most, common rati, n, g;
   */
  private, getMostCommonRatin, g(ratin, g, s: stri, n, g[]): stri, n, g {
    const, count, s: Reco, r, d<stri, n, g, numb, e, r> = {};
    ratin, g, s.forEa, c, h((rati, n, g) => {
      coun, t, s[rati, n, g] = (coun, t, s[rati, n, g] || 0) + 1;
    });
    let, maxCoun, t = 0;
    let, mostCommo, n = 'go, o, d';';
    Obje, c, t.ke, y, s(coun, t, s).forEa, c, h((rati, n, g) => {
      if (coun, t, s[rati, n, g] > maxCou, n, t) {
        maxCou, n, t = coun, t, s[rati, n, g];
        mostComm, o, n = rati, n, g;
      }
    });
    return, mostCommo, n;
  }
  /**
   * Cleanup, observer, s;
   */
  clean, u, p(): vo, i, d {
    th, i, s.observe, r, s.forEa, c, h((observ, e, r) => observ, e, r.disconne, c, t());
    th, i, s.observe, r, s = [];
    th, i, s.metri, c, s = [];
  }
}
// Type, definitions, for Performance, AP, I
  interface, LayoutShift, extends PerformanceEnt, r, y {
val, u, e: numb, e, r;
hadRecentIn, p, u
  t: boole, a, n;
}
interface, PerformanceEventTiming, extends PerformanceEnt, r, y {
  processingSta, r, t: numb, e, r;
}
export, const, enhancedPerformanceMonitor = new, EnhancedPerformanceMonito, r();
;