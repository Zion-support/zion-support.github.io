import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Image, 
  Video, 
  Music, 
  FileText, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText as FileTextIcon,
  Search,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Shield,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Users,
  Zap,
  Cpu,
  Network,
  Atom,
  Globe,
  Globe as GlobeIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldIcon,
  SmartphoneIcon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  GitForkIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  SearchIcon,
  ClockIcon,
  DollarSignIcon,
  TargetIcon as TargetIcon2,
  LightbulbIcon as LightbulbIcon2,
  ShieldIcon as ShieldIcon2,
  SmartphoneIcon as SmartphoneIcon2,
  CodeIcon as CodeIcon2,
  ServerIcon as ServerIcon2,
  ChipIcon as ChipIcon2,
  WifiIcon as WifiIcon2,
  ShieldCheckIcon as ShieldCheckIcon2,
  BotIcon as BotIcon2,
  GitForkIcon as GitForkIcon2,
  EyeIcon as EyeIcon2,
  SparklesIcon as SparklesIcon2,
  PhoneIcon as PhoneIcon2,
  MailIcon as MailIcon2,
  MapPinIcon as MapPinIcon2,
  MessageSquareIcon as MessageSquareIcon2,
  FileTextIcon as FileTextIcon2,
  SearchIcon as SearchIcon2,
  ClockIcon as ClockIcon2,
  DollarSignIcon as DollarSignIcon2
} from 'lucide-react';

const AIContentCreationStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: "AI Text Generation",
      items: [
        "Blog Posts & Articles",
        "Social Media Content",
        "Marketing Copy",
        "Product Descriptions",
        "Email Campaigns",
        "SEO-Optimized Content"
      ]
    },
    {
      category: "AI Image Creation",
      items: [
        "Product Photography",
        "Marketing Graphics",
        "Social Media Images",
        "Website Visuals",
        "Brand Assets",
        "Custom Illustrations"
      ]
    },
    {
      category: "AI Video Production",
      items: [
        "Product Demos",
        "Marketing Videos",
        "Social Media Clips",
        "Training Videos",
        "Brand Stories",
        "Animated Content"
      ]
    },
    {
      category: "AI Audio Generation",
      items: [
        "Voice-overs",
        "Podcast Content",
        "Background Music",
        "Sound Effects",
        "Audio Books",
        "Multilingual Audio"
      ]
    },
    {
      category: "Content Management",
      items: [
        "Content Calendar",
        "Workflow Automation",
        "Team Collaboration",
        "Version Control",
        "Performance Analytics",
        "Content Optimization"
      ]
    },
    {
      category: "AI-Powered Insights",
      items: [
        "Content Performance Analysis",
        "Audience Engagement Metrics",
        "Trend Prediction",
        "Competitive Analysis",
        "SEO Recommendations",
        "ROI Tracking"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Content Creator",
      price: "$1,999",
      period: "/month",
      description: "Essential AI content creation for small businesses",
      features: [
        "AI Text Generation (100 pieces/month)",
        "Basic Image Creation (50 images/month)",
        "Content Calendar",
        "Email Support",
        "Integration with 15+ Platforms",
        "Basic Analytics Dashboard"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Content Studio Pro",
      price: "$4,999",
      period: "/month",
      description: "Advanced AI content creation for growing businesses",
      features: [
        "Unlimited AI Text Generation",
        "Unlimited Image Creation",
        "AI Video Production (25 videos/month)",
        "AI Audio Generation (50 audio pieces/month)",
        "Priority Support (6-hour response)",
        "Integration with 35+ Platforms",
        "Advanced Analytics & Insights",
        "Team Collaboration Tools"
      ],
      popular: true,
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Enterprise Studio",
      price: "$12,999",
      period: "/month",
      description: "Complete AI content creation for major organizations",
      features: [
        "Unlimited All Content Types",
        "Custom AI Model Training",
        "White-label Solutions",
        "Advanced Workflow Automation",
        "24/7 Dedicated Support",
        "Integration with 100+ Platforms",
        "Custom Brand Guidelines",
        "API Access & Webhooks",
        "SLA Guarantees",
        "Custom Compliance Features"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Create content 10x faster with AI automation"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce content creation costs by up to 70%"
    },
    {
      icon: Star,
      title: "Quality & Consistency",
      description: "Maintain high-quality, consistent brand voice"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Create content in multiple languages and formats"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "AI-optimized content for better engagement"
    },
    {
      icon: Users,
      title: "Scalability",
      description: "Scale content production without adding staff"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Generate product descriptions, marketing copy, and visual content at scale",
      results: "70% faster content creation, 40% increase in conversions, 24/7 content production"
    },
    {
      industry: "Marketing Agencies",
      description: "Deliver high-quality content for multiple clients efficiently",
      results: "5x content output, 60% cost reduction, improved client satisfaction"
    },
    {
      industry: "SaaS Companies",
      description: "Create technical documentation, marketing materials, and user guides",
      results: "80% faster documentation, consistent brand voice, improved user experience"
    },
    {
      industry: "Educational Institutions",
      description: "Generate learning materials, course content, and educational resources",
      results: "Massive content scaling, personalized learning materials, cost-effective production"
    },
    {
      industry: "Media & Publishing",
      description: "Create articles, social media content, and multimedia materials",
      results: "10x content volume, AI-powered insights, audience engagement optimization"
    }
  ];

  const contentTypes = [
    {
      type: "Text Content",
      examples: "Blog posts, articles, social media posts, emails, product descriptions",
      aiCapabilities: "Natural language generation, SEO optimization, tone adjustment",
      output: "Unlimited text generation with human-like quality"
    },
    {
      type: "Visual Content",
      examples: "Images, graphics, infographics, social media visuals, brand assets",
      aiCapabilities: "Image generation, style transfer, brand consistency",
      output: "High-resolution visuals in any style or format"
    },
    {
      type: "Video Content",
      examples: "Product demos, marketing videos, social media clips, training videos",
      aiCapabilities: "Video generation, editing automation, voice synthesis",
      output: "Professional-quality videos with minimal human input"
    },
    {
      type: "Audio Content",
      examples: "Voice-overs, podcasts, background music, sound effects",
      aiCapabilities: "Voice cloning, music generation, audio enhancement",
      output: "Studio-quality audio in multiple languages and styles"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Content Creation Speed",
      description: "Time to create professional content",
      improvement: "10x faster than traditional methods",
      impact: "Increased content volume and faster time-to-market"
    },
    {
      metric: "Cost per Content Piece",
      description: "Average cost to create one content piece",
      improvement: "70% cost reduction",
      impact: "Significant budget savings and ROI improvement"
    },
    {
      metric: "Content Quality Score",
      description: "AI-generated content quality rating",
      improvement: "95% quality score",
      impact: "Professional-grade content without human errors"
    },
    {
      metric: "Engagement Rate",
      description: "Audience engagement with AI-generated content",
      improvement: "40% increase in engagement",
      impact: "Better audience connection and conversion rates"
    },
    {
      metric: "SEO Performance",
      description: "Search engine optimization results",
      improvement: "60% better SEO rankings",
      impact: "Improved organic traffic and visibility"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-6 mx-auto mb-8">
              <PenTool className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                Creation Studio Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your content creation with our comprehensive AI-powered platform. 
              From text and images to videos and audio, we're enabling unlimited creative possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'overview', name: 'Overview', icon: Eye },
            { id: 'features', name: 'Features', icon: CheckCircle },
            { id: 'pricing', name: 'Pricing', icon: DollarSign },
            { id: 'benefits', name: 'Benefits', icon: Star },
            { id: 'content-types', name: 'Content Types', icon: FileText },
            { id: 'metrics', name: 'Performance', icon: BarChart3 },
            { id: 'use-cases', name: 'Use Cases', icon: Target },
            { id: 'contact', name: 'Contact', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">The Future of Content Creation</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI-Powered Content Creation Studio Pro represents the next generation of 
                creative tools. Combining cutting-edge AI, advanced automation, and professional 
                quality to revolutionize how content is created and managed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-4 mx-auto mb-4">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Content Generation</h4>
                  <p className="text-gray-300">Text, images, videos, and audio creation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Analytics & Insights</h4>
                  <p className="text-gray-300">Performance tracking and optimization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Team Collaboration</h4>
                  <p className="text-gray-300">Workflow management and team coordination</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Content Creation Features</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform provides everything you need for modern content creation, from 
                AI-powered generation to advanced management and analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-2 mr-3">
                      <PenTool className="w-4 h-4 text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Content Creation Investment</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the plan that best fits your content creation needs. All plans include our core 
                AI content generation features with different levels of customization and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-pink-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Need a custom solution? Contact us for enterprise pricing and custom development.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI-Powered Content Creation Studio Pro delivers measurable results that transform 
                content creation and enable organizations to achieve their creative goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 flex items-start"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-4 mr-4 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Content Creation Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">10x</div>
                  <p className="text-gray-300">Faster Content Creation</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
                  <p className="text-gray-300">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-400 mb-2">40%</div>
                  <p className="text-gray-300">Engagement Increase</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Types Tab */}
        {activeTab === 'content-types' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Content Types & Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform supports all major content types, from text and images to videos and audio. 
                Each content type is powered by advanced AI for professional-quality results.
              </p>
            </div>

            <div className="space-y-6">
              {contentTypes.map((contentType, index) => (
                <motion.div
                  key={contentType.type}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{contentType.type}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{contentType.examples}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-pink-400 font-semibold mb-2">AI Capabilities:</h4>
                      <p className="text-gray-300 text-sm">{contentType.aiCapabilities}</p>
                    </div>
                    <div>
                      <h4 className="text-rose-400 font-semibold mb-2">Output:</h4>
                      <p className="text-gray-300 text-sm">{contentType.output}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Performance Metrics Tab */}
        {activeTab === 'metrics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Performance Metrics</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Track and measure your content creation performance with our comprehensive 
                metrics dashboard and AI-powered insights.
              </p>
            </div>

            <div className="space-y-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{metric.metric}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-3">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{metric.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-pink-400 font-semibold mb-2">Improvement:</h4>
                      <p className="text-gray-300 text-sm">{metric.improvement}</p>
                    </div>
                    <div>
                      <h4 className="text-rose-400 font-semibold mb-2">Impact:</h4>
                      <p className="text-gray-300 text-sm">{metric.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform has been successfully implemented across various industries, delivering 
                measurable results and transforming content creation processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">Results Achieved:</h4>
                    <p className="text-green-300 text-sm">{useCase.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Transform Your Content Creation</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Ready to revolutionize your content creation process? Contact our team to 
                schedule a personalized demo and discuss your specific content needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-pink-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a href="tel:+13024640950" className="text-pink-400 hover:text-pink-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-pink-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-pink-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-pink-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Website</h4>
                      <a href="https://ziontechgroup.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry-leading AI content creation expertise</li>
                    <li>• Proven track record of successful implementations</li>
                    <li>• 24/7 technical support and monitoring</li>
                    <li>• Competitive pricing with premium AI features</li>
                    <li>• Global network of content creation partners</li>
                    <li>• Future-proof AI content technology solutions</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Industry</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500">
                      <option value="">Select your industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="marketing-agencies">Marketing Agencies</option>
                      <option value="saas">SaaS Companies</option>
                      <option value="education">Educational Institutions</option>
                      <option value="media-publishing">Media & Publishing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Tell us about your content creation needs and requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
               Join the organizations already transforming their content creation with our 
               AI-Powered Content Creation Studio Pro. The future of creative content is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIContentCreationStudio;