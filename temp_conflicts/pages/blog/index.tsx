import type {_GetServerSideProps, _NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';

type Props = {_posts: BlogPost[]; authors: string[]; topics: string[]; tags: string[]};

const BlogHome: NextPage<Props> = (_{_posts, _authors, _topics, _tags}) => {_const [filters, _setFilters] = useState<{ author?: string; topic?: string; tag?: string}>({});

  const _filtered = useMemo__(() => {_return posts.filter(_(p) => {
      if (filters.author && p.author !== filters.author) return false;
      if (filters.topic && !p.topics.includes(filters.topic)) return false;
      if (filters.tag && !p.tags.includes(filters.tag)) return false;
      return true;});
  }, [posts, filters]);

  const _hero = filtered[0];
  const _rest = filtered.slice(1);

  return (_<Layout>
      <Head>
        <title>Blog - Zion AI Marketplace</title>
        <meta name="description" content="Insights on AI, _DevOps, _and digital transformation." />
        <meta property="og:title" content="Zion Blog" />
        <meta property="og:description" content="Insights on AI, _DevOps, _and digital transformation." />
        <meta property="og:image" content="/images/og/blog-default.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Blog" />
        <meta name="twitter:description" content="Insights on AI, _DevOps, _and digital transformation." />
        <meta name="twitter:image" content="/images/og/blog-default.jpg" />
      </Head>

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-4">Zion Blog</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-3">Thought leadership on AI, _DevOps, _and building with speed.</p>
        <div className="mb-6">
          <PageShareButtons
            title="Zion Blog"
            url={_typeof window === 'undefined' ? 'https://zion.app/blog' : window.location.href}
            description="Insights on AI and DevOps from Zion."
            onShare={_(network) => fetch('/api/analytics/share', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_url: window.location.href, _title: 'Zion Blog', _network, _utm: 'utm_source=' + network + '&utm_medium=share&utm_campaign=blog'}) }).catch__(() => {})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {_posts.map(_(p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors rounded-lg">
              <h2 className="text-white text-xl font-semibold mb-2">{_p.title}</h2>
              <p className="text-gray-400 mb-4">{_p.excerpt}</p>
              <Link href={_`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {_const _posts = listPublishedPosts();
  const _authors = listAllAuthors();
  const _topics = listAllTopics();
  const _tags = listAllTags();
  return { props: { posts, _authors, _topics, _tags} };
};

export default BlogHome;
