import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>GenAI Eval Scorecards v2 — KPIs, Budgets, Rollback</title>
        <meta name="description" content="KPI-linked eval pipelines with budget-aware routing and rollback triggers to prevent regressions." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/genai-2025-oct-01-eval-scorecards-v2" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">GenAI Eval Scorecards v2 — KPIs, Budgets, Rollback</h1>
            <p className="text-xl text-gray-300 text-center">KPI-linked eval pipelines with budget-aware routing and rollback triggers to prevent regressions.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">KPI-linked eval pipelines with budget-aware routing and rollback triggers to prevent regressions.</p>
            <p className="mb-4">href='https://ziontechgroup.com/blog/genai-2025-oct-01-eval-scorecards-v2'
        />
            <p className="mb-4">Build evaluation pipelines that map model quality directly to product KPIs. Use budgets to
            constrain spend and enable automatic rollback when scorecards slip below thresholds.</p>
            <p className="mb-4">stable while cutting cost.</p>
            
            
            
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