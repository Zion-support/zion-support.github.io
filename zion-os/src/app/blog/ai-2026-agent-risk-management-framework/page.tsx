import React from 'react';

export const metadata = {
  title: 'AI 2026: Agent Risk Management Framework',
  description:
    'Framework for assessing and mitigating risks of autonomous agents: threat models, safeguards, and governance.',
};

export default function AgentRiskManagementFrameworkPage() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto py-12 px-4">
      <h1>AI 2026: Agent Risk Management Framework</h1>
      <p>
        This framework provides a practical approach to identifying, evaluating, and mitigating
        risks in autonomous agent systems. It emphasizes defense-in-depth and continuous
        verification.
      </p>

      <h2>Risk Categories</h2>
      <ul>
        <li>Safety: harmful actions, escalation, and specification gaming</li>
        <li>Security: data exfiltration, prompt injection, supply chain attacks</li>
        <li>Compliance: privacy, ownership, and regulatory obligations</li>
        <li>Operational: reliability, drift, and cost runaways</li>
      </ul>

      <h2>Controls</h2>
      <ul>
        <li>Policy-as-code with allow/deny/gate actions</li>
        <li>Sandboxing and capability scoping</li>
        <li>Red-team scenarios and evaluation harnesses</li>
        <li>Runtime monitoring with rollback and circuit breakers</li>
      </ul>

      <h2>Implementation Steps</h2>
      <ol>
        <li>Map agents, capabilities, and data access</li>
        <li>Define risk tiers and required controls</li>
        <li>Automate pre-deploy and runtime evaluations</li>
        <li>Continuously improve with incidents and near-misses</li>
      </ol>
    </div>
  );
}

