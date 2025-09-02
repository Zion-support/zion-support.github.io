import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Target, Users, Shield, BarChart3, Cloud, Lock, TrendingUp, Code, Database, Network, Smartphone, MessageSquare, FileText, ShoppingCart, Headphones, Search, Clock, Camera, CreditCard, Globe2, Monitor, Server, BarChart, PieChart, LineChart, Activity, Building2, Home, Car, GraduationCap, Heart, ShoppingBag, Briefcase, Palette, Music, Video, BookOpen, Calendar, Bell, Eye, Download, Upload, Share2, QrCode, Tablet, Laptop, Desktop, Watch, Speaker, Microphone, Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Volume1, Volume3, Volume4, Volume5, Volume6, Volume7, Volume8, Volume9, Volume10, Volume11, Volume12, Volume13, Volume14, Volume15, Volume16, Volume17, Volume18, Volume19, Volume20, Volume21, Volume22, Volume23, Volume24, Volume25, Volume26, Volume27, Volume28, Volume29, Volume30, Volume31, Volume32, Volume33, Volume34, Volume35, Volume36, Volume37, Volume38, Volume39, Volume40, Volume41, Volume42, Volume43, Volume44, Volume45, Volume46, Volume47, Volume48, Volume49, Volume50, Volume51, Volume52, Volume53, Volume54, Volume55, Volume56, Volume57, Volume58, Volume59, Volume60, Volume61, Volume62, Volume63, Volume64, Volume65, Volume66, Volume67, Volume68, Volume69, Volume70, Volume71, Volume72, Volume73, Volume74, Volume75, Volume76, Volume77, Volume78, Volume79, Volume80, Volume81, Volume82, Volume83, Volume84, Volume85, Volume86, Volume87, Volume88, Volume89, Volume90, Volume91, Volume92, Volume93, Volume94, Volume95, Volume96, Volume97, Volume98, Volume99, Volume100 } from 'lucide-react';

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
  ];

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
  ];

  // Comprehensive AI services
  const comprehensiveAIServices = [
    // AI Business Intelligence
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics",
      price: "$2,999 - $8,999/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models", "Data Visualization", "Automated Reporting", "API Integration", "Natural Language Queries", "Advanced Analytics"],
      category: "Business Intelligence",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      popular: true,
      useCases: ["Financial Forecasting", "Customer Behavior Analysis", "Market Trend Prediction", "Operational Optimization", "Performance Monitoring", "Strategic Planning"],
      benefits: ["30% faster decision making", "25% improvement in forecasting accuracy", "Real-time insights", "Customizable dashboards"]
    },
    {
      title: "Intelligent Data Analytics Suite",
      description: "Comprehensive data analytics solution with AI-powered insights, automated reporting, and advanced visualization capabilities",
      price: "$1,999 - $5,999/month",
      features: ["Data Mining", "Statistical Analysis", "Predictive Modeling", "Interactive Dashboards", "Automated Reporting", "Data Quality Management", "Real-time Processing", "Multi-source Integration"],
      category: "Business Intelligence",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      useCases: ["Business Performance Analysis", "Customer Segmentation", "Market Research", "Operational Analytics", "Financial Analysis", "Risk Assessment"],
      benefits: ["40% reduction in analysis time", "Improved data accuracy", "Automated insights generation", "Scalable analytics"]
    },

    // AI Automation & Workflow
    {
      title: "Intelligent Process Automation Platform",
      description: "AI-driven platform that automates complex business processes, optimizes workflows, and improves operational efficiency",
      price: "$3,499 - $9,999/month",
      features: ["Process Mining", "Workflow Automation", "RPA Integration", "Intelligent Routing", "Performance Analytics", "Exception Handling", "Compliance Monitoring", "Scalable Automation"],
      category: "Automation & Workflow",
      icon: Workflow,
      color: "from-indigo-500 to-purple-600",
      popular: true,
      useCases: ["Order Processing", "Invoice Management", "Customer Onboarding", "HR Processes", "Supply Chain Operations", "Quality Control"],
      benefits: ["60% reduction in manual tasks", "50% faster process completion", "Improved accuracy", "24/7 operation"]
    },
    {
      title: "AI-Powered Workflow Orchestration",
      description: "Intelligent workflow management system that optimizes business processes and automates decision-making",
      price: "$2,499 - $6,999/month",
      features: ["Workflow Design", "Intelligent Routing", "Decision Automation", "Performance Monitoring", "Process Optimization", "Integration APIs", "Real-time Analytics", "Custom Workflows"],
      category: "Automation & Workflow",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      useCases: ["Project Management", "Approval Processes", "Customer Service", "Sales Operations", "Quality Assurance", "Compliance Workflows"],
      benefits: ["Streamlined operations", "Reduced bottlenecks", "Improved efficiency", "Better resource allocation"]
    },

    // AI Customer Experience
    {
      title: "AI-Powered Customer Support Platform",
      description: "Intelligent customer support solution that provides instant responses, automates ticket routing, and enhances customer satisfaction",
      price: "$1,999 - $5,999/month",
      features: ["AI Chatbots", "Intelligent Ticket Routing", "Knowledge Base Management", "Sentiment Analysis", "Customer Analytics", "Multi-channel Support", "Automated Responses", "Performance Metrics"],
      category: "Customer Experience",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-600",
      popular: true,
      useCases: ["Customer Service", "Technical Support", "Sales Support", "Product Support", "Billing Support", "General Inquiries"],
      benefits: ["80% faster response times", "24/7 availability", "Improved customer satisfaction", "Reduced support costs"]
    },
    {
      title: "Intelligent Customer Personalization Engine",
      description: "AI-driven personalization platform that delivers tailored experiences, recommendations, and content to individual customers",
      price: "$2,999 - $7,999/month",
      features: ["Customer Profiling", "Behavioral Analysis", "Recommendation Engine", "Content Personalization", "A/B Testing", "Performance Analytics", "Real-time Optimization", "Multi-channel Personalization"],
      category: "Customer Experience",
      icon: Target,
      color: "from-pink-500 to-rose-600",
      useCases: ["E-commerce", "Content Platforms", "Streaming Services", "Financial Services", "Healthcare", "Education"],
      benefits: ["35% increase in engagement", "Improved conversion rates", "Enhanced customer loyalty", "Better user experience"]
    },

    // AI Security & Compliance
    {
      title: "AI-Powered Cybersecurity Suite",
      description: "Advanced cybersecurity platform that uses artificial intelligence to detect threats, prevent attacks, and ensure compliance",
      price: "$4,999 - $12,999/month",
      features: ["Threat Detection", "Behavioral Analysis", "Anomaly Detection", "Incident Response", "Compliance Monitoring", "Security Analytics", "24/7 Monitoring", "Automated Response"],
      category: "Security & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      popular: true,
      useCases: ["Enterprise Security", "Financial Services", "Healthcare", "Government", "Critical Infrastructure", "Cloud Security"],
      benefits: ["99.9% threat detection rate", "Real-time protection", "Reduced false positives", "Compliance automation"]
    },
    {
      title: "Intelligent Compliance Management Platform",
      description: "AI-driven compliance solution that automates regulatory monitoring, ensures adherence, and provides comprehensive reporting",
      price: "$2,999 - $8,999/month",
      features: ["Regulatory Tracking", "Compliance Monitoring", "Automated Auditing", "Risk Assessment", "Policy Management", "Reporting Tools", "Integration APIs", "Real-time Alerts"],
      category: "Security & Compliance",
      icon: Lock,
      color: "from-indigo-500 to-blue-600",
      useCases: ["GDPR Compliance", "SOX Compliance", "HIPAA Compliance", "ISO Standards", "Industry Regulations", "Internal Policies"],
      benefits: ["Automated compliance", "Reduced audit time", "Risk mitigation", "Regulatory reporting"]
    },

    // AI Content & Media
    {
      title: "AI-Powered Content Creation Studio",
      description: "Intelligent content creation platform that generates high-quality, engaging content across multiple formats and languages",
      price: "$1,999 - $5,999/month",
      features: ["Content Generation", "Multi-format Support", "Brand Consistency", "SEO Optimization", "Content Planning", "Performance Analytics", "Collaboration Tools", "Template Library"],
      category: "Content & Media",
      icon: FileText,
      color: "from-emerald-500 to-teal-600",
      useCases: ["Marketing Content", "Blog Posts", "Social Media", "Product Descriptions", "Email Campaigns", "Technical Documentation"],
      benefits: ["10x faster content creation", "Consistent brand voice", "SEO optimization", "Multi-language support"]
    },
    {
      title: "Intelligent Video & Audio Processing",
      description: "AI-powered platform for automated video and audio processing, editing, and enhancement",
      price: "$2,499 - $6,999/month",
      features: ["Video Editing", "Audio Enhancement", "Content Analysis", "Automated Captions", "Quality Improvement", "Format Conversion", "Real-time Processing", "API Integration"],
      category: "Content & Media",
      icon: Video,
      color: "from-purple-500 to-indigo-600",
      useCases: ["Content Creation", "Video Production", "Podcast Production", "Live Streaming", "Media Archives", "Educational Content"],
      benefits: ["Automated editing", "Quality enhancement", "Time savings", "Professional results"]
    },

    // AI Healthcare & Life Sciences
    {
      title: "AI-Powered Healthcare Analytics Platform",
      description: "Intelligent healthcare analytics solution that provides insights for patient care, research, and operational optimization",
      price: "$5,999 - $15,999/month",
      features: ["Patient Analytics", "Clinical Decision Support", "Predictive Diagnostics", "Population Health", "Operational Analytics", "Research Tools", "HIPAA Compliance", "Integration APIs"],
      category: "Healthcare & Life Sciences",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      popular: true,
      useCases: ["Hospitals", "Clinics", "Research Institutions", "Pharmaceutical Companies", "Health Insurance", "Public Health"],
      benefits: ["Improved patient outcomes", "Reduced healthcare costs", "Better resource allocation", "Research acceleration"]
    },
    {
      title: "Intelligent Drug Discovery Platform",
      description: "AI-driven platform that accelerates drug discovery through machine learning, molecular modeling, and predictive analytics",
      price: "$8,999 - $25,999/month",
      features: ["Molecular Modeling", "Drug Screening", "Target Identification", "ADMET Prediction", "Clinical Trial Design", "Data Integration", "Collaboration Tools", "Research Analytics"],
      category: "Healthcare & Life Sciences",
      icon: Flask,
      color: "from-blue-500 to-cyan-600",
      useCases: ["Pharmaceutical Research", "Biotech Companies", "Academic Research", "Drug Development", "Clinical Research", "Precision Medicine"],
      benefits: ["Faster drug discovery", "Reduced development costs", "Improved success rates", "Better target selection"]
    },

    // AI Financial Services
    {
      title: "AI-Powered Financial Analytics Platform",
      description: "Intelligent financial analytics solution that provides insights for investment decisions, risk management, and portfolio optimization",
      price: "$4,999 - $12,999/month",
      features: ["Portfolio Analytics", "Risk Assessment", "Market Analysis", "Predictive Modeling", "Performance Tracking", "Compliance Monitoring", "Real-time Data", "Integration APIs"],
      category: "Financial Services",
      icon: CreditCard,
      color: "from-emerald-500 to-green-600",
      popular: true,
      useCases: ["Investment Firms", "Banks", "Insurance Companies", "Hedge Funds", "Asset Management", "Financial Advisors"],
      benefits: ["Better investment decisions", "Risk mitigation", "Portfolio optimization", "Regulatory compliance"]
    },
    {
      title: "Intelligent Fraud Detection System",
      description: "AI-driven fraud detection platform that identifies suspicious activities, prevents fraud, and protects financial assets",
      price: "$3,999 - $9,999/month",
      features: ["Real-time Monitoring", "Behavioral Analysis", "Pattern Recognition", "Risk Scoring", "Alert Management", "Investigation Tools", "Reporting", "Integration APIs"],
      category: "Financial Services",
      icon: ShieldCheck,
      color: "from-orange-500 to-red-600",
      useCases: ["Banks", "Credit Card Companies", "E-commerce", "Insurance", "Payment Processors", "Financial Services"],
      benefits: ["Real-time fraud detection", "Reduced fraud losses", "Improved security", "Customer protection"]
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
        <title>AI Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI services and solutions from Zion Tech Group. Transform your business with intelligent automation, analytics, and innovation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
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
              AI Services &
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed for the modern enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Explore AI Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-8">
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

      {/* AI Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            AI Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServiceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white text-center h-full transform group-hover:scale-105 transition-all duration-300`}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                  <p className="text-sm text-white/80 mb-4">{category.description}</p>
                  <div className="text-2xl font-bold mb-2">{category.count}+</div>
                  <p className="text-xs text-white/70">Solutions Available</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAIServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 rounded-2xl text-white h-full transform group-hover:scale-105 transition-all duration-300`}>
                  {service.popular && (
                    <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-purple-200 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Complete AI Services Portfolio
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Business Intelligence', 'Automation & Workflow', 'Customer Experience', 'Security & Compliance', 'Content & Media', 'Healthcare & Life Sciences', 'Financial Services'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveAIServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-slate-600/50 transition-all duration-300">
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases?.slice(0, 3).map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-xs text-slate-300">
                            <TrendingUp className="w-3 h-3 mr-2 text-green-400" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <Link
                      to="/contact"
                      className="text-sm text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Cutting-Edge AI",
                description: "Latest AI technologies and methodologies for maximum impact"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security and compliance built into every solution"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of successful AI implementations and ROI"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced AI engineers and data scientists"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let our team of AI experts help you implement cutting-edge solutions that drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">{contactInfo.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300">
                {contactInfo.website}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-slate-400" />
            <p className="text-slate-300">{contactInfo.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}