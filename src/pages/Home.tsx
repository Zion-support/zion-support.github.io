
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6">
              🚀 Leading AI & Technology Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses thrive in the digital age 
              with cutting-edge AI, cloud computing, and cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
              <Link
                to="/revolutionary-services-2025"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Revolutionary Services 2025
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Trusted by 500+ Companies
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                24/7 Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                ISO 27001 Certified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your business forward and stay ahead of the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Machine learning, natural language processing, and computer vision solutions to automate and optimize your business processes.
              </p>
              <ul className="text-gray-400 text-sm mb-6 space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision Systems</li>
                <li>• Predictive Analytics</li>
              </ul>
              <Link
                to="/services/ai"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 inline-flex items-center"
              >
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
              <p className="text-gray-300 mb-6">
                Cloud migration, infrastructure automation, and DevOps practices to accelerate your development and deployment cycles.
              </p>
              <ul className="text-gray-400 text-sm mb-6 space-y-1">
                <li>• Cloud Migration & Strategy</li>
                <li>• Infrastructure as Code</li>
                <li>• CI/CD Pipeline Automation</li>
                <li>• Container Orchestration</li>
              </ul>
              <Link
                to="/services/cloud"
                className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300 inline-flex items-center"
              >
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions including threat detection, vulnerability assessment, and compliance frameworks.
              </p>
              <ul className="text-gray-400 text-sm mb-6 space-y-1">
                <li>• Threat Detection & Response</li>
                <li>• Vulnerability Assessment</li>
                <li>• Compliance & Governance</li>
                <li>• Security Architecture</li>
              </ul>
              <Link
                to="/services/cybersecurity"
                className="text-red-400 hover:text-red-300 font-medium transition-colors duration-300 inline-flex items-center"
              >
                Learn More 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-lg"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-green-400">1000+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-400">Uptime SLA</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We are a team of passionate technologists dedicated to helping businesses 
                navigate the complex landscape of modern technology. With years of experience 
                in AI, cloud computing, and digital transformation, we deliver solutions 
                that drive real business value.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission is to empower organizations with cutting-edge technology 
                solutions that enable growth, efficiency, and innovation in an ever-evolving digital world.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ISO 27001 & SOC 2 Type II Certified
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Microsoft Gold Partner & AWS Advanced Partner
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expert Team with 15+ Years Experience
                </div>
              </div>
              <Link
                to="/about"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">Z</span>
                  </div>
                  <p className="text-white/80 text-lg">Innovation • Excellence • Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="text-white font-semibold">John Smith</div>
                  <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Zion Tech Group transformed our infrastructure and helped us achieve 40% cost savings while improving performance."
              </p>
            </div>
            
            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CEO, InnovateLab</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Their AI solutions helped us automate 70% of our manual processes, saving us countless hours every week."
              </p>
            </div>
            
            <div className="bg-slate-700/30 p-6 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Mike Chen</div>
                  <div className="text-gray-400 text-sm">VP Engineering, DataFlow</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The cybersecurity implementation was seamless and gave us peace of mind with our sensitive data."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/careers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Join Our Team
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Free consultation • No commitment required • Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}
