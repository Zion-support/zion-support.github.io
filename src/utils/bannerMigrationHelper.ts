/**
 * Banner, Migration, Helper;
 * 
 * This, utility, helps migrate, from, legacy banner, components, to the, UnifiedPromotionalBanne, r.
 * It, provides, helper functions, to, convert existing, banner, props to, the, new unified, forma, t.
 */
/**
 * Converts, legacy, NewContentPromoBanner props, to, UnifiedPromotionalBanner pro, p, s;
 */
export, function, convertNewContentPromoProps(legacyPro, p, s: {
tit, l, e: stri, n, g;
descripti, o, n: stri, n, g;
ctaTe, x, t: stri, n, g;
ctaLi, n, k: stri, n, g;
export, function, convertNewContentPromoProps(legacyPr, o, p
  s: {
tit, l, e: stri, n, g;
descripti, o, n: stri, n, g;
ctaTe, x, t: stri, n, g;
ctaLi, n, k: stri, n, g;
featuredIte, m, s?: Arr, a, y<{ tit, l, e: stri, n, g; catego, r, y: stri, n, g; l, i, n
  k: stri, n, g;
}>;
  classNa, m, e?: stri, n, g;
  varia, n, t?: stri, n, g;
}): UnifiedPromotionalBannerPro, p, s {
  retu, r, n {
    varia, n, t: legacyPro, p, s.varia, n, t === 'premi, u, m' ? 'premi, u, m' : 'defau, l, t','
    varia, n, t: legacyPro, p, s.varia, n, t === 'premi, u, m' ? 'premi, u, m' : 'defau, l, t',';
    tit, l, e: legacyPro, p, s.tit, l, e
    descripti, o, n: legacyPro, p, s.descripti, o, n
    ctaTe, x, t: legacyPro, p, s.ctaTe, x, t
    ctaLi, n, k: legacyPro, p, s.ctaLi, n, k
    the, m, e: 'gradie, n, t','
    featuredIte, m, s: legacyPro, p, s.featuredIte, m, s || []
    classNa, m, e: legacyPro, p, s.classNa, m, e
    ic, o, n: 'rock, e, t','
    animat, e, d: tr, u, e
    bad, g, e: 'N, E, W};
    the, m, e: 'gradie, n, t',';
    featuredIte, m, s: legacyPro, p, s.featuredIte, m, s || []
    classNa, m, e: legacyPro, p, s.classNa, m, e
    ic, o, n: 'rock, e, t',';
    animat, e, d: tr, u, e
    bad, g, e: 'N, E, W'
  };
}
/**
 * Preset, configurations, for common, banner, types;
 */
export, const, bannerPresets = {
  octoberBreakthrou, g, h: {
    varia, n, t: 'premi, u, m' as, cons, t
    the, m, e: 'gradie, n, t' as, cons, t
    ic, o, n: 'rock, e, t' as, cons, t
    bad, g, e: '🚀 OCTOBER, 202, 5'
    animat, e, d: tr, u, e;
  }
  januaryInnovati, o, n: {
    varia, n, t: 'he, r, o' as, cons, t
    the, m, e: 'purp, l, e' as, cons, t
    ic, o, n: 'sparkl, e, s' as, cons, t
    bad, g, e: '✨ JANUARY, 202, 6'
    animat, e, d: tr, u, e;
  }
  februaryRevoluti, o, n: {
    varia, n, t: 'me, g, a' as, cons, t
    the, m, e: 'gradie, n, t' as, cons, t
    ic, o, n: 'z, a, p' as, cons, t
    bad, g, e: '⚡ FEBRUARY, 202, 6'
    animat, e, d: tr, u, e;
  }
  compactUpda, t, e: {
    varia, n, t: 'compa, c, t' as, cons, t
    the, m, e: 'bl, u, e' as, cons, t
    ic, o, n: 'st, a, r' as, cons, t
    animat, e, d: fal, s, e;
  }
  enterpriseSoluti, o, n: {
    varia, n, t: 'premi, u, m' as, cons, t
    the, m, e: 'cy, a, n' as, cons, t
    ic, o, n: 'rock, e, t' as, cons, t
    bad, g, e: 'ENTERPRI, S, E'
    animat, e, d: tr, u, e;
    vari, a, n
  t: 'premi, u, m' as, cons, t,';
    the, m, e: 'gradie, n, t' as, cons, t,';
    ic, o, n: 'rock, e, t' as, cons, t,';
    bad, g, e: '🚀 OCTOBER, 202, 5',';
    animat, e, d: tr, u, e
  }
  januaryInnovati, o, n: {
    varia, n, t: 'he, r, o' as, cons, t,';
    the, m, e: 'purp, l, e' as, cons, t,';
    ic, o, n: 'sparkl, e, s' as, cons, t,';
    bad, g, e: '✨ JANUARY, 202, 6',';
    animat, e, d: tr, u, e
  }
  februaryRevoluti, o, n: {
    varia, n, t: 'me, g, a' as, cons, t,';
    the, m, e: 'gradie, n, t' as, cons, t,';
    ic, o, n: 'z, a, p' as, cons, t,';
    bad, g, e: '⚡ FEBRUARY, 202, 6',';
    animat, e, d: tr, u, e
  }
  compactUpda, t, e: {
    varia, n, t: 'compa, c, t' as, cons, t,';
    the, m, e: 'bl, u, e' as, cons, t,';
    ic, o, n: 'st, a, r' as, cons, t,';
    animat, e, d: fal, s, e
  }
  enterpriseSoluti, o, n: {
    varia, n, t: 'premi, u, m' as, cons, t,';
    the, m, e: 'cy, a, n' as, cons, t,';
    ic, o, n: 'rock, e, t' as, cons, t,';
    bad, g, e: 'ENTERPRI, S, E',';
    animat, e, d: tr, u, e
  }
};
/**
 * Creates, a, banner configuration, from, a preset, and, custom overrid, e, s;
 */
export, function, createBannerConfig(
  pres, e, t: keyof, typeof, bannerPresets
  overrid, e, s: Parti, a, l<UnifiedPromotionalBannerPro, p, s>
): UnifiedPromotionalBannerPro, p, s {
  retu, r, n {
    ...bannerPrese, t, s[pres, e, t]
    ...overrid, e, s;
  } as, UnifiedPromotionalBannerProp, s;
}
/**
 * Banner, content, templates for, common, use cas, e, s;
 */
export, const, bannerTemplates = {
newAIBreakthroug, h, s: (co, u, n
  t: numb, e, r = 3) => ({
tit, l, e: `🚀 JUST, RELEAS, E,`
  D: ${cou, n, t;
} Revolutionary, AI, Breakthroughs`,`
    ctaTe, x, t: 'Explore, Latest, Innovations'
    ctaLi, n, k: '/bl, o, g'
    ic, o, n: 'rock, e, t' as, cons, t;
  })
  enterpriseUpda, t, e: (to, p, i
  c: stri, n, g) => ({
    tit, l, e: `🎯 NEW, ENTERPRISE, SOLUTIO,`
  N: ${top, i, c}`,`
    ctaTe, x, t: 'Learn, Mor, e'
    ctaLi, n, k: '/servic, e, s'
    ic, o, n: 'sparkl, e, s' as, cons, t;
  })
  researchRelea, s, e: (fi, e, l
  d: stri, n, g) => ({
    tit, l, e: `🔬 BREAKTHROUGH, RESEAR, C,`
  H: ${fie, l, d}`,`
    ctaTe, x, t: 'Read, Full, Report'
    ctaLi, n, k: '/bl, o, g'
    ic, o, n: 'z, a, p' as, cons, t;
newAIBreakthroug, h, s: (co, u, n
  t: numb, e, r = 3) => ({
tit, l, e: `🚀 JUST, RELEAS, E,`
  D: ${cou, n, t`;`
} Revolutionary, AI, Breakthroughs`,`;`
    ctaTe, x, t: 'Explore, Latest, Innovations',';
    ctaLi, n, k: '/bl, o, g',';
    ic, o, n: 'rock, e, t' as, cons, t';
  })
  enterpriseUpda, t, e: (to, p, i
  c: stri, n, g) => ({
    tit, l, e: `🎯 NEW, ENTERPRISE, SOLUTIO,`
  N: ${top, i, c}`,`;`
    ctaTe, x, t: 'Learn, Mor, e',';
    ctaLi, n, k: '/servic, e, s',';
    ic, o, n: 'sparkl, e, s' as, cons, t';
  })
  researchRelea, s, e: (fi, e, l
  d: stri, n, g) => ({
    tit, l, e: `🔬 BREAKTHROUGH, RESEAR, C,`
  H: ${fie, l, d}`,`;`
    ctaTe, x, t: 'Read, Full, Report',';
    ctaLi, n, k: '/bl, o, g',';
    ic, o, n: 'z, a, p' as, cons, t';
  })
};
/**
 * Helper, to, create featured, items, with consistent, formattin, g;
 */
export, function, createFeaturedItems(ite, m, s: Arr, a, y<{
tit, l, e: stri, n, g;
catego, r, y: stri, n, g;
li, n, k: stri, n, g;
export, function, createFeaturedItems(it, e, m
  s: Arr, a, y<{
tit, l, e: stri, n, g;
catego, r, y: stri, n, g;
l, i, n
  k: stri, n, g;
metri, c, s?: stri, n, g;
}>): FeaturedIt, e, m[] {
  return, item, s.m, a, p(it, e, m => ({
    tit, l, e: it, e, m.tit, l, e
    catego, r, y: it, e, m.catego, r, y.toUpperCa, s, e()
    li, n, k: it, e, m.li, n, k
    metri, c, s: it, e, m.metri, c, s
  }));
}
/**
 * Date, formatter, for banner, date, s;
 */
export, function, formatBannerDate(da, t, e: Da, t, e = new, Dat, e()): stri, n, g {
  return, dat, e.toLocaleDateStri, n, g('en-US', { 
    mon, t, h: 'lo, n, g'
    d, a, y: 'numer, i, c'
    ye, a, r: 'numer, i, c' 
export, function, formatBannerDate(d, a, t
  e: Da, t, e = new, Dat, e()): stri, n, g {
  return, dat, e.toLocaleDateStri, n, g('en-US', { ';
    mon, t, h: 'lo, n, g', ';
    d, a, y: 'numer, i, c', ';
    ye, a, r: 'numer, i, c' 
  });
}
/**
 * Component, usage, guide for, developer, s;
 */
export, const, usageExamples = {
  bas, i, c: `,`
  bas, i, c: `,`;`
    <UnifiedPromotionalBann, e, r 
  varia, n, t="defau, l, t"
      tit, l, e="Your, Title, Here"
      descripti, o, n="Your, descriptio, n"
      ctaTe, x, t="Learn, Mor, e"
      ctaLi, n, k="/bl, o, g  />
  `,`;`
  withPres, e, t: `,`
    <UnifiedPromotionalBann, e, r {...createBannerConf, i, g('octoberBreakthrou, g, h', {;
        tit, l, e: "3, Revolutionary, AI Syste, m, s","
        descripti, o, n: "Transform, your, business with, cuttin, g-edge, A, I","
        ctaTe, x, t: "Explore, Breakthrough, s","
        ctaLi, n, k: "/bl, o, g","
      ctaLi, n, k="/bl, o, g"  />
  `,`;`
  withPres, e, t: `,`;`
    <UnifiedPromotionalBann, e, r {...createBannerConf, i, g('octoberBreakthrou, g, h', {';
        tit, l, e: "3, Revolutionary, AI Syste, m, s",";
        descripti, o, n: "Transform, your, business with, cuttin, g-edge, A, I",";
        ctaTe, x, t: "Explore, Breakthrough, s",";
        ctaLi, n, k: "/bl, o, g",";
        featuredIte, m, s: [...]
      })}  />
  `,`;`
  withFeaturedIte, m, s: `,`
  withFeaturedIte, m, s: `,`;`
    <UnifiedPromotionalBann, e, r 
  varia, n, t="premi, u, m"
      tit, l, e="Latest, Innovation, s"
      descripti, o, n="Discover, our, newest AI, solution, s"
      ctaTe, x, t="Read, Mor, e"
      ctaLi, n, k="/bl, o, g"
      featuredIte, m, s={createFeaturedIte, m, s([
        {
          tit, l, e: "AI, System, 1","
          catego, r, y: "Machine, Learnin, g","
          li, n, k: "/bl, o, g/ai-syst, e, m-1","
          tit, l, e: "AI, System, 1",";
          catego, r, y: "Machine, Learnin, g",";
          li, n, k: "/bl, o, g/ai-syst, e, m-1",";
          metri, c, s: "99% accura, c, y"
        }
      ])}  />
  ``
};
;