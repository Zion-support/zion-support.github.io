import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Headphones, 
  FileText, 
  Search, 
  BarChart3, 
  Play, 
  Download, 
  Share2, 
  Zap,
  CheckCircle,
  Star,
  Users,
  Clock,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

export default function PodcastTranscriptionInsights() {
  return (
    <>
      <Helmet>
        <title>AI Podcast Transcription & Insights Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your podcasts into searchable, SEO-optimized content with our AI-powered transcription and insights platform. Get transcripts, chapters, show notes, and more." />
        <meta name="keywords" content="podcast transcription, AI transcription, podcast insights, SEO optimization, content creation, audio analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/services/podcast-transcription-insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Headphones className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Podcast Transcription & Insights
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your audio content into searchable, SEO-optimized text with intelligent insights, 
              automatic chapter detection, and comprehensive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-slate-400 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Sample
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features for Content Creators
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Everything you need to turn your podcasts into engaging, discoverable content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Transcription */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Transcription</h3>
                <p className="text-slate-300">
                  High-accuracy speech-to-text with support for multiple languages, accents, and technical terminology.
                </p>
              </div>

              {/* Smart Chapters */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automatic Chapter Detection</h3>
                <p className="text-slate-300">
                  Intelligent topic segmentation and timestamp generation for easy navigation and content organization.
                </p>
              </div>

              {/* SEO Optimization */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <Search className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">SEO Optimization</h3>
                <p className="text-slate-300">
                  Generate SEO-friendly show notes, blog posts, and social media content from your transcripts.
                </p>
              </div>

              {/* Analytics */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
                <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Content Analytics</h3>
                <p className="text-slate-300">
                  Track engagement, identify trending topics, and optimize your content strategy with detailed insights.
                </p>
              </div>

              {/* Multi-Format Export */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                  <Download className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Format Export</h3>
                <p className="text-slate-300">
                  Export transcripts in various formats including SRT, VTT, TXT, and custom templates for different platforms.
                </p>
              </div>

              {/* Collaboration */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-4">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-slate-300">
                  Work together with editors, writers, and team members on transcript editing and content creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300">
                Choose the plan that fits your content creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  $10<span className="text-lg text-slate-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    10 hours of transcription/month
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic chapter detection
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard export formats
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  $30<span className="text-lg text-slate-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    50 hours of transcription/month
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI insights
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    SEO optimization tools
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">
                  $100<span className="text-lg text-slate-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited transcription
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 phone support
                  </li>
                </ul>
                <button className="w-full py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Podcasts?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of content creators who are already using our AI-powered transcription platform 
              to make their content more discoverable and engaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 border border-slate-400 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}