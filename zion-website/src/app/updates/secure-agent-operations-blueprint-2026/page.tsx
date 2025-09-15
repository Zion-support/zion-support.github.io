import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Blueprint: Secure Agent Operations 2026</h1>
          <p className="mt-2 text-gray-300">End-to-end controls, telemetry, and incident response for safe, compliant, and resilient agent ops.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>Blueprint pillars</h2>
          <ul>
            <li>Zero-trust tool permissions and time-boxed access</li>
            <li>Eval-gated releases with rollback automation</li>
            <li>Live safety telemetry and incident workflows</li>
            <li>Policy-as-code with auditable evidence</li>
          </ul>
          <h2>Implementation</h2>
          <p>We provide templates, runbooks, and dashboards to get you production-ready quickly.</p>
        </section>
      </article>
    </div>
  )
}

