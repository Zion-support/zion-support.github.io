import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Rocket, Zap, Users, Globe, Cpu, Lock, Heart, Star, ArrowRight, CheckCircle, TrendingUp, Code, Database, Network, Smartphone, BarChart3, MessageSquare, FileText, ShoppingCart, Headphones, Mail, Search, Clock, Camera, CreditCard, ShieldCheck, Globe2, Monitor, Server, BarChart, PieChart, LineChart, Activity, Target, Lightbulb, Workflow, Building, Home, Car, GraduationCap, ShoppingBag, Briefcase, Palette, Music, Video, BookOpen, Calendar, Bell, Eye, Download, Upload, Share2, Link as LinkIcon, QrCode, Tablet, Laptop, Desktop, Watch, Speaker, Microphone, Image, File, Folder, Archive, Edit, Plus, Check, AlertCircle, Info, HelpCircle, ExternalLink, ArrowUpRight, ArrowDownRight, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Menu, Grid, List, Filter, SortAsc, SortDesc, RefreshCw, RotateCcw, ZoomIn, ZoomOut, Maximize, Minimize, Fullscreen, FullscreenExit, Volume, Volume2, VolumeX, Mute, Unmute, Play, Pause, Stop, SkipBack, SkipForward, Rewind, FastForward, Shuffle, Repeat, Repeat1, Phone, MapPin } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  priceRange: string;
  learnMoreUrl?: string;
  ctaUrl?: string;
};

const featuredServices: Service[] = [
  {
    title: 'AI Development & MLOps',
    description: 'Custom LLMs, RAG, fine-tuning, and MLOps pipelines on AWS/Azure/GCP.',
    priceRange: '$8,000 - $120,000',
    learnMoreUrl: 'https://ziontechgroup.com/ai-services',
    ctaUrl: '/ai-services'
  },
  {
    title: 'Cloud Migration & Modernization',
    description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
    priceRange: '$15,000 - $250,000',
    learnMoreUrl: 'https://ziontechgroup.com/it-services',
    ctaUrl: '/it-services'
  },
  {
    title: 'Zero-Trust Cybersecurity',
    description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
    priceRange: '$5,000 - $90,000',
    learnMoreUrl: 'https://ziontechgroup.com/it-services',
    ctaUrl: '/it-services'
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'ELT/ETL, data lakes/warehouses, BI dashboards, KPI design.',
    priceRange: '$7,500 - $140,000',
    learnMoreUrl: 'https://ziontechgroup.com/it-services',
    ctaUrl: '/it-services'
  },
  {
    title: 'IoT & Edge Platforms',
    description: 'Secure device onboarding, telemetry pipelines, OTA, and twin modeling.',
    priceRange: '$12,000 - $180,000',
    learnMoreUrl: 'https://ziontechgroup.com/it-services',
    ctaUrl: '/it-services'
  },
  {
    title: 'Quantum Readiness Advisory',
    description: 'PQ crypto readiness, QC PoCs, and quantum-inspired optimizations.',
    priceRange: '$6,000 - $60,000',
    learnMoreUrl: 'https://ziontechgroup.com/it-services',
    ctaUrl: '/it-services'
  }
];

const microSaaS: Service[] = [
  {
    title: 'AI-Powered Business Intelligence',
    description: 'Advanced analytics platform with ML insights and predictive analytics.',
    priceRange: '$1,499 - $4,999/month',
    learnMoreUrl: 'https://ziontechgroup.com/micro-saas',
    ctaUrl: '/micro-saas'
  },
  {
    title: 'Intelligent Document Processing',
    description: 'AI-powered document processing with OCR and NLP capabilities.',
    priceRange: '$799 - $2,999/month',
    learnMoreUrl: 'https://ziontechgroup.com/micro-saas',
    ctaUrl: '/micro-saas'
  },
  {
    title: 'Smart HR Management Suite',
    description: 'Comprehensive HR platform with AI recruitment and analytics.',
    priceRange: '$899 - $2,499/month',
    learnMoreUrl: 'https://ziontechgroup.com/micro-saas',
    ctaUrl: '/micro-saas'
  },
  {
    title: 'AI-Powered Marketing Automation',
    description: 'Intelligent marketing with personalization and predictive scoring.',
    priceRange: '$1,299 - $3,999/month',
    learnMoreUrl: 'https://ziontechgroup.com/micro-saas',
    ctaUrl: '/micro-saas'
  },
  {
    title: 'Healthcare Practice Management',
    description: 'Complete healthcare management with EHR and compliance.',
    priceRange: '$1,499 - $4,999/month',
    learnMoreUrl: 'https://ziontechgroup.com/micro-saas',
    ctaUrl: '/micro-saas'
  },
  {
    title: 'Advanced Cybersecurity Suite',
    description: 'Enterprise security with threat detection and compliance.',
    priceRange: '$2,999 - $8,999/month',
    learnMoreUrl: 'https://ziontechgroup.com/it-services',
    ctaUrl: '/it-services'
  }
];

const Services: React.FC = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Advanced analytics with ML insights and predictive analytics',
          href: '/ai-services',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization']
        },
        {
          name: 'Intelligent Document Processing',
          description: 'AI-powered document processing with OCR and NLP',
          href: '/ai-services',
          features: ['OCR Technology', 'Natural Language Processing', 'Automated Classification', 'Data Extraction']
        },
        {
          name: 'AI Marketing Automation',
          description: 'Intelligent marketing with personalization and optimization',
          href: '/ai-services',
          features: ['Personalization Engine', 'Predictive Customer Scoring', 'A/B Testing', 'ROI Analytics']
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Healthcare analytics with clinical decision support',
          href: '/ai-services',
          features: ['Patient Analytics', 'Clinical Decision Support', 'Predictive Diagnostics', 'HIPAA Compliance']
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
          name: 'Cloud Migration & Modernization',
          description: 'End-to-end cloud migration with modern architecture',
          href: '/it-services',
          features: ['Cloud Strategy', 'Migration Planning', 'Architecture Design', 'Cost Optimization']
        },
        {
          name: 'DevOps Automation Platform',
          description: 'Comprehensive DevOps with CI/CD and automation',
          href: '/it-services',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Performance Monitoring']
        },
        {
          name: 'Container Orchestration',
          description: 'Enterprise container management with Kubernetes',
          href: '/it-services',
          features: ['Kubernetes Management', 'Microservices Architecture', 'Auto-scaling', 'Load Balancing']
        }
      ]
    },
    {
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation tools',
      icon: Workflow,
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          name: 'Intelligent Process Automation',
          description: 'AI-driven process automation and optimization',
          href: '/ai-services',
          features: ['Process Mining', 'Workflow Automation', 'RPA Integration', 'Performance Analytics']
        },
        {
          name: 'Smart HR Management',
          description: 'Comprehensive HR platform with AI capabilities',
          href: '/micro-saas',
          features: ['AI Recruitment', 'Performance Analytics', 'Employee Engagement', 'Learning Management']
        },
        {
          name: 'Financial Management Platform',
          description: 'AI-powered financial management and compliance',
          href: '/micro-saas',
          features: ['Automated Bookkeeping', 'Financial Forecasting', 'Expense Management', 'Tax Compliance']
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
          name: 'Data Engineering & Analytics',
          description: 'Complete data solution with engineering and BI',
          href: '/it-services',
          features: ['Data Engineering', 'ETL/ELT Pipelines', 'Data Warehousing', 'Business Intelligence']
        },
        {
          name: 'Big Data Processing',
          description: 'Enterprise big data platform for large-scale analytics',
          href: '/it-services',
          features: ['Big Data Processing', 'Real-time Analytics', 'Machine Learning', 'Data Visualization']
        },
        {
          name: 'Data Governance & Privacy',
          description: 'Comprehensive data governance and compliance',
          href: '/it-services',
          features: ['Data Quality Management', 'Privacy Controls', 'Regulatory Compliance', 'Risk Assessment']
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
          name: 'Advanced Cybersecurity Suite',
          description: 'Comprehensive security with threat detection',
          href: '/it-services',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', '24/7 Monitoring']
        },
        {
          name: 'Zero Trust Security',
          description: 'Modern zero trust implementation with verification',
          href: '/it-services',
          features: ['Identity Verification', 'Multi-factor Authentication', 'Network Segmentation', 'Continuous Monitoring']
        },
        {
          name: 'SOC 2 & ISO Compliance',
          description: 'Automated compliance management and reporting',
          href: '/it-services',
          features: ['Compliance Monitoring', 'Automated Auditing', 'Policy Management', 'Real-time Alerts']
        }
      ]
    },
    {
      title: 'Industry-Specific Solutions',
      description: 'Tailored solutions for specific industries and business verticals',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Healthcare Practice Management',
          description: 'Complete healthcare management platform',
          href: '/micro-saas',
          features: ['Patient Scheduling', 'Electronic Health Records', 'Billing & Insurance', 'HIPAA Compliance']
        },
        {
          name: 'Real Estate Management',
          description: 'AI-powered real estate platform',
          href: '/micro-saas',
          features: ['Property Management', 'Tenant Screening', 'Market Analysis', 'Financial Reporting']
        },
        {
          name: 'Educational Technology',
          description: 'Comprehensive edtech solution',
          href: '/micro-saas',
          features: ['Learning Management', 'Student Analytics', 'Virtual Classrooms', 'Assessment Tools']
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

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  // Filter services based on search and category
  const filteredServices = serviceCategories.flatMap(category => 
    category.services.filter(service => 
      (activeCategory === 'all' || category.title.toLowerCase().includes(activeCategory.toLowerCase())) &&
      (searchTerm === '' || service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       service.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const sortedServices = filteredServices.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services & Solutions
          </h1>
          <p className="text-base md:text-xl text-slate-300">
            Comprehensive technology solutions with transparent pricing and modern stacks.
          </p>
        </header>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 rounded-2xl my-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-white mb-2" />
                <p className="text-white font-semibold">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-white mb-2" />
                <p className="text-white font-semibold">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-6 h-6 text-white mb-2" />
                <p className="text-white font-semibold">{contactInfo.website}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-white mb-2" />
                <p className="text-white font-semibold">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{s.priceRange}</span>
                  <Link
                    to={s.ctaUrl || '/contact'}
                    className="text-sm text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Micro SaaS Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{s.priceRange}</span>
                  <Link
                    to={s.ctaUrl || '/contact'}
                    className="text-sm text-purple-300 hover:text-purple-200 underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Categories */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Service Categories</h2>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                All
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(category.title)}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    activeCategory === category.title
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-slate-400 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link
                        to={service.href}
                        className="block p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="text-xs bg-slate-600/50 text-slate-300 px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl mt-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Let our team of experts help you implement cutting-edge solutions that drive innovation,
                efficiency, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;