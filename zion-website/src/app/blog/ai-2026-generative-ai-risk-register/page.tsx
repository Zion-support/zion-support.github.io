import React from 'react'

export default function GenerativeAIRiskRegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header>
          <p className="text-sm text-gray-500">September 15, 2025</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">AI 2026: Generative AI Risk Register</h1>
          <p className="mt-3 text-gray-600">A living template to track risks, owners, mitigations, and evidence for enterprise AI programs.</p>
        </header>

        <div className="prose mt-8">
          <h2>Why a Risk Register</h2>
          <p>
            As AI systems scale, a structured register aligns product, security, compliance, and operations on
            the highest-impact risks and mitigations. It enables audit-ready traceability across incidents and changes.
          </p>

          <h2>Structure</h2>
          <ul>
            <li>Risk statement, category, and severity</li>
            <li>Owners, stakeholders, and review cadence</li>
            <li>Controls mapped to policy-as-code and eval gates</li>
            <li>Evidence links and SLOs for effectiveness</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            Start with a minimal set of categories (safety, privacy, security, reliability), define pass criteria,
            and wire CI/CD checks to block changes that regress controls or eval performance.
          </p>
        </div>
      </article>
    </div>
  )
}

