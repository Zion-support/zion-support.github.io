import React from 'react';
import { motion } from 'framer-motion';
import { 
<<<<<<< HEAD
  PenTool, 
  Target, 
  TrendingUp, 
  Zap, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Users,
  Globe,
  Star,
  Award,
  FileText,
  Search,
  Share2
} from 'lucide-react';

export default function AIContentMarketingSuite() {
=======
  PenTool, Brain, Zap, Globe, Users, BarChart3, 
  Lock, Cpu, Network, Eye, AlertTriangle, CheckCircle,
  ArrowRight, Star, Award, Phone, Mail, MapPin, TrendingUp,
  Target, Shield, Gauge, Clock, FileText, Search, MessageSquare
} from 'lucide-react';

const AIContentMarketingSuite: React.FC = () => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
<<<<<<< HEAD
      description: "Intelligent content creation for blogs, social media, and marketing campaigns"
=======
      description: "Generate high-quality, SEO-optimized content in seconds using advanced AI"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    },
    {
      icon: Search,
      title: "SEO Optimization",
<<<<<<< HEAD
      description: "AI-powered keyword research and content optimization for search engines"
=======
      description: "AI-powered keyword research and content optimization for maximum visibility"
    },
    {
      icon: PenTool,
      title: "Content Planning",
      description: "Intelligent content calendar and topic suggestions based on trending data"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive analytics to track content performance and ROI"
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Automated social media posting and engagement optimization"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    },
    {
      icon: Target,
      title: "Audience Targeting",
<<<<<<< HEAD
      description: "Smart audience segmentation and personalized content delivery"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time content performance tracking and optimization insights"
    },
    {
      icon: Share2,
      title: "Multi-Channel Distribution",
      description: "Automated content distribution across all marketing channels"
    },
    {
      icon: Zap,
      title: "Content Automation",
      description: "Streamlined workflows for content planning, creation, and publishing"
    }
  ];

  const benefits = [
    "Increase content engagement by 80%",
    "Reduce content creation time by 70%",
    "Improve SEO rankings by 60%",
    "Boost conversion rates by 45%",
    "Automate content distribution",
    "Real-time performance optimization"
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "Social Media Content",
    "Email Marketing",
    "Video Scripts",
    "Landing Pages",
    "Product Descriptions"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,800",
      period: "/month",
      description: "For small businesses",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI generation",
        "Standard SEO tools",
        "Email support",
        "Core integrations"
      ]
    },
    {
      name: "Professional",
      price: "$3,800",
      period: "/month",
      description: "For growing companies",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI generation",
        "Full SEO suite",
        "Priority support",
        "Advanced analytics"
      ],
=======
      description: "AI-driven audience segmentation and personalized content delivery"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "Up to 50 AI-generated articles/month",
        "Basic SEO optimization",
        "Content calendar",
        "Social media scheduling",
        "Basic analytics",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 200 AI-generated articles/month",
        "Advanced SEO optimization",
        "AI content planning",
        "Social media automation",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited content",
        "Custom AI models",
        "White-label options",
        "Dedicated support",
        "SLA guarantees"
      ]
=======
      price: "$999",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited AI-generated content",
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Multi-brand management"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "10x Content Production",
      description: "Generate high-quality content 10x faster than traditional methods",
      icon: Zap
    },
    {
      title: "SEO Dominance",
      description: "Achieve top search rankings with AI-optimized content",
      icon: Search
    },
    {
      title: "Cost Efficiency",
      description: "Reduce content creation costs by up to 80%",
      icon: DollarSign
    },
    {
      title: "24/7 Automation",
      description: "Automated content creation and distribution around the clock",
      icon: Clock
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "SEO-optimized blog articles with engaging headlines and meta descriptions",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Social Media",
      description: "Platform-specific content for Facebook, Twitter, LinkedIn, and Instagram",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Email Marketing",
      description: "Personalized email campaigns with AI-driven subject lines and content",
      icon: Mail,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Video Scripts",
      description: "Engaging video scripts optimized for different platforms and audiences",
      icon: Eye,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Product Descriptions",
      description: "Compelling product descriptions that convert browsers into buyers",
      icon: Target,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Press Releases",
      description: "Professional press releases with newsworthy angles and SEO optimization",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI-Powered Content Marketing
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Marketing Suite
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your content marketing with AI-powered creation, optimization, and distribution that drives engagement, conversions, and business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300">
                Schedule Demo
=======
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Content Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {" "}Content Marketing Suite
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your content marketing with AI-powered content generation, 
              SEO optimization, and automated distribution. Create 10x more content in 1/10th the time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Content Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage AI technology to create, optimize, and distribute compelling content across all channels.
=======
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Content Marketing Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI suite handles every aspect of content marketing, from ideation to distribution, 
              ensuring maximum engagement and ROI for your brand.
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Content Types Covered
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI suite handles every type of content your marketing strategy needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-pink-400" />
                  <span className="text-white font-medium text-lg">{type}</span>
                </div>
=======
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Generated Content Types
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI can create any type of content you need, optimized for your audience 
              and designed to drive engagement and conversions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${contentType.color} rounded-lg flex items-center justify-center mb-4`}>
                  <contentType.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contentType.title}</h3>
                <p className="text-gray-300">{contentType.description}</p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
<<<<<<< HEAD
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Content Marketing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join organizations that have revolutionized their content marketing with AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
=======
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Content Suite?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of content marketing with proven results 
              and industry-leading AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the content marketing solution that fits your content needs and budget.
=======
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your content marketing needs and team size.
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
            {pricing.map((plan, index) => (
=======
            {pricingTiers.map((tier, index) => (
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-pink-500/50 ring-2 ring-pink-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
=======
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
=======
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
<<<<<<< HEAD
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                    : 'border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
=======
                  tier.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.cta}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600/20 to-purple-600/20">
=======
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            viewport={{ once: true }}
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
<<<<<<< HEAD
              Join the AI revolution in content marketing and drive unprecedented engagement and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300">
                Schedule Demo
              </button>
=======
              Contact our team to learn more about implementing AI-powered content marketing 
              for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Download Brochure
              </button>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default AIContentMarketingSuite;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
