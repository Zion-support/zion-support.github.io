import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Federated Learning — Zero-PII Personalization at the Edge</title>
        <meta name="description" content="Scoped IDs, on-device training, DP noise, and attestations enabling privacy-preserving learning worldwide." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/edge-2025-sept-30-federated-learning-zero-pii" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Federated Learning — Zero-PII Personalization at the Edge</h1>
            <p className="text-xl text-gray-300 text-center">Scoped IDs, on-device training, DP noise, and attestations enabling privacy-preserving learning worldwide.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">Scoped IDs, on-device training, DP noise, and attestations enabling privacy-preserving learning worldwide.</p>
            <p className="mb-4">href='https://ziontechgroup.com/blog/edge-2025-sept-30-federated-learning-zero-pii'
        />
            <p className="mb-4">compliance-friendly training and evaluation.</p>
            <p className="mb-4">Begin with non-sensitive features, validate with offline evals, then roll out with budget-aware canaries.</p>
            
            
            <ul className="list-disc list-inside space-y-2 my-6">
              <li>Scoped identifiers and signed policy configs</li>
              <li>On-device update aggregation with DP noise</li>
              <li>Attestations and verifiable pipelines</li>
              <li>Edge rollout with KPIs and rollback hooks</li>
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