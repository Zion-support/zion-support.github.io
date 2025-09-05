import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

type Props = { posts: BlogPost[]; authors: string[]; topics: string[]; tags: string[] };

const BlogHome: NextPage<Props> = ({ posts, authors, topics, tags }) => {
  const [filters, setFilters] = useState<{ author?: string; topic?: string; tag?: string }>({});

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (filters.author && p.author !== filters.author) return false;
      if (filters.topic && !p.topics.includes(filters.topic)) return false;
      if (filters.tag && !p.tags.includes(filters.tag)) return false;
      return true;
    });
  }, [posts, filters]);

  const hero = filtered[0];
  const rest = filtered.slice(1);

  return (
    <Layout>
      <Head>
        <title>Blog - Zion AI Marketplace</title>
        <meta name=&quot;description&quot; content=&quot;Insights on AI, DevOps, and digital transformation.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Zion Blog&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Insights on AI, DevOps, and digital transformation.&quot; />
        <meta property=&quot;og:image&quot; content=&quot;/images/og/blog-default.jpg&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;Zion Blog&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Insights on AI, DevOps, and digital transformation.&quot; />
        <meta name=&quot;twitter:image&quot; content=&quot;/images/og/blog-default.jpg&quot; />
      </Head>

      <div className=&quot;mx-auto max-w-6xl&quot;>
        <h1 className=&quot;text-4xl font-bold mb-4&quot;>Zion Blog</h1>
        <p className=&quot;text-gray-600 dark:text-gray-300 mb-3&quot;>Thought leadership on AI, DevOps, and building with speed.</p>
        <div className=&quot;mb-6&quot;>
          <PageShareButtons
            title=&quot;Zion Blog&quot;
            url={typeof window === 'undefined' ? 'https://zion.app/blog' : window.location.href}
            description=&quot;Insights on AI and DevOps from Zion.&quot;
            onShare={(network) => fetch('/api/analytics/share', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: window.location.href, title: 'Zion Blog', network, utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=blog' }) }).catch(() => {})}
          />
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {posts.map((p) => (
            <div key={p.slug} className=&quot;p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors rounded-lg&quot;>
              <h2 className=&quot;text-white text-xl font-semibold mb-2&quot;>{p.title}</h2>
              <p className=&quot;text-gray-400 mb-4&quot;>{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className=&quot;text-cyan-400 hover:text-white font-medium&quot;>Read →</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = listPublishedPosts();
  const authors = listAllAuthors();
  const topics = listAllTopics();
  const tags = listAllTags();
  return { props: { posts, authors, topics, tags } };
};

export default BlogHome;
