import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Database,
  FileText,
  Lightbulb,
  Award,
  Rocket,
  Sparkles,
  Search,
  Share2,
  Monitor,
  Palette,
  Camera,
  Video,
  Mic,
  Edit3,
  Eye,
  Heart,
  MessageCircle
} from 'lucide-react';

const AIContentMarketingSuite = () => {
  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "AI Content Creation",
      description: "Generate high-quality, engaging content across multiple formats with advanced AI writing assistance."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Intelligence",
      description: "Deep insights into your target audience with AI-powered persona analysis and behavior prediction."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "AI-driven content optimization that improves engagement, conversions, and SEO performance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Channel Distribution",
      description: "Automated content distribution across social media, email, blogs, and other marketing channels."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive content performance metrics with AI-powered insights and recommendations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Streamline content creation, approval, and publishing with intelligent automation."
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$79",
      period: "/month",
      description: "Perfect for individual content creators and small businesses",
      features: [
        "Up to 50 AI-generated articles/month",
        "Basic audience insights",
        "Social media scheduling",
        "Email support",
        "Standard analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 200 AI-generated articles/month",
        "Advanced AI algorithms",
        "Multi-channel distribution",
        "Priority support",
        "Advanced analytics",
        "Custom content templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations with extensive content needs",
      features: [
        "Unlimited AI content generation",
        "Custom AI model training",
        "Full platform access",
        "Dedicated support team",
        "Advanced reporting & insights",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      description: "SEO-optimized, engaging content that ranks well and drives traffic to your website.",
      icon: <FileText className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Social Media Content",
      description: "Platform-specific content that maximizes engagement across all social networks.",
      icon: <Share2 className="w-8 h-8 text-green-500" />
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns that convert subscribers into loyal customers.",
      icon: <Mail className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Video & Multimedia",
      description: "AI-generated video scripts, podcast outlines, and multimedia content strategies.",
      icon: <Video className="w-8 h-8 text-purple-500" />
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Content ROI",
      value: "300%+",
      description: "Increase content marketing ROI with AI-optimized strategies"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Time Savings",
      value: "70%",
      description: "Reduce content creation time with AI automation"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Engagement Boost",
      value: "150%",
      description: "Improve audience engagement and interaction rates"
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: "Conversion Rate",
      value: "45%",
      description: "Higher conversion rates from optimized content"
    }
  ];

  const aiCapabilities = [
    {
      title: "Natural Language Generation",
      description: "Create human-like content that resonates with your audience and maintains brand voice consistency.",
      icon: <PenTool className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Content Optimization",
      description: "AI-powered suggestions for headlines, keywords, and content structure to maximize performance.",
      icon: <Search className="w-12 h-12 text-green-500" />
    },
    {
      title: "Audience Analysis",
      description: "Deep insights into audience preferences, behavior patterns, and content consumption habits.",
      icon: <Users className="w-12 h-12 text-purple-500" />
    },
    {
      title: "Performance Prediction",
      description: "Predict content performance before publishing and optimize for maximum impact.",
      icon: <BarChart3 className="w-12 h-12 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI-Powered Content Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Content Marketing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {" "}Suite
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your content marketing with AI that creates, optimizes, and distributes engaging content across all channels. 
              Boost engagement, drive conversions, and scale your content strategy effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results for Content Marketers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how AI-powered content marketing delivers measurable improvements across all key metrics.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides cutting-edge technology to revolutionize your content marketing strategy.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {capability.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-300 text-lg">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From blog posts to social media content, our AI suite handles all your content creation needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {contentType.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{contentType.title}</h3>
                    <p className="text-gray-300 text-lg">{contentType.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Content Marketing Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, optimize, and distribute content that drives results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Content Marketing Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your content marketing needs and budget.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers who are already using AI to create better content, reach more audiences, and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Add missing icon component
const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default AIContentMarketingSuite;