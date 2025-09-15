// @ts-nocheck
import React from 'react';
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Zion OS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Launch sovereign AI-powered digital economies with one click. 
              Unified deployment protocol for Zion ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Launch Your Economy
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 View Examples
              </a>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f4f03d913802721228f65aaef3835c32d10a39b3
      {/* Promo Banner - New Articles */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto grid gap-4 md:grid-cols-2">
          <a
            href="/blog/agent-safety-red-teaming-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: Agent Safety Red Teaming 2025: Practical Playbooks for AI Systems"
          >
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 627246f4d0776175de27a395be76886274bd0c6a
>>>>>>> f4f03d913802721228f65aaef3835c32d10a39b3
=======
>>>>>>> cursor/create-and-deploy-new-content-1afe
      {/* What's New Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">What's New</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Updates</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Fresh content, announcements, and courses from Zion Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Agent Safety Red Teaming 2025',
                summary: 'Practical playbooks to probe, stress, and harden multi‑agent systems.',
                href: '/blog/agent-safety-red-teaming-2025'
              },
              {
                title: 'AI Automation Case Studies 2025',
                summary: 'Five deployments with measurable KPIs from MTTR to margin uplift.',
                href: '/blog/ai-automation-case-studies-2025'
              },
              {
                title: 'Quantum Risk Modeling 2025',
                summary: 'Pragmatic quantum and hybrid methods improving risk analytics today.',
                href: '/blog/quantum-risk-modeling-2025'
              }
            ].map((item) => (
              <article key={item.title} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    {item.title}
                  </a>
                </h3>
                <p className="text-white/70 text-sm mb-4">{item.summary}</p>
                <a href={item.href} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Read more →
                </a>
              </article>
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
            <div className="mb-8">
              <p className="text-lg text-blue-300 mb-4">📚 Latest: AI Governance Blueprint 2025</p>
              <a href="/blog/ai-governance-blueprint-2025" className="text-blue-400 hover:text-blue-300 underline">
                Read our comprehensive guide to dual-layer policy for safe autonomy →
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Start Building Now
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
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
              <div className="text-white/70">Active Economies</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-pink-400 mb-2">10K+</div>
              <div className="text-white/70">Users</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-white/70">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
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
              <a key={post.id} href={`/blog/${post.id}`} className="glass-effect rounded-xl p-6 hover-lift block">
                <div className="h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{post.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className="text-sm text-white/70">Read more →</span>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/blog" className="btn-secondary hover-lift">View all articles</a>
          </div>
        </div>
      </section>
    </div>
  );
}
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
      {/* Promo: Latest Article */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto">
          <a href="/blog/sovereign-ai-commerce-2025" className="block w-full bg-white rounded-xl border border-blue-200 p-4 shadow-sm hover:shadow-md transition-shadow" aria-label="Read: Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025">
<<<<<<< HEAD
>>>>>>> 627246f4d0776175de27a395be76886274bd0c6a
=======
>>>>>>> e5909d8836f03f51792b2f98b2871ccc046d0c25
>>>>>>> f4f03d913802721228f65aaef3835c32d10a39b3
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">AR</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">AI Safety</span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <p className="text-gray-900 font-medium">Agent Safety Red Teaming 2025: Practical Playbooks for AI Systems</p>
              </div>
              <div className="text-blue-600 font-medium whitespace-nowrap">Read →</div>
            </div>
          </a>
          <a
            href="/blog/sovereign-ai-commerce-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center text-xl font-bold">SC</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">AI Solutions</span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <p className="text-gray-900 font-medium">Sovereign AI Commerce: Launching Fully Autonomous Marketplaces in 2025</p>
              </div>
              <div className="text-purple-600 font-medium whitespace-nowrap">Read →</div>
            </div>
          </a>
        </div>
      </section>
<<<<<<< HEAD
=======
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
              <a href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
              </a>
              <a href="/blog/agent-safety-red-teaming-2025" className="btn-secondary hover-lift">
                📰 New: Agent Safety Red Teaming 2025
              </a>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 627246f4d0776175de27a395be76886274bd0c6a

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Build the Future
            </h2>
=======
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
>>>>>>> cursor/create-and-deploy-new-content-1afe
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Complete infrastructure for launching and managing digital economies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
              <a href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Start Building Now
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 627246f4d0776175de27a395be76886274bd0c6a
>>>>>>> f4f03d913802721228f65aaef3835c32d10a39b3
              <a href="/blog/ai-foundation-models-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Foundation Models 2025
              </a>
              <a href="/blog/agent-safety-evaluation-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                ✅ Read: Agent Safety Evaluation 2025
              </a>
<<<<<<< HEAD
>>>>>>> 627246f4d0776175de27a395be76886274bd0c6a
=======
>>>>>>> e5909d8836f03f51792b2f98b2871ccc046d0c25
>>>>>>> f4f03d913802721228f65aaef3835c32d10a39b3
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

=======
>>>>>>> cursor/create-and-deploy-new-content-1afe
      {/* Latest from the Blog */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest from the Blog</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Zion ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Foundation Models in 2025: Practical Enterprise Patterns',
                excerpt: 'Battle-tested patterns for adapting, evaluating, and governing foundation models across core enterprise workflows.',
                author: 'Dr. David Kim',
                date: '2025-09-15',
                readTime: '9 min read',
                href: '/blog/ai-foundation-models-2025'
              },
              {
                title: 'Quantum Risk Modeling: Practical Impacts on Financial Services',
                excerpt: 'Near-term quantum and hybrid methods that boost risk analytics and portfolio construction.',
                author: 'Dr. Sarah Chen',
                date: '2025-09-10',
                readTime: '10 min read',
                href: '/blog/quantum-risk-modeling-2025'
              },
              {
                title: 'Sovereign AI Commerce: Launching Fully Autonomous Marketplaces',
                excerpt: 'We unveil our blueprint for self-orchestrating, sovereign AI marketplaces with built‑in governance, identity, and commerce rails.',
                author: 'Dr. Kleber Santos',
                date: '2025-09-15',
                readTime: '9 min read',
                href: '/blog/sovereign-ai-commerce-2025'
              }
            ].map((post, index) => (
              <article key={index} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2 text-xs text-blue-300 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">AI Solutions</span>
                  <time dateTime={post.date} className="text-gray-400">{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  <a href={post.href} className="hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </a>
                </h3>
                <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <a href={post.href} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/blog" className="btn-secondary hover-lift">View all articles</a>
          </div>
        </div>
      </section>
    </div>
  );
}