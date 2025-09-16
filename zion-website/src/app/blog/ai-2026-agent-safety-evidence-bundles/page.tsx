// @ts-nocheck
import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'AI 2026: Agent Safety Evidence Bundles — Practical Guide',
  description:
    'How to design and operationalize evidence bundles for agent safety: eval gates, lineage, and auditability.',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">AI 2026: Agent Safety Evidence Bundles — Practical Guide</h1>
          <p className="mt-4 text-gray-700">
            Evidence bundles make safety operational. They collect inputs, decisions, tools invoked, evaluation
            outcomes, and policy checks into a portable package that supports reviews, approvals, and audits.
          </p>

          <section className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Why Evidence Bundles</h2>
            <p className="text-gray-700">
              In production agent systems, decisions must be explainable and reproducible. Bundles standardize how we
              capture traces, evaluation metrics, groundedness checks, red‑team outcomes, and approvals.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">What to Capture</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Inputs, prompts, and retrieved context with hashes</li>
              <li>Tool calls with parameters and risk tier</li>
              <li>Evaluation results and thresholds (pass/fail)</li>
              <li>Policy checks and exceptions with approver identity</li>
              <li>Outcome artifacts and lineage</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">Rollout Pattern</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Define bundle schema and retention policy</li>
              <li>Wire evidence capture into orchestration layer</li>
              <li>Gate risky actions on evaluation thresholds</li>
              <li>Enable reviewer workflows and incident hooks</li>
            </ol>

            <div className="mt-8 p-4 rounded-lg bg-purple-50 border border-purple-100">
              <p className="text-purple-900 text-sm">
                Looking for a turnkey implementation? See the{' '}
                <Link className="text-purple-700 font-semibold" href="/updates/agent-reliability-scorecards-1-0">
                  Agent Reliability Scorecards v1.0
                </Link>{' '}and{' '}
                <Link className="text-purple-700 font-semibold" href="/updates/ai-security-evidence-vault-v1">
                  AI Security Evidence Vault v1.0
                </Link>.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}

