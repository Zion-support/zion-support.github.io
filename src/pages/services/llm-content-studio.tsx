import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  FileText, 
  Zap, 
  Brain,
  Rocket,
  Star,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Target,
  CheckCircle,
  Settings,
  Eye,
  Database,
  Smartphone,
  Globe,
  Lock,
  Shield,
  TrendingUp,
  Palette,
  Type,
  Image,
  Video,
  Music
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function LLMContentStudio() {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Advanced language models that create high-quality, engaging content across all formats'
    },
    {
      icon: PenTool,
      title: 'Creative Writing Assistant',
      description: 'AI-powered writing tools that enhance creativity and improve content quality'
    },
    {
      icon: FileText,
      title: 'Multi-Format Support',
      description: 'Generate content for blogs, social media, marketing materials, and more'
    },
    {
      icon: BarChart3,
      title: 'Content Analytics',
      description: 'Track performance metrics and optimize content for maximum engagement'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time editing and version control'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline content creation processes with intelligent automation'
    }
  ];

  const benefits = [
    'Generate content 10x faster than traditional methods',
    'Improve content quality and engagement by 60%',
    'Reduce content creation costs by 70%',
    'Maintain consistent brand voice across all content',
    'Scale content production without quality loss',
    'Optimize content for SEO and audience engagement'
  ];

  const contentTypes = [
    {
      type: 'Blog Posts & Articles',
      description: 'Long-form content optimized for SEO and reader engagement'
    },
    {
      type: 'Social Media Content',
      description: 'Platform-specific content for maximum social engagement'
    },
    {
      type: 'Marketing Materials',
      description: 'Email campaigns, landing pages, and promotional content'
    },
    {
      type: 'Product Descriptions',
      description: 'Compelling product copy that drives conversions'
    },
    {
      type: 'Technical Documentation',
      description: 'Clear, accurate technical writing and user guides'
    },
    {
      type: 'Creative Writing',
      description: 'Stories, scripts, and creative content for entertainment'
    }
  ];

  const industries = [
    'E-commerce & Retail',
    'Technology & SaaS',
    'Healthcare & Medical',
    'Finance & Banking',
    'Education & Training',
    'Entertainment & Media'
  ];

  return (
    <>
      <SEO 
        title="LLM Content Studio - AI-Powered Content Creation | Zion Tech Group"
        description="Transform your content creation with our LLM Content Studio. AI-powered writing tools that generate high-quality, engaging content across all formats."
        keywords="LLM content studio, AI content generation, content creation tools, AI writing assistant, content marketing automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <PenTool className="w-4 h-4 mr-2" />
                AI-Powered Content Creation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                LLM Content Studio
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  AI-Powered Content Creation
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Unleash your creativity with our LLM Content Studio. Generate high-quality, engaging content 
                across all formats using cutting-edge AI language models and creative writing tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Try Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Advanced Content Creation Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our LLM Content Studio combines state-of-the-art language models with intuitive tools 
                to revolutionize your content creation workflow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your Content Creation
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience unprecedented improvements in content quality, production speed, and audience engagement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Content Support
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Generate high-quality content for any purpose, format, or industry with our versatile AI tools.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{contentType.type}</h3>
                  <p className="text-slate-300">{contentType.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our LLM Content Studio serves businesses across all industries with tailored content solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <span className="text-slate-300 text-lg">{industry}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your Content?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of content creators who have transformed their workflow with AI-powered 
                content generation and creative tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}