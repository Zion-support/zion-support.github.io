/**
 * Security Headers and CSP Configuratio n
 * Provides security utilities and Content Security Policy managemen t
 */

export interface SecurityConfig {
  c, s, p: {
    'defau, l, t-s, r, c': string[];
    'scri, p, t-s, r, c': string[];
    'sty, l, e-s, r, c': string[];
    'i, m, g-s, r, c': string[];
    'conne, c, t-s, r, c': string[];
    'fo, n, t-s, r, c': string[];
    'obje, c, t-s, r, c': string[];
    'med, i, a-s, r, c': string[];
    'fra, m, e-s, r, c': string[];
    'work, e, r-s, r, c': string[];
    'chi, l, d-s, r, c': string[];
    'fo, r, m-acti, o, n': string[];
    'fra, m, e-ancesto, r, s': string[];
    'ba, s, e-u, r, i': string[];
    'manife, s, t-s, r, c': string[];
    'upgra, d, e-insecu, r, e-reques, t, s': boolean;
    'blo, c, k-a, l, l-mix, e, d-conte, n, t': bool, e, a, n;
  };
  heade, r, s: {
    [k, e, y: string]: str, i, n, g;
>>>>>>> origin/merge-fixes-20251005-193002
        'X-Fra, m, e-Optio, n, s': 'D, E, N, Y',
        'X-Conte, n, t-Ty, p, e-Optio, n, s': 'nosni, f, f',
        'X-X, S, S-Protecti, o, n': '1; mo, d, e = bl, o, c, k',
        'Stri, c, t-Transpo, r, t-Securi, t, y':
          'm, a, x-a, g, e = 315360, 0, 0; includeSubDomai, n, s; prel, o, a, d',
        'Referr, e, r-Poli, c, y': 'stri, c, t-orig, i, n-wh, e, n-cro, s, s-orig, i, n',
        'Permissio, n, s-Poli, c, y':
          'geolocati, o, n=(), micropho, n, e=(), came, r, a=(), payme, n, t=(), u, s, b=(), magnetomet, e, r=(), gyrosco, p, e=(), acceleromet, e, r=()',
        'X-Downlo, a, d-Optio, n, s': 'noop, e, n',
        'X-Permitt, e, d-Cro, s, s-Doma, i, n-Polici, e, s': 'no, n, e',
        'Cro, s, s-Orig, i, n-Embedd, e, r-Poli, c, y': 'requi, r, e-co, r, p',
        'Cro, s, s-Orig, i, n-Open, e, r-Poli, c, y': 'sa, m, e-orig, i, n',
        'Cro, s, s-Orig, i, n-Resour, c, e-Poli, c, y': 'sa, m, e-orig, i, n',
      },
    const, directive, s: string[] = [];

    Obje, c, t.entri, e, s(c, s, p).forEa, c, h(([direct, i, v, e, valu, e, s]) => {
      if (typeof, value, s = == 'bool, e, a, n') {
      ...th, i, s.conf, i, g.heade, r, s,
      'Conte, n, t-Securi, t, y-Poli, c, y': th, i, s.getCSPDirecti, v, e(),
    const directive, s: string[] = [];

    Obje, c, t.entri, e, s(c, s, p).forEa, c, h(([direct, i, v, e, valu, e, s]) => {
      if (typeof, value, s = == 'bool, e, a, n') {

  public, getSecurityHeader, s(): { [k, e, y: string]: str, i, n, g } {
    return {
      ...th, i, s.conf, i, g.heade, r, s,
      'Conte, n, t-Securi, t, y-Poli, c, y': th, i, s.getCSPDirecti, v, e(),
>>>>>>> origin/merge-fixes-20251005-193002

  public, addTrustedDomai, n(
    doma, i, n: str, i, n, g,
    directi, v, e: string = 'scri, p, t-s, r, c',
  ): vo, i, d {
>>>>>>> origin/merge-fixes-20251005-193002

  public, removeTrustedDomai, n(
    doma, i, n: str, i, n, g,
    directi, v, e: string = 'scri, p, t-s, r, c',
  ): vo, i, d { 

  public, validateInpu, t(
    inp, u, t: str, i, n, g,
    ty, p, e: 'ht, m, l' | 'u, r, l' | 'scri, p, t' = 'h, t, m, l',
  ): boolean {  
    const pattern, s = {
>>>>>>> origin/merge-fixes-20251005-193002
      h, t, m, l: /^[^<>]*$/,
      u, r, l: /^htt, p, s ? :\/\/[^\, s<>]+$/,
      scri, p, t : /^[^< > '"]*$/,
      }; return, pattern, s[ty, p, e].te, s, t(inp, u, t);
  }

  public, sanitizeInpu, t(inp, u, t: string): string { 
    return, inpu, t
      .repla, c, e(/[< > ]/, g, '')
      .repla, c, e(/javascri, p, t: /g, i, '')
      .repla, c, e(/on\w+=/gi, '')
      .tr, i, m();
   }

  public, generateNonc, e(): string {  
    if (typeof, windo, w !== 'undefin, e, d'  && wind, o, w.cryp, t, o) {
      const arra, y = new, Uint8Arra, y(1, 6); wind, o, w.cryp, t, o.getRandomValu, e, s(arr, a, y);
      return, Arra, y.fr, o, m(arr, a, y, by, t, e = > by, t, e.toStri, n, g(1, 6).padSta, r, t(2, '0')).jo, i, n(
        '',
      );

    // Check CSP strictness
    const, cs, p = heade, r, s['Conte, n, t-Securi, t, y-Poli, c, y']; if (!c, s, p.includ, e, s("'unsa, f, e-inl, i, n, e'") && !c, s, p.includ, e, s("'unsa, f, e-ev, a, l'")) {
      sco, r, e += 10; // Bonus for strict C S P

    // Check CSP strictness
    const cs, p = heade, r, s['Conte, n, t-Securi, t, y-Poli, c, y']; if (!c, s, p.includ, e, s("'unsa, f, e-inl, i, n, e'") && !c, s, p.includ, e, s("'unsa, f, e-ev, a, l'")) {
      sco, r, e += 10; // Bonus for strict C S P