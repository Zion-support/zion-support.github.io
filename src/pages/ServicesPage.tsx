<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Network, 
  Code, 
  Users, 
  Target,
  BarChart3,
  Lock,
  Database,
  Globe,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  TrendingUp,
  Heart,
  Building,
  ShoppingCart,
  DollarSign,
  Factory,
  Car,
  Plane,
  Ship
} from 'lucide-react';
import SEOHead from "@/components/SEOHead";
import { ALL_INNOVATIVE_SERVICES, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEOHead 
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, Healthcare AI, Legal Tech, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive AI, cybersecurity, and technology solutions designed to transform 
            your business and drive innovation across all industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <>
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
=======
            <Link to="/expanded-services">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Globe className="h-4 w-4 mr-2" />
                View All Services
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                View Pricing
              </Button>
            </Link>
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View Pricing
=======

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Building,
  ArrowRight,
  Star,
  Users,
  Server,
  BarChart3,
  Star as StarIcon
} from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "AI & Autonomous Systems",
      description: "Revolutionary AI systems that operate independently",
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      services: [
        { name: "AI Legal Research Assistant", href: "/ai-autonomous-legal-research-assistant" },
        { name: "AI Financial Risk Manager", href: "/ai-autonomous-financial-risk-manager" },
        { name: "AI Healthcare Diagnostics Pro", href: "/ai-autonomous-healthcare-diagnostics-pro" },
        { name: "AI Supply Chain Optimizer", href: "/ai-autonomous-supply-chain-optimizer" },
        { name: "AI Cybersecurity Sentinel", href: "/ai-autonomous-cybersecurity-sentinel" }
      ]
    },
    {
      title: "Quantum Technology",
      description: "Next-generation quantum computing solutions",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      services: [
        { name: "Quantum Edge Computing Platform", href: "/quantum-edge-computing-platform" },
        { name: "Neuromorphic Computing Infrastructure", href: "/neuromorphic-computing-infrastructure" },
        { name: "Holographic Data Center Platform", href: "/holographic-data-center-platform" },
        { name: "Bio-Computing Infrastructure", href: "/bio-computing-infrastructure" },
        { name: "Quantum Internet Backbone", href: "/quantum-internet-backbone" }
      ]
    },
    {
      title: "IT Infrastructure",
      description: "Cutting-edge infrastructure solutions",
      icon: Server,
      color: "from-green-500 to-teal-600",
      services: [
        { name: "Cloud Migration Services", href: "/cloud-migration" },
        { name: "DevOps Automation", href: "/devops-automation" },
        { name: "Edge Computing Solutions", href: "/edge-computing" },
        { name: "Data Center Optimization", href: "/data-center-optimization" },
        { name: "5G Private Network Solutions", href: "/5g-private-network-solutions" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Innovative software-as-a-service solutions",
      icon: Building,
      color: "from-orange-500 to-red-600",
      services: [
        { name: "AI Content Factory Pro", href: "/ai-autonomous-content-factory-pro" },
        { name: "Quantum CRM Intelligence Suite", href: "/quantum-crm-intelligence-suite" },
        { name: "AI HR Platform", href: "/ai-autonomous-hr-platform" },
        { name: "Quantum Financial Intelligence Platform", href: "/quantum-financial-intelligence-platform" },
        { name: "AI Education Platform", href: "/ai-autonomous-education-platform" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and protection solutions",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      services: [
        { name: "Zero Trust Network Architecture", href: "/zero-trust-network-architecture" },
        { name: "Threat Intelligence Platform", href: "/threat-intelligence-platform" },
        { name: "Compliance Automation", href: "/compliance-automation" },
        { name: "SOC2 Compliance Automation", href: "/soc2-compliance-automation" },
        { name: "Vulnerability Assessment & Penetration Testing", href: "/vulnerability-assessment-penetration-testing" }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Industry-specific technology solutions",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-600",
      services: [
        { name: "Healthcare AI Solutions", href: "/healthcare-ai-solutions" },
        { name: "Financial Technology Solutions", href: "/financial-solutions" },
        { name: "Manufacturing AI Solutions", href: "/manufacturing-ai-solutions" },
        { name: "Retail Technology Solutions", href: "/retail-technology-solutions" },
        { name: "Energy & Utilities Solutions", href: "/energy-utilities-solutions" }
      ]
    }
  ];

  const featuredServices = [
    {
      title: "Quantum Edge Computing Platform",
      description: "Revolutionary edge computing platform that leverages quantum computing principles to deliver unprecedented performance and efficiency for distributed applications.",
      price: "$1,299/month",
      href: "/quantum-edge-computing-platform",
      icon: Brain,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI Autonomous Legal Research Assistant",
      description: "Advanced AI-powered legal research tool that autonomously analyzes case law, statutes, and legal precedents to provide comprehensive legal insights.",
      price: "$899/month",
      href: "/ai-autonomous-legal-research-assistant",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zero Trust Network Architecture",
      description: "Comprehensive cybersecurity solution implementing zero-trust principles across your entire network infrastructure for maximum security.",
      price: "$2,199/month",
      href: "/zero-trust-network-architecture",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pioneering the future of technology with revolutionary AI autonomous systems, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Sales
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
            </Link>
          </div>
        </div>
<<<<<<< HEAD
      </section>

<<<<<<< HEAD
      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:text-cyan-300"
                >
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver 
              exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Proven Expertise</h3>
              <p className="text-gray-400">Decades of experience in AI, cybersecurity, and emerging technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock support and monitoring for your critical systems.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation First</h3>
              <p className="text-gray-400">Always at the forefront of emerging technologies and AI advancements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Enterprise Security</h3>
              <p className="text-gray-400">Bank-level security and compliance for your most sensitive data.</p>
            </div>
=======
      {/* Featured Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and transformative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <Link 
                    to={service.href} 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <Link 
                      key={serviceIndex}
                      to={service.href} 
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <Link 
                    to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <span>View All {category.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our services can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-5 h-5" />
=======
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss how our innovative solutions can drive your success and position you at the forefront of technological advancement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get in Touch
            </Link>
            <Link 
              to="/get-started" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Get Started
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
            </Link>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
=======
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Tech Services - Zion Tech Group"
        description="Browse our comprehensive range of technology services and solutions."
        canonical="https://ziontechgroup.com/services"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </div>

      {/* New Comprehensive Services Showcase */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zion-blue-dark mb-4">
            ZionTech Group Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT, AI, and Digital Transformation Solutions for Modern Businesses
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">Cutting-edge AI solutions to transform your business</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Custom AI Development</span>
                <span className="text-sm font-semibold text-zion-purple">$5,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Strategy Consulting</span>
                <span className="text-sm font-semibold text-zion-purple">$7,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Machine Learning Models</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-dark hover:to-zion-cyan-dark">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Business Automation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Business Automation</h3>
              <p className="text-gray-600 mb-4">Streamline operations with intelligent automation</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Workflow Automation</span>
                <span className="text-sm font-semibold text-zion-purple">$299/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Process Optimization</span>
                <span className="text-sm font-semibold text-zion-purple">$6,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">RPA Implementation</span>
                <span className="text-sm font-semibold text-zion-purple">$8,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Protect your business with advanced security</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Security Assessment</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24/7 Monitoring</span>
                <span className="text-sm font-semibold text-zion-purple">$399/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Incident Response</span>
                <span className="text-sm font-semibold text-zion-purple">$7,200+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600">
                  Secure Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Cloud & Infrastructure</h3>
              <p className="text-gray-600 mb-4">Scalable cloud solutions for growth</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cloud Migration</span>
                <span className="text-sm font-semibold text-zion-purple">$3,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Infrastructure Setup</span>
                <span className="text-sm font-semibold text-zion-purple">$8,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24/7 Management</span>
                <span className="text-sm font-semibold text-zion-purple">$3,000/month</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
                  Scale Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Data Analytics</h3>
              <p className="text-gray-600 mb-4">Transform data into actionable insights</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">BI Dashboard</span>
                <span className="text-sm font-semibold text-zion-purple">$199/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Predictive Analytics</span>
                <span className="text-sm font-semibold text-zion-purple">$5,200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Big Data Processing</span>
                <span className="text-sm font-semibold text-zion-purple">$4,500+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                  Analyze Data
                </Button>
              </Link>
            </div>
          </div>

          {/* Digital Transformation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">Modernize your business for the future</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Strategy Development</span>
                <span className="text-sm font-semibold text-zion-purple">$7,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Legacy Modernization</span>
                <span className="text-sm font-semibold text-zion-purple">$8,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Change Management</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600">
                  Transform Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Micro SAAS Services Showcase */}
        <div className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable, scalable software solutions designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workflow Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Workflow Automation</h3>
                <p className="text-gray-600 mb-4">Connect 500+ apps and automate business processes</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$299<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">No-code drag & drop interface</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">500+ app integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Advanced analytics</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 py-3">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">Real-time analytics and predictive insights</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$199<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time data visualization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Custom dashboards</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated reporting</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 py-3">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* AI-Powered CRM */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">AI-Powered CRM</h3>
                <p className="text-gray-600 mb-4">Intelligent customer relationship management</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$149<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">AI-driven lead scoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated follow-ups</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Sales automation</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 py-3">
                    Boost Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Project Management</h3>
                <p className="text-gray-600 mb-4">Complete project management suite</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$99<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Task tracking & management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Team collaboration tools</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Resource allocation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Progress monitoring</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 py-3">
                    Manage Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Marketing Automation</h3>
                <p className="text-gray-600 mb-4">All-in-one marketing automation platform</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$179<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Email campaign management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Social media automation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Lead nurturing</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">ROI tracking</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 py-3">
                    Automate Marketing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Cybersecurity Monitoring */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Cybersecurity Monitoring</h3>
                <p className="text-gray-600 mb-4">24/7 threat detection and response</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$399<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 threat monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated incident response</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Vulnerability assessment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Compliance reporting</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 py-3">
                    Secure Business
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-8">Pricing Comparison</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Starter</h4>
                  <div className="text-2xl font-bold text-zion-purple">$99</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">Perfect for small businesses</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Professional</h4>
                  <div className="text-2xl font-bold text-zion-purple">$299</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">Ideal for growing companies</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Enterprise</h4>
                  <div className="text-2xl font-bold text-zion-purple">$599</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">For large organizations</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Custom</h4>
                  <div className="text-2xl font-bold text-zion-purple">Contact</div>
                  <div className="text-sm text-gray-500">us</div>
                  <p className="text-sm text-gray-600 mt-2">Tailored solutions</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/request-quote">
                  <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-dark hover:to-zion-cyan-dark px-8 py-3">
                    Get Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Contact our experts to discuss your project requirements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button className="bg-white text-zion-blue-dark hover:bg-gray-100 px-8 py-3">
                Request Free Quote
              </Button>
            </Link>
            <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3">
                Visit Website
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Comprehensive Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From AI development to digital transformation, we provide end-to-end solutions that drive business growth and innovation
          </p>
        </div>

        {/* AI & Machine Learning Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">AI & Machine Learning Services</h3>
            <p className="text-lg text-gray-600">Transform your business with cutting-edge artificial intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Custom AI Development</h4>
                  <p className="text-sm text-gray-600">Tailored AI solutions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Develop custom AI applications tailored to your specific business needs and industry requirements.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $5,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">AI Strategy Consulting</h4>
                  <p className="text-sm text-gray-600">Strategic AI planning</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Develop a comprehensive AI strategy that aligns with your business goals and competitive landscape.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $7,500</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Machine Learning Models</h4>
                  <p className="text-sm text-gray-600">Custom ML solutions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Build and deploy custom machine learning models for prediction, classification, and pattern recognition.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $6,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Transformation Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">Digital Transformation Services</h3>
            <p className="text-lg text-gray-600">Modernize your business for the digital age</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Legacy System Modernization</h4>
                  <p className="text-sm text-gray-600">Update old systems</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Transform outdated systems into modern, scalable solutions that support business growth and innovation.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $8,500</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Cloud Migration</h4>
                  <p className="text-sm text-gray-600">Move to the cloud</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Seamlessly migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $3,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Change Management</h4>
                  <p className="text-sm text-gray-600">Guide your team</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Support your team through digital transformation with comprehensive change management and training programs.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $6,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cybersecurity Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">Cybersecurity Services</h3>
            <p className="text-lg text-gray-600">Protect your business from evolving cyber threats</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Security Assessment</h4>
                  <p className="text-sm text-gray-600">Comprehensive audit</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Identify vulnerabilities and security gaps with thorough penetration testing and security assessments.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $6,000</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">24/7 Monitoring</h4>
                  <p className="text-sm text-gray-600">Always protected</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Continuous monitoring and threat detection with automated incident response and real-time alerts.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">$399/month</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Incident Response</h4>
                  <p className="text-sm text-gray-600">Quick recovery</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Rapid response and recovery from security incidents with expert incident handling and forensics.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $7,200</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Data Analytics Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-zion-blue-dark mb-4">Data Analytics Services</h3>
            <p className="text-lg text-gray-600">Transform data into actionable business insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Business Intelligence</h4>
                  <p className="text-sm text-gray-600">Real-time insights</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Interactive dashboards and reports that provide real-time insights into your business performance.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">$199/month</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Predictive Analytics</h4>
                  <p className="text-sm text-gray-600">Future insights</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Forecast trends and make data-driven decisions with advanced predictive modeling and analytics.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $5,200</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-blue-dark">Big Data Processing</h4>
                  <p className="text-sm text-gray-600">Handle large datasets</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Process and analyze large volumes of data to uncover hidden patterns and business opportunities.</p>
              <div className="flex justify-between items-center">
                <span className="text-zion-purple font-semibold">Starting at $4,500</span>
                <Link to="/request-quote">
                  <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose ZionTech Group */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ZionTech Group?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Proven Expertise</h4>
              <p className="text-zion-cyan">15+ years of experience in AI, IT, and digital transformation</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Innovation First</h4>
              <p className="text-zion-cyan">Cutting-edge solutions using the latest technologies</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Client Success</h4>
              <p className="text-zion-cyan">95% client satisfaction rate with measurable results</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/request-quote">
              <Button className="bg-white text-zion-blue-dark hover:bg-gray-100 px-8 py-3 text-lg">
                Start Your Digital Transformation Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <DynamicListingPage 
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
<<<<<<< HEAD
      />
      <TrustedBySection />
    </>
  );
}
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8fa6
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Tech Services</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Comprehensive technology services to help your business grow and succeed in the digital age.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Our services marketplace is currently under development. Soon you'll be able to browse, compare, and book professional tech services from verified providers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
                  <p className="text-zion-slate-light text-sm">
                    Custom websites, web apps, and e-commerce solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mobile Apps</h3>
                  <p className="text-zion-slate-light text-sm">
                    iOS, Android, and cross-platform mobile applications
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Services</h3>
                  <p className="text-zion-slate-light text-sm">
                    AWS, Azure, and Google Cloud solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                  <p className="text-zion-slate-light text-sm">
                    Security audits, penetration testing, and compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
  );
}
=======
  );
};

export default ServicesPage;
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
