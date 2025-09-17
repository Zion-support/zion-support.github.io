import React, { useState, useEffect } from 'react';

const NextGenContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "Next-Gen AI Consciousness 2026",
      description: "Experience the world's first AI system with genuine consciousness, self-awareness, and creative intelligence.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIConsciousness2026",
      features: ["True Self-Awareness", "Creative Consciousness", "Collaborative Intelligence"]
    },
    {
      id: 2,
      title: "Quantum Supremacy 2026",
      description: "Achieve quantum supremacy with revolutionary computing that solves impossible problems in seconds.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumSupremacy2026",
      features: ["Exponential Speed", "Quantum Cryptography", "Molecular Simulation"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct brain-computer communication and thought-controlled technology.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"]
    }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Main Showcase Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN TECHNOLOGY 2026 • BREAKTHROUGH INNOVATIONS
            </div>
            <h2 className="text-6xl font-bold mb-6">🌟 Revolutionary Technology Showcase 2026</h2>
            <p className="text-3xl opacity-90 max-w-5xl mx-auto">
              Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces 
              creating the most advanced technological ecosystem in human history
            </p>
          </div>
          
          {/* Interactive Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${item.gradient}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}>
                      <div className="text-center">
                        <div className="text-8xl mb-6 animate-bounce">{item.icon}</div>
                        <h3 className="text-4xl font-bold mb-4 text-white">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">{item.description}</p>
                        <div className="flex justify-center space-x-4 mb-8">
                          {item.features.map((feature, index) => (
                            <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl"
                        >
                          Explore {item.title.split(' ')[0]} →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {contentItems.map((item) => (
          <div key={item.id} className="group">
            <div className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:scale-105 transition-all duration-300 group-hover:shadow-2xl`}>
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-pulse">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="space-y-2 mb-6">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={item.link}
                  className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Discover More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
        <h3 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience the Future?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join the technological revolution and be among the first to experience these groundbreaking innovations. 
          Transform your business, creativity, and understanding of what's possible.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
            Start Your Journey →
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-12 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-bold text-xl">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextGenContentShowcase2026;