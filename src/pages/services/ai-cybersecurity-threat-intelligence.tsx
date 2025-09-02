import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Eye, CheckCircle, ArrowRight, Play, MessageCircle } from 'lucide-react';

export function AICybersecurityThreatIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Cybersecurity
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Threat Intelligence Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Protect your organization with AI-driven cybersecurity that detects, analyzes, and responds to threats in real-time. 
            <strong className="text-red-400">Average market price: $1,500-4,000/month</strong> - Our solution provides 99.7% threat detection accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
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

export default AICybersecurityThreatIntelligence;
