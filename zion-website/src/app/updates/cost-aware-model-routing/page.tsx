import React from 'react'

export default function CostAwareModelRoutingPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Cost-Aware Model Routing (2025)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Strategies to optimize quality, latency, and cost with dynamic model selection and guardrails.
          Learn how to blend small, medium, and large models with evaluators and backstops for reliable outcomes.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Policy and budget constraints for routing decisions</li>
            <li>Quality gates with lightweight evaluators</li>
            <li>Shadow routing and canary analysis patterns</li>
            <li>Telemetry required to track performance per dollar</li>
          </ul>
          <p>Includes reference code snippets and terraform modules to get started quickly.</p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Talk to an expert →
          </a>
        </div>
      </div>
    </div>
  )
}

