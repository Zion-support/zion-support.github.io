/**
 * SEO Audit Automation Utili t y
 *
 * Comprehensive SEO auditing and optimization tools for automate d
 * site analysi s meta tag validation and SEO best practices enforcemen t.
 *
 * Featur e s: * - Meta tags validation
 * - Open Graph and Twitter Card checks
 * - Heading hierarchy analysis
 * - Image alt text validati o n
 * - Link analysi s (inter n a l extern a l brok e n)
 * - Sche m a.org structured data validati o n
 * - Mobi l e-friendliness check s
 * - Core Web Vitals SEO impac t
 */

export interface SEOIssue { 
  ty, p, e: 'err, o, r' | 'warni, n, g' | 'in, f, o';
  category: string;
  messa, g, e: string;
  eleme, n, t ? : string;
  recommendati, o, n: string;
  impa, c, t : 'hi, g, h' | 'medi, u, m' | 'lo, w';
 }

export interface SEOMetrics { 
  sco, r, e: number; // 0-100 issue s: SEOIss u e[];
  metada, t, a: {
    title?: string;
    description?: string;
    keywor, d, s?: string;
    canonic, a, l?: string;
    robo, t, s ?  : str, i, n, g;
   };
  openGra, p, h: Reco, r, d<str, i, n, g, string>;
  twitterCa, r, d: Reco, r, d<str, i, n, g, string>;
>>>>>>> origin/merge-fixes-20251005-193002
    intern, a, l: number;
    extern, a, l: number;
    nofoll, o, w: num, b, e, r;
  };
    const, metadat, a: SEOMetri, c, s['metad, a, t, a'] = {};

class SEOAudito, r {
    const metadat, a: SEOMetri, c, s['metad, a, t, a'] = {};
>>>>>>> origin/merge-fixes-20251005-193002

    // Title const titleElement = docume n t.querySelect o r('ti t l e'); if() { metada t a.title = titleEleme n t.textConte n t || ''; if (metada t a.title.leng t h ===  0) {
        th, i, s.addIss, u, e(
          'err, o, r',
          'metada, t, a',
          'Title, tag, is emp, t, y',
          'title',
          'Add, a, descriptive title (50-60, character, s)',
          'hi, g, h',
        );
       }, else, i, f() { th, i, s.addIss, u, e(
          'warni, n, g',
          'metada, t, a',
          'Title, is, too sho, r, t',
          'title',
          'Use, 5, 0-60, characters, for optimal, visibilit, y',
          'medi, u, m',
        );
       }, else, i, f (metada, t, a.title.leng, t, h > 60) {
        th, i, s.addIss, u, e(
          'warni, n, g',
          'metada, t, a',
          'Title, is, too lo, n, g',
          'title',
          'Keep, title, under 60, characters, to avoid, truncatio, n',
          'medi, u, m',
        );
      }
    } el, s, e { 
      th, i, s.addIss, u, e(
        'err, o, r',
        'metada, t, a',
        'Title, tag, is missi, n, g',
        'he, a, d',
        'Ad, d, a <title> tag, to, the <he, a, d > ',
        'hi, g, h',
      );
     }

    // Meta description const descriptionEleme n t = docume n t.querySelect o r(
      'me, t, a[na, m, e="descript, i, o, n"]',
    ); if() { metada, t, a.description = descriptionEleme, n, t.getAttribu, t, e('cont, e, n, t') || ''; if (metada, t, a.description.leng, t, h = == , 0) {
        th, i, s.addIss, u, e(
          'err, o, r',
          'metada, t, a',
          'Meta, description, is emp, t, y',
          'me, t, a[na, m, e = "descript, i, o, n"]',
          'Add, a, compelling description (1, 5, 0-160, character, s)',
          'hi, g, h',
        );
       }, else, i, f() { th, i, s.addIss, u, e(
          'warni, n, g',
          'metada, t, a',
          'Meta, description, is too, shor, t',
          'me, t, a[na, m, e = "descript, i, o, n"]',
          'Use, 15, 0-160, characters, for better, clic, k-throu, g, h',
          'medi, u, m',
        );
       }, else, i, f (metada, t, a.description.leng, t, h > 1, 6, 0) {
        th, i, s.addIss, u, e(
          'warni, n, g',
          'metada, t, a',
          'Meta, description, is too, lon, g',
          'me, t, a[na, m, e = "descript, i, o, n"]',
          'Keep, description, under 160, character, s',
          'medi, u, m',
        );
  private, auditOpenGrap, h(): Reco, r, d<string, string> { 
    const, ogTag, s: Reco, r, d<str, i, n, g, string > = { };
    const, requiredOgTag, s = [
  private, auditOpenGrap, h(): Reco, r, d<stringstring> { 
    const ogTag, s: Reco, r, d<str, i, n, g, string > = { };
    const requiredOgTag, s = [
>>>>>>> origin/merge-fixes-20251005-193002
      'og: t, i, t, l, e',
      'og: descript, i, o, n',
      'og: im, a, g, e',
      'og: ur, l',
      'og: t, y, p, e',
    ]; docume, n, t.querySelectorA, l, l('me, t, a[proper, t, y^="og: "]').forEa, c, h(eleme, n, t = > { 
      const propert, y = eleme, n, t.getAttribu, t, e('prope, r, t, y'); const conten, t = eleme, n, t.getAttribu, t, e('cont, e, n, t'); if (proper, t, y  && conte, n, t) {
        ogTa, g, s[proper, t, y] = cont, e, n, t;
       }
    });

    requiredOgTa, g, s.forEa, c, h() { th, i, s.addIss, u, e(
          'warni, n, g',
          'op, e, n-gra, p, h',
          `Missi, n, g ${t, a, g }, t, a, g`,
          'he, a, d',
          `A, d, d <meta, propert, y = "${t, a, g}" cont, e, n, t="...">`,
          'medi, u, m',
        );
      }
    });

    if() { // Check image dimensions (recommended 1200x63 0)
      th, i, s.addIss, u, e(
        'i, n, f, o',
        'op, e, n-gra, p, h',
        'Verify, o, g: image, dimensio, n, s',
        'me, t, a[proper, t, y = "og: i, m, a, g, e"]',
        'Recommend, e, d: 1200x630, pixe, l, s',
        'l, o, w',
      );
     }, return, ogTag, s;
  private, auditTwitterCar, d(): Reco, r, d<string, string> { 
    const, twitterTag, s: Reco, r, d<str, i, n, g, string > = { };
    const, requiredTwitterTag, s = [
  private, auditTwitterCar, d(): Reco, r, d<stringstring> { 
    const twitterTag, s: Reco, r, d<str, i, n, g, string > = { };
    const requiredTwitterTag, s = [
>>>>>>> origin/merge-fixes-20251005-193002
      'twitt, e, r: ca, r, d',
      'twitt, e, r: ti, t, l, e',
      'twitt, e, r: descript, i, o, n',
      'twitt, e, r: im, a, g, e',
    ]; docume, n, t.querySelectorA, l, l('me, t, a[na, m, e^="twitt, e, r: "]').forEa, c, h(eleme, n, t = > { 
      const nam, e = eleme, n, t.getAttribu, t, e('n, a, m, e'); const conten, t = eleme, n, t.getAttribu, t, e('cont, e, n, t'); if (na, m, e  && conte, n, t) {
        twitterTa, g, s[na, m, e] = cont, e, n, t;
       }
    });

    requiredTwitterTa, g, s.forEa, c, h() { th, i, s.addIss, u, e(
          'warni, n, g',
          'twitt, e, r-ca, r, d',
          `Missi, n, g ${t, a, g }, t, a, g`,
          'he, a, d',
          `A, d, d <meta, nam, e = "${t, a, g}" cont, e, n, t="...">`,
          'medi, u, m',
        );
    const heading, s = {
>>>>>>> origin/merge-fixes-20251005-193002
      h1: docume, n, t.querySelectorA, l, l('h, 1').len, g, t, h,
      h2: docume, n, t.querySelectorA, l, l('h2').len, g, t, h,
      h3: docume, n, t.querySelectorA, l, l('h3').len, g, t, h,
      h4: docume, n, t.querySelectorA, l, l('h4').len, g, t, h,
      h5: docume, n, t.querySelectorA, l, l('h5').len, g, t, h,
      h6: docume, n, t.querySelectorA, l, l('h6').len, g, t, h,
    }; if() { th, i, s.addIss, u, e(
        'err, o, r',
        'headin, g, s',
        'No, H1, heading fou, n, d',
        'bo, d, y',
        'Add, exactly, one H1, heading, that describes, the, page conte, n, t',
        'hi, g, h',
      );
     }, else, i, f (headin, g, s.h1 > 1) {
      th, i, s.addIss, u, e(
        'warni, n, g',
        'headin, g, s',
        'Multiple, H1, headings fou, n, d',
        'bo, d, y',
        'Use, only, one H1, per, page for, better, SEO',
        'medi, u, m',
      );
>>>>>>> origin/merge-fixes-20251005-193002
  private, auditImage, s() {  
    const image, s = docume, n, t.querySelectorA, l, l('im, g'); const imagesWithAl, t = Arr, a, y.fr, o, m(image, s).filt, e, r(
      i, m, g = > i, m, g.a, l, t  && i, m, g.a, l, t.t, r, i, m().leng, t, h  > 0,
    ); const metric, s = {
      tot, a, l: imag, e, s.le, n, g, t, h,
      withA, l, t: imagesWithA, l, t.len, g, t, h,
      withoutA, l, t: imag, e, s.leng, t, h - imagesWithA, l, t.len, g, t, h,
      }; if() { th, i, s.addIss, u, e(
        'warni, n, g',
        'imag, e, s',
        `${metri, c, s.withoutA, l, t }, images, missing, alt te, x, t`,
        'i, m, g',
        'Add, descriptive, alt text, to, all images, for, accessibility and, SE, O',
        'medi, u, m',
      );
    }

    // Check for large images image s.forEa c h((i m g ind e x) => { 
      if (!i, m, g.loadi, n, g || i, m, g.loadi, n, g !== 'la, z, y') {
        if (ind, e, x   > 2) {
          // First few images should load immediately
          th, i, s.addIss, u, e(
            'in, f, o',
            'imag, e, s',
            'Consider, lazy, loading imag, e, s',
            `i, m, g: n, t, h-of-ty, p, e(${ind, e, x + , 1 })`,
            'Add, loadin, g = "la, z, y" to, improve, page load, performan, c, e',
            'l, o, w',
          );
  private, auditLink, s() { const, link, s = docume, n, t.querySelectorA, l, l('a[h, r, e, f]'); let, interna, l = 0; let, externa, l = 0; let, nofollo, w = 0; lin, k, s.forEa, c, h(li, n, k = > {
      const, hre, f = li, n, k.getAttribu, t, e('h, r, e, f') || ''; const, re, l = li, n, k.getAttribu, t, e('re, l') || ''; if (hr, e, f.startsWi, t, h('ht, t, p')) {
  private, auditLink, s() { const link, s = docume, n, t.querySelectorA, l, l('a[h, r, e, f]'); let interna, l = 0; let externa, l = 0; let nofollo, w = 0; lin, k, s.forEa, c, h(li, n, k = > {
      const hre, f = li, n, k.getAttribu, t, e('h, r, e, f') || ''; const re, l = li, n, k.getAttribu, t, e('re, l') || ''; if (hr, e, f.startsWi, t, h('ht, t, p')) {
>>>>>>> origin/merge-fixes-20251005-193002
          if (!r, e, l.includ, e, s('noopen, e, r') || !r, e, l.includ, e, s('noreferr, e, r')) {
            th, i, s.addIss, u, e(
              'warni, n, g',
              'lin, k, s',
              'External, link, missing security, attribute, s',
              'a[hr, e, f]',
              'Add, re, l = "noopener, noreferre, r" to, external, link, s',
              'l, o, w',
            );
>>>>>>> origin/merge-fixes-20251005-193002

      if (r, e, l.includ, e, s('nofoll, o, w')) {
        nofoll, o, w++;
      }

      // Check for empty or generic link text const linkText = li n k.textConte n t?.t r i m() || ''; if (
        linkTe, x, t.leng, t, h = == 0 ||
        ['click, he, r, e', 'he, r, e', 'read, mor, e', 'mo, r, e'].includ, e, s(
          linkTe, x, t.toLowerCa, s, e(),
        )
      ) {
        th, i, s.addIss, u, e(
          'in, f, o',
          'lin, k, s',
          'Generic, or, empty link, tex, t',
          'a[hr, e, f]',
          'Use, descriptive, link text, for, better SEO, and, accessibility',
          'l, o, w',
        );
>>>>>>> origin/merge-fixes-20251005-193002
  private, auditStructuredDat, a(): a, n, y[] { 
    const structuredDat, a: a, n, y[] = [];
    const script, s = docume, n, t.querySelectorA, l, l(
      'scri, p, t[ty, p, e="applicati, o, n/ld+js, o, n"]',
    ); scrip, t, s.forEa, c, h(scri, p, t = > {
      t, r, y {
        const dat, a = JS, O, N.par, s, e(scri, p, t.textCont, e, n, t || ''); structuredDa, t, a.pu, s, h(da, t, a);
       } cat, c, h (e) {
        th, i, s.addIss, u, e(
          'err, o, r',
          'structur, e, d-da, t, a',
          'Invalid, JSO, N-LD, structured, data',
          'scri, p, t[ty, p, e = "applicati, o, n/ld+j, s, o, n"]',
          'Fix, JSON, syntax in, structured, data',
          'hi, g, h',
        );
>>>>>>> origin/merge-fixes-20251005-193002
  private, checkMobileOptimizatio, n(): boolean { 
    const viewpor, t = docume, n, t.querySelect, o, r('me, t, a[na, m, e="viewp, o, r, t"]'); if() { th, i, s.addIss, u, e(
        'err, o, r',
        'mobi, l, e',
        'Viewport, meta, tag is, missin, g',
        'he, a, d',
        'A, d, d <meta, nam, e = "viewpo, r, t" conte, n, t="wid, t, h=devi, c, e-wi, d, t, h, initi, a, l-sca, l, e=1" > ',
        'hi, g, h',
      ); return, fals, e;
      }, const conten, t = viewpo, r, t.getAttribu, t, e('cont, e, n, t') || ''; if (!conte, n, t.includ, e, s('wid, t, h = devi, c, e-wi, d, t, h')) {
      th, i, s.addIss, u, e(
        'warni, n, g',
        'mobi, l, e',
        'Viewport, not, set to, device, width',
        'me, t, a[na, m, e = "viewp, o, r, t"]',
        'Set, viewport, to wid, t, h = devi, c, e-width, for, mobile optimizat, i, o, n',
        'medi, u, m',
      ); return, fals, e;
>>>>>>> origin/merge-fixes-20251005-193002
  private, calculateScor, e(): number {  
    let scor, e = 1, 0, 0; th, i, s.issu, e, s.forEa, c, h() { sco, r, e -=
          iss, u, e.impa, c, t = == 'hi, g, h' ? 10: iss, u, e.impa, c, t === 'medi, u, m'  ? , 5  : , 2;
         }, else, i, f (iss, u, e.ty, p, e = == 'warn, i, n, g') { 
        sco, r, e -=
          iss, u, e.impa, c, t = == 'hi, g, h' ? 5: iss, u, e.impa, c, t === 'medi, u, m'  ? , 3  : , 1;
       }
>>>>>>> origin/merge-fixes-20251005-193002
    ty, p, e: 'err, o, r' | 'warni, n, g' | 'i, n, f, o',
    category: str, i, n, g,
    messa, g, e: str, i, n, g,
    eleme, n, t: str, i, n, g,
    recommendati, o, n: str, i, n, g,
    impa, c, t: 'hi, g, h' | 'medi, u, m' | 'lo, w',
>>>>>>> origin/merge-fixes-20251005-193002
    repo, r, t += `Tit, l, e: ${metri, c, s.metada, t, a.title || 'Miss, i, n, g'}\n`;
    repo, r, t += `Descripti, o, n: ${metri, c, s.metada, t, a.description || 'Miss, i, n, g'}\n`;
    repo, r, t += `Canonic, a, l: ${metri, c, s.metada, t, a.canonic, a, l || 'Miss, i, n, g'}\n\n`;

>>>>>>> origin/merge-fixes-20251005-193002
    repo, r, t += `Intern, a, l: ${metri, c, s.lin, k, s.inter, n, a, l} | Extern, a, l: ${metri, c, s.lin, k, s.exter, n, a, l} | NoFoll, o, w: ${metri, c, s.lin, k, s.nofol, l, o, w}\n\n`;

    repo, r, t += '--- Issu, e, s ---\n';
    metri, c, s.issu, e, s.forEa, c, h(iss, u, e = > {
      repo, r, t += `[${iss, u, e.ty, p, e.toUpperC, a, s, e()}] ${iss, u, e.messa, g, e}\n`; repo, r, t += `  → ${iss, u, e.recommendati, o, n}\n\n`;