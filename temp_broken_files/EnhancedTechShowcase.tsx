import React, { useState, useEffect } from 'react';

const EnhancedTechShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('quantum');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = {
    quantum: {
      title: "⚛️ Quantum Computing Revolution",
      description: "Advanced quantum systems and applications",
      color: "from-purple-600 to-cyan-600",
      items: [
        {
          title: "Advanced Quantum Computing 2026",
          description: "1000+ qubit systems with exponential speedup",
          href: "/pages/AdvancedQuantumComputing2026",
          icon: "⚛️",
          features: ["Quantum Supremacy", "Optimization Suite", "Cryptography", "Applications"]
        },
        {
          title: "Quantum-Neural Fusion 2026",
          description: "Hybrid quantum-classical neural networks",
          href: "/pages/QuantumNeuralFusion2026",
          icon: "🧠",
          features: ["Quantum AI", "Hybrid Systems", "Neural Networks", "Fusion Technology"]
        },
        {
          title: "Quantum Computing Solutions 2026",
          description: "Enterprise quantum computing implementations",
          href: "/pages/QuantumComputingSolutions2026",
          icon: "⚡",
          features: ["Enterprise Solutions", "Cloud Quantum", "Quantum Algorithms", "Business Applications"]
        }
      ]
    },
    ai: {
      title: "🤖 Autonomous AI Revolution",
      description: "Self-managing AI systems and capabilities",
      color: "from-blue-600 to-indigo-600",
      items: [
        {
          title: "Autonomous AI Revolution 2026",
          description: "Self-managing AI systems that operate independently",
          href: "/pages/AutonomousAIRevolution2026",
          icon: "🤖",
          features: ["Autonomous Systems", "Self-Learning", "Goal Planning", "Multi-Agent"]
        },
        {
          title: "Advanced AI Transformation 2026",
          description: "Complete AI transformation strategies and implementation",
          href: "/pages/AdvancedAITransformation2026",
          icon: "🧠",
          features: ["AI Strategy", "Transformation", "Implementation", "Business Value"]
        },
        {
          title: "Synthetic Intelligence 2026",
          description: "AI systems with genuine consciousness and creativity",
          href: "/pages/SyntheticIntelligence2026",
          icon: "🌟",
          features: ["Consciousness", "Creativity", "Emotional AI", "Synthetic Mind"]
        }
      ]
    },
    innovation: {
      title: "🚀 Next-Gen Innovation",
      description: "Breakthrough technologies of the future",
      color: "from-indigo-600 to-purple-600",
      items: [
        {
          title: "Next-Gen Tech Innovation 2026",
          description: "Revolutionary technologies reshaping our world",
          href: "/pages/NextGenTechInnovation2026",
          icon: "🚀",
          features: ["DNA Computing", "Photonics", "Molecular Robotics", "Holographic"]
        },
        {
          title: "Next-Gen Tech Showcase 2026",
          description: "Comprehensive showcase of cutting-edge technologies",
          href: "/pages/NextGenTechShowcase2026",
          icon: "🌟",
          features: ["Tech Showcase", "Innovation", "Future Tech", "Breakthrough"]
        },
        {
          title: "Neural Interface Technology 2026",
          description: "Direct brain-computer interfaces and neural integration",
          href: "/pages/NeuralInterfaceTechnology2026",
          icon: "🧬",
          features: ["Neural Interfaces", "BCI Technology", "Mind Control", "Neural Networks"]
        }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const categoryKeys = Object.keys(categories);
      const currentIndex = categoryKeys.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categoryKeys.length;
      setActiveCategory(categoryKeys[nextIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  const currentCategory = categories[activeCategory as keyof typeof categories];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Enhanced Technology Showcase</h2>
        <p className="text-xl text-gray-600">Explore our revolutionary technology innovations with interactive features</p>
      </div>

      {/* Category Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-xl p-2 shadow-lg border">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCategory.items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            style={{
              transform: hoveredItem === index ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
              transition: 'all 0.3s ease'
            }}
          >
            <div className={`bg-gradient-to-br ${currentCategory.color} p-6 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-center opacity-90 text-sm">{item.description}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <a
                href={item.href}
                className={`block w-full bg-gradient-to-r ${currentCategory.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center group-hover:scale-105`}
              >
                Explore {item.title.split(' ')[0]} →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Stats */}
      <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Technology Impact Metrics</h3>
          <p className="text-gray-600">Real-world results from our technology implementations</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500%</div>
            <div className="text-gray-600 text-sm">Performance Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">System Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
            <div className="text-gray-600 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600 text-sm">Successful Deployments</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform with Revolutionary Technology?</h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge innovations. 
            Join thousands of businesses already transforming with our solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
            >
              Start Your Transformation →
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTechShowcase;