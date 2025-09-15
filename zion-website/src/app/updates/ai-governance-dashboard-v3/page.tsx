import React from 'react'

export default function AIGovernanceDashboardV3Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Governance Dashboard v3
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Unified governance KPIs with policy-as-code status, eval gates, and exception workflows for audited AI delivery.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What’s new</h2>
          <ul>
            <li>Program-level KPIs for policy coverage, exception rates, and approval latency</li>
            <li>Signed eval artifacts with lineage and environment provenance</li>
            <li>Gate status across services with drill-down to failing rubrics</li>
            <li>Access controls and immutable audit logs</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams gain real-time visibility into compliance posture and release readiness, reducing audit effort while
            improving reliability.
          </p>
          <h2>Get started</h2>
          <p>
            Enable the dashboard in your organization and connect to your CI/CD and model gateways.
          </p>
          <p>
            <a href="/contact" className="text-blue-400">Talk to our team →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

