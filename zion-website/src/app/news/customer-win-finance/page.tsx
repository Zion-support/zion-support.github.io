import React from 'react'

export default function Post() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20">
        <a href="/news" className="text-sm text-blue-400">← Back to News</a>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Fortune 100 finance deployment</h1>
        <p className="mt-2 text-sm text-gray-400">September 10, 2025</p>

        <div className="prose prose-invert mt-8">
          <p>
            We deployed Zion Autonomous Operations across 12 business units in under eight weeks, 
            delivering measurable improvements to cycle times, compliance, and operational resilience.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>30% reduction in processing time for trade reconciliations</li>
            <li>Automated alerting and remediation for IT incidents</li>
            <li>Expanded policy enforcement and audit trails</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

