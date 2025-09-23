import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  FileText, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  BarChart3,
  Headphones,
  Bot
} from 'lucide-react';

export default function AIContentGenerator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Content Generator - Zion Tech Group"
        description="Revolutionary AI-powered content creation that writes, optimizes, and scales your content strategy. Generate high-quality, SEO-optimized content in minutes."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI Content Generator
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered content creation that writes, optimizes, and scales your content strategy. Generate high-quality, SEO-optimized content in minutes.
              </p>
            </div>
            <div className="mb-16">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Get Started with AI Content Generator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Content Generation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your content marketing with our advanced AI content generator
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Content Creation</h3>
              <p className="text-gray-300">
                AI-powered writing that understands your brand voice and creates engaging, original content
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SEO Optimization</h3>
              <p className="text-gray-300">
                Automatically optimize content for search engines with intelligent keyword integration
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Audience Targeting</h3>
              <p className="text-gray-300">
                Create content specifically tailored to your target audience demographics and preferences
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-gray-300">
                Track content performance and get insights to improve your content strategy
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-300">
                Built-in plagiarism detection and content quality checks ensure originality
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Content Scaling</h3>
              <p className="text-gray-300">
                Generate weeks worth of content in minutes, not hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Start generating high-quality, SEO-optimized content today
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
          >
            Get Started with AI Content Generator
          </a>
        </div>
      </section>
    </div>
  );
}