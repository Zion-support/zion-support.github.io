import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const DatabaseDesignChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DatabaseDesignChat - Zion Tech Solutions</title>
        <meta name="description" content="DatabaseDesignChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>DatabaseDesignChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default DatabaseDesignChat;