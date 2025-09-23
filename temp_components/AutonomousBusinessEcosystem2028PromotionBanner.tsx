import React from 'react';
import Link from 'next/link';

const AutonomousBusinessEcosystem2028PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-900 to-teal-900 border border-emerald-500/30 rounded-2xl p-8 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 animate-pulse"></div>
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤖</span>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                Autonomous Revolution
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Business Ecosystem 2028
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Experience the future of business with fully autonomous AI systems that manage entire enterprises. 
              Self-optimizingself-growingand self-managing business ecosystems that operate without human intervention.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                Self-Managing
              </span>
              <span className="bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-medium">
                Auto-Optimizing
              </span>
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                24/7 Operation
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link 
              href="/autonomous-business-ecosystem-2028"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 whitespace-nowrap"
            >
              Deploy Ecosystem
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full text-center transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Watch Demo
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-400">95%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400">24/7</div>
              <div className="text-sm text-gray-400">Operation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">500%</div>
              <div className="text-sm text-gray-400">Efficiency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">∞</div>
              <div className="text-sm text-gray-400">Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousBusinessEcosystem2028PromotionBanner;