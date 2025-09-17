import React from 'react'

export const metadata = {
  title: 'AI Agents Innovation Lab — Zion Tech Group',
  description: 'Hands-on lab with real-world agentic workflows, evals, and governance.',
}

export default function AIAgentsLabOpening() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Launch: AI Agents Innovation Lab
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        We are launching a new hands-on innovation lab focused on building, evaluating, and governing
        enterprise-ready AI agents. Apply to join the first cohort and gain access to templates, eval
        harnesses, and guided projects that accelerate real-world outcomes.
      </p>
      <div className="mt-8">
        <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
          Apply now →
        </a>
      </div>
    </div>
  )
}

