import React from 'react'

export default function AgentSafetyCertificationBetaPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI Agent Safety Certification (Beta)
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            A new certification program validating safety practices for autonomous agents across design, evaluations, and
            day-2 operations.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            The AI Agent Safety Certification (Beta) defines practical, auditable controls for agent systems. It focuses on
            measurable safeguards and evidence collection rather than checklists, helping organizations reduce risk while
            accelerating delivery.
          </p>

          <h2>What is included</h2>
          <ul>
            <li>Design-time threat modeling tailored to tool-using agents</li>
            <li>Task-suite based evaluations with red-team scenarios</li>
            <li>Operational guardrails with policy-as-code and approvals</li>
            <li>Observability, incident workflows, and post-incident reviews</li>
            <li>Certification rubric with evidence templates</li>
          </ul>

          <h2>Who should apply</h2>
          <p>
            Teams deploying agents in production environments, especially where financial, safety, or privacy risks exist.
          </p>

          <h2>Get started</h2>
          <p>
            Join the beta to receive the full rubric, templates, and onboarding support.
          </p>
          <p>
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Contact us to join the beta →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

