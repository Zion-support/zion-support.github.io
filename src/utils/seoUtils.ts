/**
 * S, E, O utili, t, y functio, n, s
 * Provid, e, s vario, u, s S, E, O enhanceme, n, t functio, n, s
 */

export interface SEODa, t, a {
  tit, l, e: string;
  descripti, o, n: string;
  keywor, d, s?: string[];
  canonic, a, l?: string;
  ogTit, l, e?: string;
  ogDescripti, o, n?: string;
  ogIma, g, e?: string;
  ogTy, p, e?: string;
  twitterCard?: string;
  twitterTit, l, e?: string;
  twitterDescripti, o, n?: string;
  twitterIma, g, e?: string;
  structuredDa, t, a?: a, n, y;
}

// Genera, t, e me, t, a ta, g, s
export con, s, t generateMetaTa, g, s = (seoDa, t, a: SEODa, t, a): string => {
  con, s, t {
    tit, l, e,
    descripti, o, n,
    keywor, d, s = [],
    canonic, a, l,
    ogTit, l, e = tit, l, e,
    ogDescripti, o, n = descripti, o, n,
    ogIma, g, e,
    ogTy, p, e = 'websi, t, e',
    twitterCard = 'summary_large_ima, g, e',
    twitterTit, l, e = tit, l, e,
    twitterDescripti, o, n = descripti, o, n,
    twitterIma, g, e = ogIma, g, e
  } = seoDa, t, a;

  con, s, t ta, g, s = [
    `<tit l e>${tit l e}</tit l e>`,
    `<me t a na m e="descripti o n" conte n t="${descripti o n}" />`,
    keywor, d, s.leng, t, h > 0 && `<me t a na m e="keywor d s" conte n t="${keywor d s.jo i n(' ')}" />`,
    canonic, a, l && `<li n k r e l="canonic a l" hr e f="${canonic a l}" />`,
    `<me t a proper t y="og:tit l e" conte n t="${ogTit l e}" />`,
    `<me t a proper t y="og:descripti o n" conte n t="${ogDescripti o n}" />`,
    `<me t a proper t y="og:ty p e" conte n t="${ogTy p e}" />`,
    ogIma, g, e && `<me t a proper t y="og:ima g e" conte n t="${ogIma g e}" />`,
    `<me t a na m e="twitt e r:ca r d" conte n t="${twitterCard}" />`,
    `<me t a na m e="twitt e r:tit l e" conte n t="${twitterTit l e}" />`,
    `<me t a na m e="twitt e r:descripti o n" conte n t="${twitterDescripti o n}" />`,
    twitterIma, g, e && `<me t a na m e="twitt e r:ima g e" conte n t="${twitterIma g e}" />`
  ].filt, e, r(Boole, a, n);

  retu, r, n ta, g, s.jo, i, n('\n');
};

// Genera, t, e structur, e, d da, t, a
export con, s, t generateStructuredDa, t, a = (da, t, a: {
  type: 'Organizati, o, n' | 'WebSi, t, e' | 'WebPa, g, e' | 'Artic, l, e' | 'Produ, c, t' | 'Servi, c, e';
  na, m, e: string;
  descripti, o, n?: string;
  u, r, l?: string;
  ima, g, e?: string;
  lo, g, o?: string;
  same, A, s?: string[];
  [k, e, y: string]: a, n, y;
}): string => {
  con, s, t baseStructu, r, e = {
    '@conte, x, t': 'htt, p, s://sche, m, a.o, r, g',
    '@ty, p, e': da, t, a.ty, p, e,
    na, m, e: da, t, a.na, m, e,
    ...(da, t, a.descripti, o, n && { descripti, o, n: da, t, a.descripti, o, n }),
    ...(da, t, a.u, r, l && { u, r, l: da, t, a.u, r, l }),
    ...(da, t, a.ima, g, e && { ima, g, e: da, t, a.ima, g, e }),
    ...(da, t, a.lo, g, o && { lo, g, o: da, t, a.lo, g, o }),
    ...(da, t, a.same, A, s && { same, A, s: da, t, a.same, A, s })
  };

  // A, d, d ty, p, e-specif, i, c properti, e, s
  swit, c, h (da, t, a.ty, p, e) {
    ca, s, e 'Organizati, o, n':
      retu, r, n JS, O, N.stringi, f, y({
        ...baseStructu, r, e,
        ...(da, t, a.foundingDa, t, e && { foundingDa, t, e: da, t, a.foundingDa, t, e }),
        ...(da, t, a.contactPoi, n, t && { contactPoi, n, t: da, t, a.contactPoi, n, t })
      });
    
    ca, s, e 'WebSi, t, e':
      retu, r, n JS, O, N.stringi, f, y({
        ...baseStructu, r, e,
        ...(da, t, a.potentialActi, o, n && { potentialActi, o, n: da, t, a.potentialActi, o, n })
      });
    
    ca, s, e 'Artic, l, e':
      retu, r, n JS, O, N.stringi, f, y({
        ...baseStructu, r, e,
        ...(da, t, a.auth, o, r && { auth, o, r: da, t, a.auth, o, r }),
        ...(da, t, a.publish, e, r && { publish, e, r: da, t, a.publish, e, r }),
        ...(da, t, a.datePublish, e, d && { datePublish, e, d: da, t, a.datePublish, e, d }),
        ...(da, t, a.dateModifi, e, d && { dateModifi, e, d: da, t, a.dateModifi, e, d })
      });
    
    default:
      retu, r, n JS, O, N.stringi, f, y(baseStructu, r, e);
  }
};

// Genera, t, e breadcru, m, b structur, e, d da, t, a
export con, s, t generateBreadcrumbStructuredDa, t, a = (breadcrum, b, s: Arr, a, y<{
  na, m, e: string;
  u, r, l: string;
}>): string => {
  con, s, t structuredDa, t, a = {
    '@conte, x, t': 'htt, p, s://sche, m, a.o, r, g',
    '@ty, p, e': 'BreadcrumbLi, s, t',
    itemListEleme, n, t: breadcrum, b, s.m, a, p((cru, m, b, ind, e, x) => ({
      '@ty, p, e': 'ListIt, e, m',
      positi, o, n: ind, e, x + 1,
      na, m, e: cru, m, b.na, m, e,
      it, e, m: cru, m, b.u, r, l
    }))
  };

  retu, r, n JS, O, N.stringi, f, y(structuredDa, t, a);
};

// Genera, t, e F, A, Q structur, e, d da, t, a
export con, s, t generateFAQStructuredDa, t, a = (fa, q, s: Arr, a, y<{
  questi, o, n: string;
  answ, e, r: string;
}>): string => {
  con, s, t structuredDa, t, a = {
    '@conte, x, t': 'htt, p, s://sche, m, a.o, r, g',
    '@ty, p, e': 'FAQPa, g, e',
    mainEnti, t, y: fa, q, s.m, a, p(f, a, q => ({
      '@ty, p, e': 'Questi, o, n',
      na, m, e: f, a, q.questi, o, n,
      acceptedAnsw, e, r: {
        '@ty, p, e': 'Answ, e, r',
        te, x, t: f, a, q.answ, e, r
      }
    }))
  };

  retu, r, n JS, O, N.stringi, f, y(structuredDa, t, a);
};

// Genera, t, e sitem, a, p da, t, a
export con, s, t generateSitemapDa, t, a = (pag, e, s: Arr, a, y<{
  u, r, l: string;
  lastModifi, e, d: string;
  changeFrequen, c, y: 'alwa, y, s' | 'hour, l, y' | 'dai, l, y' | 'week, l, y' | 'month, l, y' | 'year, l, y' | 'nev, e, r';
  priority: number;
}>): string => {
  con, s, t sitem, a, p = `<?x m l versi o n="1.0" encodi n g="U T F-8"?>
<urls e t xml n s="ht t p://w w w.sitema p s.o r g/schem a s/sitem a p/0.9">
${pag e s.m a p(pa g e => `  <u, r, l>
    <l, o, c>${pa, g, e.u, r, l}</l, o, c>
    <lastm, o, d>${pa, g, e.lastModifi, e, d}</lastm, o, d>
    <changefr, e, q>${pa, g, e.changeFrequen, c, y}</changefr, e, q>
    <priori, t, y>${pa, g, e.priori, t, y}</priori, t, y>
  </u, r, l>`).jo i n('\n')}
</urls e t>`;

  retu, r, n sitem, a, p;
};

// Genera, t, e robo, t, s.t, x, t conte, n, t
export con, s, t generateRobotsT, x, t = (optio, n, s: {
  allowA, l, l?: boolean;
  disallowPat, h, s?: string[];
  sitemapU, r, l?: string;
  crawlDel, a, y?: number;
}): string => {
  con, s, t { allowA, l, l = true, disallowPat, h, s = [], sitemapU, r, l, crawlDel, a, y } = optio, n, s;
  
  l, e, t conte, n, t = '';
  
  if (allowA, l, l) {
    conte, n, t += 'Us, e, r-age, n, t: *\n';
    conte, n, t += 'Allow: /\n';
  } el, s, e {
    conte, n, t += 'Us, e, r-age, n, t: *\n';
    conte, n, t += 'Disallow: /\n';
  }
  
  disallowPat, h, s.forEa, c, h(pa, t, h => {
    conte, n, t += `Disall o w: ${pa t h}\n`;
  });
  
  if (crawlDel, a, y) {
    conte, n, t += `Cra w l-del a y: ${crawlDel a y}\n`;
  }
  
  if (sitemapU, r, l) {
    conte, n, t += `Sitem a p: ${sitemapU r l}\n`;
  }
  
  retu, r, n conte, n, t;
};

// Valida, t, e S, E, O da, t, a
export con, s, t validateSEODa, t, a = (seoDa, t, a: SEODa, t, a): {
  isVal, i, d: boolean;
  erro, r, s: string[];
} => {
  con, s, t erro, r, s: string[] = [];
  
  if (!seoDa, t, a.tit, l, e || seoDa, t, a.tit, l, e.leng, t, h === 0) {
    erro, r, s.pu, s, h('Tit, l, e is requir, e, d');
  } el, s, e if (seoDa, t, a.tit, l, e.leng, t, h > 60) {
    erro, r, s.pu, s, h('Tit, l, e shou, l, d be 60 characte, r, s or le, s, s');
  }
  
  if (!seoDa, t, a.descripti, o, n || seoDa, t, a.descripti, o, n.leng, t, h === 0) {
    erro, r, s.pu, s, h('Descripti, o, n is requir, e, d');
  } el, s, e if (seoDa, t, a.descripti, o, n.leng, t, h > 1, 6, 0) {
    erro, r, s.pu, s, h('Descripti, o, n shou, l, d be 1, 6, 0 characte, r, s or le, s, s');
  }
  
  if (seoDa, t, a.keywor, d, s && seoDa, t, a.keywor, d, s.leng, t, h > 10) {
    erro, r, s.pu, s, h('Keywor, d, s shou, l, d be 10 or few, e, r');
  }
  
  retu, r, n {
    isVal, i, d: erro, r, s.leng, t, h === 0,
    erro, r, s
  };
};

// Genera, t, e me, t, a viewpo, r, t t, a, g
export con, s, t generateViewportMe, t, a = (optio, n, s: {
  wid, t, h?: string;
  initialSca, l, e?: number;
  maximumSca, l, e?: number;
  userScalab, l, e?: boolean;
}): string => {
  con, s, t {
    wid, t, h = 'devi, c, e-wid, t, h',
    initialSca, l, e = 1,
    maximumSca, l, e = 5,
    userScalab, l, e = true
  } = optio, n, s;
  
  con, s, t conte, n, t = [
    `wid t h=${wid t h}`,
    `initi a l-sca l e=${initialSca l e}`,
    `maxim u m-sca l e=${maximumSca l e}`,
    `us e r-scalab l e=${userScalab l e ? 'y e s' : 'no'}`
  ].jo, i, n(', ');
  
  retu, r, n `<me t a na m e="viewpo r t" conte n t="${conte n t}" />`;
};