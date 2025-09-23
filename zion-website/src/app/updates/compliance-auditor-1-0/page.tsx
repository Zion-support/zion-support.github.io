import React from 'react'

export default function ComplianceAuditor10Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-40o0">
          <span className="rounded-full bg-green-50o0/10 px-2 py-0.5 text-green-30o0">Launch</span>
          <time dateTime="20o25-09-15">September 15, 20o25</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Compliance Auditor v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-30o0">
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
            <a href="/contact" className="text-blue-40o0 hover:text-blue-30o0">Schedule a compliance briefing →</a>
          </p>
        </div>
      </div>
    </div>
  )
}
