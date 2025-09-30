import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Latest Content Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base">
            🚀 <strong>NEW TODAY:</strong> AI Governance & Compliance, RAG Best Practices, AI FinOps Cost Optimization
            <Link to="/blog" className="ml-3 underline font-semibold hover:text-blue-100">
              Read Now →
            </Link>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            Welcome to <span className="text-gradient">Zion AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Advanced AI solutions for enterprise automation and optimization. 
            Transform your business with cutting-edge artificial intelligence technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </Link>
            <Link to="/blog" className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </Link>
          </div>
        </div>

        {/* Latest Articles Showcase */}
        <div className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/blog/ai-governance-compliance-2025" className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-105">
              <div className="text-cyan-400 text-sm font-semibold mb-2">AI GOVERNANCE • SEP 30, 2025</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Governance & Compliance 2025</h3>
              <p className="text-gray-300 text-sm mb-4">Navigate the EU AI Act, model cards, audit trails, and build trustworthy AI systems that meet regulatory standards.</p>
              <div className="text-cyan-400 text-sm font-semibold">Read more →</div>
            </Link>

            <Link to="/blog/rag-best-practices-2025" className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-6 border border-green-500/30 hover:border-green-400 transition-all hover:scale-105">
              <div className="text-green-400 text-sm font-semibold mb-2">RAG & LLMs • SEP 30, 2025</div>
              <h3 className="text-xl font-bold text-white mb-3">RAG Best Practices 2025</h3>
              <p className="text-gray-300 text-sm mb-4">Build production-ready RAG with hybrid search, intelligent chunking, and evaluation frameworks that actually work.</p>
              <div className="text-green-400 text-sm font-semibold">Read more →</div>
            </Link>

            <Link to="/blog/ai-finops-cost-optimization-2025" className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30 hover:border-blue-400 transition-all hover:scale-105">
              <div className="text-blue-400 text-sm font-semibold mb-2">FINOPS & COST • SEP 30, 2025</div>
              <h3 className="text-xl font-bold text-white mb-3">AI FinOps Cost Optimization</h3>
              <p className="text-gray-300 text-sm mb-4">Reduce AI infrastructure costs by 60% with intelligent routing, caching, and token budget management.</p>
              <div className="text-blue-400 text-sm font-semibold">Read more →</div>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Automation</h3>
            <p className="text-gray-300">Streamline your workflows with intelligent automation solutions.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
            <p className="text-gray-300">Optimize your systems with advanced performance monitoring.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
            <p className="text-gray-300">Enterprise-grade security for your AI applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;