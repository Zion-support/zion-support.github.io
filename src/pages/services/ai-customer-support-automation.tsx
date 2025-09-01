<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Bot, 
  Users, 
  Clock, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  Phone,
  Mail,
  Chat,
  Video,
  FileText,
  BarChart3,
  Target,
  Cpu,
  Network,
  Smartphone,
  Lock,
  BarChart,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Workflow,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { MessageCircle, Brain, Users, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, Zap, TrendingUp, BarChart3, Target, Globe, Heart, Settings, Monitor, Smartphone, Laptop, Headphones              } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Brain, Zap, Globe, Users, BarChart3, 
  Lock, Cpu, Network, Eye, AlertTriangle, CheckCircle,
  ArrowRight, Star, Award, Phone, Mail, MapPin, TrendingUp,
  Target, Shield, Gauge, Clock, FileText, Search, Headphones
} from 'lucide-react';
>>>>>>> cursor/add-new-services-and-advertise-them-650b

const AICustomerSupportAutomation: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
<<<<<<< HEAD
      description: "Intelligent chatbots that understand natural language and provide instant, accurate responses 24/7",
      benefits: ["Natural language processing", "Multi-language support", "Context-aware conversations"]
    },
    {
      icon: Brain,
      title: "Smart Ticket Routing",
      description: "Automatically categorize and route support tickets to the right agents based on content analysis",
      benefits: ["Intelligent categorization", "Priority-based routing", "Reduced response times"]
    },
    {
      icon: MessageCircle,
      title: "Omnichannel Support",
      description: "Unified support across email, chat, social media, and phone with consistent experience",
      benefits: ["Channel integration", "Unified customer history", "Seamless transitions"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Anticipate customer needs and potential issues before they arise using AI algorithms",
      benefits: ["Issue prevention", "Proactive support", "Customer satisfaction improvement"]
    },
    {
      icon: Users,
      title: "Agent Productivity Tools",
      description: "AI-powered tools that help support agents provide faster, more accurate responses",
      benefits: ["Response suggestions", "Knowledge base integration", "Performance analytics"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline support processes with intelligent automation and workflow management",
      benefits: ["Process automation", "Escalation rules", "SLA management"]
    }
  ];

  const pricingPlans = [
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    {
      name: "Starter",
      price: "$199",
      period: "/month",
<<<<<<< HEAD
      description: "Perfect for small businesses starting with AI support",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI chatbot",
        "Email & chat support",
        "Basic analytics",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      popular: false
    },
    {
      name: "Professional",
<<<<<<< HEAD
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies with moderate support volume",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI chatbot",
        "Omnichannel support",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Agent productivity tools",
        "Multi-language support"
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
      price: "$1,299",
      period: "/month",
      description: "For large organizations with high support volume and complex needs",
      features: [
        "Unlimited conversations",
        "Custom AI models",
        "Advanced automation",
        "Predictive analytics",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "On-premise deployment"
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

<<<<<<< HEAD
  const useCases = [
    {
      industry: "E-commerce",
      description: "Handle product inquiries, order tracking, and returns with intelligent automation",
      metrics: ["Response time reduction", "Customer satisfaction", "Support cost savings"]
    },
    {
      industry: "SaaS",
      description: "Provide technical support, feature explanations, and onboarding assistance",
      metrics: ["Ticket resolution time", "User activation", "Churn reduction"]
    },
    {
      industry: "Healthcare",
      description: "Manage appointment scheduling, general inquiries, and basic health information",
      metrics: ["Patient satisfaction", "Staff efficiency", "Wait time reduction"]
    },
    {
      industry: "Financial Services",
      description: "Handle account inquiries, transaction support, and basic financial guidance",
      metrics: ["Support efficiency", "Compliance adherence", "Customer retention"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Provide instant support around the clock without additional staffing costs"
    },
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Handle more support requests with faster response times and automated processes"
    },
    {
      icon: Users,
      title: "Improved Satisfaction",
      description: "Deliver consistent, accurate, and personalized support experiences"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce support costs while improving service quality and coverage"
=======
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
    }
  ];

  const supportChannels = [
    {
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Customer Support
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Support with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> AI Automation</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Revolutionize your customer support with intelligent AI chatbots, automated workflows, and predictive analytics. 
              Provide 24/7 support while reducing costs and improving customer satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </button>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI-Powered Support?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI automation can transform your customer support operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
=======
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      {/* Support Channels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to automate and optimize your customer support operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your support needs and scale as you grow
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
=======
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)              => (
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your support volume and automation requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                      {feature}
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
=======
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
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
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored support automation for different industries and use cases
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
=======
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div>
                  <h4 className="text-cyan-400 font-medium mb-2">Key Metrics:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-3 h-3 text-cyan-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have already revolutionized their support operations with AI automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
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
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}

// Missing icon components
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
=======
};

export default AICustomerSupportAutomation;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
