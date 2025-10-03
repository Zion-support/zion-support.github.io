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
            <h3 className="text-xl font-bold text-white mb-3">Self-Healing Infrastructure</h3>
            <p className="text-gray-300 mb-6">
              Intelligent systems that automatically detect, diagnose, and resolve 
              issues before they impact your operations.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Predictive Optimization</h3>
            <p className="text-gray-300 mb-6">
              Advanced AI that continuously optimizes performance, predicts maintenance needs, 
              and prevents downtime through proactive interventions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Implement Autonomous Operations?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let us help you transform your business with cutting-edge autonomous AI systems. 
              Schedule a consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousOperations;