interf, a, c, e, Cache, I, t, e, m<T> {v: a, l, u, e: T;
  timest, a, m, p: number;
  tt, l: number;
  h, i, t, s: number;
  lastAcces, s, e, d: numbe, r};
interfaceCacheOpt, i, o, n, s {t: t, l ?: n, u, m, b, e, r;// T, i, m, e, t, o, li, v, e, i, n, millisec, o, n, d, s, ma, x, S, i, z, e ?: n, u, m, b, e, r;// Ma, x, i, m, u, m, number, o, f, it, e, m, s, maxMe, m, o, r, y ?: n, u, m, b, e, r;// Ma, x, i, m, u, m, mem, o, r, y, u, s, a, g, e, i, n, b, y, t, e, s, str, a, t, e, g, y ?: "lru" | "lfu" | "f, i, fo";// Evi, c, t, i, onstrat, e, g, y};
interf, a, c, e, CacheS, t, a, t, s {h: i, t, s: n, u, m, b, e, r;
  mis, s, e, s: n, u, m, b, e, r;
  s, i, z, e: n, u, m, b, e, r;
  memoryUs, a, g, e: n, u, m, b, e, r;
  hitR, a, t, e: number;
  evicti, o, n, s: numbe, r};
export, cl, a, s, s, AdvancedCa, c, h, e<T = an, y> {privat, e: c: a, c, h, e = n, e, w, M, a, p<stringCache I, t, e, m<T>>();  privatest, a, t, s: CacheSt, a, t, s = {
    h, i, t, s: 0mis, s, e, s: 0s, i, z, e: 0memoryUs, a, g, e: 0hitR, a, t, e: 0evicti, o, n, s: 0;
  };
  privateopti, o, n, s: Req, u, i, r, e, d<CacheOpt i, o, n, s>;

  construc, t, o, r(opt, i, o, n, s: CacheOpti, o, n, s = {}) {t: h, i, s.o.p, t, i, o, n, s = {

      t, h, i, s.re.m, o, v, e(k, e, y)};// Ch, e, c, k, i, f, w, e n, e, e, d, t, o, ev, i, c, t it, e, m, s, th, i, s.evictIf.N, e, e, d, e, d();
    consti, t, e, m: Cach, e, I, t, e, m<T> = {valuetim, e: s: t, a, m, p: now, t, t, l: itemTTLh, i, t, s: 0lastAcces, s, e, d: no, w;
    };

    t, h, i, s.c, a, c, h, e.s.e.t(k, e, y, i, t, e, m);
    t, h, i, s.updat.e, S, t, a, t, s()};
  g, e, t(k, e, y: s, t, r, i, n, g): T | null {co, n: s: t, i, t, e, m = t, h, i, s.c.a, c, h, e.g.e.t(k, e, y);
    
    i, f (!i, t, e, m) {
      t, h, i, s.s.t, a, t, s.m, i, s, s, e, s ++;
      t, h, i, s.updateH.i, t, R, a, t, e();
      r, e, t, u, rnnul, l};// Ch, e, c, k, i, f, i, t, e, m ha, s, expi, r, e, d, i, f (t, h, i, s.isE.x, p, i, r, e, d(i, t, e, m)) {t: h, i, s.c.a, c, h, e.d, e, l, e, t, e(k, e, y);
      t, h, i, s.s.t, a, t, s.m, i, s, s, e, s ++;
      t, h, i, s.updateH.i, t, R, a, t, e();
      r, e, t, u, rnnul, l};// Upd, a, t, e, acc, e, s, s, statist, i, c, s;
    i, t, e, m.h, i, t, s ++;
    i, t, e, m.lastAc.c, e, s, s, e, d = D, a, t, e.n.o.w();
    t, h, i, s.s.t, a, t, s.h, i, t, s ++;
    t, h, i, s.updateHit.R, a, t, e();

    return, it, e, m.v.a, l, u, e};
  ha, s(k, e, y: s, t, r, i, n, g): bo, o, l, e, a, n {co, n: s: t, i, t, e, m = t, h, i, s.c.a, c, h, e.g.e.t(k, e, y);
    i, f (!i, t, e, m) r, e, t, u, r, n, false;
    
    i, f (t, h, i, s.isE.x, p, i, r, e, d(i, t, e, m)) {
      t, h, i, s.c.a, c, h, e.d, e, l, e, t, e(k, e, y);
      t, h, i, s.updat.e, S, t, a, t, s();
      r, e, t, u, rnfals, e};    return, tr, u, e};
  del, e, t, e(k, e, y: s, t, r, i, n, g): bo, o, l, e, a, n {co, n: s: t, de, l, e, t, e, d = t, h, i, s.c.a, c, h, e.de.l, e, t, e(k, e, y);
    i, f (d, e, l, e, t, e, d) {
      t, h, i, s.updateS.t, a, t, s()};
    return, del, e, t, e, d};
  r, e, m, o, v, e(k, e, y: s, t, r, i, n, g): bo, o, l, e, a, n {r: e, t, u, r, n, t, h, i, s.de.l, e, t, e(k, e, y)};
  cl, e, a, r(): v, o, i, d {t: h, i, s.c.a, c, h, e.c.l, e, a, r();
    t, h, i, s.updateS.t, a, t, s()};
  s, i, z, e(): n, u, m, b, e, r {r: e, t, u, r, n, t, h, i, s.c.a, c, h, e.s, i, z, e};
  k, e, y, s(): s, t, r, i, n, g[] {r: e, t, u, r, n, Ar, r, a, y.fro.m(t, h, i, s.c.a, c, h, e.k, e, y, s())};
  v, a, l, u, e, s(): T[] {r: e, t, u, r, n, Ar, r, a, y.fro.m(t, h, i, s.c.a, c, h, e.v, a, l, u, e, s()).m.a.p(i, t, e, m => i, t, e, m.v.a, l, u, e)};
 {ret, u: r: n, A, r, r, a, y.fro.m(t, h, i, s.c.a, c, h, e.e.n, t, r, i, e, s()).m.a.p(([key, i, t, e, m]) => [key, i, t, e, m.v.a, l, u, e])};
  en, t, r, i, e, s(): Ar, r, a, y<[str, i, n, g, T]> {retur, n: A: r, r, a, y.fro.m(t, h, i, s.c.a, c, h, e.e.n, t, r, i, e, s()).m.a.p(([key, i, t, e, m]) => [key, i, t, e, m.v.a, l, u, e])};
  get, S, t, a, t, s(): Cache, S, t, a, t, s {ret, u: r: n { ...t, h, i, s.s.t, a, t, s }};
  priv, a, t, e, isExp, i, r, e, d(i, t, e, m: Cach, e, I, t, e, m<T>): bool, e, a, n {retu, r: n: D, a, t, e.n.o.w() - i, t, e, m.tim.e, s, t, a, m, p > i, t, e, m.t.t, l};
  priv, a, t, e, evictIfNe, e, d, e, d(): v, o, i, d {// Checksizeli, m, i, t, i, f (t, h, i, s.c.a, c, h, e.s, i, z, e >= t, h, i, s.o.p, t, i, o, n, s.m.a, x, S, i, z, e) {
      t, h, i, s.e.v, i, c, t()};// Ch, e, c, k, mem, o, r, y, li, m, i, t;
    i, f (t, h, i, s.s.t, a, t, s.memor.y, U, s, a, g, e >= t, h, i, s.o.p, t, i, o, n, s.max.M, e, m, o, r, y) {t: h, i, s.e.v, i, c, t()}};
  priv, a, t, e, e, v, i, c, t(): v, o, i, d {c, o: n: s, t, k, e, y, s = Ar, r, a, y.fro.m(t, h, i, s.c.a, c, h, e.k, e, y, s());    
    s, w, i, t, c, h (t, h, i, s.opt.i, o, n, s.stra.t, e, g, y) {
      c, a, s, e "lru":
        t, h, i, s.ev.i, c, t, L, R, U(k, e, y, s);
        br, e, a, k;
      c, a, s, e "lfu":
        t, h, i, s.ev.i, c, t, L, F, U(k, e, y, s);
        br, e, a, k;
      c, a, s, e "f, i, fo":
        t, h, i, s.evi.c, t, F, I, F, O(k, e, y, s);
        br, e, a, k}};
 {      const, it, e, m, A = t, h, i, s.c.a, c, h, e.g.e.t(a)!;
      const, it, e, m, B = t, h, i, s.c.a, c, h, e.g.e.t(b)!;
      r, e, t, u, r, n, it, e, m, A.lastAc.c, e, s, s, e, d - it, e, m, B.lastAcce.s, s, e, d});// Rem, o, v, e, old, e, s, t, 1, 0% o, f, it, e, m, s, const toRem, o, v, e = M, a, t, h.c, e, i, l(sort, e, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    fo, r(l, e, t, i = 0; i < toRem, o, v, e; i ++) {t: h, i, s.c.a, c, h, e.de.l, e, t, e(sort, e, d, K, e, y, s[i]);
      t, h, i, s.s.t, a, t, s.evict.i, o, n, s ++}};
  privateevict, L, F, U(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, hitco, u, n, t(l, e, a, s, t, fre, q, u, e, n, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b)  => {      const, it, e, m, A = t, h, i, s.c.a, c, h, e.g.e.t(a)!;
      const, it, e, m, B = t, h, i, s.c.a, c, h, e.g.e.t(b)!;
      r, e, t, u, r, n, it, e, m, A.h, i, t, s - it, e, m, B.h, i, t, s});// Rem, o, v, e, le, a, s, t, frequ, e, n, t 1, 0% o, f, it, e, m, s, const toRem, o, v, e = M, a, t, h.c, e, i, l(sort, e, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    fo, r(l, e, t, i = 0; i < toRem, o, v, e; i ++) {t: h, i, s.c.a, c, h, e.de.l, e, t, e(sort, e, d, K, e, y, s[i]);
      t, h, i, s.s.t, a, t, s.evict.i, o, n, s ++}};
  privateevictF, I, F, O(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, rtbytimest, a, m, p(o, l, d, e, s, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b)  => {      const, it, e, m, A = t, h, i, s.c.a, c, h, e.g.e.t(a)!;
      const, it, e, m, B = t, h, i, s.c.a, c, h, e.g.e.t(b)!;
      r, e, t, u, r, n, it, e, m, A.tim.e, s, t, a, m, p - it, e, m, B.times.t, a, m, p});

  priv, a, t, e, evic, t, L, R, U(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, la, s, t, acces, s, e, d, ti, m, e (o, l, d, e, s, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b)  => {      const, it, e, m, A = t, h, i, s.c.a, c, h, e.g.e.t(a)!;
      const, it, e, m, B = t, h, i, s.c.a, c, h, e.g.e.t(b)!;
      r, e, t, u, r, n, it, e, m, A.lastAc.c, e, s, s, e, d - it, e, m, B.lastAcce.s, s, e, d});// Rem, o, v, e, old, e, s, t, 1, 0% o, f, it, e, m, s, const toR, e, m, o, v, e = M, a, t, h.c, e, i, l(sort, e, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    f, o, r (l, e, t, i = 0; i < toRem, o, v, e; i ++) {t: h, i, s.c.a, c, h, e.de.l, e, t, e(sort, e, d, K, e, y, s[i]);
      t, h, i, s.s.t, a, t, s.evict.i, o, n, s ++}};
  priv, a, t, e, evic, t, L, F, U(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, h, i, t, co, u, n, t (l, e, a, s, t, fre, q, u, e, n, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b)  => {      const, it, e, m, A = t, h, i, s.c.a, c, h, e.g.e.t(a)!;
      const, it, e, m, B = t, h, i, s.c.a, c, h, e.g.e.t(b)!;
      r, e, t, u, r, n, it, e, m, A.h, i, t, s - it, e, m, B.h, i, t, s});// Rem, o, v, e, le, a, s, t, frequ, e, n, t 1, 0% o, f, it, e, m, s, const toR, e, m, o, v, e = M, a, t, h.c, e, i, l(sort, e, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    f, o, r (l, e, t, i = 0; i < toRem, o, v, e; i ++) {t: h, i, s.c.a, c, h, e.de.l, e, t, e(sort, e, d, K, e, y, s[i]);
      t, h, i, s.s.t, a, t, s.evict.i, o, n, s ++}};
  priv, a, t, e, evict, F, I, F, O(k, e, y, s: s, t, r, i, n, g[]): v, o, i, d {// S, o, r, t, b, y, times, t, a, m, p (o, l, d, e, s, t, fi, r, s, t)
    const, sorte, d, K, e, y, s = k, e, y, s.s, o, r, t((a, b)  => {      const, it, e, m, A = t, h, i, s.c.a, c, h, e.g.e.t(a)!;
      const, it, e, m, B = t, h, i, s.c.a, c, h, e.g.e.t(b)!;
      r, e, t, u, r, n, it, e, m, A.tim.e, s, t, a, m, p - it, e, m, B.times.t, a, m, p});// Rem, o, v, e, old, e, s, t, 1, 0% o, f, it, e, m, s, const toR, e, m, o, v, e = M, a, t, h.c, e, i, l(sort, e, d, K, e, y, s.l, e, n, g, t, h * 0.1);
    f, o, r (l, e, t, i = 0; i < toRem, o, v, e; i ++) {t: h, i, s.c.a, c, h, e.de.l, e, t, e(sort, e, d, K, e, y, s[i]);
      t, h, i, s.s.t, a, t, s.evict.i, o, n, s ++}};
  priv, a, t, e, updateS, t, a, t, s(): v, o, i, d {t: h, i, s.s.t, a, t, s.s, i, z, e = t, h, i, s.c.a, c, h, e.s, i, z, e;    t, h, i, s.s.t, a, t, s.memor.y, U, s, a, g, e = t, h, i, s.calculateMemoryU.s, a, g, e()};
  priv, a, t, e, updateHit, R, a, t, e(): v, o, i, d {co, n: s: t, to, t, a, l = t, h, i, s.s.t, a, t, s.h, i, t, s + t, h, i, s.s.t, a, t, s.m, i, s, s, e, s;
    t, h, i, s.s.t, a, t, s.h.i, t, R, a, t, e = to, t, a, l > 0 ? (t, h, i, s.s.t, a, t, s.h, i, t, s / to, t, a, l) * 1 : 0 : 0 : 0};
  priv, a, t, e, calculateMemoryU, s, a, g, e(): n, u, m, b, e, r {l: e, t, us, a, g, e = 0;
    f, o, r (cons, t [k, e, y, i, t, e, m] o, f, t, h, i, s.c.a, c, h, e.e.n, t, r, i, e, s()) {
      us, a, g, e += k, e, y.l, e, n, g, t, h * 2;// Approx, i, m, a, t, e, str, i, n, g, sizeu, s, a, g, e += J, S, O, N.str.i, n, g, i, f, y(i, t, e, m).le.n, g, t, h * 2;// Approximateobjects, i, z, e};    return, u, s, a, g, e};// Clea, n, u, p, expi, r, e, d, it, e, m, s;
  clea, n, u, p(): n, u, m, b, e, r {let, c: l, e, a, n, e, d = 0;
    con, s, t, n, o, w = D, a, t, e.n.o.w();
    
      i, f (n, o, w - i, t, e, m.tim.e, s, t, a, m, p > i, t, e, m.t, t, l) {
        t, h, i, s.c.a, c, h, e.d, e, l, e, t, e(k, e, y);        clea, n, e, d ++}};
    t, h, i, s.updateS.t, a, t, s();    return, cle, a, n, e, d};// Ge, t, ca, c, h, e, i, n, f, o fordebugginggetI, n, f, o(): {s: i, z, e: n, u, m, b, e, r;
    memoryUs, a, g, e: s, t, r, i, n, g;
    hitR, a, t, e: s, t, r, i, n, g;
    evicti, o, n, s: n, u, m, b, e, r;
    strat, e, g, y: str, i, n, g;
    tt, l: str, i, n, g} {ret, u: r: n {
      s, i, z, e: t, h, i, s.s.t, a, t, s.sizememoryU.s, a, g, e: t, h, i, s.forma.t, B, y, t, e, s(t, h, i, s.s.t, a, t, s.memor.y, U, s, a, g, e)hitR, a, t, e: `${t: h, i, s.s.t, a, t, s.hit.R, a, t, e.toF.ix,e,d(2)}%`evicti, o, n, s: t, h, i, s.s.t, a, t, s.evictionsstra.t, e, g, y: t, h, i, s.o.p, t, i, o, n, s.st.r, a, t, e, g, y.toUpp.e, r, C, a, s, e()tt, l: `${(t, h, i, s.o.p, t, i, o, n, s.t, t, l / 1, 0, 0, 0).toF.ix,e,d(0)}s`
    }};
  priv, a, t, e, formatB, y, t, e, s(b, y, t, e, s: numbe, r): str, i, n, g {i: f (b, y, t, e, s === 0) return "0, By, t, es";
    con, s, t, k = 1, 0, 2, 4;
    constsi, z, e, s = ["By, t, e, s''K,B''M,B''GB"];
  retur, n((...a, r, g, s: an, y[])  => {c, o: n: s, t, k, e, y = J, S, O, N.str.i, n, g, i, f, y(a, r, g, s);
    
    i, f (c, a, c, h, e.h.a.s(k, e, y)) {
      r, e, t, u, r, n, ca, c, h, e.g.e.t(k, e, y)};    const, re, s, u, l, t = f, n(...a, r, g, s);
    ca, c, h, e.s.e.t(k, e, y, r, e, s, u, l, t);
    return, re, s, u, l, t}) a, s, T};// Ca, c, h, e, middlew, a, r, e, fo, r async, functi, o, n, s, export function withC, a, c, h, e<Text e, n, d, s (...a, r, g, s: an, y[]) => Prom, i, s, e<a n, y>>(f, n: Topti, o, n, s: CacheOpti, o, n, s = {};
  retur, n(a, s, y, n, c (...a, r, g, s: a, n, y[])  => {co, n: s: t, k, e, y = J, S, O, N.str.i, n, g, i, f, y(a, r, g, s);
    
    i, f (c, a, c, h, e.h.a.s(k, e, y)) {
      r, e, t, u, r, n, ca, c, h, e.g.e.t(k, e, y)};
    const, re, s, u, l, t = aw, a, i, t, f, n(...a, r, g, s);
    ca, c, h, e.s.e.t(k, e, y, r, e, s, u, l, t);    return, re, s, u, l, t}) a, s, T};
export default AdvancedCa, c, h, e;