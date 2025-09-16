// @ts-nocheck
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Report • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Failure Analysis Toolkit (2026)</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Trace diffs, lineage captures, and reproducible post‑mortems for agent incidents with signed evidence and
          standardized templates that accelerate remediation.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Capabilities</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Incident timelines with eval overlays</li>
              <li>Diff-on-trace and prompt delta analysis</li>
              <li>Chain‑of‑custody for evidence bundles</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

// @ts-nocheck

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-blue-300">Report · 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Autonomous Failure Analysis Toolkit (2026)</h1>
        <p className="mt-4 text-lg text-gray-300">Trace diffs, lineage captures, and reproducible post‑mortems for agent incidents.</p>

        <div className="mt-8 space-y-6 text-gray-300">
          <p>We present a standardized incident analysis workflow for agentic systems with reproducible trace capture, cross‑service correlation, and evidence bundling to accelerate root cause analysis and corrective actions.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trace and tool call diffs with time‑aligned metrics</li>
            <li>Evidence bundles for approvals and audit trails</li>
            <li>Templates for incident timelines and corrective playbooks</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

