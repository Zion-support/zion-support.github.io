import React from 'react'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-gray-900">AI 2026: Agent Risk Metrics</h1>
          <p className="mt-2 text-gray-500">Quantifying agent safety with task risk scores, override rates, and incident MTTR.</p>
        </header>
        <section className="prose prose-lg mt-8">
          <p>
            As autonomous agents move into production, teams need shared metrics to reason about risk. This post outlines
            a minimal, actionable set of risk signals and how to operationalize them.
          </p>
          <h2>Signals</h2>
          <ul>
            <li>Override rate and escalation frequency per task class</li>
            <li>Policy violation rate and severity distribution</li>
            <li>Time-to-detect and mean time to restore (MTTR)</li>
            <li>Groundedness and hallucination rates on eval suites</li>
          </ul>
          <h2>Operating model</h2>
          <p>
            Establish weekly risk reviews, SLOs for critical tasks, and incident retros with policy updates and guardrail
            adjustments.
          </p>
        </section>
      </article>
    </div>
  )
}

