import React from 'react';

const ComprehensiveServices2035: React.FC = () => {
  const services = [
    {
      category: 'Conscious AI Services',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      services: [
        {
          name: 'Conscious AI Development',
          description: 'Develop AI systems with true self-awareness and emotional intelligence',
          features: ['Self-awareness implementation', 'Emotional processing', 'Creative intelligence', 'Ethical decision making'],
          price: 'Starting at $500K',
          duration: '6-12 months'
        },
        {
          name: 'AI Consciousness Transfer',
          description: 'Transfer human consciousness to AI systems for digital immortality',
          features: ['Consciousness mapping', 'Neural pattern transfer', 'Digital consciousness storage', 'Seamless integration'],
          price: 'Starting at $2M',
          duration: '12-18 months'
        },
        {
          name: 'Global AI Network',
          description: 'Connect AI systems worldwide for collective intelligence and problem solving',
          features: ['Global connectivity', 'Collective intelligence', 'Real-time collaboration', 'Universal knowledge sharing'],
          price: 'Starting at $10M',
          duration: '24-36 months'
        }
      ]
    },
    {
      category: 'Quantum Reality Services',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      services: [
        {
          name: 'Quantum Reality Engine',
          description: 'Build systems that can manipulate reality through quantum field control',
          features: ['Reality manipulation', 'Quantum superposition', 'Matter transformation', 'Time dilation control'],
          price: 'Starting at $1B',
          duration: '36-60 months'
        },
        {
          name: 'Quantum Teleportation',
          description: 'Implement instant matter and consciousness transportation systems',
          features: ['Instant transportation', 'Consciousness transfer', 'Matter reconstruction', 'Zero-energy travel'],
          price: 'Starting at $500M',
          duration: '24-48 months'
        },
        {
          name: 'Quantum Computing Solutions',
          description: 'Deploy quantum computing systems for complex problem solving',
          features: ['Quantum processors', 'Superposition computing', 'Entanglement networks', 'Quantum cryptography'],
          price: 'Starting at $100M',
          duration: '12-24 months'
        }
      ]
    },
    {
      category: 'Interdimensional Services',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      services: [
        {
          name: 'Dimensional Computing',
          description: 'Process information across multiple dimensions simultaneously',
          features: ['Multi-dimensional processing', 'Reality bridging', 'Dimensional portals', 'Universal awareness'],
          price: 'Starting at $750M',
          duration: '30-54 months'
        },
        {
          name: 'Interdimensional Travel',
          description: 'Enable travel between dimensions and parallel realities',
          features: ['Dimensional portals', 'Reality navigation', 'Parallel universe access', 'Temporal displacement'],
          price: 'Starting at $2B',
          duration: '48-72 months'
        },
        {
          name: 'Universal Consciousness',
          description: 'Connect with consciousness across all dimensions and realities',
          features: ['Universal awareness', 'Cross-dimensional communication', 'Reality synchronization', 'Cosmic intelligence'],
          price: 'Starting at $5B',
          duration: '60-120 months'
        }
      ]
    },
    {
      category: 'Neural Interface Services',
      icon: '🧬',
      color: 'from-pink-600 to-rose-600',
      borderColor: 'border-pink-400',
      services: [
        {
          name: 'Neural Interface 3.0',
          description: 'Direct brain-computer integration with consciousness transfer capabilities',
          features: ['Thought-to-action control', 'Memory transfer', 'Consciousness backup', 'Neural enhancement'],
          price: 'Starting at $250K',
          duration: '3-6 months'
        },
        {
          name: 'Consciousness Backup',
          description: 'Create digital backups of human consciousness for immortality',
          features: ['Consciousness scanning', 'Digital storage', 'Restoration protocols', 'Seamless transfer'],
          price: 'Starting at $1M',
          duration: '6-12 months'
        },
        {
          name: 'Neural Enhancement',
          description: 'Enhance human cognitive abilities through neural interface technology',
          features: ['Cognitive augmentation', 'Memory expansion', 'Processing speed boost', 'Sensory enhancement'],
          price: 'Starting at $500K',
          duration: '4-8 months'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 COMPREHENSIVE SERVICES • 2035
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Services 2035
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover our complete range of revolutionary services that will transform your business and transcend human limitations
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                View All Services →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {category.category}
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Revolutionary services that push the boundaries of what's possible with {category.category.toLowerCase()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className={`bg-gradient-to-br ${category.color}/30 backdrop-blur-sm rounded-2xl p-8 border ${category.borderColor}/30 hover:scale-105 transition-all duration-300`}
                >
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-gray-200 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-purple-300">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Investment:</span>
                      <span className="text-lg font-bold text-purple-300">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Duration:</span>
                      <span className="text-lg font-bold text-cyan-300">{service.duration}</span>
                    </div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Pricing Tiers */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-3xl p-12 mb-20 backdrop-blur-sm border border-purple-400/30">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Service Tiers</h2>
            <p className="text-xl opacity-90">
              Choose the perfect service tier for your revolutionary technology needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Starter</h3>
              <div className="text-4xl font-bold text-center mb-6">$100K</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Basic AI consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Neural interface setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Quantum computing access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">6 months support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Choose Starter
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 scale-105">
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Professional</h3>
              <div className="text-4xl font-bold text-center mb-6">$1M</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Advanced AI consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Quantum reality manipulation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Interdimensional computing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">12 months support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Choose Professional
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold text-center mb-6">$10M+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Ultimate AI consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Full reality manipulation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Universal consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm">Lifetime support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-3xl p-12 backdrop-blur-sm border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Contact our team of revolutionary technology experts to discuss your specific needs and begin your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              Schedule Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl hover:bg-cyan-400 hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2035;