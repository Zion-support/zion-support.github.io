import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Case Study: AI Supply Chain Orchestration — 27% Expedited Costs Reduced | Zion Tech Group',
  description: 'How an enterprise reduced expedited shipping costs by 27% and improved OTIF by 6 points using AI forecasting, dynamic safety stock, and agentic exception handling.',
  keywords: 'case study, AI supply chain, orchestration, forecasting, OTIF, expedited cost reduction',
  openGraph: {
    title: 'Case Study: AI Supply Chain Orchestration — 27% Expedited Costs Reduced',
    description: 'Enterprise case study: multi-agent exception workflows + optimization cut costs and improved OTIF.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Supply Chain', 'Optimization', 'Agents'],
  },
};

export default function AISupplyChainOrchestrationImpact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              ← Back to Case Studies
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Supply Chain Orchestration: 27% Expedited Costs Reduced, +6 pts OTIF
            </h1>

            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div>Zion Tech Group</div>
              <div>September 12, 2025</div>
              <div>10 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A global CPG enterprise faced rising variability and mounting expedite spend. By deploying forecasting upgrades, dynamic safety stock, and agentic exception workflows, the team cut expedited costs by 27% while improving on‑time in‑full (OTIF) by 6 points in four months.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Approach</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Augmented forecasts with leading indicators (promo, macro, weather) + hierarchical models</li>
            <li>Re-optimized safety stock targets by service tier and volatility bands</li>
            <li>Agents triaged exceptions, proposed options, and routed approvals with policy guardrails</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost</h4>
              <p className="text-gray-700">27% reduction in expedited shipping costs with fewer last-minute interventions.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Service</h4>
              <p className="text-gray-700">OTIF improved by 6 percentage points with better allocation and early signals.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Efficiency</h4>
              <p className="text-gray-700">Exception handling time dropped 35% via agentic triage and playbooks.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Governance</h4>
              <p className="text-gray-700">Policy-as-code ensured budget, compliance, and substitution constraints were respected.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">See Similar Results</h3>
            <p className="text-gray-700 mb-6">
              We deploy forecasting, optimization, and exception workflows with robust observability and risk controls. Partner with us to accelerate impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">
                Talk to Our Team
              </Link>
              <Link href="/content-showcase" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">
                Explore More Resources
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

