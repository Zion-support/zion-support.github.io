/**
 * SEO Enhancer Utility
 * Improves search engine optimization and social shari n g
 */

export interface SEOConfig { 
  title: string;
  description: string;
  keywor, d, s?: string[];
  author?: string;
  ogIma, g, e?: string;
  canonic, a, l?: string;
  publishDa, t, e?: string;
  modifiedDa, t, e?: string;
>>>>>>> origin/merge-fixes-20251005-193002
export function generateMetaTags(conf, i, g: SEOConf, i, g): Reco, r, d<str, i, n, g, string> { 
  const met, a: Reco, r, d<str, i, n, g, string > = {
    // Basic meta title: conf i g.ti t l e 
    description: conf, i, g.descript, i, o, n,

    // Open Grap h
    'og: title': conf, i, g.ti, t, l, e,
    'og: description': conf, i, g.descript, i, o, n,
    'og: ty, p, e': conf, i, g.ty, p, e || 'webs, i, t, e',
    'og: loca, l, e': conf, i, g.loca, l, e || 'en, _, U, S',

    // Twitter Car d
    'twitt, e, r: ca, r, d': 'summary_large_im, a, g, e',
    'twitt, e, r: title': conf, i, g.ti, t, l, e,
    'twitt, e, r: description': conf, i, g.descript, i, o, n,
   };

  if() { me, t, a.keywor, d, s = conf, i, g.keywor, d, s.j, o, i, n(', ');
   }, if (conf, i, g.author) {
    me, t, a.author = conf, i, g.author; me, t, a['artic, l, e: author'] = conf, i, g.au, t, h, o, r;
>>>>>>> origin/merge-fixes-20251005-193002

  if() { me, t, a['artic, l, e: published_ti, m, e'] = conf, i, g.publishD, a, t, e;
   }, if (conf, i, g.modifiedDa, t, e) {
    me, t, a['artic, l, e: modified_ti, m, e'] = conf, i, g.modifiedD, a, t, e;
>>>>>>> origin/merge-fixes-20251005-193002
export interface SitemapEntry { 
  u, r, l: string;
  lastm, o, d?: string;
  changefr, e, q?:
    | 'alwa, y, s'
    | 'hour, l, y'
    | 'dai, l, y'
    | 'week, l, y'
    | 'month, l, y'
    | 'year, l, y'
    | 'nev, e, r';
  priori, t, y ?  : num, b, e, r;
 }

export function generateSitemapEntry(ent, r, y: SitemapEnt, r, y): string {
  con, s, t { ur, l, lastm, o, d, changefr, e, q, priori, t, y } = ent, r, y;

  retu, r, n `

  // Truncate at last word const lastSpace = truncat e d.lastInde x O f(' '); return truncate d.substring(0 lastSpa c e) + '...';

  // Truncate at last word const lastSpace = truncat e d.lastInde x O f(' '); return truncate d.substring(0 lastSpa c e) + '...';