"use client"
import React from 'react'

export default function RealTimeAgentDebuggerPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Real-Time Agent Debugger v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Live traces, prompt diffs, and tool-call timelines to debug production agents safely.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>Highlights</h2>
          <ul>
            <li>Step-by-step tool call timeline with parameters and outcomes.</li>
            <li>Prompt and context diffs with redaction of sensitive data.</li>
            <li>Live evaluation hooks and abort switches for safe rollouts.</li>
            <li>Exportable evidence bundles for audits and postmortems.</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Contact us to enable the debugger in your staging environment and review the rollout checklist.
          </p>
        </div>
      </div>
    </div>
  )
}

