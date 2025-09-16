// @ts-nocheck
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Launch • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Real‑Time Agent Cost Optimizer v2.0 — Deep Dive</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Architecture, KPIs, and rollout lessons from cost‑aware routing with quality budgets, latency targets,
          and eval‑gated controls in production.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">What’s Inside</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Token budgeting with dynamic route selection</li>
              <li>Latency and quality SLOs with live eval overlays</li>
              <li>Change management and safe rollout playbook</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

// @ts-nocheck

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-blue-300">Launch · 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Real‑Time Agent Cost Optimizer v2.0 — Deep Dive</h1>
        <p className="mt-4 text-lg text-gray-300">Architecture, KPIs, and rollout lessons from cost‑aware, eval‑gated routing in production.</p>

        <div className="mt-8 space-y-6 text-gray-300">
          <p>We explore the routing graph, budgeted quality controls, and token policies that drive predictable spend while preserving outcome quality. This deep dive includes rollout guardrails, live eval gating, and lessons learned at scale.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Budgeted quality and latency targets with live scorecards</li>
            <li>Eval‑gated route selection and fallback safety rails</li>
            <li>Visibility: per‑route KPIs, anomaly alerts, and trend analytics</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

