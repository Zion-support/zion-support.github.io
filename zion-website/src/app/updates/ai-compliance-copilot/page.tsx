import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Compliance Copilot
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Introducing AI Compliance Copilot, a governance-first companion that automates policy checks,
            maps risks to controls, and generates immutable audit trails. Embed guardrails directly into
            your software delivery lifecycle to accelerate safe AI deployment without slowing teams down.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-commit and CI policy checks with actionable guidance</li>
              <li>Audit-ready evidence collection and export (JSON, PDF)</li>
              <li>Approval workflows with segregation of duties</li>
              <li>Policy-as-code templates aligned to enterprise standards</li>
              <li>APIs for integrating with issue trackers and SIEM</li>
            </ul>
            <p>
              Ready to see it in action? Request a guided demo and pilot in your environment.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

