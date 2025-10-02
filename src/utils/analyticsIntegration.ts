/**
 * Analytics, Integration, Utility;
 * 
 * Unified, analytics, tracking system, supporting, multiple provide, r, s;
 * (Google, Analytic, s, Mixpan, e, l, Amplitu, d, e, Segme, n, t, e, t, c.) wi, t, h;
 * priva, c, y-focused, tracking, and GDPR, complianc, e.
 * 
 * Featur, e, s: * - Mul, t, i-provider, suppor, t
 * - Event, tracking, with custom, propertie, s;
 * - User, identification, and trai, t, s;
 * - Page, view, tracking;
 * - E-commerce, trackin, g;
 * - Privacy, controls, and consent, managemen, t;
 * - Offline, event, queue;
 */
export, interface, AnalyticsEvent {
  na, m, e: stri, n, g
  properti, e, s?: Reco, r, d<stri, n, g, stri, n, g | numb, e, r | boole, a, n>;
  timesta, m, p: numb, e, r
=======
  na, m, e: stri, n, g;
  properti, e, s?: Reco, r, d<stri, n, g, stri, n, g | numb, e, r | boole, a, n>;
  timesta, m, p: numb, e, r;
  user, I, d?: stri, n, g;
  session, I, d?: stri, n, g;
}
export, interface, AnalyticsUser {
  id: stri, n, g
=======
  id: stri, n, g;
  trai, t, s?: Reco, r, d<stri, n, g, stri, n, g | numb, e, r | boole, a, n>;
  anonymous, I, d?: stri, n, g;
}
export, interface, AnalyticsConfig {
provide, r, s: {
googleAnalyti, c, s?: {
measurement, I, d: stri, n, g;
=======
provid, e, r
  s: {
googleAnalyti, c, s?: {
measurement, I, d: stri, n, g;
enab, l, e
  d: boole, a, n;
};
    mixpan, e, l?: {
tok, e, n: stri, n, g;
enab, l, e
  d: boole, a, n;
};
    amplitu, d, e?: {
apiK, e, y: stri, n, g;
enab, l, e
  d: boole, a, n;
};
    segme, n, t?: {
writeK, e, y: stri, n, g;
enab, l, e
  d: boole, a, n;
};
  };
  priva, c, y: {
respectDoNotTra, c, k: boole, a, n;
anonymize, I, p: boole, a, n;
=======
respectDoNotTra, c, k: boole, a, n;
anonymize, I, p: boole, a, n;
consentRequi, r, e
  d: boole, a, n;
};
  deb, u, g: boole, a, n;
}
class, AnalyticsIntegratio, n {
  private, confi, g: AnalyticsConf, i, g
  private, eventQueu, e: AnalyticsEve, n, t[] = []
  private, currentUse, r?: AnalyticsUs, e, r;
  private, sessionI, d: stri, n, g
  private, consentGive, n: boole, a, n = fal, s, e
  private, initialize, d: boole, a, n = fal, s, e
=======
  private, confi, g: AnalyticsConf, i, g;
  private, eventQueu, e: AnalyticsEve, n, t[] = [];
  private, currentUse, r?: AnalyticsUs, e, r;
  private, sessionI, d: stri, n, g;
  private, consentGive, n: boole, a, n = fal, s, e;
  private, initialize, d: boole, a, n = fal, s, e;
  construct, o, r(con, f, i
  g: AnalyticsConf, i, g) {
    th, i, s.conf, i, g = conf, i, g;
    th, i, s.session, I, d = th, i, s.generateSession, I, d();
    // Check, for, Do Not, Trac, k
  if (conf, i, g.priva, c, y.respectDoNotTra, c, k && th, i, s.isDoNotTrackEnabl, e, d()) {
      conso, l, e.l, o, g('[Analyti, c, s] Do, Not, Track is, enable, d, analytics, disable, d');';
      retu, r, n;
    }
    // Check, for, stored conse, n, t
  if (conf, i, g.priva, c, y.consentRequir, e, d) {
      th, i, s.consentGiv, e, n = th, i, s.getStoredConse, n, t();
    } el, s, e {
      th, i, s.consentGiv, e, n = tr, u, e;
    }
    if (th, i, s.consentGiv, e, n) {
      th, i, s.initiali, z, e();
    }
  }
  /**
   * Initialize, analytics, providers;
   */
  private, initializ, e(): vo, i, d {
    if (th, i, s.initializ, e, d) retu, r, n;
    // Initialize, Google, Analytics
  if (th, i, s.conf, i, g.provide, r, s.googleAnalyti, c, s?.enabl, e, d) {
      th, i, s.initializeGoogleAnalyti, c, s();
    }
    // Initialize, Mixpane, l
  if (th, i, s.conf, i, g.provide, r, s.mixpan, e, l?.enabl, e, d) {
      th, i, s.initializeMixpan, e, l();
    }
    // Initialize, Amplitud, e
  if (th, i, s.conf, i, g.provide, r, s.amplitu, d, e?.enabl, e, d) {
      th, i, s.initializeAmplitu, d, e();
    }
    // Initialize, Segmen, t
  if (th, i, s.conf, i, g.provide, r, s.segme, n, t?.enabl, e, d) {
      th, i, s.initializeSegme, n, t();
    }
    th, i, s.initializ, e, d = tr, u, e;
    th, i, s.flushEventQue, u, e();
  }
  /**
   * Initialize, Google, Analytics;
   */
  private, initializeGoogleAnalytic, s(): vo, i, d {
    con, s, t { measurement, I, d } = th, i, s.conf, i, g.provide, r, s.googleAnalyti, c, s!;
    // Load, gta, g.js
  const, scrip, t = docume, n, t.createEleme, n, t('scri, p, t');';
    scri, p, t.asy, n, c = tr, u, e;
    scri, p, t.s, r, c = `htt, p, s://w, w, w.googletagmanag, e, r.c, o, m/gt, a, g/js?id=${measurement, I, d}`;`;`
    docume, n, t.he, a, d.appendChi, l, d(scri, p, t);
    // Initialize, gta, g;
    (window, as, any).dataLay, e, r = (window, as, any).dataLay, e, r || [];
    function, gta, g(...ar, g, s: a, n, y[]) {
      (window, as, any).dataLay, e, r.pu, s, h(ar, g, s);
    };
    (window, as, any).gt, a, g = gt, a, g;
    gt, a, g('js', new, Dat, e());
    gt, a, g('conf, i, g', measurement, I, d, {;
      anonymize_, i, p: th, i, s.conf, i, g.priva, c, y.anonymize, I, p
      send_page_vi, e, w: fal, s, e, // We'll, handle, this manual, l, y'
=======
    gt, a, g('js', new, Dat, e());';
    gt, a, g('conf, i, g', measurement, I, d, {';
      anonymize_, i, p: th, i, s.conf, i, g.priva, c, y.anonymize, I, p
      send_page_vi, e, w: fal, s, e, // We'll, handle, this manual, l, y';
    });
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Google, Analytics, initialized');';
    }
  }
  /**
   * Initialize, Mixpane, l;
   */
  private, initializeMixpane, l(): vo, i, d {
    con, s, t { tok, e, n } = th, i, s.conf, i, g.provide, r, s.mixpan, e, l!;
    // Load, Mixpane, l;
    (functi, o, n(f: a, n, y, b: a, n, y) {
      if (!b.__, S, V) {
        va, r, i, h;
        wind, o, w.mixpan, e, l = b;
        b._i = [];
        b.in, i, t = functi, o, n(e: a, n, y, f: a, n, y, c: a, n, y) {
          functio, n, g(a: a, n, y, d: a, n, y) {
            va, r, b = d.spl, i, t('.');
=======
            va, r, b = d.spl, i, t('.');';
            2 == b.leng, t, h && ((a = a[b[0]]), (d = b[1]));
            a[d] = functi, o, n() {
              a.pu, s, h([d].conc, a, t(Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(argumen, t, s, 0)));
            };
          }
          va, r, a = b;
          'undefin, e, d' !== typeo, f, c ? (a = b[c] = []) : (c = 'mixpan, e, l');';
          a.peop, l, e = a.peop, l, e || [];
          a.toStri, n, g = functi, o, n(a: a, n, y) {
            va, r, d = 'mixpan, e, l';
            'mixpan, e, l' !== c && (d += '.' + c);
            a || (d += ' (st, u, b)');
=======
            va, r, d = 'mixpan, e, l';';
            'mixpan, e, l' !== c && (d += '.' + c);';
            a || (d += ' (st, u, b)');';
            retur, n, d;
          };
          a.peop, l, e.toStri, n, g = functi, o, n() {
            retur, n, a.toStri, n, g(1) + '.peop, l, e (st, u, b)';';
          };
          i = 'disable, time_event, track track_pageview, track_links, track_forms track_with_groups, add_group, set_group remove_group, register, register_once alias, unregister, identify name_tag, set_config, reset opt_in_tracking, opt_out_tracking, has_opted_in_tracking has_opted_out_tracking, clear_opt_in_out_tracking, start_batch_senders peop, l, e.set, peopl, e.set_once, peopl, e.unset, peopl, e.increment, peopl, e.append, peopl, e.union, peopl, e.track_charge, peopl, e.clear_charges, peopl, e.delete_user, peopl, e.remo, v, e'.spl, i, t(;
=======
          i = 'disable, time_event, track track_pageview, track_links, track_forms track_with_groups, add_group, set_group remove_group, register, register_once alias, unregister, identify name_tag, set_config, reset opt_in_tracking, opt_out_tracking, has_opted_in_tracking has_opted_out_tracking, clear_opt_in_out_tracking, start_batch_senders peop, l, e.set, peopl, e.set_once, peopl, e.unset, peopl, e.increment, peopl, e.append, peopl, e.union, peopl, e.track_charge, peopl, e.clear_charges, peopl, e.delete_user, peopl, e.remo, v, e'.spl, i, t(';
            ' '
          );
          f, o, r (h = 0; h < i.leng, t, h; h++) g(a, i[h]);
          va, r, j = 'set, set_once, union unset, remove, delete'.spl, i, t(' ');';
          a.get_gro, u, p = functi, o, n() {
            functio, n, b(c: a, n, y) {
              d[c] = functi, o, n() {
                call2_ar, g, s = argumen, t, s;
                cal, l, 2 = [c].conc, a, t(Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(call2_ar, g, s, 0));
                a.pu, s, h([e, cal, l, 2]);
              };
            }
            f, o, r (
              va, r, d = {}
                e = ['get_gro, u, p'].conc, a, t(Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(argumen, t, s, 0))
=======
              va, r, d = {}
                e = ['get_gro, u, p'].conc, a, t(Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(argumen, t, s, 0)),';
                c = 0;
              c < j.leng, t, h;
              c++
            )
              b(j[c]);
            retur, n, d;
          };
          b._i.pu, s, h([e, f, c]);
        };
        b.__, S, V = 1.2;
      }
    })(docume, n, t, (window, as, any).mixpan, e, l || []);
    (window, as, any).mixpan, e, l.in, i, t(tok, e, n, {
      deb, u, g: th, i, s.conf, i, g.deb, u, g
      track_pagevi, e, w: fal, s, e
      persisten, c, e: 'localStora, g, e'
=======
      de, b, u
  g: th, i, s.conf, i, g.deb, u, g
      track_pagevi, e, w: fal, s, e
      persisten, c, e: 'localStora, g, e',';
    });
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Mixpanel, initialize, d');';
    }
  }
  /**
   * Initialize, Amplitud, e;
   */
  private, initializeAmplitud, e(): vo, i, d {
    con, s, t { apiK, e, y } = th, i, s.conf, i, g.provide, r, s.amplitu, d, e!;
    // Load, Amplitud, e;
    (functi, o, n(e: a, n, y, t: a, n, y) {
      va, r, n = e.amplitu, d, e || { _q: [], _, i, q: {} };
      va, r, r = t.createEleme, n, t('scri, p, t');';
      r.ty, p, e = 'te, x, t/javascri, p, t';';
      r.integri, t, y = 'sha3, 8, 4-u0hlTAJ1tNefeBKwiBNwB4CkHZ1ck4a, j, x/pKmwW, t, c+IufKJiC, Q, Z+WjJ, I, i+7C6N, t, m';';
      r.crossOrig, i, n = 'anonymo, u, s';';
      r.asy, n, c = tr, u, e;
      r.s, r, c = 'htt, p, s://c, d, n.amplitu, d, e.c, o, m/li, b, s/amplitu, d, e-8.21.4-m, i, n.gz.js';'
      r.onlo, a, d = functi, o, n() {
        if (!e.amplitu, d, e.runQueuedFunctio, n, s) {
          conso, l, e.l, o, g('[Amplitu, d, e] Err, o, r: could, not, load S, D, K');'
        }
      };
      va, r, s: a, n, y = t.getElementsByTagNa, m, e('scri, p, t')[0];'
=======
      r.s, r, c = 'htt, p, s: //c, d, n.amplitu, d, e.c, o, m/li, b, s/amplitu, d, e-8.21.4-m, i, n.gz.js';';
      r.onlo, a, d = functi, o, n() {
        if (!e.amplitu, d, e.runQueuedFunctio, n, s) {
          conso, l, e.l, o, g('[Amplitu, d, e] Err, o, r: could, not, load S, D, K');';
        }
      };
      va, r, s: a, n, y = t.getElementsByTagNa, m, e('scri, p, t')[0];';
      s.parentNo, d, e.insertBefo, r, e(r, s);
      functio, n, i(e: a, n, y, t: a, n, y) {
        e.prototy, p, e[t] = functi, o, n() {
          th, i, s._q.pu, s, h([t].conc, a, t(Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(argumen, t, s, 0)));
          return, thi, s;
        };
      }
      va, r, o = functi, o, n() {
        th, i, s._q = [];
        return, thi, s;
      };
      va, r, a = ['a, d, d', 'appe, n, d', 'clearA, l, l', 'prepe, n, d', 's, e, t', 'setOn, c, e', 'uns, e, t', 'preInse, r, t', 'postInse, r, t', 'remo, v, e'];';
      f, o, r (va, r, c = 0; c < a.leng, t, h; c++) {
        i(o, a[c]);
      }
      n.Identi, f, y = o;
      va, r, u = functi, o, n() {
        th, i, s._q = [];
        return, thi, s;
      };
      va, r, l = ['setProduct, I, d', 'setQuanti, t, y', 'setPri, c, e', 'setRevenueTy, p, e', 'setEventProperti, e, s'];';
      f, o, r (va, r, p = 0; p < l.leng, t, h; p++) {
        i(u, l[p]);
      }
      n.Reven, u, e = u;
      va, r, d = ['in, i, t', 'logEve, n, t', 'logReven, u, e', 'setUser, I, d', 'setUserProperti, e, s', 'setOptO, u, t', 'setVersionNa, m, e', 'setDoma, i, n', 'setDevice, I, d', 'enableTracki, n, g', 'setGlobalUserProperti, e, s', 'identi, f, y', 'clearUserProperti, e, s', 'setGro, u, p', 'logRevenue, V, 2', 'regenerateDevice, I, d', 'groupIdenti, f, y', 'onIn, i, t', 'logEventWithTimesta, m, p', 'logEventWithGrou, p, s', 'setSession, I, d', 'resetSession, I, d', 'getDevice, I, d', 'getUser, I, d', 'setMinTimeBetweenSessionsMill, i, s', 'setEventUploadThresho, l, d', 'setUseDynamicConf, i, g', 'setServerZo, n, e', 'setServerU, r, l', 'sendEven, t, s', 'setLibra, r, y', 'setTranspo, r, t'];
=======
      va, r, d = ['in, i, t', 'logEve, n, t', 'logReven, u, e', 'setUser, I, d', 'setUserProperti, e, s', 'setOptO, u, t', 'setVersionNa, m, e', 'setDoma, i, n', 'setDevice, I, d', 'enableTracki, n, g', 'setGlobalUserProperti, e, s', 'identi, f, y', 'clearUserProperti, e, s', 'setGro, u, p', 'logRevenue, V, 2', 'regenerateDevice, I, d', 'groupIdenti, f, y', 'onIn, i, t', 'logEventWithTimesta, m, p', 'logEventWithGrou, p, s', 'setSession, I, d', 'resetSession, I, d', 'getDevice, I, d', 'getUser, I, d', 'setMinTimeBetweenSessionsMill, i, s', 'setEventUploadThresho, l, d', 'setUseDynamicConf, i, g', 'setServerZo, n, e', 'setServerU, r, l', 'sendEven, t, s', 'setLibra, r, y', 'setTranspo, r, t'];';
      functio, n, v(e: a, n, y) {
        functio, n, t(t: a, n, y) {
          e[t] = functi, o, n() {
            e._q.pu, s, h([t].conc, a, t(Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(argumen, t, s, 0)));
          };
        }
        f, o, r (va, r, n = 0; n < d.leng, t, h; n++) {
          t(d[n]);
        }
      }
      v(n);
      e.amplitu, d, e = n;
    })(wind, o, w, docume, n, t);
    (window, as, any).amplitu, d, e.getInstan, c, e().in, i, t(apiK, e, y, undefin, e, d, {
      includeReferr, e, r: tr, u, e
      includeU, t, m: tr, u, e
      trackingOptio, n, s: {
        ipAddre, s, s: !th, i, s.conf, i, g.priva, c, y.anonymize, I, p;
      }
=======
      includeReferr, e, r: tr, u, e
      includeU, t, m: tr, u, e
      trackingOptio, n, s: {
        ipAddre, s, s: !th, i, s.conf, i, g.priva, c, y.anonymize, I, p
      }
    });
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Amplitude, initialize, d');';
    }
  }
  /**
   * Initialize, Segmen, t;
   */
  private, initializeSegmen, t(): vo, i, d {
    con, s, t { writeK, e, y } = th, i, s.conf, i, g.provide, r, s.segme, n, t!;
    // Load, Segmen, t;
    !(functi, o, n() {
      var, analytic, s = ((window, as, any).analyti, c, s = (window, as, any).analyti, c, s || []);
      if (!analyti, c, s.initiali, z, e)
        if (analyti, c, s.invok, e, d)
          wind, o, w.conso, l, e &&
            conso, l, e.err, o, r &&
            conso, l, e.err, o, r('Segment, snippet, included twi, c, e.');';
        el, s, e {
          analyti, c, s.invok, e, d = !0;
          analyti, c, s.metho, d, s = [
            'trackSubm, i, t'
            'trackCli, c, k'
            'trackLi, n, k'
            'trackFo, r, m'
            'pagevi, e, w'
            'identi, f, y'
            'res, e, t'
            'gro, u, p'
            'tra, c, k'
            'rea, d, y'
            'ali, a, s'
            'deb, u, g'
            'pa, g, e'
            'on, c, e'
            'o, f, f'
            'on'
            'addSourceMiddlewa, r, e'
            'addIntegrationMiddlewa, r, e'
            'setAnonymous, I, d'
            'addDestinationMiddlewa, r, e'
=======
            'trackSubm, i, t',';
            'trackCli, c, k',';
            'trackLi, n, k',';
            'trackFo, r, m',';
            'pagevi, e, w',';
            'identi, f, y',';
            'res, e, t',';
            'gro, u, p',';
            'tra, c, k',';
            'rea, d, y',';
            'ali, a, s',';
            'deb, u, g',';
            'pa, g, e',';
            'on, c, e',';
            'o, f, f',';
            'on',';
            'addSourceMiddlewa, r, e',';
            'addIntegrationMiddlewa, r, e',';
            'setAnonymous, I, d',';
            'addDestinationMiddlewa, r, e',';
          ];
          analyti, c, s.facto, r, y = functi, o, n(e: a, n, y) {
            return, functio, n() {
              va, r, t = Arr, a, y.prototy, p, e.sli, c, e.ca, l, l(argumen, t, s);
              t.unshi, f, t(e);
              analyti, c, s.pu, s, h(t);
              return, analytic, s;
            };
          };
          f, o, r (va, r, e = 0; e < analyti, c, s.metho, d, s.leng, t, h; e++) {
            var, ke, y = analyti, c, s.metho, d, s[e];
            analyti, c, s[k, e, y] = analyti, c, s.facto, r, y(k, e, y);
          }
          analyti, c, s.lo, a, d = functi, o, n(k, e, y: a, n, y, e: a, n, y) {
            va, r, t = docume, n, t.createEleme, n, t('scri, p, t');
            t.ty, p, e = 'te, x, t/javascri, p, t';
            t.asy, n, c = !0;
            t.s, r, c =
              'htt, p, s://c, d, n.segme, n, t.c, o, m/analyti, c, s.js/v1/' +'
              k, e, y +
              '/analyti, c, s.m, i, n.js';
            va, r, n: a, n, y = docume, n, t.getElementsByTagNa, m, e('scri, p, t')[0];'
=======
            va, r, t = docume, n, t.createEleme, n, t('scri, p, t');';
            t.ty, p, e = 'te, x, t/javascri, p, t';';
            t.asy, n, c = !0;
            t.s, r, c =
              'htt, p, s: //c, d, n.segme, n, t.c, o, m/analyti, c, s.js/v1/' +';
              k, e, y +
              '/analyti, c, s.m, i, n.js';';
            v, a, r 
  n: a, n, y = docume, n, t.getElementsByTagNa, m, e('scri, p, t')[0];';
            n.parentNo, d, e.insertBefo, r, e(t, n);
            analyti, c, s._loadOptio, n, s = e;
          };
          analyti, c, s._writeK, e, y = writeK, e, y;
          analyti, c, s.SNIPPET_VERSI, O, N = '4.15.3';';
          analyti, c, s.lo, a, d(writeK, e, y);
        }
    })();
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Segment, initialize, d');';
    }
  }
  /**
   * Track, even, t;
   */
  tra, c, k(eventNa, m, e: stri, n, g, properti, e, s?: Reco, r, d<stri, n, g, a, n, y>): vo, i, d {
    const, even, t: AnalyticsEve, n, t = {
      na, m, e: eventNa, m, e
      properti, e, s
      timesta, m, p: Da, t, e.n, o, w()
      user, I, d: th, i, s.currentUs, e, r?.id
      session, I, d: th, i, s.session, I, d;
=======
      timest, a, m
  p: Da, t, e.n, o, w()
      user, I, d: th, i, s.currentUs, e, r?.id
      session, I, d: th, i, s.session, I, d
    };
    if (!th, i, s.consentGiv, e, n || !th, i, s.initializ, e, d) {
      th, i, s.eventQue, u, e.pu, s, h(eve, n, t);
      retu, r, n;
    }
    // Send, to, all provide, r, s
  if (th, i, s.conf, i, g.provide, r, s.googleAnalyti, c, s?.enabl, e, d) {
      (window, as, any).gt, a, g?.('eve, n, t', eventNa, m, e, properti, e, s);';
    }
    if (th, i, s.conf, i, g.provide, r, s.mixpan, e, l?.enabl, e, d) {
      (window, as, any).mixpan, e, l?.tra, c, k(eventNa, m, e, properti, e, s);
    }
    if (th, i, s.conf, i, g.provide, r, s.amplitu, d, e?.enabl, e, d) {
      (window, as, any).amplitu, d, e?.getInstan, c, e().logEve, n, t(eventNa, m, e, properti, e, s);
    }
    if (th, i, s.conf, i, g.provide, r, s.segme, n, t?.enabl, e, d) {
      (window, as, any).analyti, c, s?.tra, c, k(eventNa, m, e, properti, e, s);
    }
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Event, tracke, d: ', eventNa, m, e, properti, e, s);'
=======
      conso, l, e.l, o, g('[Analyti, c, s] Event, tracke, d: ', eventNa, m, e, properti, e, s);';
    }
  }
  /**
   * Track, page, view;
   */
  pa, g, e(pageNa, m, e?: stri, n, g, properti, e, s?: Reco, r, d<stri, n, g, a, n, y>): vo, i, d {
    const, pageProp, s = {
      ...properti, e, s
  pa, t, h: wind, o, w.locati, o, n.pathna, m, e
      u, r, l: wind, o, w.locati, o, n.hr, e, f
      tit, l, e: docume, n, t.tit, l, e
      referr, e, r: docume, n, t.referr, e, r;
=======
      ...properti, e, s
      pa, t, h: wind, o, w.locati, o, n.pathna, m, e
      u, r, l: wind, o, w.locati, o, n.hr, e, f
      tit, l, e: docume, n, t.tit, l, e
      referr, e, r: docume, n, t.referr, e, r
    };
    if (th, i, s.conf, i, g.provide, r, s.googleAnalyti, c, s?.enabl, e, d) {
      (window, as, any).gt, a, g?.('eve, n, t', 'page_vi, e, w', pagePro, p, s);';
    }
    if (th, i, s.conf, i, g.provide, r, s.mixpan, e, l?.enabl, e, d) {
      (window, as, any).mixpan, e, l?.track_pagevi, e, w(pagePro, p, s);
    }
    if (th, i, s.conf, i, g.provide, r, s.amplitu, d, e?.enabl, e, d) {
      (window, as, any).amplitu, d, e?.getInstan, c, e().logEve, n, t('Page, Viewe, d', pagePro, p, s);';
    }
    if (th, i, s.conf, i, g.provide, r, s.segme, n, t?.enabl, e, d) {
      (window, as, any).analyti, c, s?.pa, g, e(pageNa, m, e, pagePro, p, s);
    }
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Page, viewe, d: ', pageNa, m, e || docume, n, t.tit, l, e, pagePro, p, s);'
=======
      conso, l, e.l, o, g('[Analyti, c, s] Page, viewe, d: ', pageNa, m, e || docume, n, t.tit, l, e, pagePro, p, s);';
    }
  }
  /**
   * Identify, use, r;
   */
  identi, f, y(user, I, d: stri, n, g, trai, t, s?: Reco, r, d<stri, n, g, a, n, y>): vo, i, d {
    th, i, s.currentUs, e, r = {
      id: user, I, d
      trai, t, s;
=======
      id: user, I, d
      trai, t, s
    };
    if (!th, i, s.consentGiv, e, n || !th, i, s.initializ, e, d) {
      retu, r, n;
    }
    if (th, i, s.conf, i, g.provide, r, s.googleAnalyti, c, s?.enabl, e, d) {
      (window, as, any).gt, a, g?.('s, e, t', { user_, i, d: user, I, d });';
      if (trai, t, s) {
        (window, as, any).gt, a, g?.('s, e, t', 'user_properti, e, s', trai, t, s);';
      }
    }
    if (th, i, s.conf, i, g.provide, r, s.mixpan, e, l?.enabl, e, d) {
      (window, as, any).mixpan, e, l?.identi, f, y(user, I, d);
      if (trai, t, s) {
        (window, as, any).mixpan, e, l?.peop, l, e.s, e, t(trai, t, s);
      }
    }
    if (th, i, s.conf, i, g.provide, r, s.amplitu, d, e?.enabl, e, d) {
      (window, as, any).amplitu, d, e?.getInstan, c, e().setUser, I, d(user, I, d);
      if (trai, t, s) {
        (window, as, any).amplitu, d, e?.getInstan, c, e().setUserProperti, e, s(trai, t, s);
      }
    }
    if (th, i, s.conf, i, g.provide, r, s.segme, n, t?.enabl, e, d) {
      (window, as, any).analyti, c, s?.identi, f, y(user, I, d, trai, t, s);
    }
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] User, identifie, d: ', user, I, d, trai, t, s);'
=======
      conso, l, e.l, o, g('[Analyti, c, s] User, identifie, d: ', user, I, d, trai, t, s);';
    }
  }
  /**
   * Set, user, consent;
   */
  setConse, n, t(grant, e, d: boole, a, n): vo, i, d {
    th, i, s.consentGiv, e, n = grant, e, d;
    th, i, s.storeConse, n, t(grant, e, d);
    if (grant, e, d && !th, i, s.initializ, e, d) {
      th, i, s.initiali, z, e();
    }
    if (th, i, s.conf, i, g.deb, u, g) {
      conso, l, e.l, o, g('[Analyti, c, s] Conse, n, t: ', grant, e, d ? 'grant, e, d' : 'revok, e, d');'
=======
      conso, l, e.l, o, g('[Analyti, c, s] Conse, n, t: ', grant, e, d ? 'grant, e, d' : 'revok, e, d');';
    }
  }
  /**
   * Flush, event, queue;
   */
  private, flushEventQueu, e(): vo, i, d {
    whi, l, e (th, i, s.eventQue, u, e.leng, t, h > 0) {
      const, even, t = th, i, s.eventQue, u, e.shi, f, t()!;
      th, i, s.tra, c, k(eve, n, t.na, m, e, eve, n, t.properti, e, s);
    }
  }
  /**
   * Generate, session, ID;
   */
  private, generateSessionI, d(): stri, n, g {
    retu, r, n `sessi, o, n-${Da, t, e.n, o, w()}-${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`;`;`
  }
  /**
   * Check, if, Do Not, Track, is enabl, e, d;
   */
  private, isDoNotTrackEnable, d(): boole, a, n {
    return (
      navigat, o, r.doNotTra, c, k === '1' ||;
      (window, as, any).doNotTra, c, k === '1' ||;
=======
      navigat, o, r.doNotTra, c, k === '1' ||';
      (window, as, any).doNotTra, c, k === '1' ||';
      (navigator, as, any).msDoNotTra, c, k === '1'
    );
  }
  /**
   * Get, stored, consent;
   */
  private, getStoredConsen, t(): boole, a, n {
    t, r, y {
      return, localStorag, e.getIt, e, m('analyti, c, s-conse, n, t') === 'tr, u, e';';
    } cat, c, h {
      return, fals, e;
    }
  }
  /**
   * Store, consen, t;
   */
  private, storeConsen, t(grant, e, d: boole, a, n): vo, i, d {
    t, r, y {
      localStora, g, e.setIt, e, m('analyti, c, s-conse, n, t', grant, e, d ? 'tr, u, e' : 'fal, s, e');';
    } cat, c, h {
      // Silently, fail, if localStorage, is, not availab, l, e;
    }
  }
}
// Default, configuratio, n
  const, defaultConfi, g: AnalyticsConf, i, g = {
  provide, r, s: {}
  priva, c, y: {
    respectDoNotTra, c, k: tr, u, e
    anonymize, I, p: tr, u, e
    consentRequir, e, d: fal, s, e;
  }
  deb, u, g: proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t'
};
// Singleton, instanc, e (will, be, initialized with, actual, config by, the, app)
export, let, analytics: AnalyticsIntegrati, o, n
=======
    respectDoNotTra, c, k: tr, u, e
    anonymize, I, p: tr, u, e
    consentRequir, e, d: fal, s, e
  }
  deb, u, g: proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t',';
};
// Singleton, instanc, e (will, be, initialized with, actual, config by, the, app)
export, let, analytics: AnalyticsIntegrati, o, n;
/**
 * Initialize, analytic, s;
 */
export, function, initializeAnalytics(con, f, i
  g: Parti, a, l<AnalyticsConf, i, g>): AnalyticsIntegrati, o, n {
  const, mergedConfi, g = {
    ...defaultConf, i, g;
    ...conf, i, g
  provide, r, s: {
      ...defaultConf, i, g.provide, r, s;
      ...conf, i, g.provide, r, s;
    }
    priva, c, y: {
      ...defaultConf, i, g.priva, c, y;
      ...conf, i, g.priva, c, y;
    }
=======
    ...defaultConf, i, g
    ...conf, i, g
    provide, r, s: {
      ...defaultConf, i, g.provide, r, s
      ...conf, i, g.provide, r, s
    }
    priva, c, y: {
      ...defaultConf, i, g.priva, c, y
      ...conf, i, g.priva, c, y
    }
  };
  analyti, c, s = new, AnalyticsIntegratio, n(mergedConf, i, g);
  return, analytic, s;
}
export default AnalyticsIntegration;
;