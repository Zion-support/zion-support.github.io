import React from 'react';
import { SEO } from '../../components/SEO';
import { PenTool, Zap, Brain, Target, TrendingUp, Users, BarChart3, Sparkles } from 'lucide-react';

export default function AIContentCreationStudio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation Studio - Zion Tech Group"
        description="Revolutionize your content creation with AI-powered tools. Generate high-quality, engaging content at scale with our intelligent content studio."
        keywords="AI content creation, content generation, AI writing, content marketing, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
              <PenTool className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Creation Studio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with AI-powered creation tools. Generate engaging, 
            SEO-optimized content that resonates with your audience and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <PenTool className="h-5 w-5 mr-2" />
              Start Creating
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI-Powered Content Creation
            </h2>
            <p className="text-xl text-gray-300">
              Advanced tools that understand your brand voice and create compelling content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Writing</h3>
              <p className="text-gray-300">
                AI that understands context, tone, and style to create engaging content that matches your brand.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Audience Targeting</h3>
              <p className="text-gray-300">
                Create content specifically tailored to your target audience with AI-driven insights.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SEO Optimization</h3>
              <p className="text-gray-300">
                Automatically optimize content for search engines with intelligent keyword integration.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
              <p className="text-gray-300">
                Track content performance and get insights to improve your content strategy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg w-fit mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative Inspiration</h3>
              <p className="text-gray-300">
                AI-powered brainstorming and idea generation to overcome creative blocks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Generation</h3>
              <p className="text-gray-300">
                Create high-quality content in minutes, not hours, with AI assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-300">
              From blog posts to marketing copy, we cover all your content needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Written Content</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Blog posts and articles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Social media posts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Email newsletters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Product descriptions</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Marketing Content</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Ad copy and landing pages</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Press releases</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Case studies and whitepapers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Video scripts and presentations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Simple three-step process to create amazing content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Define Your Needs</h3>
              <p className="text-gray-300">
                Tell us what type of content you need, your target audience, and your brand voice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Generation</h3>
              <p className="text-gray-300">
                Our AI creates high-quality, engaging content based on your specifications.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Review & Publish</h3>
              <p className="text-gray-300">
                Review the content, make any adjustments, and publish to your platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating engaging content that drives results with AI assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic">
              <PenTool className="h-5 w-5 mr-2" />
              Start Free Trial
            </button>
            <button className="btn-secondary">
              <Users className="h-5 w-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}