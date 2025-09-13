import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agent Safety Red-Teaming 2025: Practical Guide | Zion Tech Group',
  description: 'End-to-end methodology for red-teaming LLM agents: attack taxonomies, evaluation harnesses, policy guardrails, and remediation loops.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agent Safety Red-Teaming (2025): Methods & Tooling</h1>
          <p className="text-lg text-indigo-100">Attack libraries, automated harnesses, and policy-as-code guardrails for resilient, compliant agentic systems.</p>
          <div className="mt-4 text-sm text-indigo-200">📝 21 min read • Sep 12, 2025 • AI Safety</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <p>
          Agentic systems interact with tools and external services, increasing risk. Red-teaming validates safety controls by
          simulating adversarial behaviors across prompts, tools, and environments.
        </p>

        <h2>Threat Model & Attack Taxonomy</h2>
        <ul>
          <li>Prompt injection and instruction hijacking</li>
          <li>Data exfiltration and sensitive action escalation</li>
          <li>Indirect input attacks via retrieved content or tools</li>
          <li>Speculative execution and tool misuse</li>
        </ul>

        <h2>Evaluation Harness</h2>
        <ul>
          <li>Scenario generators with coverage metrics</li>
          <li>Policy tests: deny lists, allow lists, purpose constraints</li>
          <li>Automated judgment models and human review workflows</li>
        </ul>

        <h2>Guardrails & Remediation</h2>
        <ul>
          <li>Policy-as-code with runtime enforcement and auditing</li>
          <li>Safety memory, tool capability scoping, and approvals</li>
          <li>Incident triage, root cause, and patch pipelines</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-indigo-50 border border-indigo-100">
          <h3 className="m-0">Next up</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg">Explore More Content</Link>
            <Link href="/blog/ai-2025-trust-safety-guardrails" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg">🛡️ Guardrails Patterns</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

