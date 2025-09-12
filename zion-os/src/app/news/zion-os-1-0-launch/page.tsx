export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-6 text-white/60 text-sm">Sep 12, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion OS 1.0 Launches: One-Click Digital Economies</h1>
          <p className="text-xl text-white/80 mb-8">
            We are excited to announce the public launch of Zion OS 1.0, enabling one-click deployment of AI-powered digital economies.
          </p>
          <div className="prose prose-invert max-w-none">
            <h2>What’s in the 1.0 Release</h2>
            <ul>
              <li>ZionGPT Core integration for intelligent orchestration</li>
              <li>Turnkey marketplace, governance, and treasury modules</li>
              <li>Unified deployment protocol with regional scaling</li>
              <li>Secure identity with Web3 login and DID support</li>
            </ul>
            <h2>Why It Matters</h2>
            <p>
              With 1.0, teams can move from concept to a functioning digital economy in minutes. The stack
              includes landing pages, auth flows, blog/news, and analytics by default.
            </p>
            <h2>Get Started</h2>
            <p>
              Use the Launch Wizard to provision an instance, then customize via the Admin Panel and Services pages.
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

