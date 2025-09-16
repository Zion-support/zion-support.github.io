"use client"
import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Report: State of Agent Observability (2026 Preview)</h1>
          <p className="mt-2 text-gray-300">Traces, metrics, and eval overlays that speed up incident resolution.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-16</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            This preview examines key trends in observability for autonomous agents, including
            standardized tool metrics, step-level traces, and evaluation overlays that correlate
            reliability signals with production outcomes.
          </p>
          <h2>Key insights</h2>
          <ul>
            <li>Unified trace schemas accelerate cross-team debugging</li>
            <li>Eval overlays help prioritize high-impact incidents</li>
            <li>Privacy-preserving telemetry enables safer data collection</li>
          </ul>
          <h2>Read the full report</h2>
          <p>
            Contact us to request the complete data package and methodology appendix.
          </p>
        </section>
      </article>
    </div>
  )
}

