import React from 'react';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  Cpu, 
  Database, 
  Network 
} from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Research Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI-powered research platform that autonomously conducts comprehensive research, 
            analyzes data, and generates actionable insights for any domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Autonomous Research</h3>
            <p className="text-gray-300">
              AI conducts research independently, gathering data from multiple sources and synthesizing insights.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Search className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Deep Analysis</h3>
            <p className="text-gray-300">
              Advanced algorithms analyze patterns, trends, and correlations across vast datasets.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <BookOpen className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Knowledge Synthesis</h3>
            <p className="text-gray-300">
              Combines findings from multiple sources to create comprehensive research reports.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}