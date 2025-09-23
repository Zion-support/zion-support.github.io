"use client"
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Autonomous Compliance Copilot v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          An interactive copilot that helps teams draft policies, generate audit evidence, and enforce controls using
          policy-as-code. Ship compliant AI systems faster with built-in templates and evaluation hooks.
        </p>
        <div className="mt-8 space-y-4 text-gray-300">
          <ul className="list-disc pl-6 space-y-2">
            <li>Policy drafting with versioned policy-as-code bundles</li>
            <li>Automated evidence collection and immutable audit trails</li>
            <li>Runtime guardrails with evaluation gates and exceptions workflow</li>
            <li>Integrations with CI, ticketing, and data catalogs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

