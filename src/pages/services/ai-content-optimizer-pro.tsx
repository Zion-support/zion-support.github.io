import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  Target,
  Activity,
  Lightbulb,
  Database,
  Cpu,
  Globe,
  Lock,
  MessageCircle,
  FileText,
  Edit3,
  Eye,
  Users,
  Target as TargetIcon,
  BarChart,
  Settings,
  Palette,
  Monitor,
  Smartphone,
  Globe2,
  Zap as ZapIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIContentOptimizerPro = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Content Analysis",
      description: "Advanced machine learning algorithms that analyze content performance and provide actionable optimization recommendations."
    },
    {
      icon: Search,
      title: "SEO Optimization Engine",
      description: "Intelligent SEO analysis with real-time keyword research, competitor analysis, and content gap identification."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive content performance tracking with engagement metrics, conversion rates, and ROI analysis."
    },
    {
      icon: Target,
      title: "Audience Intelligence",
      description: "Deep audience analysis to understand preferences, behavior patterns, and content consumption habits."
    },
    {
      icon: Edit3,
      title: "Content Enhancement",
      description: "AI-powered content suggestions, grammar correction, tone optimization, and readability improvements."
    },
    {
      icon: Shield,
      title: "Brand Safety & Compliance",
      description: "Content moderation, brand safety checks, and compliance monitoring for regulatory requirements."
    }
  ];

  const benefits = [
    "Increase content engagement by up to 60%",
    "Improve SEO rankings by 40%",
    "Boost conversion rates by 35%",
    "Reduce content creation time by 50%",
    "Enhance brand consistency across all channels",
    "Optimize content ROI with data-driven insights"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "Up to 100 content pieces/month",
        "Basic SEO optimization",
        "Content performance analytics",
        "Email support",
        "Standard templates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 1,000 content pieces/month",
        "Advanced AI optimization",
        "Competitor analysis",
        "Priority support",
        "Custom templates",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with extensive content needs",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Content Marketing",
      description: "Optimize blog posts, articles, and social media content for maximum engagement and SEO performance.",
      icon: FileText
    },
    {
      title: "E-commerce",
      description: "Enhance product descriptions, category pages, and marketing copy to improve conversion rates.",
      icon: ShoppingCart
    },
    {
      title: "Digital Agencies",
      description: "Provide clients with AI-powered content optimization services and performance insights.",
      icon: Users
    },
    {
      title: "Enterprise Marketing",
      description: "Scale content optimization across multiple brands, languages, and markets efficiently.",
      icon: Building2
    }
  ];

  const integrations = [
    "WordPress & CMS platforms",
    "Social media platforms",
    "Email marketing tools",
    "Analytics platforms",
    "CRM systems",
    "Marketing automation tools"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8">
              <Search className="w-4 h-4 mr-2" />
              AI-Powered Content Optimization
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Optimizer Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your content strategy with AI that analyzes, optimizes, and enhances your content 
              for maximum engagement, SEO performance, and conversion rates across all channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-xl shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Features for Content Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge machine learning with comprehensive analytics 
              to give you unprecedented insights into content performance and optimization opportunities.
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
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your Content Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies that have revolutionized their content strategies 
              with our AI-powered optimization platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered content optimization platform adapts to your industry's unique 
              challenges and content requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum efficiency and productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ZapIcon className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-gray-300 text-sm font-medium">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial 
              with full access to all features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-green-500 bg-slate-700/80 shadow-2xl shadow-green-500/25' 
                    : 'border-slate-600 bg-slate-700/50 hover:border-green-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that are already using AI to transform their content performance. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-xl shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Demo
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing icon components
const ShoppingCart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Play = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Building2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default AIContentOptimizerPro;