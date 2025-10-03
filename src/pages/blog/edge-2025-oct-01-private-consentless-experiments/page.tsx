import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Edge 2025: Consentless Experiments v3 (&lt;100ms)</title>
        <meta name="description" content="Scoped IDs, on-device metrics, and DP noise enabling compliant A/B at &lt;100ms — v3 blueprint." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/edge-2025-oct-01-private-consentless-experiments/>" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Edge 2025: Consentless Experiments v3 (&lt;100ms)</h1>
            <p className="text-xl text-gray-300 text-center">Scoped IDs, on-device metrics, and DP noise enabling compliant A/B at &lt;100ms — v3 blueprint.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">Scoped IDs, on-device metrics, and DP noise enabling compliant A/B at &lt;100ms — v3 blueprint.</p>
            <p className="mb-4">Scoped IDs, on-device metrics, and DP noise enabling compliant A/B at &lt;100ms — v3 blueprint.'
        />
            <p className="mb-4">globally under 100ms.</p>
            
            
            <ul className="list-disc list-inside space-y-2 my-6">
              <li>Scoped IDs with residency and retention budgets.</li>
              <li>On-device aggregation and DP noise for zero-PII metrics.</li>
              <li>Signed configs with verifiable rollout attestations.</li>
            </ul>
            
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <Link to="/blog" className="text-cyan-300 underline hover:text-cyan-200 transition-colors">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}