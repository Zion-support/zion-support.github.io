import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const SecurityAuditingChat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SecurityAuditingChat - Zion Tech Solutions</title>
        <meta name="description" content="SecurityAuditingChat service" />
      </Head>
      
      <main className="space-y-4">
        <h1>SecurityAuditingChat</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default SecurityAuditingChat;