export default function MarketplaceSuiteGAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block rounded-full px-4 py-1 text-sm bg-emerald-600/20 text-emerald-300 mb-4">
            GA Release
          </div>
          <h1 className="text-5xl font-bold mb-4">Marketplace Suite: Jobs, Proposals, Escrow Go GA</h1>
          <p className="text-white/70">Sep 11, 2025</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert">
          <p>
            Our complete marketplace stackincluding Jobs, Proposals, Milestones, and Escrowis now
            Generally Available with SLAs, audit logs, and fraud protections.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Job boards with role templates and wage baselines</li>
            <li>Proposal scoring with AI-assisted reviews</li>
            <li>Milestone contracts and on-chain escrow support</li>
            <li>Audit logs, rate limiting, and abuse detection</li>
          </ul>
          <h2>Who benefits</h2>
          <p>
            Regional economies, enterprise marketplaces, and incubators can launch faster with production-ready
            workflows and compliance features built in.
          </p>
        </div>
      </section>
    </div>
  );
}

