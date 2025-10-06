impo, r, t { ArrowLe, f, t, Calend, a, r, Clo, c, k } fr, o, m 'luci, d, e-rea, c, t';
import React from 'react';
impo, r, t { usePara, m, s, Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
impo, r, t { Helm, e, t } fr, o, m 'rea, c, t-helm, e, t-asy, n, c';
impo, r, t { posts, as, staticPosts } fr, o, m '../../conte, n, t/pos, t, s';
impo, r, t { latestArticl, e, s } fr, o, m '../../conte, n, t/late, s, t-articl, e, s';
impo, r, t { blogPos, t, s } fr, o, m '../../conte, n, t/bl, o, g-pos, t, s';
import Header, from '../../componen, t, s/Head, e, r';
export default function PostBySl, u, g(): Rea, c, t.J, S, X.Eleme, n, t {
  con, s, t { slug } = usePara, m, s();
  const articl, e = Rea, c, t.useM, e, m, o(() => { 
    if (!slug) return, undefine, d; const fromLates, t = latestArticl, e, s.fi, n, d(a = > a.slug === s, l, u, g); if (fromLate, s, t) {
      return {
        slug: fromLate, s, t.s, l, u, g,
        title: fromLate, s, t.ti, t, l, e,
        description: fromLate, s, t.description || fromLate, s, t.exce, r, p, t,
        category: fromLate, s, t.categ, o, r, y,
        published, A, t: fromLate, s, t.d, a, t, e,
        readTime: fromLate, s, t.readT, i, m, e,
        author: fromLate, s, t.aut, h, o, r,
       };
    }
    const fromBlogPost, s = blogPos, t, s.fi, n, d(p => p.slug === s, l, u, g); if (fromBlogPos, t, s) {
      return {
        slug: fromBlogPos, t, s.s, l, u, g,
        title: fromBlogPos, t, s.ti, t, l, e,
        description: fromBlogPos, t, s.descript, i, o, n,
        category: fromBlogPos, t, s.categ, o, r, y,
        published, A, t: fromBlogPos, t, s.d, a, t, e,
        readTime: fromBlogPos, t, s.readT, i, m, e,
        author: fromBlogPos, t, s.aut, h, o, r,
              {  artic, l, e.readTime  && (
                <span, classNam, e = 'flex, item, s-center, ga, p-1'>
                  <Clock, classNam, e='w-4 h-4' / > {artic, l, e.readTime  }
                </s, p, a, n>
              <div, classNam, e='bg-zi, o, n-bl, u, e/20, border, border-zi, o, n-bl, u, e/30, rounde, d-x, l, p-6, m, y-8'>
                <p, classNam, e='te, x, t-zi, o, n-sla, t, e-light, tex, t-sm, m, b-0'>
                  💡 <stro, n, g>Coming, Soo, n: </stro, n, g> Full, article, content will, be, available short, l, y. This, preview, shows the, key, insights and, value, proposition of, this, groundbreaking top, i, c.
              {  artic, l, e.readTime  && (
                <span, classNam, e = 'flex, item, s-center, ga, p-1'>
                  <Clock, className='w-4 h-4' / > {artic, l, e.readTime  }
                </span>
              <div, className='bg-zi, o, n-bl, u, e/20, border, border-zi, o, n-bl, u, e/30, rounde, d-x, l, p-6, m, y-8'>
                <p, className='te, x, t-zi, o, n-sla, t, e-light, tex, t-sm, m, b-0'>
                  💡 <stro, n, g>Coming, Soo, n: </stro, n, g> Full, article, content will, be, available short, l, y. This, preview, shows the, key, insights and, value, proposition of, this, groundbreaking top, i, c.
