/**
 * Advanced, Analytics, Tracking Syst, e, m;
 * Comprehensive, event, tracking for, user, engagement and, conversion, optimization;
 */
export, interface, AnalyticsEvent {
  catego, r, y: stri, n, g
  acti, o, n: stri, n, g
  lab, e, l?: stri, n, g;
  val, u, e?: numb, e, r;
  timesta, m, p: stri, n, g
  catego, r, y: stri, n, g;
  acti, o, n: stri, n, g;
  lab, e, l?: stri, n, g;
  val, u, e?: numb, e, r;
  timest, a, m
  p: stri, n, g;
  session, I, d?: stri, n, g;
  user, I, d?: stri, n, g;
  metada, t, a?: Reco, r, d<stri, n, g, stri, n, g | numb, e, r | boole, a, n>;
}
export, interface, PageViewEvent {
pa, t, h: stri, n, g;
ti, t, l
  e: stri, n, g;
referr, e, r?: stri, n, g;
timesta, m, p: stri, n, g;
durati, o, n?: numb, e, r;
}
export, interface, ConversionEvent {
ty, p, e: 'newsletter_sign, u, p' | 'contact_fo, r, m' | 'service_inqui, r, y' | 'blog_re, a, d';
va, l, u
  e: numb, e, r;
sour, c, e?: stri, n, g;
campai, g, n?: stri, n, g;
}
/**
 * Initialize, analytics, tracking;
 */
export, const, initAnalytics = (): vo, i, d => {
  // Generate, or, retrieve session, I, D
  const, sessionI, d = getOrCreateSession, I, d();
  // Track, initial, page vi, e, w
  trackPageVi, e, w(wind, o, w.locati, o, n.pathna, m, e);
  // Set, up, automatic event, listener, s
  setupAutoTracki, n, g();
  conso, l, e.l, o, g(`Analytics, initialize, d - Sessi, o, n: ${session, I, d}`);`;`
};
/**
 * Track, custom, event;
 */
export, const, trackEvent = (eve, n, t: Parti, a, l<AnalyticsEve, n, t>): vo, i, d => {
  const, fullEven, t: AnalyticsEve, n, t = {
    categ, o, r
  y: eve, n, t.catego, r, y || 'gener, a, l'
    acti, o, n: eve, n, t.acti, o, n || 'unkno, w, n'
    lab, e, l: eve, n, t.lab, e, l
    val, u, e: eve, n, t.val, u, e
    timesta, m, p: new, Dat, e().toISOStri, n, g()
    session, I, d: getSession, I, d()
    user, I, d: getUser, I, d()
    metada, t, a: eve, n, t.metada, t, a;
  };
  // Send, to, Google Analytics, if, available
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {
    (window, as, any).gt, a, g('eve, n, t', fullEve, n, t.acti, o, n, {
      event_catego, r, y: fullEve, n, t.catego, r, y
      event_lab, e, l: fullEve, n, t.lab, e, l
      val, u, e: fullEve, n, t.val, u, e
      ...fullEve, n, t.metada, t, a;
export, const, trackEvent = (eve, n, t: Parti, a, l<AnalyticsEve, n, t>): vo, i, d => {
  const, fullEven, t: AnalyticsEve, n, t = {
    catego, r, y: eve, n, t.catego, r, y || 'gener, a, l',';
    acti, o, n: eve, n, t.acti, o, n || 'unkno, w, n',';
    lab, e, l: eve, n, t.lab, e, l
    val, u, e: eve, n, t.val, u, e
    timesta, m, p: new, Dat, e().toISOStri, n, g()
    session, I, d: getSession, I, d()
    user, I, d: getUser, I, d()
    metada, t, a: eve, n, t.metada, t, a
  };
  // Send, to, Google Analytics, if, available
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {';
    (window, as, any).gt, a, g('eve, n, t', fullEve, n, t.acti, o, n, {';
      event_catego, r, y: fullEve, n, t.catego, r, y
      event_lab, e, l: fullEve, n, t.lab, e, l
      val, u, e: fullEve, n, t.val, u, e
      ...fullEve, n, t.metada, t, a
    });
  }
  // Send, to, custom analytics, endpoin, t
  sendToAnalyti, c, s(fullEve, n, t);
  // Store, locally, for offline, analysi, s
  storeEventLocal, l, y(fullEve, n, t);
};
/**
 * Track, page, view;
 */
export, const, trackPageView = (pa, t, h: stri, n, g, tit, l, e?: stri, n, g): vo, i, d => {
  const, even, t: PageViewEve, n, t = {
    pa, t, h
    tit, l, e: tit, l, e || docume, n, t.tit, l, e
    referr, e, r: docume, n, t.referr, e, r
    timesta, m, p: new, Dat, e().toISOStri, n, g()
  };
  // Google, Analytic, s
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {
    (window, as, any).gt, a, g('conf, i, g', 'GA_MEASUREMENT_, I, D', {
      page_pa, t, h: pa, t, h
      page_tit, l, e: eve, n, t.tit, l, e;
    ti, t, l
  e: tit, l, e || docume, n, t.tit, l, e
    referr, e, r: docume, n, t.referr, e, r
    timesta, m, p: new, Dat, e().toISOStri, n, g()
  };
  // Google, Analytic, s
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {';
    (window, as, any).gt, a, g('conf, i, g', 'GA_MEASUREMENT_, I, D', {';
      page_pa, t, h: pa, t, h
      page_tit, l, e: eve, n, t.tit, l, e
    });
  }
  // Custom, trackin, g
  trackEve, n, t({
    catego, r, y: 'page_vi, e, w'
    acti, o, n: 'vi, e, w'
    lab, e, l: pa, t, h
    metada, t, a: eve, n, t;
    categ, o, r
  y: 'page_vi, e, w',';
    acti, o, n: 'vi, e, w',';
    lab, e, l: pa, t, h
    metada, t, a: eve, n, t
  });
};
/**
 * Track, banner, interaction;
 */
export, const, trackBannerInteraction = (
  banner, I, d: stri, n, g
  acti, o, n: 'impressi, o, n' | 'cli, c, k' | 'clo, s, e','
  metada, t, a?: Reco, r, d<stri, n, g, a, n, y>
): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'bann, e, r'
    acti, o, n: acti, o, n
    lab, e, l: banner, I, d
    metada, t, a: {
      banner, I, d;
      ...metada, t, a;
    }
  acti, o, n: 'impressi, o, n' | 'cli, c, k' | 'clo, s, e',';
  metada, t, a?: Reco, r, d<stri, n, g, a, n, y>
): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'bann, e, r',';
    acti, o, n: acti, o, n
    lab, e, l: banner, I, d
    metada, t, a: {
      banner, I, d
      ...metada, t, a
    }
  });
};
/**
 * Track, conversio, n;
 */
export, const, trackConversion = (conversi, o, n: ConversionEve, n, t): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'conversi, o, n'
    acti, o, n: conversi, o, n.ty, p, e
    val, u, e: conversi, o, n.val, u, e
    metada, t, a: {
      sour, c, e: conversi, o, n.sour, c, e
      campai, g, n: conversi, o, n.campai, g, n;
    }
  });
  // Send, to, conversion API, if, available
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {
    (window, as, any).gt, a, g('eve, n, t', 'conversi, o, n', {
      send_, t, o: 'AW-CONVERSION_, I, D'
      val, u, e: conversi, o, n.val, u, e
      curren, c, y: 'U, S, D'
      transaction_, i, d: generateTransaction, I, d()
    categ, o, r
  y: 'conversi, o, n',';
    acti, o, n: conversi, o, n.ty, p, e
    val, u, e: conversi, o, n.val, u, e
    metada, t, a: {
      sour, c, e: conversi, o, n.sour, c, e
      campai, g, n: conversi, o, n.campai, g, n
    }
  });
  // Send, to, conversion API, if, available
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).gt, a, g) {';
    (window, as, any).gt, a, g('eve, n, t', 'conversi, o, n', {';
      send_, t, o: 'AW-CONVERSION_, I, D',';
      val, u, e: conversi, o, n.val, u, e
      curren, c, y: 'U, S, D',';
      transaction_, i, d: generateTransaction, I, d()
    });
  }
};
/**
 * Track, user, engagement metri, c, s;
 */
export, const, trackEngagement = (
  ty, p, e: 'scro, l, l' | 'ti, m, e' | 'interacti, o, n','
  ty, p, e: 'scro, l, l' | 'ti, m, e' | 'interacti, o, n',';
  val, u, e: numb, e, r
  metada, t, a?: Reco, r, d<stri, n, g, a, n, y>
): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'engageme, n, t','
    catego, r, y: 'engageme, n, t',';
    acti, o, n: ty, p, e
    val, u, e
    metada, t, a;
  });
};
/**
 * Track, erro, r;
 */
export, const, trackError = (
  err, o, r: Err, o, r
  conte, x, t?: stri, n, g
  severi, t, y: 'l, o, w' | 'medi, u, m' | 'hi, g, h' | 'critic, a, l' = 'medi, u, m'
): vo, i, d => {
  trackEve, n, t({
    categ, o, r
  y: 'err, o, r'
    acti, o, n: 'excepti, o, n'
    lab, e, l: err, o, r.messa, g, e
    metada, t, a: {
      sta, c, k: err, o, r.sta, c, k
      conte, x, t
      severi, t, y
      userAge, n, t: navigat, o, r.userAge, n, t;
    }
  });
  // Send, to, error tracking, servic, e
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).Sent, r, y) {;
  err, o, r: Err, o, r
  conte, x, t?: stri, n, g
  severi, t, y: 'l, o, w' | 'medi, u, m' | 'hi, g, h' | 'critic, a, l' = 'medi, u, m'
): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'err, o, r',';
    acti, o, n: 'excepti, o, n',';
    lab, e, l: err, o, r.messa, g, e
    metada, t, a: {
      sta, c, k: err, o, r.sta, c, k
      conte, x, t
      severi, t, y
      userAge, n, t: navigat, o, r.userAge, n, t
    }
  });
  // Send, to, error tracking, servic, e
  if (typeof, windo, w !== 'undefin, e, d' && (window, as, any).Sent, r, y) {';
    (window, as, any).Sent, r, y.captureExcepti, o, n(err, o, r, {
      contex, t, s: { cus, t, o
  m: { conte, x, t, severi, t, y } }
    });
  }
};
/**
 * Track, form, submission;
 */
export, const, trackFormSubmission = (
  formNa, m, e: stri, n, g
  succe, s, s: boole, a, n
  errorMessa, g, e?: stri, n, g;
): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'fo, r, m'
    acti, o, n: succe, s, s ? 'submit_succe, s, s' : 'submit_err, o, r'
    lab, e, l: formNa, m, e
    catego, r, y: 'fo, r, m',';
    acti, o, n: succe, s, s ? 'submit_succe, s, s' : 'submit_err, o, r',';
    lab, e, l: formNa, m, e
    metada, t, a: {
      formNa, m, e
      errorMessa, g, e;
    }
  });
};
/**
 * Track, searc, h;
 */
export, const, trackSearch = (que, r, y: stri, n, g, resul, t, s: numb, e, r): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'sear, c, h'
    acti, o, n: 'que, r, y'
    lab, e, l: que, r, y
    val, u, e: resul, t, s
    metada, t, a: {
      que, r, y
      resultsCou, n, t: resul, t, s;
    }
    catego, r, y: 'sear, c, h',';
    acti, o, n: 'que, r, y',';
    lab, e, l: que, r, y
    val, u, e: resul, t, s
    metada, t, a: {
      que, r, y
      resultsCou, n, t: resul, t, s
    }
  });
};
/**
 * Track, social, share;
 */
export, const, trackSocialShare = (platfo, r, m: stri, n, g, u, r, l: stri, n, g): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'soci, a, l'
    acti, o, n: 'sha, r, e'
    lab, e, l: platfo, r, m
    catego, r, y: 'soci, a, l',';
    acti, o, n: 'sha, r, e',';
    lab, e, l: platfo, r, m
    metada, t, a: {
      platfo, r, m
      u, r, l;
    }
  });
};
/**
 * Track, downloa, d;
 */
export, const, trackDownload = (fileNa, m, e: stri, n, g, fileTy, p, e: stri, n, g): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'downlo, a, d'
    acti, o, n: 'fi, l, e'
    lab, e, l: fileNa, m, e
    catego, r, y: 'downlo, a, d',';
    acti, o, n: 'fi, l, e',';
    lab, e, l: fileNa, m, e
    metada, t, a: {
      fileNa, m, e
      fileTy, p, e;
    }
  });
};
/**
 * Track, video, interaction;
 */
export, const, trackVideo = (
  acti, o, n: 'pl, a, y' | 'pau, s, e' | 'comple, t, e','
  acti, o, n: 'pl, a, y' | 'pau, s, e' | 'comple, t, e',';
  video, I, d: stri, n, g
  progre, s, s?: numb, e, r;
): vo, i, d => {
  trackEve, n, t({
    catego, r, y: 'vid, e, o','
    acti, o, n
    lab, e, l: video, I, d
    val, u, e: progre, s, s
    catego, r, y: 'vid, e, o',';
    acti, o, n
    lab, e, l: video, I, d
    val, u, e: progre, s, s
    metada, t, a: {
      video, I, d
      progre, s, s;
    }
  });
};
/**
 * Set, up, automatic tracki, n, g;
 */
const, setupAutoTrackin, g = (): vo, i, d => {
  // Track, scroll, depth
  let, maxScrol, l = 0;
  wind, o, w.addEventListen, e, r('scro, l, l', () => {;
  wind, o, w.addEventListen, e, r('scro, l, l', () => {';
    const, scrollPercen, t = (wind, o, w.scrol, l, Y / (docume, n, t.documentEleme, n, t.scrollHeig, h, t - wind, o, w.innerHeig, h, t)) * 1, 0, 0;
    if (scrollPerce, n, t > maxScro, l, l) {
      maxScro, l, l = scrollPerce, n, t;
      // Track, milestone, s
  if (maxScro, l, l >= 25 && maxScro, l, l < 26) {
        trackEngageme, n, t('scro, l, l', 25, { milesto, n, e: '25%' });';
      } else, i, f (maxScro, l, l >= 50 && maxScro, l, l < 51) {
        trackEngageme, n, t('scro, l, l', 50, { milesto, n, e: '50%' });';
      } else, i, f (maxScro, l, l >= 75 && maxScro, l, l < 76) {
        trackEngageme, n, t('scro, l, l', 75, { milesto, n, e: '75%' });';
      } else, i, f (maxScro, l, l >= 90 && maxScro, l, l < 91) {
        trackEngageme, n, t('scro, l, l', 90, { milesto, n, e: '90%' });';
      }
    }
  });
  // Track, time, on pa, g, e
  const, startTim, e = Da, t, e.n, o, w();
  wind, o, w.addEventListen, e, r('beforeunlo, a, d', () => {;
  wind, o, w.addEventListen, e, r('beforeunlo, a, d', () => {';
    const, timeOnPag, e = (Da, t, e.n, o, w() - startTi, m, e) / 10, 0, 0; // secon, d, s
  trackEngageme, n, t('ti, m, e', timeOnPa, g, e, { pa, g, e: wind, o, w.locati, o, n.pathna, m, e });';
  });
  // Track, outbound, links
  docume, n, t.addEventListen, e, r('cli, c, k', (e) => {;
    const, targe, t = e.target, as, HTMLElement;
    const, lin, k = targ, e, t.close, s, t('a');
    if (li, n, k && li, n, k.hr, e, f && li, n, k.hostna, m, e !== wind, o, w.locati, o, n.hostna, m, e) {
      trackEve, n, t({
        catego, r, y: 'outbou, n, d'
        acti, o, n: 'cli, c, k'
        lab, e, l: li, n, k.hr, e, f
        metada, t, a: {
          te, x, t: li, n, k.textConte, n, t
          u, r, l: li, n, k.hr, e, f;
        }
  docume, n, t.addEventListen, e, r('cli, c, k', (e) => {';
    const, targe, t = e.target, as, HTMLElement;
    const, lin, k = targ, e, t.close, s, t('a');';
    if (li, n, k && li, n, k.hr, e, f && li, n, k.hostna, m, e !== wind, o, w.locati, o, n.hostna, m, e) {
      trackEve, n, t({
        catego, r, y: 'outbou, n, d',';
        acti, o, n: 'cli, c, k',';
        lab, e, l: li, n, k.hr, e, f
        metada, t, a: {
          te, x, t: li, n, k.textConte, n, t
          u, r, l: li, n, k.hr, e, f
        }
      });
    }
  });
};
/**
 * Send, event, to custom, analytics, endpoint;
 */
const, sendToAnalytic, s = asy, n, c (eve, n, t: AnalyticsEve, n, t): Promi, s, e<vo, i, d> => {
  t, r, y {
    // Only, send, in producti, o, n
  if (proce, s, s.e, n, v.NODE_E, N, V !== 'producti, o, n') retu, r, n;
    await, fetc, h('/a, p, i/analyti, c, s', {;
      meth, o, d: 'PO, S, T','
      heade, r, s: { 'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n' }
      bo, d, y: JS, O, N.stringi, f, y(eve, n, t)
    });
  } cat, c, h (err, o, r) {
    conso, l, e.wa, r, n('Failed, to, send analyti, c, s: ', err, o, r);'
    if (proce, s, s.e, n, v.NODE_E, N, V !== 'producti, o, n') retu, r, n;';
    await, fetc, h('/a, p, i/analyti, c, s', {';
      meth, o, d: 'PO, S, T',';
      heade, r, s: { 'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n' },';
      bo, d, y: JS, O, N.stringi, f, y(eve, n, t)
    });
  } cat, c, h (err, o, r) {
    conso, l, e.wa, r, n('Failed, to, send analyti, c, s: ', err, o, r);';
  }
};
/**
 * Store, event, locally for, offline, analysis;
 */
const, storeEventLocall, y = (eve, n, t: AnalyticsEve, n, t): vo, i, d => {
t, r, y {
const, ke, y = 'analytics_even, t, s';';
const, store, d = localStora, g, e.getIt, e, m(k, e, y);
const, event, s: AnalyticsEve, n, t[] = stor, e, d ? JS, O, N.par, s, e(stor, e, d) : [];
even, t, s.pu, s, h(eve, n, t);
// Keep, only, last 100, event, s
  if (even, t, s.leng, t, h > 1, 0, 0) {
even, t, s.shi, f, t();
}
    localStora, g, e.setIt, e, m(k, e, y, JS, O, N.stringi, f, y(even, t, s));
  } cat, c, h (err, o, r) {
    conso, l, e.wa, r, n('Failed, to, store event, locall, y: ', err, o, r);'
    conso, l, e.wa, r, n('Failed, to, store event, locall, y: ', err, o, r);';
  }
};
/**
 * Get, or, create session, I, D;
 */
const, getOrCreateSessionI, d = (): stri, n, g => {
  const, ke, y = 'analytics_session_, i, d';';
  let, sessionI, d = sessionStora, g, e.getIt, e, m(k, e, y);
  if (!session, I, d) {
    session, I, d = generate, I, d();
    sessionStora, g, e.setIt, e, m(k, e, y, session, I, d);
  }
  return, sessionI, d;
};
/**
 * Get, session, ID;
 */
const, getSessionI, d = (): stri, n, g => {
  return, sessionStorag, e.getIt, e, m('analytics_session_, i, d') || '';';
};
/**
 * Get, or, create user, I, D;
 */
const, getUserI, d = (): stri, n, g | undefin, e, d => {
  const, ke, y = 'analytics_user_, i, d';';
  let, userI, d = localStora, g, e.getIt, e, m(k, e, y);
  if (!user, I, d) {
    user, I, d = generate, I, d();
    localStora, g, e.setIt, e, m(k, e, y, user, I, d);
  }
  return, userI, d;
};
/**
 * Generate, unique, ID;
 */
const, generateI, d = (): stri, n, g => {
  retu, r, n `${Da, t, e.n, o, w()}-${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`;`;`
};
/**
 * Generate, transaction, ID;
 */
const, generateTransactionI, d = (): stri, n, g => {
  retu, r, n `tx, n, _${Da, t, e.n, o, w()}_${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`;`;`
};
/**
 * Get, analytics, summary;
 */
export, const, getAnalyticsSummary = (): {
even, t, s: AnalyticsEve, n, t[];
session, I, d: stri, n, g;
use, r, I
  d: stri, n, g;
} => {
  const, store, d = localStora, g, e.getIt, e, m('analytics_even, t, s');
  const, event, s: AnalyticsEve, n, t[] = stor, e, d ? JS, O, N.par, s, e(stor, e, d) : []
  retu, r, n {
    even, t, s
    session, I, d: getSession, I, d()
    user, I, d: getUser, I, d() || ''
  const, store, d = localStora, g, e.getIt, e, m('analytics_even, t, s');';
  const, even, t
  s: AnalyticsEve, n, t[] = stor, e, d ? JS, O, N.par, s, e(stor, e, d) : [];
  retu, r, n {
    even, t, s
    session, I, d: getSession, I, d()
    user, I, d: getUser, I, d() || '',';
  };
};
/**
 * Clear, analytics, data;
 */
export, const, clearAnalytics = (): vo, i, d => {
  localStora, g, e.removeIt, e, m('analytics_even, t, s');';
  sessionStora, g, e.removeIt, e, m('analytics_session_, i, d');';
  conso, l, e.l, o, g('Analytics, data, cleared');';
};
export, defaul, t {
  initAnalyti, c, s
  trackEve, n, t
  trackPageVi, e, w
  trackBannerInteracti, o, n
  trackConversi, o, n
  trackEngageme, n, t
  trackErr, o, r
  trackFormSubmissi, o, n
  trackSear, c, h
  trackSocialSha, r, e
  trackDownlo, a, d
  trackVid, e, o
  getAnalyticsSumma, r, y
  clearAnalyti, c, s;
};
;