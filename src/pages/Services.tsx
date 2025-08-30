import Services from './services';
export default Services;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Rocket, 
  Users, 
  BarChart3, 
  Code, 
  Server, 
  Chip, 
  Globe, 
  Zap, 
  Lock, 
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗', color: 'from-zion-green to-zion-emerald' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐', color: 'from-zion-blue to-zion-cyan' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍', color: 'from-zion-purple to-zion-indigo' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️', color: 'from-zion-orange to-zion-red' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥', color: 'from-zion-purple to-zion-cyan' }
  ];
  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'reviews':
        return b.reviews - a.reviews;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  ];
  return (
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Users,
  Target,
  Globe,
  Cpu,
  Database,
  Lock,
  Eye,
  Activity,
  BarChart3,
  TrendingUp,
  Code,
  Cloud,
  Smartphone,
  Server,
  Network,
  Palette,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ShoppingCart
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive insights',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Predictive analytics and business insights with 95%+ accuracy',
          href: '/services/ai-business-intelligence',
          price: 'From $2,500/month',
          features: ['Predictive analytics', 'Real-time dashboards', 'Customer intelligence', 'Performance optimization'],
          popular: true
        },
        {
          name: 'AI Content Creation Suite',
          description: 'Automated content generation and marketing automation',
          href: '/services/ai-content-creation-suite',
          price: 'From $1,800/month',
          features: ['Content generation', 'Marketing automation', 'SEO optimization', 'Brand consistency']
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead scoring',
          href: '/services/ai-sales-copilot',
          price: 'From $2,200/month',
          features: ['Lead scoring', 'Sales automation', 'Pipeline optimization', 'Revenue forecasting']
        },
        {
          name: 'AI Customer Support',
          description: '24/7 automated customer service with human-like interactions',
          href: '/services/ai-customer-support-automation',
          price: 'From $1,500/month',
          features: ['24/7 support', 'Multi-language', 'Ticket automation', 'Customer satisfaction']
        }
      ]
    },
    {
      title: 'Cybersecurity & Security',
      description: 'Protect your business with enterprise-grade security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced threat detection and response with AI-powered intelligence',
          href: '/services/ai-cybersecurity-platform',
          price: 'From $3,500/month',
          features: ['AI threat detection', 'Zero-trust architecture', 'Automated response', 'Compliance ready'],
          popular: true
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Secure remote access and network security',
          href: '/services/zero-trust-network-access',
          price: 'From $2,800/month',
          features: ['Secure access', 'Network segmentation', 'Identity verification', 'Threat prevention']
        },
        {
          name: 'Security Headers & CSP',
          description: 'Web application security hardening and protection',
          href: '/services/security-headers-csp',
          price: 'From $1,200/month',
          features: ['Security headers', 'Content Security Policy', 'XSS protection', 'HTTPS enforcement']
        },
        {
          name: 'DSR Portal',
          description: 'Data subject rights management and compliance',
          href: '/services/dsr-portal',
          price: 'From $1,500/month',
          features: ['GDPR compliance', 'Data requests', 'Privacy management', 'Audit trails']
        }
      ]
    },
    {
      title: 'Development & Platforms',
      description: 'Build and launch applications with enterprise-grade infrastructure',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-600',
      services: [
        {
          name: 'Micro SAAS Platform',
          description: 'Rapid application development platform for micro SAAS applications',
          href: '/services/micro-saas-platform',
          price: 'From $1,500/month',
          features: ['Rapid development', 'Pre-built templates', 'AI integration', 'Auto-scaling'],
          popular: true
        },
        {
          name: 'Cloud DevOps Services',
          description: 'Infrastructure automation and management',
          href: '/services/cloud-devops',
          price: 'From $3,000/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise infrastructure solutions and management',
          href: '/services/it-infrastructure',
          price: 'From $4,500/month',
          features: ['Network management', 'Server administration', 'Backup solutions', '24/7 support']
        },
        {
          name: 'FinOps Optimization',
          description: 'Cloud cost optimization and financial operations',
          href: '/services/cloud-finops-optimizer',
          price: 'From $2,500/month',
          features: ['Cost optimization', 'Resource management', 'Budget tracking', 'ROI analysis']
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'AI-powered risk management, fraud detection, and compliance solutions',
      icon: DollarSign,
      href: '/solutions/financial',
      services: ['AI Business Intelligence', 'AI Cybersecurity Platform', 'Compliance Management']
    },
    {
      name: 'Healthcare',
      description: 'Patient data security, AI diagnostics, and operational efficiency',
      icon: Activity,
      href: '/solutions/healthcare',
      services: ['AI Healthcare Analytics', 'HIPAA Compliance', 'Patient Data Security']
    },
    {
      name: 'Manufacturing',
      description: 'IoT integration, predictive maintenance, and supply chain optimization',
      icon: Cpu,
      href: '/solutions/manufacturing',
      services: ['IoT Edge Computing', 'Predictive Maintenance', 'Supply Chain AI']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Customer analytics, inventory management, and personalized experiences',
      icon: ShoppingCart,
      href: '/solutions/retail',
      services: ['Customer Analytics', 'Inventory Management', 'Personalization Engine']
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Services' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Technology Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, cybersecurity, and development services. Transform your business with our cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, cybersecurity, micro SAAS, technology consulting, digital transformation, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-blue-300" />
            <span>Comprehensive Technology Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            From AI-powered business intelligence to enterprise cybersecurity and rapid application development, 
            we provide the tools and expertise to accelerate your digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to address the most pressing technology challenges 
              facing modern businesses.
            </p>
          </div>

          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group">
                      <Link to={service.href} className="block">
                        <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                          service.popular ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-gray-100'
                        }`}>
                          {service.popular && (
                            <div className="absolute -top-3 left-6">
                              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Popular
                              </span>
                            </div>
                          )}

                          <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                          
                          <div className="mb-6">
                            <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                              Learn More
                            </span>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering tailored technology solutions for specific industries, 
              understanding the unique challenges and compliance requirements of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <Link to={industry.href} className="block">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Let's discuss how our technology services can help you achieve your business goals 
            and drive measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Phone className="w-5 h-5 text-blue-300" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Mail className="w-5 h-5 text-blue-300" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
const services = [
  {
    category: 'Micro SaaS',
    items: [
      {
        title: 'AI Website Copy Optimizer',
        description: 'On-page SEO, A/B copy variants, tone optimization, and SERP monitoring.',
        price: '$49–$299/mo',
        cta: { label: 'Try Demo', href: '/request-quote' }
      },
      {
        title: 'Lead Scoring & Enrichment',
        description: 'Auto-enrich leads via public data, score intent, and route to sales.',
        price: '$99–$499/mo',
        cta: { label: 'Get Started', href: '/contact' }
      },
      {
        title: 'Invoice OCR + Reconciliation',
        description: 'Parse invoices, detect anomalies, sync with QuickBooks/Xero automatically.',
        price: '$149–$799/mo',
        cta: { label: 'Request Access', href: '/request-quote' }
      }
    ]
  },
  {
    category: 'AI Solutions',
    items: [
      {
        title: 'RAG Knowledge Assistants',
        description: 'Enterprise chat over docs with secure vector search and audit trails.',
        price: '$8k–$60k project + $500–$2k/mo',
        cta: { label: 'See Use Cases', href: '/services' }
      },
      {
        title: 'Autonomous Workflow Agents',
        description: 'Multi-agent systems for ticket triage, QA automation, and ops runbooks.',
        price: '$15k–$120k project',
        cta: { label: 'Talk to Engineering', href: '/contact' }
      },
      {
        title: 'Computer Vision Pipelines',
        description: 'Defect detection, price tags reading, shelf analytics, and safety monitoring.',
        price: '$20k–$150k project',
        cta: { label: 'Book Assessment', href: '/request-quote' }
      }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      {
        title: 'Kubernetes Platform Engineering',
        description: 'GitOps, IaC, multi-cluster, golden paths, and internal developer platforms.',
        price: '$25k–$200k project',
        cta: { label: 'Platform Audit', href: '/services/cloud-devops' }
      },
      {
        title: 'Serverless Data Platforms',
        description: 'Event-driven pipelines, data contracts, and cost-optimized analytics.',
        price: '$18k–$120k project',
        cta: { label: 'Design Workshop', href: '/services/cloud-devops' }
      },
      {
        title: 'Site Reliability Engineering',
        description: 'SLOs, chaos testing, observability, incident response, and reliability reviews.',
        price: '$8k–$40k engagement',
        cta: { label: 'SRE Readiness', href: '/contact' }
      }
    ]
  },
  {
    category: 'Cybersecurity',
    items: [
      {
        title: 'Zero-Trust Architecture',
        description: 'Identity-first networks, microsegmentation, and continuous verification.',
        price: '$20k–$150k project',
        cta: { label: 'Architecture Review', href: '/services' }
      },
      {
        title: 'SOC 2 & ISO 27001 Readiness',
        description: 'Gap analysis, policy automation, evidence collection, and auditor handoff.',
        price: '$12k–$60k engagement',
        cta: { label: 'Compliance Sprint', href: '/contact' }
      },
      {
        title: 'Threat Detection & Response',
        description: 'SIEM tuning, EDR rollout, playbooks, red/blue teaming, and MDR setup.',
        price: '$10k–$90k + $1k–$5k/mo',
        cta: { label: 'Schedule Briefing', href: '/request-quote' }
      }
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-futuristic">
      <div className="container mx-auto px-4 py-24 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services that Deliver Outcomes
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            We build real, production-grade solutions across AI, micro SaaS, cloud, and cybersecurity. Transparent pricing, clear timelines, measurable ROI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="tel:+13024640950" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">Call +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">Email kleber@ziontechgroup.com</a>
            <a href="/request-quote" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:from-cyan-300 hover:to-blue-400">Request a Quote</a>
          </div>
        </div>

        <div className="mt-16 space-y-16">
          {services.map((group) => (
            <section key={group.category}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{group.category}</h2>
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <div key={item.title} className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4 min-h-[64px]">{item.description}</p>
                    <p className="text-cyan-300 text-lg font-semibold mb-4">{item.price}</p>
                    <a href={item.cta.href} className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20">
                      {item.cta.label}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm">
            For full capabilities, visit our site at <a className="underline decoration-dotted hover:text-cyan-300" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead management',
          href: '/services/ai-sales-copilot',
          features: ['Lead scoring', 'Automated follow-ups', 'Sales analytics']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting',
          href: '/services/ai-compliance-assistant',
          features: ['Regulatory tracking', 'Automated audits', 'Risk assessment']
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content creation and management',
          href: '/services/llm-content-studio',
          features: ['Content generation', 'Brand consistency', 'SEO optimization']
        },
        {
          name: 'Interview Assessment AI',
          description: 'Intelligent candidate evaluation and scoring',
          href: '/services/interview-assessment',
          features: ['Structured interviews', 'Bias detection', 'Performance metrics']
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automation',
          href: '/services/cloud-devops',
          features: ['Infrastructure as Code', 'CI/CD pipelines', 'Monitoring & alerting']
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial management',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost tracking', 'Resource optimization', 'Budget management']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure solutions',
          href: '/services/it-infrastructure',
          features: ['Network design', 'Security implementation', 'Performance optimization']
        }
      ]
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation and response management',
          href: '/services/ai-auto-email-responder',
          features: ['Smart responses', 'CRM integration', 'Sentiment analysis']
        },
        {
          name: 'Email Sequencer',
          description: 'Automated email marketing and follow-up sequences',
          href: '/services/email-sequencer',
          features: ['Sequence automation', 'A/B testing', 'Performance tracking']
        },
        {
          name: 'Micro CRM',
          description: 'Lightweight CRM solution for small businesses',
          href: '/services/micro-crm',
          features: ['Contact management', 'Sales tracking', 'Task automation']
        }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable business insights',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Website Analytics',
          description: 'Privacy-first website analytics and insights',
          href: '/services/website-analytics',
          features: ['Visitor tracking', 'Conversion analysis', 'Privacy compliance']
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered survey and feedback collection',
          href: '/services/mobile-feedback-surveys',
          features: ['Survey automation', 'Sentiment analysis', 'Actionable insights']
        },
        {
          name: 'Affiliate Tracking',
          description: 'Comprehensive affiliate marketing platform',
          href: '/services/affiliate-tracking',
          features: ['Commission tracking', 'Performance analytics', 'Payout management']
        }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance solutions',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'Automated compliance management and reporting',
          href: '/services/ai-compliance-copilot',
          features: ['SOC2 automation', 'ISO compliance', 'Evidence collection']
        },
        {
          name: 'Security Headers & CSP',
          description: 'Advanced web security and content security policies',
          href: '/services/security-headers-csp',
          features: ['HSTS implementation', 'CSP configuration', 'Security monitoring']
        },
        {
          name: 'DSR Privacy Portal',
          description: 'GDPR and CCPA data subject rights management',
          href: '/services/dsr-portal',
          features: ['Data requests', 'Automated workflows', 'Compliance reporting']
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      description: 'Industry-specific and specialized technology solutions',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Podcast Transcription',
          description: 'AI-powered audio transcription and show notes',
          href: '/services/podcast-transcription',
          features: ['Accurate transcription', 'Show notes generation', 'Multi-language support']
        },
        {
          name: 'Returns Management',
          description: 'E-commerce returns and RMA automation',
          href: '/services/returns-management',
          features: ['Automated processing', 'Customer self-service', 'Analytics dashboard']
        },
        {
          name: 'IT Helpdesk',
          description: 'Comprehensive IT support and ticket management',
          href: '/services/it-helpdesk',
          features: ['Ticket tracking', 'SLA management', 'Knowledge base']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance features'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Intuitive interfaces and seamless integrations'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive range of AI, cloud, and technology services designed to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI, cloud, and technology solutions designed to transform your business 
              and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.1) }}
                      className="group"
                    >
                      <Link to={service.href}>
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                            <span className="text-sm font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                        
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-300">Delivering value through innovation and expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative services can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation First',
                description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our specialists bring years of experience and deep technical knowledge.'
              },
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable business value and ROI for our clients.'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Rigorous testing and quality assurance processes ensure reliable solutions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help transform your business and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
            >
              Contact Us
            </Link>
            <Link
              to="/request-quote"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
