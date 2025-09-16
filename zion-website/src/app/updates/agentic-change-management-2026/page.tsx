// @ts-nocheck
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Agentic Change Management (2026 Preview)</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Safe rollout strategies with canaries, eval gates, and policy‑as‑code for agentic systems in production.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">What you will learn</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Designing canary releases for agent tools and prompts</li>
              <li>Implementing eval gates and rollback policies</li>
              <li>Measuring customer impact with objective telemetry</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}
