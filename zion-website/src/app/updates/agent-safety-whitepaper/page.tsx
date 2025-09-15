import React from 'react'

export default function AgentSafetyWhitepaperPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Whitepaper: AI Agent Safety Framework (2025)</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">Operational guardrails, evals, and policy-as-code for autonomous agents in production.</p>
        </div>

        <div className="prose prose-invert mt-12 max-w-none">
          <h2>Overview</h2>
          <p>
            This whitepaper presents a pragmatic framework for deploying autonomous agents safely in enterprise settings. It
            covers risk classification, capability controls, red-team harnesses, continuous evaluations, and incident response.
          </p>

          <h2>What’s Inside</h2>
          <ul>
            <li>Threat modeling and misuse taxonomy for agent behaviors</li>
            <li>Policy-as-code with deny-by-default and least-privilege tools</li>
            <li>Offline and online evals with acceptance thresholds</li>
            <li>Run-time observability: spans, action logs, and decision traces</li>
            <li>Separation of duties: workflow approvals and kill-switches</li>
          </ul>

          <h2>Download</h2>
          <p>
            Get the full PDF: <a className="text-blue-400 hover:text-blue-300" href="/downloads/agent-safety-framework.pdf">AI Agent Safety Framework (PDF)</a>
          </p>

          <h2>Contact</h2>
          <p>
            Interested in a safety assessment or implementation workshop? <a className="text-blue-400 hover:text-blue-300" href="/contact">Contact our team</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

