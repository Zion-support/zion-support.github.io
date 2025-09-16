"use client"
import React from 'react'

export default function AIGovernanceDashboardV5Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Governance Dashboard v5</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Cross-env policy posture, eval gates, exception workflows, and signed audit evidence — now faster, with deeper integrations and export profiles.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>What’s new</h2>
          <ul>
            <li>Deeper CI/CD integration with eval gates and rollback policies.</li>
            <li>Signed evidence bundles with SOC2/ISO export profiles.</li>
            <li>Expanded policy packs and environment posture overview.</li>
            <li>Improved latency and UX across dashboards and drilldowns.</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            v5 helps teams operationalize AI governance with measurable controls, live signals, and audit-ready trails — without slowing delivery.
          </p>
          <h2>Get started</h2>
          <p>
            Contact us to enable v5 in your environment and review the rollout checklist.
          </p>
        </div>
      </div>
    </div>
  )
}

