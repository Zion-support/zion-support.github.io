import React from 'react';
import Head from 'next/head';

export default function GovernanceCreatePage() {
  return (
    <>
      <Head>
        <title>Create Proposal - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Create a new governance proposal&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>Create Proposal</h1>
        <p className=&quot;text-lg mb-4&quot;>Submit a new governance proposal for community consideration.</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/governance&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Governance
          </Link>
        </div>
      </div>
    </>
  );
}
