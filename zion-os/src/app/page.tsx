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
              <a href="/news" className="btn-secondary hover-lift">
                📰 See what's new in 2025
              </a>
            </div>
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
<<<<<<< HEAD
=======
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
              <a href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
              </a>
            </div>
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
<<<<<<< HEAD
import FeatureCard from './components/FeatureCard'
export default function HomePage() {

  const features = [;
    {;
      icon: &quot;🤖&quot;,
      title: &quot;AI-Powered Intelligence&quot;,
      description: &quot;ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.&quot;,
  const features = [
    {
      icon: &quot;🤖&quot;
      title: &quot;AI-Powered Intelligence&quot;
      description: &quot;ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.&quot;
      features: [
        &quot;ZionGPT Core Integration&quot;
        &quot;Resume Builder + Proposal AI&quot;
        &quot;Autonomous Decision Engine&quot;
        &quot;AI Moderation System&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-blue-600 to-purple-600&quot;
    }
    {
      icon: &quot;🏪&quot;
      title: &quot;Complete Marketplace&quot;
      description: &quot;Jobs, talent, projects, and token systems create a thriving digital economy ecosystem.&quot;
      features: [
        &quot;Job & Talent Marketplace&quot;
        &quot;Token System + Rewards&quot;
        &quot;On-chain Contract Builder&quot;
        &quot;Multi-currency Support&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-green-600 to-emerald-600&quot;
    }
    {
      icon: &quot;🗳️&quot;
      title: &quot;Governance & DAO&quot;
      description: &quot;Flexible governance from admin control to full DAO systems with dual governance options.&quot;
      features: [
        &quot;DAO Proposal Voting&quot;
        &quot;Dual Governance (Local + Global)&quot;
        &quot;Sovereign Treasury&quot;
        &quot;KYC/AML + ID Verification&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-purple-600 to-pink-600&quot;
    }
    {
      icon: &quot;⚡&quot;
      title: &quot;Enterprise Infrastructure&quot;
      description: &quot;Built for scale with regional dashboards, partner APIs, and white-label solutions.&quot;
      features: [
        &quot;Regional Dashboards&quot;
        &quot;Partner API Access&quot;
        &quot;White-label Vendor Plugin&quot;
        &quot;Web3 Login + DID&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-orange-600 to-red-600&quot;
    }
    {
      icon: &quot;🎓&quot;
      title: &quot;Education & Growth&quot;
      description: &quot;Zion Academy, incubator programs, and grants foster innovation and community growth.&quot;
      features: [
        &quot;Zion Academy&quot;
        &quot;Incubator + Grants&quot;
        &quot;Regional Job Categories&quot;
        &quot;Wage Baselines&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-teal-600 to-cyan-600&quot;
    }
    {
      icon: &quot;🚀&quot;
      title: &quot;One-Click Deployment&quot;
      description: &quot;Launch your complete digital economy in minutes with our unified deployment protocol.&quot;
      features: [
        &quot;Automated Orchestration&quot;
        &quot;CMS Instance Generation&quot;
        &quot;Landing + Auth Flows&quot;
        &quot;Blog + Roadmap Setup&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-indigo-600 to-blue-600&quot;
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
  ]

import FeatureCard from './components / FeatureCard',
export default /**
 * HomePage - Function description
 */
function HomePage() {
  const features = [;
    {
      icon: &quot;🤖&quot;,
      title: &quot;AI - Powered Intelligence & quot;,
      description: &quot;ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting - edge intelligence.&quot;,
      features: [;
        &quot;ZionGPT Core Integration & quot;,
        &quot;Resume Builder + Proposal AI & quot;,
        &quot;Autonomous Decision Engine & quot;,
        &quot;AI Moderation System & quot;
      ],
      gradient: &quot;bg - gradient - to - r from - blue - 600 to - purple - 600 & quot;
    },
import FeatureCard from './components/FeatureCard'
export default function HomePage() {
  const features = [
    {
      icon: &quot;&quot;
      title: &quot;AI-Powered Intelligence&quot;
      description: &quot;ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.&quot;
      features: [
        &quot;ZionGPT Core Integration&quot;
        &quot;Resume Builder + Proposal AI&quot;
        &quot;Autonomous Decision Engine&quot;
        &quot;AI Moderation System&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-blue-600 to-purple-600&quot;
    }
    {
      icon: &quot;&quot;
      title: &quot;Enterprise Infrastructure&quot;
      description: &quot;Built for scale with regional dashboards, partner APIs, and white-label solutions.&quot;
      features: [
        &quot;Regional Dashboards&quot;
        &quot;Partner API Access&quot;
        &quot;White-label Vendor Plugin&quot;
        &quot;Web3 Login + DID&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-orange-600 to-red-600&quot;
    }
    {
      icon: &quot;&quot;
      title: &quot;Education & Growth&quot;
      description: &quot;Zion Academy, incubator programs, and grants foster innovation and community growth.&quot;
      features: [
        &quot;Zion Academy&quot;
        &quot;Incubator + Grants&quot;
        &quot;Regional Job Categories&quot;
        &quot;Wage Baselines&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-teal-600 to-cyan-600&quot;
    }
    {
      icon: &quot;⚡&quot;,
      title: &quot;Enterprise Infrastructure & quot;,
      description: &quot;Built for scale with regional dashboards, partner APIs, and white - label solutions.&quot;,
      features: [;
        &quot;Regional Dashboards & quot;,
        &quot;Partner API Access & quot;,
        &quot;White - label Vendor Plugin & quot;,
        &quot;Web3 Login + DID & quot;
      ],
      gradient: &quot;bg - gradient - to - r from - orange - 600 to - red - 600 & quot;
    },
    {
      icon: &quot;🎓&quot;,
      title: &quot;Education & Growth & quot;,
      description: &quot;Zion Academy, incubator programs, and grants foster innovation and community growth.&quot;,
      features: [;
        &quot;Zion Academy & quot;,
        &quot;Incubator + Grants & quot;,
        &quot;Regional Job Categories & quot;,
        &quot;Wage Baselines & quot;
      ],
      gradient: &quot;bg - gradient - to - r from - teal - 600 to - cyan - 600 & quot;
    },
    {
      icon: &quot;🚀&quot;
      title: &quot;One-Click Deployment&quot;
      description: &quot;Launch your complete digital economy in minutes with our unified deployment protocol.&quot;
      features: [
        &quot;Automated Orchestration&quot;
        &quot;CMS Instance Generation&quot;
        &quot;Landing + Auth Flows&quot;
        &quot;Blog + Roadmap Setup&quot;
      ]
      gradient: &quot;bg-gradient-to-r from-indigo-600 to-blue-600&quot;
=======
>>>>>>> 10dff0b6745e (feat(content): add new blog posts and homepage blog section; resolve homepage conflicts)
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
              <a href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
              </a>
              <a href="/news" className="btn-secondary hover-lift">
                📰 See what's new in 2025
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to Build the Future</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit 
              for launching sovereign digital economies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  features={feature.features}
                  gradient={feature.gradient}
                />
              </div>
            ))}
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
              <a href="/multiverse/launch" className="btn-primary hover-lift text-lg px-8 py-4">
                🚀 Start Building Now
              </a>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
              </a>
              <a href="/blog/ai-foundation-models-2025" className="btn-secondary hover-lift text-lg px-8 py-4">
                📰 New: Foundation Models 2025
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

