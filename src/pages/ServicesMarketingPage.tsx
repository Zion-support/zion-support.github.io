import React from 'react';
import { Link } from 'react-router-dom';
import { REVOLUTIONARY_2025_ADVANCED_SERVICES } from '../../data/revolutionary-2025-advanced-services';
import { EMERGING_TECH_2025_SPECIALIZED_SERVICES } from '../../data/emerging-tech-2025-specialized-services';
const ServicesMarketingPage = () => {
    const allServices = [
        ...REVOLUTIONARY_2025_ADVANCED_SERVICES,
        ...EMERGING_TECH_2025_SPECIALIZED_SERVICES
    ];
    const serviceCategories = {
        'Micro SAAS': allServices.filter(s => s.category === 'Micro SAAS'),
        'IT Services': allServices.filter(s => s.category === 'IT Services'),
        'AI Solutions': allServices.filter(s => s.category === 'AI Solutions'),
        'Blockchain & Web3': allServices.filter(s => s.category === 'Blockchain & Web3'),
        'IoT & Edge Computing': allServices.filter(s => s.category === 'IoT & Edge Computing'),
        'Sustainable Technology': allServices.filter(s => s.category === 'Sustainable Technology'),
        'Space Technology': allServices.filter(s => s.category === 'Space Technology'),
        'Biotechnology': allServices.filter(s => s.category === 'Biotechnology'),
        'Quantum Technology': allServices.filter(s => s.category === 'Quantum Technology')
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary Technology Services
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Transform Businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge micro SAAS services, specialized IT solutions, and innovative AI platforms 
            designed to give your business a competitive edge in 2025 and beyond.
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.8T+</div>
              <div className="text-gray-300">Total Addressable Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">15.7%</div>
              <div className="text-gray-300">Annual Growth Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Global Clients Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Autonomous Operations</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/revolutionary-services-2025" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore All Services
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're pioneers in revolutionary solutions that 
              combine cutting-edge AI, quantum computing, and autonomous systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">First-Mover Advantage</h3>
              <p className="text-gray-300 mb-6">
                Be among the first to leverage quantum-AI hybrid solutions, autonomous systems, 
                and next-generation blockchain technology.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Quantum computing integration</li>
                <li>• Autonomous AI systems</li>
                <li>• Revolutionary blockchain solutions</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Unmatched Performance</h3>
              <p className="text-gray-300 mb-6">
                Our services deliver performance improvements that traditional solutions simply cannot match.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• 10x faster processing</li>
                <li>• 95% accuracy improvements</li>
                <li>• 24/7 autonomous operation</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 mb-6">
                Built with enterprise-grade security and compliance standards from day one.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Quantum-resistant encryption</li>
                <li>• Zero-trust architecture</li>
                <li>• Global compliance standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From micro SAAS solutions to enterprise AI platforms, we cover every aspect of 
              modern technology needs.
            </p>
          </div>

          {Object.entries(serviceCategories).map(([category, services]) => (<div key={category} className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (<div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                    <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-green-400">{service.price}</div>
                      <span className="text-gray-400 text-sm">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      <div className="font-semibold text-white">Expected ROI:</div>
                      <div className="text-green-400">{service.roi}</div>
                    </div>
                    <Link to={`/revolutionary-services-2025#${service.id}`} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300">
                      Learn More →
                    </Link>
                  </div>))}
              </div>
            </div>))}
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competitive Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets us apart from traditional technology providers and competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Technology Leadership</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-white">Quantum Computing Integration</div>
                    <div className="text-gray-400 text-sm">First commercial quantum-AI hybrid solutions</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-white">Autonomous AI Systems</div>
                    <div className="text-gray-400 text-sm">24/7 operation without human intervention</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-white">Edge Computing</div>
                    <div className="text-gray-400 text-sm">Real-time processing at the data source</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <div>
                    <div className="font-semibold text-white">10x Performance Improvement</div>
                    <div className="text-gray-400 text-sm">Unprecedented speed and efficiency gains</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <div>
                    <div className="font-semibold text-white">95% Cost Reduction</div>
                    <div className="text-gray-400 text-sm">Dramatic operational cost savings</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <div>
                    <div className="font-semibold text-white">Zero Downtime</div>
                    <div className="text-gray-400 text-sm">Continuous operation and reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Calculate Your ROI</h2>
              <p className="text-xl text-gray-300">
                See how our revolutionary services can transform your business metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">300-2000%</div>
                <div className="text-white font-semibold">Average ROI</div>
                <div className="text-gray-400 text-sm">Within 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">40-90%</div>
                <div className="text-white font-semibold">Cost Reduction</div>
                <div className="text-gray-400 text-sm">Operational efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-white font-semibold">Performance Gain</div>
                <div className="text-gray-400 text-sm">Speed and accuracy</div>
              </div>
            </div>

            <div className="text-center">
              <a href="mailto:kleber@ziontechgroup.com?subject=ROI%20Calculation%20Request" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Request Custom ROI Analysis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies that are already leveraging our revolutionary 
            technology services to gain a competitive edge.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-300 mb-8">
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-lg">+1 302 464 0950</p>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-lg">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">Website</p>
                <p className="text-lg">https://ziontechgroup.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                📞 Call Now: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:bg-white/10 transition-all duration-300">
                ✉️ Email Us
              </a>
              <Link to="/revolutionary-services-2025" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default ServicesMarketingPage;
