import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Secure Agent Architectures (2025): Policy, Guardrails, SLAs | Zion Tech Group',
  description: 'Practical blueprint for secure agent architectures in 2025: policy-as-code, guardrails, SLAs, and observability.',
  keywords: 'secure agent architectures, AI guardrails, policy as code, agent SLAs',
  openGraph: {
    title: 'Secure Agent Architectures (2025): Policy, Guardrails, SLAs',
    description: 'Blueprint for secure enterprise agent architectures with governance and observability.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Security', 'Agents']
  }
};

export default function SecureAgentArchitectures2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure Agent Architectures (2025)</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><UserIcon className="h-4 w-4 mr-2" />Zion Tech Group</div>
              <div className="flex items-center"><CalendarIcon className="h-4 w-4 mr-2" />September 12, 2025</div>
              <div className="flex items-center"><ClockIcon className="h-4 w-4 mr-2" />17 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A practical guide to designing secure agent systems with policy-as-code, runtime guardrails, and SLO-backed observability for production.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Principles</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Least-privilege tool access and scoped credentials per agent capability</li>
            <li>Policy-as-code with PR reviews and automated checks</li>
            <li>Inline safety evaluations and egress controls</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reference Controls</h2>
          <p className="text-gray-700 mb-6">Integrate authentication, authorization, data-loss prevention, and evaluation pipelines as first-class platform features.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Operator Checklist</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Define agent SLOs and track via structured telemetry</li>
              <li>Gate risky actions behind approvals and simulations</li>
              <li>Continuously test guardrails with red-team scenarios</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Next Up</h3>
            <p className="text-gray-700 mb-6">Explore our case studies and platform guides to operationalize secure agents.</p>
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

