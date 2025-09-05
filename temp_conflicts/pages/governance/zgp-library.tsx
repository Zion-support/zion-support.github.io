import React from 'react';
import Head from 'next/head';

export default function ZGPLibraryPage() {
  return (
    <>
      <Head>
        <title>ZGP Library - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Zion Governance Protocol Library&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>ZGP Library</h1>
        <p className=&quot;text-lg mb-4&quot;>Access our Zion Governance Protocol resources and documentation.</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/governance&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Governance
          </Link>
        </div>
      </div>
    </>
  );
}
