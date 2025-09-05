import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className=&quot;min-h-screen p-8&quot;>
      <Head>
        <title>Favicon.ico - Placeholder</title>
        <meta name=&quot;robots&quot; content=&quot;noindex&quot; />
      </Head>
      <div className=&quot;max-w-3xl mx-auto&quot;>
        <h1 className=&quot;text-2xl font-semibold mb-2&quot;>Favicon.ico</h1>
        <p className=&quot;text-gray-600 mb-6&quot;>Auto-generated placeholder for missing route: <code>/favicon.ico</code>.</p>
        <Link href=&quot;/&quot;><a className=&quot;text-blue-600 hover:underline&quot;>Back to Home</Link></Link>
      </div>
    </main>
  );
}
