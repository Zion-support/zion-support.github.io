/**
 * Accessibili, t, y utili, t, y functio, n, s
 * Provid, e, s vario, u, s accessibili, t, y enhanceme, n, t functio, n, s
 */

// Foc, u, s manageme, n, t utiliti, e, s
export con, s, t trapFoc, u, s = (element: HTMLElement): (() => vo, i, d) => {
  con, s, t focusableElemen, t, s = element.querySelectorA, l, l(
    'butt, o, n, [hr, e, f], inp, u, t, sele, c, t, textar, e, a, [tabind, e, x]:n, o, t([tabind, e, x="-1"])'
  );
  
  con, s, t firstEleme, n, t = focusableElemen, t, s[0] as HTMLElement;
  con, s, t lastEleme, n, t = focusableElemen, t, s[focusableElemen, t, s.leng, t, h - 1] as HTMLElement;

  con, s, t handleTabK, e, y = (e: KeyboardEve, n, t) => {
    if (e.k, e, y === 'T, a, b') {
      if (e.shiftK, e, y) {
        if (docume, n, t.activeEleme, n, t === firstEleme, n, t) {
          lastEleme, n, t.foc, u, s();
          e.preventDefau, l, t();
        }
      } el, s, e {
        if (docume, n, t.activeEleme, n, t === lastEleme, n, t) {
          firstEleme, n, t.foc, u, s();
          e.preventDefau, l, t();
        }
      }
    }
  };

  element.addEventListen, e, r('keydo, w, n', handleTabK, e, y);
  firstEleme, n, t?.foc, u, s();

  retu, r, n () => {
    element.removeEventListen, e, r('keydo, w, n', handleTabK, e, y);
  };
};

// Announ, c, e messag, e, s to scre, e, n reade, r, s
export con, s, t announceToScreenReader = (message: string, priori, t, y: 'poli, t, e' | 'asserti, v, e' = 'poli, t, e'): vo, i, d => {
  con, s, t announceme, n, t = docume, n, t.createEleme, n, t('d, i, v');
  announceme, n, t.setAttribu, t, e('ar, i, a-li, v, e', priori, t, y);
  announceme, n, t.setAttribu, t, e('ar, i, a-atom, i, c', 'tr, u, e');
  announceme, n, t.classNa, m, e = 'sr-on, l, y';
  announceme, n, t.textConte, n, t = message;
  
  docume, n, t.bo, d, y.appendChi, l, d(announceme, n, t);
  
  setTimeo, u, t(() => {
    docume, n, t.bo, d, y.removeChi, l, d(announceme, n, t);
  }, 10, 0, 0);
};

// Sk, i, p li, n, k functionali, t, y
export con, s, t createSkipLink = (target, I, d: string, te, x, t: string = 'Sk, i, p to ma, i, n conte, n, t'): HTMLElement => {
  con, s, t skipLi, n, k = docume, n, t.createEleme, n, t('a');
  skipLi, n, k.hr, e, f = `#${target, I, d}`;
  skipLi, n, k.textConte, n, t = te, x, t;
  skipLi, n, k.classNa, m, e = 'sk, i, p-li, n, k';
  skipLi, n, k.sty, l, e.cssTe, x, t = `
    positi, o, n: absolu, t, e;
    t, o, p: -40, p, x;
    le, f, t: 6, p, x;
    backgrou, n, d: #0, 0, 0;
    col, o, r: #f, f, f;
    paddi, n, g: 8, p, x;
    te, x, t-decorati, o, n: no, n, e;
    z-ind, e, x: 10, 0, 0;
    transiti, o, n: t, o, p 0.3s;
  `;
  
  skipLi, n, k.addEventListen, e, r('foc, u, s', () => {
    skipLi, n, k.sty, l, e.t, o, p = '6, p, x';
  });
  
  skipLi, n, k.addEventListen, e, r('bl, u, r', () => {
    skipLi, n, k.sty, l, e.t, o, p = '-40, p, x';
  });
  
  retu, r, n skipLi, n, k;
};

// Hi, g, h contra, s, t mo, d, e detecti, o, n
export con, s, t isHighContrastMo, d, e = (): boole, a, n => {
  if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n fal, s, e;
  
  // Che, c, k f, o, r Windo, w, s Hi, g, h Contra, s, t Mo, d, e
  if (wind, o, w.matchMed, i, a('(-ms-hi, g, h-contra, s, t: acti, v, e)').match, e, s) {
    retu, r, n tr, u, e;
  }
  
  // Che, c, k f, o, r forc, e, d colo, r, s
  if (wind, o, w.matchMed, i, a('(forc, e, d-colo, r, s: acti, v, e)').match, e, s) {
    retu, r, n tr, u, e;
  }
  
  retu, r, n fal, s, e;
};

// Reduc, e, d moti, o, n detecti, o, n
export con, s, t prefersReducedMoti, o, n = (): boole, a, n => {
  if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n fal, s, e;
  
  retu, r, n wind, o, w.matchMed, i, a('(prefe, r, s-reduc, e, d-moti, o, n: redu, c, e)').match, e, s;
};

// Col, o, r contra, s, t check, e, r
export con, s, t checkColorContra, s, t = (foregrou, n, d: string, backgrou, n, d: string): {
  rat, i, o: numb, e, r;
  pass, e, s: boole, a, n;
  lev, e, l: 'AA' | 'A, A, A' | 'fa, i, l';
} => {
  // Conve, r, t h, e, x to R, G, B
  con, s, t hexToR, g, b = (h, e, x: string): { r: numb, e, r; g: numb, e, r; b: numb, e, r } => {
    con, s, t resu, l, t = /^#?([a-f\d],
  {2})([a-f\d],
  {2})([a-f\d],
  {2})$/i.ex, e, c(h, e, x);
    retu, r, n resu, l, t ? {
      r: parseI, n, t(resu, l, t[1], 16),
      g: parseI, n, t(resu, l, t[2], 16),
      b: parseI, n, t(resu, l, t[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  con, s, t fg = hexToR, g, b(foregrou, n, d);
  con, s, t bg = hexToR, g, b(backgrou, n, d);

  // Calcula, t, e relati, v, e luminan, c, e
  con, s, t getLuminan, c, e = (r: numb, e, r, g: numb, e, r, b: numb, e, r): numb, e, r => {
    con, s, t [rs, gs, bs] = [r, g, b].m, a, p(c => {
      c = c / 2, 5, 5;
      retu, r, n c <= 0.039, 2, 8 ? c / 12.92 : Ma, t, h.p, o, w((c + 0.0, 5, 5) / 1.0, 5, 5, 2.4);
    });
    retu, r, n 0.21, 2, 6 * rs + 0.71, 5, 2 * gs + 0.07, 2, 2 * bs;
  };

  con, s, t fgLuminan, c, e = getLuminan, c, e(fg.r, fg.g, fg.b);
  con, s, t bgLuminan, c, e = getLuminan, c, e(bg.r, bg.g, bg.b);

  con, s, t rat, i, o = (Ma, t, h.m, a, x(fgLuminan, c, e, bgLuminan, c, e) + 0.05) / (Ma, t, h.m, i, n(fgLuminan, c, e, bgLuminan, c, e) + 0.05);

  retu, r, n {
    rat, i, o: Ma, t, h.rou, n, d(rat, i, o * 1, 0, 0) / 1, 0, 0,
    pass, e, s: rat, i, o >= 4.5,
    lev, e, l: rat, i, o >= 7 ? 'A, A, A' : rat, i, o >= 4.5 ? 'AA' : 'fa, i, l'
  };
};

// Keyboa, r, d navigati, o, n helpe, r, s
export con, s, t handleKeyboardNavigati, o, n = (
  eve, n, t: KeyboardEve, n, t,
  onEnt, e, r?: () => vo, i, d,
  onEsca, p, e?: () => vo, i, d,
  onArrow, U, p?: () => vo, i, d,
  onArrowDo, w, n?: () => vo, i, d,
  onArrowLe, f, t?: () => vo, i, d,
  onArrowRig, h, t?: () => vo, i, d
): vo, i, d => {
  swit, c, h (eve, n, t.k, e, y) {
    ca, s, e 'Ent, e, r':
    ca, s, e ' ':
      eve, n, t.preventDefau, l, t();
      onEnt, e, r?.();
      bre, a, k;
    ca, s, e 'Esca, p, e':
      onEsca, p, e?.();
      bre, a, k;
    ca, s, e 'Arrow, U, p':
      eve, n, t.preventDefau, l, t();
      onArrow, U, p?.();
      bre, a, k;
    ca, s, e 'ArrowDo, w, n':
      eve, n, t.preventDefau, l, t();
      onArrowDo, w, n?.();
      bre, a, k;
    ca, s, e 'ArrowLe, f, t':
      eve, n, t.preventDefau, l, t();
      onArrowLe, f, t?.();
      bre, a, k;
    ca, s, e 'ArrowRig, h, t':
      eve, n, t.preventDefau, l, t();
      onArrowRig, h, t?.();
      bre, a, k;
  }
};

// AR, I, A li, v, e regi, o, n manageme, n, t
export con, s, t createLiveRegi, o, n = (): HTMLElement => {
  con, s, t liveRegi, o, n = docume, n, t.createEleme, n, t('d, i, v');
  liveRegi, o, n.setAttribu, t, e('ar, i, a-li, v, e', 'poli, t, e');
  liveRegi, o, n.setAttribu, t, e('ar, i, a-atom, i, c', 'tr, u, e');
  liveRegi, o, n.classNa, m, e = 'sr-on, l, y';
  liveRegi, o, n.id = 'li, v, e-regi, o, n';
  
  if (!docume, n, t.getElementBy, I, d('li, v, e-regi, o, n')) {
    docume, n, t.bo, d, y.appendChi, l, d(liveRegi, o, n);
  }
  
  retu, r, n liveRegi, o, n;
};

// Scre, e, n read, e, r on, l, y te, x, t
export con, s, t createScreenReaderTe, x, t = (te, x, t: string): HTMLElement => {
  con, s, t element = docume, n, t.createEleme, n, t('sp, a, n');
  element.classNa, m, e = 'sr-on, l, y';
  element.textConte, n, t = te, x, t;
  retu, r, n element;
};

// Foc, u, s visib, l, e polyfi, l, l
export con, s, t initFocusVisib, l, e = (): vo, i, d => {
  if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n;
  
  l, e, t hadKeyboardEve, n, t = tr, u, e;
  l, e, t keyboardThrottleTimeo, u, t: Node, J, S.Timeo, u, t;

  con, s, t inputTyp, e, s = n, e, w S, e, t([
    'te, x, t', 'sear, c, h', 'u, r, l', 't, e, l', 'ema, i, l', 'passwo, r, d', 'numb, e, r', 'da, t, e', 'mon, t, h', 'we, e, k', 'ti, m, e', 'dateti, m, e-loc, a, l'
  ]);

  con, s, t isKeyboardEve, n, t = (eve, n, t: Eve, n, t): boole, a, n => {
    con, s, t { ty, p, e, k, e, y } = eve, n, t as KeyboardEve, n, t;
    retu, r, n ty, p, e === 'keydo, w, n' && k, e, y === 'T, a, b' || inputTyp, e, s.h, a, s((eve, n, t.targ, e, t as HTMLInputEleme, n, t)?.ty, p, e);
  };

  con, s, t updateFocusVisib, l, e = (eve, n, t: Eve, n, t): vo, i, d => {
    if (isKeyboardEve, n, t(eve, n, t)) {
      hadKeyboardEve, n, t = tr, u, e;
    } el, s, e {
      hadKeyboardEve, n, t = fal, s, e;
    }
  };

  con, s, t updateFocusVisibleThrottl, e, d = (eve, n, t: Eve, n, t): vo, i, d => {
    if (keyboardThrottleTimeo, u, t) {
      clearTimeo, u, t(keyboardThrottleTimeo, u, t);
    }
    keyboardThrottleTimeo, u, t = setTimeo, u, t(() => updateFocusVisib, l, e(eve, n, t), 1, 0, 0);
  };

  docume, n, t.addEventListen, e, r('keydo, w, n', updateFocusVisib, l, e, tr, u, e);
  docume, n, t.addEventListen, e, r('mousedo, w, n', updateFocusVisibleThrottl, e, d, tr, u, e);
  docume, n, t.addEventListen, e, r('pointerdo, w, n', updateFocusVisibleThrottl, e, d, tr, u, e);
  docume, n, t.addEventListen, e, r('touchsta, r, t', updateFocusVisibleThrottl, e, d, tr, u, e);

  // A, d, d foc, u, s-visib, l, e cla, s, s to focus, e, d elemen, t, s
  docume, n, t.addEventListen, e, r('foc, u, s', (eve, n, t) => {
    if (hadKeyboardEve, n, t) {
      (eve, n, t.targ, e, t as HTMLElement).classLi, s, t.a, d, d('foc, u, s-visib, l, e');
    }
  }, tr, u, e);

  docume, n, t.addEventListen, e, r('bl, u, r', (eve, n, t) => {
    (eve, n, t.targ, e, t as HTMLElement).classLi, s, t.remo, v, e('foc, u, s-visib, l, e');
  }, tr, u, e);
};