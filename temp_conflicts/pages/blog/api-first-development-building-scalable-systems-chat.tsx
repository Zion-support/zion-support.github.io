
import Head from 'next/head';
import Link from 'next/link';
import ShareBar from '../../components/ShareBar';

const ApiFirstDevelopmentBuildingScalableSystemsChat = () => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content="ApiFirstDevelopmentBuildingScalableSystemsChat" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
      </Head>
      
      <main>
        <h1>ApiFirstDevelopmentBuildingScalableSystemsChat</h1>
        <p>Blog content coming soon...</p>
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
};

export default ApiFirstDevelopmentBuildingScalableSystemsChat;