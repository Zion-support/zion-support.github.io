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
            Deploy intelligent autonomous systems that operate independently, 
            optimize performance, and adapt to changing conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Agents</h3>
            <p className="text-gray-300 mb-6">
              Self-operating AI agents that handle complex tasks without human intervention.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Task automation</li>
              <li>• Decision making</li>
              <li>• Learning adaptation</li>
              <li>• Error recovery</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Optimization</h3>
            <p className="text-gray-300 mb-6">
              Continuous system optimization based on real-time data and performance metrics.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Dynamic resource allocation</li>
              <li>• Performance tuning</li>
              <li>• Load balancing</li>
              <li>• Cost optimization</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-6">
              Advanced analytics that predict future trends and optimize operations proactively.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Trend forecasting</li>
              <li>• Anomaly detection</li>
              <li>• Capacity planning</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousOperations;