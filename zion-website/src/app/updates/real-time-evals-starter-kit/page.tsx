import React from 'react'

export default function RealTimeEvalsStarterKitPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Real-Time Evals Starter Kit</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A practical starter kit to introduce live evaluation into production systems with minimal friction. Includes
          core metrics, an evaluation harness, instrumentation guidance, and examples for common agentic flows.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What&apos;s Inside</h2>
          <ul>
            <li>Reference metrics for retrieval, groundedness, and safety checks</li>
            <li>Lightweight harness for canary and shadow traffic</li>
            <li>Dashboards and SLIs/SLOs templates</li>
            <li>Playbooks to prevent regressions before rollout</li>
          </ul>
          <h2 className="mt-8">Get Started</h2>
          <p>
            Begin by instrumenting a small subset of production traffic and compare candidate policies safely. Use our
            templates to establish quality gates prior to increasing exposure.
          </p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request the full kit →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

