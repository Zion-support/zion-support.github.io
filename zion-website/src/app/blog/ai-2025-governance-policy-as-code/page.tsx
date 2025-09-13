import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Governance 2025: Policy-as-Code and Runtime Enforcement | Zion Tech Group',
  description: 'Implement AI governance with policy-as-code: datasets, prompts, tools, evaluations, and runtime enforcement for safety and compliance.',
  keywords: 'AI governance, policy-as-code, evaluations, compliance, safety, enterprise AI',
  openGraph: {
    title: 'AI Governance 2025: Policy-as-Code',
    description: 'From policy docs to enforced guardrails: datasets, prompts, tools, and evaluations.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Governance', 'Policy', 'Compliance'],
  },
};

export default function GovernancePolicyAsCode2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <span className="h-4 w-4 mr-2">←</span>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Governance 2025: Policy-as-Code</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 18 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Translate governance requirements into enforceable controls. This guide shows how to encode policies for
            datasets, prompts, tools, and agents, wire them into CI/CD, and enforce at runtime.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Policy Surfaces</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Datasets: provenance, consent, retention, residency, and usage rules</li>
            <li>Prompts: content rules, jailbreak resistance, and data leakage protections</li>
            <li>Tools: scopes, argument validation, and blast radius constraints</li>
            <li>Agents: state management, decision logging, and approval workflows</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Evaluations and Evidence</h3>
          <div className="bg-purple-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Inline evaluations for safety, privacy, and policy adherence</li>
              <li>Audit trails with signed artifacts and reproducible runs</li>
              <li>Scorecards for go/no-go with risk acceptance thresholds</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Runtime Enforcement</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Gateways for prompts, tools, and external links with context firewalls</li>
            <li>Kill switches and approvals for high-risk actions</li>
            <li>Rate limits, quotas, and budgets by tenant and capability</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a Governance Rollout?</h3>
            <p className="text-gray-700 mb-6">
              We help define policies, codify guardrails, integrate evaluations in CI, and deploy runtime enforcement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Talk to Experts</Link>
              <Link href="/case-studies" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">See Case Studies</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

