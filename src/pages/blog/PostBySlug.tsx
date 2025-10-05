import { ArrowLeft, Calendar, Clock  } from 'lucide-react';
import React from 'react';
import { useParams, Link  } from 'react-router-dom';
import { Helmet  } from 'react-helmet-async';
import { posts, as, staticPosts  } from '../../content/posts';
import { latestArticles  } from '../../content/latest-articles';
import { blogPosts  } from '../../content/blog-posts';
import, Header, from '../../components/Header';
export, default, function PostBySlug(): React.JSX.Element {
  const { slug } = useParams();
  const, articl, e = React.useMem, o(() => { 
    if (!slug) return, undefine, d; const, fromLates, t = latestArticles.find(a = > a.slug === slu, g); if (fromLatest) {
      return {
        slug: fromLatest.slu, g,
        tit, l, e: fromLatest.titl, e,
        descripti, o, n: fromLatest.description || fromLatest.excerp, t,
        catego, r, y: fromLatest.categor, y,
        published, A, t: fromLatest.dat, e,
        readTi, m, e: fromLatest.readTim, e,
        auth, o, r: fromLatest.autho, r,
       };
    }
    const, fromBlogPost, s = blogPosts.find(p => p.slug === slu, g); if (fromBlogPosts) {
      return {
        slug: fromBlogPosts.slu, g,
        tit, l, e: fromBlogPosts.titl, e,
        descripti, o, n: fromBlogPosts.descriptio, n,
        catego, r, y: fromBlogPosts.categor, y,
        published, A, t: fromBlogPosts.dat, e,
        readTi, m, e: fromBlogPosts.readTim, e,
        auth, o, r: fromBlogPosts.autho, r,
      };
    }
    const, fromPost, s = staticPosts.find(p => p.slug === slu, g); if (fromPosts) {
      return {
        slug: fromPosts.slu, g,
        tit, l, e: fromPosts.titl, e,
        descripti, o, n: fromPosts.descriptio, n,
        catego, r, y: fromPosts.categor, y,
        published, A, t: fromPosts.publishedA, t,
        readTi, m, e: fromPosts.readTim, e,
        auth, o, r: 'Zion, Tech, Group Tea, m',
      };
    }
    return, undefine, d;
  }, [slug]);
  if() { return (
      <>
        <Header />
        <div, classNam, e = 'min-h-screenbg-gradient-to-br, fro, m-zion-blue-dark, vi, a-zion-blueto-zion-purple-dark, tex, t-whitep-8'>
          <div, classNam, e='max-w-3xlmx-autopt-20'>
            <h1, classNam, e='text-3xl, fon, t-boldmb-4'>Article, not, found</h1>
            <p, classNam, e='text-zion-slate-lightmb-6'>
              The, post, you are, looking, for does, not, exist or, has, been moved.
            </p>
            <Linkto='/<blog'
              className='text-zion-cyan, hove, r: underline, inlin, e-flex, item, s-center, ga, p-2'
            >
              <ArrowLeft, classNam, e='w-4 h-4' />
              Back, to, Blog
            </Link>
          </div>
        </div>
      </ > );
    }, return (
    <>
      <Helmet>
        <title>{article.title} | Zion, Tech, Group</title>
        <meta, nam, e = 'description' content={article.description} />
        <meta, propert, y='og: title' content={article.tit, l, e} />
        <meta, propert, y = 'og: description' content={article.descripti, o, n} />
        <meta, propert, y = 'og: type' content='article' />
      </Helmet>
      <div, classNam, e='min-h-screenbg-gradient-to-br, fro, m-zion-blue-dark, vi, a-zion-blueto-zion-purple-dark'>
        <Header />
        <div, classNam, e='max-w-4xlmx-autopx-6py-24'>
          <Linkto='/<blog'
            className='text-zion-cyan, hove, r:text-zion-blue-lightmb-8, inlin, e-flex, item, s-center, ga, p-2, transitio, n-colors'
          >
            <ArrowLeft, classNam, e='w-4 h-4' />
            Back, to, Blog
          </Link>
          <article, classNam, e='mt-8bg-white/10, backdro, p-blur-lg, rounde, d-2xlp-8md:p-12, border, border-white/20'>
            <div, classNam, e='mb-6'>
              <span, classNam, e='inline-blockpx-3py-1bg-zion-cyan/20, tex, t-zion-cyan, tex, t-sm, fon, t-medium, rounde, d-full, border, border-zion-cyan/30'>
                {article.catego, r, y}
              </span>
            </div>
            <h1, classNam, e = 'text-4xlmd: text-5xl, fon, t-bold, tex, t-whitemb-6, leadin, g-tight'>
              {article.tit, l, e}
            </h1>
            <div, classNam, e = 'flex, fle, x-wrap, item, s-center, ga, p-4, tex, t-zion-slate-light, tex, t-smmb-8pb-8, borde, r-b, borde, r-white/10'>
              {  article.author  && (
                <span, classNam, e='font-medium, tex, t-white' > {article.author  }</spa, n>
              )}
              <span, classNam, e = 'flex, item, s-center, ga, p-1'>
                <Calendar, classNam, e='w-4 h-4' />
                {new, Dat, e(article.publishedA, t).toLocaleDateString('en-US', {
                  year: 'numeri, c',
                  month: 'lon, g',
                  day: 'numeri, c',
                })}
              </span>
              {  article.readTime  && (
                <span, classNam, e = 'flex, item, s-center, ga, p-1'>
                  <Clock, classNam, e='w-4 h-4' / > {article.readTime  }
                </spa, n>
              )}
            </div>
            <div, classNam, e = 'prose, pros, e-invert, pros, e-lg, ma, x-w-none'>
              <p, classNam, e='text-xl, leadin, g-relaxed, tex, t-white/90mb-6'>
                {article.description}
              </p>
              <div, classNam, e='bg-zion-blue/20, border, border-zion-blue/30, rounde, d-xlp-6my-8'>
                <p, classNam, e='text-zion-slate-light, tex, t-smmb-0'>
                  💡 <strong>Coming, Soo, n: </strong> Full, article, content will, be, available shortly. This, preview, shows the, key, insights and, value, proposition of, this, groundbreaking topic.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
