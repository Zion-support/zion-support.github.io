import React from 'react';

const NextGenTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Next-Gen Tech Showcase 2025
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the most advanced technologies reshaping our world - from AI and quantum computing to neural interfaces and beyond.
          </p>
        </div>

        {/* Technology Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-orange-800">Autonomous AI Systems</h3>
            <p className="text-gray-600 mb-6 text-center">
              Self-evolving AI that learns, adapts, and makes decisions without human intervention, revolutionizing every industry.
            </p>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li>• Self-healing algorithms</li>
              <li>• Predictive optimization</li>
              <li>• Real-time adaptation</li>
              <li>• Zero-downtime updates</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-200">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-red-800">Quantum Computing</h3>
            <p className="text-gray-600 mb-6 text-center">
              Exponential computing power that solves impossible problems and unlocks new possibilities across all sectors.
            </p>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• 10^18x speed improvement</li>
              <li>• Quantum cryptography</li>
              <li>• Molecular simulation</li>
              <li>• Unbreakable security</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-200">
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-pink-800">Neural Interfaces</h3>
            <p className="text-gray-600 mb-6 text-center">
              Direct brain-computer communication that enables thought control and enhanced cognitive capabilities.
            </p>
            <ul className="text-pink-700 space-y-2 text-sm">
              <li>• Non-invasive BCI</li>
              <li>• Thought control</li>
              <li>• Neural feedback</li>
              <li>• Cognitive enhancement</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200">
            <div className="text-6xl mb-6 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-800">Edge AI & IoT</h3>
            <p className="text-gray-600 mb-6 text-center">
              Intelligent edge computing that brings AI processing closer to data sources for real-time insights.
            </p>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Real-time processing</li>
              <li>• Reduced latency</li>
              <li>• Enhanced privacy</li>
              <li>• Scalable deployment</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
            <div className="text-6xl mb-6 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">Predictive Analytics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced forecasting systems that predict future trends and outcomes with unprecedented accuracy.
            </p>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Future trend prediction</li>
              <li>• Risk assessment</li>
              <li>• Market analysis</li>
              <li>• Strategic planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200">
            <div className="text-6xl mb-6 text-center">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-green-800">Cybersecurity Fortress</h3>
            <p className="text-gray-600 mb-6 text-center">
              Next-generation security systems that protect against evolving cyber threats with AI-powered defense.
            </p>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• AI threat detection</li>
              <li>• Automated response</li>
              <li>• Zero-trust architecture</li>
              <li>• Quantum encryption</li>
            </ul>
          </div>
        </div>

        {/* Technology Impact Metrics */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 mb-16 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Technology Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500%</div>
              <div className="text-xl opacity-90">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-xl opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$10M+</div>
              <div className="text-xl opacity-90">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl opacity-90">Autonomous Operation</div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">Healthcare</h3>
              <p className="text-gray-600 text-sm">AI diagnostics, personalized medicine, and neural rehabilitation</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-3">Finance</h3>
              <p className="text-gray-600 text-sm">Quantum risk analysis, AI trading, and fraud detection</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-3">Transportation</h3>
              <p className="text-gray-600 text-sm">Autonomous vehicles, smart traffic, and predictive maintenance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Smart factories, predictive maintenance, and quality control</p>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Implementation Timeline</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Assessment</h3>
              <p className="text-gray-600 text-sm text-center">Evaluate current systems and identify optimization opportunities</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Planning</h3>
              <p className="text-gray-600 text-sm text-center">Develop comprehensive technology integration roadmap</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Implementation</h3>
              <p className="text-gray-600 text-sm text-center">Deploy next-generation technologies with minimal disruption</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-lg font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">Optimization</h3>
              <p className="text-gray-600 text-sm text-center">Continuous improvement and scaling of technology solutions</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-center">Fortune 500 Transformation</h3>
              <p className="text-gray-600 text-center">
                "Our AI transformation increased productivity by 400% and reduced operational costs by 60%. The results exceeded all expectations."
              </p>
              <div className="text-sm text-orange-600 font-semibold text-center mt-4">- CEO, Global Corporation</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-center">Healthcare Revolution</h3>
              <p className="text-gray-600 text-center">
                "Neural interfaces helped our patients recover 3x faster. This technology is truly life-changing for medical rehabilitation."
              </p>
              <div className="text-sm text-orange-600 font-semibold text-center mt-4">- Dr. Smith, Medical Director</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-center">Space Exploration</h3>
              <p className="text-gray-600 text-center">
                "Quantum computing enabled us to solve complex space navigation problems that were impossible with classical computers."
              </p>
              <div className="text-sm text-orange-600 font-semibold text-center mt-4">- Dr. Johnson, Space Agency</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Embrace the Future</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the technological revolution and transform your business with our next-generation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Journey
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2025;