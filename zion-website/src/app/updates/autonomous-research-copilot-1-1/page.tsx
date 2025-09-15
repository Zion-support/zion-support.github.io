import React from 'react'

export default function AutonomousResearchCopilot11Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Autonomous Research Copilot v1.1
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Context-grounded copilots for research teams with retrieval observability, evals, and live citations.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Upgrades</h2>
          <ul>
            <li>Better source attribution and citation formatting</li>
            <li>Retrieval observability with drift detection</li>
            <li>Faster synthesis with improved summarization</li>
          </ul>
          <h2>Try it</h2>
          <p>
            <a href="/contact" className="text-blue-400">Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

