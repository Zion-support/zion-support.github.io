import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Image,
  Video,
  Mic,
  Globe,
  TrendingUp,
  BarChart3,
  Clock,
  Star,
  Award,
  Eye,
  Database,
  Network,
  Cpu,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Key,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Palette,
  Type,
  Layers,
  ShoppingCart,
  Code
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIContentCreation() {
  const features = [
    {
      icon: PenTool,
      title: 'AI Writing Assistant',
      description: 'Advanced natural language processing for creating engaging, SEO-optimized content',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Image,
      title: 'Visual Content Generation',
      description: 'AI-powered image and graphic creation for marketing and branding',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Video,
      title: 'Video Content Creation',
      description: 'Automated video generation with AI voiceovers and dynamic visuals',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Mic,
      title: 'Audio Content',
      description: 'AI-generated podcasts, audiobooks, and voice content in multiple languages',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    'Increase content production by 500%',
    'Reduce content creation costs by 70%',
    'Improve SEO rankings with AI-optimized content',
    'Generate content in 50+ languages automatically',
    '24/7 content creation capabilities',
    'Scalable for enterprise content needs'
  ];

  const useCases = [
    {
      title: 'Marketing Content',
      description: 'AI-generated blog posts, social media content, and email campaigns',
      icon: FileText
    },
    {
      title: 'Product Descriptions',
      description: 'Automated product descriptions and e-commerce content generation',
      icon: ShoppingCart
    },
    {
      title: 'Technical Documentation',
      description: 'AI-powered technical writing and documentation creation',
      icon: Code
    },
    {
      title: 'Creative Writing',
      description: 'Novels, scripts, and creative content with AI assistance',
      icon: PenTool
    }
  ];

  const contentTypes = [
    'Blog Posts & Articles',
    'Social Media Content',
    'Email Marketing Campaigns',
    'Product Descriptions',
    'Technical Documentation',
    'Creative Writing & Fiction',
    'Video Scripts & Storyboards',
    'Podcast Transcripts',
    'Press Releases',
    'White Papers & Reports',
    'Landing Page Copy',
    'Ad Copy & Taglines'
  ];

  const technologies = [
    'Natural Language Processing (NLP)',
    'Generative AI Models (GPT, Claude)',
    'Computer Vision & Image Generation',
    'Text-to-Speech & Voice Synthesis',
    'Content Optimization Algorithms',
    'Multi-language Translation',
    'SEO & Keyword Analysis',
    'Content Performance Analytics'
  ];

  return (
    <>
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="Revolutionary AI-powered content creation platform for marketing, technical writing, and creative content. Generate high-quality content at scale with advanced AI technology."
        keywords="AI content creation, content generation, AI writing, content marketing, AI copywriting, automated content, content automation"
        canonical="https://ziontechgroup.com/services/ai-content-creation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <PenTool className="w-4 h-4" />
                Content Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Content Creation
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your content strategy with cutting-edge AI technology. 
                Our platform generates high-quality, engaging content at scale for 
                marketing, technical writing, and creative projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Creating
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                >
                  View Examples
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Content Creation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI-powered content solutions designed to transform 
                how you create, manage, and distribute content.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Transform Your Content Strategy
                </h2>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">500%</div>
                      <div className="text-sm text-gray-400">Content Production</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
                      <div className="text-sm text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                      <div className="text-sm text-gray-400">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Creation</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Content Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform addresses content creation needs across multiple 
                industries and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Content Types We Generate
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From blog posts to video scripts, our AI platform creates 
                diverse content types for all your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <span className="text-gray-300 text-sm font-medium">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Advanced AI Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built with cutting-edge AI and content generation technologies for 
                reliable, scalable, and high-quality content creation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content?
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Join leading brands and content creators who are already using our AI platform 
                to generate high-quality content at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Creating Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-800/50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
                <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
                <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
                <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}