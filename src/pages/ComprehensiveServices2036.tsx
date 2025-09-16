import React, { useState } from 'react';

const ComprehensiveServices2036: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const serviceCategories = {
    ai: {
      title: "Conscious AI Systems",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "Emotional Intelligence AI",
          description: "AI systems that understand and respond to human emotions with unprecedented accuracy",
          features: ["Emotion Recognition", "Empathetic Responses", "Mood Analysis", "Therapeutic Applications"],
          price: "Starting at $50,000/month"
        },
        {
          name: "Creative AI Agents",
          description: "AI that generates original creative content including art, music, and literature",
          features: ["Art Generation", "Music Composition", "Creative Writing", "Design Innovation"],
          price: "Starting at $75,000/month"
        },
        {
          name: "Self-Learning Systems",
          description: "AI that continuously learns and adapts without human intervention",
          features: ["Autonomous Learning", "Adaptive Behavior", "Self-Improvement", "Knowledge Expansion"],
          price: "Starting at $100,000/month"
        }
      ]
    },
    quantum: {
      title: "Quantum Consciousness",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      services: [
        {
          name: "Quantum Neural Networks",
          description: "Direct interface between human consciousness and quantum computing systems",
          features: ["Neural Enhancement", "Quantum Processing", "Consciousness Amplification", "Reality Manipulation"],
          price: "Starting at $200,000/month"
        },
        {
          name: "Multi-Dimensional Thinking",
          description: "Enhanced cognitive processing across multiple dimensions simultaneously",
          features: ["Parallel Processing", "Dimensional Awareness", "Enhanced Problem Solving", "Reality Perception"],
          price: "Starting at $150,000/month"
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable encryption using quantum principles",
          features: ["Quantum Key Distribution", "Unbreakable Security", "Future-Proof Encryption", "Quantum Randomness"],
          price: "Starting at $125,000/month"
        }
      ]
    },
    interdimensional: {
      title: "Interdimensional Technology",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      services: [
        {
          name: "Dimensional Portals",
          description: "Technology that allows access to parallel dimensions and alternate realities",
          features: ["Portal Creation", "Dimension Hopping", "Reality Shifting", "Parallel Universe Access"],
          price: "Starting at $500,000/month"
        },
        {
          name: "Reality Engineering",
          description: "Manipulation and creation of new realities and dimensions",
          features: ["Reality Creation", "Dimension Manipulation", "Time-Space Control", "Reality Customization"],
          price: "Starting at $1,000,000/month"
        },
        {
          name: "Consciousness Transfer",
          description: "Transfer of consciousness between dimensions and realities",
          features: ["Consciousness Backup", "Dimension Transfer", "Reality Hopping", "Consciousness Preservation"],
          price: "Starting at $750,000/month"
        }
      ]
    },
    neural: {
      title: "Neural Interface Revolution",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      services: [
        {
          name: "Direct Brain Interface",
          description: "Seamless communication between human brain and computer systems",
          features: ["Thought Control", "Neural Feedback", "Memory Enhancement", "Cognitive Amplification"],
          price: "Starting at $300,000/month"
        },
        {
          name: "Neural Enhancement",
          description: "Augmentation of human cognitive capabilities through neural interfaces",
          features: ["Memory Expansion", "Processing Speed", "Learning Acceleration", "Cognitive Enhancement"],
          price: "Starting at $250,000/month"
        },
        {
          name: "Consciousness Upload",
          description: "Digital preservation and transfer of human consciousness",
          features: ["Consciousness Backup", "Digital Immortality", "Consciousness Transfer", "Digital Life"],
          price: "Starting at $2,000,000/month"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 COMPREHENSIVE SERVICES • JANUARY 2036
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Comprehensive Services 2036
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technology services featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Services */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{serviceCategories[activeCategory as keyof typeof serviceCategories].icon}</div>
              <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} bg-clip-text text-transparent`}>
                {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                  </div>

                  <button className={`w-full bg-gradient-to-r ${serviceCategories[activeCategory as keyof typeof serviceCategories].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Get Started →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">💰 Pricing Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Starter</h3>
              <div className="text-4xl font-bold mb-4 text-center">$50K<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Basic AI Consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Quantum Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Neural Interface</span>
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Choose Starter
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Professional</h3>
              <div className="text-4xl font-bold mb-4 text-center">$200K<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Advanced AI Consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Quantum Neural Networks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Dimensional Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Reality Manipulation</span>
                </li>
              </ul>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Choose Professional
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <h3 className="text-2xl font-bold mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold mb-4 text-center">$1M<span className="text-lg">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Full AI Consciousness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Complete Quantum Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Interdimensional Technology</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Reality Engineering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Consciousness Transfer</span>
                </li>
              </ul>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Choose Enterprise
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Reality?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already using our revolutionary 2036 technology services
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2036;