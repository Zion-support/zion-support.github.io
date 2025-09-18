"use client"
import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Launch: Autonomous Knowledge Ops Suite v1.1</h1>
          <p className="mt-2 text-gray-300">Deeper integrations, evidence bundling, and safer tool-use across workflows.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-16</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            Version 1.1 introduces enhanced integrations with leading data sources and
            collaboration tools, enabling end-to-end knowledge operations with automated
            evidence bundling and stricter tool-use guardrails.
          </p>
          <h2>What’s new</h2>
          <ul>
            <li>Native connectors for Confluence, Notion, and Git-based docs</li>
            <li>Signed evidence bundles with provenance metadata</li>
            <li>Policy-aware tool arbitration and safer execution paths</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Contact our team to enable v1.1 in your environment and access deployment guides.
          </p>
        </section>
      </article>
    </div>
  )
}

