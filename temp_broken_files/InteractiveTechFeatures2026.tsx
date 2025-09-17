import React, { useState, useEffect } from 'react';

const InteractiveTechFeatures2026: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    projects: 0,
    success: 0,
    innovation: 0
  });

  const features = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictions",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      stats: "99.9% Accuracy"
    },
    {
      id: 2,
      title: "Quantum Computing",
      description: "Exponential processing power",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      stats: "10,000x Faster"
    },
    {
      id: 3,
      title: "Neural Interfaces",
      description: "Direct brain-computer connection",
      icon: "🧠",
      color: "from-green-500 to-emerald-500",
      stats: "Zero Latency"
    },
    {
      id: 4,
      title: "Holographic Displays",
      description: "Immersive 3D experiences",
      icon: "🌈",
      color: "from-orange-500 to-red-500",
      stats: "8K Resolution"
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        users: 50000,
        projects: 1000,
        success: 99,
        innovation: 2026
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH FEATURES • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">Experience the Future</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Interact with cutting-edge technology features that are reshaping our digital world
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer ${
                hoveredFeature === feature.id ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="text-center">
                <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  hoveredFeature === feature.id ? 'animate-bounce' : ''
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm opacity-80 mb-4">{feature.description}</p>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} rounded-full text-xs font-semibold`}>
                  {feature.stats}
                </div>
              </div>
              
              {/* Hover Effect */}
              {hoveredFeature === feature.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Animated Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-blue-400">
              {animatedStats.users.toLocaleString()}+
            </div>
            <div className="text-lg opacity-90">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-purple-400">
              {animatedStats.projects.toLocaleString()}+
            </div>
            <div className="text-lg opacity-90">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-green-400">
              {animatedStats.success}%
            </div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-cyan-400">
              {animatedStats.innovation}
            </div>
            <div className="text-lg opacity-90">Innovation Year</div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Try Our Interactive Demo</h3>
            <p className="text-lg opacity-90">
              Experience our technology firsthand with our interactive demonstration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <button className="group bg-white/10 hover:bg-white/20 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:animate-spin">🎮</div>
              <h4 className="text-lg font-bold mb-2">Interactive Demo</h4>
              <p className="text-sm opacity-80">Experience our technology</p>
            </button>
            
            <button className="group bg-white/10 hover:bg-white/20 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:animate-pulse">📱</div>
              <h4 className="text-lg font-bold mb-2">Mobile App</h4>
              <p className="text-sm opacity-80">Download our mobile app</p>
            </button>
            
            <button className="group bg-white/10 hover:bg-white/20 rounded-xl p-6 border border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 group-hover:animate-bounce">💻</div>
              <h4 className="text-lg font-bold mb-2">Web Platform</h4>
              <p className="text-sm opacity-80">Access our web platform</p>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105">
            Start Your Interactive Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechFeatures2026;