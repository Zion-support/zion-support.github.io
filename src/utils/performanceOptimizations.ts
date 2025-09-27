/**
 * Performa, n, c, e, optimizat, i, o, n, utilit, i, e, s;
 * Provi, d, e, s, vari, o, u, s, performance enhancem, e, n, t, function s;
 */// Image, optimizat, i, o, n, utilit, i, e, s;
export, const, optimizeImage = (s, r, c: s, t, r, i, n, g, w, i, d, t, h ?: n, u, m, b, e, r, he, i, g, h, t ?: numberqual, i, t, y: n, u, m, b, e, r = 7, 5): s, t, r, i, n, g  => {i: f (!sr, c) return '";
  
    return, s, r, c};// Fo, r, exter, n, a, l, images, y, o, u mi, g, h, t, w, a, n, t, t, o us, e, a, serv, i, c, e l, i, k, e, Cloudin, a, r, y, o, r N, e, x, t.j, s, Image, return sr, c};// L, a, z, y, load, i, n, g, util, i, t, y;
 {i: f (typeofwi, n, d, ow === "undefi, ne,d' || !("IntersectionObser, v, er"i, n === w, i, n, d, o, w)) {
    returnnul, l};

export, const, createIntersectionObser, v, e, r = (call, b, a, c, k: IntersectionObserverCallbackopti, o, n, s: IntersectionObserverI, n, i, t = {};
): IntersectionObser, v, e, r | null  => {i: f (typeofwi, n, d, o, w === "unde, f, i, n, ed' || !("IntersectionObser, v, e, r"i, n === win, d, o, w)) {    returnnul, l};

  returnnewIntersectionObser, v, e, r(call, b, a, c, k{root, M: a: r, g, i, n: "5, 0, p, x"thresh, o, l, d: 0.1...opt.i, o, n, s;
  })};// Debou, n, c, e, util, i, t, y, fo, r performance, export, const deb, o, u, n, c, e = <Text e, n, d, s (...a, r, g, s: an, y[]) => an, y>(f, u, n, c: Tw, a, i, t: number;
) => v, o, i, d)  => {lett, i: m: e, o, u, t: N, o, d, e, J, S.T.i, m, e, o, u, t;
): ((...a, r, g, s: Param, e, t, e, r, s<T>) => v, o, i, d)  => {lett, i: m: e, o, u, t: Nod, e, J, S.Tim.e, o, u, t;

  
  retur, n(...a, r, g, s: Param, e, t, e, r, s<T>)  => {
    clearTime, o, u, t(tim, e, o, u, t);
    time, o, u, t = setTime, o, u, t(() => f, u, n, c(...a, r, g, s)w, a, i, t)}};// Throt, t, l, e, util, i, t, y, fo, r performance, a, n, y>(f, u, n, c: Tli, m, i, t: n, u, m, b, e, r;
): ((...a, r, g, s: Param, e, t, e, r, s<T>) => v, o, i, d)  => {letinTh, r: o: t, t, l, e: bool, e, a, n;

exportconstthrot, t, l, e = <Text e, n, d, s (...a, r, g, s: an, y[]) => an, y>(f, u, n, c: Tli, m, i, t: n, u, m, b, e, r;
): ((...a, r, g, s: Param, e, t, e, r, s<T>) => v, o, i, d)  => {letinTh, r: o: t, t, l, e: bool, e, a, n;

  
  retur, n(...a, r, g, s: Paramet, e, r, s<T>)  => {
    i, f (!inThrot, t, l, e) {
      f, u, n, c(...a, r, g, s);
      inThr, o, t, t, l, e = true;
      setTi, m, e, o, u, t(()  => (inTh, r, o, t, t, l, e = fals, e)li, m, i, t)}}};// Mem, o, r, y, us, a, g, e, monitoring;
export, const, getMemoryUs, a, g, e = (): {u: s, e, d: number;
  to, t, a, l: number;
  percent, a, g, e: numbe, r} | null  => {i: f (typeofwi, n, d, ow === "undefi, n, e, d" || !("mem, o, ry"i, n === performanc, e)) {
    returnnul, l};
  const, me, m, o, r, y = (performanc, e, a, s, a, n, y).mem.o, r, y;
  const, us, e, d = memo, r, y.usedJSHe.a, p, S, i, z, e;
  const, t, o, t, a, l = memo, r, y.totalJSHe.a, p, S, i, z, e;
  const, percen, t, a, g, e = (u, s, e, d / to, t, a, l) * 1, 0, 0;
  
  return {usedtotalperc, e: n: t, a, g, e }};// Bun, d, l, e, s, i, z, e, analy, z, e, r;
export, const, analyzeBundleS, i, z, e = (): v, o, i, d  => {i: f (ty, p, e, o, f === win, d, o, w === "undefi, n, ed") r, e, t, u, r, n;
  
  co, n, stscri, p, t, s = document.querySelecto.r, A, l, l("scr, i, p, t[s, r, c]");
  lettota, l, S, i, z, e = 0;
  
  sc, r, i, p, t, s.f.o, r, E, a, c, h(sc, r, i, p, t  => {
    const, s, r, c = scr, i, p, t.getAttri.b, u, t, e("src");    i, f (s, r, c && sr, c.incl.u, d, e, s("_next / sta, t, ic")) {// T, h, isisasimplifiedch, e, c, k - inreality, y, o, u"dneedtofetchandmeasurecons, o, l, e.l.o.g(`Scr, i, p, t:${s: r,c}`)}});// Prel, o, a, d, criti, c, a, l, resour, c, e, s;
export, const, preloadCriticalResour, c, e, s = (): v, o, i, d  => {i: f (typ, e, o, f === win, d, ow === "undefi, n, e, d") r, e, t, u, r, n;
  
  constcriticalResour, c, es = ["/ fo, n, t, s / in, t, e, r.w.o, f, f, 2""/ ima, g, e, s / h, e, r, o - b, g.w, e, bp""/ ima, g, e, s / l, o, g, o.s.vg"
  ];
  
  criticalReso, u, r, c, e, s.f.o, r, E, a, c, h(re, s, o, u, r, c, e  => {
    const, link = document.createEle.m, e, n, t("link");
    link.r.el = "prel, o, a, d";    link.h, r, e, f = resou, r, c, e;
    link.a, s = resou, r, c, e.ends.W, i, t, h(".w.o, f, f, 2") ? "f, o, nt" : "image";
    i, f (reso, u, r, c, e.ends.W, i, t, h(".w.o, f, f, 2")) {
      link.crossOr.i, g, in = "anonym, o, u, s"};
    document.hea.d.appendC.h, i, l, d(lin, k)})};// Serv, i, c, e, Wor, k, e, r, registrat, i, o, n fo, r, cach, i, n, g, export constregisterServiceWor, k, e, r = asyn, c(): Prom, i, s, e<v, o, i, d>  => {i: f (typeofwi, n, d, ow === "undefi, n, e, d" || !("serviceWor, k, er"i, n === naviga, t, o, r)) {
    retur, n};
  tr, y {co, n: s: t, registr, a, t, i, o, n = awaitnaviga, t, o, r.serviceWo.r, k, e, r.regi.s, t, e, r("/ s, w.js");
    cons, o, l, e.l.o.g("ServiceWorkerregisteredsuccessfu, l, l, y:"registrat, i, o, n)} ca, t, c, h (e, r, r, o, r) {c, o: n: s, o, l, e.e.r, r, o, r("ServiceWorkerregistrationfai, l, e, d:"er, r, o, r)}};// Performa, n, c, e, monitoring, export constmonitorPerforma, n, c, e = (): v, o, i, d  => {i: f (ty, p, e, o, f === win, d, o, w === "unde, f, i, n, ed") r, e, t, u, r, n;// MonitorC, o, r, e, WebVitalsconst, obser, v, e, r = newPerformanceObs, e, r, v, e, r((l, i, s, t)  => {
    l, i, s, t.getE.n, t, r, i, e, s().for.E, a, c, h((e, n, t, r, y)  => {
      i, f (e, n, t, r, y.entry.T, y, p, e === "la, r, g, e, s, t - conte, n, t, f, u, l - pa, i, nt") {
        cons, o, l, e.l.o.g("LC, P:"en, t, r, y.start.T, i, m, e)} els, e, i, f (e, n, t, r, y.entry.T, y, p, e === "fi, r, s, t - in, p, ut") {c, o: n: s, o, l, e.l.o.g("FI, D:", (entr, y, a, s, a, n, y).processingS.t, a, r, t - en, t, r, y.start.T, i, m, e)} els, e, i, f (e, n, t, r, y.entry.T, y, p, e === "l, a, y, o, u, t - sh, i, ft") {c, o: n: s, o, l, e.l.o.g("CL, S:"(entrya, s, a, n, y).v.a, l, u, e)}})});
    obser, v, e, r.obs.e, r, v, e({entr, y: T: y, p, e, s: ["la, r, g, e, s, t - content, f, u, l - pa, i, nt""fi, r, s, t - in, p, ut""lay, o, u, t - sh, i, ft"] })};// Resou, r, c, e, hi, n, t, s, export const, addResourceH, i, n, t, s = (): v, o, i, d  => {i: f (ty, p, e, o, f === win, d, o, w === "undefi, n, ed") return;
  
  consthi, n, t, s = [{ re, l: "dn, s - prefe, t, ch"h, r, e, f: "http, s:// fonts.googleapi.s.co.m"}{r: e, l: "dn, s - prefe, t, ch"h, r, e, f: "ht, t, p, s:// fo, n, t, s.gst.a, t, i, c.c.om"}{r: e, l: "preconn, e, ct"h, r, e, f: "http, s:// fonts.googleapi.s.co.m"}{r: e, l: "preconn, e, ct"h, r, e, f: "ht, t, p, s:// fo, n, t, s.gst.a, t, i, c.c.om"crossori, g, i, n: "anonym, o, us" }];
    hi, n, t, s.f.o, r, E, a, c, h(h, i, n, t  => {c: o, n, stlink = document.createEle.m, e, n, t("link");
    O, b, j, e, c, t.e.n, t, r, i, e, s(h, i, n, t).f.o, r, E, a, c, h(([k, e, y, va, l, u, e])  => {
      link.setAtt.r, i, b, u, t, e(k, e, y, va, l, u, easstr, i, n, g)});
    document.hea.d.appen.d, C, h, i, l, d(lin, k)})};