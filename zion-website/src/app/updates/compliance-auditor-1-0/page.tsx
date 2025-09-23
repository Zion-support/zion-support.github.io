import React from 'react'

export default function ComplianceAuditor10Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-green-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Compliance Auditor v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Automated compliance checks for AI systems with policy-as-code, evidence collection, and exportable reports.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Capabilities</h2>
          <ul>
            <li>Pre-built control sets for security, privacy, and safety</li>
            <li>Evidence collectors with trace links and audit trails</li>
            <li>One-click report export for auditors and stakeholders</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Schedule a compliance briefing →</a>
          </p>
        </div>
      </div>
    </div>
  )
}
