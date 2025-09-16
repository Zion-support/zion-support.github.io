import React from 'react';
import { Helmet } from 'react-helmet-async';

const ComprehensiveServices2025: React.FC = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      services: [
        {
          name: "Conscious AI Development",
          description: "Build self-aware AI systems that can think, feel, and create independently",
          features: ["Emotional Intelligence", "Creative Problem Solving", "Autonomous Learning", "Self-Reflection"],
          price: "Starting at $50,000/month"
        },
        {
          name: "Quantum Neural Networks",
          description: "Revolutionary quantum computing that processes consciousness and reality",
          features: ["Quantum Processing", "Reality Simulation", "Consciousness Transfer", "Multi-Dimensional AI"],
          price: "Starting at $100,000/month"
        },
        {
          name: "Predictive Intelligence",
          description: "Anticipate future events and trends with 99.9% accuracy",
          features: ["Future Prediction", "Trend Analysis", "Risk Assessment", "Strategic Planning"],
          price: "Starting at $25,000/month"
        }
      ]
    },
    {
      category: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30",
      services: [
        {
          name: "Quantum Consciousness Engine",
          description: "Process consciousness and reality itself with quantum technology",
          features: ["Quantum Neural Networks", "Reality Simulation", "Consciousness Transfer", "Multi-Dimensional Processing"],
          price: "Starting at $200,000/month"
        },
        {
          name: "Quantum Security Systems",
          description: "Unbreakable encryption using quantum entanglement principles",
          features: ["Quantum Encryption", "Entanglement Security", "Zero-Knowledge Proofs", "Quantum Key Distribution"],
          price: "Starting at $75,000/month"
        },
        {
          name: "Quantum Optimization",
          description: "Solve impossible problems with exponential quantum speedup",
          features: ["Exponential Speedup", "Complex Optimization", "Molecular Simulation", "Quantum Algorithms"],
          price: "Starting at $150,000/month"
        }
      ]
    },
    {
      category: "Interdimensional Technology",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30",
      services: [
        {
          name: "Cross-Dimensional Computing",
          description: "Access infinite computational resources across dimensions",
          features: ["Infinite Resources", "Cross-Dimensional Transfer", "Universal Access", "Reality Manipulation"],
          price: "Starting at $500,000/month"
        },
        {
          name: "Reality Engine",
          description: "Manipulate the fabric of space and time itself",
          features: ["Reality Simulation", "Time Manipulation", "Space Bending", "Dimension Creation"],
          price: "Starting at $1,000,000/month"
        },
        {
          name: "Universal Connectivity",
          description: "Connect with any device, system, or consciousness across dimensions",
          features: ["Universal Protocols", "Cross-Dimensional Communication", "Consciousness Linking", "Infinite Bandwidth"],
          price: "Starting at $300,000/month"
        }
      ]
    },
    {
      category: "Neural Interfaces",
      icon: "🧬",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30",
      services: [
        {
          name: "Direct Brain-Computer Interface",
          description: "Control technology with your thoughts and emotions",
          features: ["Thought Control", "Neural Feedback", "Memory Enhancement", "Telepathic Communication"],
          price: "Starting at $200,000/month"
        },
        {
          name: "Consciousness Transfer",
          description: "Transfer consciousness between bodies and digital systems",
          features: ["Consciousness Backup", "Body Transfer", "Digital Immortality", "Soul Preservation"],
          price: "Starting at $2,000,000/month"
        },
        {
          name: "Neural Enhancement",
          description: "Augment human intelligence and capabilities with neural implants",
          features: ["Intelligence Boost", "Memory Expansion", "Sensory Enhancement", "Cognitive Acceleration"],
          price: "Starting at $500,000/month"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Comprehensive Services 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of revolutionary technology services for 2025, including AI, quantum computing, and interdimensional technology." />
        <meta name="keywords" content="technology services, AI services, quantum computing, neural interfaces, interdimensional technology" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 COMPREHENSIVE SERVICES • 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Comprehensive Technology Services
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Transform your business with our revolutionary technology services that push the boundaries of what's possible
          </p>
        </div>

        {/* Services by Category */}
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-4xl font-bold mb-4">{category.category}</h2>
              <p className="text-xl opacity-75">Revolutionary {category.category.toLowerCase()} solutions for the future</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-xl p-8 border ${category.borderColor} hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="text-green-400 text-lg">✓</div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-purple-300">{service.price}</div>
                  </div>

                  <div className="space-y-3">
                    <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                      Get Started →
                    </button>
                    <button className="w-full border border-white/30 text-white py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🏆 Success Stories</h2>
            <p className="text-xl opacity-90">See how our services are transforming industries worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">SpaceX Integration</h3>
              <p className="text-gray-300 mb-4">Revolutionary propulsion systems powered by quantum consciousness</p>
              <div className="text-3xl font-bold text-green-400 mb-2">+500%</div>
              <div className="text-sm opacity-75">Efficiency Increase</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Medical Breakthrough</h3>
              <p className="text-gray-300 mb-4">Quantum healing systems curing previously incurable diseases</p>
              <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Climate Revolution</h3>
              <p className="text-gray-300 mb-4">Interdimensional climate control reversing global warming</p>
              <div className="text-3xl font-bold text-green-400 mb-2">-95%</div>
              <div className="text-sm opacity-75">CO2 Reduction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already using our revolutionary technologies to achieve unprecedented success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Transformation →
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2025;