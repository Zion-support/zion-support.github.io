import React from 'react'

export default function StateOfAIGovernance2026PreviewPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Report • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          State of AI Governance 2026 (Preview)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Key findings on policy-as-code adoption, auditability, and enterprise readiness.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Rapid adoption of policy-as-code for AI controls</li>
            <li>Growth in runtime guardrails and artifact signing</li>
            <li>Audit readiness improves with standardized evidence capture</li>
          </ul>
          <h2>Next steps</h2>
          <p>Request the full report and benchmark your program against peers.</p>
          <p>
            <a href="/contact" className="text-blue-400">Request full report →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

