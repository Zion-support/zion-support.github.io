impo, r, t { ArrowLe, f, t, Calend, a, r, Clo, c, k } fr, o, m 'luci, d, e-rea, c, t';
import, React, from 'rea, c, t';
impo, r, t { usePara, m, s, Li, n, k } fr, o, m 'rea, c, t-rout, e, r-d, o, m';
impo, r, t { Helm, e, t } fr, o, m 'rea, c, t-helm, e, t-asy, n, c';
impo, r, t { posts, as, staticPosts } fr, o, m '../../conte, n, t/pos, t, s';
impo, r, t { latestArticl, e, s } fr, o, m '../../conte, n, t/late, s, t-articl, e, s';
impo, r, t { blogPos, t, s } fr, o, m '../../conte, n, t/bl, o, g-pos, t, s';
import, Header, from '../../componen, t, s/Head, e, r';
export, default, function PostBySl, u, g(): Rea, c, t.J, S, X.Eleme, n, t {
  con, s, t { sl, u, g } = usePara, m, s();
  const, articl, e = Rea, c, t.useM, e, m, o(() => { 
    if (!sl, u, g) return, undefine, d; const, fromLates, t = latestArticl, e, s.fi, n, d(a = > a.sl, u, g === s, l, u, g); if (fromLate, s, t) {
      retu, r, n {
        sl, u, g: fromLate, s, t.s, l, u, g,
        tit, l, e: fromLate, s, t.ti, t, l, e,
        descripti, o, n: fromLate, s, t.descripti, o, n || fromLate, s, t.exce, r, p, t,
        catego, r, y: fromLate, s, t.categ, o, r, y,
        published, A, t: fromLate, s, t.d, a, t, e,
        readTi, m, e: fromLate, s, t.readT, i, m, e,
        auth, o, r: fromLate, s, t.aut, h, o, r,
       };
    }
    const, fromBlogPost, s = blogPos, t, s.fi, n, d(p => p.sl, u, g === s, l, u, g); if (fromBlogPos, t, s) {
      retu, r, n {
        sl, u, g: fromBlogPos, t, s.s, l, u, g,
        tit, l, e: fromBlogPos, t, s.ti, t, l, e,
        descripti, o, n: fromBlogPos, t, s.descript, i, o, n,
        catego, r, y: fromBlogPos, t, s.categ, o, r, y,
        published, A, t: fromBlogPos, t, s.d, a, t, e,
        readTi, m, e: fromBlogPos, t, s.readT, i, m, e,
        auth, o, r: fromBlogPos, t, s.aut, h, o, r,
      };
    }
    const, fromPost, s = staticPos, t, s.fi, n, d(p => p.sl, u, g === s, l, u, g); if (fromPos, t, s) {
      retu, r, n {
        sl, u, g: fromPos, t, s.s, l, u, g,
        tit, l, e: fromPos, t, s.ti, t, l, e,
        descripti, o, n: fromPos, t, s.descript, i, o, n,
        catego, r, y: fromPos, t, s.categ, o, r, y,
        published, A, t: fromPos, t, s.publishe, d, A, t,
        readTi, m, e: fromPos, t, s.readT, i, m, e,
        auth, o, r: 'Zion, Tech, Group T, e, a, m',
      };
    }
    return, undefine, d;
  }, [sl, u, g]);
  if() { retu, r, n (
      <>
        <Head, e, r />
        <div, classNam, e = 'm, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-zi, o, n-bl, u, e-dark, vi, a-zi, o, n-blue, t, o-zi, o, n-purp, l, e-dark, tex, t-whit, e, p-8'>
          <div, classNam, e='m, a, x-w-3xl, m, x-auto, p, t-20'>
            <h1, classNam, e='te, x, t-3xl, fon, t-bold, m, b-4'>Article, not, found</h1>
            <p, classNam, e='te, x, t-zi, o, n-sla, t, e-light, m, b-6'>
              The, post, you are, looking, for does, not, exist or, has, been mov, e, d.
            </p>
            <Link, t, o='/<bl, o, g'
              classNa, m, e='te, x, t-zi, o, n-cyan, hove, r: underline, inlin, e-flex, item, s-center, ga, p-2'
            >
              <ArrowLeft, classNam, e='w-4 h-4' />
              Back, to, Blog
            </Li, n, k>
          </d, i, v>
        </d, i, v>
      </ > );
    }, retu, r, n (
    <>
      <Helm, e, t>
        <tit, l, e>{artic, l, e.tit, l, e} | Zion, Tech, Group</tit, l, e>
        <meta, nam, e = 'descripti, o, n' conte, n, t={artic, l, e.descripti, o, n} />
        <meta, propert, y='og: tit, l, e' conte, n, t={artic, l, e.t, i, t, l, e} />
        <meta, propert, y = 'og: descripti, o, n' conte, n, t={artic, l, e.descrip, t, i, o, n} />
        <meta, propert, y = 'og: ty, p, e' conte, n, t='artic, l, e' />
      </Helm, e, t>
      <div, classNam, e='m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-zi, o, n-bl, u, e-dark, vi, a-zi, o, n-blue, t, o-zi, o, n-purp, l, e-da, r, k'>
        <Head, e, r />
        <div, classNam, e='m, a, x-w-4xl, m, x-auto, p, x-6, p, y-24'>
          <Link, t, o='/<bl, o, g'
            classNa, m, e='te, x, t-zi, o, n-cyan, hove, r:te, x, t-zi, o, n-bl, u, e-light, m, b-8, inlin, e-flex, item, s-center, ga, p-2, transitio, n-colo, r, s'
          >
            <ArrowLeft, classNam, e='w-4 h-4' />
            Back, to, Blog
          </Li, n, k>
          <article, classNam, e='mt-8, b, g-whi, t, e/10, backdro, p-bl, u, r-lg, rounde, d-2x, l, p-8, m, d:p-12, border, border-whi, t, e/20'>
            <div, classNam, e='mb-6'>
              <span, classNam, e='inli, n, e-block, p, x-3, p, y-1, b, g-zi, o, n-cy, a, n/20, tex, t-zi, o, n-cyan, tex, t-sm, fon, t-medium, rounde, d-full, border, border-zi, o, n-cy, a, n/30'>
                {artic, l, e.cate, g, o, r, y}
              </sp, a, n>
            </d, i, v>
            <h1, classNam, e = 'te, x, t-4xl, m, d: te, x, t-5xl, fon, t-bold, tex, t-white, m, b-6, leadin, g-tig, h, t'>
              {artic, l, e.t, i, t, l, e}
            </h1>
            <div, classNam, e = 'flex, fle, x-wrap, item, s-center, ga, p-4, tex, t-zi, o, n-sla, t, e-light, tex, t-sm, m, b-8, p, b-8, borde, r-b, borde, r-whi, t, e/10'>
              {  artic, l, e.auth, o, r  && (
                <span, classNam, e='fo, n, t-medium, tex, t-whi, t, e' > {artic, l, e.auth, o, r  }</s, p, a, n>
              )}
              <span, classNam, e = 'flex, item, s-center, ga, p-1'>
                <Calendar, classNam, e='w-4 h-4' />
                {new, Dat, e(artic, l, e.publishe, d, A, t).toLocaleDateStri, n, g('en-US', {
                  ye, a, r: 'nume, r, i, c',
                  mon, t, h: 'l, o, n, g',
                  d, a, y: 'nume, r, i, c',
                })}
              </sp, a, n>
              {  artic, l, e.readTi, m, e  && (
                <span, classNam, e = 'flex, item, s-center, ga, p-1'>
                  <Clock, classNam, e='w-4 h-4' / > {artic, l, e.readTi, m, e  }
                </s, p, a, n>
              )}
            </d, i, v>
            <div, classNam, e = 'prose, pros, e-invert, pros, e-lg, ma, x-w-no, n, e'>
              <p, classNam, e='te, x, t-xl, leadin, g-relaxed, tex, t-whi, t, e/90, m, b-6'>
                {artic, l, e.descripti, o, n}
              </p>
              <div, classNam, e='bg-zi, o, n-bl, u, e/20, border, border-zi, o, n-bl, u, e/30, rounde, d-x, l, p-6, m, y-8'>
                <p, classNam, e='te, x, t-zi, o, n-sla, t, e-light, tex, t-sm, m, b-0'>
                  💡 <stro, n, g>Coming, Soo, n: </stro, n, g> Full, article, content will, be, available short, l, y. This, preview, shows the, key, insights and, value, proposition of, this, groundbreaking top, i, c.
                </p>
              </d, i, v>
            </d, i, v>
          </artic, l, e>
        </d, i, v>
      </d, i, v>
    </>
  );
}
