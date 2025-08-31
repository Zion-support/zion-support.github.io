import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  ArrowRight,
  Brain,
  BarChart3,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Eye,
  Globe,
  PieChart,
  Monitor,
  FileText,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIContentMarketingSuite() {
  const features = [
    {
      icon: PenTool,
      title: "AI Content Generation",
      description: "Create high-quality, engaging content automatically using advanced language models and AI algorithms."
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description: "Optimize your content for maximum engagement, SEO performance, and conversion rates."
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Identify and target your ideal audience with personalized content strategies and messaging."
    },
    {
      icon: Users,
      title: "Multi-Channel Distribution",
      description: "Distribute your content across multiple channels and platforms for maximum reach and impact."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline your content creation and distribution processes with intelligent automation."
    },
    {
      icon: Brain,
      title: "Performance Analytics",
      description: "Track content performance and get insights to continuously improve your marketing strategies."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Engagement",
      description: "Boost audience engagement and interaction with AI-optimized content that resonates with your target market."
    },
    {
      icon: Lightbulb,
      title: "Better ROI",
      description: "Improve your marketing ROI with data-driven content strategies and automated optimization."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save time on content creation and management while maintaining high quality and consistency."
    },
    {
      icon: Star,
      title: "Scalable Growth",
      description: "Scale your content marketing efforts efficiently without sacrificing quality or personalization."
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "Create engaging blog content that drives traffic and establishes thought leadership."
    },
    {
      title: "Social Media Content",
      description: "Generate platform-specific content for all major social media channels."
    },
    {
      title: "Email Marketing",
      description: "Create personalized email campaigns that drive engagement and conversions."
    },
    {
      title: "Video Content",
      description: "Generate video scripts and descriptions for multimedia marketing campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <PenTool className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Content Marketing Suite
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pink-100">
              Transform your content marketing with AI-powered creation, optimization, and distribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Content Marketing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive content marketing capabilities to drive engagement and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Content Marketing Suite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered content marketing that drives real engagement and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Content Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports all major content types to meet your marketing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {contentType.title}
                </h3>
                <p className="text-gray-600">
                  {contentType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Join marketers who are already leveraging AI to create engaging content that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}