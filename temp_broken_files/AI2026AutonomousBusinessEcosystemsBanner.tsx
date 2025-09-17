import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { ArrowRightIcon, CogIcon, ChartBarIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const AI2026AutonomousBusinessEcosystemsBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-2 mb-6">
            <CogIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">🏢 AUTONOMOUS BUSINESS</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
            Self-Managing Enterprise Ecosystems
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business into a fully autonomous ecosystem that self-manages, 
            self-optimizes, and self-evolves without human intervention. Experience the future of business operations.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <CogIcon className="w-8 h-8 mx-auto mb-3 text-emerald-300" />
              <h3 className="text-lg font-semibold mb-2">Self-Optimization</h3>
              <p className="text-sm text-gray-300">Performance improves 5-10% weekly</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <ChartBarIcon className="w-8 h-8 mx-auto mb-3 text-teal-300" />
              <h3 className="text-lg font-semibold mb-2">Self-Healing</h3>
              <p className="text-sm text-gray-300">Automatically diagnoses and fixes issues</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <RocketLaunchIcon className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
              <h3 className="text-lg font-semibold mb-2">Self-Evolution</h3>
              <p className="text-sm text-gray-300">Continuously develops new capabilities</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <UserGroupIcon className="w-8 h-8 mx-auto mb-3 text-emerald-300" />
              <h3 className="text-lg font-semibold mb-2">24/7 Operations</h3>
              <p className="text-sm text-gray-300">Never stops working or improving</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2026-autonomous-business-ecosystems"
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Autonomous Business
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/services/autonomous-business-systems"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Get Implementation Guide
            </a>
          </div>
        </div>
        
        {/* Success Metrics */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proven Results from Fortune 500 Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">340%</div>
              <div className="text-sm text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-2">99.7%</div>
              <div className="text-sm text-gray-300">Quality Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">280%</div>
              <div className="text-sm text-gray-300">Supply Chain Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">150%</div>
              <div className="text-sm text-gray-300">Revenue Growth</div>
            </div>
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-emerald-400 font-bold text-lg mb-2">Phase 1: Foundation</div>
              <div className="text-sm text-gray-300 mb-2">Months 1-3</div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Deploy core AI agents</li>
                <li>• Establish protocols</li>
                <li>• Begin optimization</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-teal-400 font-bold text-lg mb-2">Phase 2: Expansion</div>
              <div className="text-sm text-gray-300 mb-2">Months 4-6</div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Add specialized agents</li>
                <li>• Advanced learning</li>
                <li>• Scale operations</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-cyan-400 font-bold text-lg mb-2">Phase 3: Autonomy</div>
              <div className="text-sm text-gray-300 mb-2">Months 7-12</div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Full autonomous operation</li>
                <li>• Self-healing systems</li>
                <li>• Strategic autonomy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026AutonomousBusinessEcosystemsBanner;