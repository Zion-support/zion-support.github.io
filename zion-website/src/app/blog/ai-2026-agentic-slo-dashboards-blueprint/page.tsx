import React from 'react'

export const metadata = {
  title: 'Agentic SLO Dashboards (2026) — Blueprint',
  description:
    'A practical blueprint for defining, instrumenting, and operating SLO dashboards purpose‑built for agentic systems in production.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Agentic SLO Dashboards (2026)</h1>
      <p className="mt-4 text-lg text-gray-300">
        This blueprint outlines core SLOs, telemetry, and visualization patterns to operate AI agents reliably across
        latency, quality, safety, and cost dimensions.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Key SLO Dimensions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Latency SLOs: end‑to‑end p50/p95, tool‑use latency, retrieval latency.</li>
          <li>Quality SLOs: eval pass rate, groundedness, hallucination suppression rate.</li>
          <li>Safety SLOs: policy violation rate, override rate, escalation MTTR.</li>
          <li>Cost SLOs: per‑task cost, model routing efficiency, budget adherence.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Implementation Checklist</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Define task taxonomies and attach tracing IDs across all hops.</li>
          <li>Instrument structured metrics and evaluations for each SLO dimension.</li>
          <li>Render per‑capability dashboards with drill‑downs to traces and incidents.</li>
          <li>Automate regression gates and budget alerts tied to SLO thresholds.</li>
        </ol>
      </section>
    </main>
  )
}

