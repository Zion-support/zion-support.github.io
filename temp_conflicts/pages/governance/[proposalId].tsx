import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ProposalDetailPage() {
  const router = useRouter();
  const { proposalId } = router.query;

  return (
    <>
      <Head>
        <title>Proposal Details - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;View proposal details and vote&quot; />
      </Head>
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-6&quot;>Proposal Details</h1>
        {proposalId && (
          <p className=&quot;text-lg mb-4&quot;>Proposal ID: {proposalId}</p>
        )}
        <p className=&quot;text-lg mb-4&quot;>Review the proposal details and cast your vote.</p>
        <div className=&quot;mt-4&quot;>
          <a href=&quot;/governance&quot; className=&quot;text-blue-600 hover:underline&quot;>
            ← Back to Governance
          </Link>
        </div>
      </div>
    </>
  );
}
