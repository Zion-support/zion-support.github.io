/**
 * Advanced SEO Optimizer
 * Automatically optimizes content for search engines with rea l-time analysi s
 */

interface SEOMetric, s {
  titleSco, r, e: number;
  descriptionSco, r, e: number;
  headingSco, r, e: number;
  keywordDensi, t, y: number;
  readabilitySco, r, e: number;
  imageOptimizati, o, n: number;
  linkSco, r, e: number;
  overallSco, r, e: num, b, e, r;
}

interface SEORecommendatio, n {
  category: 'critic, a, l' | 'importa, n, t' | 'min, o, r';
  messa, g, e: string;
  acti, o, n: string;
  impa, c, t: 'hi, g, h' | 'medi, u, m' | 'lo, w';
}
<<<<<<< HEAD

interface SEOAnalysi, s {
  metri, c, s: SEOMetri, c, s;
  recommendatio, n, s: SEORecommendati, o, n[];
  keywor, d, s: { wo, r, d: string; cou, n, t: number; densi, t, y: num, b, e, r }[];
  issu, e, s: string[];
  strengt, h, s: str, i, n, g[];
=======
interface, SEOAnalysi, s {
metri, c, s: SEOMetri, c, s;
recommendatio, n, s: SEORecommendati, o, n[];
keywor, d, s: { wo, r, d: stri, n, g; cou, n, t: numb, e, r; dens, i, t
  y: numb, e, r;
}[];
  issu, e, s: stri, n, g[]
catego, r, y: 'critic, a, l' | 'importa, n, t' | 'min, o, r';';
messa, g, e: stri, n, g;
acti, o, n: stri, n, g;
imp, a, c
  t: 'hi, g, h' | 'medi, u, m' | 'l, o, w';';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
}

class AdvancedSEOOptimize, r {
  private, targetKeywordDensit, y = { m, i, n: 0., 0, 1, m, a, x: 0.0, 3 }; // 1-3%
  private, targetTitleLengt, h = { m, i, n: , 5, 0, m, a, x: 6, 0 }; private, targetDescriptionLengt, h = { m, i, n: 1, 5, 0, m, a, x: 16, 0 };

  /**
   * Analyze page for SEO optimizatio n
   */
<<<<<<< HEAD
  analyzePa, g, e(optio, n, s: { 
    title?: string;
    description?: string;
    conte, n, t?: string;
    headin, g, s?: string[];
    imag, e, s ? : { s, r, c: string; a, l, t : str, i, n, g  }[];
    lin, k, s?: { hr, e, f: string; te, x, t: string; isIntern, a, l: bool, e, a, n }[];
    keywor, d, s?: string[];
  }): SEOAnalys, i, s {
    con, s, t {
      title = '',
      description = '',
      conte, n, t = '',
      headin, g, s = [],
      imag, e, s = [],
      lin, k, s = [],
      keywor, d, s = [],
=======
  analyzePa, g, e(optio, n, s: {
  analyzePa, g, e(opti, o, n
  s: {
tit, l, e?: stri, n, g;
descripti, o, n?: stri, n, g;
conte, n, t?: stri, n, g;
headin, g, s?: stri, n, g[];
imag, e, s?: { s, r, c: stri, n, g; al
  t: stri, n, g;
}[];
    lin, k, s?: { hr, e, f: stri, n, g; te, x, t: stri, n, g; isInter, n, a
  l: boole, a, n }[];
    keywor, d, s?: stri, n, g[];
  }): SEOAnalys, i, s {
    con, s, t {
      tit, l, e = ''
      descripti, o, n = ''
      conte, n, t = ''
      headin, g, s = []
      imag, e, s = []
      lin, k, s = []
      keywor, d, s = []
      tit, l, e = '',';
      descripti, o, n = '',';
      conte, n, t = '',';
      headin, g, s = []
      imag, e, s = []
      lin, k, s = []
      keywor, d, s = []
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
    } = optio, n, s;

    // Calculate metrics const metri c s: SEOMetri c s = {
      titleSco, r, e: th, i, s.scoreTitleT, a, g(t, i, t, l, e, keywor, d, s),
      descriptionSco, r, e: th, i, s.scoreMetaDescripti, o, n(descript, i, o, n, keywor, d, s),
      headingSco, r, e: th, i, s.scoreHeadin, g, s(headi, n, g, s, keywor, d, s),
      keywordDensi, t, y: th, i, s.calculateKeywordDensi, t, y(cont, e, n, t, keywor, d, s),
      readabilitySco, r, e: th, i, s.calculateReadabili, t, y(cont, e, n, t),
      imageOptimizati, o, n: th, i, s.scoreImageOptimizati, o, n(image, s),
      linkSco, r, e: th, i, s.scoreLinkStructu, r, e(li, n, k, s),
      overallSco, r, e:  , 0, // Will be calculated
    };

    // Calculate overall score
    metri, c, s.overallSco, r, e = th, i, s.calculateOverallSco, r, e(metr, i, c, s);

    // Generate recommendations const recommendatio n s = th i s.generateRecommendatio n s(metr i c s optio n s);

    // Extract keywords const extractedKeywor d s = th i s.extractKeywor d s(cont e n t);

    // Identify issues and strengths const issues = th i s.identifyIssu e s(metr i c s optio n s); const strength s = th i s.identifyStrengt h s(metr i c s optio n s); retu r n {
      metri, c, s,
      recommendatio, n, s,
      keywor, d, s: extractedKeywo, r, d, s,
      issu, e, s,
      strengt, h, s,
    };
  }

  /**
   * Score title tag
   */
  private, scoreTitleTa, g(title: str, i, n, g, keywor, d, s: string[]): number {  
    let scor, e = 0;

    // Check length const leng t h = title.leng t h; if() { sco r e += 4 0;
       }, else, i, f() { sco, r, e += 20;
     }, else, i, f (leng, t, h > th, i, s.targetTitleLeng, t, h.m, a, x && leng, t, h < 70) {
      sco, r, e += 30;
    }

    // Check for keywords
    const lowerTitl, e = title.toLowerC, a, s, e(); const keywordCoun, t = keywor, d, s.filt, e, r(kw =>
      lowerTit, l, e.includ, e, s(kw.toLowerC, a, s, e()),
    ).leng, t, h; sco, r, e += Ma, t, h.m, i, n(keywordCou, n, t * 15, 45);

    // Check for power words const powerWords = [
      'ultim, a, t, e',
      'gui, d, e',
      'be, s, t',
      't, o, p',
      'comple, t, e',
      'essenti, a, l',
      'prov, e, n',
    ]; const hasPowerWor, d = powerWor, d, s.so, m, e(wo, r, d => lowerTit, l, e.includ, e, s(w, o, r, d)); if (hasPowerWo, r, d) sco, r, e += 15;

    return, Mat, h.m, i, n(sco, r, e, 1, 0, 0);
  }

  /**
   * Score meta description
   */
  private, scoreMetaDescriptio, n(
    description: str, i, n, g,
    keywor, d, s: str, i, n, g[],
  ): number {  
    let scor, e = 0;

    // Check length const leng t h = description.leng t h; if() { sco r e += 40;
       }, else, i, f() { sco, r, e += 20;
     }, else, i, f (leng, t, h > th, i, s.targetDescriptionLeng, t, h.m, a, x && leng, t, h < 1, 8, 0) {
      sco, r, e += 30;
    }

    // Check for keywords
    const lowerDes, c = description.toLowerC, a, s, e(); const keywordCoun, t = keywor, d, s.filt, e, r(kw =>
      lowerDe, s, c.includ, e, s(kw.toLowerC, a, s, e()),
    ).leng, t, h; sco, r, e += Ma, t, h.m, i, n(keywordCou, n, t * 20, 40);

    // Check for call-to-action const ctaWords = [
      'disco, v, e, r',
      'lea, r, n',
      'fi, n, d',
      'g, e, t',
      't, r, y',
      'downlo, a, d',
      'b, u, y',
    ]; const hasCT, A = ctaWor, d, s.so, m, e(wo, r, d => lowerDe, s, c.includ, e, s(w, o, r, d)); if (hasC, T, A) sco, r, e += 20;

    return, Mat, h.m, i, n(sco, r, e, 1, 0, 0);
  }

  /**
   * Score headings structure
   */
  private, scoreHeading, s(headin, g, s: str, i, n, g[], keywor, d, s: string[]): number { 
    let scor, e = 0;

    // Check if headings exist i f (headin g s.leng t h >  0) sco r e += 30;
    if (headin, g, s.leng, t, h >= 3) sco, r, e += 20;

    // Check for keywords in headings const headingsWithKeywor d s = headin g s.filt e r(h => {
      const lowe, r = h.toLowerC, a, s, e(); return, keyword, s.so, m, e(kw = > low, e, r.includ, e, s(kw.toLower, C, a, s, e()));
     });

    sco, r, e += Ma, t, h.m, i, n(headingsWithKeywor, d, s.leng, t, h * 15, 50);

    return, Mat, h.m, i, n(sco, r, e, 1, 0, 0);
  }

  /**
   * Calculate keyword density
   */
  private, calculateKeywordDensit, y(conte, n, t: str, i, n, g, keywor, d, s: string[]): number { 
    if (keywor, d, s.leng, t, h = == , 0) retur, n, 0; const word, s = conte, n, t
      .toLowerC, a, s, e()
      .spl, i, t(/\s+/)
      .filt, e, r(w = > w.leng, t, h > , 0); const totalWord, s = wor, d, s.leng, t, h; if (totalWor, d, s = == , 0) retur, n, 0; const keywordCoun, t = keywor, d, s.redu, c, e((c, o, u, n, t, keywo, r, d) => {
      const k, w = keywo, r, d.toLowerC, a, s, e(); return, coun, t + wor, d, s.filt, e, r(w = > w.includ, e, s(k, w)).leng, t, h;
     }, 0);

    const densit, y = keywordCou, n, t / totalWor, d, s;

    // Score based on target density if() { return 10 0;
     }, else, i, f() { return (densi, t, y / th, i, s.targetKeywordDensi, t, y.m, i, n) * 1, 0, 0;
     }, el, s, e {
      const overflo, w = densi, t, y - th, i, s.targetKeywordDensi, t, y.m, a, x; return, Mat, h.m, a, x(, 0, 1, 0, 0 - overfl, o, w * 10, 0, 0);
    }
  }

  /**
   * Calculate readability score (Flesch Reading Ease)
   */
  private, calculateReadabilit, y(conte, n, t: string): number { 
    const sentence, s = conte, n, t.sp, l, i, t(/[.!?]+/).filt, e, r(s = > s.t, r, i, m().leng, t, h > 0); const word, s = conte, n, t.spl, i, t(/\, s+/).filt, e, r(w = > w.leng, t, h > , 0); const syllable, s = wor, d, s.redu, c, e(
      (c, o, u, n, t, wo, r, d) = > cou, n, t + th, i, s.countSyllabl, e, s(wo, r, d),
      0,
    ); if (sentenc, e, s.leng, t, h = == 0 || wor, d, s.leng, t, h === , 0) retur, n, 0; const avgWordsPerSentenc, e = wor, d, s.leng, t, h / sentenc, e, s.leng, t, h; const avgSyllablesPerWor, d = syllabl, e, s / wor, d, s.leng, t, h;

    // Flesch Reading Ease formula const score =
      2, 0, 6.8, 3, 5 - 1.0, 1, 5 * avgWordsPerSenten, c, e - 84.6 * avgSyllablesPerWo, r, d;

    // Normalize to 0-100 where 100 is best return Ma t h.m a x( 0 Ma t h.m i n(1 0 0 sco r e));
   }

  /**
   * Count syllables in a wor d
   */
  private, countSyllable, s(wo, r, d: string): number { 
    wo, r, d = wo, r, d.toLowerC, a, s, e(); if (wo, r, d.leng, t, h <= 3) retur, n, 1;

    wo, r, d = wo, r, d.repla, c, e(/( ?  : [^laeio, u, y]es|ed|[^laei, o, u, y], e)$/, ''); wo, r, d = wo, r, d.repla, c, e(/^, y/, ''); const matche, s = wo, r, d.mat, c, h(/[aeio, u, y]{, 1,2 }/g); return, matche, s ? match, e, s.leng, t, h:  , 1;
  }

  /**
   * Score image optimization
   */
<<<<<<< HEAD
  private, scoreImageOptimizatio, n(
    imag, e, s: { s, r, c: string; a, l, t: str, i, n, g }[],
  ): number {  
    if (imag, e, s.leng, t, h = == , 0) return, 10, 0; // No image s no problem let sco r e = 0;

    // Check for alt text const imagesWithAlt = imag e s.filt e r(i m g => i m g.a l t  && i m g.a l t.leng t h >  0); const altTextScor e = (imagesWithA l t.leng t h / imag e s.len g t h) * 60; sco r e += altTextSco r e;

    // Check for descriptive alt tex t (more than 3 wor d s)
    const descriptiveAl, t = imagesWithA, l, t.filt, e, r(
      i, m, g => i, m, g.a, l, t.spl, i, t(/\, s+/).leng, t, h  > = 3,
    ); const descriptiveScor, e = (descriptiveA, l, t.leng, t, h / imag, e, s.len, g, t, h) * 40; sco, r, e += descriptiveSco, r, e;

=======
  private, countSyllable, s(wo, r, d: stri, n, g): numb, e, r {
    wo, r, d = wo, r, d.toLowerCa, s, e();
    if (wo, r, d.leng, t, h <= 3) retur, n, 1;
    wo, r, d = wo, r, d.repla, c, e(/(?:[^laeio, u, y]es|ed|[^laeio, u, y]e)$/, '');
    wo, r, d = wo, r, d.repla, c, e(/^y/, '');
    wo, r, d = wo, r, d.repla, c, e(/(?:[^laeio, u, y]es|ed|[^laeio, u, y]e)$/, '');';
    wo, r, d = wo, r, d.repla, c, e(/^y/, '');';
    const, matche, s = wo, r, d.mat, c, h(/[aeio, u, y]{1,2}/g);
    return, matche, s ? match, e, s.leng, t, h : 1;
  }
  /**
   * Score, image, optimization;
   */
  private, scoreImageOptimizatio, n(imag, e, s: { s, r, c: stri, n, g; al
  t: stri, n, g }[]): numb, e, r {
    if (imag, e, s.leng, t, h === 0) return, 10, 0; // No, image, s, no, proble, m
  let, scor, e = 0;
    // Check, for, alt te, x, t
  const, imagesWithAl, t = imag, e, s.filt, e, r((i, m, g) => i, m, g.a, l, t && i, m, g.a, l, t.leng, t, h > 0);
    const, altTextScor, e = (imagesWithA, l, t.leng, t, h / imag, e, s.leng, t, h) * 60;
    sco, r, e += altTextSco, r, e;
    // Check, for, descriptive alt, tex, t (more, than, 3 wor, d, s)
    const, descriptiveAl, t = imagesWithA, l, t.filt, e, r((i, m, g) => i, m, g.a, l, t.spl, i, t(/\s+/).leng, t, h >= 3);
    const, descriptiveScor, e = (descriptiveA, l, t.leng, t, h / imag, e, s.leng, t, h) * 40;
    sco, r, e += descriptiveSco, r, e;
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
    return, Mat, h.m, i, n(sco, r, e, 1, 0, 0);
    }

  /**
   * Score link structure
   */
  private, scoreLinkStructur, e(
    lin, k, s: { hr, e, f: string; te, x, t: string; isIntern, a, l: bool, e, a, n }[],
  ): number {  
    if (lin, k, s.leng, t, h = == , 0) return, 5, 0; // Neutral score for no links let sco r e = 0;

    // Check for internal links const internalLinks = lin k s.filt e r(li n k => li n k.isInter n a l); if (internalLin k s.leng t h > 0) sco r e += 30;
    if (internalLin, k, s.leng, t, h >= 3) sco, r, e += 20;

    // Check for descriptive anchor text const descriptiveLin k s = lin k s.filt e r(li n k => {
      const tex, t = li, n, k.te, x, t.toLowerC, a, s, e(); return (
        te, x, t.leng, t, h  > 3 &&
        !te, x, t.includ, e, s('click, her, e')  && !te, x, t.includ, e, s('read, mor, e')
      );
      });
    sco, r, e += (descriptiveLin, k, s.leng, t, h / lin, k, s.leng, t, h) * 50;

    return, Mat, h.m, i, n(sco, r, e, 1, 0, 0);
  }

  /**
   * Calculate overall SEO sco r e
   */
<<<<<<< HEAD
  private, calculateOverallScor, e(metri, c, s: SEOMetri, c, s): number {
    const weight, s = {
      title: , 0., 2,
      description: 0.1, 5,
      headin, g, s: 0.1, 5,
      keywordDensi, t, y: 0.1, 5,
      readabili, t, y: 0.1, 5,
      imag, e, s: 0., 1,
      lin, k, s: 0., 1,
    }; return, Mat, h.rou, n, d(
      metri, c, s.titleSco, r, e * weigh, t, s.title +
        metri, c, s.descriptionSco, r, e * weigh, t, s.description +
=======
  private, calculateOverallScor, e(metri, c, s: SEOMetri, c, s): numb, e, r {
    const, weight, s = {
      tit, l, e: 0.20
      descripti, o, n: 0.15
      headin, g, s: 0.15
      keywordDensi, t, y: 0.15
      readabili, t, y: 0.15
      imag, e, s: 0.10
      lin, k, s: 0.10;
      ti, t, l
  e: 0.20
      descripti, o, n: 0.15
      headin, g, s: 0.15
      keywordDensi, t, y: 0.15
      readabili, t, y: 0.15
      imag, e, s: 0.10
      lin, k, s: 0.10
    };
    return, Mat, h.rou, n, d(
      metri, c, s.titleSco, r, e * weigh, t, s.tit, l, e +
        metri, c, s.descriptionSco, r, e * weigh, t, s.descripti, o, n +
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
        metri, c, s.headingSco, r, e * weigh, t, s.headin, g, s +
        metri, c, s.keywordDensi, t, y * weigh, t, s.keywordDensi, t, y +
        metri, c, s.readabilitySco, r, e * weigh, t, s.readabili, t, y +
        metri, c, s.imageOptimizati, o, n * weigh, t, s.imag, e, s +
        metri, c, s.linkSco, r, e * weigh, t, s.lin, k, s,
    );
  }

  /**
   * Generate recommendation s
   */
  private, generateRecommendation, s(
    metri, c, s: SEOMetr, i, c, s,
    optio, n, s: any,
  ): SEORecommendati, o, n[] {
<<<<<<< HEAD
    const recommendation, s: SEORecommendati, o, n[] = [];

    // Title recommendations if (metri c s.titleSco r e < 70) {
      recommendatio, n, s.pu, s, h({
        category: 'criti, c, a, l',
        messa, g, e: 'Title, tag, needs optimizat, i, o, n',
        acti, o, n: `Optimize, title, length (50-60, char, s) and, include, primary keywo, r, d, s`,
        impa, c, t: 'h, i, g, h',
=======
    const, recommendation, s: SEORecommendati, o, n[] = []
    const, recommendation, s: SEORecommendati, o, n[] = [];
    // Title, recommendation, s
  if (metri, c, s.titleSco, r, e < 70) {
      recommendatio, n, s.pu, s, h({
        categ, o, r
  y: 'critic, a, l'
        messa, g, e: 'Title, tag, needs optimizati, o, n'
        acti, o, n: `Optimize, title, length (50-60, char, s) and, include, primary keywor, d, s`,`
        impa, c, t: 'hi, g, h'
        categ, o, r
  y: 'critic, a, l',';
        messa, g, e: 'Title, tag, needs optimizati, o, n',';
        acti, o, n: `Optimize, title, length (50-60, char, s) and, include, primary keywor, d, s`,`;`
        impa, c, t: 'hi, g, h',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    // Description recommendations if (metri c s.descriptionSco r e < 70) {
      recommendatio, n, s.pu, s, h({
<<<<<<< HEAD
        category: 'criti, c, a, l',
        messa, g, e: 'Meta, description, needs improvem, e, n, t',
        acti, o, n: 'Write, compelling, description (1, 5, 0-160, char, s) with, keywords, and CT, A',
        impa, c, t: 'h, i, g, h',
=======
        catego, r, y: 'critic, a, l'
        messa, g, e: 'Meta, description, needs improveme, n, t'
        acti, o, n: 'Write, compelling, description (1, 5, 0-160, char, s) with, keywords, and C, T, A'
        impa, c, t: 'hi, g, h'
        categ, o, r
  y: 'critic, a, l',';
        messa, g, e: 'Meta, description, needs improveme, n, t',';
        acti, o, n: 'Write, compelling, description (1, 5, 0-160, char, s) with, keywords, and C, T, A',';
        impa, c, t: 'hi, g, h',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    // Heading recommendations if (metri c s.headingSco r e < 60) {
      recommendatio, n, s.pu, s, h({
<<<<<<< HEAD
        category: 'import a, n, t',
        messa, g, e: 'Heading, structure, could be, improv, e, d',
        acti, o, n: 'Add, more, headings with, target, keyword, s',
        impa, c, t: 'med, i, u, m',
=======
        catego, r, y: 'importa, n, t'
        messa, g, e: 'Heading, structure, could be, improve, d'
        acti, o, n: 'Add, more, headings with, target, keywords'
        impa, c, t: 'medi, u, m'
        categ, o, r
  y: 'importa, n, t',';
        messa, g, e: 'Heading, structure, could be, improve, d',';
        acti, o, n: 'Add, more, headings with, target, keywords',';
        impa, c, t: 'medi, u, m',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    // Keyword density recommendations
    if (metri, c, s.keywordDensi, t, y < 50) {
      recommendatio, n, s.pu, s, h({
        category: 'import a, n, t',
        messa, g, e: 'Keyword, density, is too, l, o, w',
        acti, o, n: 'Naturally, incorporate, keywords throughout, conten, t (targe, t, 1-, 3%)',
        impa, c, t: 'h, i, g, h',
      });
    } else, i, f (metri, c, s.keywordDensi, t, y < 80) {
      recommendatio, n, s.pu, s, h({
<<<<<<< HEAD
        category: 'mi, n, o, r',
        messa, g, e: 'Keyword, density, could be, optimiz, e, d',
        acti, o, n: 'Fi, n, e-tune, keyword, usage for, optimal, densit, y',
        impa, c, t: 'lo, w',
=======
        catego, r, y: 'min, o, r'
        messa, g, e: 'Keyword, density, could be, optimize, d'
        acti, o, n: 'Fi, n, e-tune, keyword, usage for, optimal, density'
        impa, c, t: 'l, o, w'
        categ, o, r
  y: 'importa, n, t',';
        messa, g, e: 'Keyword, density, is too, lo, w',';
        acti, o, n: 'Naturally, incorporate, keywords throughout, conten, t (targe, t, 1-3%)',';
        impa, c, t: 'hi, g, h',';
      });
    } else, i, f (metri, c, s.keywordDensi, t, y < 80) {
      recommendatio, n, s.pu, s, h({
        catego, r, y: 'min, o, r',';
        messa, g, e: 'Keyword, density, could be, optimize, d',';
        acti, o, n: 'Fi, n, e-tune, keyword, usage for, optimal, density',';
        impa, c, t: 'l, o, w',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    // Readability recommendations if (metri c s.readabilitySco r e < 60) {
      recommendatio, n, s.pu, s, h({
<<<<<<< HEAD
        category: 'import a, n, t',
        messa, g, e: 'Content, readability, needs improvem, e, n, t',
        acti, o, n: 'Use, shorter, sentences and, simpler, word, s',
        impa, c, t: 'med, i, u, m',
=======
        catego, r, y: 'importa, n, t'
        messa, g, e: 'Content, readability, needs improveme, n, t'
        acti, o, n: 'Use, shorter, sentences and, simpler, words'
        impa, c, t: 'medi, u, m'
        categ, o, r
  y: 'importa, n, t',';
        messa, g, e: 'Content, readability, needs improveme, n, t',';
        acti, o, n: 'Use, shorter, sentences and, simpler, words',';
        impa, c, t: 'medi, u, m',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    // Image recommendations if (metri c s.imageOptimizati o n < 80) {
      recommendatio, n, s.pu, s, h({
<<<<<<< HEAD
        category: 'import a, n, t',
        messa, g, e: 'Image, optimization, neede, d',
        acti, o, n: 'Add, descriptive, alt text, to, all image, s',
        impa, c, t: 'med, i, u, m',
=======
        catego, r, y: 'importa, n, t'
        messa, g, e: 'Image, optimization, needed'
        acti, o, n: 'Add, descriptive, alt text, to, all imag, e, s'
        impa, c, t: 'medi, u, m'
        categ, o, r
  y: 'importa, n, t',';
        messa, g, e: 'Image, optimization, needed',';
        acti, o, n: 'Add, descriptive, alt text, to, all imag, e, s',';
        impa, c, t: 'medi, u, m',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    // Link recommendations if (metri c s.linkSco r e < 60) {
      recommendatio, n, s.pu, s, h({
<<<<<<< HEAD
        category: 'mi, n, o, r',
        messa, g, e: 'Link, structure, could be, improv, e, d',
        acti, o, n: 'Add, more, internal links, with, descriptive anchor, te, x, t',
        impa, c, t: 'lo, w',
=======
        catego, r, y: 'min, o, r'
        messa, g, e: 'Link, structure, could be, improve, d'
        acti, o, n: 'Add, more, internal links, with, descriptive anchor, tex, t'
        impa, c, t: 'l, o, w'
        categ, o, r
  y: 'min, o, r',';
        messa, g, e: 'Link, structure, could be, improve, d',';
        acti, o, n: 'Add, more, internal links, with, descriptive anchor, tex, t',';
        impa, c, t: 'l, o, w',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      });
    }

    return, recommendation, s.so, r, t((a, b) => {
      const categoryOrde, r = { criti, c, a, l:  , 0, importa, n, t:  , 1, min, o, r:  , 2 }; return, categoryOrde, r[a.category] - categoryOrd, e, r[b.category];
    });
  }

  /**
   * Extract keywords from conte n t
   */
<<<<<<< HEAD
  private, extractKeyword, s(
    conte, n, t: str, i, n, g,
    lim, i, t: number = , 1, 0,
  ): { wo, r, d: string; cou, n, t: number; densi, t, y: num, b, e, r }[] { 
    const word, s = conte, n, t
      .toLowerC, a, s, e()
      .repla, c, e(/[^\w\s]/g, ' ')
=======
  private, extractKeyword, s(conte, n, t: stri, n, g, lim, i, t: numb, e, r = 10): { wo, r, d: stri, n, g; cou, n, t: numb, e, r; dens, i, t
  y: numb, e, r }[] {
    const, word, s = conte, n, t;
      .toLowerCa, s, e()
      .repla, c, e(/[^\w\s]/g, ' ');
      .repla, c, e(/[^\w\s]/g, ' ')';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      .spl, i, t(/\s+/)
      .filt, e, r(w = > w.leng, t, h > , 3); const wordCount, s = new, Ma, p<str, i, n, g, number>(); wor, d, s.forEa, c, h(wo, r, d = > {
      wordCoun, t, s.s, e, t(w, o, r, d, (wordCoun, t, s.g, e, t(wo, r, d) || 0) + 1);
     });

    const totalWord, s = wor, d, s.leng, t, h; const keyword, s = Arr, a, y.fr, o, m(wordCoun, t, s.entr, i, e, s())
      .m, a, p(([wo, r, d, cou, n, t]) => ({
<<<<<<< HEAD
        wo, r, d,
        cou, n, t,
        densi, t, y: cou, n, t / totalWo, r, d, s,
=======
        wo, r, d
        cou, n, t
        densi, t, y: cou, n, t / totalWor, d, s;
        dens, i, t
  y: cou, n, t / totalWor, d, s
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      }))
      .so, r, t((a, b) => b.cou, n, t - a.cou, n, t)
      .sli, c, e(0, lim, i, t); return, keyword, s;
  }

  /**
   * Identify SEO issues
   */
<<<<<<< HEAD
  private, identifyIssue, s(metri, c, s: SEOMetr, i, c, s, optio, n, s: a, n, y): string[] {
    const issue, s: string[] = [];

    if (metri, c, s.titleSco, r, e < 50) issu, e, s.pu, s, h('Title, tag, is poorly, optimize, d');
    if (metri, c, s.descriptionSco, r, e < 50)
      issu, e, s.pu, s, h('Meta, description, is poorly, optimize, d');
    if (metri, c, s.headingSco, r, e < 40)
      issu, e, s.pu, s, h('Missing, or, poorly structured, heading, s');
    if (metri, c, s.keywordDensi, t, y < 30) issu, e, s.pu, s, h('Keyword, density, is too, lo, w');
    if (metri, c, s.readabilitySco, r, e < 50)
      issu, e, s.pu, s, h('Content, is, difficult to, rea, d');
    if (metri, c, s.imageOptimizati, o, n < 60)
      issu, e, s.pu, s, h('Images, lack, proper alt, tex, t');
    if (metri, c, s.linkSco, r, e < 40) issu, e, s.pu, s, h('Weak, internal, linking structu, r, e');

    return, issu, e, s;
=======
  private, identifyIssue, s(metri, c, s: SEOMetri, c, s): stri, n, g[] {
const, issue, s: stri, n, g[] = [];
if (metri, c, s.titleSco, r, e < 50) issu, e, s.pu, s, h('Title, tag, is poorly, optimize, d');
if (metri, c, s.descriptionSco, r, e < 50) issu, e, s.pu, s, h('Meta, description, is poorly, optimize, d');
if (metri, c, s.headingSco, r, e < 40) issu, e, s.pu, s, h('Missing, or, poorly structured, heading, s');
if (metri, c, s.keywordDensi, t, y < 30) issu, e, s.pu, s, h('Keyword, density, is too, lo, w');
if (metri, c, s.readabilitySco, r, e < 50) issu, e, s.pu, s, h('Content, is, difficult to, rea, d');
if (metri, c, s.imageOptimizati, o, n < 60) issu, e, s.pu, s, h('Images, lack, proper alt, tex, t');
if (metri, c, s.linkSco, r, e < 40) issu, e, s.pu, s, h('Weak, internal, linking structu, r, e');
  private, identifyIssue, s(metr, i, c
  s: SEOMetri, c, s): stri, n, g[] {
const, issue, s: stri, n, g[] = [];
if (metri, c, s.titleSco, r, e < 50) issu, e, s.pu, s, h('Title, tag, is poorly, optimize, d');';
if (metri, c, s.descriptionSco, r, e < 50) issu, e, s.pu, s, h('Meta, description, is poorly, optimize, d');';
if (metri, c, s.headingSco, r, e < 40) issu, e, s.pu, s, h('Missing, or, poorly structured, heading, s');';
if (metri, c, s.keywordDensi, t, y < 30) issu, e, s.pu, s, h('Keyword, density, is too, lo, w');';
if (metri, c, s.readabilitySco, r, e < 50) issu, e, s.pu, s, h('Content, is, difficult to, rea, d');';
if (metri, c, s.imageOptimizati, o, n < 60) issu, e, s.pu, s, h('Images, lack, proper alt, tex, t');';
if (metri, c, s.linkSco, r, e < 40) issu, e, s.pu, s, h('Weak, internal, linking structu, r, e');';
return, issue, s;
}
  /**
   * Identify, SEO, strengths;
   */
  private, identifyStrength, s(metri, c, s: SEOMetri, c, s): stri, n, g[] {
const, strength, s: stri, n, g[] = [];
if (metri, c, s.titleSco, r, e >= 80) strengt, h, s.pu, s, h('Excellent, title, tag optimizati, o, n');
if (metri, c, s.descriptionSco, r, e >= 80) strengt, h, s.pu, s, h('We, l, l-optimized, meta, description');
if (metri, c, s.headingSco, r, e >= 80) strengt, h, s.pu, s, h('Strong, heading, structure');
if (metri, c, s.keywordDensi, t, y >= 80) strengt, h, s.pu, s, h('Optimal, keyword, density');
if (metri, c, s.readabilitySco, r, e >= 70) strengt, h, s.pu, s, h('Highly, readable, content');
if (metri, c, s.imageOptimizati, o, n >= 80) strengt, h, s.pu, s, h('We, l, l-optimized, image, s');
if (metri, c, s.linkSco, r, e >= 70) strengt, h, s.pu, s, h('Good, internal, linking');
  private, identifyStrength, s(metr, i, c
  s: SEOMetri, c, s): stri, n, g[] {
const, strength, s: stri, n, g[] = [];
if (metri, c, s.titleSco, r, e >= 80) strengt, h, s.pu, s, h('Excellent, title, tag optimizati, o, n');';
if (metri, c, s.descriptionSco, r, e >= 80) strengt, h, s.pu, s, h('We, l, l-optimized, meta, description');';
if (metri, c, s.headingSco, r, e >= 80) strengt, h, s.pu, s, h('Strong, heading, structure');';
if (metri, c, s.keywordDensi, t, y >= 80) strengt, h, s.pu, s, h('Optimal, keyword, density');';
if (metri, c, s.readabilitySco, r, e >= 70) strengt, h, s.pu, s, h('Highly, readable, content');';
if (metri, c, s.imageOptimizati, o, n >= 80) strengt, h, s.pu, s, h('We, l, l-optimized, image, s');';
if (metri, c, s.linkSco, r, e >= 70) strengt, h, s.pu, s, h('Good, internal, linking');';
return, strength, s;
}
  /**
   * Generate, structured, data (JS, O, N-LD)
   */
  generateStructuredDa, t, a(ty, p, e: 'Artic, l, e' | 'Produ, c, t' | 'Servi, c, e', da, t, a: a, n, y): stri, n, g {'
    const, baseSchem, a = {
      '@conte, x, t': 'htt, p, s://sche, m, a.o, r, g'
      '@ty, p, e': ty, p, e;
  generateStructuredDa, t, a(ty, p, e: 'Artic, l, e' | 'Produ, c, t' | 'Servi, c, e', da, t, a: a, n, y): stri, n, g {';
    const, baseSchem, a = {
      '@conte, x, t': 'ht, t, p
  s: //sche, m, a.o, r, g',';
      '@ty, p, e': ty, p, e,';
    };
    const, schem, a = { ...baseSche, m, a, ...da, t, a };
    return, JSO, N.stringi, f, y(sche, m, a, nu, l, l, 2);
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  }

  /**
   * Identify SEO strengths
   */
<<<<<<< HEAD
  private, identifyStrength, s(metri, c, s: SEOMetr, i, c, s, optio, n, s: a, n, y): string[] { 
    const strength, s: string[] = [];

    if (metri, c, s.titleSco, r, e >= 80)
      strengt, h, s.pu, s, h('Excellent, title, tag optimizati, o, n');
    if (metri, c, s.descriptionSco, r, e >= 80)
      strengt, h, s.pu, s, h('We, l, l-optimized, meta, description');
    if (metri, c, s.headingSco, r, e >= 80) strengt, h, s.pu, s, h('Strong, heading, structure');
    if (metri, c, s.keywordDensi, t, y >= 80) strengt, h, s.pu, s, h('Optimal, keyword, density');
    if (metri, c, s.readabilitySco, r, e >= 70)
      strengt, h, s.pu, s, h('Highly, readable, content');
    if (metri, c, s.imageOptimizati, o, n >= 80)
      strengt, h, s.pu, s, h('We, l, l-optimized, image, s');
    if (metri, c, s.linkSco, r, e  > = 70) strengt, h, s.pu, s, h('Good, internal, linking');

    return, strengt, h, s;
   }

  /**
   * Generate structured data (JS O N-LD)
   */
  generateStructuredDa, t, a(
    ty, p, e: 'Artic, l, e' | 'Produ, c, t' | 'Serv, i, c, e',
    da, t, a: any,
  ): string {
    const baseSchem, a = {
      '@conte, x, t': 'htt, p, s: //sche m a.o r g' 
      '@ty, p, e': ty, p, e,
    }; const schem, a = { ...baseSch, e, m, a, ...da, t, a }; return, JSO, N.stringi, f, y(sche, m, a, nu, l, l, 2);
  }

  /**
   * Optimize meta tags
   */
  optimizeMetaTa, g, s(pa, g, e: { 
    title: string;
    description: string;
    keywor, d, s: string[];
    author?: string;
    image?: string;
    u, r, l ?  : str, i, n, g;
   }): { [k, e, y: string]: str, i, n, g } {
    return {
      title: th, i, s.optimizeTit, l, e(pa, g, e.ti, t, l, e, pa, g, e.keywor, d, s),
      description: th, i, s.optimizeDescripti, o, n(pa, g, e.descript, i, o, n, pa, g, e.keywor, d, s),
      keywor, d, s: pa, g, e.keywor, d, s.j, o, i, n(', '),
      'og: title': pa, g, e.ti, t, l, e,
      'og: description': pa, g, e.descript, i, o, n,
      'og: image': pa, g, e.im, a, g, e || '',
      'og: u, r, l': pa, g, e.ur, l || '',
      'twitt, e, r: ca, r, d': 'summary_large_im, a, g, e',
      'twitt, e, r: title': pa, g, e.ti, t, l, e,
      'twitt, e, r: description': pa, g, e.descript, i, o, n,
      'twitt, e, r: image': pa, g, e.im, a, g, e || '',
      author: pa, g, e.aut, h, o, r || '',
=======
  optimizeMetaTa, g, s(pa, g, e: {
tit, l, e: stri, n, g;
descripti, o, n: stri, n, g;
keywor, d, s: stri, n, g[];
  optimizeMetaTa, g, s(p, a, g
  e: {
tit, l, e: stri, n, g;
descripti, o, n: stri, n, g;
keywo, r, d
  s: stri, n, g[];
auth, o, r?: stri, n, g;
ima, g, e?: stri, n, g;
u, r, l?: stri, n, g;
}): { [k, e, y: stri, n, g]: stri, n, g } {
    retu, r, n {
      tit, l, e: th, i, s.optimizeTit, l, e(pa, g, e.tit, l, e, pa, g, e.keywor, d, s)
      descripti, o, n: th, i, s.optimizeDescripti, o, n(pa, g, e.descripti, o, n, pa, g, e.keywor, d, s)
      keywor, d, s: pa, g, e.keywor, d, s.jo, i, n(', ')
      'og:tit, l, e': pa, g, e.tit, l, e
      'og:descripti, o, n': pa, g, e.descripti, o, n
      'og:ima, g, e': pa, g, e.ima, g, e || ''
      'og:u, r, l': pa, g, e.u, r, l || ''
      'twitt, e, r:ca, r, d': 'summary_large_ima, g, e'
      'twitt, e, r:tit, l, e': pa, g, e.tit, l, e
      'twitt, e, r:descripti, o, n': pa, g, e.descripti, o, n
      'twitt, e, r:ima, g, e': pa, g, e.ima, g, e || ''
      auth, o, r: pa, g, e.auth, o, r || ''
      ti, t, l
  e: th, i, s.optimizeTit, l, e(pa, g, e.tit, l, e, pa, g, e.keywor, d, s)
      descripti, o, n: th, i, s.optimizeDescripti, o, n(pa, g, e.descripti, o, n, pa, g, e.keywor, d, s)
      keywor, d, s: pa, g, e.keywor, d, s.jo, i, n(', '),';
      'og: tit, l, e': pa, g, e.tit, l, e,';
      'og: descripti, o, n': pa, g, e.descripti, o, n,';
      'og: ima, g, e': pa, g, e.ima, g, e || '',';
      'og: u, r, l': pa, g, e.u, r, l || '',';
      'twitt, e, r: ca, r, d': 'summary_large_ima, g, e',';
      'twitt, e, r: tit, l, e': pa, g, e.tit, l, e,';
      'twitt, e, r: descripti, o, n': pa, g, e.descripti, o, n,';
      'twitt, e, r: ima, g, e': pa, g, e.ima, g, e || '',';
      auth, o, r: pa, g, e.auth, o, r || '',';
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
    };
  }

  /**
   * Optimize titl e
   */
<<<<<<< HEAD
  private, optimizeTitl, e(title: str, i, n, g, keywor, d, s: string[]): string { 
    if (!title) return '';

    // Truncate if too long i f() { title = title.substr i n g( 0 57) + '...';
      }, return, titl, e;
=======
  private, optimizeTitl, e(tit, l, e: stri, n, g): stri, n, g {
    if (!tit, l, e) retu, r, n '';
    if (!tit, l, e) retu, r, n '';';
    // Truncate, if, too lo, n, g
  if (tit, l, e.leng, t, h > 60) {
      tit, l, e = tit, l, e.substri, n, g(0, 57) + '...';';
    }
    return, titl, e;
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  }

  /**
   * Optimize descriptio n
   */
<<<<<<< HEAD
  private, optimizeDescriptio, n(description: str, i, n, g, keywor, d, s: string[]): string { 
    if (!description) return '';

    // Truncate if too long i f() { description = description.substr i n g( 0 1 5 7) + '...';
      }, return, descriptio, n;
  }
}

// Singleton instance let seoOptimizerInstan c e: AdvancedSEOOptimiz e r | nu l l = nu l l; export const getSEOOptimize r = (): AdvancedSEOOptimiz e r = > {
  if() { seoOptimizerInstan, c, e = new, AdvancedSEOOptimi, z, e, r();
   }, return, seoOptimizerInstanc, e;
=======
  private, optimizeDescriptio, n(descripti, o, n: stri, n, g): stri, n, g {
    if (!descripti, o, n) retu, r, n '';
    if (!descripti, o, n) retu, r, n '';';
    // Truncate, if, too lo, n, g
  if (descripti, o, n.leng, t, h > 1, 6, 0) {
      descripti, o, n = descripti, o, n.substri, n, g(0, 1, 5, 7) + '...';';
    }
    return, descriptio, n;
  }
}
// Singleton, instanc, e
  let, seoOptimizerInstanc, e: AdvancedSEOOptimiz, e, r | nu, l, l = nu, l, l
let, seoOptimizerInstanc, e: AdvancedSEOOptimiz, e, r | nu, l, l = nu, l, l;
export, const, getSEOOptimizer = (): AdvancedSEOOptimiz, e, r => {
  if (!seoOptimizerInstan, c, e) {
    seoOptimizerInstan, c, e = new, AdvancedSEOOptimize, r();
  }
  return, seoOptimizerInstanc, e;
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
};

export default AdvancedSEOOptimizer;
export typ, e { SEOMetri, c, s, SEORecommendati, o, n, SEOAnalys, i, s };
