import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const UiUxDesignChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UiUxDesignChat - Zion Tech Solutions</title>
        <meta name="description" content="UiUxDesignChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>UiUxDesignChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default UiUxDesignChat;