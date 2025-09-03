import React from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { 
  Server, Cloud, Shield, Database, Network, Cpu, Zap, Users, Building, 
  Globe, Lock, BarChart3, Monitor, Smartphone, Laptop, Desktop, Tablet, 
  Watch, Headphones, Speaker, Microphone, Camera, Video, Image, File, 
  Folder, Archive, Edit, Plus, Check, AlertCircle, Info, HelpCircle, 
  ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, 
  ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, 
  RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, 
  FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, 
  Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, 
  Repeat1, ArrowRight, CheckCircle, Star, Rocket, Lightbulb, Workflow, 
  Brain, Target, TrendingUp, CreditCard, Heart, Home, Car, GraduationCap, 
  ShoppingBag, Briefcase, Palette, Music, BookOpen, Calendar, Clock, 
  Bell, Eye, Download, Upload, Share2, QrCode, Building2, MessageSquare, 
  FileText, ShoppingCart, Search, Phone, Mail
} from "lucide-react"

export default function ITServices() {
  const itServiceCategories = [
    {
      name: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions and automated development operations",
      icon: Cloud,
      count: 25,
      color: "from-blue-400 to-cyan-500",
      solutions: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code", "CI/CD Pipelines", "Cloud Optimization"]
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Enterprise-grade security solutions and regulatory compliance",
      icon: Shield,
      count: 18,
      color: "from-red-400 to-orange-500",
      solutions: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Security Monitoring", "Incident Response", "Security Training"]
    },
    {
      name: "Data Management & Analytics",
      description: "Comprehensive data solutions and business intelligence",
      icon: Database,
      count: 22,
      color: "from-green-400 to-emerald-500",
      solutions: ["Data Engineering", "Business Intelligence", "Data Warehousing", "Analytics Platforms", "Data Governance", "Machine Learning"]
    },
    {
      name: "Network & Infrastructure",
      description: "Enterprise networking and infrastructure solutions",
      icon: Network,
      count: 15,
      color: "from-purple-400 to-indigo-500",
      solutions: ["Network Design", "Infrastructure Management", "Performance Optimization", "Monitoring", "Security", "Scalability"]
    }
  ]

  const featuredITServices = [
    {
      title: "Cloud Migration & Modernization",
      description: "End-to-end cloud migration services with modern architecture and optimization",
      price: "From $15,000",
      features: ["Cloud Strategy", "Migration Planning", "Architecture Design", "Data Migration", "Performance Optimization", "Cost Management"],
      href: "/services/cloud-migration",
      color: "from-blue-400 to-cyan-500",
      popular: true
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity platform with threat detection and compliance monitoring",
      price: "From $8,000",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Monitoring", "Incident Response", "Security Analytics", "24/7 Monitoring"],
      href: "/services/cybersecurity-suite",
      color: "from-red-400 to-orange-500"
    },
    {
      title: "Data Engineering & Analytics Platform",
      description: "Complete data solution with engineering, warehousing, and analytics capabilities",
      price: "From $12,000",
      features: ["Data Engineering", "ETL/ELT Pipelines", "Data Warehousing", "Business Intelligence", "Analytics Dashboards", "Data Governance"],
      href: "/services/data-engineering",
      color: "from-green-400 to-emerald-500"
    }
  ]

  const newITServices = [
    {
      title: "AI-Powered IT Asset Management",
      description: "Intelligent IT asset management platform with predictive maintenance and automated optimization",
      price: "From $5,999/month",
      features: ["Asset Discovery", "Predictive Maintenance", "Cost Optimization", "Compliance Tracking", "Automated Reporting", "Integration APIs"],
      href: "/services/ai-powered-it-asset-management",
      color: "from-indigo-400 to-purple-500",
      category: "Asset Management"
    },
    {
      title: "Edge Computing Infrastructure",
      description: "Distributed edge computing platform for low-latency applications and IoT deployments",
      price: "From $8,999/month",
      features: ["Edge Nodes", "Low-latency Processing", "IoT Integration", "Data Synchronization", "Security", "Scalable Architecture"],
      href: "/services/edge-computing-solutions",
      color: "from-teal-400 to-cyan-500",
      category: "Infrastructure"
    },
    {
      title: "Digital Twin Platform",
      description: "Advanced digital twin technology for real-time monitoring and predictive analytics of physical assets",
      price: "From $12,999/month",
      features: ["3D Modeling", "Real-time Monitoring", "Predictive Analytics", "Simulation", "IoT Integration", "Custom Dashboards"],
      href: "/services/digital-twin-platform",
      color: "from-violet-400 to-purple-500",
      category: "IoT & Analytics"
    },
    {
      title: "Green IT Solutions",
      description: "Sustainable IT infrastructure solutions with energy optimization and carbon footprint reduction",
      price: "From $4,999/month",
      features: ["Energy Monitoring", "Carbon Tracking", "Efficiency Optimization", "Renewable Integration", "Sustainability Reporting", "Cost Reduction"],
      href: "/services/green-it-solutions",
      color: "from-green-400 to-emerald-500",
      category: "Sustainability"
    },
    {
      title: "Quantum-Safe Security Platform",
      description: "Next-generation security platform prepared for quantum computing threats with post-quantum cryptography",
      price: "From $15,999/month",
      features: ["Post-quantum Cryptography", "Quantum Key Distribution", "Threat Assessment", "Migration Planning", "Compliance Standards", "Future-proof Security"],
      href: "/services/quantum-safe-security",
      color: "from-rose-400 to-pink-500",
      category: "Security"
    },
    {
      title: "Space Technology Infrastructure",
      description: "Satellite communication and space-based infrastructure solutions for global connectivity",
      price: "From $25,000/month",
      features: ["Satellite Networks", "Global Connectivity", "Low Earth Orbit", "Ground Stations", "Data Relay", "Mission Control"],
      href: "/services/space-technology-infrastructure",
      color: "from-blue-400 to-indigo-500",
      category: "Space Tech"
    },
    {
      title: "Healthcare IT Infrastructure",
      description: "HIPAA-compliant healthcare IT infrastructure with telemedicine and patient data management",
      price: "From $9,999/month",
      features: ["HIPAA Compliance", "Telemedicine Platform", "Patient Data Security", "EMR Integration", "Medical Imaging", "24/7 Support"],
      href: "/services/healthcare-it-infrastructure",
      color: "from-emerald-400 to-teal-500",
      category: "Healthcare"
    },
    {
      title: "FinTech Infrastructure Platform",
      description: "Secure financial technology infrastructure with real-time processing and regulatory compliance",
      price: "From $18,999/month",
      features: ["Real-time Processing", "Regulatory Compliance", "Fraud Detection", "Payment Processing", "Risk Management", "API Gateway"],
      href: "/services/fintech-infrastructure",
      color: "from-yellow-400 to-orange-500",
      category: "Finance"
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Enterprise Technology Solutions</title>
        <meta name="description" content="Transform your IT infrastructure with our comprehensive IT services including cloud migration, cybersecurity, and data analytics. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, data analytics, DevOps, infrastructure management, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
                <Server className="w-5 h-5 mr-2" />
                Enterprise IT Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services that modernize your infrastructure, secure your data, and accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
                >
                  Get IT Consultation <ArrowRight className="w-5 h-5 ml-2" />
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
                IT Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions across multiple domains to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServiceCategories.map((category, index) => (
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
                Featured IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular IT solutions trusted by leading organizations worldwide
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredITServices.map((service, index) => (
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
                  <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
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
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-teal-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New IT Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cutting-Edge IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionary IT technologies that push the boundaries of enterprise infrastructure
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newITServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <Server className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
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
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-teal-700 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    Explore Service <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact our IT experts to discuss how we can modernize your technology stack
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
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
              <div className="text-sm text-green-200">
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
