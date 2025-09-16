import React from 'react'

export default function ZeroTrustAgentControllersPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <a href="/updates" className="text-sm text-blue-300 hover:text-blue-200">← Back to updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Zero-Trust Agent Controllers v1.0</h1>
        <p className="mt-4 text-gray-300">Runtime guards for tool use with approvals, budgets, and adaptive policies.</p>

        <div className="mt-8 space-y-6 text-gray-300">
          <p>Zero-Trust Agent Controllers enforce least-privilege, auditable actions for agents using external tools. This release introduces standardized adapters, policy evaluation hooks, and budget-aware routing.</p>
          <h2 className="text-xl font-semibold text-white">Key Capabilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Policy-as-code approvals with dual-control for sensitive tools</li>
            <li>Dynamic budgets: per-session and per-action limits with alerts</li>
            <li>Action provenance: signed requests, tamper-evident logs, and replay</li>
            <li>Adaptive restrictions based on risk signals and live evals</li>
          </ul>
          <h2 className="text-xl font-semibold text-white">Getting Started</h2>
          <p>Deploy the controller sidecar and integrate with your agent tool adapters. Configure default deny with explicit allowlists and escalation workflows.</p>
        </div>

        <div className="mt-10">
          <a href="/" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Return home →</a>
        </div>
      </div>
    </div>
  )
}

