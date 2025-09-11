import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 7 min read • Case Studies</p>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>Customer Stories: Real ROI from AI Automation</h1>
          <p className='text-lg text-gray-700'>Three concise case studies across support, finance, and operations—showing cost reductions, speed-ups, and quality lifts.</p>
        </header>

        <section className='prose prose-blue max-w-none'>
          <h2>Support: 2 → 10 Minutes to Resolution</h2>
          <p>We implemented triage, retrieval-augmented answers, and safe auto-actions. Result: 78% cost reduction and CSAT up 12 points.</p>

          <h2>Finance: Close Faster with Fewer Errors</h2>
          <p>Automated invoice extraction and reconciliation with human approvals. Result: 65% faster monthly close, 0.6% error rate.</p>

          <h2>Operations: Forecasting and Routing</h2>
          <p>Time-series and heuristic agents improved staffing and routing. Result: 20% reduction in delays, 14% throughput gain.</p>

          <div className='mt-10 p-6 bg-green-50 border border-green-200 rounded-lg'>
            <h3 className='text-xl font-semibold text-green-900 mb-2'>See It Live</h3>
            <p className='text-green-800'>We can run a 2-week pilot with measurable KPIs and shared dashboards.</p>
            <div className='mt-4 flex gap-3'>
              <Link href='/contact' className='bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors'>Start a Pilot</Link>
              <Link href='/services/micro-saas' className='border border-green-600 text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-green-50 transition-colors'>Micro SaaS</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

