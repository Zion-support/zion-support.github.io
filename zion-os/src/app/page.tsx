// @ts-nocheck
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import FeatureCard from './components/FeatureCard';
=======
>>>>>>> origin/feature/new-blog-content-and-promo

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
<<<<<<< HEAD
              <Link href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </Link>
              <Link href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
<<<<<<< HEAD
              </Link>
=======
              <a href="/multiverse/launch" className="btn-primary hover-lift">🚀 Launch Your Economy</a>
              <a href="/admin/instances" className="btn-secondary hover-lift">📊 View Instances</a>
              <a href="/news" className="btn-secondary hover-lift">📰 See what's new in 2025</a>
>>>>>>> origin/feature/new-blog-content-and-promo
=======
              </a>
              <a href="/news" className="btn-secondary hover-lift">
                📰 See what's new in 2025
              </a>
              <a href="/blog/ai-safety-governance-blueprint-2025" className="btn-secondary hover-lift">
                ✅ New: AI Safety & Governance 2025
              </a>
>>>>>>> origin/feature/blog-content-2025
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Latest Blog Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="gradient-text">AI Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our latest research and insights on AI, autonomous systems, and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/agentic-safety-patterns-2025" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-blue-400 text-sm font-semibold mb-2">Latest Research</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  Agentic Safety Patterns 2025
                </h3>
                <p className="text-gray-300 mb-4">
                  Explore the latest safety patterns and best practices for deploying autonomous AI agents in production environments.
                </p>
                <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300">
                  Read More →
                </div>
              </div>
            </Link>

            <Link href="/blog/multi-agent-supply-chains" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-purple-400 text-sm font-semibold mb-2">Supply Chain Innovation</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Multi-Agent Supply Chains
                </h3>
                <p className="text-gray-300 mb-4">
                  Discover how AI agents are revolutionizing supply chain management with autonomous coordination and optimization.
                </p>
                <div className="text-purple-400 text-sm font-medium group-hover:text-purple-300">
                  Read More →
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-governance-blueprint-2025" className="group">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 group-hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-green-400 text-sm font-semibold mb-2">Governance Framework</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  AI Governance Blueprint 2025
                </h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive guide to implementing ethical AI governance frameworks for enterprise deployment.
                </p>
                <div className="text-green-400 text-sm font-medium group-hover:text-green-300">
                  Read More →
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary text-lg px-8 py-4">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Build the Future
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit 
              for launching sovereign digital economies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                gradient={feature.gradient}
              />
            ))}
=======
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
>>>>>>> origin/feature/new-blog-content-and-promo
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join the revolution in decentralized business. Launch your sovereign AI-powered digital economy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <Link href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Start Building Now
              </Link>
              <Link href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
<<<<<<< HEAD
              </Link>
=======
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <a href="/blog/ai-governance-operating-systems" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: AI Governance Operating Systems
=======
              <a href="/blog/quantum-risk-modeling-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: AI Governance Blueprint 2025
>>>>>>> origin/feature/new-content-2025-09-15
=======
              <a href="/blog/ai-governance-blueprint-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: AI Governance Blueprint 2025
>>>>>>> origin/feature/new-content-2025
=======
              <a href="/blog/edge-ai-compliance-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Edge AI Compliance 2025
>>>>>>> origin/feature/content-sept15-2025
=======
              <a href="/blog/ai-agent-safety-playbook-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: AI Agent Safety Playbook 2025
>>>>>>> origin/feature/add-ai-agent-safety-post
              </a>
>>>>>>> origin/feature/new-content-promotion
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
>>>>>>> origin/feature/new-blog-content-and-promo
            </div>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest from the Blog</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Fresh insights from our team across AI, data, and quantum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'edge-ai-on-device-inference', title: 'Edge AI: On-Device Inference for Privacy and Speed' },
              { id: 'autonomous-agents-in-enterprise', title: 'Autonomous Agents in the Enterprise: Patterns and Pitfalls' },
              { id: 'post-quantum-cryptography-roadmap', title: 'Post-Quantum Cryptography: A Practical Migration Roadmap' },
              { id: 'llm-evals-in-production', title: 'LLM Evals in Production: From Offline Benchmarks to Live Metrics' }
            ].map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="glass-effect rounded-xl p-6 hover-lift block">
                <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{post.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className="text-sm text-white/70">Read more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary hover-lift">View all articles</Link>
          </div>
        </div>
      </section>
    </div>
  );
}