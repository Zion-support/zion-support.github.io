import React from 'react'

export default function ProductionRAGEvalsStarterPackPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production RAG Evals Starter Pack
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Ready-to-run eval suites, rubrics, and canary tests to ship reliable RAG systems.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Included</h2>
          <ul>
            <li>Golden datasets and retrieval sanity checks</li>
            <li>Latency and answer quality rubrics</li>
            <li>Canary and shadow traffic harnesses</li>
            <li>CI/CD gates with signed artifacts</li>
          </ul>
          <h2>How to use</h2>
          <ol>
            <li>Install the eval harness and connect your retrievers</li>
            <li>Curate gold sets and configure thresholds</li>
            <li>Enable gates in staging, then production</li>
          </ol>
          <p>
            <a href="/contact" className="text-blue-400">Get implementation help →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

