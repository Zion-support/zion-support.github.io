import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Search, Zap, Target, BarChart3, Globe, Shield } from 'lucide-react';

export default function AIContentIntelligencePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Analysis",
      description: "Advanced natural language processing for deep content understanding and insights"
    },
    {
      icon: Search,
      title: "Intelligent Search & Discovery",
      description: "Semantic search capabilities that understand context and intent"
    },
    {
      icon: Target,
      title: "Content Optimization",
      description: "AI-driven recommendations to improve content performance and engagement"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive metrics and insights into content effectiveness"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Process and analyze content across multiple languages and formats"
    },
    {
      icon: Shield,
      title: "Content Compliance",
      description: "Automated compliance checking and risk assessment for content"
    }
  ];

  const useCases = [
    {
      title: "Content Marketing",
      description: "Optimize blog posts, articles, and marketing materials for maximum engagement",
      icon: "📝",
      metrics: "40% increase in engagement"
    },
    {
      title: "Knowledge Management",
      description: "Organize and surface organizational knowledge for better decision-making",
      icon: "🧠",
      metrics: "60% faster information retrieval"
    },
    {
      title: "Legal Document Review",
      description: "Analyze contracts and legal documents for compliance and risk factors",
      icon: "⚖️",
      metrics: "80% reduction in review time"
    },
    {
      title: "Research & Analytics",
      description: "Extract insights from research papers, reports, and industry documents",
      icon: "🔬",
      metrics: "5x faster insight generation"
    },
    {
      title: "Social Media Monitoring",
      description: "Analyze social media content for brand sentiment and trend identification",
      icon: "📱",
      metrics: "Real-time sentiment tracking"
    },
    {
      title: "Customer Support",
      description: "Analyze support tickets and documentation for improved customer service",
      icon: "💬",
      metrics: "50% improvement in resolution time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Intelligence Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform how you create, manage, and optimize content with our advanced AI platform 
              that understands context, analyzes performance, and delivers actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Content Processing
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Leverage advanced AI to understand, analyze, and optimize your content at scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our platform uses cutting-edge AI models to deliver unprecedented content intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Natural Language Processing", 
                description: "Deep understanding of text semantics and context",
                icon: "🧠"
              },
              { 
                title: "Sentiment Analysis", 
                description: "Emotional tone and sentiment detection across content",
                icon: "😊"
              },
              { 
                title: "Topic Modeling", 
                description: "Automatic categorization and theme identification",
                icon: "🏷️"
              },
              { 
                title: "Content Generation", 
                description: "AI-powered content creation and enhancement suggestions",
                icon: "✍️"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              See how organizations are transforming their content operations with our AI platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {useCase.metrics}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & API */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Seamless Integration
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Integrate our AI Content Intelligence Platform with your existing tools and workflows
              </p>
              <div className="space-y-4">
                {[
                  "RESTful API with comprehensive documentation",
                  "Pre-built integrations with popular CMS platforms",
                  "Real-time webhooks for automated workflows",
                  "Custom connectors for enterprise systems",
                  "Cloud-native architecture for scalability",
                  "Enterprise-grade security and compliance"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <Zap className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-indigo-400 font-semibold">1M+ docs/hour</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Accuracy</span>
                    <span className="text-indigo-400 font-semibold">97.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style={{ width: '97.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-indigo-400 font-semibold">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Content Strategy
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Discover how AI can revolutionize your content operations and drive better business outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}