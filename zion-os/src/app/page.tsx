import Link from 'next/link';

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Zion OS</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Launch sovereign AI-powered digital economies with one click. Comprehensive technology solutions for modern businesses.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mr-4">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-400">Economies Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">$2.5M+</div>
              <div className="text-gray-400">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🚀 Our Services</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Comprehensive technology solutions from AI services to enterprise IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI Services & Solutions</h3>
              <p className="text-zinc-300 mb-4">
                Enterprise-grade AI solutions including ZionGPT Core, content generation, analytics, 
                customer support, process automation, and security.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$199/month</span>
                </div>
              </div>
              <a href="/services/ai" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore AI Services
              </a>
            </div>

            {/* IT Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-green-500 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">IT Services & Solutions</h3>
              <p className="text-zinc-300 mb-4">
                Cloud infrastructure, DevOps, cybersecurity, data engineering, API development, 
                and digital transformation consulting.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$140/hour</span>
                </div>
              </div>
              <a href="/services/it" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore IT Services
              </a>
            </div>

            {/* Blockchain Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-xl font-semibold mb-3">Blockchain & Web3</h3>
              <p className="text-zinc-300 mb-4">
                DeFi platforms, NFT marketplaces, smart contracts, Web3 infrastructure, 
                DAO development, and blockchain consulting.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$5K</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore Blockchain Services
              </a>
            </div>

            {/* SAAS Services */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-purple-500 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Micro SAAS Services</h3>
              <p className="text-zinc-300 mb-4">
                Ready-to-deploy solutions including Zion Marketplace, Resume AI Builder, 
                Token Rewards System, KYC/AML, DAO Governance, and Zion Academy.
              </p>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Starting from:</span>
                  <span className="text-green-400">$99/month</span>
                </div>
              </div>
              <a href="/services/saas" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Explore SAAS Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get your digital economy up and running in just three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Configure</h3>
              <p className="text-gray-400">
                Choose your features, set up governance rules, and configure your token economics through our intuitive wizard.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deploy</h3>
              <p className="text-gray-400">
                One-click deployment automatically sets up your infrastructure, smart contracts, and user interface.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scale</h3>
              <p className="text-gray-400">
                Your economy grows with built-in scaling, AI-powered insights, and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how Zion OS is powering the future of digital economies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-gray-400">CEO, TechCorp</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Zion OS transformed our business model. We launched our digital economy in under 2 hours and saw 300% growth in user engagement within the first month."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-400 font-bold">JS</span>
                </div>
                <div>
                  <div className="font-semibold">Jane Smith</div>
                  <div className="text-sm text-gray-400">CTO, InnovateLab</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The AI governance features are game-changing. Our community makes decisions faster and more intelligently than ever before."
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">MB</span>
                </div>
                <div>
                  <div className="font-semibold">Mike Brown</div>
                  <div className="text-sm text-gray-400">Founder, CryptoStartup</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Zion OS gave us enterprise-grade infrastructure without the complexity. We focus on our product while they handle the platform."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Digital Economy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of sovereign, AI-powered digital economies. 
              Deploy in minutes, scale infinitely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a className="p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all bg-zinc-900" href="/multiverse/launch">
              <div className="font-semibold text-xl mb-2">🚀 Launch Wizard</div>
              <div className="text-zinc-300 mb-4">
                Spin up a new instance with marketplace, governance, identity, and more. 
                Complete deployment in minutes with our guided setup process.
              </div>
              <div className="text-sm text-blue-400">Launch Your Instance →</div>
            </a>
            
            <a className="p-6 rounded-xl border border-zinc-700 hover:border-green-500 transition-all bg-zinc-900" href="/admin/instances">
              <div className="font-semibold text-xl mb-2">⚙️ Admin Instances</div>
              <div className="text-zinc-300 mb-4">
                Manage deployed instances, API keys, and governance. Monitor performance, 
                scale resources, and maintain your digital ecosystem.
              </div>
              <div className="text-sm text-green-400">Manage Instances →</div>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive technology solutions can drive your digital transformation 
            and business growth.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                ✉️ Schedule Consultation
              </a>
            </div>
            <p className="text-blue-100 text-sm">
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}