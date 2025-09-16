import React from 'react'

export default function EvaluationDrivenFinOpsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-4">Launch: Evaluation-Driven FinOps (Starter Kit)</h1>
      <p className="text-gray-300 mb-6">
        Reduce LLM cost-to-value with eval gates, routing policies, and safety budgets.
      </p>
      <section className="prose prose-invert">
        <p>
          This starter kit helps platform teams implement evaluation-driven financial operations for
          AI systems. It includes policy examples, routing patterns, and dashboards to monitor
          quality, latency, and cost. Use it to introduce guardrails and budgets without slowing
          teams down.
        </p>
      </section>
    </main>
  )
}

// Note: removed duplicate default export

