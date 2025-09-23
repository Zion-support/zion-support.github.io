import React from 'react'

export default function AIGovernanceToolkitPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Governance Toolkit (v2)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Ship enterprise AI responsibly with policy-as-code, automated guardrails, and audit trails.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <p>
            The AI Governance Toolkit helps enterprises operationalize responsible AI with templates and checks that
            integrate directly into your delivery pipelines. Define policies as code, enforce them in CI/CD, and
            produce immutable evidence for audits.
          </p>
          <h2>What’s new in v2</h2>
          <ul>
            <li>Prebuilt policy packs for privacy, safety, and fairness</li>
            <li>Signed evaluation artifacts with lineage</li>
            <li>Native integration with popular model gateways</li>
            <li>Dashboards for approvals and exception workflows</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Contact us to enable the governance pack in your environment and connect it to your existing SDLC tools.
          </p>
          <p>
            <a href="/contact" className="text-blue-400">Talk to our team →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

