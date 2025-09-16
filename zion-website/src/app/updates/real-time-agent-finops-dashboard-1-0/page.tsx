// @ts-nocheck
import React from 'react'

export default function RealTimeAgentFinOpsDashboardPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-xs text-blue-300">Launch • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real‑Time Agent FinOps Dashboard v1.0
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Live spend, latency, and quality scorecards with budget alerts and routing controls for
          production agent systems. Balance cost, performance, and safety with transparent metrics and
          policy‑as‑code guardrails.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">What’s inside</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Real‑time cost per request, per tool, and per route</li>
              <li>Latency and quality SLIs with target bands and alerts</li>
              <li>Budget policies with automated throttles and safe fallbacks</li>
              <li>Evidence bundles tying decisions to eval gates and policy checks</li>
              <li>Executive and engineering drill‑downs with exportable reports</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Key benefits</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Cut spend by routing based on live price‑performance signals</li>
              <li>Prevent overruns with budget alerts and automatic guardrails</li>
              <li>Improve reliability with eval‑gated rollouts and rollbacks</li>
              <li>Prove compliance with audit‑ready evidence and lineage</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
          >
            Request a demo
          </a>
        </div>
      </div>
    </div>
  )
}

