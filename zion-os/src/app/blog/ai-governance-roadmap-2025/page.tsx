export default function AIGovernanceRoadmap2025() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">AI Governance Roadmap 2025</h1>
          <p className="text-blue-100 text-lg">
            Practical steps to implement safe, auditable, and sovereign AI in production.
          </p>
        </div>
      </header>

      <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
        <p>
          As organizations scale AI across products and operations, governance becomes a primary
          differentiator. This roadmap focuses on four pillars: policy, oversight, telemetry, and
          controls.
        </p>

        <h2>1. Define Operating Policies</h2>
        <ul>
          <li>System prompts and model access policies by environment.</li>
          <li>Data handling, retention windows, and redaction defaults.</li>
          <li>Incident response runbooks for model regressions.</li>
        </ul>

        <h2>2. Establish Independent Oversight</h2>
        <ul>
          <li>Human-in-the-loop approvals for sensitive actions.</li>
          <li>Rubrics for fairness, safety, and abuse prevention.</li>
          <li>Periodic audits of prompts, outputs, and usage.</li>
        </ul>

        <h2>3. Instrument Telemetry</h2>
        <ul>
          <li>Structured logs: inputs, outputs, latencies, and tool calls.</li>
          <li>Red-team scenarios tracked as synthetic monitors.</li>
          <li>SLIs/SLOs for response quality and safety triggers.</li>
        </ul>

        <h2>4. Implement Technical Controls</h2>
        <ul>
          <li>Role-based tools with fine-grained capability scopes.</li>
          <li>Guardrails for PII, secrets, and transaction thresholds.</li>
          <li>Kill switches and graceful degradation paths.</li>
        </ul>

        <h2>Templates Included in Zion OS</h2>
        <p>
          Zion OS ships with audit-ready logging, policy scaffolds, and admin panels to review
          conversations and actions. Enable governance quickly while preserving developer velocity.
        </p>

        <p className="mt-8">
          Ready to operationalize AI governance? Explore our <a className="underline" href="/services">services</a>
          or <a className="underline" href="/contact">contact us</a> to get help implementing this roadmap.
        </p>
      </article>
    </div>
  );
}

