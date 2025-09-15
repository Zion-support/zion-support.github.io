import FeatureCard from './components/FeatureCard';
import Link from 'next/link';

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

      {/* Latest News Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Latest News</h2>
            <Link href="/news" className="text-blue-400 hover:text-blue-300">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/ai-business-intelligence-platform-launch" className="card group">
              <div className="w-full h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-blue-400 text-4xl">BI</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded-full">LAUNCH</span>
                <span className="text-gray-400 text-sm">Dec 15, 2024</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                AI-Powered Business Intelligence Platform Launch
              </h3>
              <p className="text-gray-400 mt-2 line-clamp-2">
                Real-time insights, predictive analytics, and automated decision support for enterprises.
              </p>
            </Link>

            <Link href="/news/quantum-error-correction-breakthrough" className="card group">
              <div className="w-full h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-purple-400 text-4xl">QC</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-500/20 text-purple-400 text-xs font-bold px-2 py-1 rounded-full">QUANTUM</span>
                <span className="text-gray-400 text-sm">Dec 12, 2024</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                Quantum Error Correction Breakthrough
              </h3>
              <p className="text-gray-400 mt-2 line-clamp-2">
                New algorithm cuts logical error rates by up to 60% across NISQ devices.
              </p>
            </Link>
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
    </div>
  );
}
