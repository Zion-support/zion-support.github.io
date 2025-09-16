export default function AgentRedTeamingFieldGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <p className="text-sm text-gray-500">Guide • 2025-09-15</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            AI 2026: Agent Red‑Teaming Field Guide
          </h1>
          <p className="mt-3 text-gray-600">
            Practical, evaluation‑driven techniques to proactively uncover failure modes in autonomous
            agents. Includes checklists, attack taxonomies, and evidence capture patterns.
          </p>
        </header>

        <section className="prose prose-gray max-w-none">
          <h2>Why red‑team agents?</h2>
          <p>
            Autonomous agents interact with tools, data, and users in dynamic environments. Red‑teaming
            exposes risky behaviors early and converts them into guardrails, tests, and rollout gates.
          </p>

          <h3>Core principles</h3>
          <ul>
            <li>Ground threats in realistic tasks and production‑like contexts.</li>
            <li>Use objective rubrics and automated scoring, not ad‑hoc judgments.</li>
            <li>Instrument traces, policy checks, and evidence capture for every scenario.</li>
            <li>Close the loop: convert findings into canary evals and CI/CD gates.</li>
          </ul>

          <h3>Attack taxonomy</h3>
          <ul>
            <li>Prompt manipulation and instruction override</li>
            <li>Tool abuse, permission escalation, and unsafe side‑effects</li>
            <li>Retrieval poisoning and groundedness failures</li>
            <li>Data leakage, PII exposure, and compliance violations</li>
          </ul>

          <h3>Operational workflow</h3>
          <ol>
            <li>Define policy‑as‑code for prohibited actions and sensitive scopes.</li>
            <li>Create scenario suites with inputs, expected outcomes, and fail criteria.</li>
            <li>Run offline suites, then promote high‑value tests to live canaries.</li>
            <li>Wire abort switches and auto‑rollback into progressive delivery.</li>
          </ol>

          <h3>Evidence bundles</h3>
          <p>
            Bundle traces, policy decisions, eval scores, and artifacts into signed evidence for audits and
            reviews. This enables rapid approvals and continuous compliance.
          </p>

          <h3>Checklist</h3>
          <ul>
            <li>Risk tier assigned and permissions least‑privilege</li>
            <li>Guardrail policies mapped to scenarios</li>
            <li>Golden datasets and rubrics versioned</li>
            <li>Live canaries and rollback rules enabled</li>
          </ul>

          <p className="mt-8">
            Ready to operationalize red‑teaming? Explore our{' '}
            <a href="/updates/agent-safety-toolkit-v1" className="text-purple-700 font-semibold">
              Agent Safety Toolkit
            </a>{' '}and the{' '}
            <a href="/updates/production-guardrails-multimodal-agents" className="text-purple-700 font-semibold">
              Production Guardrails Guide
            </a>.
          </p>
        </section>
      </article>
    </div>
  )
}

