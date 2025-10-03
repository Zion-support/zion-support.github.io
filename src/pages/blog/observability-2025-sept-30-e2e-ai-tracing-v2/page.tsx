import React from 'react';
import React from 'react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Observability2025E2EAITracingV2Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      import { Helmet } from 'react-helmet';

import { Helmet } from 'react-helmet';

<Helmet>
        <title>E2E AI Tracing 2025 — Span-Level Budgets & Rollback Playbooks</title>
        <meta name="description" content="Instrument prompts, tools, and calls with end-to-end traces that include cost and latency budgets. Wire rollback playbooks to spans so incidents are contained in seconds without slowing delivery." />
        <link rel="canonical" href="/blog/observability-2025-sept-30-e2e-ai-tracing-v2" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            E2E AI Tracing 2025
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Span-level budgets with alerts and automated actions for AI observability
          </p>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <section className="mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 text-lg">
                Instrument prompts, tools, and calls with end-to-end traces that include cost and latency
                budgets. Wire rollback playbooks to spans so incidents are contained in seconds without
                slowing delivery.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Key Features</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-300">
                <li>• Span-level budgets with alerts and automated actions</li>
                <li>• Cost telemetry and quality signals tied to KPIs</li>
                <li>• Rollback hooks that execute deterministically</li>
                <li>• Dashboards engineers actually use</li>
              </ul>
            </div>
          </section>

          <div className="text-center">
            <Link 
              to="/blog" 
              className="text-cyan-300 underline hover:text-cyan-200 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}