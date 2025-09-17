import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="text-sm text-blue-300">Guide</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Agent Evidence Bundles — 2026 Blueprint</h1>
        <p className="mt-4 text-gray-300">Design signed evidence bundles with provenance, policy checks, and evaluator signals.</p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Evidence bundles unify inputs, outputs, policies, traces, and evaluation results into a single,
            signed artifact per change. This enables reproducibility, root‑cause analysis, and audit readiness.
          </p>
          <h2 className="text-xl font-semibold text-white">Core Components</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provenance and lineage metadata</li>
            <li>Policy‑as‑code decisions and exceptions</li>
            <li>Evaluator rubrics, scores, and thresholds</li>
          </ul>
          <div className="mt-8">
            <a href="/blog" className="text-blue-400 hover:text-blue-300 font-semibold">Back to blog →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
