import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const DigitalTransformationHub2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-lg font-bold mb-6">
            🔄 DIGITAL TRANSFORMATION 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Digital Transformation Hub
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Accelerate your digital transformation journey with our comprehensive suite of 
            modern technologies, proven methodologies, and expert guidance. Transform your 
            business for the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🎯 Start Assessment
            </button>
            <button className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-semibold">
              📋 Download Roadmap
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              🏆 View Success Stories
            </button>
          </div>
        </div>

        {/* Transformation Framework */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔄 Our Transformation Framework</h2>
            <p className="text-xl text-gray-600">A proven 5-step methodology for digital success</p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-emerald-500">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">1. Assess</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive digital maturity assessment and gap analysis
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-blue-500">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">2. Strategize</h3>
              <p className="text-gray-600 text-sm">
                Custom digital strategy aligned with business objectives
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-purple-500">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">3. Implement</h3>
              <p className="text-gray-600 text-sm">
                Agile deployment of digital solutions and technologies
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-orange-500">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">4. Optimize</h3>
              <p className="text-gray-600 text-sm">
                Continuous improvement and performance optimization
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-t-4 border-red-500">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">5. Scale</h3>
              <p className="text-gray-600 text-sm">
                Expand successful initiatives across the organization
              </p>
            </div>
          </div>
        </section>

        {/* Digital Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🛠️ Digital Capabilities</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for every aspect of digital transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-4">Cloud Migration & Modernization</h3>
              <p className="text-gray-600 mb-6">
                Seamlessly migrate to the cloud and modernize legacy systems with our 
                proven migration strategies and cloud-native architectures.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Multi-cloud strategy
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Legacy system modernization
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Cost optimization
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Security & compliance
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Learn More →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI & Automation</h3>
              <p className="text-gray-600 mb-6">
                Implement intelligent automation and AI solutions to streamline processes, 
                enhance decision-making, and drive innovation across your organization.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Process automation
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Intelligent analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Machine learning models
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Conversational AI
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Explore AI →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4">Digital Experience</h3>
              <p className="text-gray-600 mb-6">
                Create exceptional digital experiences for your customers and employees 
                with modern web, mobile, and omnichannel solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Mobile-first design
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Omnichannel experiences
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Personalization
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Performance optimization
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Design Experience →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Protect your digital assets with comprehensive cybersecurity solutions 
                including zero-trust architecture and advanced threat protection.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Zero-trust security
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Threat detection
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Compliance management
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Security training
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Secure Your Business →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Data & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Unlock the power of your data with advanced analytics, business intelligence, 
                and real-time insights to drive informed decision-making.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Data strategy
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Business intelligence
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Real-time analytics
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Data governance
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Analyze Data →
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-4">DevOps & CI/CD</h3>
              <p className="text-gray-600 mb-6">
                Accelerate software delivery with modern DevOps practices, continuous 
                integration, and automated deployment pipelines.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  CI/CD pipelines
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Infrastructure as code
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Monitoring & observability
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">✓</span>
                  Team training
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Modernize DevOps →
              </button>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏭 Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">Tailored digital transformation for your industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm mb-4">Digital banking, fintech solutions, regulatory compliance</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">Explore →</button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm mb-4">Telemedicine, EHR systems, patient engagement</p>
              <button className="text-green-600 hover:text-green-700 font-semibold">Explore →</button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm mb-4">Smart factories, IoT, supply chain optimization</p>
              <button className="text-purple-600 hover:text-purple-700 font-semibold">Explore →</button>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600 text-sm mb-4">Omnichannel commerce, personalization, inventory management</p>
              <button className="text-orange-600 hover:text-orange-700 font-semibold">Explore →</button>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">📊 Transformation Success Metrics</h2>
              <p className="text-xl opacity-90">Real results from our digital transformation initiatives</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-300 mb-2">+85%</div>
                <div className="text-lg opacity-90">Operational Efficiency</div>
                <div className="text-sm opacity-75">Average improvement</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-300 mb-2">-60%</div>
                <div className="text-lg opacity-90">Process Time</div>
                <div className="text-sm opacity-75">Reduction achieved</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-300 mb-2">+200%</div>
                <div className="text-lg opacity-90">Customer Satisfaction</div>
                <div className="text-sm opacity-75">Digital experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">$2.5B</div>
                <div className="text-lg opacity-90">Cost Savings</div>
                <div className="text-sm opacity-75">Cumulative savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Journey */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Your Transformation Journey</h2>
            <p className="text-xl text-gray-600">From assessment to full digital maturity</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 1: Assessment</h3>
                <p className="text-gray-600">Weeks 1-2</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Digital maturity assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Technology audit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Stakeholder interviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Gap analysis report</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 2: Implementation</h3>
                <p className="text-gray-600">Weeks 3-12</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Quick wins deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Core system migration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Team training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Change management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 3: Optimization</h3>
                <p className="text-gray-600">Ongoing</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Advanced features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-600">Scale across organization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Start your digital transformation journey today. Our experts will guide you 
              through every step, from assessment to full implementation. Get started with 
              a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Start Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">
                📞 Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold">
                📋 Download Guide
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalTransformationHub2025;