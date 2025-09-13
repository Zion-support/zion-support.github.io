export default function AgentsRagRelease() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Zion OS 1.3: Agent Workflows and RAG Built‑In</h1>
          <div className="text-white/50 text-sm mb-10">Sep 12, 2025</div>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p>
              Zion OS 1.3 introduces autonomous agent workflows, first‑class retrieval augmented
              generation (RAG), and expanded analytics dashboards. Teams can now orchestrate multi‑step
              automations across marketplaces, governance, and support with minimal configuration.
            </p>
            <h2>What’s New</h2>
            <ul>
              <li>Visual agent workflow builder with triggers and actions</li>
              <li>Built‑in vector search and RAG for knowledge retrieval</li>
              <li>Observability: run history, metrics, and failure inspection</li>
              <li>Guardrails and approvals for high‑impact operations</li>
            </ul>
            <h2>Getting Started</h2>
            <p>
              Open the Launch Wizard and enable Agent Workflows. Add a knowledge base to activate RAG, then
              create your first automation from the templates gallery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

