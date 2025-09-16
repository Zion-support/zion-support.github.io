// @ts-nocheck
import React from 'react'

export default function SecureToolingPermissionsBlueprint() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-2">Security • Sep 16, 2025 • 7 min read</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI 2026: Secure Tooling Permissions — Blueprint
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Risk‑tiered adapters, approvals, and budgets for safe agent actions. Enforce least privilege and runtime
            checks with policy‑as‑code and auditable evidence.
          </p>
          <div className="prose prose-lg max-w-none">
            <h2>Design goals</h2>
            <ul>
              <li>Risk tiers and capability scopes per tool</li>
              <li>Just‑in‑time approvals and budget constraints</li>
              <li>Signed decisions with evidence for audit</li>
            </ul>
            <h3>Runtime enforcement</h3>
            <p>
              Gate tool execution with policy adapters and attach signals to evals and observability for complete
              lifecycle governance.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

