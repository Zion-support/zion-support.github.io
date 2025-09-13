import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'End-to-End Guardrails Architecture 2025 | Zion Tech Group',
  description: 'Design E2E guardrails: policy-as-code, pre/post checks, online evals, and incident response for AI systems.',
  keywords: 'AI guardrails, policy as code, AI governance, online evaluations',
  openGraph: {
    title: 'End-to-End Guardrails Architecture 2025',
    description: 'Blueprint for defense-in-depth guardrails across prompts, tools, data, and outputs.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Safety', 'Governance']
  }
};

export default function GuardrailsArchitecture2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">End-to-End Guardrails Architecture 2025</h1>
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
            Enterprise AI needs defense-in-depth guardrails. Make policies versioned, testable, and enforced at every boundary.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Guardrails Layers</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Pre-input: prompt hardening, content filters, and PII redaction</li>
            <li>During: tool constraints, budget-aware routing, and trace-based kill-switches</li>
            <li>Post-output: toxicity, safety, and policy checks with human-in-the-loop</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Operational Model</h2>
          <p className="text-gray-700 mb-6">Policies as code, PR reviews, automated tests, and online evaluations keep systems safe and auditable.</p>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Runbooks</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Incident triage with trace links and replayable sessions</li>
              <li>Safe rollback via config flags and policy versions</li>
              <li>Post-incident evaluation updates and guardrail refinements</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keep Exploring</h3>
            <p className="text-gray-700 mb-6">See our governance playbooks and case studies on shipping safe AI at scale.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog/ai-2025-ai-governance-operational-playbook" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Governance Playbook</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Explore Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

