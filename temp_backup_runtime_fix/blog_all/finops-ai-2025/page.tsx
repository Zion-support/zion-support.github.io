import React from 'react';
import Link from 'next/link';

export default function ArticlePage() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>FinOps • 8 min read • Sep 2025</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900'>
            FinOps for AI 2025: Cut LLM Spend Without Slowing Teams
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            Practical levers to reduce AI costs: caching, quantization, retrieval tuning, eval-driven budgets, and product guardrails.
          </p>
        </header>

        <div className='prose prose-lg max-w-none'>
          <h2>Cost Levers That Work</h2>
          <ul>
            <li>Prompt and tool hygiene: shorter inputs, structured outputs, cheaper tools.</li>
            <li>Hybrid retrieval: prioritize low-latency local stores; limit expensive hops.</li>
            <li>Multi-model strategies: route trivial requests to small models.</li>
          </ul>
          <h3>Governance & Evals</h3>
          <p>
            Treat budgets as API: per-feature spend limits, evals for quality regressions, and auto rollbacks. Show unit economics in product reviews, not just infra dashboards.
          </p>
        </div>

        <footer className='mt-12 flex items-center justify-between'>
          <Link href='/blog' className='text-blue-600 hover:underline'>← Back to Blog</Link>
          <Link href='/contact' className='text-blue-600 hover:underline'>Work with us</Link>
        </footer>
      </article>
    </div>
  );
}

