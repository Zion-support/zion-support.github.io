import React from 'react'

export default function RealTimeEvalsControlPlanePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real-Time Evals Control Plane
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Low-latency eval orchestration with streaming metrics, gates, and rollback hooks.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Streaming eval metrics and alerts</li>
            <li>Pluggable gates with canary and rollback</li>
            <li>First-class support for multimodal agents</li>
            <li>SDKs for Node, Python, and Go</li>
          </ul>
          <h2>Use cases</h2>
          <p>Safely ship updates, monitor quality, and enforce SLOs for agent systems.</p>
          <p>
            <a href="/contact" className="text-blue-400">Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

