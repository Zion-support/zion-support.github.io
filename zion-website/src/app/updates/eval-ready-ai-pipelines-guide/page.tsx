import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Guide: Shipping Eval-Ready AI Pipelines</h1>
          <p className="mt-2 text-gray-300">Bake evals, canaries, and guardrails into CI/CD so changes ship safely and measurably.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>What you will learn</h2>
          <ul>
            <li>Designing offline eval suites and pass/fail criteria</li>
            <li>Configuring canary traffic and rollback automation</li>
            <li>Adding safety checks and policy-as-code gates</li>
            <li>Collecting SLIs and evidence for audits</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

