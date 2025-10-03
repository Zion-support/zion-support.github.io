import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Consentless Journeys v3 — Private Personalization &lt;100ms</title>
        <meta name="description" content="Scoped IDs, signed configs, and on-device models for zero-PII journeys worldwide under 100ms." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/edge-2025-oct-01-consentless-journeys-v3" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Consentless Journeys v3 — Private Personalization &lt;100ms</h1>
            <p className="text-xl text-gray-300 text-center">Scoped IDs, signed configs, and on-device models for zero-PII journeys worldwide under 100ms.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">Scoped IDs, signed configs, and on-device models for zero-PII journeys worldwide under 100ms.</p>
            <p className="mb-4">href='https://ziontechgroup.com/blog/edge-2025-oct-01-consentless-journeys-v3'
        />
            <p className="mb-4">configuration, and on-device models. Achieve global &lt;100ms UX without
            collecting PII.</p>
            <p className="mb-4">redaction, and differential privacy signals for compliant analytics.</p>
            
            
            
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