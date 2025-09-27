/**
>>>>> ori, g, i, n / cur, s, o, r / ch, e, c, k - fi, x - p, u, s, h - an, d - me, r, g, e - t, o - m, a, i, n - 1, 6, 4, 2;
 * Comprehens, i, v, e er, r, o, r handl, i, n, g utilit, i, e, s;
 * Provi, d, e, s comprehens, i, v, e er, r, o, r managem, e, n, t functi, o, n, s;
 */ export interf, a, c, e ErrorI, n, f, o {{co, n: s: t, errorI, n, f, o: Erro, r, I, n, f, o = {

  constr, u, c, t, o, r(mes, s, a, g, e: stringsever, i, t, y: ErrorSev, e, r, i, t, y = ErrorSev, e, r, i, t, y.MEDIUMcate.g, o, r, y: ErrorCat, e, g, o, r, y = ErrorCat, e, g, o, r, y.UNKNOWNc.o, n, t, e, x, t ?: ErrorCo, n, t, e, x, t;
  ) {s: u, p, e, r(m, e, s, s, a, g, e);
    t, h, i, s.n, a, m, e = "EnhancedEr, r, or";
    t, h, i, s.se.v, e, r, i, t, y = sev, e, r, i, t, y;
    t, h, i, s.ca.t, e, g, o, r, y = cat, e, g, o, r, y;
    t, h, i, s.c.o, n, t, e, x, t = co, n, t, e, x, t;
    t, h, i, s.tim.e, s, t, a, m, p = n, e, w, D, a, t, e().toISO.S, t, r, i, n, g();
    t, h, i, s.u, s, e, r, I, d = co, n, t, e, x, t ?.u, s, e, r, I, d;
    t, h, i, s.ses.s, i, o, n, I, d = cont, e, x, t ?.sessi.o, n, I, d}};// Er, r, o, r, logg, i, n, g, util, i, t, y;
export, const, logEr, r, o, r = (e, r, r, o, r: Er, r, o, r | Enhanced, E, r, r, o, r, co, n, t, e, x, t ?: ErrorCo, n, t, e, x, t): v, o, i, d  => {c: o, n, sterrorI, n, f, o: Erro, r, I, n, f, o = {
    mess, a, g, e: er, r, o, r.m.e, s, s, a, gest, a, c, k: er, r, o, r.stacktimes.t, a, m, p: ne, w, D, a, t, e().toISO.S, t, r, i, n, g()userAg, e, n, t: navi, g, a, t, o, r.userAgen.t, u, r, l: w, i, n, d, o, w.lo.c, a, t, i, o, n.hrefus.e, r, I, d: co, n, t, e, x, t ?.userIdsessi.o, n, I, d: co, n, t, e, x, t ?.sessi.o, n, I, d  };// Lo, g, t, o, cons, o, l, e i, n, developm, e, n, t, i, f (p, r, o, c, e, s, s.e, n, v.NODE._, E, N, V === "developm, e, nt") {c: o, n, s, o, l, e.e.r, r, o, r("Errorlog, g, e, d:"errorI, n, f, o)};// I, n, productions, e, n, d, t, o er, r, o, r, track, i, n, g, serv, i, c, e;
  i, f (p, r, o, c, e, s, s.e, n, v.NODE._, E, N, V === "product, i, on") {// S, e, n, d, t, o, e, r, r, o, r, track, i, n, g, ser, v, i, c, e (e.g., SentryLogRock, e, t, e, t, c.)// T, h, i, s, i, s, aplaceho, l, d, e, r - implementy, o, u, r, preferrederrortrackingserv, i, c, e;
    cons, o, l, e.e.r, r, o, r("Productioner, r, o, r:"errorI, n, f, o)}};// Er, r, o, r, bound, a, r, y, hel, p, e, r;
export, const, createErrorI, n, f, o = (e, r, r, o, r: Er, r, orerrorI, n, f, o: React.Err.o, r, I, n, f, o): Erro, r, I, n, f, o  => {ret, u: r: n {
    mess, a, g, e: er, r, o, r.m.e, s, s, a, gest, a, c, k: er, r, o, r.s.t, a, ckcomponentSt, a, c, k: erro, r, I, n, f, o.componen.t, S, t, a, cktimest, a, m, p: n, e, w, D, a, t, e().toISO.S, t, r, i, n, g(),
    userAg, e, n, t: navi, g, a, t, o, r.use.r, A, g, e, nt, u, r, l: w, i, n, d, o, w.lo.c, a, t, i, o, n.h, r, e, f;
  }};// Re, t, r, y, util, i, t, y, fo, r fai, l, e, d, operati, o, n, s, export const, retryOpera, t, i, o, n = async <T>(opera, t, i, o, n: () => Prom, i, s, e<T>maxRetr, i, e, s: n, u, m, b, e, r = 3,
  de, l, a, y: n, u, m, b, e, r = 1, 0, 0, 0;
): Pr, o, m, i, s, e<T>  => {letlas, t: E: r, r, o, r: E, r, r, o, r;

  f, o, r (l, e, t, at, t, e, m, p, t = 1; at, t, e, m, p, t <= maxRetr, i, e, s; atte, m, p, t ++) {
    t, r, y {
      r, e, t, u, r, n, awaitoperat, i, o, n()} ca, t, c, h (e, r, r, o, r) {l, a: s: t, E, r, r, o, r = er, r, o, r, a, s, E, r, r, o, r;
      
      i, f (a, t, t, e, m, p, t === maxRe, t, r, i, e, s) {
        th, r, o, w, ne, w, EnhancedE, r, r, o, r(`Operationfailed, a, f, t, e, r ${maxR, e: t: r, i, e, s} attem, p, t, s:${l, a: s: t, E, r, r, o, r.mes.sa,g,e}`ErrorSev, e, r, i, t, y.HIGHErrorCa.t, e, g, o, r, y.R.U, N, T, I, M, E;
        )};// W, a, i, t, bef, o, r, e, retry, i, n, g;
      aw, a, i, t, ne, w, Prom, i, s, e(r, e, s, o, l, v, e => setTi, m, e, o, u, t(resolv, e, d, e, l, a, y * at, t, e, m, p, t))}};
  th, r, o, w, lastE, r, r, o, r!};// Glo, b, a, l, er, r, o, r, handl, i, n, g se, t, u, p, export, const setupGlobalErrorHandl, i, n, g = ()  => {i: f (typeofwi, n, d, o, w !== "unde, f, i, n, ed") {
    win, d, o, w.addEventList.e, n, e, r("er, r, or"(e, v, e, n, t)  => {
      log, E, r, r, o, r(e, v, e, n, t.e.r, r, o, r{
        componentN, a, m, e: "G, l, o, b, a, l'act, i, o, n: "unhandled_er, r, o, r"
      })});

    win, d, o, w.addEventList.e, n, e, r("unhandledreject, i, o, n"(e, v, e, n, t)  => {l: o: g, E, r, r, o, r(newE, r, r, o, r(e, v, e, n, t.re.a, s, o, n){
        componentN, a, m, e: "Glo, b, a, l"act, i, o, n: "unhandled_promise_reject, i, o, n"      })})}};