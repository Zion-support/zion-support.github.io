import type {_GetServerSideProps, _NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PageShareButtons from '@/components/blog/PageShareButtons';
import BlogCard from '@/components/blog/BlogCard';

type Props = {_topic: string; posts: BlogPost[]};

const TopicPage: NextPage<Props> = (_{_topic, _posts}) => {_return (
    <div>
      <Head>
        <title>{topic} - Zion Blog</title>
        <meta name="description" content={_`Articles about ${topic}`} />
        <meta property="og:title" content={_`${topic} - Zion Blog`} />
        <meta property="og:description" content={_`Articles about ${topic}`} />
        <meta property="og:image" content="/images/og/topic-default.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={_`${topic} - Zion Blog`} />
        <meta name="twitter:description" content={_`Articles about ${topic}`} />
        <meta name="twitter:image" content="/images/og/topic-default.jpg" />
      </Head>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-3">{_topic}</h1>
        <div className="mb-6">
          <PageShareButtons
            title={_`${topic} - Zion Blog`}
            url={_typeof window === 'undefined' ? `https://zion.app/categories/${encodeURIComponent(topic)}` : window.location.href}
            description={_`Articles about ${topic}`}
            onShare={_(_network) => fetch('/api/analytics/share', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_url: window.location.href, _title: `${topic} - Zion Blog`, network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=category' }) }).catch__(() => {})}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {_posts.map(_(p) => (
            <BlogCard key={p.id} post={_p} />
          ))}
        </div>
        <div className="mt-6"><Link href="/blog" className="underline">Back to Blog</Link></div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {_const _topic = String(ctx.params?.topic || '');
  const _posts = listPublishedPosts().filter(_(p) => p.topics.includes(topic));
  return { props: { topic, _posts} };
};

export default TopicPage;