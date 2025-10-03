import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Operational Trust Scorecards v4 — SLIs → KPIs with Budgets</title>
        <meta name="description" content="Live canaries, budgeted actions, and attested rollback wired to product KPIs." />
        <link rel="canonical" href="https://ziontechgroup.comhttps://ziontechgroup.com/blog/ai-2025-oct-01-operational-trust-v4" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Operational Trust Scorecards v4 — SLIs → KPIs with Budgets</h1>
            <p className="text-xl text-gray-300 text-center">Live canaries, budgeted actions, and attested rollback wired to product KPIs.</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">Live canaries, budgeted actions, and attested rollback wired to product KPIs.</p>
            <p className="mb-4">href='https://ziontechgroup.com/blog/ai-2025-oct-01-operational-trust-v4'
        />
            <p className="mb-4">rollback hooks that prevent regressions without slowing delivery.</p>
            <p className="mb-4">canaries, and enforcing instant rollback when error budgets are
            threatened.</p>
            
            
            
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