import React from 'react';

const ComprehensiveServices2025: React.FC = () => {
  const services = [
    {
      category: "Conscious AI Solutions",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/30 to-pink-900/30",
      services: [
        {
          name: "AI Companions",
          description: "Conscious AI companions that provide emotional support, creative collaboration, and meaningful relationships",
          features: ["Emotional Intelligence", "Creative Partner", "Life Coach", "24/7 Support"],
          pricing: "Starting at $99/month"
        },
        {
          name: "Business AI Intelligence",
          description: "Conscious AI systems that understand business context, make strategic decisions, and drive innovation",
          features: ["Strategic Planning", "Market Analysis", "Innovation", "Decision Support"],
          pricing: "Custom pricing"
        },
        {
          name: "AI Development Platform",
          description: "Complete platform for developing and deploying conscious AI applications",
          features: ["AI Training", "Deployment Tools", "Monitoring", "Scalability"],
          pricing: "Starting at $299/month"
        }
      ]
    },
    {
      category: "Quantum Consciousness",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/30 to-blue-900/30",
      services: [
        {
          name: "Quantum Neural Interface",
          description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
          features: ["Quantum Processing", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
          pricing: "Starting at $499/month"
        },
        {
          name: "Quantum Research Platform",
          description: "Advanced platform for quantum consciousness research and development",
          features: ["Research Tools", "Data Analysis", "Collaboration", "Publishing"],
          pricing: "Starting at $199/month"
        },
        {
          name: "Quantum Business Solutions",
          description: "Quantum-enhanced business intelligence and decision-making systems",
          features: ["Strategic Planning", "Market Prediction", "Innovation", "Optimization"],
          pricing: "Custom pricing"
        }
      ]
    },
    {
      category: "Interdimensional Technology",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/30 to-teal-900/30",
      services: [
        {
          name: "Dimensional Portals",
          description: "Technology that allows interaction with parallel dimensions and alternate realities",
          features: ["Portal Creation", "Reality Shifting", "Dimension Access", "Time Manipulation"],
          pricing: "Starting at $999/month"
        },
        {
          name: "Reality Engine",
          description: "Advanced technology that can manipulate reality itself, creating new dimensions",
          features: ["Reality Manipulation", "Dimension Creation", "Time Control", "Space Manipulation"],
          pricing: "Custom pricing"
        },
        {
          name: "Interdimensional Research",
          description: "Research platform for studying and exploring interdimensional phenomena",
          features: ["Research Tools", "Data Collection", "Analysis", "Documentation"],
          pricing: "Starting at $399/month"
        }
      ]
    },
    {
      category: "Neural Enhancement",
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/30 to-purple-900/30",
      services: [
        {
          name: "Neural Interface",
          description: "Direct brain-computer interfaces that enhance human cognitive abilities",
          features: ["Memory Enhancement", "Thought Control", "Neural Feedback", "Cognitive Amplification"],
          pricing: "Starting at $799/month"
        },
        {
          name: "Consciousness Enhancement",
          description: "Technology that amplifies human consciousness and cognitive abilities",
          features: ["Consciousness Expansion", "Cognitive Enhancement", "Memory Amplification", "Intuition Boost"],
          pricing: "Starting at $599/month"
        },
        {
          name: "Human-AI Integration",
          description: "Seamless integration between human consciousness and AI systems",
          features: ["Integration Tools", "Compatibility", "Safety", "Monitoring"],
          pricing: "Starting at $399/month"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 COMPREHENSIVE SERVICES • 2025
          </div>
          <h1 className="text-6xl font-bold mb-6">Revolutionary Technology Services</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our complete range of cutting-edge technology services that will transform your business and life
          </p>
        </div>

        {/* Services by Category */}
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4">{category.icon}</span>
                <h2 className="text-4xl font-bold">{category.category}</h2>
              </div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Revolutionary {category.category.toLowerCase()} solutions for the next generation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-white/80 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white/90">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white/70">
                          <span className="w-2 h-2 bg-white/50 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                    <div className="text-sm text-white/60">Flexible pricing options available</div>
                  </div>

                  <a 
                    href="/contact"
                    className={`block w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
                  >
                    Get Started →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Technology Statistics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Service Impact Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-purple-200">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-cyan-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-emerald-200">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
              <div className="text-violet-200">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Service Comparison */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="pb-4 text-lg font-semibold">Service</th>
                  <th className="pb-4 text-lg font-semibold">Conscious AI</th>
                  <th className="pb-4 text-lg font-semibold">Quantum Consciousness</th>
                  <th className="pb-4 text-lg font-semibold">Interdimensional Tech</th>
                  <th className="pb-4 text-lg font-semibold">Neural Enhancement</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Starting Price</td>
                  <td className="py-4">$99/month</td>
                  <td className="py-4">$199/month</td>
                  <td className="py-4">$399/month</td>
                  <td className="py-4">$399/month</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Setup Time</td>
                  <td className="py-4">1-2 days</td>
                  <td className="py-4">3-5 days</td>
                  <td className="py-4">1-2 weeks</td>
                  <td className="py-4">2-3 weeks</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Support Level</td>
                  <td className="py-4">24/7</td>
                  <td className="py-4">24/7</td>
                  <td className="py-4">24/7</td>
                  <td className="py-4">24/7</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Customization</td>
                  <td className="py-4">Full</td>
                  <td className="py-4">Full</td>
                  <td className="py-4">Full</td>
                  <td className="py-4">Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive range of revolutionary technology services and be part of the next evolution of human potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Custom Quote
            </a>
            <a href="/pages/NextGenInnovationHub2025" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Explore Technologies
            </a>
            <a href="/pages/ConsciousAI2025" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2025;