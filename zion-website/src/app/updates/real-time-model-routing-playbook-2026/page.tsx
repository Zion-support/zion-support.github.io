import React from 'react'


export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real-Time Model Routing Playbook (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Implement latency- and quality-aware routing with budgets, canaries, and audits.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Highlights</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Latency budgets and SLOs with streaming metrics</li>
              <li>Quality routing using live eval signals and fallbacks</li>
              <li>Cost-aware policies with per-request budgets and audits</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}
