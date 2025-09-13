import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Study: 38% LLM Inference Cost Reduction (2025) | Zion Tech Group',
  description: 'How a global platform reduced LLM inference costs by 38% and cut p95 latency by 27% using quantization, KV cache, and smart batching—without quality regressions.',
  keywords: 'case study, LLM inference, cost reduction, latency, quantization, batching, KV cache',
  openGraph: {
    title: 'Case Study: 38% LLM Inference Cost Reduction (2025)',
    description: 'Quantization, KV cache tuning, and batching lowered costs by 38% and improved p95 by 27%.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Inference', 'Optimization'],
  },
};

export default function CaseStudyLlmInferenceCostReduction2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <span className="h-4 w-4 mr-2">←</span>
              Back to Case Studies
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Study: 38% LLM Inference Cost Reduction (2025)
            </h1>

            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 10 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A global SaaS platform serving millions of daily requests struggled with rising inference costs
            and latency spikes. We led a focused optimization program that delivered material savings and
            improved reliability with zero quality regressions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>38% reduction in cost per successful task</li>
            <li>27% improvement in p95 latency across peak windows</li>
            <li>No measurable decline in evaluation metrics (factuality, safety, helpfulness)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Changes</h3>
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Transitioned to 4‑bit quantization with outlier routing for large prompts</li>
              <li>Introduced paged attention and cache reuse across conversational turns</li>
              <li>Implemented dynamic micro‑batching with SLO‑aware admission control</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Learned</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Real traffic mixes matter more than synthetic benchmarks</li>
            <li>Inline evals catch quality regressions early during ramp</li>
            <li>Budgets must fail open with graceful degradation, not hard errors</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Want Similar Results?</h3>
            <p className="text-gray-700 mb-6">
              We run targeted optimization sprints to reduce latency and cost for production LLMs while
              protecting quality and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Talk to Experts
              </Link>
              <Link
                href="/content-showcase"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                Explore More Content
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

