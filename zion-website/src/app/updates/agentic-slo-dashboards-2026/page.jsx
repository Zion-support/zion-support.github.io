"use client"
import React from 'react'

export default function AgenticSloDashboards2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mx-auto lg:text-left">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Launch</h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Agentic SLO Dashboards (2026 Preview)
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Define and operate SLOs for production agents across latency, quality, safety, and cost. Drill down
            to traces, eval signals, guardrail events, and incidents with audit‑ready evidence.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a href="/updates/production-rag-observability-suite-1-0" className="rounded-xl bg-white/5 p-5 text-blue-300 hover:bg-white/10 transition">
            Launch: RAG Observability Suite →
          </a>
          <a href="/updates/real-time-evals-control-plane" className="rounded-xl bg-white/5 p-5 text-blue-300 hover:bg-white/10 transition">
            Guide: Evals Control Plane →
          </a>
        </div>
      </div>
    </div>
  )
}

