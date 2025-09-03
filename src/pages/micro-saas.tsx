import React from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { 
  Code, Store, Zap, Globe, ArrowRight, CheckCircle, Star, Users, Rocket, 
  Target, Lightbulb, Cloud, Lock, BarChart3, Settings, Database, Shield, 
  TrendingUp, Cpu, Network, Brain, Workflow, Building, Mail, MessageSquare, 
  FileText, ShoppingCart, Headphones, Search, Clock, Camera, CreditCard, 
  ShieldCheck, Globe2, Smartphone, Monitor, Server, BarChart, PieChart, 
  LineChart, Activity, Building2, Home, Car, GraduationCap, Heart, 
  ShoppingBag, Briefcase, Palette, Music, Video, BookOpen, Calendar, 
  Bell, Eye, Download, Upload, Share2, QrCode, Tablet, Laptop, Desktop, 
  Watch, Speaker, Microphone, Image, File, Folder, Archive, Edit, Plus, 
  Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, 
  ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, 
  Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, 
  ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, 
  Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, 
  SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, Phone
} from "lucide-react"

export default function MicroSaaS() {
  const microSaasCategories = [
    {
      name: "AI-Powered SaaS Solutions",
      description: "Intelligent software solutions that leverage artificial intelligence to automate and optimize business processes",
      icon: Brain,
      href: "/revolutionary-services-showcase-2034",
      count: 35,
      color: "from-purple-400 to-pink-500",
      solutions: ["AI Automation", "Smart Analytics", "Predictive Tools", "Intelligent Workflows", "Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      name: "Business Process SaaS",
      description: "Streamlined software solutions designed to optimize core business operations and workflows",
      icon: Workflow,
      href: "/revolutionary-services-showcase-2034",
      count: 28,
      color: "from-blue-400 to-indigo-500",
      solutions: ["Project Management", "Customer Support", "Inventory Management", "Email Marketing", "HR Management", "Accounting", "CRM", "ERP"]
    },
    {
      name: "Industry-Specific SaaS",
      description: "Tailored software solutions designed for specific industries and business verticals",
      icon: Target,
      href: "/revolutionary-services-showcase-2034",
      count: 22,
      color: "from-green-400 to-emerald-500",
      solutions: ["Healthcare", "Finance", "Education", "E-commerce", "Real Estate", "Manufacturing", "Legal", "Construction"]
    },
    {
      name: "Enterprise SaaS Platforms",
      description: "Scalable enterprise-grade software platforms for large organizations",
      icon: Building,
      href: "/revolutionary-services-showcase-2034",
      count: 25,
      color: "from-yellow-400 to-orange-500",
      solutions: ["Enterprise Management", "Team Collaboration", "Data Analytics", "Security Platforms", "Compliance", "Integration", "Scalability", "Customization"]
    }
  ]

  const featuredMicroSaas = [
    {
      title: "AI-Powered Content Creation Studio",
      description: "Revolutionary content creation platform that uses AI to generate high-quality, engaging content across multiple formats",
      price: "From $2,999/month",
      features: ["AI Content Generation", "Multi-format Support", "Brand Consistency", "SEO Optimization"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {
      title: "Smart Project Management Platform",
      description: "Intelligent project management solution that uses AI to optimize workflows, predict delays, and improve team productivity",
      price: "From $1,999/month",
      features: ["AI Workflow Optimization", "Predictive Analytics", "Team Collaboration", "Real-time Tracking"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "AI-Powered Customer Support Automation",
      description: "Advanced customer support platform that automates responses and provides intelligent solutions to customer inquiries",
      price: "From $3,999/month",
      features: ["AI Chatbots", "Smart Routing", "Knowledge Base", "Analytics Dashboard"],
      href: "/revolutionary-services-showcase-2034",
      color: "from-green-400 to-emerald-500"
    }
  ]

  const newMicroSaasServices = [
    {
      title: "AI-Powered Micro CRM",
      description: "Intelligent customer relationship management platform designed for small to medium businesses with AI-driven insights",
      price: "From $299/month",
      features: ["AI Lead Scoring", "Automated Follow-ups", "Predictive Analytics", "Integration APIs", "Mobile App", "Custom Dashboards"],
      href: "/services/micro-crm",
      color: "from-blue-400 to-cyan-500",
      category: "CRM"
    },
    {
      title: "Smart Survey & Analytics Platform",
      description: "Advanced survey platform with AI-powered analytics and real-time insights for market research and customer feedback",
      price: "From $199/month",
      features: ["AI Survey Builder", "Real-time Analytics", "Sentiment Analysis", "Custom Reports", "Multi-channel Distribution", "Data Export"],
      href: "/services/smart-survey-platform",
      color: "from-green-400 to-emerald-500",
      category: "Analytics"
    },
    {
      title: "AI Content Marketing Suite",
      description: "Comprehensive content marketing platform with AI-powered content creation, optimization, and distribution",
      price: "From $799/month",
      features: ["AI Content Generation", "SEO Optimization", "Social Media Automation", "Performance Analytics", "Content Calendar", "Team Collaboration"],
      href: "/services/ai-content-marketing-suite",
      color: "from-purple-400 to-pink-500",
      category: "Marketing"
    },
    {
      title: "Blockchain Supply Chain Tracker",
      description: "Transparent supply chain management platform using blockchain technology for real-time tracking and verification",
      price: "From $1,499/month",
      features: ["Blockchain Tracking", "Real-time Visibility", "Smart Contracts", "Compliance Monitoring", "Supplier Management", "Quality Assurance"],
      href: "/services/blockchain-supply-chain-platform",
      color: "from-indigo-400 to-purple-500",
      category: "Blockchain"
    },
    {
      title: "AI Financial Analytics Platform",
      description: "Intelligent financial analytics platform for small businesses with automated bookkeeping and financial insights",
      price: "From $399/month",
      features: ["Automated Bookkeeping", "Financial Forecasting", "Expense Tracking", "Tax Preparation", "Investment Analysis", "Compliance Reporting"],
      href: "/services/ai-financial-analytics-platform",
      color: "from-yellow-400 to-orange-500",
      category: "Finance"
    },
    {
      title: "IoT Edge Computing Platform",
      description: "Edge computing platform for IoT devices with real-time data processing and AI analytics at the edge",
      price: "From $2,499/month",
      features: ["Edge Computing", "Real-time Processing", "IoT Device Management", "Data Analytics", "Predictive Maintenance", "Scalable Infrastructure"],
      href: "/services/iot-edge-computing-platform",
      color: "from-teal-400 to-cyan-500",
      category: "IoT"
    },
    {
      title: "AI Workflow Orchestrator",
      description: "Intelligent workflow automation platform that streamlines business processes with AI-powered optimization",
      price: "From $599/month",
      features: ["Workflow Automation", "AI Optimization", "Process Mining", "Integration Hub", "Performance Analytics", "Custom Workflows"],
      href: "/services/ai-workflow-orchestrator",
      color: "from-rose-400 to-pink-500",
      category: "Automation"
    },
    {
      title: "Quantum Cryptography Platform",
      description: "Next-generation security platform using quantum cryptography for ultra-secure communications and data protection",
      price: "From $4,999/month",
      features: ["Quantum Key Distribution", "Ultra-secure Communication", "Quantum Random Number Generation", "Post-quantum Cryptography", "Compliance Standards", "Enterprise Integration"],
      href: "/services/quantum-cryptography-platform",
      color: "from-violet-400 to-purple-500",
      category: "Security"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Innovative Software as a Service</title>
        <meta name="description" content="Discover our cutting-edge micro SaaS solutions including AI-powered platforms, blockchain services, and IoT solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
        <meta name="keywords" content="micro SaaS, software as a service, AI platforms, blockchain solutions, IoT platforms, business automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
                <Store className="w-5 h-5 mr-2" />
                Micro SaaS Innovation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Revolutionary software-as-a-service platforms that transform how businesses operate, scale, and innovate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
                >
                  Get SaaS Consultation <ArrowRight className="w-5 h-5 ml-2" />
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
                Micro SaaS Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive software solutions across multiple domains to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasCategories.map((category, index) => (
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
                Featured Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular SaaS platforms trusted by businesses worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMicroSaas.map((service, index) => (
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
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
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
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Micro SaaS Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Innovative Micro SaaS Platforms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge SaaS solutions that push the boundaries of business technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newMicroSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <Store className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
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
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Explore Platform <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business with Micro SaaS?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact our SaaS experts to discuss how we can accelerate your digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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
              <div className="text-sm text-blue-200">
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
