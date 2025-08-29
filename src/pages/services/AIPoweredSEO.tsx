import React from 'react';
import { motion } from 'framer-motion';
import { Search, Brain, TrendingUp, BarChart3, Target, Zap, CheckCircle, ArrowRight, Globe, Users, Clock, Shield, Eye, MousePointer, Smartphone } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function AIPoweredSEO() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Analysis",
      description: "Advanced AI algorithms analyze your content for SEO optimization opportunities"
    },
    {
      icon: Target,
      title: "Semantic Keyword Research",
      description: "Discover long-tail keywords and semantic variations using machine learning"
    },
    {
      icon: TrendingUp,
      title: "Competitive Intelligence",
      description: "AI-powered analysis of competitor strategies and market trends"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast search performance and identify growth opportunities"
    },
    {
      icon: Globe,
      title: "Local SEO Optimization",
      description: "AI-driven local search optimization for location-based businesses"
    },
    {
      icon: Shield,
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis with AI-powered recommendations"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 pages analysis",
        "Basic keyword research",
        "Monthly reports",
        "Email support",
        "Core SEO recommendations"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 pages analysis",
        "Advanced AI insights",
        "Weekly reports",
        "Priority support",
        "Competitive analysis",
        "Content optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited pages",
        "Custom AI models",
        "Real-time monitoring",
        "24/7 support",
        "White-label reports",
        "Dedicated SEO specialist"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Rankings",
      description: "Improve search rankings by up to 300% with AI-optimized strategies"
    },
    {
      icon: Users,
      title: "Increased Traffic",
      description: "Drive more organic traffic through intelligent content optimization"
    },
    {
      icon: Zap,
      title: "Faster Results",
      description: "See improvements in as little as 30 days with AI-powered insights"
    },
    {
      icon: BarChart3,
      title: "Better ROI",
      description: "Maximize your SEO investment with data-driven optimization"
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Understand search intent and user behavior patterns"
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "Forecast search trends and algorithm changes"
    },
    {
      icon: Eye,
      title: "Content Optimization",
      description: "AI-powered content recommendations for better engagement"
    },
    {
      icon: MousePointer,
      title: "User Experience Analysis",
      description: "Optimize for Core Web Vitals and user engagement metrics"
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic relative overflow-hidden">
      <SEO 
        title="AI-Powered SEO Services - Zion Tech Group"
        description="Revolutionize your search rankings with our AI-powered SEO services. Machine learning algorithms that adapt and optimize for maximum visibility."
        keywords="AI SEO, machine learning SEO, semantic search optimization, AI content analysis, SEO automation"
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <div className="w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container-responsive">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Search className="w-4 h-4 mr-2" />
                AI-Powered SEO Excellence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">AI-Powered</span> SEO That Ranks
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Revolutionize your search engine optimization with machine learning algorithms that adapt, 
                learn, and optimize your content for maximum visibility. Stay ahead of the competition with AI-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Capabilities
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our advanced AI algorithms understand search intent, user behavior, and algorithm changes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-zinc-400">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/5">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI SEO?
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our comprehensive approach combines cutting-edge AI with proven SEO methodologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our AI-powered SEO tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/50' 
                      : 'bg-white/5 border border-white/10'
                  } backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zinc-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zinc-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                See measurable improvements in your search rankings and organic traffic
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-zinc-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Dominate Search Rankings?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their SEO with AI-powered optimization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}