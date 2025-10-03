import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>AI 2025: Operational Trust Scorecards v3</title>
        <meta name="description" content="SLIs → KPIs with budgets, canaries, and instant rollback — updated v3 playbook for operational trust." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/ai-2025-oct-01-operational-trust-v3/>" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">AI 2025: Operational Trust Scorecards v3</h1>
            <p className="text-xl text-gray-300 text-center">SLIs → KPIs with budgets, canaries, and instant rollback — updated v3 playbook for operational trust.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">SLIs → KPIs with budgets, canaries, and instant rollback — updated v3 playbook for operational trust.</p>
            <p className="mb-4">SLIs → KPIs with budgets, canaries, and instant rollback — updated v3 playbook for operational trust.'
        />
            <p className="mb-4">teams fast and safe.</p>
            <p className="mb-4">trigger deterministic rollback when thresholds are violated.</p>
            
            
            <ul className="list-disc list-inside space-y-2 my-6">
              <li>Opinionated SLIs mapped to KPIs with budget thresholds.</li>
              <li>Prebuilt CI policy tests and on-call friendly dashboards.</li>
              <li>Rollback triggers integrated with live canaries.</li>
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