import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Database, Building2, Network, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const EnterpriseSolutions: React.FC = () => {
  const services = [
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions including threat detection, data protection, and compliance management.",
      icon: Shield,
      features: ["Threat detection", "Data encryption", "Compliance management", "Security audits"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business modernization and digital transformation consulting.",
      icon: Rocket,
      features: ["Process optimization", "Technology assessment", "Change management", "ROI optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Architecture",
      description: "Design and implement scalable enterprise technology architectures.",
      icon: Building2,
      features: ["System design", "Integration planning", "Scalability planning", "Performance optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Management",
      description: "Enterprise data strategy, governance, and analytics solutions.",
      icon: Database,
      features: ["Data strategy", "Governance frameworks", "Analytics platforms", "Data quality"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Network Infrastructure",
      description: "Robust network design and management for enterprise environments.",
      icon: Network,
      features: ["Network design", "Security implementation", "Performance monitoring", "Disaster recovery"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Enterprise Consulting",
      description: "Strategic technology consulting for large organizations.",
      icon: Users,
      features: ["Technology strategy", "Vendor selection", "Implementation planning", "Team training"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Protect your business with enterprise-grade security solutions",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Operational Efficiency",
      description: "Streamline processes and improve productivity across the organization",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs while improving system performance and reliability",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern enterprise technology solutions",
      icon: Rocket,
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group's enterprise solutions transformed our entire IT infrastructure. We've seen a 60% improvement in operational efficiency.",
      name: "Robert Thompson",
      role: "CIO, Global Enterprises Inc",
      rating: 5
    },
    {
      content: "Their security implementation is world-class. We feel confident that our data and systems are fully protected.",
      name: "Jennifer Martinez",
      role: "CISO, SecureCorp International",
      rating: 5
    },
    {
      content: "The digital transformation project exceeded our expectations. Our team productivity increased dramatically.",
      name: "Alexander Chen",
      role: "CTO, Innovation Labs",
      rating: 5
    }
  ];
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Shield, Building2, Users, Lock, Database, Globe, CheckCircle, Star, ArrowRight, TrendingUp, Zap, Cpu } from 'lucide-react';
import { SEO } from '@/components/SEO';

const enterpriseServices = [
  {
    title: "Enterprise Security",
    description: "Comprehensive security solutions including threat detection, data protection, and compliance management.",
    icon: Shield,
    features: ["Zero Trust Architecture", "Advanced Threat Detection", "Compliance Management", "Security Audits"],
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end business modernization strategies and implementation services.",
    icon: Building2,
    features: ["Strategy Development", "Process Optimization", "Technology Integration", "Change Management"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise Integration",
    description: "Seamless integration of legacy systems with modern cloud-native solutions.",
    icon: Cpu,
    features: ["API Development", "System Integration", "Data Migration", "Legacy Modernization"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data Management",
    description: "Enterprise-grade data solutions for governance, analytics, and insights.",
    icon: Database,
    features: ["Data Governance", "Business Intelligence", "Data Analytics", "Master Data Management"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Compliance & Governance",
    description: "Regulatory compliance and governance frameworks for enterprise environments.",
    icon: Lock,
    features: ["Regulatory Compliance", "Risk Management", "Policy Development", "Audit Support"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Global Infrastructure",
    description: "Worldwide infrastructure solutions for multinational organizations.",
    icon: Globe,
    features: ["Multi-region Deployment", "Global CDN", "Compliance by Region", "Local Support"],
    color: "from-yellow-500 to-orange-500"
  }
];

const testimonials = [
  {
    content: "Zion's enterprise solutions transformed our entire IT infrastructure. We now have a scalable, secure, and compliant system that supports our global operations.",
    name: "Jennifer Martinez",
    role: "CIO, GlobalCorp International",
    rating: 5
  },
  {
    content: "The digital transformation project they led for us exceeded all expectations. Our operational efficiency improved by 60% within the first year.",
    name: "Robert Kim",
    role: "VP of Operations, TechEnterprise",
    rating: 5
  },
  {
    content: "Working with Zion gave us enterprise-grade security without the enterprise complexity. Their solutions are both powerful and user-friendly.",
    name: "Amanda Foster",
    role: "Security Director, SecureTech",
    rating: 5
  }
];
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

  return (
    <>
      <SEO 
<<<<<<< HEAD
        title="Enterprise Solutions | Zion Tech Group"
        description="Comprehensive business technology solutions including enterprise security, digital transformation, and infrastructure management."
        keywords="enterprise solutions, digital transformation, enterprise security, enterprise architecture, data management"
=======
        title="Enterprise Solutions - Zion Tech Group" 
        description="Comprehensive business technology solutions including enterprise security, digital transformation, and compliance management."
        keywords="enterprise solutions, digital transformation, enterprise security, compliance, governance, business technology"
=======
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Building, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Server,
  Network,
  Code,
  Settings,
  Lock,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseSolutions = () => {
  const solutions = [
=======
import { ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Database, Building2, Network, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const EnterpriseSolutions: React.FC = () => {
  const services = [
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d2d6
    {
      icon: Building,
      title: "Enterprise AI Platform",
      description: "Comprehensive AI platform for enterprise-scale machine learning and automation.",
      features: ["Scalable ML infrastructure", "AutoML capabilities", "Model governance", "Enterprise security"],
      price: "From $50,000",
      industry: "Technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Optimization",
      description: "End-to-end cloud migration with optimization for performance, cost, and security.",
      features: ["Multi-cloud strategy", "Performance optimization", "Cost optimization", "Security implementation"],
      price: "From $75,000",
      industry: "All Industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance Suite",
      description: "Comprehensive cybersecurity solutions with regulatory compliance management.",
      features: ["Threat detection", "Vulnerability assessment", "Compliance monitoring", "Incident response"],
      price: "From $45,000",
      industry: "Finance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance for enterprise digital transformation initiatives.",
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management"],
      price: "From $300/hour",
      industry: "All Industries",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Enterprise Data Platform",
      description: "Scalable data platform for enterprise data management and analytics.",
      features: ["Data governance", "Real-time analytics", "Data integration", "Scalable architecture"],
      price: "From $60,000",
      industry: "Technology",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Network,
      title: "Enterprise Integration Platform",
      description: "Comprehensive platform for integrating enterprise systems and applications.",
      features: ["API management", "System integration", "Workflow automation", "Real-time sync"],
      price: "From $55,000",
      industry: "Manufacturing",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Scalable Solutions",
      description: "Enterprise-grade solutions that grow with your business needs and requirements."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of experience delivering complex enterprise solutions across industries."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international standards and best practices for enterprise solutions."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance frameworks for enterprise environments."
    }
  ];

  const stats = [
    { label: "Enterprise Clients", value: "100+", icon: Building },
    { label: "Projects Delivered", value: "300+", icon: CheckCircle },
    { label: "Industries Served", value: "15+", icon: Globe },
    { label: "Client Satisfaction", value: "99%", icon: Star }
  ];

  const industries = [
    { name: "Technology", icon: "💻", description: "Software companies, SaaS platforms, tech startups" },
    { name: "Finance", icon: "💰", description: "Banks, insurance companies, fintech firms" },
    { name: "Healthcare", icon: "🏥", description: "Hospitals, clinics, health tech companies" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial companies, factories, production facilities" },
    { name: "Retail", icon: "🛍️", description: "E-commerce, retail chains, online marketplaces" },
    { name: "Government", icon: "🏛️", description: "Federal, state, and local government agencies" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive business technology solutions designed for enterprise-scale operations and digital transformation."
        keywords="enterprise solutions, business technology, digital transformation, enterprise software, Zion Tech Group"
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
        canonical="https://ziontechgroup.com/enterprise-solutions"
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      />
      
      <div className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Enterprise Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise-Grade
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your enterprise with comprehensive technology solutions designed for scale, 
                security, and performance in today's digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Enterprise Technology Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                From security to digital transformation, we provide end-to-end enterprise solutions 
                that drive business growth and operational excellence.
              </p>
            </motion.div>
=======
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Enterprise
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive business technology solutions designed for enterprise environments. 
              From security to digital transformation, we deliver results that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Enterprise Assessment
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
=======
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-green opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-green opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-green via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Comprehensive business technology solutions designed for enterprise-scale operations 
              and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-green to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-green/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-green/30 text-zion-green font-semibold rounded-xl hover:bg-zion-green hover:text-white transition-all duration-300"
              >
                Request Quote
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)]"></div>
      </section>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
<<<<<<< HEAD
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
=======
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our enterprise solutions are tailored for organizations across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-xl p-4 text-center hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <span className="text-zion-slate-light font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Enterprise Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to meet the unique challenges of enterprise organizations.
=======
      {/* Solutions Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Enterprise Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed to drive innovation and transform enterprise operations
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
=======
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-green/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold bg-zion-green/20 text-zion-green rounded-full">
                      {solution.industry}
                    </span>
                  </div>
                  <p className="text-zion-slate-light mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-green mb-3">Key Features:</h4>
                    <ul className="space-y-2">
<<<<<<< HEAD
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
=======
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-green mr-2 flex-shrink-0" />
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                          {feature}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Enterprise Solutions?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover the transformative benefits of implementing enterprise-grade technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Our Enterprise Clients Say
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Hear from enterprise leaders who have transformed their organizations with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-cyan/20 rounded-2xl p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Let's discuss how our enterprise solutions can drive innovation and growth in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterpriseSolutions;
=======
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-green mb-4">{solution.price}</div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-green to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-green/25 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Enterprise Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Zion for Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We understand the unique challenges of enterprise organizations and deliver solutions that drive real business value.
=======
      {/* Industries Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Proven expertise across diverse industries and business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-green/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-zion-slate-light">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade technology solutions
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {[
              {
                title: "Scalability & Performance",
                description: "Solutions that grow with your business and handle enterprise-scale workloads with optimal performance.",
                icon: TrendingUp
              },
              {
                title: "Security & Compliance",
                description: "Enterprise-grade security with built-in compliance frameworks for regulated industries.",
                icon: Shield
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support and dedicated account management for enterprise clients.",
                icon: Users
              },
              {
                title: "Proven Track Record",
                description: "Successfully delivered enterprise solutions for Fortune 500 companies and government agencies.",
                icon: CheckCircle
              }
            ].map((benefit, index) => {
=======
            {benefits.map((benefit, index) => {
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zion-purple/20 rounded-lg text-zion-cyan">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                    </div>
=======
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-green to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials */}
      <section className="py-24 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Enterprise Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how we've helped enterprise organizations achieve their digital transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join leading organizations that trust Zion for their enterprise technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Enterprise Assessment
                </motion.button>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const EnterpriseSolutions = () => {
  const enterpriseServices = [
    {
      icon: Building2,
      title: "Enterprise Architecture",
      description: "Design and implement scalable enterprise architectures that support your business growth.",
      features: ["Scalable infrastructure", "Microservices architecture", "API-first design"],
      path: "/enterprise-architecture"
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Transform your organization with modern digital technologies and processes.",
      features: ["Process automation", "Workflow optimization", "Change management"],
      path: "/digital-transformation"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Protect your enterprise with comprehensive security solutions and compliance frameworks.",
      features: ["Zero-trust security", "Compliance management", "Threat detection"],
      path: "/enterprise-security"
    },
    {
      icon: Zap,
      title: "Cloud & DevOps",
      description: "Accelerate development and deployment with modern cloud and DevOps practices.",
      features: ["Multi-cloud strategy", "CI/CD pipelines", "Infrastructure as code"],
      path: "/cloud-devops-solutions"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Build and manage global infrastructure that serves customers worldwide.",
      features: ["Multi-region deployment", "CDN optimization", "Global load balancing"],
      path: "/global-infrastructure"
    },
    {
      icon: BarChart3,
      title: "Enterprise Analytics",
      description: "Unlock insights from your enterprise data with advanced analytics and reporting.",
      features: ["Real-time dashboards", "Predictive analytics", "Data governance"],
      path: "/enterprise-analytics"
    }
  ];

  const benefits = [
    "Scalable and flexible solutions",
    "Enterprise-grade security",
    "24/7 support and monitoring",
    "Compliance and governance",
    "Cost optimization",
    "Future-proof architecture"
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Solutions for
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your enterprise with scalable, secure, and innovative solutions designed 
              to drive growth, efficiency, and competitive advantage in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Enterprise Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            From architecture design to implementation and ongoing support, we provide end-to-end 
            enterprise solutions that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-zion-cyan/20 rounded-lg">
                  <service.icon className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.path}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light">
              Experience enterprise-grade solutions that deliver measurable results and drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-zion-cyan flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            We have deep experience across multiple industries, understanding the unique challenges 
            and opportunities each sector presents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:border-zion-cyan/50 transition-all duration-300"
            >
              <Star className="h-8 w-8 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white">{industry}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can help you achieve your strategic objectives 
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-green to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our enterprise solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
    </div>
  );
};

<<<<<<< HEAD
export default EnterpriseSolutions;
>>>>>>> origin/cursor/website-audit-and-enhancement-2595
=======
export default EnterpriseSolutions;
>>>>>>> origin/cursor/website-audit-and-enhancement-8e2b
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
