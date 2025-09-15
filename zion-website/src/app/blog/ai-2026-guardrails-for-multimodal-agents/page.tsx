import React from 'react'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <p className="text-sm font-semibold text-purple-700">Guide</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">AI 2026: Guardrails for Multimodal Agents</h1>
          <p className="mt-2 text-gray-600">Design patterns for safe image/audio/text agents with continuous evals.</p>
        </header>
        <section className="prose prose-lg mt-8">
          <h2>Threat Model</h2>
          <p>Multimodal inputs expand the attack surface. Consider prompt injection in images, audio spoofing, and tool misuse.</p>
          <h2>Guardrail Layers</h2>
          <ul>
            <li>Input sanitization and content safety models per modality</li>
            <li>Sandboxed tool use with quotas and capability tokens</li>
            <li>Policy-as-code enforcement and incident response playbooks</li>
          </ul>
          <h2>Measure and Iterate</h2>
          <p>Establish safety SLIs, run continuous red-team suites, and gate releases with eval thresholds.</p>
        </section>
      </article>
    </div>
  )
}

