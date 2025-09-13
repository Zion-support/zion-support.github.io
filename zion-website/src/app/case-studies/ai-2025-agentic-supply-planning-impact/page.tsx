import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agentic Supply Planning: 27% Expedites Cut, +6 pts OTIF | Zion Tech Group',
  description: 'Case study: Agentic workflows across demand sensing, planning, and fulfillment reduced expedites 27%, improved OTIF by 6 points, and freed $18M working capital.',
  keywords: 'case study, agentic supply chain, OTIF, expedites, working capital'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Agentic Supply Planning: 27% Expedites Cut, +6 pts OTIF
          </h1>
          <div className="text-emerald-100 flex flex-wrap gap-4">
            <span>📊 Case Study</span>
            <span>⏱️ 10 min read</span>
            <span>🏷️ Supply Chain</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          A global manufacturer implemented agentic planning to connect demand sensing, inventory policy, and fulfillment execution. The result: 27% fewer expedites, +6 points OTIF, and $18M in freed working capital within two quarters.
        </p>

        <section className="prose prose-emerald max-w-none">
          <h2>Objectives</h2>
          <ul>
            <li>Reduce expedite rate and air freight</li>
            <li>Improve service level and OTIF</li>
            <li>Optimize inventory and working capital</li>
          </ul>

          <h2>Solution</h2>
          <ol>
            <li>Short-horizon demand sensing + external signals</li>
            <li>Policy-aware planning with constraint solvers</li>
            <li>Agentic orchestrator proposing and executing changes with approvals</li>
          </ol>

          <h2>Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">-27%</div>
              <div className="text-gray-700">Expedites</div>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">+6 pts</div>
              <div className="text-gray-700">OTIF</div>
            </div>
            <div className="bg-cyan-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">$18M</div>
              <div className="text-gray-700">Working Capital</div>
            </div>
          </div>

          <h2>Rollout Plan</h2>
          <ul>
            <li>Phase 1: Golden SKUs in one region with weekly cadence</li>
            <li>Phase 2: Expand to full portfolio with automated canaries</li>
            <li>Phase 3: Continuous evaluation and policy tuning</li>
          </ul>
        </section>

        <div className="mt-12 p-6 bg-emerald-50 rounded-xl">
          <h3 className="font-semibold text-emerald-900 mb-2">Related content</h3>
          <ul className="list-disc pl-6 space-y-2 text-emerald-900">
            <li>
              <Link href="/blog/ai-2025-agentic-supply-planning" className="underline">Agentic Supply Planning 2025 (Blog)</Link>
            </li>
            <li>
              <Link href="/blog/ai-2025-ai-supply-chain-resilience" className="underline">AI Supply Chain Resilience (Blog)</Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

