interf, a, c, e, Cache, I, t, e, m<T> {va, l, u, e: T;
  timest, a, m, p: number;
  tt, l: number;
  h, i, t, s: number;
  lastAcces, s, e, d: number};
interfaceCacheOpt, i, o, n, s {t, t, l?: n, u, m, b, e, r; // T, i, m, e, t, o, li, v, e, i, n, millisec, o, n, d, s, ma, x, S, i, z, e?: n, u, m, b, e, r; // Ma, x, i, m, u, m, number, o, f, it, e, m, s, maxMe, m, o, r, y?: n, u, m, b, e, r; // Ma, x, i, m, u, m, mem, o, r, y, u, s, a, g, e, i, n, b, y, t, e, s, str, a, t, e, g, y?: "lr, u" | "lf, u" | "f, i, f, o"; // Evi, c, t, i, onstrat, e, g, y};
interf, a, c, e, CacheS, t, a, t, s {h, i, t, s: n, u, m, b, e, r;
  mis, s, e, s: n, u, m, b, e, r;
  s, i, z, e: n, u, m, b, e, r;
  memoryUs, a, g, e: n, u, m, b, e, r;
  hitR, a, t, e: number;
  evicti, o, n, s: number};
export, cl, a, s, s, AdvancedCa, c, h, e<T = an, y> {privateca, c, h, e = n, e, w, M, a, p<stringCacheI, t, e, m<T>>();  privatest, a, t, s: CacheSt, a, t, s = {
    h, i, t, s: 0mis, s, e, s: 0s, i, z, e: 0memoryUs, a, g, e: 0hitR, a, t, e: 0evicti, o, n, s: 0
  };
  privateopti, o, n, s: Req, u, i, r, e, d<CacheOpti, o, n, s>;

  construc, t, o, r(opti, o, n, s: CacheOpti, o, n, s = {}) {t, h, i, s.op, t, i, o, n, s = {

>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5, 7, 6, 3
      t, h, i, s.rem, o, v, e(ke, y)};
    // Ch, e, c, k, i, f, w, e n, e, e, d, t, o, ev, i, c, t it, e, m, s, th, i, s.evictIfN, e, e, d, e, d();
    consti, t, e, m: Cach, e, I, t, e, m<T> = {valuetimest, a, m, p: now, t, t, l: itemTTLh, i, t, s: 0lastAcces, s, e, d: no, w
    };

    t, h, i, s.c, a, c, h, e.s, e, t(k, e, y, i, t, e, m);
    t, h, i, s.update, S, t, a, t, s()};
  g, e, t(ke, y: s, t, r, i, n, g): T | null {const, i, t, e, m = t, h, i, s.ca, c, h, e.g, e, t(k, e, y);
    
    i, f (!i, t, e, m) {
      t, h, i, s.st, a, t, s.m, i, s, s, e, s++;
      t, h, i, s.updateHi, t, R, a, t, e();
      r, e, t, u, rnnull};
    // Ch, e, c, k, i, f, i, t, e, m ha, s, expi, r, e, d, i, f (t, h, i, s.isEx, p, i, r, e, d(i, t, e, m)) {t, h, i, s.ca, c, h, e.d, e, l, e, t, e(k, e, y);
      t, h, i, s.st, a, t, s.m, i, s, s, e, s++;
      t, h, i, s.updateHi, t, R, a, t, e();
      r, e, t, u, rnnull};    // Upd, a, t, e, acc, e, s, s, statist, i, c, s
    i, t, e, m.h, i, t, s++;
    i, t, e, m.lastAcc, e, s, s, e, d = D, a, t, e.no, w();
    t, h, i, s.st, a, t, s.h, i, t, s++;
    t, h, i, s.updateHitR, a, t, e();

    return, it, e, m.va, l, u, e};
  ha, s(ke, y: s, t, r, i, n, g): bo, o, l, e, a, n {const, i, t, e, m = t, h, i, s.ca, c, h, e.ge, t(k, e, y);
    i, f (!i, t, e, m) r, e, t, u, r, n, false;
    
    i, f (t, h, i, s.isEx, p, i, r, e, d(i, t, e, m)) {
      t, h, i, s.ca, c, h, e.d, e, l, e, t, e(k, e, y);
      t, h, i, s.update, S, t, a, t, s();
      r, e, t, u, rnfalse};    return, tr, u, e};
  del, e, t, e(ke, y: s, t, r, i, n, g): bo, o, l, e, a, n {const, de, l, e, t, e, d = t, h, i, s.ca, c, h, e.del, e, t, e(k, e, y);
    i, f (de, l, e, t, e, d) {
      t, h, i, s.updateSt, a, t, s()};
    return, del, e, t, e, d};
  r, e, m, o, v, e(ke, y: s, t, r, i, n, g): bo, o, l, e, a, n {r, e, t, u, r, n, t, h, i, s.del, e, t, e(ke, y)};
  cl, e, a, r(): v, o, i, d {t, h, i, s.ca, c, h, e.cl, e, a, r();
    t, h, i, s.updateSt, a, t, s()};
  s, i, z, e(): n, u, m, b, e, r {r, e, t, u, r, n, t, h, i, s.ca, c, h, e.s, i, z, e};
  k, e, y, s(): s, t, r, i, n, g[] {r, e, t, u, r, n, Ar, r, a, y.from(t, h, i, s.ca, c, h, e.k, e, y, s())};
  v, a, l, u, e, s(): T[] {r, e, t, u, r, n, Ar, r, a, y.from(t, h, i, s.ca, c, h, e.v, a, l, u, e, s()).m, a, p(i, t, e, m => i, t, e, m.va, l, u, e)};
 {return, A, r, r, a, y.from(t, h, i, s.ca, c, h, e.en, t, r, i, e, s()).ma, p(([keyi, t, e, m]) => [keyi, t, e, m.va, l, u, e])};
  en, t, r, i, e, s(): Ar, r, a, y<[stri, n, g, T]> {returnAr, r, a, y.from(t, h, i, s.ca, c, h, e.en, t, r, i, e, s()).ma, p(([keyi, t, e, m]) => [keyi, t, e, m.va, l, u, e])};
  get, S, t, a, t, s(): Cache, S, t, a, t, s {return { ...t, h, i, s.st, a, t, s }};
  priv, a, t, e, isExp, i, r, e, d(i, t, e, m: Cach, e, I, t, e, m<T>): bool, e, a, n {returnD, a, t, e.no, w() - i, t, e, m.time, s, t, a, m, p > i, t, e, m.tt, l};
  priv, a, t, e, evictIfNe, e, d, e, d(): v, o, i, d {// Checksizeli, m, i, t, i, f (t, h, i, s.ca, c, h, e.s, i, z, e >= t, h, i, s.op, t, i, o, n, s.ma, x, S, i, z, e) {
      t, h, i, s.ev, i, c, t()};
    // Ch, e, c, k, mem, o, r, y, li, m, i, t
    i, f (t, h, i, s.st, a, t, s.memory, U, s, a, g, e >= t, h, i, s.op, t, i, o, n, s.maxM, e, m, o, r, y) {t, h, i, s.ev, i, c, t()}};
  priv, a, t, e, e, v, i, c, t(): v, o, i, d {cons, t, k, e, y, s = Ar, r, a, y.from(t, h, i, s.ca, c, h, e.k, e, y, s());    
    s, w, i, t, c, h (t, h, i, s.opti, o, n, s.strat, e, g, y) {
      c, a, s, e "lr, u":
        t, h, i, s.evi, c, t, L, R, U(k, e, y, s);
        br, e, a, k;
      c, a, s, e "lf, u":
        t, h, i, s.evi, c, t, L, F, U(k, e, y, s);
        br, e, a, k;
      c, a, s, e "f, i, f, o":
        t, h, i, s.evic, t, F, I, F, O(k, e, y, s);
        br, e, a, k}};
 {      const, it, e, m, A = t, h, i, s.ca, c, h, e.ge, t(a)!;
      const, it, e, m, B = t, h, i, s.ca, c, h, e.ge, t(b)!;
      r, e, t, u, r, n, it, e, m, A.lastAcc, e, s, s, e, d - it, e, m, B.lastAcces, s, e, d});

    // Rem, o, v, e, old, e, s, t, 1, 0% o, f, it, e, m, s, const toRem, o, v, e = M, a, t, h.c, e, i, l(sorte, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    fo, r(l, e, t, i = 0; i < toRem, o, v, e; i++) {t, h, i, s.ca, c, h, e.del, e, t, e(sorte, d, K, e, y, s[i]);
      t, h, i, s.st, a, t, s.evicti, o, n, s++}};
  privateevict, L, F, U(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, hitco, u, n, t(le, a, s, t, fre, q, u, e, n, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b) => {      const, it, e, m, A = t, h, i, s.ca, c, h, e.ge, t(a)!;
      const, it, e, m, B = t, h, i, s.ca, c, h, e.ge, t(b)!;
      r, e, t, u, r, n, it, e, m, A.h, i, t, s - it, e, m, B.h, i, t, s});

    // Rem, o, v, e, le, a, s, t, frequ, e, n, t 1, 0% o, f, it, e, m, s, const toRem, o, v, e = M, a, t, h.c, e, i, l(sorte, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    fo, r(l, e, t, i = 0; i < toRem, o, v, e; i++) {t, h, i, s.ca, c, h, e.del, e, t, e(sorte, d, K, e, y, s[i]);
      t, h, i, s.st, a, t, s.evicti, o, n, s++}};
  privateevictF, I, F, O(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, rtbytimest, a, m, p(o, l, d, e, s, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b) => {      const, it, e, m, A = t, h, i, s.ca, c, h, e.ge, t(a)!;
      const, it, e, m, B = t, h, i, s.ca, c, h, e.ge, t(b)!;
      r, e, t, u, r, n, it, e, m, A.time, s, t, a, m, p - it, e, m, B.timest, a, m, p});

  priv, a, t, e, evic, t, L, R, U(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, la, s, t, acces, s, e, d, ti, m, e (o, l, d, e, s, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b) => {      const, it, e, m, A = t, h, i, s.ca, c, h, e.g, e, t(a)!;
      const, it, e, m, B = t, h, i, s.ca, c, h, e.g, e, t(b)!;
      r, e, t, u, r, n, it, e, m, A.lastAcc, e, s, s, e, d - it, e, m, B.lastAcces, s, e, d});

    // Rem, o, v, e, old, e, s, t, 1, 0% o, f, it, e, m, s, const toR, e, m, o, v, e = M, a, t, h.c, e, i, l(sorte, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    f, o, r (l, e, t, i = 0; i < toRem, o, v, e; i++) {t, h, i, s.ca, c, h, e.del, e, t, e(sorte, d, K, e, y, s[i]);
      t, h, i, s.st, a, t, s.evicti, o, n, s++}};
  priv, a, t, e, evic, t, L, F, U(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, h, i, t, co, u, n, t (le, a, s, t, fre, q, u, e, n, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b) => {      const, it, e, m, A = t, h, i, s.ca, c, h, e.g, e, t(a)!;
      const, it, e, m, B = t, h, i, s.ca, c, h, e.g, e, t(b)!;
      r, e, t, u, r, n, it, e, m, A.h, i, t, s - it, e, m, B.h, i, t, s});

    // Rem, o, v, e, le, a, s, t, frequ, e, n, t 1, 0% o, f, it, e, m, s, const toR, e, m, o, v, e = M, a, t, h.c, e, i, l(sorte, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    f, o, r (l, e, t, i = 0; i < toRem, o, v, e; i++) {t, h, i, s.ca, c, h, e.del, e, t, e(sorte, d, K, e, y, s[i]);
      t, h, i, s.st, a, t, s.evicti, o, n, s++}};
  priv, a, t, e, evict, F, I, F, O(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, times, t, a, m, p (o, l, d, e, s, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b) => {      const, it, e, m, A = t, h, i, s.ca, c, h, e.g, e, t(a)!;
      const, it, e, m, B = t, h, i, s.ca, c, h, e.g, e, t(b)!;
      r, e, t, u, r, n, it, e, m, A.time, s, t, a, m, p - it, e, m, B.timest, a, m, p});


    // Rem, o, v, e, old, e, s, t, 1, 0% o, f, it, e, m, s, const toR, e, m, o, v, e = M, a, t, h.c, e, i, l(sorte, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    f, o, r (l, e, t, i = 0; i < toRem, o, v, e; i++) {t, h, i, s.ca, c, h, e.del, e, t, e(sorte, d, K, e, y, s[i]);
      t, h, i, s.st, a, t, s.evicti, o, n, s++}};
  priv, a, t, e, updateS, t, a, t, s(): v, o, i, d {t, h, i, s.st, a, t, s.s, i, z, e = t, h, i, s.ca, c, h, e.s, i, z, e;    t, h, i, s.st, a, t, s.memory, U, s, a, g, e = t, h, i, s.calculateMemoryUs, a, g, e()};
  priv, a, t, e, updateHit, R, a, t, e(): v, o, i, d {const, to, t, a, l = t, h, i, s.st, a, t, s.h, i, t, s + t, h, i, s.st, a, t, s.m, i, s, s, e, s;
    t, h, i, s.st, a, t, s.hi, t, R, a, t, e = to, t, a, l > 0 ? (t, h, i, s.st, a, t, s.h, i, t, s / to, t, a, l) * 1 : 0 : 0 : 0};
  priv, a, t, e, calculateMemoryU, s, a, g, e(): n, u, m, b, e, r {l, e, t, us, a, g, e = 0;
    f, o, r (const [k, e, y, i, t, e, m] o, f, t, h, i, s.ca, c, h, e.en, t, r, i, e, s()) {
      us, a, g, e += k, e, y.l, e, n, g, t, h * 2; // Approx, i, m, a, t, e, str, i, n, g, sizeu, s, a, g, e += J, S, O, N.stri, n, g, i, f, y(i, t, e, m).len, g, t, h * 2; // Approximateobjects, i, z, e};    return, u, s, a, g, e};
  // Clea, n, u, p, expi, r, e, d, it, e, m, s
  clea, n, u, p(): n, u, m, b, e, r {letcl, e, a, n, e, d = 0;
    con, s, t, n, o, w = D, a, t, e.no, w();
    
      i, f (n, o, w - i, t, e, m.time, s, t, a, m, p > i, t, e, m.t, t, l) {
        t, h, i, s.ca, c, h, e.d, e, l, e, t, e(ke, y);        clea, n, e, d++}};
    t, h, i, s.updateSt, a, t, s();    return, cle, a, n, e, d};
  // Ge, t, ca, c, h, e, i, n, f, o fordebugginggetI, n, f, o(): {s, i, z, e: n, u, m, b, e, r;
    memoryUs, a, g, e: s, t, r, i, n, g;
    hitR, a, t, e: s, t, r, i, n, g;
    evicti, o, n, s: n, u, m, b, e, r;
    strat, e, g, y: str, i, n, g;
    tt, l: str, i, n, g} {return {
      s, i, z, e: t, h, i, s.st, a, t, s.sizememoryUs, a, g, e: t, h, i, s.format, B, y, t, e, s(t, h, i, s.st, a, t, s.memory, U, s, a, g, e)hitR, a, t, e: `${t, h, i, s.st, a, t, s.hitR, a, t, e.toFi, x, e, d(2)}%`evicti, o, n, s: t, h, i, s.st, a, t, s.evictionsstrat, e, g, y: t, h, i, s.op, t, i, o, n, s.str, a, t, e, g, y.toUppe, r, C, a, s, e()tt, l: `${(t, h, i, s.op, t, i, o, n, s.t, t, l/1, 0, 0, 0).toFi, x, e, d(0)}s`
    }};
  priv, a, t, e, formatB, y, t, e, s(by, t, e, s: number): str, i, n, g {i, f (by, t, e, s === 0) return "0, By, t, e, s";
    con, s, t, k = 1, 0, 2, 4;
    constsi, z, e, s = ["By, t, e, s''K, B''M, B''G, B"];
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5, 7, 6, 3

// Ca, c, h, e, decora, t, o, r, fo, r functi, o, n, s, export, function cac, h, e, d<Texte, n, d, s (...a, r, g, s: an, y[]) => an, y>(f, n: Topti, o, n, s: CacheOpti, o, n, s = {};
  return ((...a, r, g, s: an, y[]) => {cons, t, k, e, y = J, S, O, N.stri, n, g, i, f, y(a, r, g, s);
    
    i, f (ca, c, h, e.h, a, s(k, e, y)) {
      r, e, t, u, r, n, ca, c, h, e.ge, t(ke, y)};    const, re, s, u, l, t = f, n(...a, r, g, s);
    ca, c, h, e.se, t(k, e, y, r, e, s, u, l, t);
    return, re, s, u, l, t}) a, s, T};
// Ca, c, h, e, middlew, a, r, e, fo, r async, functi, o, n, s, export function, withC, a, c, h, e<Texte, n, d, s (...a, r, g, s: an, y[]) => Prom, i, s, e<an, y>>(f, n: Topti, o, n, s: CacheOpti, o, n, s = {};
  return (a, s, y, n, c (...a, r, g, s: a, n, y[]) => {const, k, e, y = J, S, O, N.stri, n, g, i, f, y(a, r, g, s);
    
    i, f (ca, c, h, e.h, a, s(k, e, y)) {
      r, e, t, u, r, n, ca, c, h, e.ge, t(ke, y)};
    const, re, s, u, l, t = aw, a, i, t, f, n(...a, r, g, s);
    ca, c, h, e.s, e, t(k, e, y, r, e, s, u, l, t);    return, re, s, u, l, t}) a, s, T};
export default AdvancedCa, c, h, e;