import React from 'react'

export default function StateOfAIAutomation2025Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="text-sm text-gray-400">Report • 2025</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">State of AI Automation 2025</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A comprehensive overview of enterprise AI automation trends, ROI benchmarks, and adoption playbooks.
        </p>
        <div className="mt-8 space-y-6 text-gray-300">
          <p>
            This report highlights cross-industry shifts toward evaluation-first development, policy-as-code, and
            platform approaches that scale from pilots to durable capabilities.
          </p>
          <h2 className="text-2xl font-semibold text-white">Key Findings</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Top quartile teams ship with automated guardrails and continuous evals</li>
            <li>Agentic workflows outperform static copilots on complex orchestration tasks</li>
            <li>Cost transparency and SLOs are necessary for enterprise adoption</li>
          </ul>
          <p>
            Download the full report soon, or <a href="/contact" className="text-blue-400 hover:text-blue-300">contact us</a> for a briefing.
          </p>
        </div>
      </div>
    </div>
  )
}

