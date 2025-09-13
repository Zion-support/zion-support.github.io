import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agent Security Operations 2025: End-to-End Controls | Zion Tech Group',
  description: 'Blueprint for securing AI agents end-to-end: identity, policy-as-code, evals, observability, and incident response.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agent Security Operations (2025)</h1>
          <p className="text-lg text-indigo-100">Practical patterns to secure agent workflows: identity, permissions, guardrails, runtime policy checks, and SOC integration.</p>
          <div className="mt-4 text-sm text-indigo-200">📝 17 min read • Sep 12, 2025 • AI Security</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <p>
          As AI agents move into critical paths, security operations must evolve to cover data access, tool invocation, and downstream actions. This guide outlines a practical
          E2E approach across identity, policy, runtime isolation, evaluations, and incident response, with actionable checklists.
        </p>

        <h2>Security Pillars</h2>
        <ul>
          <li>Strong identity and least-privilege permissions for agents and tools</li>
          <li>Policy-as-code guardrails enforced pre- and post-invocation</li>
          <li>Runtime isolation with quotas, budgets, and circuit breakers</li>
          <li>Inline evaluations for safety, privacy, and compliance</li>
          <li>Structured telemetry for auditability and forensics</li>
        </ul>

        <h2>Operations Checklist</h2>
        <ol>
          <li>Map data domains, tools, and permissions required by each agent</li>
          <li>Codify policies with testable rules; add red-team scenarios</li>
          <li>Enable distributed tracing with evaluation signals</li>
          <li>Harden tool adapters; sanitize I/O and validate contracts</li>
          <li>Define incident classes and automate containment runbooks</li>
        </ol>

        <div className="mt-10 p-6 rounded-xl bg-indigo-50 border border-indigo-100">
          <h3 className="m-0">Next up</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/blog/ai-2025-secure-agent-architectures" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg">🔒 Secure Architectures</Link>
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg">Explore More Content</Link>
          </div>
        </div>
      </div>
    </div>
  );
}