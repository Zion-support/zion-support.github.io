    {
      icon: &quot;&quot;
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
    }
  ]
  return (
              <br />
              <span className="text-white">AI-Powered Digital Economies</span>
            </h1>
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
            </h2>
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


      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join the revolution in decentralized business. Launch your sovereign AI-powered digital economy today.
            </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
