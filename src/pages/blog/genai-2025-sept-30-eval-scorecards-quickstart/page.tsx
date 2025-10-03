import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>GenAI Eval Scorecards Quickstart — KPIs, Budgets, Rollback</title>
        <meta name="description" content="Stand up KPI-linked evals and budget-aware routing that gate traffic and trigger instant rollback without slowing teams." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/genai-2025-sept-30-eval-scorecards-quickstart" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">GenAI Eval Scorecards Quickstart — KPIs, Budgets, Rollback</h1>
            <p className="text-xl text-gray-300 text-center">Stand up KPI-linked evals and budget-aware routing that gate traffic and trigger instant rollback without slowing teams.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">Stand up KPI-linked evals and budget-aware routing that gate traffic and trigger instant rollback without slowing teams.</p>
            <p className="mb-4">href='https://ziontechgroup.com/blog/genai-2025-sept-30-eval-scorecards-quickstart'
        />
            <p className="mb-4">offline suites with online canaries and rollback triggers to ship confidently.</p>
            <p className="mb-4">This quickstart includes golden tasks, signed attestations, and metrics that predict drift before users feel it.</p>
            
            
            
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