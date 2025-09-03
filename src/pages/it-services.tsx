import React from "react"
import Head from "next/head"
import Link from "next/link"
import { 
  Server, Cloud, Shield, Database, Network, Cpu, Zap, Users, 
  Building, Globe, Lock, BarChart3, Monitor, Smartphone, Laptop, 
  Desktop, Tablet, Watch, Headphones, Speaker, Microphone, Camera, 
  Video, Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, 
  Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, 
  ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, 
  Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, 
  ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, 
  Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, 
  SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, 
  Repeat1, ArrowRight, CheckCircle, Star, Rocket, Lightbulb, 
  Workflow, Brain, Target, TrendingUp, CreditCard, Heart, Home, 
  Car, GraduationCap, ShoppingBag, Briefcase, Palette, Music, 
  BookOpen, Calendar, Clock, Bell, Eye, Download, Upload, Share2, 
  QrCode, Building2, MessageSquare, FileText, ShoppingCart, Search, 
  Mail, Phone
} from "lucide-react"

const itservices = () => {
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
      title: "Quantum Cloud Infrastructure",
      description: "Next-generation quantum-enhanced cloud infrastructure with AI optimization, zero-trust security, and 99.99% uptime guarantee.",
      price: "From $5,999/month",
      features: ["Quantum-Enhanced Computing", "Hybrid Cloud Architecture", "AI-Optimized Resource Allocation", "Zero-Trust Security Framework", "Edge Computing Integration", "Automated Scaling"],
      href: "/services/quantum-cloud-infrastructure",
      color: "from-purple-400 to-indigo-500",
      popular: true,
      benefits: ["Reduce infrastructure costs by 60%", "Improve performance by 300%", "Achieve 99.99% uptime SLA", "Scale instantly to meet demand"]
    },
    {
      title: "Cloud Migration & Modernization",
      description: "End-to-end cloud migration services with modern architecture and optimization for AWS, Azure, and Google Cloud platforms.",
      price: "From $15,000",
      features: ["Cloud Strategy", "Migration Planning", "Architecture Design", "Data Migration", "Performance Optimization", "Cost Management"],
      href: "/services/cloud-migration",
      color: "from-blue-400 to-cyan-500",
      benefits: ["Reduce infrastructure costs by 40%", "Improve scalability and performance", "Enhance security and compliance", "Enable remote work capabilities"]
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity platform with threat detection, compliance monitoring, and 24/7 security operations center.",
      price: "From $8,000",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Monitoring", "Incident Response", "Security Analytics", "24/7 Monitoring"],
      href: "/services/cybersecurity-suite",
      color: "from-red-400 to-orange-500",
      benefits: ["Reduce security incidents by 90%", "Ensure regulatory compliance", "Protect against advanced threats", "Minimize business disruption"]
    },
    {
      title: "Data Engineering & Analytics Platform",
      description: "Complete data solution with engineering, warehousing, and analytics capabilities for modern data-driven organizations.",
      price: "From $12,000",
      features: ["Data Engineering", "ETL/ELT Pipelines", "Data Warehousing", "Business Intelligence", "Analytics Dashboards", "Data Governance"],
      href: "/services/data-engineering",
      color: "from-green-400 to-emerald-500",
      benefits: ["Improve data quality by 95%", "Reduce data processing time by 70%", "Enable real-time analytics", "Ensure data compliance"]
    },
    {
      title: "Enterprise Network Infrastructure",
      description: "Comprehensive network design, implementation, and management services for enterprise-grade connectivity and security.",
      price: "From $10,000",
      features: ["Network Design", "Infrastructure Setup", "Performance Monitoring", "Security Implementation", "Disaster Recovery", "24/7 Support"],
      href: "/services/network-infrastructure",
      color: "from-purple-400 to-indigo-500",
      benefits: ["Improve network performance by 50%", "Reduce downtime by 80%", "Enhance security posture", "Enable seamless connectivity"]
    },
    {
      title: "DevOps & CI/CD Automation",
      description: "Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and continuous monitoring.",
      price: "From $7,500",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Container Orchestration", "Automated Testing", "Deployment Automation", "Monitoring & Alerting"],
      href: "/services/devops-automation",
      color: "from-yellow-400 to-orange-500",
      benefits: ["Reduce deployment time by 75%", "Improve code quality", "Enable faster releases", "Minimize human errors"]
    },
    {
      title: "IT Infrastructure Management",
      description: "Comprehensive IT infrastructure management services including server management, backup solutions, and disaster recovery.",
      price: "From $5,000",
      features: ["Server Management", "Backup Solutions", "Disaster Recovery", "Performance Monitoring", "Security Updates", "Proactive Maintenance"],
      href: "/services/it-infrastructure",
      color: "from-teal-400 to-cyan-500",
      benefits: ["Reduce IT costs by 30%", "Improve system reliability", "Ensure business continuity", "Optimize resource utilization"]
    }
  ]

  const pricingTiers = [
    {
      name: "IT Starter",
      price: "$2,500/month",
      description: "Perfect for small businesses",
      features: [
        "Basic IT support",
        "Up to 25 users",
        "Email support",
        "Standard monitoring",
        "Basic security",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "IT Professional",
      price: "$7,500/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced IT support",
        "Up to 100 users",
        "Priority support",
        "Advanced monitoring",
        "Enhanced security",
        "Weekly reports",
        "Cloud integration"
      ],
      popular: true
    },
    {
      name: "IT Enterprise",
      price: "$15,000/month",
      description: "For large organizations",
      features: [
        "Dedicated IT team",
        "Unlimited users",
        "24/7 support",
        "Real-time monitoring",
        "Enterprise security",
        "Daily reports",
        "Full cloud services",
        "SLA guarantee"
      ],
      popular: false
    }
  ]

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group | Enterprise Technology Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, we provide enterprise-grade technology solutions for modern organizations." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, data analytics, network infrastructure, devops, it consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
                <Server className="w-4 h-4 mr-2" />
                IT Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise IT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive IT services. 
                From cloud migration to cybersecurity, we deliver enterprise-grade technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/pricing" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                  View Pricing <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IT Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of IT services designed to address enterprise technology needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServiceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count} solutions</span>
                    <Link href={category.href} className="text-blue-600 hover:text-blue-700 font-medium">
                      Explore <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most comprehensive IT solutions that are transforming businesses across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredITServices.map((service, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 ${service.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                  {service.popular && (
                    <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium rounded-t-xl">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <TrendingUp className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={service.href} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IT Services Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect IT services plan for your business needs. All plans include our core IT capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg ${tier.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`w-full py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center ${
                      tier.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our IT services today and experience enterprise-grade technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold">
                Contact Us <Mail className="w-4 h-4 ml-2" />
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                Call +1 302 464 0950 <Phone className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default itservices
