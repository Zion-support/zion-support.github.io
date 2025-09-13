import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Customer Analytics with AI: 19% Revenue Uplift (2025) | Zion Tech Group',
  description: 'Case study on deploying AI-driven customer analytics that increased revenue by 19% and reduced churn by 11%.',
  keywords: 'AI customer analytics, churn reduction, revenue uplift, personalization case study',
  openGraph: {
    title: 'AI Customer Analytics: 19% Revenue Uplift (2025)',
    description: 'How AI-powered analytics improved personalization, reduced churn, and increased revenue.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Analytics', 'Case Study']
  }
};

export default function AICustomerAnalyticsImpact2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Customer Analytics: 19% Revenue Uplift</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />12 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            This case study details how a global retail brand deployed AI-powered customer analytics to drive personalized experiences, reduce churn by 11%, and deliver 19% revenue uplift in 6 months.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>+19% revenue uplift across key segments</li>
            <li>−11% churn via proactive retention and next-best-action</li>
            <li>+23% conversion from personalized recommendations</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Approach</h2>
          <p className="text-gray-700 mb-6">Data unification, real-time segmentation, uplift modeling, and agentic campaign orchestration with guardrails.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Playbook Highlights</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Deploy a customer 360 and event bus</li>
              <li>Run uplift models and causal evals</li>
              <li>Leverage agents for orchestration with policy guardrails</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Explore More</h3>
            <p className="text-gray-700 mb-6">Read related guides and implementation blueprints to replicate the impact.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Browse Blog</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Explore Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

