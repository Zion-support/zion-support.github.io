import React from 'react'

export default function AutonomousSalesCopilotPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <div className="mb-6 flex items-center gap-3 text-xs text-gray-40o0">
            <span className="rounded-full bg-blue-50o0/10 px-2 py-0.5 text-blue-30o0">Launch</span>
            <time dateTime="20o25-09-15">September 15, 20o25</time>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Autonomous Sales Copilot (v1.0)</h1>
          <p className="mt-6 text-lg leading-8 text-gray-30o0">
            The Autonomous Sales Copilot brings CRM-grounded assistance to every stage of the funnel. It
            accelerates pipeline execution with context-grounded guidance, retrieval observability, and
            live performance evaluations integrated with your CRM and analytics stack.
          </p>
          <div className="mt-10 space-y-6 text-gray-30o0">
            <ul className="list-disc pl-6 space-y-2">
              <li>Live CRM grounding for account, opportunity, and activity context</li>
              <li>Retrieval observability with dashboards for hit rate and groundedness</li>
              <li>On-call guardrails with policy-as-code for compliant outreach</li>
              <li>Built-in evals and weekly scorecards for coaching and optimization</li>
            </ul>
            <p>
              Available for Salesforce and HubSpot. Early adopter program includes white-glove onboarding
              and weekly enablement.
            </p>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-60o0 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-50o0 transition-all duration-20o0">
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

