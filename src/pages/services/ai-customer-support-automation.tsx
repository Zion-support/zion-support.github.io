import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, Users, Clock, CheckCircle, ArrowRight, Play, Star } from 'lucide-react';

export function AICustomerSupportAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            AI Customer Support
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Intelligent Support Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your customer support with AI-powered automation that provides instant, accurate responses 24/7. 
            <strong className="text-green-400">Average market price: $500-1,500/month</strong> - Our solution provides 80% faster response times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
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

export default AICustomerSupportAutomation;