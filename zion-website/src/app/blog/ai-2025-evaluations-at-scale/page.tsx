import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Evaluations at Scale for GenAI Systems (2025) | Zion Tech Group',
  description: 'Design large-scale, automated evaluation pipelines for GenAI systems with quality, safety, and cost metrics embedded in CI/CD.',
  keywords: 'AI evaluations, LLM evals, quality metrics, safety testing, CI/CD, guardrails',
  openGraph: {
    title: 'Evaluations at Scale for GenAI Systems (2025)',
    description: 'Automated evaluation pipelines for quality, safety, and efficiency across GenAI systems.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Evaluations', 'Safety', 'CI/CD', 'Observability'],
  },
};

export default function EvaluationsAtScale2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <span className="h-4 w-4 mr-2">←</span>
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Evaluations at Scale for GenAI Systems (2025)
            </h1>

            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 20 min read</div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Production GenAI demands continuous, automated evaluations. This guide shows how to instrument evals for quality, safety, and efficiency, wire them into CI/CD, and use signals to drive safe rollouts and guardrails.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pillars of Evaluation</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Task success and factual correctness</li>
            <li>Safety adherence and policy violations</li>
            <li>Latency, cost, and reliability budgets</li>
            <li>Grounding and citation accuracy for RAG</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pipeline Architecture</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Offline</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Golden datasets with rubrics and policy scenarios</li>
                <li>Regression suites per feature, model, and tool</li>
                <li>Cost and latency budgets enforced in CI</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Online</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Shadow evals on production traffic with sampling</li>
                <li>Automated alerts for policy and quality drift</li>
                <li>Release gates tied to eval thresholds</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Observability & Guardrails</h3>
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Trace prompts, tools, and decisions with structured telemetry</li>
              <li>Inline policy checks and configurable kill-switches</li>
              <li>Human-in-the-loop reviews for high-risk segments</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Production Evals?</h3>
            <p className="text-gray-700 mb-6">
              We implement eval pipelines, policy-as-code, and observability to ship AI with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Talk to Evaluation Experts
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

