import React from 'react'

export default function AIGovernanceToolkitV3Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Release • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Governance Toolkit v3
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Expanded policy-as-code templates, eval gates, and audit-ready evidence packs for enterprise AI.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What’s new</h2>
          <ul>
            <li>Policy-as-code templates for common governance scenarios</li>
            <li>CI/CD eval gates with promotion criteria and rollback hooks</li>
            <li>Evidence bundles for audits: lineage, approvals, eval traces</li>
            <li>Reference implementations for popular orchestrators</li>
          </ul>
          <h2 className="mt-8">Get started</h2>
          <p>
            Explore the full documentation and request access to the toolkit.
            <br />
            <a href="/contact" className="text-blue-400">Contact us →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

