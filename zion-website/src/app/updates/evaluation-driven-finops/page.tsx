import React from 'react'

<<<<<<< HEAD
function EvaluationDrivenFinOpsInner() {
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

=======
>>>>>>> cursor/create-and-deploy-new-content-d07c
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Blueprint</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Blueprint: Evaluation-Driven FinOps for AI
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Unify cost, quality, and latency using offline benchmarks and live canary evals to route traffic,
            manage budgets, and make evidence-based model choices.
          </p>
          <h2>What’s inside</h2>
          <ul>
            <li>FinOps KPIs linked to eval metrics and SLOs</li>
            <li>Routing strategies: dynamic tiers, semantic caches, and batching</li>
            <li>Quality budgets, abort switches, and rollback rules</li>
            <li>Dashboards for cost per outcome and latency compliance</li>
          </ul>
          <h2>Getting started</h2>
          <p>
            Pilot with a small scenario suite and progressive canaries. Track unit economics and reliability before
            expanding coverage and tightening gates.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
