"use client"
import React from 'react'

export default function AgenticOpsControlCenter22Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Agentic Ops Control Center v2.2</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Deeper incident drilldowns, runbook automation, and cross-environment policy status.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>Highlights</h2>
          <ul>
            <li>Incident drilldowns with full event timelines and causality graphs.</li>
            <li>One-click runbook automation with approvals and audit trails.</li>
            <li>Policy status views across dev, staging, and production.</li>
          </ul>
          <h2>Availability</h2>
          <p>
            Rolling out to existing customers this week. New customers can request early access.
          </p>
        </div>
      </div>
    </div>
  )
}

