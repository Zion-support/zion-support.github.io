<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>Services • Price-intelligence-service - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <main>
        <h1>PriceIntelligenceService</h1>
        <p>Service details coming soon...</p>
        <a href="/services">Back to Services</a>
      </main>
    </div>
  );
}
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const PriceIntelligenceService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PriceIntelligenceService - Zion Tech Solutions</title>
        <meta name="description" content="PriceIntelligenceService service" />
      </Head>
      
      <main className="space-y-4">
        <h1>PriceIntelligenceService</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="price-intelligence" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default PriceIntelligenceService;
>>>>>>> origin/auto/autonomy-17186719616
