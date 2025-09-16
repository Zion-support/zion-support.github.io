"use client"
import React from 'react'

export default function AutonomousSupportCopilot12Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Support Copilot v1.2</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Faster triage, safer tool use, and improved retrieval observability with new eval gates.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>What’s new</h2>
          <ul>
            <li>Improved incident triage with prioritized queues and context summaries.</li>
            <li>Safer tool use via permission tiers and sandboxed execution.</li>
            <li>Retrieval observability dashboards with latency budgets and drift alerts.</li>
            <li>Live eval gates before rollout to production.</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Contact us to enable v1.2 in your environment and review the rollout checklist.
          </p>
        </div>
      </div>
    </div>
  )
}

