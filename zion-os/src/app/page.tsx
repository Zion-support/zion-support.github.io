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
              <span className="gradient-text">Launch Sovereign</span>
              <br />
              <span className="text-white">Digital Economies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              One-click deployment of complete AI-powered digital economies with marketplace, 
              governance, identity, and token systems. Built for scale, designed for sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/multiverse/launch" className="btn-primary text-lg px-8 py-4">
                Launch Your Economy
              </a>
              <a href="/docs" className="btn-secondary text-lg px-8 py-4">
                View Documentation
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">What's New</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">ZionGPT 2.0, Multi-region Blue/Green, Continuous ASM</h3>
              <p className="text-white/70">Catch up on our latest AI, DevOps, and Security updates rolling out this quarter.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/blog/agent-safety-red-teaming-2025" className="btn-primary hover-lift text-sm px-6 py-3">
                📰 New: Agent Safety Red Teaming 2025
              </a>
              <a href="/blog/ai-foundation-models-2025" className="btn-secondary hover-lift text-sm px-6 py-3">
                ✅ Read: Foundation Models 2025
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete toolkit for launching and managing sovereign digital economies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.gradient} group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-400">Stay ahead with our latest research and case studies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'agent-safety-red-teaming-2025', title: 'Agent Safety Red Teaming 2025: Practical Playbooks for AI Systems' },
              { id: 'ai-foundation-models-2025', title: 'Foundation Models in 2025: Practical Enterprise Patterns That Work' },
              { id: 'edge-ai-on-device-inference', title: 'Edge AI: On-Device Inference for Privacy and Speed' },
              { id: 'autonomous-agents-in-enterprise', title: 'Autonomous Agents in the Enterprise: Patterns and Pitfalls' },
              { id: 'post-quantum-cryptography-roadmap', title: 'Post-Quantum Cryptography: A Practical Migration Roadmap' },
              { id: 'llm-evals-in-production', title: 'LLM Evals in Production: From Offline Benchmarks to Live Metrics' }
            ].map((post) => (
              <a key={post.id} href={`/blog/${post.id}`} className="glass-effect rounded-xl p-6 hover-lift block">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
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