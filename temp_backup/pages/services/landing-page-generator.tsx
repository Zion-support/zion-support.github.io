<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>Services • Landing-page-generator - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <main>
        <h1>LandingPageGenerator</h1>
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

const LandingPageGenerator: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandingPageGenerator - Zion Tech Solutions</title>
        <meta name="description" content="LandingPageGenerator service" />
      </Head>
      
      <main className="space-y-4">
        <h1>LandingPageGenerator</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="landing-page-generator" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default LandingPageGenerator;
>>>>>>> origin/auto/autonomy-17186719616
