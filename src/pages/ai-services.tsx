import React from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { 
  Brain, Zap, Target, Users, Shield, BarChart3, Cloud, Lock, TrendingUp, 
  Code, Database, Network, Smartphone, MessageSquare, FileText, ShoppingCart, 
  Headphones, Search, Clock, Camera, CreditCard, Globe2, Monitor, Server, 
  BarChart, PieChart, LineChart, Activity, Building2, Home, Car, GraduationCap, 
  Heart, ShoppingBag, Briefcase, Palette, Music, Video, BookOpen, Calendar, 
  Bell, Eye, Download, Upload, Share2, QrCode, Tablet, Laptop, Desktop, Watch, 
  Speaker, Microphone, Image, File, Folder, Archive, Edit, Plus, Check, 
  AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, 
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, 
  SortAsc, SortDesc, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, 
  Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, 
  Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, 
  Repeat1, ArrowRight, Star, Rocket, Lightbulb, Workflow, Cpu, Settings, Phone, Mail
} from "lucide-react"

export default function AIServices() {
  const aiServiceCategories = [
    {
      name: "AI-Powered Business Intelligence",
      description: "Advanced analytics and business intelligence solutions powered by artificial intelligence",
      icon: Brain,
      count: 18,
      color: "from-purple-400 to-pink-500",
      solutions: ["Predictive Analytics", "Data Visualization", "Business Intelligence", "Machine Learning Models", "Real-time Analytics", "Custom Dashboards"]
    },
    {
      name: "AI Automation & Workflow",
      description: "Intelligent automation solutions that streamline business processes and workflows",
      icon: Workflow,
      count: 22,
      color: "from-blue-400 to-cyan-500",
      solutions: ["Process Automation", "Workflow Optimization", "RPA Solutions", "Intelligent Automation", "Business Process Management", "Task Automation"]
    },
    {
      name: "AI-Powered Customer Experience",
      description: "AI-driven solutions that enhance customer interactions and improve satisfaction",
      icon: Users,
      count: 15,
      color: "from-green-400 to-emerald-500",
      solutions: ["Chatbots", "Customer Support", "Personalization", "Sentiment Analysis", "Customer Analytics", "Voice Assistants"]
    },
    {
      name: "AI Security & Compliance",
      description: "Intelligent security solutions that protect data and ensure regulatory compliance",
      icon: Shield,
      count: 12,
      color: "from-red-400 to-orange-500",
      solutions: ["Threat Detection", "Fraud Prevention", "Compliance Monitoring", "Security Analytics", "Risk Assessment", "Privacy Protection"]
    }
  ]

  const featuredAIServices = [
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics",
      price: "From $2,999/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization", "Automated Reporting", "API Integration"],
      href: "/services/ai-business-intelligence",
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {
      title: "Intelligent Document Processing Suite",
      description: "AI-powered document processing platform that automatically extracts, categorizes, and analyzes information from various document types",
      price: "From $1,499/month",
      features: ["OCR Technology", "Natural Language Processing", "Automated Classification", "Data Extraction", "Compliance Monitoring", "Integration APIs"],
      href: "/services/ai-document-processing",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "AI-Powered Marketing Automation",
      description: "Intelligent marketing automation that personalizes campaigns, optimizes customer journeys, and maximizes ROI through AI-driven insights",
      price: "From $2,499/month",
      features: ["Personalization Engine", "Predictive Customer Scoring", "A/B Testing Automation", "Multi-channel Campaigns", "ROI Analytics", "CRM Integration"],
      href: "/services/ai-marketing-automation",
      color: "from-green-400 to-emerald-500"
    }
  ]

  const newAIServices = [
    {
      title: "AI Quantum Computing Platform",
      description: "Revolutionary quantum-AI hybrid platform for solving complex optimization problems and advanced machine learning",
      price: "From $15,000/month",
      features: ["Quantum Machine Learning", "Optimization Algorithms", "Cryptographic Security", "Advanced Analytics", "Real-time Processing", "Scalable Infrastructure"],
      href: "/services/ai-quantum-computing-platform",
      color: "from-indigo-400 to-purple-500",
      category: "Emerging Technology"
    },
    {
      title: "AI Autonomous Cybersecurity Platform",
      description: "Self-learning cybersecurity system that continuously adapts to new threats and provides real-time protection",
      price: "From $8,999/month",
      features: ["Autonomous Threat Detection", "Behavioral Analysis", "Zero-day Protection", "Incident Response", "Compliance Automation", "24/7 Monitoring"],
      href: "/services/ai-autonomous-cybersecurity-platform",
      color: "from-red-400 to-orange-500",
      category: "Security"
    },
    {
      title: "AI Healthcare Diagnostics Platform",
      description: "Advanced medical AI platform for diagnostic imaging, patient monitoring, and treatment recommendations",
      price: "From $12,999/month",
      features: ["Medical Imaging AI", "Predictive Diagnostics", "Patient Monitoring", "Treatment Optimization", "Clinical Decision Support", "HIPAA Compliance"],
      href: "/services/ai-healthcare-diagnostics",
      color: "from-green-400 to-teal-500",
      category: "Healthcare"
    },
    {
      title: "AI Financial Trading Platform",
      description: "High-frequency trading platform with AI-driven market analysis and automated trading strategies",
      price: "From $25,000/month",
      features: ["Algorithmic Trading", "Market Prediction", "Risk Management", "Portfolio Optimization", "Real-time Analytics", "Regulatory Compliance"],
      href: "/services/ai-financial-trading-platform",
      color: "from-yellow-400 to-orange-500",
      category: "Finance"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management with predictive analytics and autonomous optimization",
      price: "From $6,999/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Cost Optimization"],
      href: "/services/ai-supply-chain-optimization",
      color: "from-blue-400 to-cyan-500",
      category: "Logistics"
    },
    {
      title: "AI Customer Experience Platform",
      description: "Comprehensive customer experience management with AI-powered personalization and automation",
      price: "From $4,999/month",
      features: ["Omnichannel Support", "Personalization Engine", "Sentiment Analysis", "Predictive Service", "Customer Journey Mapping", "ROI Analytics"],
      href: "/services/ai-customer-experience-platform",
      color: "from-pink-400 to-rose-500",
      category: "Customer Experience"
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our cutting-edge AI services including machine learning, automation, and intelligent analytics. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence, AI consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
                <Brain className="w-5 h-5 mr-2" />
                AI-Powered Innovation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced AI Services
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions that drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
                >
                  Get AI Consultation <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center font-semibold"
                >
                  View Pricing <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions across multiple domains to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServiceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm text-gray-500 mb-4">{category.count} Solutions Available</div>
                  <ul className="space-y-1">
                    {category.solutions.slice(0, 3).map((solution, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular AI solutions trusted by leading organizations worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAIServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {service.popular && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New AI Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cutting-Edge AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionary AI technologies that push the boundaries of what's possible
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newAIServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Explore Service <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Contact our AI experts to discuss how we can accelerate your digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-sm text-indigo-200">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
