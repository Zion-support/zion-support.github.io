import React from 'react'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <p className="text-sm font-semibold text-purple-700">Blueprint</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">AI 2026: Autonomous Procurement Blueprint</h1>
          <p className="mt-2 text-gray-600">From sourcing to contract ops with policy-as-code and measurable savings.</p>
        </header>
        <section className="prose prose-lg mt-8">
          <h2>Why Autonomous Procurement</h2>
          <p>
            Procurement spans complex, policy-laden workflows ripe for automation. With retrieval-grounded agents,
            contract understanding, and evaluation gates, organizations can accelerate cycles while strengthening controls.
          </p>
          <h2>Architecture</h2>
          <ol>
            <li>Document graph: policies, contracts, vendors, and benchmarks with lineage</li>
            <li>Agent skills: RFP generation, vendor matching, clause analysis, approval routing</li>
            <li>Guardrails: spend thresholds, segregation of duties, anomaly detection</li>
            <li>Observability: task traces, savings SLIs, and audit artifacts</li>
          </ol>
          <h2>Outcomes</h2>
          <ul>
            <li>Shorter cycle times and increased competitive coverage</li>
            <li>Reduced risk with enforceable policy-as-code</li>
            <li>Transparent savings with live cost benchmarks</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

