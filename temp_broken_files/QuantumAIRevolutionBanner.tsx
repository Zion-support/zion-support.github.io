import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightCpuBrainZapShieldTrendingUp

export default function QuantumAIRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 QUANTUM AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Quantum Computing Revolution is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how quantum computing is revolutionizing AI capabilitiesdelivering unprecedented processing power and solving previously impossible enterprise challenges.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Cpu className="w-12 h-12 text-purple-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">340% Faster</h3>
            <p className="text-sm opacity-90">Optimization algorithms compared to classical computing</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Brain className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">99.9% Accuracy</h3>
            <p className="text-sm opacity-90">In complex pattern recognition tasks</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">50x Reduction</h3>
            <p className="text-sm opacity-90">In computational time for large-scale simulations</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-orange-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">$2.3T Market</h3>
            <p className="text-sm opacity-90">Projected value by 2030</p>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Featured: Quantum AI Healthcare Success</h3>
              <p className="text-lg opacity-90 mb-6">
                Read our exclusive case study about how a leading healthcare provider achieved $2.3B in value through quantum AI implementationrevolutionizing patient care and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/case-studies/quantum-ai-healthcare-transformation-2025"
                  className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/blog/ai-2025-quantum-computing-revolution"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">$2.3B</div>
              <div className="text-lg opacity-90 mb-4">Value Created</div>
              <div className="text-sm opacity-75">
                Through quantum AI implementation in healthcare
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Financial Services</h4>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• Real-time risk assessment</li>
              <li>• 99.9% fraud detection accuracy</li>
              <li>• Ultra-fast algorithmic trading</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Healthcare</h4>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• 1000x faster drug discovery</li>
              <li>• Personalized medicine</li>
              <li>• Enhanced medical imaging</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold mb-3">Supply Chain</h4>
            <ul className="text-sm opacity-90 space-y-2">
              <li>• Dynamic route optimization</li>
              <li>• 99.7% predictive maintenance accuracy</li>
              <li>• Optimal inventory management</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-6">
            Ready to transform your enterprise with quantum AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Quantum AI Consultation
            </a>
            <a
              href="/services/quantum-ai"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore Quantum AI Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}