import React from 'react';
import ComprehensiveServicesShowcase from '../components/ComprehensiveServicesShowcase';

const InnovativeServices2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover Zion Tech Group's cutting-edge portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
              <div className="text-sm text-gray-300">Service Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="/comprehensive-pricing-2025"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              View Pricing
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of technology trends, offering the latest AI, quantum computing, and emerging tech solutions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-white mb-3">Business Focused</h3>
              <p className="text-gray-300">
                Every solution is designed with ROI in mind, ensuring measurable business impact and value creation
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Grade</h3>
              <p className="text-gray-300">
                Built with security, scalability, and compliance in mind for enterprise-level reliability
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300">
                Serving clients worldwide with localized support and multi-region deployment capabilities
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">
                Quick setup and implementation, with most solutions ready in days, not months
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                24/7 expert support and ongoing optimization to ensure your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across four key areas of innovation and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Micro SAAS */}
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Micro SAAS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Scalable, subscription-based software solutions designed for modern businesses. From productivity tools to specialized industry applications.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• AI-powered business intelligence</li>
                <li>• Cybersecurity and compliance</li>
                <li>• Cloud management and optimization</li>
                <li>• Data management and analytics</li>
                <li>• No-code AI development platforms</li>
              </ul>
              <div className="text-blue-400 font-semibold">Starting from $79/month</div>
            </div>
            
            {/* IT Services */}
            <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">IT Services & Consulting</h3>
              <p className="text-gray-300 mb-6">
                Strategic technology consulting and implementation services to transform your business operations and infrastructure.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Digital transformation consulting</li>
                <li>• Cloud migration and optimization</li>
                <li>• Cybersecurity assessment and implementation</li>
                <li>• IT infrastructure management</li>
                <li>• Strategic technology planning</li>
              </ul>
              <div className="text-green-400 font-semibold">Starting from $150/hour</div>
            </div>
            
            {/* AI Services */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Custom AI solutions and intelligent automation to streamline processes and unlock new business opportunities.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Custom AI model development</li>
                <li>• AI-powered business intelligence</li>
                <li>• Process automation with AI</li>
                <li>• Predictive analytics</li>
                <li>• Natural language processing</li>
              </ul>
              <div className="text-purple-400 font-semibold">Starting from $800/month</div>
            </div>
            
            {/* Next-Gen Services */}
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Next-Generation Innovation</h3>
              <p className="text-gray-300 mb-6">
                Cutting-edge technologies including quantum computing, metaverse platforms, autonomous systems, and emerging tech solutions.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Quantum AI hybrid computing</li>
                <li>• Metaverse business platforms</li>
                <li>• Autonomous vehicle systems</li>
                <li>• Healthcare AI diagnostics</li>
                <li>• Financial AI trading platforms</li>
              </ul>
              <div className="text-orange-400 font-semibold">Starting from $6,500/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Positioning */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Leadership & Competitive Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How our services compare to market alternatives and deliver superior value
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost Efficiency</h3>
              <p className="text-gray-300">
                Our solutions typically cost 30-50% less than enterprise alternatives while providing superior functionality and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Speed to Market</h3>
              <p className="text-gray-300">
                Deploy solutions in days or weeks, not months or years. Rapid implementation means faster ROI and competitive advantage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Customization</h3>
              <p className="text-gray-300">
                Tailored solutions that fit your exact business needs, not one-size-fits-all software that requires expensive customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-20">
        <ComprehensiveServicesShowcase />
      </section>

      {/* Contact & CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Lead the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking businesses that are already leveraging our innovative services to gain competitive advantage and drive growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Get Started Today</h3>
              <p className="text-sm text-gray-300 mb-4">Schedule a consultation to discuss your needs</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Request Custom Quote</h3>
              <p className="text-sm text-gray-300 mb-4">Get a personalized proposal for your project</p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom Quote Request"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p>📱 <strong>Phone:</strong> +1 302 464 0950</p>
                <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p>🌐 <strong>Website:</strong> https://ziontechgroup.com</p>
                <p>📍 <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServices2025;