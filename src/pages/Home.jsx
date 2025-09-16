
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Zion Tech Group</h1>
          <p className="text-xl opacity-90">Autonomous solutions, shipped responsibly.</p>
        </div>

        <section className="grid md:grid-cols-2 gap-6">
          <a href="/pages/AIInnovationHub2026" className="block bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition">
            <h2 className="text-2xl font-semibold mb-2">AI Innovation Hub 2026</h2>
            <p className="opacity-90">Explore agentic systems, realtime collaboration, and cost-aware inference.</p>
          </a>

          <a href="/pages/ComprehensiveTechInsights2026" className="block bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition">
            <h2 className="text-2xl font-semibold mb-2">Comprehensive Tech Insights 2026</h2>
            <p className="opacity-90">A curated compendium across AI, cloud, security, and developer experience.</p>
          </a>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Latest from the Blog</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog/agentic-product-playbooks-2026" className="block bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/15 transition">
              <div className="text-sm text-white/70 mb-2">AI & Product</div>
              <div className="text-xl font-semibold">Agentic Product Playbooks 2026</div>
              <div className="text-white/80 mt-1">Design and ship agentic features safely.</div>
            </a>
            <a href="/blog/ai-automation-trends-2025" className="block bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/15 transition">
              <div className="text-sm text-white/70 mb-2">AI & Automation</div>
              <div className="text-xl font-semibold">AI Automation Trends 2025</div>
              <div className="text-white/80 mt-1">The future of autonomous systems.</div>
            </a>
            <a href="/blog/performance-optimization" className="block bg-white/10 rounded-xl p-5 border border-white/20 hover:bg-white/15 transition">
              <div className="text-sm text-white/70 mb-2">Engineering</div>
              <div className="text-xl font-semibold">Performance Optimization</div>
              <div className="text-white/80 mt-1">Practical wins for speed and scale.</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
