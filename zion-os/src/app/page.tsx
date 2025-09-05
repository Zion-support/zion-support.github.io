import FeatureCard from './components/FeatureCard';

export default function HomePage() {
  const features = [
    {
      icon: &quot;🤖&quot;,
      title: &quot;AI-Powered Intelligence&quot;,
      description: &quot;ZionGPT Core, Resume AI, and autonomous decision engines power your economy with cutting-edge intelligence.&quot;,
      features: [
        &quot;ZionGPT Core Integration&quot;,
        &quot;Resume Builder + Proposal AI&quot;, 
        &quot;Autonomous Decision Engine&quot;,
        &quot;AI Moderation System&quot;
      ],
      gradient: &quot;bg-gradient-to-r from-blue-600 to-purple-600&quot;
    },
    {
      icon: &quot;🏪&quot;,
      title: &quot;Complete Marketplace&quot;,
      description: &quot;Jobs, talent, projects, and token systems create a thriving digital economy ecosystem.&quot;,
      features: [
        &quot;Job & Talent Marketplace&quot;,
        &quot;Token System + Rewards&quot;,
        &quot;On-chain Contract Builder&quot;,
        &quot;Multi-currency Support&quot;
      ],
      gradient: &quot;bg-gradient-to-r from-green-600 to-emerald-600&quot;
    },
    {
      icon: &quot;🗳️&quot;,
      title: &quot;Governance & DAO&quot;,
      description: &quot;Flexible governance from admin control to full DAO systems with dual governance options.&quot;,
      features: [
        &quot;DAO Proposal Voting&quot;,
        &quot;Dual Governance (Local + Global)&quot;,
        &quot;Sovereign Treasury&quot;,
        &quot;KYC/AML + ID Verification&quot;
      ],
      gradient: &quot;bg-gradient-to-r from-purple-600 to-pink-600&quot;
    },
    {
      icon: &quot;⚡&quot;,
      title: &quot;Enterprise Infrastructure&quot;,
      description: &quot;Built for scale with regional dashboards, partner APIs, and white-label solutions.&quot;,
      features: [
        &quot;Regional Dashboards&quot;,
        &quot;Partner API Access&quot;,
        &quot;White-label Vendor Plugin&quot;,
        &quot;Web3 Login + DID&quot;
      ],
      gradient: &quot;bg-gradient-to-r from-orange-600 to-red-600&quot;
    },
    {
      icon: &quot;🎓&quot;,
      title: &quot;Education & Growth&quot;,
      description: &quot;Zion Academy, incubator programs, and grants foster innovation and community growth.&quot;,
      features: [
        &quot;Zion Academy&quot;,
        &quot;Incubator + Grants&quot;,
        &quot;Regional Job Categories&quot;,
        &quot;Wage Baselines&quot;
      ],
      gradient: &quot;bg-gradient-to-r from-teal-600 to-cyan-600&quot;
    },
    {
      icon: &quot;🚀&quot;,
      title: &quot;One-Click Deployment&quot;,
      description: &quot;Launch your complete digital economy in minutes with our unified deployment protocol.&quot;,
      features: [
        &quot;Automated Orchestration&quot;,
        &quot;CMS Instance Generation&quot;,
        &quot;Landing + Auth Flows&quot;,
        &quot;Blog + Roadmap Setup&quot;
      ],
      gradient: &quot;bg-gradient-to-r from-indigo-600 to-blue-600&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <div className=&quot;hero-gradient absolute inset-0 -z-10&quot;></div>
          
          <div className=&quot;animate-fade-in&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6&quot;>
              <span className=&quot;gradient-text&quot;>Launch Sovereign</span>
              <br />
              <span className=&quot;text-white&quot;>AI-Powered Digital Economies</span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed&quot;>
              Deploy complete AI-powered marketplaces, governance systems, and digital economies with one click. 
              Built for the future of decentralized business.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a href=&quot;/multiverse/launch&quot; className=&quot;btn-primary hover-lift&quot;>
                🚀 Launch Your Economy
              </Link>
              <a href=&quot;/admin/instances&quot; className=&quot;btn-secondary hover-lift&quot;>
                📊 View Instances
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-white/5&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16 animate-slide-up&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Everything You Need to Build the Future
            </h2>
            <p className=&quot;text-xl text-white/70 max-w-2xl mx-auto&quot;>
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;glass-effect rounded-2xl p-12 animate-slide-up&quot;>
            <h2 className=&quot;text-4xl font-bold mb-6&quot;>
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

      {/* Stats Section */}
      <section className=&quot;py-16 px-4 sm:px-6 lg:px-8 bg-white/5&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 text-center&quot;>
            <div className=&quot;animate-fade-in&quot;>
              <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>100+</div>
              <div className=&quot;text-white/70&quot;>Features Available</div>
            </div>
            <div className=&quot;animate-fade-in&quot; style={{animationDelay: '0.1s'}}>
              <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>50+</div>
              <div className=&quot;text-white/70&quot;>Deployment Options</div>
            </div>
            <div className=&quot;animate-fade-in&quot; style={{animationDelay: '0.2s'}}>
              <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>24/7</div>
              <div className=&quot;text-white/70&quot;>AI Orchestration</div>
            </div>
            <div className=&quot;animate-fade-in&quot; style={{animationDelay: '0.3s'}}>
              <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>∞</div>
              <div className=&quot;text-white/70&quot;>Scalability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}