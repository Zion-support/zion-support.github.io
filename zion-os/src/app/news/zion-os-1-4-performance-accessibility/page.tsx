export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion OS 1.4: Faster, Leaner, and More Accessible</h1>
          <p className="text-xl text-white/80 mb-8">
            The 1.4 release delivers major performance boosts, accessibility upgrades, and UX polish across the platform.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>What’s New</h2>
            <ul>
              <li>Cold start times improved by up to 42% with route-level optimizations</li>
              <li>Bundle size reductions averaging 18% via code-splitting and tree-shaking</li>
              <li>WCAG 2.2 improvements: focus states, color contrast, and ARIA labels</li>
              <li>News and landing experiences refined with clearer hierarchy and motion</li>
            </ul>
            <h2>Developer Experience</h2>
            <p>
              We streamlined local development and added guardrails in CI for accessibility and performance.
              Teams get faster feedback loops and higher quality baselines by default.
            </p>
            <h2>Upgrading</h2>
            <p>
              Existing deployments upgrade automatically through the orchestrator. Review the release notes and
              run a validation pass from the Admin Dashboard to confirm.
            </p>
          </div>
          <div className="mt-10">
            <a href="/news" className="btn-secondary">← Back to News</a>
          </div>
        </div>
      </section>
    </div>
  );
}

