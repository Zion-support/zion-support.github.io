import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'LLM Cost Optimization Playbook: Cut Spend Without Losing Quality',
  description: 'Reduce inference spend 20–50% with routing, retrieval, batching, caching, and tight observability.',
};

export default function LLMCostOptimizationPlaybookPage() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-12 border-b border-gray-200 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>LLM Cost Optimization Playbook</h1>
          <p className='mt-3 text-gray-600'>Tactics to lower cost while maintaining—or improving—quality and latency.</p>
        </div>
      </section>
      <section className='py-10'>
        <div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2>High-Impact Tactics</h2>
          <ul>
            <li>Model routing: use small models by default; escalate on uncertainty.</li>
            <li>Retrieval and prompt minimization to shrink context windows.</li>
            <li>Batching and caching for repeated requests and shared contexts.</li>
          </ul>
          <h2>Engineering Practices</h2>
          <ul>
            <li>Deterministic prompts with templates and strict variable types.</li>
            <li>Request deduplication and idempotency keys.</li>
            <li>Async fan-out with bounded concurrency and timeouts.</li>
          </ul>
          <h2>Observability</h2>
          <ul>
            <li>Track per-route cost, tokens, latency, and error budgets.</li>
            <li>Define quality evals and auto-rollback on regressions.</li>
            <li>Continuous sampling for cache hit rates and drift.</li>
          </ul>
          <h2>Rollout Plan</h2>
          <ol>
            <li>Instrument costs and quality first; set baselines.</li>
            <li>Introduce routing + caching; measure deltas.</li>
            <li>Tune prompts and retrieval; enforce budgets in CI/CD.</li>
          </ol>
          <p>
            Need help implementing these controls?{' '}
            <Link href='/contact' className='text-blue-600 font-semibold'>Get a free assessment</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}