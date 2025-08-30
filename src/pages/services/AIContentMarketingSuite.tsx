import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  PenTool, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Cloud,
  Lock,
  Rocket,
  CheckCircle,
  ArrowRight,
  PieChart,
  LineChart,
  Activity,
  Target,
  Lightbulb,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  MessageCircle,
  Calendar,
  AlertTriangle,
  Star,
  Users,
  Cpu,
  Network,
  BookOpen,
  Image,
  Video,
  Mic,
  FileText,
  Hash,
  Tag,
  Link,
  ExternalLink,
  Play,
  Camera,
  Headphones,
  ShoppingCart,
  Building,
  DollarSign
} from 'lucide-react';
import { SEO } from "../../components/SEO";

export default function AIContentMarketingSuite() {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Advanced AI that creates high-quality, engaging content in seconds - from blog posts and social media to email campaigns and product descriptions.'
    },
    {
      icon: PenTool,
      title: 'Smart Content Optimization',
      description: 'AI-powered SEO optimization, readability scoring, and content performance prediction to maximize engagement and conversions.'
    },
    {
      icon: Zap,
      title: 'Automated Content Distribution',
      description: 'Intelligent scheduling and multi-channel distribution that reaches your audience at the optimal time across all platforms.'
    },
    {
      icon: Eye,
      title: 'Performance Analytics',;
      description: 'Real-time content performance tracking with AI insights that help you optimize your content strategy and ROI.';
    };
  ];

  const capabilities = [
    {
      title: 'Content Creation',
      description: 'AI-powered generation of various content types with brand voice consistency',
      icon: PenTool,
      benefits: ['Blog posts', 'Social media content', 'Email campaigns', 'Product descriptions']
    },
    {
      title: 'SEO Optimization',
      description: 'Intelligent keyword research and content optimization for search engines',
      icon: Search,
      benefits: ['Keyword research', 'Content optimization', 'Ranking analysis', 'Competitor insights']
    },
    {
      title: 'Multi-format Support',
      description: 'Create content in text, image, video, and audio formats with AI assistance',
      icon: FileText,
      benefits: ['Text generation', 'Image creation', 'Video editing', 'Audio transcription']
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive performance tracking and AI-powered recommendations',
      icon: BarChart3,;
      benefits: ['Performance metrics', 'Audience insights', 'ROI tracking', 'Optimization tips'];
    };
  ];

  const useCases = [
    {
      industry: 'E-commerce & Retail',
      description: 'Generate product descriptions, create engaging social media content, and optimize product pages for better conversions',
      icon: ShoppingCart,
      metrics: ['Content Production', 'SEO Rankings', 'Conversion Rates', 'Engagement Levels']
    },
    {
      industry: 'B2B Marketing',
      description: 'Create thought leadership content, optimize landing pages, and generate email sequences that drive lead generation',
      icon: Building,
      metrics: ['Lead Generation', 'Content Quality', 'Email Performance', 'Landing Page Conversion']
    },
    {
      industry: 'Agency & Freelance',
      description: 'Scale content production, maintain quality across clients, and deliver results faster with AI assistance',
      icon: Users,
      metrics: ['Production Speed', 'Client Satisfaction', 'Content Quality', 'Project Delivery']
    },
    {
      industry: 'Publishing & Media',
      description: 'Generate articles, optimize headlines, and create engaging content that drives reader engagement and retention',
      icon: BookOpen,;
      metrics: ['Reader Engagement', 'Content Quality', 'Publishing Speed', 'Audience Growth'];
    };
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '10x Content Production',
      description: 'Create 10x more content in the same time while maintaining or improving quality standards.'
    },
    {
      icon: Search,
      title: 'Better SEO Rankings',
      description: 'Improve search engine rankings by 40-60% with AI-optimized content and keyword strategies.'
    },
    {
      icon: Users,
      title: 'Higher Engagement',
      description: 'Increase audience engagement by 35-50% with personalized, optimized content that resonates.'
    },
    {
      icon: DollarSign,
      title: 'Improved ROI',;
      description: 'Boost marketing ROI by 25-40% through better content performance and conversion optimization.';
    };
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 50 content pieces/month',
        'Basic AI generation',
        'SEO optimization',
        'Standard templates',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 200 content pieces/month',
        'Advanced AI models',
        'Multi-format support',
        'Custom templates',
        'Priority support',
        'Analytics dashboard'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited content',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'Advanced analytics'
      ],
      cta: 'Contact Sales',;
      popular: false;
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="AI Content Marketing Suite | Zion Tech Group"
        description="Create 10x more content with AI-powered generation, optimization, and distribution. Improve SEO rankings by 40-60% and boost engagement by 35-50%."
        keywords="AI content marketing, content generation, SEO optimization, content automation, marketing automation, content creation"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            animate = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
              AI Content Marketing Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create 10x more content with AI-powered generation, optimization, and distribution. 
              Improve SEO rankings by 40-60% and boost engagement by 35-50%.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with deep marketing expertise to deliver 
              unprecedented content creation and optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Content Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end content marketing tools designed to transform your content strategy 
              and drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Content Marketing Suite is transforming industries across the globe, 
              enabling scalable content creation and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Content Marketing Suite can transform your content strategy 
              and drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect content marketing plan for your business needs. All plans include a 14-day free trial 
              and our industry-leading 99.9% uptime guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10' 
                    : 'border-slate-700/50 hover:border-green-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                    : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI Content Marketing Suite deployment 
              and rapid content strategy transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy Assessment',
                description: 'Evaluate your current content strategy and identify optimization opportunities'
              },
              {
                step: '02',
                title: 'Platform Setup',
                description: 'Configure AI models, templates, and integrate with your existing tools'
              },
              {
                step: '03',
                title: 'Team Training',
                description: 'Train your team on AI content creation and optimization best practices'
              },
              {
                step: '04',
                title: 'Launch & Optimize',
                description: 'Go live with continuous monitoring and ongoing optimization support'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 


}}
                whileInView = {
  { opacity: 1,
  y: 0 


}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 


}}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


}}
            whileInView = {
  { opacity: 1,
  y: 0 


}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how AI-powered Content Marketing Suite can revolutionize your content creation 
              and drive unprecedented engagement and conversions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                +1 302 464 0950
              </a>
              <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
        </div>;
      </section>;
    </div>;
  );
}