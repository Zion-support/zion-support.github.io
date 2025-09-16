// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import FeatureCard from './components/FeatureCard';

export default function HomePage() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.",
      features: [
        "ZionGPT Core Integration",
        "Resume Builder + Proposal AI",
        "Autonomous Decision Engine",
        "AI Moderation System"
      ],
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      icon: "🏪",
      title: "Complete Marketplace",
      description: "Jobs, talent, projects, and token systems create a thriving digital economy ecosystem.",
      features: [
        "Job & Talent Marketplace",
        "Token System + Rewards",
        "On-chain Contract Builder",
        "Multi-currency Support"
      ],
      gradient: "bg-gradient-to-r from-green-600 to-emerald-600"
    },
    {
      icon: "🗳️",
      title: "Governance & DAO",
      description: "Flexible governance from admin control to full DAO systems with dual governance options.",
      features: [
        "DAO Proposal Voting",
        "Dual Governance (Local + Global)",
        "Sovereign Treasury",
        "KYC/AML + ID Verification"
      ],
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      icon: "⚡",
      title: "Enterprise Infrastructure",
      description: "Built for scale with regional dashboards, partner APIs, and white-label solutions.",
      features: [
        "Regional Dashboards",
        "Partner API Access",
        "White-label Vendor Plugin",
        "Web3 Login + DID"
      ],
      gradient: "bg-gradient-to-r from-orange-600 to-red-600"
    },
    {
      icon: "🎓",
      title: "Education & Growth",
      description: "Zion Academy, incubator programs, and grants foster innovation and community growth.",
      features: [
        "Zion Academy",
        "Incubator + Grants",
        "Regional Job Categories",
        "Wage Baselines"
      ],
      gradient: "bg-gradient-to-r from-teal-600 to-cyan-600"
    },
    {
      icon: "🚀",
      title: "One-Click Deployment",
      description: "Launch your complete digital economy in minutes with our unified deployment protocol.",
      features: [
        "Automated Orchestration",
        "CMS Instance Generation",
        "Landing + Auth Flows",
        "Blog + Roadmap Setup"
      ],
      gradient: "bg-gradient-to-r from-indigo-600 to-blue-600"
    }
  ];

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
              <Link href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </Link>
              <Link href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <Link href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Start Building Now
              </Link>
              <Link href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
<<<<<<< HEAD
              </Link>
=======
              </a>
              <a href="/blog/ai-governance-operating-systems" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: AI Governance Operating Systems
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