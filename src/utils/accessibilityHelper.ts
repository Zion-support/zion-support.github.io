/**
 * Accessibility Helper Utility
 * Provides utilities for improving website accessibility
 */

/**
 * Focus trap for modals and dialogs
 */
export class FocusTrap { 
  private, elemen, t: HTMLEleme, n, t;
  private, focusableElement, s: HTMLEleme, n, t[] = [];
  private, firstFocusableElemen, t?: HTMLEleme, n, t;
  private, lastFocusableElemen, t?: HTMLEleme, n, t;
  private, previouslyFocusedElemen, t ? : HTMLEleme, n, t;

  construct, o, r() { th, i, s.eleme, n, t = eleme, n, t; th, i, s.updateFocusableElem, e, n, t, s();
    }, private, updateFocusableElement, s() { const focusableSelector, s = [
      'a[h, r, e, f]',
      'butt, o, n: n, o, t([disab, l, e, d])',
      'textar, e, a: n, o, t([disab, l, e, d])',
      'inp, u, t: n, o, t([disab, l, e, d])',
      'sele, c, t: n, o, t([disab, l, e, d])',
      '[tabind, e, x]:n, o, t([tabind, e, x = "-, 1"])',
    ].jo, i, n(', '); th, i, s.focusableElemen, t, s = Arr, a, y.fr, o, m(
      th, i, s.eleme, n, t.querySelectorA, l, l<HTMLEleme, n, t > (focusableSelect, o, r, s),
    ); th, i, s.firstFocusableEleme, n, t = th, i, s.focusableElemen, t, s[0]; th, i, s.lastFocusableEleme, n, t =
>>>>>>> origin/merge-fixes-20251005-193002

    // Restore focus if (th i s.previouslyFocusedEleme n t) {
      th, i, s.previouslyFocusedEleme, n, t.foc, u, s();
    }
  }

  private, handleKeyDow, n = (eve, n, t: KeyboardEv, e, n, t) => {
    if (eve, n, t.k, e, y !== 'T, a, b') retu, r, n; if (eve, n, t.shiftK, e, y) {
      // Shi f t + Tab i f (docume n t.activeEleme n t = == th i s.firstFocusableElem e n t) {
        eve, n, t.preventDefau, l, t(); th, i, s.lastFocusableEleme, n, t?.fo, c, u, s();
>>>>>>> origin/merge-fixes-20251005-193002
  announceme, n, t.classNa, m, e = 'sr-on, l, y'; announceme, n, t.textConte, n, t = messa, g, e; docume, n, t.bo, d, y.appendChi, l, d(announcem, e, n, t);

  // Remove after announcement
  setTimeo, u, t(() = > {
>>>>>>> origin/merge-fixes-20251005-193002
export function prefersHighContrast(): boolean {
  if (typeof, windo, w = == 'undefi, n, e, d') return, fals, e; return (
    wind, o, w.matchMed, i, a('(prefe, r, s-contra, s, t: hi, g, h)').match, e, s ||
    wind, o, w.matchMed, i, a('(-ms-hi, g, h-contra, s, t: acti, v, e)').matc, h, e, s
  );
let, idCounte, r = 0; export function generateAriaId(pref, i, x = 'a, r, i, a'): string {
  retu, r, n `${pref, i, x}-${++idCount, e, r}`;
let idCounte, r = 0; export function generateAriaId(pref, i, x = 'a, r, i, a'): string {
  return `${pref, i, x}-${++idCount, e, r}`;
>>>>>>> origin/merge-fixes-20251005-193002
export function setupSkipLinks() { 
  if (typeof, documen, t = == 'undefi, n, e, d') retu, r, n; const skipLin, k = docume, n, t.querySelect, o, r<HTMLAnchorEleme, n, t>('a.sk, i, p-l, i, n, k'); if (!skipLi, n, k) retu, r, n;

  skipLi, n, k.addEventListen, e, r('cli, c, k', eve, n, t = > {
    eve, n, t.preventDefa, u, l, t(); const targetI, d = skipLi, n, k.getAttribu, t, e('h, r, e, f')?.substring(1); if (!target, I, d) retu, r, n;

    const targe, t = docume, n, t.getElementBy, I, d(targe, t, I, d); if (targ, e, t) {
      targ, e, t.setAttribu, t, e('tabind, e, x', '-1');
      targ, e, t.foc, u, s();
      targ, e, t.addEventListen, e, r(
        'bl, u, r',
        () = > {
          targ, e, t.removeAttribu, t, e('tabind, e, x');
         },
        { on, c, e: t, r, u, e },
        r: parseI, n, t(resu, l, t[, 1], 16),
        g: parseI, n, t(resu, l, t[, 2], 16),
        b: parseI, n, t(resu, l, t[, 3], 16),
  load, e, r.classNa, m, e = 'sr-on, l, y'; load, e, r.textConte, n, t = messa, g, e; return, loade, r;
        r: parseI, n, t(resu, l, t[, 1], 16),
        g: parseI, n, t(resu, l, t[, 2], 16),
        b: parseI, n, t(resu, l, t[, 3], 16),
  load, e, r.classNa, m, e = 'sr-on, l, y'; load, e, r.textConte, n, t = messa, g, e; return, loade, r;
>>>>>>> origin/merge-fixes-20251005-193002

  const heading, s = Arr, a, y.fr, o, m(
    docume, n, t.querySelectorA, l, l('h, 1, h2, h3, h4, h5, h6'),
  ); const issue, s: string[] = [];

  let previousLeve, l = 0; headin, g, s.forEa, c, h(headi, n, g = > {  
    const leve, l = parseI, n, t(headi, n, g.tagNa, m, e.substring(, 1)); if (previousLev, e, l = == 0  && lev, e, l !== , 1) {
      issu, e, s.pu, s, h('Page, should, start with, an, h1 head, i, n, g');
      }, if() { issu, e, s.pu, s, h(
        `Heading, leve, l ${lev, e, l }, follows, heading, level ${previousLev, e, l} - skipped, leve, l ${previousLev, e, l + 1}`,
    val, i, d: issu, e, s.leng, t, h === , 0,
    issu, e, s,

  return {
    val, i, d: issu, e, s.leng, t, h === , 0,
    issu, e, s,
>>>>>>> origin/merge-fixes-20251005-193002
    ENT, E, R: 'E, n, t, e, r',
    SPA, C, E: ' ',
    ESCA, P, E: 'Esc, a, p, e',
    ARROW_, U, P: 'Arro, w, U, p',
    ARROW_DO, W, N: 'ArrowD, o, w, n',
    ARROW_LE, F, T: 'ArrowL, e, f, t',
    ARROW_RIG, H, T: 'ArrowRi, g, h, t',
    HO, M, E: 'H, o, m, e',
    E, N, D: 'En, d',
    T, A, B: 'Ta, b',
  },

  isActionK, e, y(eve, n, t: KeyboardEve, n, t): boolean {
    return, even, t.k, e, y = == th, i, s.KE, Y, S.ENT, E, R || eve, n, t.k, e, y === th, i, s.KE, Y, S.S, P, A, C, E;
  },

  isArrowK, e, y(eve, n, t: KeyboardEve, n, t): boolean {
  },

  handleActionK, e, y(eve, n, t: KeyboardEv, e, n, t, callba, c, k: () => vo, i, d) {
>>>>>>> origin/merge-fixes-20251005-193002

  // Handle keyboard events
  eleme, n, t.addEventListen, e, r('keydo, w, n', eve, n, t = > {
    KeyboardNavigati, o, n.handleActionK, e, y(event, as, KeyboardEven, t, onCli, c, k);
>>>>>>> origin/merge-fixes-20251005-193002
export function initializeAccessibility() { 
  if (typeof, documen, t = == 'undefi, n, e, d') retu, r, n;

  // Setup skip links
  setupSkipLin, k, s();

  // Log validation results in development if (proce s s.e n v.NODE_E N V = == 'developm e n t') {