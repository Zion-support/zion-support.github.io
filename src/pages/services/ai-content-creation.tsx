import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PenTool, 
  Brain, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Globe, 
  Zap,
  Users, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Target,
  Star,
  Award,
  Lightbulb,
  Sparkles,
  Palette,
  Type,
  Layout,
  Camera,
  Headphones,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIContentCreation: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Advanced natural language processing for creating engaging, SEO-optimized content',
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

  const contentTypes = [
    {
      title: 'Written Content',
      description: 'Blog posts, articles, whitepapers, and marketing copy',
      icon: FileText,
      examples: ['SEO-optimized blog posts', 'Product descriptions', 'Email campaigns', 'Social media content'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Visual Content',
      description: 'Images, infographics, and graphic design elements',
      icon: Image,
      examples: ['Social media graphics', 'Infographics', 'Product mockups', 'Brand visuals'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Content',
      description: 'Marketing videos, tutorials, and promotional content',
      icon: Video,
      examples: ['Product demos', 'Explainer videos', 'Social media clips', 'Training content'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Audio Content',
      description: 'Podcasts, voiceovers, and audio marketing materials',
      icon: Mic,
      examples: ['Podcast episodes', 'Voiceovers', 'Audio ads', 'Sound branding'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const industries = [
    'Digital Marketing Agencies',
    'E-commerce & Retail',
    'Technology Companies',
    'Healthcare & Wellness',
    'Financial Services',
    'Education & Training',
    'Entertainment & Media',
    'Real Estate',
    'Travel & Hospitality',
    'Food & Beverage'
  ];

  const benefits = [
    'Increase content production by 10x',
    'Reduce content creation costs by 60%',
    'Improve SEO performance and engagement',
    '24/7 content generation capability',
    'Consistent brand voice and style',
    'Multi-language content support'
  ];

  const technologies = [
    'Natural Language Processing (NLP)',
    'Computer Vision & Image Generation',
    'Machine Learning Algorithms',
    'Deep Learning Models',
    'Content Optimization AI',
    'Multilingual AI Systems',
    'Voice Synthesis Technology',
    'Predictive Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="Revolutionary AI-powered content creation platform for writing, visual design, video production, and audio content. Transform your content strategy with cutting-edge AI technology."
        keywords="AI content creation, content generation, AI writing, visual AI, video AI, content marketing, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Content Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform creates diverse content types with human-like quality and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From written content to multimedia, our AI platform handles every type of content creation with professional quality and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${contentType.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <contentType.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{contentType.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{contentType.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Examples:</h4>
                  <ul className="space-y-2">
                    {contentType.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and quality in your content creation process with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in artificial intelligence and machine learning to deliver superior content creation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI content creation platform is designed to meet the unique needs of various industries and business sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the content creation revolution with our AI-powered platform. Start creating professional content in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                <MessageCircle className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentCreation;