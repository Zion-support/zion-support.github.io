import React from 'react';
import { SEO } from '../components/SEO';
import { 
  advancedInnovativeMicroSaasServices2030, 
  advancedITInfrastructureServices2030, 
  advancedAIServices2030 
} from '../data/advancedInnovativeServices2030';

const ComprehensiveServicesShowcase2030: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2030 | Zion Tech Group"
        description="Explore our complete portfolio of cutting-edge micro SAAS, IT infrastructure, and AI services. Transform your business with innovative solutions."
        keywords="comprehensive services, micro SAAS, IT infrastructure, AI services, blockchain, edge computing, quantum security, DevOps automation"
        url="https://ziontechgroup.com/comprehensive-services-showcase-2030"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Services Showcase 2030
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Your one-stop destination for cutting-edge technology solutions that drive innovation, 
              enhance security, and accelerate business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services-overview" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Technology Ecosystem
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From micro SAAS platforms to enterprise infrastructure, we provide end-to-end solutions 
                that address every aspect of your digital transformation journey.
              </p>
            </div>

            {/* Service Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Micro SAAS */}
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300">
                <div className="text-blue-400 text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Innovative software platforms that solve real business challenges with cutting-edge technologies.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• Smart Contract Auditing</div>
                  <div>• Edge AI Computing</div>
                  <div>• Quantum-Resistant Crypto</div>
                  <div>• Autonomous DevOps</div>
                  <div>• Healthcare Digital Twins</div>
                </div>
                <div className="mt-6 text-blue-400 font-semibold">
                  Starting from $2,999/month
                </div>
              </div>

              {/* IT Infrastructure */}
              <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
                <div className="text-green-400 text-5xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Professional services that build robust, secure, and future-ready infrastructure.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• Zero-Trust Networks</div>
                  <div>• Hybrid Cloud Migration</div>
                  <div>• Quantum-Ready Systems</div>
                  <div>• Security Architecture</div>
                  <div>• Performance Optimization</div>
                </div>
                <div className="mt-6 text-green-400 font-semibold">
                  Starting from $150/hour
                </div>
              </div>

              {/* AI Services */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300">
                <div className="text-purple-400 text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence solutions with transparency and privacy protection.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• Multimodal AI Platform</div>
                  <div>• Federated Learning</div>
                  <div>• Explainable AI</div>
                  <div>• Custom Model Training</div>
                  <div>• Ethical AI Compliance</div>
                </div>
                <div className="mt-6 text-purple-400 font-semibold">
                  Starting from $4,999/month
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and impactful solutions that are transforming industries worldwide.
              </p>
            </div>

            {/* Featured Service Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Smart Contract Auditor Pro */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">SmartContract Auditor Pro</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    Featured
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  AI-powered smart contract auditing platform that automatically detects vulnerabilities, 
                  security risks, and compliance issues in blockchain applications.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">✓</span>
                        90% faster security audits
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">✓</span>
                        Prevent costly exploits
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">✓</span>
                        Regulatory compliance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Market Impact</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">📈</span>
                        $12.3B market size
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">🚀</span>
                        67.8% annual growth
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">💰</span>
                        400% ROI in 6 months
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-white">$2,999</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  
                  <button 
                    onClick={scrollToContact}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* EdgeAI Computing Platform */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">EdgeAI Computing Platform</h3>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full">
                    Revolutionary
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Distributed edge AI computing platform that brings machine learning capabilities to IoT devices, 
                  reducing latency and improving privacy.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        95% latency reduction
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Enhanced privacy
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Offline AI capabilities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Market Impact</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">📈</span>
                        $18.7B market size
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">🚀</span>
                        34.2% annual growth
                      </li>
                      <li className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">💰</span>
                        350% ROI in 12 months
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-white">$5,999</div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  
                  <button 
                    onClick={scrollToContact}
                    className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare our services to find the perfect solution for your business needs and budget.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-2xl border border-gray-700">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-6 text-white font-semibold">Service Category</th>
                    <th className="text-left p-6 text-white font-semibold">Starting Price</th>
                    <th className="text-left p-6 text-white font-semibold">ROI Timeline</th>
                    <th className="text-left p-6 text-white font-semibold">Setup Time</th>
                    <th className="text-left p-6 text-white font-semibold">Innovation Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="p-6 text-white font-semibold">Smart Contract Auditor Pro</td>
                    <td className="p-6 text-gray-300">$2,999/month</td>
                    <td className="p-6 text-green-400">6 months</td>
                    <td className="p-6 text-gray-300">1-2 weeks</td>
                    <td className="p-6 text-blue-400">Cutting-edge</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-6 text-white font-semibold">EdgeAI Computing Platform</td>
                    <td className="p-6 text-gray-300">$5,999/month</td>
                    <td className="p-6 text-green-400">12 months</td>
                    <td className="p-6 text-gray-300">3-4 weeks</td>
                    <td className="p-6 text-purple-400">Revolutionary</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-6 text-white font-semibold">Quantum-Resistant Crypto Suite</td>
                    <td className="p-6 text-gray-300">$3,999/month</td>
                    <td className="p-6 text-green-400">18 months</td>
                    <td className="p-6 text-gray-300">4-6 weeks</td>
                    <td className="p-6 text-purple-400">Revolutionary</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="p-6 text-white font-semibold">Zero-Trust Network Architecture</td>
                    <td className="p-6 text-gray-300">$150/hour</td>
                    <td className="p-6 text-green-400">Immediate</td>
                    <td className="p-6 text-gray-300">8-12 weeks</td>
                    <td className="p-6 text-blue-400">Cutting-edge</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-white font-semibold">Multimodal AI Platform</td>
                    <td className="p-6 text-gray-300">$8,999/month</td>
                    <td className="p-6 text-green-400">12 months</td>
                    <td className="p-6 text-gray-300">4-6 weeks</td>
                    <td className="p-6 text-purple-400">Revolutionary</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our services have transformed businesses across industries and delivered measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-blue-500/30">
                <div className="text-blue-400 text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300 text-sm mb-4">
                  "Our smart contract auditing platform prevented $2M in potential losses and ensured regulatory compliance."
                </p>
                <div className="text-blue-400 font-semibold text-sm">
                  - Global DeFi Protocol
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-green-500/30">
                <div className="text-green-400 text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300 text-sm mb-4">
                  "EdgeAI platform reduced patient diagnosis time by 80% while maintaining data privacy standards."
                </p>
                <div className="text-green-400 font-semibold text-sm">
                  - Regional Hospital Network
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-purple-500/30">
                <div className="text-purple-400 text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300 text-sm mb-4">
                  "Autonomous DevOps platform reduced deployment time by 90% and eliminated 99% of human errors."
                </p>
                <div className="text-purple-400 font-semibold text-sm">
                  - Fortune 500 Manufacturer
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our innovative services to gain competitive advantages.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-3">📱</span>
                    <a href="tel:+13024640950" className="hover:text-white transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-3">✉️</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-3">🌐</span>
                    <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3">📍</span>
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('https://ziontechgroup.com/request-quote', '_blank')}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Request Custom Quote
                  </button>
                  <button 
                    onClick={() => window.open('https://ziontechgroup.com/schedule-demo', '_blank')}
                    className="w-full py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    Schedule Free Demo
                  </button>
                  <button 
                    onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
                    className="w-full py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
                  >
                    Speak with Expert
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Don't let your competitors get ahead. Start your digital transformation today.
              </p>
              <p className="text-white font-semibold text-lg">
                Contact Zion Tech Group and discover how our advanced services can revolutionize your business!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2030;