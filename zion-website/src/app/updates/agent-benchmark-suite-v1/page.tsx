import React from 'react'

export default function AgentBenchmarkSuiteV1Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Agent Benchmark Suite v1
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Task suites, rubrics, and golden datasets to evaluate production agents with reproducible results.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Included suites</h2>
          <ul>
            <li>Customer support with groundedness and override rate metrics</li>
            <li>Financial ops with cost-to-serve and policy violation rates</li>
            <li>Research agents with citation quality and hallucination penalties</li>
          </ul>
          <h2>Integration</h2>
          <p>
            Runs in CI with gate thresholds; publishes signed reports to your governance dashboard.
          </p>
          <p>
            <a href="/contact" className="text-blue-400">Request access →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

