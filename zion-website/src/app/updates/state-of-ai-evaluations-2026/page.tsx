"use client"
import React from 'react'

export default function StateOfAIEvaluations2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">State of AI Evaluations 2026</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Survey of eval practices, rubrics, and live telemetry adoption across industries with maturity benchmarks.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>Highlights</h2>
          <ul>
            <li>Growing adoption of live evals and canary routing in production.</li>
            <li>Standardized rubrics improving reproducibility and auditability.</li>
            <li>Shift toward budgeted quality, latency, and cost trade-offs.</li>
            <li>Risk-aware governance integrating policy checks into CI/CD.</li>
          </ul>
          <h2>Download</h2>
          <p>Contact our team for the full report and dataset methodology.</p>
        </div>
      </div>
    </div>
  )
}

