import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise Chatbots with Governance: 28% Deflection, 92% CSAT (2025) | Zion Tech Group',
  description: 'Case study: Policy-as-code, evals, and observability delivered 28% deflection and 92% CSAT for a global enterprise.',
  openGraph: {
    title: 'Enterprise Chatbots with Governance (2025) — Case Study',
    description: 'Deflection and CSAT gains through policy-as-code guardrails and evaluation pipelines.',
    type: 'article'
  }
};

export default function EnterpriseChatbotsGovernanceImpact2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">← Back to Case Studies</Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Chatbots with Governance: 28% Deflection, 92% CSAT (2025)</h1>
            <div className="text-indigo-200">Sep 12, 2025 · 10 min read · Case Study</div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p>
            A global enterprise implemented policy-as-code, eval pipelines, and observability for customer chatbots. The result: 28% deflection, 92% CSAT, and strong compliance.
          </p>
          <h2>Challenges</h2>
          <ul>
            <li>Inconsistent quality and policy adherence</li>
            <li>Limited visibility into failures and costs</li>
            <li>Slow release cycles due to manual review</li>
          </ul>
          <h2>Solution</h2>
          <ul>
            <li>Policy-as-code guardrails enforced in runtime</li>
            <li>Automated evaluations in CI/CD with gates</li>
            <li>Telemetry and tracing for deep observability</li>
          </ul>
          <h2>Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">28%</div>
              <div>Deflection Increase</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
              <div>Customer Satisfaction</div>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">-35%</div>
              <div>Operational Cost</div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h3 className="m-0">Want similar results?</h3>
            <p>We can assess your chatbot stack and implement guardrails and evals fast.</p>
            <Link href="/contact" className="inline-flex items-center text-indigo-700 font-semibold">Contact us →</Link>
          </div>
        </div>
      </article>
    </div>
  );
}

