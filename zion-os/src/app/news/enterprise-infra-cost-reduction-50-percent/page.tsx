export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Story: 50% Infra Cost Reduction</h1>
          <p className="text-xl text-white/80 mb-8">
            How a global enterprise cut infrastructure spend by 50% while improving reliability using Zion OS orchestration and analytics.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Key Results</h2>
            <ul>
              <li>50% cost reduction through right‑sizing and auto‑suspend policies</li>
              <li>32% performance improvement with workload placement and caching</li>
              <li>99.95% uptime via multi‑region failover and health orchestration</li>
            </ul>
            <h2>What They Used</h2>
            <p>
              Autonomous deploy pipelines, observability guardrails, and policy‑based scaling delivered measurable savings without service risk.
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

