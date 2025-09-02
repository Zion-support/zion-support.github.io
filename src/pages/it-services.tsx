import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Cloud, Shield, Database, Network, Cpu, Zap, Users, Building, Globe, Lock, BarChart3, Monitor, Smartphone, Laptop, Desktop, Smartphone as SmartphoneIcon, Tablet, Watch, Headphones, Speaker, Microphone, Camera, Video, Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, ArrowRight, CheckCircle, Star, Rocket, Lightbulb, Workflow, Brain, Target, TrendingUp, CreditCard, Heart, Home, Car, GraduationCap, ShoppingBag, Briefcase, Palette, Music, BookOpen, Calendar, Clock, Bell, Eye, Download, Upload, Share2, Link as LinkIcon, QrCode, Building2, MessageSquare, FileText, ShoppingCart, Search, Clock as ClockIcon, Camera as CameraIcon, Video as VideoIcon, FileText as FileTextIcon, ShoppingCart as ShoppingCartIcon, Headphones as HeadphonesIcon, Search as SearchIcon, Clock as ClockIconIcon, Camera as CameraIconIcon, Video as VideoIconIcon, Image as ImageIcon, File as FileIcon, Folder as FolderIcon, Archive as ArchiveIcon, Edit as EditIcon, Plus as PlusIcon, Check as CheckIcon, AlertCircle as AlertCircleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, ExternalLink as ExternalLinkIcon, ArrowUpRight as ArrowUpRightIcon, ArrowDownRight as ArrowDownRightIcon, ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, ChevronUp as ChevronUpIcon, ChevronDown as ChevronDownIcon, Menu as MenuIcon, Grid as GridIcon, List as ListIcon, Filter as FilterIcon, SortAsc as SortAscIcon, SortDesc as SortDescIcon, RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, ZoomIn as ZoomInIcon, ZoomOut as ZoomOutIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, Fullscreen as FullscreenIcon, FullscreenExit as FullscreenExitIcon, Volume as VolumeIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Mute as MuteIcon, Unmute as UnmuteIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Rewind as RewindIcon, FastForward as FastForwardIcon, Shuffle as ShuffleIcon, Repeat as RepeatIcon, Repeat1 as Repeat1Icon, SkipBack as SkipBackIconIcon, SkipForward as SkipForwardIconIcon, Volume1, Volume3, Volume4, Volume5, Volume6, Volume7, Volume8, Volume9, Volume10, Volume11, Volume12, Volume13, Volume14, Volume15, Volume16, Volume17, Volume18, Volume19, Volume20, Volume21, Volume22, Volume23, Volume24, Volume25, Volume26, Volume27, Volume28, Volume29, Volume30, Volume31, Volume32, Volume33, Volume34, Volume35, Volume36, Volume37, Volume38, Volume39, Volume40, Volume41, Volume42, Volume43, Volume44, Volume45, Volume46, Volume47, Volume48, Volume49, Volume50, Volume51, Volume52, Volume53, Volume54, Volume55, Volume56, Volume57, Volume58, Volume59, Volume60, Volume61, Volume62, Volume63, Volume64, Volume65, Volume66, Volume67, Volume68, Volume69, Volume70, Volume71, Volume72, Volume73, Volume74, Volume75, Volume76, Volume77, Volume78, Volume79, Volume80, Volume81, Volume82, Volume83, Volume84, Volume85, Volume86, Volume87, Volume88, Volume89, Volume90, Volume91, Volume92, Volume93, Volume94, Volume95, Volume96, Volume97, Volume98, Volume99, Volume100 } from 'lucide-react';

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
  ];

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
  ];

  // Comprehensive IT services
  const comprehensiveITServices = [
    // Cloud Infrastructure & DevOps
    {
      title: "Cloud Migration & Modernization",
      description: "End-to-end cloud migration services with modern architecture, cost optimization, and performance enhancement",
      price: "$15,000 - $250,000",
      features: ["Cloud Strategy Development", "Migration Planning", "Architecture Design", "Data Migration", "Performance Optimization", "Cost Management", "Security Implementation", "Training & Support"],
      category: "Cloud Infrastructure & DevOps",
      icon: Cloud,
      color: "from-blue-500 to-cyan-600",
      popular: true,
      useCases: ["Legacy System Migration", "Cost Optimization", "Performance Improvement", "Scalability Enhancement", "Disaster Recovery", "Global Expansion"],
      benefits: ["40-60% cost reduction", "Improved performance", "Enhanced scalability", "Better security", "Reduced maintenance"]
    },
    {
      title: "DevOps Automation Platform",
      description: "Comprehensive DevOps solution with CI/CD pipelines, infrastructure automation, and monitoring",
      price: "$8,000 - $50,000",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation", "Monitoring & Alerting", "Performance Metrics", "Security Scanning", "Compliance Automation"],
      category: "Cloud Infrastructure & DevOps",
      icon: Zap,
      color: "from-indigo-500 to-purple-600",
      useCases: ["Software Development", "Application Deployment", "Infrastructure Management", "Quality Assurance", "Security Compliance", "Performance Monitoring"],
      benefits: ["10x faster deployments", "Reduced errors", "Improved collaboration", "Better quality", "Faster time to market"]
    },
    {
      title: "Container Orchestration & Management",
      description: "Enterprise-grade container management with Kubernetes, Docker, and microservices architecture",
      price: "$12,000 - $75,000",
      features: ["Kubernetes Management", "Container Orchestration", "Microservices Architecture", "Service Mesh", "Monitoring & Logging", "Security Policies", "Auto-scaling", "Load Balancing"],
      category: "Cloud Infrastructure & DevOps",
      icon: Server,
      color: "from-cyan-500 to-blue-600",
      useCases: ["Microservices Applications", "Cloud-Native Development", "High Availability", "Scalable Infrastructure", "Modern Application Architecture", "DevOps Practices"],
      benefits: ["Improved scalability", "Better resource utilization", "Enhanced reliability", "Faster deployment", "Cost optimization"]
    },

    // Cybersecurity & Compliance
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance monitoring",
      price: "$8,000 - $90,000",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Monitoring", "Incident Response", "Security Analytics", "24/7 Monitoring", "Penetration Testing", "Security Training"],
      category: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      popular: true,
      useCases: ["Enterprise Security", "Compliance Management", "Threat Intelligence", "Security Operations", "Risk Assessment", "Incident Management"],
      benefits: ["99.9% threat detection", "Real-time protection", "Compliance automation", "Reduced security risks", "24/7 monitoring"]
    },
    {
      title: "SOC 2 & ISO Compliance Automation",
      description: "Automated compliance management for SOC 2, ISO 27001, and other regulatory standards",
      price: "$5,000 - $45,000",
      features: ["Compliance Monitoring", "Automated Auditing", "Policy Management", "Risk Assessment", "Evidence Collection", "Reporting Tools", "Integration APIs", "Real-time Alerts"],
      category: "Cybersecurity & Compliance",
      icon: Lock,
      color: "from-orange-500 to-red-600",
      useCases: ["SOC 2 Compliance", "ISO 27001", "GDPR Compliance", "HIPAA Compliance", "Industry Regulations", "Internal Policies"],
      benefits: ["Automated compliance", "Reduced audit time", "Risk mitigation", "Regulatory reporting", "Continuous monitoring"]
    },
    {
      title: "Zero Trust Security Architecture",
      description: "Modern zero trust security implementation with identity verification and continuous monitoring",
      price: "$15,000 - $100,000",
      features: ["Identity Verification", "Multi-factor Authentication", "Network Segmentation", "Continuous Monitoring", "Access Control", "Threat Detection", "Security Analytics", "Compliance Reporting"],
      category: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-purple-500 to-indigo-600",
      useCases: ["Enterprise Security", "Remote Work Security", "Cloud Security", "Network Security", "Application Security", "Data Protection"],
      benefits: ["Enhanced security", "Reduced attack surface", "Better access control", "Compliance ready", "Modern security approach"]
    },

    // Data Management & Analytics
    {
      title: "Data Engineering & Analytics Platform",
      description: "Complete data solution with engineering, warehousing, and analytics capabilities",
      price: "$12,000 - $140,000",
      features: ["Data Engineering", "ETL/ELT Pipelines", "Data Warehousing", "Business Intelligence", "Analytics Dashboards", "Data Governance", "Data Quality", "Real-time Processing"],
      category: "Data Management & Analytics",
      icon: Database,
      color: "from-green-500 to-emerald-600",
      popular: true,
      useCases: ["Business Intelligence", "Data Analytics", "Reporting", "Data Warehousing", "Data Integration", "Performance Analytics"],
      benefits: ["Improved decision making", "Better data quality", "Faster insights", "Scalable analytics", "Data-driven culture"]
    },
    {
      title: "Big Data Processing & Analytics",
      description: "Enterprise big data platform for processing, analyzing, and visualizing large-scale data",
      price: "$25,000 - $150,000",
      features: ["Big Data Processing", "Real-time Analytics", "Machine Learning", "Data Visualization", "Scalable Infrastructure", "Performance Optimization", "Data Pipeline", "Advanced Analytics"],
      category: "Data Management & Analytics",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      useCases: ["Large-scale Analytics", "Real-time Processing", "Machine Learning", "Predictive Analytics", "Business Intelligence", "Data Science"],
      benefits: ["Handle large datasets", "Real-time insights", "Advanced analytics", "Scalable processing", "Better performance"]
    },
    {
      title: "Data Governance & Privacy Platform",
      description: "Comprehensive data governance solution ensuring data quality, privacy, and regulatory compliance",
      price: "$8,000 - $60,000",
      features: ["Data Quality Management", "Privacy Controls", "Regulatory Compliance", "Data Cataloging", "Audit Trails", "Risk Assessment", "Policy Management", "Data Lineage"],
      category: "Data Management & Analytics",
      icon: Database,
      color: "from-teal-500 to-cyan-600",
      useCases: ["Data Compliance", "Privacy Management", "Regulatory Reporting", "Data Governance", "Risk Management", "Quality Assurance"],
      benefits: ["Data compliance", "Privacy protection", "Risk mitigation", "Quality improvement", "Regulatory reporting"]
    },

    // Network & Infrastructure
    {
      title: "Enterprise Network Design & Management",
      description: "Comprehensive network infrastructure design, implementation, and management services",
      price: "$20,000 - $120,000",
      features: ["Network Design", "Infrastructure Implementation", "Performance Optimization", "Security Implementation", "Monitoring & Alerting", "Disaster Recovery", "Scalability Planning", "24/7 Support"],
      category: "Network & Infrastructure",
      icon: Network,
      color: "from-purple-500 to-indigo-600",
      popular: true,
      useCases: ["Enterprise Networks", "Data Centers", "Cloud Connectivity", "Remote Work", "High Availability", "Performance Optimization"],
      benefits: ["Improved performance", "Enhanced security", "Better reliability", "Scalable infrastructure", "Reduced downtime"]
    },
    {
      title: "SD-WAN & Network Virtualization",
      description: "Software-defined wide area network solutions with virtualization and automation",
      price: "$15,000 - $80,000",
      features: ["SD-WAN Implementation", "Network Virtualization", "Traffic Optimization", "Security Integration", "Centralized Management", "Performance Monitoring", "Automated Routing", "Cost Optimization"],
      category: "Network & Infrastructure",
      icon: Network,
      color: "from-indigo-500 to-blue-600",
      useCases: ["Multi-site Networks", "Cloud Connectivity", "Remote Work", "Network Optimization", "Cost Reduction", "Performance Improvement"],
      benefits: ["Cost optimization", "Performance improvement", "Centralized management", "Better security", "Automated operations"]
    },
    {
      title: "Network Security & Monitoring",
      description: "Advanced network security with real-time monitoring, threat detection, and automated response",
      price: "$10,000 - $75,000",
      features: ["Network Security", "Threat Detection", "Real-time Monitoring", "Automated Response", "Security Analytics", "Compliance Reporting", "Incident Management", "Performance Metrics"],
      category: "Network & Infrastructure",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      useCases: ["Network Security", "Threat Prevention", "Compliance Management", "Performance Monitoring", "Incident Response", "Security Operations"],
      benefits: ["Enhanced security", "Real-time protection", "Automated response", "Better monitoring", "Compliance ready"]
    },

    // Emerging Technology Solutions
    {
      title: "Edge Computing & IoT Infrastructure",
      description: "Edge computing solutions for IoT devices with real-time processing and analytics",
      price: "$18,000 - $100,000",
      features: ["Edge Computing", "IoT Infrastructure", "Real-time Processing", "Data Analytics", "Device Management", "Security", "Scalability", "Integration APIs"],
      category: "Emerging Technology",
      icon: Cpu,
      color: "from-green-500 to-emerald-600",
      useCases: ["IoT Applications", "Edge Analytics", "Real-time Processing", "Smart Cities", "Industrial IoT", "Connected Devices"],
      benefits: ["Reduced latency", "Real-time processing", "Cost optimization", "Scalable infrastructure", "Better performance"]
    },
    {
      title: "Quantum Computing Readiness",
      description: "Platform to prepare businesses for quantum computing with quantum-safe cryptography",
      price: "$25,000 - $150,000",
      features: ["Quantum-Safe Cryptography", "Performance Testing", "Migration Tools", "Expert Consultation", "Training Programs", "Risk Assessment", "Compliance", "Future Planning"],
      category: "Emerging Technology",
      icon: Cpu,
      color: "from-yellow-500 to-orange-600",
      useCases: ["Financial Services", "Cybersecurity", "Research & Development", "Optimization Problems", "Future Planning", "Competitive Advantage"],
      benefits: ["Future readiness", "Competitive advantage", "Risk mitigation", "Expert guidance", "Strategic planning"]
    },
    {
      title: "5G Network Infrastructure",
      description: "5G network planning, implementation, and optimization for enterprise applications",
      price: "$30,000 - $200,000",
      features: ["5G Planning", "Infrastructure Design", "Implementation", "Performance Optimization", "Security", "Monitoring", "Integration", "Support Services"],
      category: "Emerging Technology",
      icon: Network,
      color: "from-blue-500 to-purple-600",
      useCases: ["Enterprise Networks", "Mobile Applications", "IoT Infrastructure", "High-speed Connectivity", "Low Latency", "Future Technology"],
      benefits: ["High-speed connectivity", "Low latency", "Future ready", "Better performance", "Competitive advantage"]
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
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover comprehensive IT services and solutions from Zion Tech Group. Transform your infrastructure with cloud, security, data, and networking solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, data management, networking, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
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
              IT Services &
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Transform your IT infrastructure with enterprise-grade solutions designed for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Explore IT Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-8">
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

      {/* IT Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            IT Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServiceCategories.map((category, index) => (
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

      {/* Featured IT Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredITServices.map((service, index) => (
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
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-200 transition-colors"
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

      {/* Comprehensive IT Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Complete IT Services Portfolio
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Cloud Infrastructure & DevOps', 'Cybersecurity & Compliance', 'Data Management & Analytics', 'Network & Infrastructure', 'Emerging Technology'].map((category) => (
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
            {comprehensiveITServices.map((service, index) => (
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
                  
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  
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
                      className="text-sm text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
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
            Why Choose Zion Tech Group IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Server,
                title: "Enterprise Grade",
                description: "Professional solutions designed for enterprise-scale operations"
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Bank-grade security and compliance built into every solution"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of successful implementations and ROI"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced IT professionals and certified engineers"
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let our team of IT experts help you implement enterprise-grade solutions that drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Schedule a Consultation
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
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300">{contactInfo.phone}</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">
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