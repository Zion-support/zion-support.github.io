import React from 'react';

const AIAutonomousOperations: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Autonomous Operations
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business operations with fully autonomous AI systems that 
            self-manage, self-optimize, and deliver unprecedented efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Autonomous Process Management</h3>
            <p className="text-gray-300 mb-6">
              AI systems that independently manage complex workflows, make decisions, 
              and adapt to changing conditions without human intervention.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-purple-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Self-Optimizing Systems</h3>
            <p className="text-gray-300 mb-6">
              Continuous learning and optimization algorithms that improve performance, 
              reduce costs, and enhance efficiency over time.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Predictive Maintenance</h3>
            <p className="text-gray-300 mb-6">
              Advanced AI that predicts and prevents system failures before they occur, 
              ensuring maximum uptime and reliability.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose Our Autonomous Operations?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 99.9% uptime guarantee</li>
                <li>• 70% reduction in operational costs</li>
                <li>• 300% increase in efficiency</li>
                <li>• 24/7 autonomous monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Features</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Self-healing infrastructure</li>
                <li>• Real-time optimization</li>
                <li>• Predictive analytics</li>
                <li>• Seamless integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you implement autonomous operations that will revolutionize 
            your business processes and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a 
              href="/about"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousOperations;