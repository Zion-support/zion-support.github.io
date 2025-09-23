import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { PenTool, Brain, Image, Video, FileText, Globe, Users, Target, CheckCircle, Clock, TrendingUp, Sparkles, Zap, Palette, Camera } from 'lucide-react';

const AIContentCreation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content with intelligent assistance'
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Create stunning visuals from text descriptions'
    },
    {
      icon: Video,
      title: 'AI Video Creation',
      description: 'Produce engaging video content automatically'
    },
    {
      icon: PenTool,
      title: 'Creative Design',
      description: 'AI-powered design tools and templates'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'SEO-optimized content for your website',
      icon: '📝'
    },
    {
      title: 'Social Media Content',
      description: 'Engaging posts for all platforms',
      icon: '📱'
    },
    {
      title: 'Marketing Materials',
      description: 'Brochures, flyers, and promotional content',
      icon: '📊'
    },
    {
      title: 'Product Descriptions',
      description: 'Compelling product copy and descriptions',
      icon: '🛍️'
    }
  ];

  const benefits = [
    'Save time with automated content generation',
    'Maintain consistent brand voice and style',
    'Scale content production without additional staff',
    'Optimize content for SEO and engagement',
    'Reduce content creation costs',
    'Faster time to market for campaigns'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation Services - Zion Tech Group"
        description="Transform your content strategy with AI-powered creation tools. Generate high-quality text, images, and videos at scale."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-400/30 mb-6">
              <PenTool className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-pink-300 font-medium">AI Content Creation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400">
                Creation
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your content strategy with AI-powered creation tools. Generate high-quality text, 
              images, and videos at scale while maintaining your brand voice and style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-pink-500/20">
                Start Creating
              </button>
              <button className="px-8 py-4 border border-pink-400/30 text-pink-300 font-semibold rounded-lg hover:bg-pink-400/10 transition-all duration-200">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Content Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful tools for creating engaging content at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-pink-400/30 transition-all duration-200 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive content creation for all your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-pink-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{contentType.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{contentType.title}</h3>
                    <p className="text-gray-300">{contentType.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Content Creation?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your content strategy with intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to revolutionize your content creation? Our AI content experts can help you 
                set up automated workflows and create engaging content at scale.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-pink-500/20">
                Start Content Creation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your content strategy with AI-powered creation tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-pink-500/20">
                Start Creating Now
              </button>
              <button className="px-8 py-4 border border-pink-400/30 text-pink-300 font-semibold rounded-lg hover:bg-pink-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentCreation;