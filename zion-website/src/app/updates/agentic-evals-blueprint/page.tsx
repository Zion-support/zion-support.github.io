'use client'

import React from 'react'

export default function AgenticEvalsBlueprintPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Agentic Evals Blueprint (v1)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          An evaluation-first framework for autonomous agents with quality gates, task suites,
          and policy-as-code. Use this blueprint to instrument your agent systems with
          measurable guardrails and repeatable benchmarks.
        </p>

        <div className="mt-10 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white">What’s inside</h2>
            <ul className="mt-3 list-disc list-inside space-y-2">
              <li>Task-suite templates for common enterprise workflows</li>
              <li>Rubric design for factuality, safety, and cost efficiency</li>
              <li>Policy-as-code examples for deny/allow tool usage</li>
              <li>Scorecards and SLIs for production readiness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">Get started</h2>
            <p className="mt-2">Read the full guide and integrate it into your CI workflows.</p>
            <a href="/contact" className="inline-block mt-4 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
              Talk to us <span aria-hidden>→</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

