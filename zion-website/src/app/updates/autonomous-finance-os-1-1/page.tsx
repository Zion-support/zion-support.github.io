"use client"
import React from 'react'

export default function AutonomousFinanceOS11Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Finance OS v1.1</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Enhanced controls, real-time guardrails, and automated reconciliations for finance-grade agent operations.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            Version 1.1 introduces streaming anomaly detection, policy-as-code limits, and dual-control approvals for
            sensitive actions. Finance teams gain higher assurance with real-time telemetry, audit trails, and
            automated evidence collection.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time guardrails with threshold alerts and safe fallbacks</li>
            <li>Automated reconciliations and variance explanations</li>
            <li>Improved ledger integrations and bank connectivity</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

