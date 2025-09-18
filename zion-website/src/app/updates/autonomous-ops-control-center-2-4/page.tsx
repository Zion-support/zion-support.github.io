import React from 'react'

export default function AutonomousOpsControlCenter24Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-green-300">Launch</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Ops Control Center 2.4</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          New playbooks, real-time eval gates, and risk scorecards to operate autonomous systems with higher safety and speed.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Runbook templates with embedded evaluation gates and rollback policies</li>
            <li>Unified risk scorecards across latency, quality, spend, and incidents</li>
            <li>Deeper integrations with observability and incident response tooling</li>
          </ul>
          <h2 className="mt-8">Get Started</h2>
          <p>
            Explore the blueprint and request a demo.
          </p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

