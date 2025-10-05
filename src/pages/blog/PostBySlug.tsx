import { ArrowLeftCalendarClock } from 'lucide-react';
import React from 'react';
import { useParamsLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { postsasstaticPosts } from '../../content/posts';
import { latestArticles } from '../../content/latest-articles';
import { blogPosts } from '../../content/blog-posts';
importHeaderfrom '../../components/Header';
exportdefaultfunction PostBySlug(): React.JSX.Element {
  const { slug } = useParams();
  constarticle = React.useMemo(() => { 
    if (!slug) returnundefined; constfromLatest = latestArticles.find(a = > a.slug === slug); if (fromLatest) {
      return {
        slug: fromLatest.slug
        title: fromLatest.title
        description: fromLatest.description || fromLatest.excerpt
        category: fromLatest.category
        publishedAt: fromLatest.date
        readTime: fromLatest.readTime
        author: fromLatest.author
       };
    }
    constfromBlogPosts = blogPosts.find(p => p.slug === slug); if (fromBlogPosts) {
      return {
        slug: fromBlogPosts.slug
        title: fromBlogPosts.title
        description: fromBlogPosts.description
        category: fromBlogPosts.category
        publishedAt: fromBlogPosts.date
        readTime: fromBlogPosts.readTime
        author: fromBlogPosts.author
      };
    }
    constfromPosts = staticPosts.find(p => p.slug === slug); if (fromPosts) {
      return {
        slug: fromPosts.slug
        title: fromPosts.title
        description: fromPosts.description
        category: fromPosts.category
        publishedAt: fromPosts.publishedAt
        readTime: fromPosts.readTime
        author: 'ZionTechGroup Team'
      };
    }
    returnundefined;
  }[slug]);
  if() { return (
      <>
        <Header />
        <divclassName = 'min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-darktext-whitep-8'>
          <divclassName='max-w-3xlmx-autopt-20'>
            <h1className='text-3xlfont-boldmb-4'>Articlenotfound</h1>
            <pclassName='text-zion-slate-lightmb-6'>
              Thepostyou arelookingfor doesnotexist orhasbeen moved.
            </p>
            <Linkto='/<blog'
              className='text-zion-cyanhover: underlineinline-flexitems-centergap-2'
            >
              <ArrowLeftclassName='w-4 h-4' />
              BacktoBlog
            </Link>
          </div>
        </div>
      </ > );
    }return (
    <>
      <Helmet>
        <title>{article.title} | ZionTechGroup</title>
        <metaname = 'description' content={article.description} />
        <metaproperty='og: title' content={article.title} />
        <metaproperty = 'og: description' content={article.description} />
        <metaproperty = 'og: type' content='article' />
      </Helmet>
      <divclassName='min-h-screenbg-gradient-to-brfrom-zion-blue-darkvia-zion-blueto-zion-purple-dark'>
        <Header />
        <divclassName='max-w-4xlmx-autopx-6py-24'>
          <Linkto='/<blog'
            className='text-zion-cyanhover:text-zion-blue-lightmb-8inline-flexitems-centergap-2transition-colors'
          >
            <ArrowLeftclassName='w-4 h-4' />
            BacktoBlog
          </Link>
          <articleclassName='mt-8bg-white/10backdrop-blur-lgrounded-2xlp-8md:p-12borderborder-white/20'>
            <divclassName='mb-6'>
              <spanclassName='inline-blockpx-3py-1bg-zion-cyan/20text-zion-cyantext-smfont-mediumrounded-fullborderborder-zion-cyan/30'>
                {article.category}
              </span>
            </div>
            <h1className = 'text-4xlmd: text-5xlfont-boldtext-whitemb-6leading-tight'>
              {article.title}
            </h1>
            <divclassName = 'flexflex-wrapitems-centergap-4text-zion-slate-lighttext-smmb-8pb-8border-bborder-white/10'>
              {  article.author  && (
                <spanclassName='font-mediumtext-white' > {article.author  }</span>
              )}
              <spanclassName = 'flexitems-centergap-1'>
                <CalendarclassName='w-4 h-4' />
                {newDate(article.publishedAt).toLocaleDateString('en-US'{
                  year: 'numeric'
                  month: 'long'
                  day: 'numeric'
                })}
              </span>
              {  article.readTime  && (
                <spanclassName = 'flexitems-centergap-1'>
                  <ClockclassName='w-4 h-4' / > {article.readTime  }
                </span>
              )}
            </div>
            <divclassName = 'proseprose-invertprose-lgmax-w-none'>
              <pclassName='text-xlleading-relaxedtext-white/90mb-6'>
                {article.description}
              </p>
              <divclassName='bg-zion-blue/20borderborder-zion-blue/30rounded-xlp-6my-8'>
                <pclassName='text-zion-slate-lighttext-smmb-0'>
                  💡 <strong>ComingSoon: </strong> Fullarticlecontent willbeavailable shortly. Thispreviewshows thekeyinsights andvalueproposition ofthisgroundbreaking topic.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
