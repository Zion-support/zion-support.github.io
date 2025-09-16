import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Launch: Autonomous Customer Support Copilot (v1.0)</h1>
          <p className="mt-2 text-gray-300">Omnichannel support copilot with retrieval grounding, escalations, and real-time quality evals.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            Our Support Copilot brings retrieval-grounded assistance to every channel: chat, email, and voice. It
            integrates with your CRM, ticketing, and knowledge bases to deliver accurate, compliant responses with
            continuous quality monitoring.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Grounded answers with inline citations and source confidence</li>
            <li>Escalation workflows with full conversation context handoff</li>
            <li>Live evals tracking helpfulness, safety, and latency SLIs</li>
            <li>Policy-as-code guardrails and red-team regression suites</li>
          </ul>
          <h2>Getting started</h2>
          <p>
            Contact us to enable the Support Copilot in your environment and connect your data sources securely.
          </p>
        </section>
      </article>
    </div>
  )
}

