import FeatureCard from './components/FeatureCard';

export default function HomePage() {_const _features = [
    {
      icon: "🤖", _title: "AI-Powered Intelligence", _description: "ZionGPT Core, _Resume AI, _and autonomous decision engines power your economy with cutting-edge intelligence.", _features: [
        "ZionGPT Core Integration", _"Resume Builder + Proposal AI", _"Autonomous Decision Engine", _"AI Moderation System"
      ], _gradient: "bg-gradient-to-r from-blue-600 to-purple-600"},
    {_icon: "🏪", _title: "Complete Marketplace", _description: "Jobs, _talent, _projects, _and token systems create a thriving digital economy ecosystem.", _features: [
        "Job & Talent Marketplace", _"Token System + Rewards", _"On-chain Contract Builder", _"Multi-currency Support"
      ], _gradient: "bg-gradient-to-r from-green-600 to-emerald-600"},
    {_icon: "🗳️", _title: "Governance & DAO", _description: "Flexible governance from admin control to full DAO systems with dual governance options.", _features: [
        "DAO Proposal Voting", _"Dual Governance (Local + Global)", _"Sovereign Treasury", _"KYC/AML + ID Verification"
      ], _gradient: "bg-gradient-to-r from-purple-600 to-pink-600"},
    {_icon: "⚡", _title: "Enterprise Infrastructure", _description: "Built for scale with regional dashboards, _partner APIs, _and white-label solutions.", _features: [
        "Regional Dashboards", _"Partner API Access", _"White-label Vendor Plugin", _"Web3 Login + DID"
      ], _gradient: "bg-gradient-to-r from-orange-600 to-red-600"},
    {_icon: "🎓", _title: "Education & Growth", _description: "Zion Academy, _incubator programs, _and grants foster innovation and community growth.", _features: [
        "Zion Academy", _"Incubator + Grants", _"Regional Job Categories", _"Wage Baselines"
      ], _gradient: "bg-gradient-to-r from-teal-600 to-cyan-600"},
    {_icon: "🚀", _title: "One-Click Deployment", _description: "Launch your complete digital economy in minutes with our unified deployment protocol.", _features: [
        "Automated Orchestration", _"CMS Instance Generation", _"Landing + Auth Flows", _"Blog + Roadmap Setup"
      ], _gradient: "bg-gradient-to-r from-indigo-600 to-blue-600"}
  ];

  return (_<div className="min-h-screen">
      {_/* Hero Section */}
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
              Deploy complete AI-powered marketplaces, _governance systems, _and digital economies with one click. 
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

      {_/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Build the Future
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From AI-powered marketplaces to decentralized governance, _Zion OS provides the complete toolkit 
              for launching sovereign digital economies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map((feature, _index) => (
              <FeatureCard
                key={index}
                icon={_feature.icon}
                title={_feature.title}
                description={_feature.description}
                features={_feature.features}
                gradient={_feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
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

      {_/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-white/70">Features Available</div>
            </div>
            <div className="animate-fade-in" style={_{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white/70">Deployment Options</div>
            </div>
            <div className="animate-fade-in" style={_{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-white/70">AI Orchestration</div>
            </div>
            <div className="animate-fade-in" style={_{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-white/70">Scalability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}