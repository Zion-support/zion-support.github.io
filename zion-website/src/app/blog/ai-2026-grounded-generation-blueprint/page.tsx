import React from 'react'

export default function GroundedGenerationBlueprintPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <p className="text-sm text-gray-300">Blueprint • 2025-09-15 • 8 min read</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Grounded Generation Blueprint
        </h1>
        <div className="prose prose-invert prose-lg mt-8 max-w-none">
          <p>
            Reduce hallucinations by constraining models to cited evidence, robust retrieval, and eval gates with
            objective rubrics.
          </p>
          <h2>Core components</h2>
          <ul>
            <li>Retrieval with freshness and domain constraints</li>
            <li>Answer planning with tool-typed steps and checks</li>
            <li>Attribution and citation verification</li>
            <li>Pre-deploy and live canary evals</li>
          </ul>
          <h2>Operational metrics</h2>
          <p>Groundedness, citation accuracy, override rate, drift, and incident MTTR.</p>
        </div>
      </div>
    </div>
  )
}

