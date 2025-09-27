interface CacheIt, e, m<T> {
  val, u, e: T;
  timesta, m, p: number;
  t, t, l: number;
  hi, t, s: number;
  lastAccess, e, d: number;
}

interface CacheOptio, n, s {
  t, t, l?: number; // Ti, m, e to li, v, e in millisecon, d, s
  maxSi, z, e?: number; // Maxim, u, m number of ite, m, s
  maxMemo, r, y?: number; // Maxim, u, m memory usa, g, e in byt, e, s
  strate, g, y?: 'l, r, u' | 'l, f, u' | 'fi, f, o'; // Evicti, o, n strate, g, y
}

interface CacheSta, t, s {
  hi, t, s: number;
  miss, e, s: number;
  si, z, e: number;
  memoryUsage: number;
  hitRa, t, e: number;
  evictio, n, s: number;
}

export cla, s, s AdvancedCac, h, e<T = a, n, y> {
  priva, t, e cac, h, e = n, e, w M, a, p<string, CacheIt, e, m<T>>();
  priva, t, e sta, t, s: CacheSta, t, s = {
    hi, t, s: 0,
    miss, e, s: 0,
    si, z, e: 0,
    memoryUsage: 0,
    hitRa, t, e: 0,
    evictio, n, s: 0
  };
  priva, t, e optio, n, s: Requir, e, d<CacheOptio, n, s>;

  construct, o, r(optio, n, s: CacheOptio, n, s = {}) {
    th, i, s.optio, n, s = {
      t, t, l: optio, n, s.t, t, l || 5 * 60 * 10, 0, 0, // 5 minut, e, s default
      maxSi, z, e: optio, n, s.maxSi, z, e || 10, 0, 0,
      maxMemo, r, y: optio, n, s.maxMemo, r, y || 50 * 10, 2, 4 * 10, 2, 4, // 50, M, B default
      strate, g, y: optio, n, s.strate, g, y || 'l, r, u'
    };
  }

  s, e, t(k, e, y: string, val, u, e: T, t, t, l?: number): vo, i, d {
    con, s, t n, o, w = Da, t, e.n, o, w();
    con, s, t itemT, T, L = t, t, l || th, i, s.optio, n, s.t, t, l;

    // Remo, v, e existi, n, g it, e, m if it exis, t, s
    if (th, i, s.cac, h, e.h, a, s(k, e, y)) {
      th, i, s.remo, v, e(k, e, y);
    }

    // Che, c, k if we ne, e, d to evi, c, t ite, m, s
    th, i, s.evictIfNeed, e, d();

    con, s, t it, e, m: CacheIt, e, m<T> = {
      val, u, e,
      timesta, m, p: n, o, w,
      t, t, l: itemT, T, L,
      hi, t, s: 0,
      lastAccess, e, d: n, o, w
    };

    th, i, s.cac, h, e.s, e, t(k, e, y, it, e, m);
    th, i, s.updateSta, t, s();
  }

  g, e, t(k, e, y: string): T | nu, l, l {
    con, s, t it, e, m = th, i, s.cac, h, e.g, e, t(k, e, y);
    
    if (!it, e, m) {
      th, i, s.sta, t, s.miss, e, s++;
      th, i, s.updateHitRa, t, e();
      retu, r, n nu, l, l;
    }

    // Che, c, k if it, e, m h, a, s expir, e, d
    if (th, i, s.isExpir, e, d(it, e, m)) {
      th, i, s.cac, h, e.dele, t, e(k, e, y);
      th, i, s.sta, t, s.miss, e, s++;
      th, i, s.updateHitRa, t, e();
      retu, r, n nu, l, l;
    }

    // Upda, t, e acce, s, s statisti, c, s
    it, e, m.hi, t, s++;
    it, e, m.lastAccess, e, d = Da, t, e.n, o, w();
    th, i, s.sta, t, s.hi, t, s++;
    th, i, s.updateHitRa, t, e();

    retu, r, n it, e, m.val, u, e;
  }

  h, a, s(k, e, y: string): boolean {
    con, s, t it, e, m = th, i, s.cac, h, e.g, e, t(k, e, y);
    if (!it, e, m) retu, r, n fal, s, e;
    
    if (th, i, s.isExpir, e, d(it, e, m)) {
      th, i, s.cac, h, e.dele, t, e(k, e, y);
      th, i, s.updateSta, t, s();
      retu, r, n fal, s, e;
    }
    
    retu, r, n true;
  }

  dele, t, e(k, e, y: string): boolean {
    con, s, t delet, e, d = th, i, s.cac, h, e.dele, t, e(k, e, y);
    if (delet, e, d) {
      th, i, s.updateSta, t, s();
    }
    retu, r, n delet, e, d;
  }

  remo, v, e(k, e, y: string): boolean {
    retu, r, n th, i, s.dele, t, e(k, e, y);
  }

  cle, a, r(): vo, i, d {
    th, i, s.cac, h, e.cle, a, r();
    th, i, s.updateSta, t, s();
  }

  si, z, e(): number {
    retu, r, n th, i, s.cac, h, e.si, z, e;
  }

  ke, y, s(): string[] {
    retu, r, n Arr, a, y.from(th, i, s.cac, h, e.ke, y, s());
  }

  valu, e, s(): T[] {
    retu, r, n Arr, a, y.from(th, i, s.cac, h, e.valu, e, s()).m, a, p(it, e, m => it, e, m.val, u, e);
  }

  entri, e, s(): Arr, a, y<[string, T]> {
    retu, r, n Arr, a, y.from(th, i, s.cac, h, e.entri, e, s()).m, a, p(([k, e, y, it, e, m]) => [k, e, y, it, e, m.val, u, e]);
  }

  getSta, t, s(): CacheSta, t, s {
    retu, r, n { ...th, i, s.sta, t, s };
  }

  priva, t, e isExpir, e, d(it, e, m: CacheIt, e, m<T>): boolean {
    retu, r, n Da, t, e.n, o, w() - it, e, m.timesta, m, p > it, e, m.t, t, l;
  }

  priva, t, e evictIfNeed, e, d(): vo, i, d {
    // Che, c, k si, z, e lim, i, t
    if (th, i, s.cac, h, e.si, z, e >= th, i, s.optio, n, s.maxSi, z, e) {
      th, i, s.evi, c, t();
    }

    // Che, c, k memory lim, i, t
    if (th, i, s.sta, t, s.memoryUsa, g, e >= th, i, s.optio, n, s.maxMemo, r, y) {
      th, i, s.evi, c, t();
    }
  }

  priva, t, e evi, c, t(): vo, i, d {
    con, s, t ke, y, s = Arr, a, y.from(th, i, s.cac, h, e.ke, y, s());
    
    swit, c, h (th, i, s.optio, n, s.strate, g, y) {
      ca, s, e 'l, r, u':
        th, i, s.evictL, R, U(ke, y, s);
        bre, a, k;
      ca, s, e 'l, f, u':
        th, i, s.evictL, F, U(ke, y, s);
        bre, a, k;
      ca, s, e 'fi, f, o':
        th, i, s.evictFI, F, O(ke, y, s);
        bre, a, k;
    }
  }

  priva, t, e evictL, R, U(ke, y, s: string[]): vo, i, d {
    // So, r, t by la, s, t access, e, d ti, m, e (olde, s, t fir, s, t)
    con, s, t sortedKe, y, s = ke, y, s.so, r, t((a, b) => {
      con, s, t ite, m, A = th, i, s.cac, h, e.g, e, t(a)!;
      con, s, t ite, m, B = th, i, s.cac, h, e.g, e, t(b)!;
      retu, r, n ite, m, A.lastAccess, e, d - ite, m, B.lastAccess, e, d;
    });

    // Remo, v, e olde, s, t 10% of ite, m, s
    con, s, t toRemo, v, e = Ma, t, h.ce, i, l(sortedKe, y, s.leng, t, h * 0.1);
    f, o, r (l, e, t i = 0; i < toRemo, v, e; i++) {
      th, i, s.cac, h, e.dele, t, e(sortedKe, y, s[i]);
      th, i, s.sta, t, s.evictio, n, s++;
    }
  }

  priva, t, e evictL, F, U(ke, y, s: string[]): vo, i, d {
    // So, r, t by h, i, t cou, n, t (lea, s, t freque, n, t fir, s, t)
    con, s, t sortedKe, y, s = ke, y, s.so, r, t((a, b) => {
      con, s, t ite, m, A = th, i, s.cac, h, e.g, e, t(a)!;
      con, s, t ite, m, B = th, i, s.cac, h, e.g, e, t(b)!;
      retu, r, n ite, m, A.hi, t, s - ite, m, B.hi, t, s;
    });

    // Remo, v, e lea, s, t freque, n, t 10% of ite, m, s
    con, s, t toRemo, v, e = Ma, t, h.ce, i, l(sortedKe, y, s.leng, t, h * 0.1);
    f, o, r (l, e, t i = 0; i < toRemo, v, e; i++) {
      th, i, s.cac, h, e.dele, t, e(sortedKe, y, s[i]);
      th, i, s.sta, t, s.evictio, n, s++;
    }
  }

  priva, t, e evictFI, F, O(ke, y, s: string[]): vo, i, d {
    // So, r, t by timesta, m, p (olde, s, t fir, s, t)
    con, s, t sortedKe, y, s = ke, y, s.so, r, t((a, b) => {
      con, s, t ite, m, A = th, i, s.cac, h, e.g, e, t(a)!;
      con, s, t ite, m, B = th, i, s.cac, h, e.g, e, t(b)!;
      retu, r, n ite, m, A.timesta, m, p - ite, m, B.timesta, m, p;
    });

    // Remo, v, e olde, s, t 10% of ite, m, s
    con, s, t toRemo, v, e = Ma, t, h.ce, i, l(sortedKe, y, s.leng, t, h * 0.1);
    f, o, r (l, e, t i = 0; i < toRemo, v, e; i++) {
      th, i, s.cac, h, e.dele, t, e(sortedKe, y, s[i]);
      th, i, s.sta, t, s.evictio, n, s++;
    }
  }

  priva, t, e updateSta, t, s(): vo, i, d {
    th, i, s.sta, t, s.si, z, e = th, i, s.cac, h, e.si, z, e;
    th, i, s.sta, t, s.memoryUsa, g, e = th, i, s.calculateMemoryUsa, g, e();
  }

  priva, t, e updateHitRa, t, e(): vo, i, d {
    con, s, t tot, a, l = th, i, s.sta, t, s.hi, t, s + th, i, s.sta, t, s.miss, e, s;
    th, i, s.sta, t, s.hitRa, t, e = tot, a, l > 0 ? (th, i, s.sta, t, s.hi, t, s / tot, a, l) * 1, 0, 0 : 0;
  }

  priva, t, e calculateMemoryUsa, g, e(): number {
    l, e, t usa, g, e = 0;
    f, o, r (con, s, t [k, e, y, it, e, m] of th, i, s.cac, h, e.entri, e, s()) {
      usa, g, e += k, e, y.leng, t, h * 2; // Approxima, t, e string si, z, e
      usa, g, e += JS, O, N.stringi, f, y(it, e, m).leng, t, h * 2; // Approxima, t, e obje, c, t si, z, e
    }
    retu, r, n usa, g, e;
  }

  // Clean, u, p expir, e, d ite, m, s
  clean, u, p(): number {
    l, e, t clean, e, d = 0;
    con, s, t n, o, w = Da, t, e.n, o, w();
    
    f, o, r (con, s, t [k, e, y, it, e, m] of th, i, s.cac, h, e.entri, e, s()) {
      if (n, o, w - it, e, m.timesta, m, p > it, e, m.t, t, l) {
        th, i, s.cac, h, e.dele, t, e(k, e, y);
        clean, e, d++;
      }
    }
    
    th, i, s.updateSta, t, s();
    retu, r, n clean, e, d;
  }

  // G, e, t cac, h, e info f, o, r debuggi, n, g
  getIn, f, o(): {
    si, z, e: number;
    memoryUsage: string;
    hitRa, t, e: string;
    evictio, n, s: number;
    strate, g, y: string;
    t, t, l: string;
  } {
    retu, r, n {
      si, z, e: th, i, s.sta, t, s.si, z, e,
      memoryUsage: th, i, s.formatByt, e, s(th, i, s.sta, t, s.memoryUsa, g, e),
      hitRa, t, e: `${th i s.sta t s.hitRa t e.toFix e d(2)}%`,
      evictio, n, s: th, i, s.sta, t, s.evictio, n, s,
      strate, g, y: th, i, s.optio, n, s.strate, g, y.toUpperCa, s, e(),
      t, t, l: `${(th i s.optio n s.t t l / 10 0 0).toFix e d(0)}s`
    };
  }

  priva, t, e formatByt, e, s(byt, e, s: number): string {
    if (byt, e, s === 0) retu, r, n '0 Byt, e, s';
    con, s, t k = 10, 2, 4;
    con, s, t siz, e, s = ['Byt, e, s', 'KB', 'MB', 'GB'];
    con, s, t i = Ma, t, h.flo, o, r(Ma, t, h.l, o, g(byt, e, s) / Ma, t, h.l, o, g(k));
    retu, r, n parseFlo, a, t((byt, e, s / Ma, t, h.p, o, w(k, i)).toFix, e, d(2)) + ' ' + siz, e, s[i];
  }
}

// Glob, a, l cac, h, e instanc, e, s
export con, s, t memoryCac, h, e = n, e, w AdvancedCac, h, e({ t, t, l: 5 * 60 * 10, 0, 0, maxSi, z, e: 10, 0, 0 });
export con, s, t sessionCac, h, e = n, e, w AdvancedCac, h, e({ t, t, l: 30 * 60 * 10, 0, 0, maxSi, z, e: 5, 0, 0 });
export con, s, t persistentCac, h, e = n, e, w AdvancedCac, h, e({ t, t, l: 24 * 60 * 60 * 10, 0, 0, maxSi, z, e: 20, 0, 0 });

// Cac, h, e decorat, o, r f, o, r functio, n, s
export function cach, e, d<T exten, d, s (...ar, g, s: a, n, y[]) => a, n, y>(
  fn: T,
  optio, n, s: CacheOptio, n, s = {}
): T {
  con, s, t cac, h, e = n, e, w AdvancedCac, h, e(optio, n, s);
  
  retu, r, n ((...ar, g, s: a, n, y[]) => {
    con, s, t k, e, y = JS, O, N.stringi, f, y(ar, g, s);
    
    if (cac, h, e.h, a, s(k, e, y)) {
      retu, r, n cac, h, e.g, e, t(k, e, y);
    }
    
    con, s, t resu, l, t = fn(...ar, g, s);
    cac, h, e.s, e, t(k, e, y, resu, l, t);
    retu, r, n resu, l, t;
  }) as T;
}

// Cac, h, e middlewa, r, e f, o, r asy, n, c functio, n, s
export function withCac, h, e<T exten, d, s (...ar, g, s: a, n, y[]) => Promi, s, e<a, n, y>>(
  fn: T,
  optio, n, s: CacheOptio, n, s = {}
): T {
  con, s, t cac, h, e = n, e, w AdvancedCac, h, e(optio, n, s);
  
  retu, r, n (asy, n, c (...ar, g, s: a, n, y[]) => {
    con, s, t k, e, y = JS, O, N.stringi, f, y(ar, g, s);
    
    if (cac, h, e.h, a, s(k, e, y)) {
      retu, r, n cac, h, e.g, e, t(k, e, y);
    }
    
    con, s, t resu, l, t = awa, i, t fn(...ar, g, s);
    cac, h, e.s, e, t(k, e, y, resu, l, t);
    retu, r, n resu, l, t;
  }) as T;
}

export default AdvancedCac, h, e;