import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Study: Governance Maturity Rollout — 60% Faster Reviews | Zion Tech Group',
  description: 'How a Fortune 100 financial services firm rolled out AI governance maturity improvements and cut model review times by 60% while increasing compliance coverage.',
  keywords: 'AI governance case study, policy as code, compliance automation, evaluation gates',
  openGraph: {
    title: 'Governance Maturity Rollout — 60% Faster Reviews',
    description: 'How a Fortune 100 financial services firm cut review times by 60% while boosting compliance coverage.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Governance', 'Compliance']
  }
};

export default function GovernanceMaturityRolloutCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/case-studies" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <span className="mr-2">←</span>
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Governance Maturity Rollout: 60% Faster Reviews</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span>Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span>September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span>10 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A Fortune 100 financial services firm modernized AI governance with policy‑as‑code, evaluation gates, and observability, reducing review times by 60% and increasing compliance coverage by 35%.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Situation</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Manual reviews and inconsistent policy interpretation</li>
            <li>Limited traceability across prompts, tools, and data</li>
            <li>Slow approvals delaying product launches</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Solution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Policy‑as‑Code</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Codified top 15 policies with tests and CI gate</li>
                <li>Risk tiering to adapt controls to use case</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Evaluation Gates</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Inline safety, privacy, and hallucination checks</li>
                <li>Rollback hooks and kill switches</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Observability</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Distributed tracing across prompts and tools</li>
                <li>Spend budgets and anomaly alerts</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enablement</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Playbooks, templates, and office hours</li>
                <li>Fast‑track approvals for low‑risk changes</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Outcomes</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>60% faster model and prompt reviews</li>
            <li>35% higher compliance coverage</li>
            <li>Fewer incidents and faster incident response</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Explore Related Content</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog/ai-2025-governance-maturity-model" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Read the Governance Model</Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Browse All Content</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

