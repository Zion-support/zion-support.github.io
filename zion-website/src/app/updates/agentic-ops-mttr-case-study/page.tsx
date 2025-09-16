import React from 'react'

export default function AgenticOpsCaseStudyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Case Study: 42% MTTR Reduction with Agentic Ops
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A global enterprise reduced mean time to resolution by 42% by deploying autonomous
            incident copilots integrated with existing observability and ITSM workflows. This case
            study outlines the architecture, rollout approach, and measurable outcomes.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold text-white">Key Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>42% reduction in MTTR across priority incidents</li>
              <li>28% decrease in false escalations via policy-as-code guardrails</li>
              <li>Improved post-incident reports with auto-root cause summaries</li>
              <li>Faster on-call handoffs with action logs and citations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">Architecture</h2>
            <p>
              The solution combined event-driven triage, retrieval-augmented context from knowledge
              bases, and controlled tool-use for remediation, all observable with per-step metrics.
            </p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Request full case study
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

