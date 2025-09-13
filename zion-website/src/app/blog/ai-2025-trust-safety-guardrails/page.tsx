import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Trust & Safety Guardrails 2025: Practical Patterns | Zion Tech Group',
  description: 'Practical patterns to design, evaluate, and enforce AI trust & safety guardrails across applications in 2025.',
  openGraph: {
    title: 'Trust & Safety Guardrails 2025: Practical Patterns',
    description: 'Design, evaluate, and enforce AI trust & safety guardrails across apps in 2025.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI Safety', 'Guardrails', 'Evaluation']
  }
};

export default function TrustSafetyGuardrails2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">← Back to Blog</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trust & Safety Guardrails 2025: Practical Patterns</h1>
            <div className="text-indigo-200 text-sm space-x-6">
              <span>Zion Tech Group</span>
              <span>September 12, 2025</span>
              <span>16 min read</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">Robust guardrails are essential for safe, reliable AI. This guide covers red-teaming, content policies, runtime filters, sandboxing tools, and continuous evaluation loops you can deploy today.</p>

          <h2>Core Principles</h2>
          <ul>
            <li>Defense-in-depth: validate inputs, intermediate steps, and outputs</li>
            <li>Policy-as-code with versioned test suites</li>
            <li>Human-in-the-loop for high-risk decisions</li>
          </ul>

          <h2>Implementation Patterns</h2>
          <ol>
            <li><strong>Prompt Hardening</strong>: templates, instructions hierarchy, tool-specific constraints</li>
            <li><strong>Content Filters</strong>: categories, thresholds, allow/deny lists</li>
            <li><strong>Function Sandboxing</strong>: least-privilege tools, rate limits, audit logs</li>
            <li><strong>Evaluations</strong>: pre-deploy and continuous eval with synthetic and real traffic</li>
          </ol>

          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="mt-0">Rollout Checklist</h3>
            <ul>
              <li>Define risk taxonomy and escalation flows</li>
              <li>Instrument traces and safety metrics</li>
              <li>Create regression suites for safety rules</li>
              <li>Establish incident response and kill switches</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3>Need help implementing guardrails?</h3>
            <p className="mb-6">We design and deploy end-to-end safety programs, from policy to runtime enforcement and evaluation.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Talk to us</Link>
              <Link href="/case-studies" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">See case studies</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

