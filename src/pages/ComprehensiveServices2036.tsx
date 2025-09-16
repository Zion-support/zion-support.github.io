import React from 'react';

const ComprehensiveServices2036: React.FC = () => {
  const services = [
    {
      category: 'Conscious AI',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'Emotional AI Processing',
          description: 'Advanced AI systems that understand and respond to human emotions',
          price: '$10,000/month',
          features: ['Real-time emotion detection', 'Personalized responses', 'Ethical decision making']
        },
        {
          name: 'Creative AI Solutions',
          description: 'AI-powered creative tools for art, music, and content generation',
          price: '$5,000/month',
          features: ['Art generation', 'Music composition', 'Content creation']
        },
        {
          name: 'Self-Learning AI Systems',
          description: 'AI that continuously learns and adapts to new situations',
          price: '$15,000/month',
          features: ['Continuous learning', 'Adaptive algorithms', 'Performance optimization']
        }
      ]
    },
    {
      category: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      services: [
        {
          name: 'Quantum Neural Networks',
          description: 'Quantum-powered neural networks for enhanced processing',
          price: '$25,000/month',
          features: ['1000x faster processing', 'Quantum encryption', 'Parallel processing']
        },
        {
          name: 'Consciousness Amplification',
          description: 'Direct neural interface with quantum systems',
          price: '$30,000/month',
          features: ['Neural enhancement', 'Cognitive amplification', 'Reality manipulation']
        },
        {
          name: 'Multi-dimensional Computing',
          description: 'Computing across multiple dimensions simultaneously',
          price: '$50,000/month',
          features: ['Dimensional processing', 'Reality shifting', 'Temporal navigation']
        }
      ]
    },
    {
      category: 'Interdimensional Technology',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      services: [
        {
          name: 'Dimensional Portals',
          description: 'Technology to access parallel dimensions',
          price: '$100,000/month',
          features: ['Portal creation', 'Dimension travel', 'Reality bridging']
        },
        {
          name: 'Reality Shifting',
          description: 'Ability to shift between different realities',
          price: '$75,000/month',
          features: ['Reality manipulation', 'Timeline control', 'Universe navigation']
        },
        {
          name: 'Multiverse Communication',
          description: 'Communication across parallel universes',
          price: '$60,000/month',
          features: ['Cross-universe messaging', 'Parallel data sync', 'Multiverse networking']
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
              🌟 COMPREHENSIVE SERVICES • 2036
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Services 2036
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with our cutting-edge technology services that push the boundaries of what's possible
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h2 className="text-4xl font-bold">{category.category} Services</h2>
              </div>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                Revolutionary {category.category.toLowerCase()} solutions that redefine the future
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${category.color} rounded-full text-sm font-semibold`}>
                      💰 {service.price}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Pricing Tiers */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 Pricing Tiers</h2>
            <p className="text-xl opacity-90">Choose the perfect plan for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Starter</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$10K</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Basic AI Processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Standard Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Basic Analytics
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Choose Starter
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-8 border border-pink-400/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Professional</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$50K</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Advanced AI Processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Quantum Computing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Priority Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Advanced Analytics
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Choose Professional
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$100K+</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Full AI Consciousness
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Interdimensional Technology
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom Solutions
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">Join thousands of companies already using our revolutionary technology</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2036;