import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Launch: Compliance Auditor (v1.0)</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Automated GenAI compliance auditing with policy-as-code, lineage, PII detection, and exportable audit
            reports. Integrates with SOC2/ISO workflows and produces evidence packages on demand.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Policy-as-code templates for SOC2, ISO 27001, and internal controls</li>
              <li>Dataset and prompt lineage with redaction and retention policies</li>
              <li>Safety guardrails with override workflows and approvals</li>
              <li>Continuous controls monitoring and drift alerts</li>
              <li>One-click evidence exports for auditors</li>
            </ul>
            <p>Available as a managed service or on-prem installation.</p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

