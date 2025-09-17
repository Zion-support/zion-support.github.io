import React from 'react'

export const metadata = {
  title: 'AI 2026: Agent FinOps Blueprint',
  description:
    'Practical playbook to reduce cost-to-value in agent systems using evaluations, routing, and safety budgets.',
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-sm text-blue-300">Blueprint • 2025-09-16</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          AI 2026: Agent FinOps Blueprint
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Learn how to align model spend with measurable value using evaluation-driven gates,
          routing strategies, and safety budgets. This blueprint provides concrete steps to
          implement FinOps for agentic systems in production.
        </p>

        <div className="mt-10 space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">Key Outcomes</h2>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>20–40% cost reduction via routing, caching, and batching</li>
              <li>Guardrails with evals to protect quality and safety</li>
              <li>Dashboards for real-time cost-to-value visibility</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">What You Will Implement</h2>
            <ol className="mt-4 list-decimal pl-6 space-y-2">
              <li>E2E evaluation pipeline integrated into CI/CD</li>
              <li>Policy-driven model routing with rollback controls</li>
              <li>Budgets and alerts tied to business SLAs</li>
            </ol>
          </section>
        </div>

        <div className="mt-12">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            See related updates →
          </a>
        </div>
      </div>
    </div>
  )
}

