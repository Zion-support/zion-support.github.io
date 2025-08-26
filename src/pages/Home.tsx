import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              🚀 Leading AI & Technology Solutions Since 2024
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}AI-Powered Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zion Tech Group delivers cutting-edge artificial intelligence solutions, cloud infrastructure, 
            and digital transformation services that drive measurable business results. 
            Trusted by enterprises worldwide for innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SOC 2 Type II Compliant
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              99.9% Uptime SLA
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Clients Worldwide</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-gray-300 text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From AI-powered automation to enterprise security, we deliver end-to-end solutions that drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Custom AI solutions, predictive analytics, and intelligent automation systems
              </p>
              <div className="text-sm text-green-400 mb-3 font-medium">Starting at $2,500/month</div>
              <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn More 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud infrastructure, CI/CD pipelines, and automated operations
              </p>
              <div className="text-sm text-green-400 mb-3 font-medium">Starting at $1,800/month</div>
              <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn More 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Enterprise-grade security, threat detection, and compliance management
              </p>
              <div className="text-sm text-green-400 mb-3 font-medium">Starting at $3,000/month</div>
              <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn More 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Micro SAAS Services</h3>
              <p className="text-gray-300 mb-4">
                AI-powered tools for content generation, invoice management, and business automation
              </p>
              <div className="text-sm text-green-400 mb-3 font-medium">Starting at $79/month</div>
              <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn More 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-white mb-3">IT Infrastructure</h3>
              <p className="text-gray-300 mb-4">
                Network security, data backup, asset management, and performance monitoring
              </p>
              <div className="text-sm text-green-400 mb-3 font-medium">Starting at $299/month</div>
              <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn More 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                End-to-end digital transformation consulting and implementation services
              </p>
              <div className="text-sm text-green-400 mb-3 font-medium">Starting at $5,000/month</div>
              <Link to="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-transform duration-300">
                Learn More 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Leading Companies Choose Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">Pioneering AI solutions and emerging technologies that give you a competitive edge</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Delivery</h3>
              <p className="text-gray-300">Agile development methodology ensuring fast time-to-market and quick ROI</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security protocols and compliance standards to protect your business</p>
            </div>
            
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable business impact and exceptional ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've transformed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Zion Tech Group transformed our operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings."
              </p>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-gray-400 text-sm">CTO, TechCorp Solutions</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Their cybersecurity implementation was flawless. We feel completely secure knowing our data is protected by enterprise-grade solutions."
              </p>
              <div className="text-white font-semibold">Michael Chen</div>
              <div className="text-gray-400 text-sm">Security Director, Global Finance</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "The cloud migration was seamless and their ongoing support is exceptional. Zion Tech Group is our trusted technology partner."
              </p>
              <div className="text-white font-semibold">Emily Rodriguez</div>
              <div className="text-gray-400 text-sm">VP Operations, InnovateTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our technology solutions to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Transformation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <p>Email us at</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌐</div>
                <p>Visit our website</p>
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 font-medium">
                  ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <p>Our location</p>
                <span className="font-medium">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;