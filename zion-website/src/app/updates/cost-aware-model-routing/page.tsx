import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Guide: Cost-Aware Model Routing
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-14</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Implement a policy-driven router that selects the optimal model per request based on
            cost, latency, and quality constraints. Reduce spend while preserving user experience
            with adaptive degradation and guardrails.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Policy schema for cost and latency budgets</li>
              <li>Quality gates with human-in-the-loop overrides</li>
              <li>Fallback strategies and caching considerations</li>
              <li>Observability for routing decisions and drift</li>
              <li>Reference implementation patterns</li>
            </ul>
            <p>
              Need help implementing? Our team can accelerate your rollout with best practices.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

