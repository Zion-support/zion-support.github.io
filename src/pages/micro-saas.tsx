import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Store, Zap, Globe, ArrowRight, CheckCircle, Star, Users, Rocket, Target, Lightbulb, Cloud, Lock, BarChart3, Settings, Database, Shield, TrendingUp, Cpu, Network, Brain, Workflow, Building, Mail, MessageSquare, FileText, ShoppingCart, Headphones, Search, Clock, Camera, CreditCard, ShieldCheck, Globe2, Smartphone, Monitor, Server, Database as DatabaseIcon, BarChart, PieChart, LineChart, Activity, Zap as ZapIcon, Target as TargetIcon, Users as UsersIcon, Building2, Home, Car, GraduationCap, Heart, ShoppingBag, Briefcase, Palette, Music, Video, BookOpen, Calendar, Clock as ClockIcon, Bell, Eye, EyeOff, Download, Upload, Share2, Link as LinkIcon, QrCode, Smartphone as SmartphoneIcon, Tablet, Laptop, Desktop, Watch, Headphones as HeadphonesIcon, Speaker, Microphone, Camera as CameraIcon, Video as VideoIcon, Image, File, Folder, Archive, Trash2, Edit, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, RotateCw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Volume1, Volume3, Volume4, Volume5, Volume6, Volume7, Volume8, Volume9, Volume10, Volume11, Volume12, Volume13, Volume14, Volume15, Volume16, Volume17, Volume18, Volume19, Volume20, Volume21, Volume22, Volume23, Volume24, Volume25, Volume26, Volume27, Volume28, Volume29, Volume30, Volume31, Volume32, Volume33, Volume34, Volume35, Volume36, Volume37, Volume38, Volume39, Volume40, Volume41, Volume42, Volume43, Volume44, Volume45, Volume46, Volume47, Volume48, Volume49, Volume50, Volume51, Volume52, Volume53, Volume54, Volume55, Volume56, Volume57, Volume58, Volume59, Volume60, Volume61, Volume62, Volume63, Volume64, Volume65, Volume66, Volume67, Volume68, Volume69, Volume70, Volume71, Volume72, Volume73, Volume74, Volume75, Volume76, Volume77, Volume78, Volume79, Volume80, Volume81, Volume82, Volume83, Volume84, Volume85, Volume86, Volume87, Volume88, Volume89, Volume90, Volume91, Volume92, Volume93, Volume94, Volume95, Volume96, Volume97, Volume98, Volume99, Volume100 } from 'lucide-react';

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
  ];

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
  ];

  // New comprehensive micro-SaaS services
  const comprehensiveMicroSaas = [
    // AI & Machine Learning Services
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics",
      price: "$1,499 - $4,999/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization", "Automated Reporting", "API Integration"],
      category: "AI & ML",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      popular: true,
      useCases: ["Financial Forecasting", "Customer Behavior Analysis", "Market Trend Prediction", "Operational Optimization"]
    },
    {
      title: "Intelligent Document Processing Suite",
      description: "AI-powered document processing platform that automatically extracts, categorizes, and analyzes information from various document types",
      price: "$799 - $2,999/month",
      features: ["OCR Technology", "Natural Language Processing", "Automated Classification", "Data Extraction", "Compliance Monitoring", "Integration APIs"],
      category: "AI & ML",
      icon: FileText,
      color: "from-blue-500 to-cyan-600",
      useCases: ["Invoice Processing", "Contract Analysis", "Legal Document Review", "Insurance Claims"]
    },
    {
      title: "AI-Powered Marketing Automation Platform",
      description: "Intelligent marketing automation that personalizes campaigns, optimizes customer journeys, and maximizes ROI through AI-driven insights",
      price: "$1,299 - $3,999/month",
      features: ["Personalization Engine", "Predictive Customer Scoring", "A/B Testing Automation", "Multi-channel Campaigns", "ROI Analytics", "CRM Integration"],
      category: "AI & ML",
      icon: Target,
      color: "from-green-500 to-emerald-600",
      popular: true,
      useCases: ["Email Marketing", "Social Media Campaigns", "Lead Nurturing", "Customer Retention"]
    },
    {
      title: "Intelligent Supply Chain Optimization",
      description: "AI-driven supply chain platform that optimizes inventory, predicts demand, and automates procurement processes",
      price: "$2,499 - $6,999/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Supplier Management", "Route Optimization", "Risk Assessment", "Real-time Monitoring"],
      category: "AI & ML",
      icon: Network,
      color: "from-indigo-500 to-purple-600",
      useCases: ["Retail Inventory", "Manufacturing", "Logistics", "E-commerce"]
    },

    // Business Process Automation
    {
      title: "Smart HR Management Suite",
      description: "Comprehensive HR platform with AI-powered recruitment, performance management, and employee engagement tools",
      price: "$899 - $2,499/month",
      features: ["AI Recruitment", "Performance Analytics", "Employee Engagement", "Payroll Integration", "Compliance Management", "Learning Management"],
      category: "Business Process",
      icon: Users,
      color: "from-orange-500 to-red-600",
      useCases: ["Talent Acquisition", "Performance Reviews", "Employee Training", "HR Analytics"]
    },
    {
      title: "Intelligent Financial Management Platform",
      description: "AI-powered financial management solution that automates accounting, provides insights, and ensures compliance",
      price: "$1,199 - $3,499/month",
      features: ["Automated Bookkeeping", "Financial Forecasting", "Expense Management", "Tax Compliance", "Real-time Reporting", "Bank Integration"],
      category: "Business Process",
      icon: CreditCard,
      color: "from-emerald-500 to-teal-600",
      popular: true,
      useCases: ["Small Business Accounting", "Financial Planning", "Tax Preparation", "Budget Management"]
    },
    {
      title: "Smart Customer Relationship Management",
      description: "Intelligent CRM platform that uses AI to enhance customer interactions, predict customer needs, and drive sales growth",
      price: "$999 - $2,999/month",
      features: ["AI Lead Scoring", "Customer Segmentation", "Sales Forecasting", "Pipeline Management", "Email Automation", "Analytics Dashboard"],
      category: "Business Process",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      useCases: ["Sales Management", "Customer Service", "Lead Generation", "Customer Retention"]
    },

    // Industry-Specific Solutions
    {
      title: "Healthcare Practice Management Suite",
      description: "Comprehensive healthcare management platform with patient scheduling, billing, and compliance features",
      price: "$1,499 - $4,999/month",
      features: ["Patient Scheduling", "Electronic Health Records", "Billing & Insurance", "HIPAA Compliance", "Telemedicine Integration", "Analytics Dashboard"],
      category: "Industry-Specific",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      useCases: ["Medical Practices", "Dental Offices", "Specialty Clinics", "Healthcare Networks"]
    },
    {
      title: "Real Estate Management Platform",
      description: "AI-powered real estate platform for property management, tenant screening, and market analysis",
      price: "$799 - $2,499/month",
      features: ["Property Management", "Tenant Screening", "Market Analysis", "Maintenance Tracking", "Financial Reporting", "Mobile App"],
      category: "Industry-Specific",
      icon: Home,
      color: "from-amber-500 to-orange-600",
      useCases: ["Property Management", "Real Estate Agencies", "Investment Firms", "Property Developers"]
    },
    {
      title: "Educational Technology Platform",
      description: "Comprehensive edtech solution with learning management, student analytics, and virtual classroom capabilities",
      price: "$599 - $1,999/month",
      features: ["Learning Management", "Student Analytics", "Virtual Classrooms", "Assessment Tools", "Content Creation", "Parent Portal"],
      category: "Industry-Specific",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-600",
      useCases: ["K-12 Schools", "Higher Education", "Corporate Training", "Online Learning"]
    },

    // Enterprise & Security Solutions
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance monitoring",
      price: "$2,999 - $8,999/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Monitoring", "Incident Response", "Security Training", "24/7 Monitoring"],
      category: "Enterprise",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      popular: true,
      useCases: ["Enterprise Security", "Compliance Management", "Threat Intelligence", "Security Operations"]
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Intelligent cloud management platform that optimizes costs, ensures security, and automates operations",
      price: "$1,999 - $5,999/month",
      features: ["Cost Optimization", "Security Management", "Automated Operations", "Performance Monitoring", "Compliance", "Multi-cloud Support"],
      category: "Enterprise",
      icon: Cloud,
      color: "from-cyan-500 to-blue-600",
      useCases: ["Cloud Migration", "DevOps Automation", "Cost Management", "Security Compliance"]
    },
    {
      title: "Data Governance & Compliance Platform",
      description: "Comprehensive data governance solution that ensures data quality, privacy, and regulatory compliance",
      price: "$1,799 - $4,999/month",
      features: ["Data Quality Management", "Privacy Controls", "Regulatory Compliance", "Data Cataloging", "Audit Trails", "Risk Assessment"],
      category: "Enterprise",
      icon: Database,
      color: "from-purple-500 to-indigo-600",
      useCases: ["Data Compliance", "Privacy Management", "Regulatory Reporting", "Data Governance"]
    },

    // Emerging Technology Solutions
    {
      title: "Blockchain Business Solutions",
      description: "Enterprise blockchain platform for supply chain transparency, smart contracts, and decentralized applications",
      price: "$3,999 - $9,999/month",
      features: ["Smart Contracts", "Supply Chain Tracking", "Digital Identity", "Token Management", "API Integration", "Analytics Dashboard"],
      category: "Emerging Tech",
      icon: LinkIcon,
      color: "from-indigo-500 to-purple-600",
      useCases: ["Supply Chain Management", "Digital Identity", "Smart Contracts", "Tokenization"]
    },
    {
      title: "IoT Management Platform",
      description: "Comprehensive IoT platform for device management, data collection, and intelligent automation",
      price: "$1,299 - $3,999/month",
      features: ["Device Management", "Data Collection", "Real-time Analytics", "Automation Rules", "Security", "Integration APIs"],
      category: "Emerging Tech",
      icon: Cpu,
      color: "from-green-500 to-emerald-600",
      useCases: ["Smart Buildings", "Industrial IoT", "Connected Devices", "Automation"]
    },
    {
      title: "Quantum Computing Readiness Platform",
      description: "Platform to prepare businesses for quantum computing with quantum-safe cryptography and optimization algorithms",
      price: "$4,999 - $12,999/month",
      features: ["Quantum-Safe Cryptography", "Optimization Algorithms", "Performance Testing", "Migration Tools", "Expert Consultation", "Training Programs"],
      category: "Emerging Tech",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      useCases: ["Financial Services", "Cybersecurity", "Optimization Problems", "Research & Development"]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover innovative Micro SaaS solutions from Zion Tech Group. Transform your business with intelligent, scalable software-as-a-service platforms." />
        <meta name="keywords" content="Micro SaaS, software as a service, SaaS platforms, business software, cloud applications, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SaaS
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your business with intelligent, scalable software-as-a-service platforms designed for the modern enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Explore Micro SaaS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">📞</div>
              <p className="text-white font-semibold">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">✉️</div>
              <p className="text-white font-semibold">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">🌐</div>
              <p className="text-white font-semibold">{contactInfo.website}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 text-white mb-2">📍</div>
              <p className="text-white font-semibold">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Micro SaaS Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {microSaasCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-400">{category.count} solutions available</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={category.href}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Explore {category.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Micro SaaS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Micro SaaS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMicroSaas.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 ${
                  solution.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {solution.popular && (
                  <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-blue-400 mb-2">{solution.price}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={solution.href}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Business with Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their operations with our innovative Micro SaaS solutions.
              Contact us today to learn how we can help you achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Call Now: {contactInfo.phone}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                Email Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative Micro SaaS solutions for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Micro SaaS Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI-Powered Solutions</li>
                <li>Business Process SaaS</li>
                <li>Industry-Specific SaaS</li>
                <li>Enterprise Platforms</li>
                <li>Custom Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}