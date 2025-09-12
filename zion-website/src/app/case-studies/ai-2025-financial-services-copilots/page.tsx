import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Study: Financial Services Copilots 2025 | Zion Tech Group',
  description: 'How a Tier‑1 bank launched compliant AI copilots across operations, reducing handling time by 42%.',
  openGraph: {
    title: 'Case Study: Financial Services Copilots 2025',
    description: 'Tier‑1 bank launched compliant AI copilots, reducing handling time by 42%.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Financial Services', 'Compliance', 'AI Copilots']
  }
};

export default function FinancialServicesCopilots2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors">← All Case Studies</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Copilots: 42% Faster Handling</h1>
            <div className="text-emerald-100 text-sm space-x-6">
              <span>Zion Tech Group</span>
              <span>September 12, 2025</span>
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">We partnered with a Tier‑1 bank to deploy AI copilots across customer support, underwriting, and fraud ops—meeting strict compliance while reducing handling time by 42% and improving accuracy.</p>

          <h2>Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-emerald-50 rounded-lg p-6 text-center"><div className="text-3xl font-bold text-emerald-600 mb-2">42%</div><div className="text-gray-700">Faster handling</div></div>
            <div className="bg-teal-50 rounded-lg p-6 text-center"><div className="text-3xl font-bold text-teal-600 mb-2">-31%</div><div className="text-gray-700">Ops costs</div></div>
            <div className="bg-cyan-50 rounded-lg p-6 text-center"><div className="text-3xl font-bold text-cyan-600 mb-2">+18%</div><div className="text-gray-700">NPS</div></div>
          </div>

          <h2>Approach</h2>
          <ul>
            <li>Domain-grounded RAG with policy packs</li>
            <li>Guardrails: PII redaction, action whitelists, audit logs</li>
            <li>Human approval for exceptions</li>
          </ul>

          <h2>Architecture Highlights</h2>
          <ul>
            <li>Task router with skills registry</li>
            <li>Evaluation harness with golden datasets</li>
            <li>Secure tool sandbox with rate limiting</li>
          </ul>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mt-12">
            <h3>Explore more wins</h3>
            <p className="mb-6">See how regulated industries ship value with Zion OS.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">Discuss your use case</Link>
              <Link href="/blog" className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors text-center">Read technical guides</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

