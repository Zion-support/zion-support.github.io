import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Promo Ribbon */}
      <section className="py-3 px-4 sm:px-6 lg:px-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <a href="/blog/autonomous-it-ops-2025" className="flex items-center justify-between gap-3 text-blue-900">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white text-sm font-bold">AO</span>
              <p className="text-sm md:text-base">
                New: Autonomous IT Operations in 2025 — self-healing, policy-driven, AI-orchestrated ops. <span className="underline">Read more</span>
              </p>
            </div>
            <span className="hidden md:block text-blue-700">→</span>
          </a>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="hero-gradient absolute inset-0 -z-10"></div>
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Launch Sovereign</span>
              <br />
              <span className="text-white">AI-Powered Digital Economies</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Deploy complete AI-powered marketplaces, governance systems, and digital economies with one click.
              Built for the future of decentralized business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/multiverse/launch" className="btn-primary hover-lift">🚀 Launch Your Economy</a>
              <a href="/admin/instances" className="btn-secondary hover-lift">📊 View Instances</a>
              <a href="/news" className="btn-secondary hover-lift">📰 See what's new in 2025</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Promo CTA */}
      <section className="py-6 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/blog/agentic-supply-chains-2025" className="block bg-white rounded-xl border border-blue-200 p-5 shadow-sm hover:shadow-md transition-shadow" aria-label="Read Agentic Supply Chains 2025">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">AS</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">AI Solutions</span>
                    <span className="text-xs text-gray-500">New</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Agentic Supply Chains 2025</h3>
                  <p className="text-gray-600 text-sm">Self-orchestrating logistics with AI agents and measurable SLAs.</p>
                </div>
                <div className="text-blue-600 font-medium whitespace-nowrap">Read →</div>
              </div>
            </a>
            <a href="/blog/agentic-safety-patterns-2025" className="block bg-white rounded-xl border border-blue-200 p-5 shadow-sm hover:shadow-md transition-shadow" aria-label="Read Agentic Safety Patterns 2025">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center text-xl font-bold">SP</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">AI Safety</span>
                    <span className="text-xs text-gray-500">Featured</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Agentic Safety Patterns 2025</h3>
                  <p className="text-gray-600 text-sm">Guardrails and governance patterns for autonomous systems.</p>
                </div>
                <div className="text-blue-600 font-medium whitespace-nowrap">Read →</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join the revolution in decentralized business. Launch your sovereign AI-powered digital economy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <a href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Start Building Now
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <a href="/blog/agentic-supply-chains-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Agentic Supply Chains 2025
=======
              <a href="/blog/enterprise-agent-safety-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Enterprise Agent Safety 2025
>>>>>>> cursor/create-and-deploy-new-content-1633
=======
              <a href="/blog/agentic-safety-patterns-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Agentic Safety Patterns 2025
=======
              <a href="/blog/agent-safety-guardrails-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Agent Safety Guardrails 2025
>>>>>>> cursor/create-and-deploy-new-content-4789
=======
              <a href="/blog/agentic-supply-chains-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Agentic Supply Chains 2025
>>>>>>> 2445d7df832b351361c2d9a20e071d592355fcda
>>>>>>> 7628bd3f9c6fdd87749ce79d345f9b0dcea6b009
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-white/70">Features Available</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white/70">Deployment Options</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-white/70">AI Orchestration</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-white/70">Scalability</div>
=======
              <a href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">🚀 Start Building Now</a>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">📊 Explore Examples</a>
              <a href="/blog" className="btn-secondary hover-lift text-lg px-8 py-4">📰 Read our Blog</a>
>>>>>>> 9b7a0522611c (feat(blog): add new articles, resolve conflicts; feat(www): promote new content on homepage)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

