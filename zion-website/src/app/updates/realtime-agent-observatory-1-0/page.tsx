import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Launch: Realtime Agent Observatory v1.0</h1>
          <p className="mt-2 text-gray-300">Unified tracing, metrics, evals, and safety signals to debug and improve autonomous agents in production.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>Overview</h2>
          <p>
            Realtime Agent Observatory brings together traces, model and tool invocations, retrieval telemetry, and inline evals
            to help teams diagnose failures, track SLIs, and continuously improve agent behavior.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>End-to-end traces with embeddings and retrieval context snapshots</li>
            <li>Live evals for helpfulness, safety, latency, and cost</li>
            <li>Safety signals and guardrail outcomes in one place</li>
            <li>Exportable evidence for audits and post-incident reviews</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

