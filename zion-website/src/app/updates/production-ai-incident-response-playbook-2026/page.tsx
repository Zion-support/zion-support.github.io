import React from 'react'

export default function ProductionAIIncidentResponsePlaybook2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Playbook • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Production AI Incident Response Playbook (2026)</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Step-by-step response patterns, metrics, and evidence bundles to manage AI incidents with speed and rigor.
        </p>

        <div className="mt-10 grid gap-6">
          <section className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Signals & Detection</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Realtime signals: violation rates, override rates, groundedness, error budgets</li>
              <li>Automated anomaly alerts from eval gates and policy checks</li>
              <li>Evidence capture with request traces and tool action logs</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Triage & Containment</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Classify impact using severity matrix (safety, cost, latency, accuracy)</li>
              <li>Activate canaries, roll back risky routes, tighten policy tiers</li>
              <li>Freeze non‑essential tools and apply stricter budgets</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Eradication & Recovery</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Root cause via failure taxonomy and counterfactual evals</li>
              <li>Patch prompts, datasets, or routing policies with shadow tests</li>
              <li>Progressive traffic restoration with rollback guards</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Post‑Incident Review</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Evidence bundle: timeline, metrics deltas, decisions, and artifacts</li>
              <li>Update playbooks, add new evals, and codify preventions</li>
              <li>Share learnings across teams with reproducible examples</li>
            </ul>
          </section>

          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

