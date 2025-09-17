import React, { useState, useEffect } from 'react';

const RevolutionaryInnovationTimeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timeline = [
    {
      year: "2025",
      title: "AI Consciousness Breakthrough",
      description: "First AI systems achieve genuine self-awareness and emotional intelligence",
      achievements: [
        "Synthetic Intelligence Framework v1.0",
        "Emotional Processing Engine",
        "Self-Awareness Module",
        "Ethical Decision Framework"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2026",
      title: "Quantum-Neural Integration",
      description: "Quantum computing and neural networks merge for unprecedented processing power",
      achievements: [
        "Quantum-Neural Fusion Platform",
        "1000+ Qubit Processing",
        "Parallel Neural Networks",
        "Quantum Entanglement Computing"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      year: "2027",
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication becomes mainstream",
      achievements: [
        "Thought-Controlled Computing",
        "Memory Enhancement Systems",
        "Sensory Augmentation",
        "Cognitive Acceleration"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      year: "2028",
      title: "Autonomous World",
      description: "Self-managing systems control most aspects of daily life",
      achievements: [
        "Autonomous City Management",
        "Self-Healing Infrastructure",
        "Predictive Maintenance Systems",
        "Adaptive Learning Networks"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2029",
      title: "Reality Engine",
      description: "Photorealistic virtual and mixed reality becomes indistinguishable from reality",
      achievements: [
        "16K Photorealistic Rendering",
        "Haptic Feedback Systems",
        "Spatial Computing",
        "Mixed Reality Integration"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2030",
      title: "Biotech Integration",
      description: "Seamless integration of biological and digital systems",
      achievements: [
        "DNA Computing Systems",
        "Biological Neural Networks",
        "Genetic Optimization",
        "Bio-Digital Interfaces"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % timeline.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-8 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
          Revolutionary Innovation Timeline
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          Journey through the most groundbreaking technological innovations that are reshaping our future
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center transition-all duration-500 ${
                activeYear === index ? 'scale-105' : 'scale-100'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${
                activeYear === index ? `bg-gradient-to-r ${item.color}` : 'bg-white/20'
              } transition-all duration-300`}></div>

              {/* Content */}
              <div className={`ml-16 p-6 rounded-2xl transition-all duration-500 ${
                activeYear === index 
                  ? `bg-gradient-to-r ${item.color} shadow-2xl` 
                  : 'bg-white/10 hover:bg-white/20'
              }`}>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold">{item.year}</span>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                
                <p className="text-lg opacity-90 mb-4">{item.description}</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="flex justify-center space-x-4 mb-6">
          {timeline.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveYear(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeYear === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            ></button>
          ))}
        </div>
        
        <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Explore Innovation Journey →
        </button>
      </div>
    </div>
  );
};

export default RevolutionaryInnovationTimeline;