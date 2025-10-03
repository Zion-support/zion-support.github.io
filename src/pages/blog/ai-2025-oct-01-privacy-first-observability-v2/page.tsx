import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Privacy-First Observability v2 — User-Centric Traces, Zero-PII</title>
        <meta name="description" content="Scoped IDs, redaction filters, and retention budgets for rich, compliant traces without PII leaks." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/ai-2025-oct-01-privacy-first-observability-v2" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Privacy-First Observability v2 — User-Centric Traces, Zero-PII</h1>
            <p className="text-xl text-gray-300 text-center">Scoped IDs, redaction filters, and retention budgets for rich, compliant traces without PII leaks.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">Scoped IDs, redaction filters, and retention budgets for rich, compliant traces without PII leaks.</p>
            <p className="mb-4">href='https://ziontechgroup.com/blog/ai-2025-oct-01-privacy-first-observability-v2'
        />
            <p className="mb-4">field-level redaction, sampling tied to KPIs, and retention policies enforced by automation.</p>
            <p className="mb-4">fast, compliant visibility across services and edge devices.</p>
            
            
            
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