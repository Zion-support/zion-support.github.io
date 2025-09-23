import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">2025 AI Trends Radar</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our 2025 AI Trends Radar highlights enterprise priorities across agent safety, real-time retrieval,
            governance automation, and cost-aware model routing. This report synthesizes hundreds of customer
            conversations and live production benchmarks.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Agent Safety moves from policy docs to runtime enforcement</li>
              <li>Real-time RAG becomes table stakes for copilots and agents</li>
              <li>Governance-as-code unifies audits, SLAs, and controls</li>
              <li>Cost-aware routing standardizes performance per dollar</li>
            </ul>
            <p>Download the detailed methodology and dataset references from the portal.</p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Request briefing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

