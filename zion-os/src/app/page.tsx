import Link from 'next/link';
  const features = [
    {
    }
  ]
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="hero-gradient absolute inset-0 -z-10"></div>
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Launch Sovereign</span>
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
  ];
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="gradient-text">Zion OS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Launch sovereign AI-powered digital economies with one click. 
            <span className="block text-lg text-white/60 mt-2">
              Unified deployment protocol for Zion ecosystems
            </span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/multiverse/launch" 
            className="btn-primary text-lg px-8 py-4"
          >
            🚀 Launch New Instance
          </a>
          <a 
            href="/admin/instances" 
            className="btn-secondary text-lg px-8 py-4"
          >
            📊 View Instances
          </a>
        </div>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-hover">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🚀</span>
            </div>
            <h3 className="text-xl font-semibold">Launch Wizard</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Spin up a new instance with marketplace, governance, identity, and more. 
            Complete setup in minutes, not days.
          </p>
          <a 
            href="/multiverse/launch" 
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            Get Started →
          </a>
        </div>
        <div className="card card-hover">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold">Admin Instances</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Manage deployed instances, API keys, and governance. 
            Full control over your digital economy ecosystem.
          </p>
          <a 
            href="/admin/instances" 
            className="inline-block mt-4 text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
          >
            Manage →
          </a>
        </div>
        <div className="card card-hover">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🔧</span>
            </div>
            <h3 className="text-xl font-semibold">OS Deployment</h3>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Advanced deployment options with custom configurations. 
            Tailor your instance to specific business needs.
          </p>
          <a 
            href="/admin/os-deploy" 
            className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            Deploy →
          </a>
        </div>
      </div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
          <div className="text-white/60 text-sm">Active Instances</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
          <div className="text-white/60 text-sm">Features Available</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
          <div className="text-white/60 text-sm">Uptime</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
          <div className="text-white/60 text-sm">Support</div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="text-center py-12">
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Launch Your Digital Economy?</h2>
          <p className="text-white/70 mb-6">
            Join the future of autonomous business operations. 
            Deploy your first instance in under 5 minutes.
          </p>
          <a 
            href="/multiverse/launch" 
            className="btn-primary text-lg px-8 py-4"
          >
            Start Building Now
          </a>
        </div>
      </div>
  ],
  return (
              <br />
              <span className=&quot;text-white&quot;>AI-Powered Digital Economies</span>
            </h1>
              Deploy complete AI-powered marketplaces, governance systems, and digital economies with one click. 
              Built for the future of decentralized business.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary hover-lift&quot;>
            <p className=&quot;text-xl text-white/70 max-w-2xl mx-auto&quot;>
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit
              for launching sovereign digital economies.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit 
              for launching sovereign digital economies.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <FeatureCard
      <section className=&quot;relative overflow - hidden py - 20 px - 4 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;max - w-7xl mx - auto text - center & quot;>;
          <div className=&quot;hero - gradient absolute inset - 0 -z - 10 & quot;></div>;
          <div className=&quot;animate - fade - in & quot;>;
            <h1 className=&quot;text - 5xl md:text - 7xl font - bold mb - 6&quot;>;
              <span className=&quot;gradient - text & quot;>Launch Sovereign</span>;
              <br />;
              <span className=&quot;text - white & quot;>AI - Powered Digital Economies</span>;
            </h1>;
            <p className=&quot;text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto mb - 8 leading - relaxed & quot;>;
              Deploy complete AI - powered marketplaces, governance systems, and digital economies with one click.;
              Built for the future of decentralized business.;
            </p>;
            <div className=&quot;flex flex - col sm:flex - row gap - 4 justify - center items - center & quot;>;
              <a href=&quot;/multiverse / launch & quot; className=&quot;btn - primary hover - lift & quot;>;
                🚀 Launch Your Economy;
              </Link>;
              <a href=&quot;/admin / instances & quot; className=&quot;btn - secondary hover - lift & quot;>;
                📊 View Instances;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className=&quot;py - 20 px - 4 sm:px - 6 lg:px - 8 bg - white / 5&quot;>;
        <div className=&quot;max - w-7xl mx - auto & quot;>;
          <div className=&quot;text - center mb - 16 animate - slide - up & quot;>;
            <h2 className=&quot;text - 4xl md:text - 5xl font - bold mb - 6&quot;>;
              Everything You Need to Build the Future;
            </h2>;
            <p className=&quot;text - xl text - white / 70 max - w-2xl mx - auto & quot;>;
              From AI - powered marketplaces to decentralized governance, Zion OS provides the complete toolkit;
              for launching sovereign digital economies.;
            </p>;
          </div>;
          <div className=&quot;grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8&quot;>;
            {features.map ((feature, index) => (
              <FeatureCard;
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
              Deploy complete AI-powered marketplaces, governance systems, and digital economies with one click. 
              Built for the future of decentralized business.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary hover-lift&quot;>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Deploy complete AI-powered marketplaces, governance systems, and digital economies with one click. 
              Built for the future of decentralized business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/multiverse/launch" className="btn-primary hover-lift">
                🚀 Launch Your Economy
              </Link>
              <a href="/admin/instances" className="btn-secondary hover-lift">
                📊 View Instances
              </Link>
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
            </h2>            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit 
              for launching sovereign digital economies.
            </p>
          </div>
            {/* Quantum Computing */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">
                Next-generation computing solutions that leverage quantum mechanics for unprecedented processing power.
              </p>
              <Link href="/services/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium">
                Learn More →
              </Link>
            </div>
            {/* Enterprise AI */}
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise AI</h3>
              <p className="text-gray-300 mb-4">
                Scalable AI solutions designed for enterprise environments, from data analytics to process automation.
              </p>
              <Link href="/services/enterprise-ai" className="text-green-400 hover:text-green-300 font-medium">
                Learn More →
              </Link>
            </div>
            {/* AI Consulting */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Consulting</h3>
              <p className="text-gray-300 mb-4">
                Expert guidance on AI strategy, implementation, and optimization to maximize your technology investments.
              </p>
              <Link href="/services/ai-consulting" className="text-orange-400 hover:text-orange-300 font-medium">
                Learn More →
              </Link>
            </div>
            {/* Autonomous Business Operations */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Business Operations</h3>
              <p className="text-gray-300 mb-4">
                Self-managing business processes that optimize operations, reduce costs, and improve efficiency.
              </p>
              <Link href="/services/autonomous-business-operations" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Learn More →
              </Link>
            </div>
            {/* AI Research & Development */}
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Research & Development</h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge research in AI consciousness, neural networks, and next-generation AI technologies.
              </p>
              <Link href="/research" className="text-indigo-400 hover:text-indigo-300 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-2xl mx-auto&quot;>
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit
              for launching sovereign digital economies.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From AI-powered marketplaces to decentralized governance, Zion OS provides the complete toolkit 
              for launching sovereign digital economies.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                gradient={feature.gradient}
              />))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;glass-effect rounded-2xl p-12 animate-slide-up&quot;>
            <h2 className=&quot;text-4xl font-bold mb-6&quot;>      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join the revolution in decentralized business. Launch your sovereign AI-powered digital economy today.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary hover-lift text-lg px-8 py-4&quot;>
                🚀 Start Building Now
              </Link>
              <a href=&quot;/admin/instances&quot; className=&quot;btn-secondary hover-lift text-lg px-8 py-4&quot;>
                📊 Explore Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
<section className=&quot;py - 20 px - 4 sm:px - 6 lg:px - 8&quot;>;
        <div className=&quot;max - w-4xl mx - auto text - center & quot;>;
          <div className=&quot;glass - effect rounded - 2xl p - 12 animate - slide - up & quot;>;
            <h2 className=&quot;text - 4xl font - bold mb - 6&quot;>;
              Ready to Build the Future?;
            </h2>;
            <p className=&quot;text - xl text - white / 70 mb - 8 max - w-2xl mx - auto & quot;>;
              Join the revolution in decentralized business. Launch your sovereign AI - powered digital economy today.;
            </p>;
            <div className=&quot;flex flex - col sm:flex - row gap - 4 justify - center & quot;>;
              <a href=&quot;/multiverse / launch & quot; className=&quot;btn - primary hover - lift text - lg px - 8 py - 4&quot;>;
                🚀 Start Building Now;
              </Link>;
              <a href=&quot;/admin / instances & quot; className=&quot;btn - secondary hover - lift text - lg px - 8 py - 4&quot;>;
                📊 Explore Examples;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className=&quot;py - 16 px - 4 sm:px - 6 lg:px - 8 bg - white / 5&quot;>;
        <div className=&quot;max - w-7xl mx - auto & quot;>;
          <div className=&quot;grid grid - cols - 1 md:grid - cols - 4 gap - 8 text - center & quot;>;
            <div className=&quot;animate - fade - in & quot;>;
              <div className=&quot;text - 3xl font - bold text - blue - 400 mb - 2&quot;>100+</div>;
              <div className=&quot;text - white / 70 & quot;>Features Available</div>;
            </div>;
            <div className=&quot;animate - fade - in & quot; style={{animation_delay: '0.1s'}}>;
              <div className=&quot;text - 3xl font - bold text - purple - 400 mb - 2&quot;>50+</div>;
              <div className=&quot;text - white / 70 & quot;>Deployment Options</div>;
            </div>;
            <div className=&quot;animate - fade - in & quot; style={{animation_delay: '0.2s'}}>;
              <div className=&quot;text - 3xl font - bold text - green - 400 mb - 2&quot;>24 / 7</div>;
              <div className=&quot;text - white / 70 & quot;>AI Orchestration</div>;
            </div>;
            <div className=&quot;animate - fade - in & quot; style={{animation_delay: '0.3s'}}>;
              <div className=&quot;text - 3xl font - bold text - orange - 400 mb - 2&quot;>∞</div>;
              <div className=&quot;text - white / 70 & quot;>Scalability</div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>);
<section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;glass-effect rounded-2xl p-12 animate-slide-up&quot;>
            <h2 className=&quot;text-4xl font-bold mb-6&quot;>
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
              </Link>
              <a href="/admin/instances" className="btn-secondary hover-lift text-lg px-8 py-4">
                📊 Explore Examples
              </Link>
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
  )
}