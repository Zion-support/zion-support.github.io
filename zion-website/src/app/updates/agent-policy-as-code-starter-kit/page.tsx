import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Launch: Agent Policy-as-Code Starter Kit</h1>
          <p className="mt-2 text-gray-300">Ready-to-run policy packs, CI checks, and audit trails to operationalize AI governance in weeks.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>What’s inside</h2>
          <ul>
            <li>Prebuilt policy packs for data access, tool permissions, and PII handling</li>
            <li>CI/CD gates with fail-fast checks and human-in-the-loop approvals</li>
            <li>Evidence capture, signed artifacts, and audit-ready logs</li>
            <li>Templates for exceptions and periodic attestations</li>
          </ul>
          <h2>Get started</h2>
          <p>Contact us to enable the starter kit and integrate with your repos and environments.</p>
        </section>
      </article>
    </div>
  )
}

