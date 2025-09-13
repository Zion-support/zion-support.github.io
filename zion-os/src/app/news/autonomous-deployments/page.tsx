export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion OS v1.2 Launches Autonomous Deployments</h1>
          <p className="text-xl text-white/80 mb-8">
            One-click orchestration now provisions full AI marketplaces, governance, and analytics out of the box.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Autonomous Provisioning</h2>
            <p>
              The new deployment engine sets up modules, routing, content stubs, SEO, and monitoring automatically, 
              reducing setup time from hours to minutes.
            </p>
            <h2>Observability Included</h2>
            <p>
              Built-in analytics and health checks ensure launches are smooth and measurable from day one.
            </p>
            <h2>Next Steps</h2>
            <p>
              Visit the Launch Wizard to spin up a trial instance and explore the Admin dashboards to customize.
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

