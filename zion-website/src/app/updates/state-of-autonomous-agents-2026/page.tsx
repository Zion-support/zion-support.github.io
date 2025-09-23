import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            State of Autonomous Agents (2026 Preview)
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            This preview report examines the rapidly evolving landscape of enterprise autonomous agents.
            We cover production deployment patterns, maturity models, and the control-plane capabilities
            required to scale safely across business functions.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Maturity model across design, evals, operations, and governance</li>
              <li>Reference architectures for resilient multi-agent systems</li>
              <li>Operational KPIs and SLIs for reliability and cost</li>
              <li>Risk taxonomy and mitigations for enterprise contexts</li>
              <li>Outlook: 2026 trends and investment priorities</li>
            </ul>
            <p>
              The full report will be available later this quarter. Subscribe for early access and updates.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Get early access
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

