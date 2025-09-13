export default function SovereignAISecurityBasics() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-red-600 to-rose-600 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">Sovereign AI Security Basics</h1>
          <p className="text-rose-100 text-lg">
            Threat models, secrets handling, and guardrails every AI deployment should implement.
          </p>
        </div>
      </header>

      <article className="prose prose-invert max-w-3xl mx-auto px-6 py-12">
        <h2>Foundation</h2>
        <ul>
          <li>Isolate runtime credentials; rotate keys and use short‑lived tokens.</li>
          <li>Constrain tool scopes with least privilege and audited access.</li>
          <li>Apply input/output filtering for PII, secrets, and policy violations.</li>
        </ul>

        <h2>Detection & Response</h2>
        <ul>
          <li>Instrument prompts, tool calls, and model responses with trace IDs.</li>
          <li>Alert on anomaly patterns: prompt injection, data exfiltration, cost spikes.</li>
          <li>Establish kill switches and safe fallbacks.</li>
        </ul>

        <p>
          Zion OS ships hardened defaults and policy tooling to operationalize these controls across
          your stack.
        </p>
      </article>
    </div>
  );
}

