export default function UpdateAiOrchestratorV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <a href="/updates" className="text-blue-400 hover:text-blue-300 text-sm">← Back to Updates</a>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">AI Orchestrator v2 Released</h1>
        <div className="text-zinc-400 mb-8">2025-09-12</div>
        <div className="prose prose-invert max-w-none">
          <p>We shipped a major upgrade to the AI Orchestrator to deliver faster, smarter, and more reliable automation across your economy.</p>
          <ul>
            <li>Adaptive scheduling reduces end-to-end latency by up to 38%.</li>
            <li>Observability: trace IDs across jobs, steps, and external calls.</li>
            <li>Policy engine for guardrails with human-in-the-loop review.</li>
            <li>Improved retry semantics and idempotent task execution.</li>
          </ul>
          <p>Enable v2 in Admin → Instances → Orchestrator Channel, or contact support for a guided rollout.</p>
        </div>
      </div>
    </div>
  );
}

