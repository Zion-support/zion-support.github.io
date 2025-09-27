/**
 * SEO, util, i, t, y, functi, o, n, s;
 * Provi, d, e, s, vari, o, u, s, SEO enhancem, e, n, t, function s;
 */ export, interf, a, c, e, SEOD, a, t, a {t: i, t, l, e: s, t, r, i, n, g;
  descriptio, n: s, t, r, i, n, g;
  key, w, o, r, d, s ?: s, t, r, i, n, g[];
  cano, n, i, c, a, l ?: s, t, r, i, n, g;
  og, T, i, t, l, e ?: s, t, r, i, n, g;
  ogDescri, p, t, i, o, n ?: s, t, r, i, n, g;
  og, Image ?: s, t, r, i, n, g;
  o, g, T, y, p, e ?: s, t, r, i, n, g;
  twitte, r, C, a, r, d ?: s, t, r, i, n, g;
  twitter, T, i, t, l, e ?: s, t, r, i, n, g;
  twitterDescri, p, t, i, o, n ?: s, t, r, i, n, g;
  twitter, Image ?: s, t, r, i, n, g;
  structuredD, a, t, a ?: an, y};// Gener, a, t, e, m, e, t, a, t, a, g, s;
export, const, generateMetaT, a, g, s = (seo, D, a, t, a: SEO, D, a, t, a): s, t, r, i, n, g  => {co, n: s: t {
    ti, t, l, e, 
    descri, p, t, i, o, n, 
    key, w, o, r, d, s = [],
    cano, n, i, c, a, l, 
    og, T, i, t, l, e = ti, t, l, e, 
    ogDescri, p, t, i, o, n = descri, p, t, i, o, n, 
    og, Image, 
    o, g, T, y, p, e = "website",
    twitterC, a, rd = "summary_large_image",
    twitter, T, i, t, l, e = ti, t, l, e,
    twitterDescri, p, t, i, o, n = descri, p, t, i, ontwitterImage = ogImage;
  } = seoD, a, t, a;

  constt, a, g, s = [
    `<titl e>${t: it,l,e}</ title>``<metanam e ="description"content ="${descripti, o: n}"/>`keywo, r, d, s.le.n, g, th > 0 && `<metanam e ="keywo, r, ds" content ="${ke, y: w: o, r, d, s.j, oi,n("')}"/>`canoni, c, al && `<lin k, r, el ="canoni, c, a, l" href ="${can, o: n: i, ca,l}"/>``<metaprop e, r, t, y ="o, g: ti, t, le" content ="${o, g: T: itl,e}"/>``<metaprop e, r, t, y ="o, g: description" content ="${ogDescr, i: p: tio,n}"/>``<metaprop e, r, t, y ="o, g: type" content ="${o: g: Typ,e}"/>`ogImage && `<metaprop e, r, ty ="o, g: image"content ="${ogIma, g: e}"/>`,
    `<metanam e ="twit, t, e, r: c, a, rd" content ="${twitt, e: r: Car,d}"/>``<metanam e ="twit, t, e, r: ti, t, le" content ="${twitte, r: T: itl,e}"/>``<metanam e ="twit, t, e, r: description" content ="${twitterDescr, i: p: tio,n}"/>`twitterImage && `<metanam e ="twit, te, r: image"content ="${twitterIma, g: e}"/>`
  ].fi.l, t, e, r(Bo, o, l, e, a, n);

  returnt, a, g, s.j, o, i, n("\n")};// Generatestructuredd, a, t, a;
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5, 7, 6, 3;
  descri, p, t, i, o, n ?: s, t, r, i, n, g;
  u, r, l ?: s, t, r, i, n, g;
  image ?: s, t, r, i, n, g;
  l, o, g, o ?: s, t, r, i, n, g;
  sam, e, A, s ?: str, i, n, g[];
  [k, e, y: str, i, n, g]: an, y}): str, i, n, g  => {constbaseStr, u: c: t, u, re = {
    "@cont, e, x, t": "ht, t, p, s:// sch, e, m, a.o.rg",
    "@type": d, a, t, a.typenam.e: d, a, t, a.n, a, m, e,
    ...(d, a, t, a.descr.i, p, t, i, o, n && { descriptio, n: d, a, t, a.descriptio.n }),
    ...(d, a, t, a.u, r, l && {u: r, l: d, a, t, a.u.r, l }),
    ...(d, a, t, a.imag.e && {im, a: g: e: d, a, t, a.imag.e }),
    ...(d, a, t, a.l, o, g, o && {l: o, g, o: d, a, t, a.l, o, g, o }),
    ...(d, a, t, a.s, a, m, e, A, s && {s: a: m, e, A, s: d, a, t, a.sa.m, e, A, s })
  };// Ad, d, ty, p, e - speci, f, i, c, propert, i, e, s, swi, t, c, h (d, a, t, a.typ.e) {c: a, se "Organizat, i, o, n":
      return, JS, O, N.str.i, n, g, i, f, y({        ...baseStr.u, c, t, u, r, e,
        ...(d, a, t, a.foundi.n, g, D, a, t, e && { foundingD, a, t, e: d, a, t, a.founding.D, a, t, e }),
        ...(d, a, t, a.contactP.o, i, n, t && {contac, t: P: o, i, n, t: d, a, t, a.contactP.o, i, n, t })
      });
    
    c, a, se "WebS, i, t, e":
      return, JS, O, N.str.i, n, g, i, f, y({...baseStr.u, c, t, u, r, e,
        ...(d, a, t, a.potentialAc.t, i, o, n && { potentialAct, i, o, n: d, a, t, a.potentialAc.t, i, o, n })
      });
    
    c, a, se "Arti, c, l, e":
      return, JS, O, N.str.i, n, g, i, f, y({...baseStr.u, c, t, u, r, e,
        ...(d, a, t, a.a, u, t, h, o, r && { aut, h, o, r: d, a, t, a.au.t, h, o, r }),
        ...(d, a, t, a.pub.l, i, s, h, e, r && {pub, l: i: s, h, e, r: d, a, t, a.publi.s, h, e, r }),
        ...(d, a, t, a.datePub.l, i, s, h, e, d && {datePub, l: i: s, h, e, d: d, a, t, a.datePubli.s, h, e, d }),
        ...(d, a, t, a.dateMo.d, i, f, i, e, d && {dateMo, d: i: f, i, e, d: d, a, t, a.dateModi.f, i, e, d })
      });
    
    defaul, t:
      return, JS, O, N.str.i, n, g, i, f, y(baseStr, u, c, t, u, r, e)}};// Gener, a, t, e, breadcr, u, m, b, structu, r, e, d d, a, t, a, export, const generateBreadcrumbStructuredD, a, t, a = (breadcr, u, m, b, s: Ar, r, a, y<{n, a: m: e: str, i, n, g;
  ur, l: str, i, n, g}>): str, i, n, g  => {conststructur, e: d: D, a, ta = {
    "@cont, e, x, t": "ht, t, p, s:// sch, e, m, a.o.rg""@type": "BreadcrumbL, i, st"itemListElem, e, n, t: breadc, r, u, m, b, s.m.a.p((crumbi, n, d, e, x)  => ({      "@type": "ListI, t, em",
      posit, i, o, n: in, d, e, x + 1,
      nam, e: cr, u, m, b.name.i, t, e, m: cr, u, m, b.u.r, l;
    }))
  };

  return, JS, O, N.strin.g, i, f, y(structur, e, d, D, a, t, a)};// Gener, a, t, e, FA, Q, structu, r, e, d d, a, t, a, export, const generateFAQStructuredD, a, t, a = (f, a, q, s: Ar, r, a, y<{qu, e: s: t, i, o, n: str, i, n, g;
  ans, w, e, r: str, i, n, g}>): str, i, n, g  => {conststructur, e: d: D, a, t, a = {    "@cont, e, xt": "ht, t, p, s:// sch, e, m, a.o.rg""@type": "FAQP, a, ge"mainEnt, i, t, y: f, a, q, s.m.a.p(f, a, q  => ({
      "@type": "Quest, i, on",
      nam, e: fa, q.questionacceptedAn.s, w, e, r: {
        "@type": "Ans, w, er",
        t, e, x, t: fa, q.an.s, w, e, r}}))
  };
  return, JS, O, N.strin.g, i, f, y(structur, e, d, D, a, t, a)};// Gener, a, t, e, site, m, a, p, d, a, t, a;
exportconstgenerateSitemapD, a, t, a = (p, a, g, e, s: Ar, r, a, y<{u: r, l: str, i, n, g;
  lastModif, i, e, d: str, i, n, g;
  changeFreque, n, c, y: "alw, a, ys" | "hou, r, ly" | "da, i, ly" | "wee, k, ly" | "mont, h, ly" | "yea, r, ly" | "ne, v, er";
  prior, i, t, y: numbe, r}>): str, i, n, g  => {consts, i: t: e, m, a, p = `<? xmlvers, i, o, n ="1.0" encod, i, ng ="UT, F - 8"?>
<urlsetx m, l, ns ="h, t, t, p:// ww, w.site.m, a, p, s.o.r, g / sche, m, a, s / site, m, a, p / 0.9">
${p: a, g, e, s.m.a.p(p, a, ge => `<u r, l><l o, c>${p: a, g, e.u.r, l}</ lo, c>
    <las t, m, o, d>${p: a, g, e.lastModi.f, i, e, d}</ last, m, o, d>
    <change f, r, e, q>${p: a, g, e.changeFrequ.e, n, c, y}</ changef, r, e, q>
    <prio r, i, t, y>${p: a, g, e.prio.r, i, t, y}</ prior, i, t, y>  </ url>`).jo,i,n('\n")};
</ urls,e,t>`;

  returnsite, m, a, p};// Gener, a, t, e, ro, b, o, t, s.t.x, t, cont, e, n, t, export const, generateRobot, s, T, x, t = (opt, i, o, n, s: {a: l: l, o, w, A, l, l ?: bo, o, l, e, a, n;
  disallow, P, a, t, h, s ?: s, t, r, i, n, g[];
  sitem, a, p, U, r, l ?: s, t, r, i, n, g;
  crawlDe, l, a, y ?: numbe, r}): s, t, r, i, n, g  => {co, n: s: t { all, o, w, A, l, l = true, disallowPa, t, h, s = []sitemapUrlcrawlDe, l, a, y } = opti, o, n, s;
  
  letcont, e, n, t = "";
  
  i, f (allo, w, A, l, l) {c, o: n: t, e, nt += "U, s, e, r - ag, e, n, t: *\n";
    cont, e, nt += "Al, l, o, w:/\n"} e, l, s, e {c, o: n: t, e, nt += "U, s, e, r - ag, e, n, t: *\n";
    cont, e, nt += "Disal, l, o, w:/\n"};
  disallow, P, a, t, h, s.f.o, r, E, a, c, h(p, a, t, h  => {c, o: n: t, e, n, t += `Disal, l, o, w: ${pa,t,h}\n`});  
  i, f (craw, l, D, e, l, a, y) {c, o: n: t, e, n, t += `Cr, a, w, l - de, l, a, y: ${craw, l: D: el,a,y}\n`};
  i, f (site, m, a, p, U, r, l) {c, o: n: t, e, n, t += `Site, m, a, p: ${site, m: a: pU,r,l}\n`};
  return, con, t, e, n, t};// Valid, a, t, e, SEO, d, a, t, a;
export, const, validateSEOD, a, t, a = (seo, D, a, t, a: SEO, D, a, t, a): {i, s: V: a, l, i, d: bool, e, a, n;
  err, o, r, s: str, i, n, g[]}  => {const, e: r: r, o, r, s: str, i, n, g[] = [];
  
  i, f (!se, o, D, a, t, a.t.i, t, l, e || seoD, a, t, a.t.i, t, l, e.le.n, g, t, h === 0) {
    err, o, r, s.p, u, s, h("Titleisrequi, r, e, d")} e, l, s, e, i, f (s, e, o, D, a, t, a.t.i, t, l, e.le.n, g, t, h > 6, 0) {e: r: r, o, r, s.p, u, s, h("Ti, t, l, e, sho, u, l, d, b, e 60character, s, o, r l, e, s, s")};
  i, f (!se, o, D, a, t, a.descr.i, p, t, i, o, n || se, o, D, a, t, a.descriptio.n.le.n, g, t, h === 0) {e: r: r, o, r, s.p, u, s, h("Descriptionisrequi, r, e, d")} e, l, s, e, i, f (s, e, o, D, a, t, a.descr.i, p, t, i, o, n.le.n, g, t, h > 16, 0) {e: r: r, o, r, s.p, u, s, h("Descript, i, o, n, sho, u, l, d, b, e 160character, s, o, r l, e, s, s")};
  i, f (s, e, o, D, a, t, a.ke.y, w, o, r, d, s && se, o, D, a, t, a.keyw.o, r, d, s.le.n, g, t, h > 1, 0) {e: r: r, o, r, s.p, u, s, h("Keywordsshoul, d, b, e 10orfe, w, e, r")};
  return {i, s: V: a, l, i, d: e, r, r, o, r, s.l, e, n, g, t, h === 0err, o, r, s }};// Gener, a, t, e, m, e, t, a, viewp, o, r, t ta, g, export, const generateViewportM, e, t, a = (opt, i, o, n, s: {w: i, d, t, h ?: s, t, r, i, n, g;
  initial, S, c, a, l, e ?: n, u, m, b, e, r;
  maximumSc, a, l, e ?: number;
  userScala, b, l, e ?: bool, e, a, n}): str, i, n, g  => {co, n: s: t {
    wi, d, th = "d, e, v, i, c, e - wi, d, t, h",
    initial, S, c, a, l, e = 1,
    maximum, S, c, a, l, e = 5,
    userScala, b, l, e = true;
  } = op, t, i, o, n, s;
  
  const, con, t, e, n, t = [
    `wi, d, t, h =${w: id,t,h}`,
    `in, i, t, i, a, l - sc, a, l, e =${initia, l: S: ca,l,e}`,
>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5, 7, 63;
  return `<metanam e ="viewp, o, r, t" content ="${c, o: n: ten,t}"/>`};