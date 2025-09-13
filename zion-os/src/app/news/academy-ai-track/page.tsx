export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Aug 28, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion Academy Adds AI Careers Track</h1>
          <p className="text-xl text-white/80 mb-8">
            Hands-on labs for RAG, agents, and ML ops, plus certifications recognized by hiring partners.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Hands-on Labs</h2>
            <p>
              Realistic projects aligned with industry needs, from retrieval-augmented generation to autonomous agents, deployment, and monitoring.
            </p>
            <h2>Career Support</h2>
            <p>
              Portfolio guidance, interview prep, and direct introductions to hiring partners in our ecosystem.
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

