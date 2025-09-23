'use client'

import React from 'react'

export default function RagAgentsCaseStudyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Case Study: RAG Agents Reduce MTTR by 42%</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          How observability-driven retrieval-augmented agents reduced incident mean time to resolution
          and support costs in a Fortune 500 environment.
        </p>

        <div className="mt-10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Highlights</h2>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li>42% reduction in MTTR across high-severity incidents</li>
              <li>38% reduction in L2/L3 support handoffs</li>
              <li>End-to-end traceability with retrieval observability</li>
              <li>Guardrails for safety and cost-aware model routing</li>
            </ul>
          </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Architecture</h2>
              <p className="mt-2">Hybrid retrieval, structured tools, and feedback loops powering rapid diagnosis.</p>
            </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Learn more</h2>
            <a href="/contact" className="inline-block mt-4 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
              Request the full case study <span aria-hidden>→</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

