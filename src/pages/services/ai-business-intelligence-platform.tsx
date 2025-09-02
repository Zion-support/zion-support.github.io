import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, CheckCircle, ArrowRight, Play, MessageCircle } from 'lucide-react';

export function AIBusinessIntelligencePlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI Business Intelligence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart Analytics Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your data into actionable insights with our AI-powered business intelligence platform. 
            <strong className="text-blue-400">Average market price: $800-2,500/month</strong> - Our solution provides 3x faster insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIBusinessIntelligencePlatform;
