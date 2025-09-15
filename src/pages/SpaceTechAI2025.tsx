import React from 'react';

const SpaceTechAI2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH SPACETECH • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6">🚀 SpaceTech AI 2025</h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Pioneering the next frontier of space exploration with AI-powered autonomous systems, interplanetary missions, and space-based technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#missions" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Explore Missions →
            </a>
            <a href="#technology" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              View Technology
            </a>
          </div>
        </div>
      </div>

      {/* Mission Overview */}
      <section id="missions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🛸 Revolutionary Space Missions</h2>
            <p className="text-xl text-gray-600">AI-powered autonomous space exploration and colonization initiatives</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-6 text-center">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Mars Colonization</h3>
              <p className="text-gray-600 mb-6 text-center">
                AI-driven autonomous systems for Mars habitat construction, resource extraction, and sustainable living
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Autonomous construction robots</li>
                <li>• AI-powered life support systems</li>
                <li>• Resource extraction algorithms</li>
                <li>• Weather prediction and adaptation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-6 text-center">🛰️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Deep Space Exploration</h3>
              <p className="text-gray-600 mb-6 text-center">
                AI-powered spacecraft navigating to distant planets, asteroids, and exoplanets with autonomous decision-making
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Autonomous navigation systems</li>
                <li>• Real-time mission adaptation</li>
                <li>• Scientific data analysis</li>
                <li>• Emergency response protocols</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-6 text-center">☀️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Solar System Mining</h3>
              <p className="text-gray-600 mb-6 text-center">
                AI-controlled mining operations on asteroids and moons to extract rare minerals and resources
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Asteroid prospecting AI</li>
                <li>• Automated mining systems</li>
                <li>• Resource processing optimization</li>
                <li>• Interplanetary logistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚡ Advanced SpaceTech AI Systems</h2>
            <p className="text-xl text-gray-600">Cutting-edge AI technologies powering the future of space exploration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-bold text-lg mb-2">Autonomous AI</h3>
              <p className="text-sm text-gray-600">Self-learning systems for independent space operations</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🛰️</div>
              <h3 className="font-bold text-lg mb-2">Satellite Networks</h3>
              <p className="text-sm text-gray-600">AI-managed satellite constellations for global coverage</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-bold text-lg mb-2">Space Telescopes</h3>
              <p className="text-sm text-gray-600">AI-powered deep space observation and analysis</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">Launch Systems</h3>
              <p className="text-sm text-gray-600">AI-optimized rocket launches and orbital mechanics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 SpaceTech Applications</h2>
            <p className="text-xl text-gray-600">Revolutionary space technologies with practical Earth applications</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Global Internet Coverage</h3>
              <p className="text-gray-600 mb-4">
                AI-managed satellite constellations providing high-speed internet access to remote areas worldwide.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Low-latency global connectivity</li>
                <li>• Disaster response communication</li>
                <li>• Rural area internet access</li>
                <li>• IoT device connectivity</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Earth Observation</h3>
              <p className="text-gray-600 mb-4">
                AI-powered satellite systems monitoring climate change, natural disasters, and environmental conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Real-time weather prediction</li>
                <li>• Climate change monitoring</li>
                <li>• Disaster early warning systems</li>
                <li>• Agricultural monitoring</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🔋</div>
              <h3 className="text-2xl font-bold mb-4">Space-Based Solar Power</h3>
              <p className="text-gray-600 mb-4">
                AI-optimized solar power satellites beaming clean energy to Earth 24/7 from space.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Continuous energy generation</li>
                <li>• Wireless power transmission</li>
                <li>• Global energy distribution</li>
                <li>• Renewable energy storage</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🛸</div>
              <h3 className="text-2xl font-bold mb-4">Space Tourism</h3>
              <p className="text-gray-600 mb-4">
                AI-guided space tourism experiences with autonomous safety systems and personalized journeys.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Autonomous flight systems</li>
                <li>• Personalized space experiences</li>
                <li>• Safety monitoring AI</li>
                <li>• Virtual reality integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">📅 Mission Timeline</h2>
            <p className="text-xl opacity-90">Our roadmap for the next decade of space exploration</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">2025</div>
              <h3 className="text-lg font-bold mb-2">AI Satellite Launch</h3>
              <p className="text-sm opacity-90">First AI-powered satellite constellation deployment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">2026</div>
              <h3 className="text-lg font-bold mb-2">Mars Mission Prep</h3>
              <p className="text-sm opacity-90">Autonomous Mars exploration vehicle deployment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">2027</div>
              <h3 className="text-lg font-bold mb-2">Asteroid Mining</h3>
              <p className="text-sm opacity-90">First AI-controlled asteroid mining operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">2030</div>
              <h3 className="text-lg font-bold mb-2">Mars Colony</h3>
              <p className="text-sm opacity-90">First permanent AI-assisted Mars settlement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🤝 Strategic Partnerships</h2>
            <p className="text-xl text-gray-600">Collaborating with leading space agencies and technology companies</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">NASA</h3>
              <p className="text-gray-600">Joint Mars exploration and deep space missions</p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-2">SpaceX</h3>
              <p className="text-gray-600">Advanced launch systems and satellite deployment</p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">ESA</h3>
              <p className="text-gray-600">European space research and technology development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">🚀 Join the Space Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure as we expand beyond Earth with AI-powered space technologies.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🧑‍🚀</div>
                <h3 className="font-bold mb-2">Space Careers</h3>
                <p className="text-sm opacity-90">Join our team of space engineers and AI researchers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎓</div>
                <h3 className="font-bold mb-2">Education Programs</h3>
                <p className="text-sm opacity-90">Learn space technology and AI through our programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="font-bold mb-2">Partnerships</h3>
                <p className="text-sm opacity-90">Collaborate on space exploration missions</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Get Involved →
            </a>
            <a href="/pages/InnovationLanding2025" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Explore More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechAI2025;