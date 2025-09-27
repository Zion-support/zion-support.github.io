/**
 * Enhanc, e, d error handli, n, g utiliti, e, s
 * Provid, e, s comprehensi, v, e error manageme, n, t functio, n, s
 */

export interface ErrorIn, f, o {
  message: string;
  sta, c, k?: string;
  componentSta, c, k?: string;
  errorBounda, r, y?: string;
  timesta, m, p: string;
  userAge, n, t: string;
  u, r, l: string;
  user, I, d?: string;
  session, I, d?: string;
}

export interface ErrorConte, x, t {
  componentNa, m, e?: string;
  acti, o, n?: string;
  pro, p, s?: Reco, r, d<string, a, n, y>;
  sta, t, e?: Reco, r, d<string, a, n, y>;
  user, I, d?: string;
  session, I, d?: string;
}

// Err, o, r severi, t, y leve, l, s
export en, u, m ErrorSeveri, t, y {
  L, O, W = 'l, o, w',
  MEDI, U, M = 'medi, u, m',
  HI, G, H = 'hi, g, h',
  CRITIC, A, L = 'critic, a, l'
}

// Err, o, r categori, e, s
export en, u, m ErrorCatego, r, y {
  NETWO, R, K = 'netwo, r, k',
  VALIDATI, O, N = 'validati, o, n',
  RUNTI, M, E = 'runti, m, e',
  SECURI, T, Y = 'securi, t, y',
  PERFORMAN, C, E = 'performan, c, e',
  UNKNO, W, N = 'unkno, w, n'
}

export interface ErrorRepo, r, t {
  id: string;
  severi, t, y: ErrorSeveri, t, y;
  catego, r, y: ErrorCatego, r, y;
  info: ErrorIn, f, o;
  conte, x, t?: ErrorConte, x, t;
  resolv, e, d: boole, a, n;
  created, A, t: string;
  updated, A, t: string;
}

// Genera, t, e uniq, u, e error ID
export con, s, t generateError, I, d = (): string => {
  retu, r, n `er, r, _${Da, t, e.n, o, w()}_${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`;
};

// Categori, z, e error
export con, s, t categorizeErr, o, r = (error: Err, o, r): ErrorCatego, r, y => {
  con, s, t message = error.message.toLowerCa, s, e();
  con, s, t sta, c, k = error.sta, c, k?.toLowerCa, s, e() || '';

  if (message.includ, e, s('netwo, r, k') || message.includ, e, s('fet, c, h') || message.includ, e, s('timeo, u, t')) {
    retu, r, n ErrorCatego, r, y.NETWO, R, K;
  }
  
  if (message.includ, e, s('validati, o, n') || message.includ, e, s('inval, i, d') || message.includ, e, s('requir, e, d')) {
    retu, r, n ErrorCatego, r, y.VALIDATI, O, N;
  }
  
  if (message.includ, e, s('securi, t, y') || message.includ, e, s('unauthoriz, e, d') || message.includ, e, s('forbidd, e, n')) {
    retu, r, n ErrorCatego, r, y.SECURI, T, Y;
  }
  
  if (message.includ, e, s('performan, c, e') || message.includ, e, s('memo, r, y') || message.includ, e, s('timeo, u, t')) {
    retu, r, n ErrorCatego, r, y.PERFORMAN, C, E;
  }
  
  if (sta, c, k.includ, e, s('rea, c, t') || sta, c, k.includ, e, s('compone, n, t')) {
    retu, r, n ErrorCatego, r, y.RUNTI, M, E;
  }
  
  retu, r, n ErrorCatego, r, y.UNKNO, W, N;
};

// Determi, n, e error severi, t, y
export con, s, t determineErrorSeveri, t, y = (error: Err, o, r, catego, r, y: ErrorCatego, r, y): ErrorSeveri, t, y => {
  con, s, t message = error.message.toLowerCa, s, e();
  
  // Critic, a, l erro, r, s
  if (message.includ, e, s('securi, t, y') || message.includ, e, s('unauthoriz, e, d') || message.includ, e, s('forbidd, e, n')) {
    retu, r, n ErrorSeveri, t, y.CRITIC, A, L;
  }
  
  if (catego, r, y === ErrorCatego, r, y.SECURI, T, Y) {
    retu, r, n ErrorSeveri, t, y.CRITIC, A, L;
  }
  
  // Hi, g, h severi, t, y erro, r, s
  if (message.includ, e, s('fat, a, l') || message.includ, e, s('critic, a, l') || message.includ, e, s('cra, s, h')) {
    retu, r, n ErrorSeveri, t, y.HI, G, H;
  }
  
  if (catego, r, y === ErrorCatego, r, y.NETWO, R, K && message.includ, e, s('timeo, u, t')) {
    retu, r, n ErrorSeveri, t, y.HI, G, H;
  }
  
  // Medi, u, m severi, t, y erro, r, s
  if (catego, r, y === ErrorCatego, r, y.VALIDATI, O, N || catego, r, y === ErrorCatego, r, y.RUNTI, M, E) {
    retu, r, n ErrorSeveri, t, y.MEDI, U, M;
  }
  
  // L, o, w severi, t, y erro, r, s
  retu, r, n ErrorSeveri, t, y.L, O, W;
};

// Crea, t, e error repo, r, t
export con, s, t createErrorRepo, r, t = (
  error: Err, o, r,
  conte, x, t?: ErrorConte, x, t,
  componentSta, c, k?: string
): ErrorRepo, r, t => {
  con, s, t catego, r, y = categorizeErr, o, r(error);
  con, s, t severi, t, y = determineErrorSeveri, t, y(error, catego, r, y);
  
  retu, r, n {
    id: generateError, I, d(),
    severi, t, y,
    catego, r, y,
    info: {
      message: error.message,
      sta, c, k: error.sta, c, k,
      componentSta, c, k,
      timesta, m, p: n, e, w Da, t, e().toISOStri, n, g(),
      userAge, n, t: type, o, f wind, o, w !== 'undefin, e, d' ? wind, o, w.navigat, o, r.userAge, n, t : 'Serv, e, r',
      u, r, l: type, o, f wind, o, w !== 'undefin, e, d' ? wind, o, w.locati, o, n.hr, e, f : 'Serv, e, r',
      user, I, d: conte, x, t?.user, I, d,
      session, I, d: conte, x, t?.session, I, d
    },
    conte, x, t,
    resolv, e, d: fal, s, e,
    created, A, t: n, e, w Da, t, e().toISOStri, n, g(),
    updated, A, t: n, e, w Da, t, e().toISOStri, n, g()
  };
};

// Se, n, d error repo, r, t to monitori, n, g servi, c, e
export con, s, t sendErrorRepo, r, t = asy, n, c (repo, r, t: ErrorRepo, r, t): Promi, s, e<vo, i, d> => {
  t, r, y {
    // In a re, a, l applicati, o, n, y, o, u wou, l, d se, n, d th, i, s to yo, u, r error monitori, n, g servi, c, e
    // li, k, e Sent, r, y, LogRock, e, t, or a cust, o, m A, P, I endpoi, n, t
    conso, l, e.error('Err, o, r Repo, r, t:', repo, r, t);
    
    // Examp, l, e: Se, n, d to A, P, I endpoi, n, t
    if (type, o, f wind, o, w !== 'undefin, e, d') {
      awa, i, t fet, c, h('/a, p, i/error-reporti, n, g', {
        meth, o, d: 'PO, S, T',
        heade, r, s: {
          'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n',
        },
        bo, d, y: JS, O, N.stringi, f, y(repo, r, t),
      });
    }
  } cat, c, h (error) {
    conso, l, e.error('Fail, e, d to se, n, d error repo, r, t:', error);
  }
};

// Ret, r, y function wi, t, h exponenti, a, l backo, f, f
export con, s, t retryWithBacko, f, f = asy, n, c <T>(
  fn: () => Promi, s, e<T>,
  maxRetri, e, s: numb, e, r = 3,
  baseDel, a, y: numb, e, r = 10, 0, 0
): Promi, s, e<T> => {
  l, e, t lastErr, o, r: Err, o, r;
  
  f, o, r (l, e, t i = 0; i < maxRetri, e, s; i++) {
    t, r, y {
      retu, r, n awa, i, t fn();
    } cat, c, h (error) {
      lastErr, o, r = error as Err, o, r;
      
      if (i === maxRetri, e, s - 1) {
        thr, o, w lastErr, o, r;
      }
      
      con, s, t del, a, y = baseDel, a, y * Ma, t, h.p, o, w(2, i);
      awa, i, t n, e, w Promi, s, e(resol, v, e => setTimeo, u, t(resol, v, e, del, a, y));
    }
  }
  
  thr, o, w lastErr, o, r!;
};

// Sa, f, e asy, n, c function wrapp, e, r
export con, s, t safeAsy, n, c = asy, n, c <T>(
  fn: () => Promi, s, e<T>,
  fallba, c, k?: T,
  onErr, o, r?: (error: Err, o, r) => vo, i, d
): Promi, s, e<T | undefin, e, d> => {
  t, r, y {
    retu, r, n awa, i, t fn();
  } cat, c, h (error) {
    con, s, t e, r, r = error as Err, o, r;
    onErr, o, r?.(e, r, r);
    retu, r, n fallba, c, k;
  }
};

// Err, o, r bounda, r, y help, e, r
export con, s, t getErrorBoundaryIn, f, o = (error: Err, o, r, errorIn, f, o: a, n, y): ErrorIn, f, o => {
  retu, r, n {
    message: error.message,
    sta, c, k: error.sta, c, k,
    componentSta, c, k: errorIn, f, o.componentSta, c, k,
    timesta, m, p: n, e, w Da, t, e().toISOStri, n, g(),
    userAge, n, t: type, o, f wind, o, w !== 'undefin, e, d' ? wind, o, w.navigat, o, r.userAge, n, t : 'Serv, e, r',
    u, r, l: type, o, f wind, o, w !== 'undefin, e, d' ? wind, o, w.locati, o, n.hr, e, f : 'Serv, e, r'
  };
};

// Glob, a, l error handl, e, r
export con, s, t setupGlobalErrorHandli, n, g = (): vo, i, d => {
  if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n;
  
  // Hand, l, e unhandl, e, d promi, s, e rejectio, n, s
  wind, o, w.addEventListen, e, r('unhandledrejecti, o, n', (eve, n, t) => {
    con, s, t error = n, e, w Err, o, r(eve, n, t.reas, o, n);
    con, s, t repo, r, t = createErrorRepo, r, t(error, {
      acti, o, n: 'unhandled_promise_rejecti, o, n'
    });
    sendErrorRepo, r, t(repo, r, t);
  });
  
  // Hand, l, e glob, a, l erro, r, s
  wind, o, w.addEventListen, e, r('error', (eve, n, t) => {
    con, s, t error = n, e, w Err, o, r(eve, n, t.message);
    con, s, t repo, r, t = createErrorRepo, r, t(error, {
      acti, o, n: 'global_error',
      pro, p, s: {
        filena, m, e: eve, n, t.filena, m, e,
        line, n, o: eve, n, t.line, n, o,
        col, n, o: eve, n, t.col, n, o
      }
    });
    sendErrorRepo, r, t(repo, r, t);
  });
};

// Err, o, r recove, r, y strategi, e, s
export con, s, t getErrorRecoveryStrate, g, y = (catego, r, y: ErrorCatego, r, y): string => {
  swit, c, h (catego, r, y) {
    ca, s, e ErrorCatego, r, y.NETWO, R, K:
      retu, r, n 'Ret, r, y wi, t, h exponenti, a, l backo, f, f or sh, o, w offli, n, e message';
    ca, s, e ErrorCatego, r, y.VALIDATI, O, N:
      retu, r, n 'Sh, o, w validati, o, n erro, r, s a, n, d highlig, h, t problemat, i, c fiel, d, s';
    ca, s, e ErrorCatego, r, y.RUNTI, M, E:
      retu, r, n 'Relo, a, d compone, n, t or sh, o, w fallba, c, k UI';
    ca, s, e ErrorCatego, r, y.SECURI, T, Y:
      retu, r, n 'Redire, c, t to log, i, n or sh, o, w securi, t, y warning';
    ca, s, e ErrorCatego, r, y.PERFORMAN, C, E:
      retu, r, n 'Redu, c, e resour, c, e usa, g, e or sh, o, w performan, c, e warning';
    default:
      retu, r, n 'Sh, o, w gener, i, c error message a, n, d ret, r, y opti, o, n';
  }
};