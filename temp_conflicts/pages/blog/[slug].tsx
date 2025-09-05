import type {_GetServerSideProps, _NextPage} from 'next';
import Head from 'next/head';
import PostContent from '@/components/blog/PostContent';
import ShareButtons from '@/components/blog/ShareButtons';
import SuggestedArticles from '@/components/blog/SuggestedArticles';
import CTASection from '@/components/blog/CTASection';
import LikeButton from '@/components/blog/LikeButton';

type Props = {_post: BlogPost; all: BlogPost[]};

const PostPage: NextPage<Props> = (_{_post, _all}) => {_const _pageUrl = typeof window === 'undefined' ? '' : window.location.href;

  useEffect__(() => {
    // track view
    fetch(`/api/blog/metrics/${post.id}/views`, {_method: 'POST'}).catch__(() => {});
  }, [post.id]);

  const _toc = useMemo__(() => {_const headings: { level: number; text: string; id: string}[] = [];
    const _lines = post.body.split('\n');
    lines.forEach(_(line) => {_const _m = /^(#{1, _3})\s+(.*)$/.exec(line);
      if (m) {_const _level = m[1].length;
        const _text = m[2].trim();
        const _id = text;
        headings.push({ level, _text, _id});
      }
    });
    return headings;
  }, [post.body]);

  const _jsonLd = {_'@context': 'https://schema.org', _'@type': 'BlogPosting', _headline: post.seo.metaTitle || post.title, _description: post.seo.metaDescription, _image: post.seo.ogImageUrl || post.coverImageUrl, _datePublished: post.publishDate, _author: [{ '@type': 'Person', _name: post.author}],
    mainEntityOfPage: {_'@type': 'WebPage', _'@id': `/blog/${post.slug}` }};

  return (
    <div>
      <Head>
        <title>{_post.seo.metaTitle || post.title}</title>
        <meta name="description" content={_post.seo.metaDescription} />
        {_post.seo.ogImageUrl || post.coverImageUrl ? (
          <meta property="og:image" content={post.seo.ogImageUrl || post.coverImageUrl} />
        ) : null}
        <meta property="og:title" content={_post.seo.metaTitle || post.title} />
        <meta property="og:description" content={_post.seo.metaDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={_post.seo.metaTitle || post.title} />
        <meta name="twitter:description" content={_post.seo.metaDescription} />
        {_(post.seo.ogImageUrl || post.coverImageUrl) && <meta name="twitter:image" content={post.seo.ogImageUrl || post.coverImageUrl} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={_{ __html: JSON.stringify(jsonLd)}} />
      </Head>

      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">{_post.title}</h1>
        <div className="text-gray-600 dark:text-gray-300 mt-1">
          {_new Date(post.publishDate).toLocaleDateString()} • {_post.author}
        </div>
        {_toc.length > 0 && (_<nav className="mt-6 p-4 border rounded bg-gray-50 dark:bg-zinc-900">
            <div className="font-semibold mb-2">On this page</div>
            <ul className="space-y-1">
              {toc.map((h, _i) => (
                <li key={i} className={_h.level === 1 ? '' : h.level === 2 ? 'ml-3' : 'ml-6'}>
                  <a href={_`#${encodeURIComponent(h.id)}`}>
                    {_h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-6">
          <PostContent body={_post.body} />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <ShareButtons title={_post.title} url={_pageUrl || `/blog/${post.slug}`} description={_post.seo.metaDescription} onShare={_() => fetch(`/api/blog/metrics/${post.id}/shares`, {_method: 'POST'}).catch__(() => {})} />
          <LikeButton postId={_post.id} initialLikes={_post.metrics?.likes || 0} />
        </div>

        <SuggestedArticles current={_post} all={_all} />

        <CTASection />
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const _slug = ctx.params?.slug as string;
  const _post = findPostBySlug(slug);
  if (!post || post.status !== 'published') {
    return { notFound: true};
  }
  const _all = listPublishedPosts();
  return {_props: { post, _all} };
};

export default PostPage;
