import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Evaluations Pipelines Blueprint 2025 | Zion Tech Group',
  description: 'Design offline and online evaluation pipelines for AI systems with metrics, gates, and automation.',
  keywords: 'AI evaluations, offline evals, online evals, eval pipelines, AI metrics',
  openGraph: {
    title: 'Evaluations Pipelines Blueprint 2025',
    description: 'From datasets to automated gates: ship AI changes safely with robust evaluation pipelines.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Evaluation', 'MLOps']
  }
};

export default function EvalsPipelinesBlueprint2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Evaluations Pipelines Blueprint 2025</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />19 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Make evaluations a product: versioned datasets, metrics that matter, and automated gates integrated with CI/CD.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pipeline Components</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Datasets with provenance, labels, and drift monitoring</li>
            <li>Metrics across quality, safety, and cost with per-scenario weightings</li>
            <li>Automation: pre-merge checks, canary evals, and runtime monitors</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Operationalizing Evals</h2>
          <p className="text-gray-700 mb-6">Tie eval results to deployment decisions. Store traces, enable reproducibility, and enforce budgets.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Example Metrics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Task success rate and tool correctness</li>
              <li>Safety violations per 1,000 interactions</li>
              <li>Cost per successful task and latency SLOs</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keep Exploring</h3>
            <p className="text-gray-700 mb-6">Deep-dive into our evaluations guides and case studies to ship AI with confidence.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog/ai-2025-evaluations-in-production" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Evaluations in Production</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Explore Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

