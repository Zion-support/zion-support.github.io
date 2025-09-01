<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Eye,
  Globe,
  PieChart,
  Monitor,
  FileText,
  Share2,
  Users,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICustomerSupportAutomation() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand customer queries and provide accurate responses 24/7."
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel Support",
      description: "Provide consistent support across email, chat, social media, and phone channels."
    },
    {
      icon: Target,
      title: "Personalized Responses",
      description: "Deliver personalized customer experiences based on customer history and preferences."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track support metrics and identify areas for improvement with comprehensive analytics."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline support processes with intelligent automation and routing."
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Seamlessly hand off complex issues to human agents when needed."
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { MessageCircle, Brain, Users, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, Zap, TrendingUp, BarChart3, Target, Globe, Heart, Settings, Monitor, Smartphone, Laptop, Headphones              } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Brain, Zap, Globe, Users, BarChart3, 
  Lock, Cpu, Network, Eye, AlertTriangle, CheckCircle,
  ArrowRight, Star, Award, Phone, Mail, MapPin, TrendingUp,
  Target, Shield, Gauge, Clock, FileText, Search, Headphones
} from 'lucide-react';

const AICustomerSupportAutomation: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context and provide accurate responses"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Support",
      description: "Unified support across email, chat, social media, and phone channels"
    },
    {
      icon: Search,
      title: "Knowledge Base Integration",
      description: "Seamless integration with existing knowledge bases and documentation"
    },
    {
      icon: BarChart3,
      title: "Sentiment Analysis",
      description: "Real-time customer sentiment tracking and escalation management"
    },
    {
      icon: Target,
      title: "Personalized Support",
      description: "AI-driven personalization based on customer history and preferences"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR and SOC2 compliance"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI chatbot",
        "Email and chat support",
        "Basic knowledge base",
        "Email support",
        "Standard integrations"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses and support teams",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI with custom training",
        "Multi-channel support",
        "Advanced knowledge base",
        "Sentiment analysis",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex support needs",
      features: [
        "Unlimited conversations",
        "Custom AI models",
        "White-label solution",
        "Advanced analytics",
        "API access",
        "Dedicated support team",
        "Custom development",
        "Multi-tenant architecture"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Provide instant support to customers around the clock without human intervention",
      icon: Clock
    },
    {
      title: "Cost Reduction",
      description: "Reduce support costs by up to 70% through automation and AI efficiency",
      icon: DollarSign
    },
    {
      title: "Faster Resolution",
      description: "Resolve customer issues 5x faster with AI-powered solutions",
      icon: Zap
    },
    {
      title: "Customer Satisfaction",
      description: "Improve customer satisfaction scores by up to 40%",
      icon: Star
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
    }
  ];

  const supportChannels = [
    {
<<<<<<< HEAD
      icon: Target,
      title: "24/7 Availability",
      description: "Provide round-the-clock customer support without increasing staff costs."
    },
    {
      icon: Lightbulb,
      title: "Faster Response Times",
      description: "Reduce customer wait times with instant AI-powered responses and automated solutions."
    },
    {
      icon: Clock,
      title: "Cost Efficiency",
      description: "Lower support costs while maintaining high customer satisfaction levels."
    },
    {
      icon: Star,
      title: "Improved Satisfaction",
      description: "Enhance customer experience with quick, accurate, and personalized support."
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "AI-powered chatbots for instant customer support and issue resolution."
    },
    {
      title: "Email Support",
      description: "Automated email responses and intelligent ticket routing for efficient support."
    },
    {
      title: "Social Media",
      description: "Monitor and respond to customer inquiries across all social platforms."
    },
    {
      title: "Phone Support",
      description: "Intelligent call routing and AI-assisted agent support for phone inquiries."
=======
      title: "Live Chat",
      description: "AI-powered live chat with instant responses and human handoff capabilities",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Automated email responses with intelligent routing and escalation",
      icon: Mail,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Phone Support",
      description: "AI voice assistants with natural language processing and call routing",
      icon: Phone,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Social Media",
      description: "Monitor and respond to customer inquiries across all social platforms",
      icon: Globe,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Self-Service Portal",
      description: "Intelligent knowledge base with AI-powered search and recommendations",
      icon: Search,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Mobile App Support",
      description: "In-app support with push notifications and contextual assistance",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500"
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
=======
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Customer Support Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-teal-100">
              Transform your customer support with AI-powered automation and intelligent assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
              >
                View All Services
              </Link>
=======
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              AI Customer Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Customer Support Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your customer support with AI-powered automation. Provide instant, 
              accurate, and personalized support 24/7 while reducing costs and improving satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Watch Demo
              </button>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Customer Support Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform handles every aspect of customer support, from initial contact 
              to resolution, ensuring exceptional customer experiences every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)              => (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Channel Support
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet your customers wherever they are with our comprehensive multi-channel 
              support platform that provides consistent experiences across all touchpoints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300">{channel.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Support Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of customer support with proven results 
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
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Support Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive customer support automation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your support volume and automation requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6">
                  <feature.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
=======
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.popular 
                    ? 'border-indigo-500 ring-2 ring-indigo-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
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
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {tier.cta}
                </button>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
              Why Choose Our AI Customer Support Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of AI-powered support that improves customer satisfaction and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
=======
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index)              => (
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-teal-600" />
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

      {/* Support Channels Section */}
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
              Multi-Channel Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform supports all major customer support channels for comprehensive coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {channel.title}
                </h3>
                <p className="text-gray-600">
                  {channel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Join companies that are already leveraging AI to provide exceptional customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
              >
                Explore All Services
              </Link>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to learn more about implementing AI-powered customer support 
              automation for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Download Brochure
              </button>
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
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

export default AICustomerSupportAutomation;
>>>>>>> 39d9340a9992ff3996694fc13e4beac30359b409
