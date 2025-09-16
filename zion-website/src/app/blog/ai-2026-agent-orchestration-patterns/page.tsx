"use client"
import React from 'react'

export default function BlogAgentOrchestrationPatterns() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <p className="text-sm text-gray-500">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Agent Orchestration Patterns for 2026</h1>
        <p className="mt-4 text-gray-700">
          Patterns for planning, tool-use, retries, and guardrails that scale in the enterprise.
        </p>
        <div className="prose max-w-none mt-8">
          <h2>Core patterns</h2>
          <ul>
            <li>Plan-Execute-Reflect cycles</li>
            <li>Tool adapters with idempotent semantics</li>
            <li>Policy-as-code with measurable SLIs</li>
          </ul>
        </div>
      </article>
    </div>
  )
}

