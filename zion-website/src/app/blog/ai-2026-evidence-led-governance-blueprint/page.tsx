import React from 'react'

export default function EvidenceLedGovernanceBlueprint() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <p className="text-sm text-gray-500">Blueprint • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">AI 2026: Evidence‑Led Governance — From Policy to Runtime Controls</h1>
        <p className="mt-4 text-gray-700">
          Governance moves beyond static documents. In production AI, policy must compile into
          executable controls, objective evaluations, and signed evidence that survives audit.
          This blueprint shows how to translate principles into runtime: pre‑deployment gates,
          canary rollouts, live evaluation budgets, risk‑tiered tool permissions, and incident‑ready
          postmortems linked to policy.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900">Operating Model</h2>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li>Policy grammar with versioned, testable rules</li>
          <li>Evaluation harnesses wired into CI/CD and runtime</li>
          <li>Risk tiers that scope tools, approvals, and budgets</li>
          <li>Signed evidence ledger for releases and incidents</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-gray-900">Reference Controls</h2>
        <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-2">
          <li>Pre‑merge gates: objective evals must meet target thresholds</li>
          <li>Progressive delivery with automatic rollback on SLO violation</li>
          <li>Tool adapters with typed I/O, sandboxes, and approvals</li>
          <li>Continuous monitoring: groundedness, override rates, policy violations</li>
        </ol>

        <p className="mt-10 text-gray-700">
          The result: faster iteration with lower risk, measurable reliability, and audit‑ready
          accountability. Organizations can prove safety, not just claim it.
        </p>
      </article>
    </div>
  )
}

