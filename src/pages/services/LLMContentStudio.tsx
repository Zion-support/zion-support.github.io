import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Sparkles, Target, Users, Zap, Globe, Award, BarChart3, Brain, Eye, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function LLMContentStudio() {
  const features = [
    {
      icon: BookOpen,
      title: "AI Content Generation",
      description: "Generate high-quality, engaging content using advanced language models"
    },
    {
      icon: PenTool,
      title: "Content Optimization",
      description: "AI-powered content optimization for SEO, readability, and engagement"
    },
    {
      icon: Sparkles,
      title: "Brand Voice Consistency",
      description: "Maintain consistent brand voice across all content with AI assistance"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Create personalized content for different audience segments and personas"
    },
    {
      icon: Users,
      title: "Collaborative Editing",
      description: "Team-based content creation with AI-powered suggestions and feedback"
    },
    {
      icon: Zap,
      title: "Multi-format Support",
      description: "Generate content for blogs, social media, emails, and marketing materials"
    }
  ];

  const benefits = [
    "Increase content production by 10x",
    "Reduce content creation time by 80%",
    "Improve SEO rankings by 40%",
    "Enhance audience engagement by 60%",
    "Maintain brand consistency across all channels",
    "Scale content marketing efforts efficiently"
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "SEO-optimized long-form content with AI research and writing assistance"
    },
    {
      title: "Social Media Content",
      description: "Engaging posts, captions, and hashtag suggestions for all platforms"
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns with AI-driven subject lines and content"
    },
    {
      title: "Marketing Copy",
      description: "Compelling ad copy, landing pages, and promotional materials"
    }
  ];

  const capabilities = [
    "Natural language generation and editing",
    "SEO optimization and keyword research",
    "Brand voice training and consistency",
    "Content performance analytics",
    "Multi-language content creation",
    "Plagiarism detection and originality checking",
    "Content calendar and scheduling",
    "A/B testing and optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="LLM Content Studio - Zion Tech Group"
        description="Create engaging, SEO-optimized content at scale with AI-powered writing assistance and brand voice consistency."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              AI-Powered Content Creation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              LLM Content Studio
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your content creation with AI-powered writing assistance. Generate 
              engaging, SEO-optimized content at scale while maintaining your unique brand voice 
              across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Writing
              </button>
              <button className="px-8 py-4 border border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Content Creation Tools
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our LLM Content Studio combines cutting-edge AI with intuitive tools to 
              revolutionize your content creation workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-indigo-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Content Creation Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of content creators already achieving breakthrough results with AI assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Content for Every Channel
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Create engaging content across all your marketing channels with AI assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{contentType.title}</h3>
                <p className="text-slate-300">{contentType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with state-of-the-art language models for professional content creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join thousands of content creators already using AI to scale their content marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

