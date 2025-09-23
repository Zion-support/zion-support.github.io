import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Image,
  Video,
  Mic,
  Globe,
  BarChart3,
  MessageCircle,
  Clock,
  Target,
  Sparkles,
  Palette,
  Type,
  Music,
  Camera,
  BookOpen
} from 'lucide-react';

const AIContentCreation: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: "AI Writing Assistant",
      description: "Advanced natural language processing for creating engaging, SEO-optimized content",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Image,
      title: "Visual Content Generation",
      description: "AI-powered image and video creation with customizable styles and themes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mic,
      title: "Audio & Podcast Creation",
      description: "High-quality voice synthesis and audio content generation for various platforms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Content creation in 50+ languages with cultural adaptation and localization",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "10x faster content creation compared to traditional methods",
    "Consistent brand voice and messaging across all content",
    "SEO-optimized content that ranks higher in search results",
    "Cost reduction of 60-80% on content production",
    "24/7 content generation capabilities",
    "Scalable content creation for global campaigns"
  ];

  const useCases = [
    {
      title: "Marketing Content",
      description: "Blog posts, social media content, email campaigns, and advertising copy",
      icon: Target
    },
    {
      title: "Product Descriptions",
      description: "E-commerce product listings, feature descriptions, and technical specifications",
      icon: FileText
    },
    {
      title: "Educational Content",
      description: "Training materials, tutorials, documentation, and learning resources",
      icon: BookOpen
    },
    {
      title: "Creative Writing",
      description: "Stories, scripts, poetry, and creative content for entertainment",
      icon: Sparkles
    }
  ];

  const contentTypes = [
    {
      title: "Text Content",
      items: ["Blog posts", "Articles", "Product descriptions", "Email campaigns", "Social media posts", "Press releases"],
      icon: Type,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Visual Content",
      items: ["Images", "Infographics", "Social media graphics", "Banner ads", "Product photos", "Illustrations"],
      icon: Image,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Video Content",
      items: ["Product demos", "Tutorial videos", "Social media clips", "Advertisements", "Training videos", "Live streams"],
      icon: Video,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Audio Content",
      items: ["Podcasts", "Voice-overs", "Audio ads", "Training audio", "Music generation", "Sound effects"],
      icon: Music,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Content Creation - Zion Tech Group"
        description="Revolutionary AI-powered content creation platform for marketing, education, and creative industries. Generate high-quality text, images, videos, and audio content."
        keywords="AI content creation, content generation, AI writing, AI images, AI video, content marketing, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <PenTool className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Content Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your content strategy with AI-powered creation tools. Generate high-quality 
              text, images, videos, and audio content in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <Sparkles className="h-5 w-5 mr-2" />
                Start Creating
              </button>
              <button className="btn-futuristic-outline">
                <FileText className="h-5 w-5 mr-2" />
                View Examples
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Content Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge language models, computer vision, 
              and audio synthesis to create compelling content across all media types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From written content to multimedia assets, our AI platform handles 
              every aspect of content creation with professional quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${contentType.color} mb-4`}>
                    <contentType.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {contentType.title}
                  </h3>
                  <ul className="space-y-2">
                    {contentType.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Content Creation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and quality in your content creation process 
              with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're in marketing, education, e-commerce, or entertainment, 
              our AI content creation platform adapts to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 hover:border-slate-400 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of creators who are already using AI to revolutionize 
              their content creation process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-white text-blue-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start Free Trial
              </button>
              <button className="btn-futuristic-outline border-white text-white hover:bg-white hover:text-blue-600">
                <Clock className="h-5 w-5 mr-2" />
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