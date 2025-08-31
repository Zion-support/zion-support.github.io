import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  PenTool, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Sparkles,
  Rocket,
  Globe,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory,
  BarChart3,
  Calendar,
  Mail as MailIcon,
  Share2,
  Monitor,
  PieChart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIContentMarketingAutomation() {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate high-quality, SEO-optimized content using advanced language models'
    },
    {
      icon: PenTool,
      title: 'Multi-Format Content',
      description: 'Create blogs, social media posts, emails, and landing pages from single prompts'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track content performance with AI-powered insights and optimization recommendations'
    },
    {
      icon: Target,
      title: 'Audience Segmentation',
      description: 'Automatically segment audiences and personalize content for maximum engagement'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-optimized posting schedules based on audience behavior and engagement patterns'
    },
    {
      icon: Share2,
      title: 'Cross-Platform Distribution',
      description: 'Automatically distribute content across multiple channels with platform-specific optimization'
    }
  ];

  const benefits = [
    '10x faster content creation with AI assistance',
    'Improved SEO rankings through intelligent optimization',
    'Increased engagement with personalized content',
    'Cost reduction through automation',
    'Better ROI tracking and analytics',
    'Consistent brand voice across all channels'
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      applications: ['Product descriptions', 'Email campaigns', 'Social media content', 'Blog posts'],
      icon: ShoppingCart
    },
    {
      industry: 'B2B Marketing',
      applications: ['Thought leadership content', 'Case studies', 'White papers', 'LinkedIn posts'],
      icon: Users
    },
    {
      industry: 'Agency Services',
      applications: ['Client content creation', 'Campaign management', 'Performance reporting', 'A/B testing'],
      icon: Globe
    },
    {
      industry: 'SaaS Companies',
      applications: ['Feature announcements', 'User onboarding', 'Support documentation', 'Community content'],
      icon: Cpu
    }
  ];

  const technologies = [
    'OpenAI GPT-4 & Claude',
    'Natural Language Processing',
    'Machine Learning Algorithms',
    'SEO Optimization Tools',
    'Social Media APIs',
    'Analytics & Reporting'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI content generation (50 pieces/month)',
        'Basic SEO optimization',
        'Social media scheduling',
        'Email marketing automation',
        'Basic analytics dashboard',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and marketing teams',
      features: [
        'AI content generation (200 pieces/month)',
        'Advanced SEO optimization',
        'Multi-platform distribution',
        'Advanced audience segmentation',
        'Performance analytics',
        'Priority support',
        'Custom templates'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited AI content generation',
        'Custom AI model training',
        'Advanced analytics & reporting',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Content Marketing Automation Platform - Zion Tech Group"
        description="Transform your content marketing with AI-powered automation. Generate, optimize, and distribute content across all channels with intelligent automation."
        keywords="AI content marketing, content automation, AI writing, marketing automation, content generation, SEO optimization"
        canonical="https://ziontechgroup.com/services/ai-content-marketing-automation"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Content Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Automation Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Revolutionize your content marketing with intelligent automation. Generate, optimize, and distribute 
              high-quality content across all channels with AI-powered insights and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Marketing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to create, optimize, and distribute content that converts
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your content marketing with measurable results and intelligent automation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how different industries leverage our platform for content marketing success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-slate-300">• {app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-slate-800/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-cyan-400 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join thousands of businesses already using our AI-powered platform to create better content faster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-slate-300 hover:text-cyan-400 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}