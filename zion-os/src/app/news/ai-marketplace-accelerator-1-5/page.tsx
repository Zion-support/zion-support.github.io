export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion OS 1.5: AI Marketplace Accelerator</h1>
          <p className="text-xl text-white/80 mb-8">
            Introducing the AI Marketplace Accelerator: curated templates, instant seed data, and best‑practice workflows so teams can launch production marketplaces in hours.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Highlights</h2>
            <ul>
              <li>Industry templates for hiring, services, grants, and bounties</li>
              <li>One‑click sample data and analytics dashboards</li>
              <li>Prebuilt AI agents for proposal scoring and dispute triage</li>
              <li>Faster cold starts and smaller client bundles by default</li>
            </ul>
            <h2>Why it matters</h2>
            <p>
              Builders move from idea to fully operational marketplaces dramatically faster while keeping governance, compliance, and analytics first‑class.
            </p>
            <h2>Get started</h2>
            <p>
              Open the Launch Wizard and select the AI Marketplace Accelerator preset to provision your stack with best‑practice defaults.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <a href="/multiverse/launch" className="btn-primary">🚀 Launch Wizard</a>
            <a href="/news" className="btn-secondary">← Back to News</a>
          </div>
        </div>
      </section>
    </div>
  );
}

