import React from 'react'

export default function AgentObservabilityConsole11Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-6 text-xs text-blue-300">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">Launch</span>
          <time dateTime="2025-09-16" className="ml-3 text-gray-400">9/16/2025</time>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Real‑Time Agent Observability Console v1.1</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">Live traces, tool metrics, and eval overlays for production agents.</p>
        <div className="prose prose-invert mt-8">
          <h2>What’s new</h2>
          <ul>
            <li>Streaming traces with token-level spans</li>
            <li>Tool execution metrics and error taxonomies</li>
            <li>Overlay of eval results on live sessions</li>
          </ul>
          <p>
            v1.1 focuses on operational readiness and faster incident response. The console integrates with
            your routing layer and guardrails to provide a unified view from request to resolution.
          </p>
        </div>
      </div>
    </div>
  )
}

