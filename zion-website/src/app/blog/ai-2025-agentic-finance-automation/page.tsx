import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Agentic Finance Automation 2025: From Close to Forecasting | Zion Tech Group',
  description: 'Blueprint for agentic finance: automated reconciliations, forecasting, variance analysis, and policy guardrails.',
  keywords: 'agentic finance, AI finance automation, close automation, forecasting agents',
  openGraph: {
    title: 'Agentic Finance Automation 2025',
    description: 'Automate close, forecasting, and variance analysis with safe, observable agents.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Agents', 'Finance']
  }
};

export default function AgenticFinanceAutomation2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agentic Finance Automation 2025: From Close to Forecasting</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />16 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Finance is ripe for agentic automation: reconciliations, close, and forecasting benefit from policy-aware, traceable workflows.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">High-Value Use Cases</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Automated reconciliations with policy-as-code checks and auditor-friendly traces</li>
            <li>Variance analysis agents that draft narratives and surface anomalies with evidence</li>
            <li>Forecast agents that combine causal signals with human-in-the-loop approvals</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reference Architecture</h2>
          <p className="text-gray-700 mb-6">Use evaluation pipelines, governance policies, and cost-aware routers, integrated with ERP and planning systems.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">KPIs to Track</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Close cycle time reduction</li>
              <li>Forecast accuracy improvement (MAPE)</li>
              <li>Audit exceptions and rework rate</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h3>
            <p className="text-gray-700 mb-6">Explore our case studies and implementation guidance for finance teams adopting agentic workflows.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/case-studies" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">View Case Studies</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Explore Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

