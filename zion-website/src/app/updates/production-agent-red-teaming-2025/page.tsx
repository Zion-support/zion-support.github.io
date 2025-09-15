import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Guide: Production Agent Red Teaming (2025)</h1>
          <p className="mt-2 text-gray-300">Adversarial evaluation playbook with jailbreak taxonomies and measurable mitigations.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            This guide outlines a practical methodology for continuous red teaming of agentic systems in production.
            It covers threat models, attack surfaces, and how to operationalize defenses with policy-as-code.
          </p>
          <h2>What to measure</h2>
          <ul>
            <li>Jailbreak success rate by category and severity</li>
            <li>Defense coverage and mitigation effectiveness</li>
            <li>Time-to-detect and time-to-mitigate (TTD/TTM)</li>
            <li>Impact on user experience and task success</li>
          </ul>
          <h2>Operationalizing</h2>
          <p>
            Automate red-team suites in CI/CD and run scheduled live tests with safe sandboxes. Feed results back into
            guardrail policies and retraining pipelines.
          </p>
        </section>
      </article>
    </div>
  )
}

