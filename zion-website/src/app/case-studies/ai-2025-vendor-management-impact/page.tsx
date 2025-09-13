import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: Agentic Vendor Management (32% Faster Cycle Time) | Zion Tech Group',
  description: 'How an enterprise automated vendor intake-to-renewal with AI agents, achieving 32% faster cycle time and 21% fewer non-compliant exceptions.',
  keywords: 'vendor management, contract automation, AI agents, risk reviews, case study',
  openGraph: {
    title: 'Agentic Vendor Management: 32% Faster Cycle Time',
    description: 'AI agents automated intake, risk, and negotiation, cutting cycle times 32% and reducing exceptions 21%.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Operations', 'Compliance', 'Agents', 'Case Study'],
  },
};

export default function VendorManagementImpact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-teal-100 hover:text-white mb-6 transition-colors">← Back to Case Studies</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agentic Vendor Management: 32% Faster Cycle Time</h1>
            <div className="flex flex-wrap items-center text-teal-100 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>September 12, 2025</div>
              <div>9 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A Fortune 100 enterprise implemented agentic workflows across vendor intake, risk reviews, and negotiations, reducing cycle time by 32% and
            cutting non-compliant exceptions by 21% within two quarters.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-teal-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">32%</div>
              <div className="text-gray-700">Faster Cycle Time</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">21%</div>
              <div className="text-gray-700">Fewer Non-compliant Exceptions</div>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">15%</div>
              <div className="text-gray-700">Savings from Clause Benchmarks</div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Solution</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Dynamic intake forms with policy-as-code validation</li>
            <li>Automated security, privacy, and compliance checks</li>
            <li>Negotiation copilot with recommended redlines and playbooks</li>
            <li>Renewal automation based on usage and performance data</li>
          </ul>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Explore the Playbook</h3>
            <p className="text-gray-700 mb-6">
              Start with a scoped pilot: 2-3 vendor categories, clear guardrails, and end-to-end telemetry. Expand once KPIs are achieved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-center">Talk to an Expert</Link>
              <Link href="/content-showcase" className="border border-teal-600 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors text-center">Explore More Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

