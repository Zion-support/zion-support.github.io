import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PenTool, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  FileText,
  Image,
  Video,
  Music,
  Globe,
  Clock,
  Award,
  Target,
  BarChart3,
  Sparkles,
  Palette,
  Type,
  Layers,
  Mail,
  ShoppingCart
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function AIContentCreation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Writing",
      description: "Generate high-quality, engaging content with advanced natural language processing"
    },
    {
      icon: Image,
      title: "Visual Content Creation",
      description: "Create stunning images, graphics, and visual assets with AI-driven design tools"
    },
    {
      icon: Video,
      title: "Video & Animation",
      description: "Produce professional videos and animations with automated editing and effects"
    },
    {
      icon: Music,
      title: "Audio Generation",
      description: "Generate custom music, voiceovers, and audio content for your projects"
    }
  ];

  const benefits = [
    "Increase content production by 10x",
    "Reduce content creation costs by 60%",
    "Improve content quality and engagement",
    "Automate repetitive content tasks",
    "Scale content across multiple platforms"
  ];

  const useCases = [
    {
      title: "Marketing Content",
      description: "Create compelling ads, social media posts, and email campaigns",
      icon: Target
    },
    {
      title: "Blog & Articles",
      description: "Generate SEO-optimized blog posts and long-form content",
      icon: FileText
    },
    {
      title: "Product Descriptions",
      description: "Write compelling product descriptions and marketing copy",
      icon: ShoppingCart
    },
    {
      title: "Brand Assets",
      description: "Design logos, graphics, and visual identity elements",
      icon: Palette
    }
  ];

  const contentTypes = [
    {
      name: "Blog Posts",
      description: "SEO-optimized articles and blog content",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Social Media",
      description: "Engaging posts for all social platforms",
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Email Marketing",
      description: "Personalized email campaigns and newsletters",
      icon: Mail,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Video Content",
      description: "Short-form videos and animations",
      icon: Video,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Graphics & Images",
      description: "Custom visuals and design elements",
      icon: Image,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Product Copy",
      description: "Compelling product descriptions and features",
      icon: ShoppingCart,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="AI Content Creation - Zion Tech Group"
        description="Transform your content strategy with AI-powered creation tools. Generate high-quality text, images, videos, and audio content at scale."
        canonical="/services/ai-content-creation"
        url="https://ziontechgroup.com/services/ai-content-creation"
        type="service"
        tags={['AI Content Creation', 'Content Generation', 'AI Writing', 'Visual Content', 'Marketing Content']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <PenTool className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">AI Content Creation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Content Creation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your content strategy with our comprehensive AI platform. 
                Generate high-quality text, images, videos, and audio content at scale 
                with unprecedented speed and creativity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Content Creation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI with creative expertise to deliver 
                unprecedented value to content creators and marketers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types We Create
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From written content to visual assets, our AI platform handles all your content needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={contentType.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${contentType.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contentType.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{contentType.name}</h3>
                  <p className="text-gray-400">{contentType.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of content creation with our comprehensive AI solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Platform Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Content Speed</span>
                    <span className="text-blue-400 font-semibold">10x Faster</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-blue-400 font-semibold">60% Less</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Quality Score</span>
                    <span className="text-blue-400 font-semibold">95%+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Languages</span>
                    <span className="text-blue-400 font-semibold">50+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Creation Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI platform addresses the most critical challenges in modern content creation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading brands and creators who are already using our AI platform 
                to revolutionize their content strategy and engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}