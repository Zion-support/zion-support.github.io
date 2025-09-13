import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Customer 360 AI Platform: 23% Lift in Cross-Sell (2025) | Zion Tech Group',
  description: 'Case study: Customer 360 AI platform unified profiles, improved targeting, and delivered 23% cross-sell lift and 14% churn reduction.',
  keywords: 'Customer 360, AI platform, personalization, uplift modeling, churn reduction, case study'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer 360 AI Platform: 23% Lift in Cross-Sell
          </h1>
          <div className="text-emerald-100 flex flex-wrap gap-4">
            <span>📊 Case Study</span>
            <span>⏱️ 11 min read</span>
            <span>🏷️ Case Study</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          A global financial services firm deployed a Customer 360 AI platform to unify profiles, predict next-best-actions, and personalize outreach across channels. The result was a 23% lift in cross-sell conversion and a 14% reduction in churn within two quarters.
        </p>

        <section className="prose prose-emerald max-w-none">
          <h2>Business Objectives</h2>
          <ul>
            <li>Increase cross-sell conversion across retail banking products</li>
            <li>Reduce churn in high-value customer segments</li>
            <li>Improve marketing efficiency with better audience quality</li>
          </ul>

          <h2>Solution Highlights</h2>
          <ul>
            <li>Unified profiles from CRM, transactions, support, and web signals</li>
            <li>Uplift models and bandit policies for next-best-offer orchestration</li>
            <li>Guardrailed copilots for frontline sales and service agents</li>
            <li>Evaluation pipelines to monitor segment fairness and leakage risks</li>
          </ul>

          <h2>Measured Impact</h2>
          <ul>
            <li>+23% cross-sell conversion in pilot regions</li>
            <li>-14% churn in targeted segments</li>
            <li>+18% marketing ROAS through better audience selection</li>
          </ul>

          <h2>Implementation Phases</h2>
          <ol>
            <li>Data foundation and ID resolution</li>
            <li>Model development and offline evaluations</li>
            <li>Policy guardrails and runtime monitoring</li>
            <li>Phased rollout with canaries and holdouts</li>
          </ol>
        </section>

        <div className="mt-12 p-6 bg-emerald-50 rounded-xl">
          <h3 className="font-semibold text-emerald-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-emerald-900">
            <li>
              <Link href="/case-studies/ai-2025-customer-analytics-impact" className="underline">Customer Analytics Impact</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-agentic-workflows-copilots" className="underline">Agentic Workflows & Copilots 2025</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

