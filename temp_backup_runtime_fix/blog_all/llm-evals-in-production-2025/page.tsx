import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 8 min read • AI Evaluation</p>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>LLM Evals in Production: What Actually Works</h1>
          <p className='text-lg text-gray-700'>A pragmatic guide to evaluating prompts, tools, and retrieval in real-world systems—aligned to business outcomes.</p>
        </header>

        <section className='prose prose-blue max-w-none'>
          <h2>Why Evals</h2>
          <p>Shipping fast without regressions requires objective checks. Treat evals like tests for behavior, cost, and risk—measured continuously.</p>

          <h2>Evaluation Types</h2>
          <ul>
            <li>Golden sets for deterministic tasks and tool calls.</li>
            <li>Rubric-based scoring for reasoning and adherence.</li>
            <li>Judge models with bias controls and calibration.</li>
            <li>Cost and latency budgets enforced per route.</li>
          </ul>

          <h2>Implementation Pattern</h2>
          <ol>
            <li>Define tasks and KPIs; create small but representative datasets.</li>
            <li>Instrument prompts, tools, and retrieval with trace IDs.</li>
            <li>Run CI evals on PRs; block merges on threshold failures.</li>
            <li>Schedule nightly evals to catch drift and vendor changes.</li>
            <li>Alert on regressions to on-call channels with diffs.</li>
          </ol>

          <h2>Common Pitfalls</h2>
          <ul>
            <li>Overfitting to judge models; always include human spot checks.</li>
            <li>Ignoring cost; track token budgets as first-class metrics.</li>
            <li>Unversioned prompts; use templates with semantic versioning.</li>
          </ul>

          <div className='mt-10 p-6 bg-indigo-50 border border-indigo-200 rounded-lg'>
            <h3 className='text-xl font-semibold text-indigo-900 mb-2'>Template Pack</h3>
            <p className='text-indigo-800'>We provide eval harnesses, golden sets, and dashboards for common LLM tasks.</p>
            <div className='mt-4 flex gap-3'>
              <Link href='/contact' className='bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors'>Request Demo</Link>
              <Link href='/services/ai-services' className='border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-indigo-50 transition-colors'>AI Services</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

