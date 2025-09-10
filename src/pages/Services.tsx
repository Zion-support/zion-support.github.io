import React from 'react';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      title: "AI-Powered Solutions",
      description: "Revolutionary artificial intelligence services that automate complex business processes and drive innovation.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      icon: "🤖"
    },
    {
      title: "Micro SaaS Services",
      description: "Scalable, focused software solutions designed to grow with your business and adapt to changing needs.",
      features: ["Cloud Infrastructure", "API Development", "User Management", "Payment Processing"],
      icon: "☁️"
    },
    {
      title: "Enterprise IT Solutions",
      description: "Comprehensive IT infrastructure and management services for large-scale enterprise environments.",
      features: ["System Integration", "Security Management", "Data Migration", "24/7 Support"],
      icon: "🏢"
    },
    {
      title: "Blockchain & Web3",
      description: "Cutting-edge blockchain technology solutions for decentralized applications and digital assets.",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Crypto Integration"],
      icon: "⛓️"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Simulation"],
      icon: "⚛️"
    },
    {
      title: "IoT & Edge Computing",
      description: "Internet of Things and edge computing solutions for connected devices and real-time processing.",
      features: ["Device Management", "Real-time Analytics", "Edge AI", "Sensor Networks"],
      icon: "🌐"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive technology services including AI solutions, micro SaaS, enterprise IT, blockchain, quantum computing, and IoT solutions."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <svg className="w-4 h-4 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact our team to discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Request Quote
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}