export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 10, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion Academy Opens: Learn, Build, Launch</h1>
          <p className="text-xl text-white/80 mb-8">
            Introducing Zion Academy with hands-on courses covering AI, Web3, marketplaces, and governance—designed to help you launch faster.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>Curriculum Highlights</h2>
            <ul>
              <li>AI foundations, agents, and RAG systems</li>
              <li>Web3 primitives, wallets, and governance</li>
              <li>Marketplace design and incentive mechanics</li>
              <li>DevOps, monitoring, and scaling</li>
            </ul>
            <h2>Who It’s For</h2>
            <p>
              Builders, founders, and teams looking to ship faster with a clear, practical path from idea to launch.
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

