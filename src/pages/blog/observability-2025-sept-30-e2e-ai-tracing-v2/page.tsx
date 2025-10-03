import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>E2E AI Tracing 2025 — Span-Level Budgets & Rollback Playbooks</title>
        <meta name="description" content="Instrument prompts, tools, and calls with end-to-end traces that include cost and latency budgets. Wire rollback playbooks to spans so incidents are contained in seconds without slowing delivery." />
        <link rel="canonical" href="https://ziontechgroup.com/blog/observability-2025-sept-30-e2e-ai-tracing-v2" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">E2E AI Tracing 2025 — Span-Level Budgets & Rollback Playbooks</h1>
            <p className="text-xl text-gray-300 text-center">Instrument prompts, tools, and calls with end-to-end traces that include cost and latency budgets. Wire rollback playbooks to spans so incidents are contained in seconds without slowing delivery.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">E2E AI Tracing 2025</p>
            <p className="mb-4">Span-level budgets with alerts and automated actions for AI observability</p>
            <p className="mb-4">budgets. Wire rollback playbooks to spans so incidents are contained in seconds without
                slowing delivery.</p>
            <p className="mb-4">className='text-cyan-300 underline hover:text-cyan-200 transition-colors'
            >
              Back to Blog</p>
            
            
            <ul className="list-disc list-inside space-y-2 my-6">
              <li>• Span-level budgets with alerts and automated actions</li>
              <li>• Cost telemetry and quality signals tied to KPIs</li>
              <li>• Rollback hooks that execute deterministically</li>
              <li>• Dashboards engineers actually use</li>
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