import React from 'react'

export default function RealTimeModelRoutingPlaybookPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-4">Guide: Real-Time Model Routing Playbook (2026 Preview)</h1>
      <p className="text-gray-300 mb-6">
        Production patterns for cost-aware, safety-aware routing with live telemetry and rollback.
      </p>
      <section className="prose prose-invert">
        <p>
          Learn how to build and operate dynamic routing layers for LLM workloads. The playbook
          covers signal design, health checks, rollback strategies, canarying, and budget-aware
          selection. It links to reference dashboards and policy examples you can adapt.
        </p>
      </section>
    </main>
  )
}

