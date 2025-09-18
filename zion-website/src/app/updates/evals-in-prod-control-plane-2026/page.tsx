import React from 'react'

export default function EvalsInProdControlPlane2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-xs text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Evals‑in‑Prod Control Plane (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A blueprint for managing live evaluation rubrics, thresholds, and rollout gates across
          environments. Standardize safety and quality checks with policy‑as‑code and auditable
          evidence bundles.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Key capabilities</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Central rubric registry and versioning</li>
              <li>Threshold management and environment overrides</li>
              <li>Rollout gates with canaries, shadows, and auto‑rollback</li>
              <li>Evidence capture and signed artifacts</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Benefits</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Faster, safer iteration with provable controls</li>
              <li>Consistent quality across teams and services</li>
              <li>Compliance‑friendly change management</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

