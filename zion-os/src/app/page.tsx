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
    <div className="space-y-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Zion OS</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto">
          Launch sovereign AI-powered digital economies with one click. Discover our revolutionary micro SAAS, IT infrastructure, and AI services that are transforming businesses worldwide.
        </p>
      </div>

      {/* Services Overview */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-6 text-center">Revolutionary Technology Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center space-y-3">
            <div className="text-3xl">🤖</div>
            <h3 className="font-semibold">AI & Machine Learning</h3>
            <p className="text-sm opacity-80">Autonomous enterprise platforms, consciousness simulation, and multimodal AI fusion</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl">☁️</div>
            <h3 className="font-semibold">IT Infrastructure</h3>
            <p className="text-sm opacity-80">Quantum cybersecurity, edge computing, and blockchain governance solutions</p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl">🚀</div>
            <h3 className="font-semibold">Micro SAAS</h3>
            <p className="text-sm opacity-80">Smart CRM, HR analytics, and affiliate attribution suites</p>
          </div>
        </div>
        <div className="text-center">
          <a 
            href="/services" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Explore All Services
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zinc-900/50 rounded-lg p-6 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Mobile:</span>
            <a href="tel:+13024640950" className="text-blue-400 hover:underline">+1 302 464 0950</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Address:</span>
            <span>364 E Main St STE 1008 Middletown DE 19709</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a className="p-6 rounded border border-white/10 hover:border-white/20 bg-zinc-900/50" href="/multiverse/launch">
          <div className="font-semibold text-lg mb-2">Launch Wizard</div>
          <div className="text-sm opacity-80">Spin up a new instance with marketplace, governance, identity, and more.</div>
        </a>
        <a className="p-6 rounded border border-white/10 hover:border-white/20 bg-zinc-900/50" href="/admin/instances">
          <div className="font-semibold text-lg mb-2">Admin Instances</div>
          <div className="text-sm opacity-80">Manage deployed instances, API keys, and governance.</div>
        </a>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-8 border border-white/10">
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg opacity-80 mb-6 max-w-2xl mx-auto">
          Our revolutionary services are designed to give you a competitive edge in the digital economy. 
          From AI-powered automation to quantum computing solutions, we deliver the future of technology today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Call Now: +1 302 464 0950
          </a>
          <a
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}