"use client"
import React from 'react'

export default function AgenticOpsControlCenter21() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <a href="/updates" className="text-sm text-blue-400 hover:text-blue-300">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Agentic Ops Control Center v2.1
        </h1>
        <p className="mt-3 text-gray-300">2025-09-15 · Launch</p>
        <div className="mt-8 prose prose-invert prose-a:text-blue-400">
          <p>
            v2.1 introduces real-time eval alerts, new incident runbooks, improved policy-as-code checks,
            and SOC2-ready audit trails to help teams operate agent systems with confidence.
          </p>
          <ul>
            <li>Live eval alerts with latency and safety thresholds</li>
            <li>Prebuilt incident and rollback runbooks</li>
            <li>Signed policy bundles and evidence capture</li>
            <li>Expanded dashboards for MTTR and SLA compliance</li>
          </ul>
          <p>
            Get started by visiting the documentation or contacting our team to enable the upgrade in your environment.
          </p>
        </div>
      </div>
    </div>
  )
}

