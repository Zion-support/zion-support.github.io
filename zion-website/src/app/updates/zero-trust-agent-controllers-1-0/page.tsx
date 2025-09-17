import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Zero‑Trust Agent Controllers v1.0</h1>
        <p className="mt-4 text-gray-300">Scoped permissions, runtime enforcement, and evidence capture for tool use.</p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Zero‑Trust Agent Controllers provide fine‑grained, least‑privilege access to tools and data with
            runtime policy checks, evaluator gates, and signed evidence capture for every action.
          </p>
          <h2 className="text-xl font-semibold text-white">Highlights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scoped tokens and adapter sandboxes with audit‑ready provenance.</li>
            <li>Policy‑as‑code enforcement with environment‑aware risk tiers.</li>
            <li>Evaluator gates for safety, quality, latency, and cost budgets.</li>
          </ul>
          <div className="mt-8">
            <a href="/updates" className="text-blue-400 hover:text-blue-300 font-semibold">Back to updates →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
