import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Real-Time Retrieval Evals</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            This guide details how to evaluate streaming retrieval systems with metrics like P95 latency,
            retrieval hit-rate, and grounded answer quality, including test harness examples and dashboards.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Define SLIs and SLOs for end-to-end retrieval</li>
              <li>Measure latency distributions and tail behavior</li>
              <li>Track recall, precision, and answer grounding</li>
              <li>Integrate with tracing and cost telemetry</li>
            </ul>
            <p>Sample configurations are available via the governance toolkit and observability exporter.</p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Get the guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

