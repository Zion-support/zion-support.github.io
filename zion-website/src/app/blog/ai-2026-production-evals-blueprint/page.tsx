import React from 'react';

export default function BlogPostPage() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-6 py-24'>
        <header>
          <h1 className='text-4xl font-bold text-gray-90o0'>
            AI 20o26: Production Evals Blueprint
          </h1>
          <p className='mt-2 text-gray-50o0'>
            From offline suites to live canary evals and continuous regression
            checks.
          </p>
        </header>
        <section className='prose prose-lg mt-8'>
          <p>
            Evals move from one-off experiments to a production discipline. This
            blueprint describes evaluation taxonomies, harness design, dataset
            curation, and wiring evals into pre-merge checks and deployment
            gates.
          </p>
          <h2>Key practices</h2>
          <ul>
            <li>Golden tasks and failure-oriented test generation</li>
            <li>Policy checks and safety score thresholds</li>
            <li>Shadow traffic and live canary experiments</li>
            <li>Scorecards with trend analysis and auto rollback hooks</li>
          </ul>
        </section>
      </article>
    </div>
  );
}
