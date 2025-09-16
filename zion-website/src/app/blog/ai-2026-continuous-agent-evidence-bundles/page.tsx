// @ts-nocheck
import React from 'react'

export default function BlogPost() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Announcement • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Continuous Agent Evidence Bundles</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Designing continuous evidence capture for autonomous agents with policy gates, provenance, and signed
          lineage for every change and action in production.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Evidence bundles bring together traces, prompts, tool results, eval scores, and policy decisions into a
            tamper‑evident package. They accelerate incident response, audits, and cross‑team collaboration.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Policy‑as‑code gates produce verifiable approvals</li>
            <li>Eval overlays quantify quality and risk at each step</li>
            <li>Signed lineage ensures integrity across environments</li>
          </ul>
          <p>
            In upcoming guides we will share reference implementations and templates you can adopt today.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">See latest updates →</a>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'

export default function ContinuousAgentEvidenceBundles() {
  return (
    <div className="min-h-screen bg-white">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <p className="text-sm text-gray-500">September 16, 2025 · 10 min read</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              AI 2026: Continuous Agent Evidence Bundles
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              How to design continuous evidence capture for autonomous agents — enabling reliable post-mortems,
              faster incident response, and provable compliance across environments.
            </p>
          </header>

          <section className="prose prose-lg prose-slate max-w-none">
            <h2>Why Evidence Matters</h2>
            <p>
              Autonomous systems require verifiable traces and artifacts to support decisions, resolve incidents, and
              meet governance requirements. Evidence bundles make this operationally feasible.
            </p>

            <h3>Core Bundle Contents</h3>
            <ul>
              <li><strong>Execution Traces:</strong> Steps, tools, inputs/outputs, and timing metadata.</li>
              <li><strong>Policies Applied:</strong> Guardrails, exceptions, and outcomes with severity.</li>
              <li><strong>Attachments:</strong> Files, screenshots, red-team prompts, and retrieval snippets.</li>
              <li><strong>Signatures:</strong> Hashes and provenance for tamper-evidence.</li>
            </ul>

            <h3>Operational Patterns</h3>
            <ol>
              <li>Capture structured traces and artifacts at each critical step.</li>
              <li>Enforce policy gates in-line; emit pass/fail signals into the bundle.</li>
              <li>Persist bundles with lifecycle policies (retention, redaction, access tiers).</li>
              <li>Expose bundles to SRE, Security, and Compliance for review.</li>
              <li>Automate reports: diffs between versions, incident timelines, and KPI rollups.</li>
            </ol>

            <p>
              See also our update on the Evidence Vault: <Link href="/updates/ai-security-evidence-vault-v1" className="text-purple-600">AI Security Evidence Vault v1.0</Link>.
            </p>
          </section>

          <footer className="mt-12 border-t pt-6">
            <Link href="/blog" className="text-purple-600 font-semibold">← Back to blog</Link>
          </footer>
        </div>
      </article>
    </div>
  )
}

