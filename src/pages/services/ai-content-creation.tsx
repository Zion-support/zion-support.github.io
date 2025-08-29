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
  Lock, 
  Database, 
  Globe, 
  FileText,
  MessageCircle,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  BarChart3,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Cpu,
  Network,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  ShoppingCart,
  BookOpen
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIContentCreation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced language models for high-quality content generation',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PenTool,
      title: 'Creative Design',
      description: 'AI-generated graphics, layouts, and visual content',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Automated video creation and editing with AI',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals from text descriptions',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Music,
      title: 'Audio Content',
      description: 'AI-generated music, podcasts, and sound effects',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'Technical Content',
      description: 'Generate code documentation and technical guides',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Reduce content creation costs by 60%',
    'Improve SEO performance and engagement',
    '24/7 content generation capability',
    'Consistent brand voice and style',
    'Multi-language content support'
  ];

  const useCases = [
    {
      title: 'Marketing Content',
      description: 'Blog posts, social media, and advertising copy',
      icon: Target,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Product Descriptions',
      description: 'E-commerce content and product marketing',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Educational Content',
      description: 'Tutorials, courses, and learning materials',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Technical Documentation',
      description: 'API docs, user guides, and manuals',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="Revolutionary AI-powered content creation platform for marketing, education, and technical content generation."
        keywords="AI content creation, content generation, AI writing, AI design, video creation, content marketing"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <PenTool className="w-4 h-4 mr-2" />
                Content Creation
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Content
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Creation
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your content strategy with AI-powered creation tools. Generate high-quality 
                text, images, videos, and more in seconds, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Content Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform creates diverse content types with human-like quality and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Content Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented efficiency and quality in content creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the content creation revolution with our AI-powered platform. 
              Get in touch to learn how we can transform your content strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentCreation;