"use client"
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Finance OS v1.1</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Enhanced financial automation with real-time risk scoring, immutable audit trails, policy-as-code limits, and
          automated reconciliations. v1.1 adds live evaluation hooks, explainable routing, and compliance-ready logs.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <p>
            Finance teams can automate reconciliation, anomaly detection, and routing while maintaining
            transparent, verifiable controls. Integrations include leading ERPs, data warehouses, and payment rails.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real-time guardrails and risk scoring with drift monitors</li>
            <li>Policy-as-code templates for approvals and segregation of duties</li>
            <li>Built-in evaluation harnesses for accuracy, latency, and cost SLIs</li>
            <li>Exportable, immutable audit logs for internal and external reviews</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

