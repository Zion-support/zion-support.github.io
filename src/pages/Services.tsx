<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
import { 
  Briefcase, 
  Brain, 
  Cloud, 
<<<<<<< HEAD
<<<<<<< HEAD
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star
=======
  Shield, 
  Server, 
  RefreshCw, 
  Lightbulb,
  ArrowRight,
  CheckCircle
>>>>>>> cursor/website-audit-and-enhancement-8260
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning services",
      icon: Brain,
      path: "/services/ai",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and development operations",
      icon: Cloud,
      path: "/services/cloud",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      icon: Shield,
      path: "/services/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Compliance", "Incident Response"]
    },
    {
      title: "IT Infrastructure",
      description: "Robust and scalable IT infrastructure solutions",
      icon: Server,
      path: "/services/infrastructure",
      features: ["Network Design", "Server Management", "Database Administration", "Monitoring"]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services",
      icon: RefreshCw,
      path: "/services/transformation",
      features: ["Process Automation", "Technology Modernization", "Change Management", "Strategy"]
    },
    {
<<<<<<< HEAD
      title: "Data & Analytics",
      description: "Data-driven insights and business intelligence",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      services: [
        "Data Engineering",
        "Business Intelligence",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing"
      ]
    },
    {
      title: "Network & Connectivity",
      description: "Advanced networking and communication solutions",
      icon: Network,
      color: "from-yellow-500 to-orange-500",
      services: [
        "5G Network Solutions",
        "SD-WAN Implementation",
        "Network Security",
        "IoT Connectivity",
        "Edge Computing",
        "Network Optimization"
      ]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      icon: Brain,
      price: "From $2,500/month",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"]
    },
    {
      title: "Zero Trust Security Framework",
      description: "Implement enterprise-grade security with our comprehensive zero trust architecture",
      icon: Shield,
      price: "From $3,000/month",
      features: ["Identity verification", "Continuous monitoring", "Threat detection", "Compliance reporting"]
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate to the cloud and optimize your infrastructure costs",
      icon: Cloud,
      price: "From $5,000/month",
      features: ["Migration planning", "Cost optimization", "Performance tuning", "24/7 monitoring"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group's AI solutions transformed our business intelligence capabilities. We now have real-time insights that drive our decision-making process.",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Their cybersecurity expertise protected us from sophisticated threats and gave us peace of mind. The zero trust implementation was seamless.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "The cloud migration service exceeded our expectations. We reduced costs by 40% while improving performance significantly.",
      rating: 5,
      company: "DataFlow"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
      title: "Technology Consulting",
      description: "Strategic technology consulting and advisory services",
      icon: Lightbulb,
      path: "/services/consulting",
      features: ["Technology Strategy", "Digital Innovation", "Process Optimization", "Change Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/website-audit-and-enhancement-8260
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Comprehensive technology solutions designed to drive innovation, 
              enhance security, and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
=======
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
>>>>>>> cursor/website-audit-and-enhancement-8260
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
  Shield, 
  Server, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Lightbulb,
  Rocket,
  Database,
  Network,
  Lock,
  Cpu,
  Code,
  BarChart3,
  Smartphone,
  Palette
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cloud',
      title: 'Cloud Services',
      description: 'Comprehensive cloud infrastructure and migration solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable infrastructure solutions',
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      description: 'Strategic technology advisory and planning services',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const services = [
    {
      id: 'ai-automation',
      category: 'ai-ml',
      title: 'AI-Powered Business Automation',
      description: 'Transform your operations with intelligent automation that learns and adapts.',
      icon: Brain,
      features: [
        'Process automation with ML',
        'Natural language processing',
        'Predictive analytics',
        'Custom AI model development',
        'Intelligent document processing'
      ],
      pricing: 'Starting from $15,000',
      timeline: '4-8 weeks'
    },
    {
      id: 'cloud-migration',
      category: 'cloud',
      title: 'Cloud Migration & Optimization',
      description: 'Seamlessly migrate to the cloud with optimized performance and cost management.',
      icon: Cloud,
      features: [
        'Multi-cloud strategy',
        'Legacy system migration',
        'Performance optimization',
        'Cost management',
        'Disaster recovery setup'
      ],
      pricing: 'Starting from $25,000',
      timeline: '8-16 weeks'
    },
    {
      id: 'cybersecurity-audit',
      category: 'cybersecurity',
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive security evaluation and implementation of protective measures.',
      icon: Shield,
      features: [
        'Security vulnerability assessment',
        'Penetration testing',
        'Compliance audit (SOC2, ISO27001)',
        'Security policy development',
        'Incident response planning'
      ],
      pricing: 'Starting from $20,000',
      timeline: '6-12 weeks'
    },
    {
      id: 'infrastructure-design',
      category: 'infrastructure',
      title: 'Infrastructure Design & Implementation',
      description: 'Build robust, scalable infrastructure that supports your business growth.',
      icon: Server,
      features: [
        'Network architecture design',
        'Data center optimization',
        'Virtualization solutions',
        'Backup and recovery systems',
        'Performance monitoring'
      ],
      pricing: 'Starting from $30,000',
      timeline: '10-20 weeks'
    },
    {
      id: 'digital-strategy',
      category: 'digital-transformation',
      title: 'Digital Strategy & Transformation',
      description: 'Navigate your digital journey with expert guidance and proven methodologies.',
      icon: Rocket,
      features: [
        'Digital maturity assessment',
        'Technology roadmap development',
        'Change management strategy',
        'Process optimization',
        'Training and adoption programs'
      ],
      pricing: 'Starting from $35,000',
      timeline: '12-24 weeks'
    },
    {
      id: 'technology-consulting',
      category: 'consulting',
      title: 'Technology Strategy Consulting',
      description: 'Strategic technology advisory to align IT with business objectives.',
      icon: Lightbulb,
      features: [
        'Technology assessment',
        'Strategic planning',
        'Vendor selection',
        'Risk management',
        'ROI analysis'
      ],
      pricing: 'Starting from $18,000',
      timeline: '4-8 weeks'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      content: 'Zion Tech Group transformed our infrastructure and helped us achieve 40% cost savings while improving performance.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateTech',
      content: 'Their AI automation solutions have streamlined our operations and given us a competitive edge in the market.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Director, Global Solutions',
      content: 'Professional, knowledgeable, and delivered exactly what we needed. Highly recommended for any technology project.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Lightbulb, value: '200+', label: 'Projects Completed' },
    { icon: Rocket, value: '40%', label: 'Average Cost Savings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive technology services designed to accelerate your business growth, 
            enhance efficiency, and drive digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-zion-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
                  <stat.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-cyan/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services to meet all your business needs
=======
      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI and cloud solutions to cybersecurity and digital transformation
>>>>>>> cursor/website-audit-and-enhancement-8260
=======
            <h2 className="text-4xl font-bold text-white mb-6">Service Categories</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs.
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
<<<<<<< HEAD
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`bg-gradient-to-r ${category.color} p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
=======
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveService(category.id)}
              >
                <div className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-zion-cyan/80 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Services */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
      {/* Detailed Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful solutions that deliver immediate value to your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700"
              >
<<<<<<< HEAD
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-blue-400 mb-4">
                  {service.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center block"
                >
                  Get Started
=======
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> cursor/website-audit-and-enhancement-8260
                </Link>
=======
            <h2 className="text-4xl font-bold text-white mb-6">Our Service Offerings</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Detailed breakdown of our services with features, pricing, and timelines to help you make informed decisions.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-zion-cyan" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-zion-cyan/80">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-zion-cyan/80">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-zion-slate/50 rounded-xl p-6 border border-zion-cyan/20">
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                        <div className="text-zion-cyan/80 text-sm">Timeline: {service.timeline}</div>
                      </div>
                      
                      <button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
=======
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                
                <p className="text-zion-cyan/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan/60 text-sm">{testimonial.role}</div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your technology goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/solutions"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
>>>>>>> cursor/website-audit-and-enhancement-8260
=======
            <p className="text-xl text-zion-cyan/80 mb-8">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Download Service Guide
              </button>
            </div>
          </motion.div>
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default Services;
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
