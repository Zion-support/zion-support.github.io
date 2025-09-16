// @ts-nocheck
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Production Guardrails for Multimodal Agents (2026)</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Design patterns to gate image, audio, and text tools with continuous evals, risk tiers, and policy enforcement
          for safer production deployments.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Patterns</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Tiered permissions by tool and context</li>
              <li>Provenance and content moderation hooks</li>
              <li>E2E audits with signed evidence bundles</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function ProductionGuardrailsMultimodalAgentsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Guide • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Guide: Production Guardrails for Multimodal Agents (2026)</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Design patterns to gate image, audio, and text tools with continuous evals, risk tiers, and policy‑as‑code.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Why this guide</h2>
          <p>
            Multimodal agents introduce new risk surfaces across perception and action. This guide outlines practical
            guardrails that keep operations safe while enabling rapid iteration.
          </p>
          <h2>Core patterns</h2>
          <ul>
            <li>Risk‑tiered tool adapters with sandboxed execution</li>
            <li>Continuous evals for groundedness, safety, and drift</li>
            <li>Policy‑as‑code gates with approvals and audit logs</li>
            <li>Incident‑ready evidence bundles linked to traces</li>
          </ul>
          <h2>Implementation checklist</h2>
          <ul>
            <li>Define SLIs and scorecards for each modality</li>
            <li>Instrument tool adapters with policy hooks</li>
            <li>Automate shadow tests before live rollout</li>
            <li>Wire exceptions and postmortem templates</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

