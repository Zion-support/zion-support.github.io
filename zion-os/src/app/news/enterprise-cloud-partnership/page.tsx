export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 05, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partnership: Zion Tech Group x Enterprise Cloud</h1>
          <p className="text-xl text-white/80 mb-8">
            New hybrid-cloud reference architecture reduces infra costs by 32% while boosting reliability.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Hybrid by Design</h2>
            <p>
              Our jointly-validated architecture supports on-prem and multi-cloud workloads, with secure service-mesh
              connectivity and unified policy management.
            </p>
            <h2>Operational Benefits</h2>
            <ul>
              <li>32% average infrastructure cost reduction across pilot customers</li>
              <li>Improved latency via regional edge deployments</li>
              <li>Centralized observability with actionable SLOs</li>
            </ul>
            <h2>Availability</h2>
            <p>
              The reference implementation is available to enterprise partners today with onboarding support.
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

