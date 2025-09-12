export default function MarketplaceSuiteGA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Marketplace Suite GA: Jobs, Proposals, Escrow</h1>
          <div className="text-white/50 text-sm mb-10">Sep 11, 2025</div>
          <div className="prose prose-invert prose-zinc max-w-none">
            <p>
              Our complete marketplace stack is now Generally Available with production SLAs and hardened
              fraud protections. Launch end‑to‑end job, proposal, and escrow flows in minutes.
            </p>
            <h2>What’s Included</h2>
            <ul>
              <li>Jobs board with advanced search and regional categories</li>
              <li>Proposal management with AI scoring and reviewer workflows</li>
              <li>Milestone‑based escrow, audits, and dispute resolution</li>
              <li>Analytics dashboards and exportable audit logs</li>
            </ul>
            <h2>Getting Started</h2>
            <p>
              From the Launch Wizard, enable <strong>Marketplace Suite</strong>. Configure currencies and
              escrow policies, then import starter categories to go live.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

