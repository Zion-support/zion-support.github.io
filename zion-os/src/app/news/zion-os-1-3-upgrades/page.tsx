export default function ZionOS13UpgradesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6">
            <a href="/news" className="text-white/60 hover:text-white">← Back to News</a>
          </div>
          <div className="h-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Zion OS 1.3: Faster Deploys, Smarter Analytics, Smoother UX</h1>
          <div className="text-white/60 mb-10">Sep 12, 2025 • Release Notes</div>

          <p className="text-lg text-white/80 mb-6">
            Today we are rolling out Zion OS 1.3 — a focused upgrade that makes deployments faster,
            analytics richer, and everyday UX smoother across the platform. This release is fully
            compatible with existing instances and requires no manual migration.
          </p>

          <div className="glass-effect rounded-2xl p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Up to 42% faster one‑click deployments with parallel provisioning</li>
              <li>New real‑time analytics overlay with actionable insights</li>
              <li>Smoother navigation, lighter bundle, and improved accessibility</li>
              <li>Admin quality‑of‑life improvements and clearer status reporting</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mb-3">Performance & Reliability</h3>
          <p className="text-white/80 mb-6">
            We reworked our orchestration pipeline to provision services in parallel, cutting cold‑start
            time and improving success rates under load. Retries are smarter and logs are easier to trace.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Real‑Time Analytics</h3>
          <p className="text-white/80 mb-6">
            A new analytics overlay surfaces KPIs directly in admin views, including conversion funnels,
            job/talent velocity, and marketplace liquidity. Export CSV and webhook triggers are available.
          </p>

          <h3 className="text-2xl font-semibold mb-3">UX & Accessibility</h3>
          <p className="text-white/80 mb-10">
            Animations are more subtle, contrast has been improved, and key flows are keyboard‑navigable.
            Bundle size dropped by ~8% thanks to dependency pruning and smarter code‑splitting.
          </p>

          <div className="rounded-xl border border-white/10 bg-zinc-900 p-6">
            <h3 className="text-2xl font-semibold mb-3">Get Started</h3>
            <p className="text-white/80 mb-6">New to Zion OS? Launch a fully‑featured instance in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/multiverse/launch" className="btn-primary">🚀 Launch Your Economy</a>
              <a href="/news" className="btn-secondary">📰 More News</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

