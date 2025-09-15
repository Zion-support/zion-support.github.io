import React from 'react'

export default function ProductionAgentSafetyReviewsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Production-Grade Agent Safety Reviews
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Lightweight but rigorous design reviews, checklists, and scorecards to ship safer agents.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Review scope</h2>
          <ul>
            <li>Threat modeling and misuse analysis</li>
            <li>Tool permissioning and sandboxing</li>
            <li>Eval coverage and failure modes</li>
          </ul>
          <h2>Artifacts</h2>
          <p>Templates for sign-offs, evidence capture, and recurring audits.</p>
          <p>
            <a href="/contact" className="text-blue-400">Download templates →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

