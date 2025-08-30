import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Search, Brain, TrendingUp, BarChart3, Target, Zap, CheckCircle, ArrowRight, Globe, Users, Clock, Shield, Eye, MousePointer, Smartphone import { SEO              } from '@/components/SEO';
import { Link              } from 'react-router-dom.ts';
=======
import { SEO              } from '../../components/SEO';
import { Search, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Globe, 
  Users, 
  Clock, 
  Award, 
  Star,
  Cpu,
  Database,
  Filter,
  Download,
  Share2,
  CheckCircle,
  Eye,
  MousePointer,
  Smartphone,
  Monitor
             } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function AIPoweredSEO(...args: any[]): any {
  const features = [
    {
      icon: Search,
      title: "AI Keyword Research",
      description: "Intelligent keyword discovery and analysis using machine learning algorithms."
    },
    {
      icon: TrendingUp,
      title: "Content Optimization",
      description: "AI-powered content analysis and optimization for better search rankings."
    },
    {
      icon: Target,
      title: "Competitive Analysis",
      description: "Advanced competitor research and gap analysis with AI insights."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Real-time SEO performance monitoring and analytics dashboard."
    },
    {
      icon: Globe,
<<<<<<< HEAD
      title: "Local SEO Optimization",
      description: "AI-driven local search optimization for location-based businesses"
    },
    {
      icon: Shield,
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis with AI-powered recommendations"

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

=======
      title: "Local SEO",
      description: "AI-driven local search optimization and Google My Business management."
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const benefits = [
    "Increase organic traffic by 40-80% with AI-optimized strategies",
    "Improve search rankings by 3-5 positions on average",
    "Reduce SEO implementation time by 60-70%",
    "Boost conversion rates by 25-45% through better targeting",
    "Enhance user experience and engagement metrics",
    "Achieve sustainable long-term SEO results"
  ];

  const seoProcess = [
    {
      stage: "Research & Analysis",
      description: "AI-powered keyword research, competitor analysis, and technical audit",
      icon: Search
    },
    {
      stage: "Content Strategy",
      description: "Data-driven content planning and optimization recommendations",
      icon: Target
    },
    {
      stage: "Technical Optimization",
      description: "Automated technical SEO improvements and performance optimization",
      icon: Cpu
    },
    {
<<<<<<< HEAD
      icon: BarChart3,
      title: "Better ROI",
      description: "Maximize your SEO investment with data-driven optimization"

=======
      stage: "Monitoring & Reporting",
      description: "Real-time performance tracking and actionable insights",
      icon: BarChart3
    },
    {
      stage: "Optimization",
      description: "Continuous improvement based on AI insights and data",
      icon: TrendingUp
    },
    {
      stage: "Reporting",
      description: "Comprehensive reporting and ROI measurement",
      icon: Eye
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize product pages, category pages, and search functionality",
      icon: ShoppingCart
    },
    {
      industry: "B2B Services",
      description: "Improve lead generation through targeted keyword optimization",
      icon: Building
    },
    {
      industry: "Content Marketing",
      description: "Enhance content discoverability and engagement metrics",
      icon: FileText
    },
    {
<<<<<<< HEAD
      icon: MousePointer,
      title: "User Experience Analysis",
      description: "Optimize for Core Web Vitals and user engagement metrics"

  ];

  return (
    <div className="min-h-screen bg-futuristic relative overflow-hidden">
      <SEO
        title="AI-Powered SEO Services - Zion Tech Group"
        description="Revolutionize your search rankings with our AI-powered SEO services. Machine learning algorithms that adapt and optimize for maximum visibility."
        keywords="AI SEO, machine learning SEO, semantic search optimization, AI content analysis, SEO automation"
=======
      industry: "Local Businesses",
      description: "Boost local search visibility and Google My Business optimization",
      icon: MapPin
    },
    {
      industry: "Technology",
      description: "SaaS SEO, technical content optimization, and developer targeting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered SEO - Zion Tech Group"
        description="Transform your search engine optimization with AI-powered tools. Improve rankings, increase traffic, and drive organic growth."
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 


<<<<<<< HEAD
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container-responsive">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

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

                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"

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

              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Capabilities
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our advanced AI algorithms understand search intent, user behavior, and algorithm changes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {aiCapabilities.map((capability, index)              => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

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

              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI SEO?
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our comprehensive approach combines cutting-edge AI with proven SEO methodologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index)              => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              ))}
=======




}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Search className="w-4 h-4 mr-2" />
              AI-Powered SEO
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}SEO
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your search engine optimization with intelligent AI tools that analyze, 
              optimize, and continuously improve your website's search performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start SEO Audit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Pricing Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our AI-powered SEO tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index)              => (
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
=======
      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced SEO Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered SEO platform combines cutting-edge artificial intelligence with 
              proven optimization strategies to deliver exceptional search results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

<<<<<<< HEAD
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}

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

              <h2 className="text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                See measurable improvements in your search rankings and organic traffic
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
              {benefits.map((benefit, index)              => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

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

                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"

                  Get Custom Quote
                </Link>
=======





}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable SEO Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI-powered SEO solutions that deliver quantifiable 
              improvements in search rankings, traffic, and conversions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-purple-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI SEO algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global SEO expertise and strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Data-driven optimization approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 SEO monitoring & support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Proven SEO success track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              SEO Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive SEO process ensures systematic optimization 
              and continuous improvement of your search performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {seoProcess.map((stage, index)              => (
              <motion.div
                key={stage.stage}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {stage.stage}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how organizations across industries leverage our AI-powered SEO 
              to improve search rankings and drive organic growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index)              => (
              <motion.div
                key={useCase.industry}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 p-12 rounded-2xl border border-purple-400/20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your SEO?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations already leveraging AI-powered SEO to improve 
              search rankings and drive organic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
</div></div></div>}}}}}}