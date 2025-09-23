"use client"
import React from 'react'

export default function AgentOrchestrationToolkitV2Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-15</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Agent Orchestration Toolkit v2
          </h1>
          <p className="mt-4 text-gray-300">
            Unified workflows for multi-agent planning, tool-use, and guardrails with production templates.
          </p>
        </div>
        <div className="prose prose-invert prose-headings:text-white prose-a:text-blue-300">
          <p>
            Version 2 introduces a modular plan-exec loop, first-class tool adapters, and policy-as-code guardrails.
            Teams can compose evaluable multi-agent flows with tracing and live metrics out of the box.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Composable planners with deterministic checkpoints</li>
            <li>Built-in eval hooks and canary routing</li>
            <li>Production templates for common enterprise tasks</li>
          </ul>
          <p>
            Get started by contacting us or exploring more updates.
          </p>
          <p>
            <a href="/contact" className="text-blue-300 hover:text-blue-200">Contact us →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

