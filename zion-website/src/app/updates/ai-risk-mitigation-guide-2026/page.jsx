import React from 'react'

export default function AIRiskMitigationGuide2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            Guide
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">AI Risk Mitigation in Production (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical controls, eval gates, and incident playbooks for safe AI operations.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>What you will learn</h2>
          <ul>
            <li>Designing eval gates for critical workflows</li>
            <li>Guardrails for data leakage, jailbreaks, and tool-use</li>
            <li>Incident taxonomy, playbooks, and post-incident evidence</li>
            <li>Cost, latency, and quality trade-offs under risk budgets</li>
          </ul>
          <h2>Get the full guide</h2>
          <p>
            Reach out to our team to access the full 2026 guide, templates, and checklists.
          </p>
        </div>
      </div>
    </div>
  )
}

