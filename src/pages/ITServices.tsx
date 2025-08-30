import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Building, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Award, 
  Globe, 
  Settings, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Eye, 
  Heart, 
  Palette, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Mail, 
  Calendar,
  Clock,
  DollarSign,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target as TargetIcon,
  UserCheck,
  MessageCircle,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Server,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  HardDrive,
  Wifi,
  Key,
  FileCode,
  GitBranch,
  Workflow,
  Layers,
  Box,
  Package,
  Truck,
  Factory,
  Home,
  Office,
  Store,
  School
} from 'lucide-react';

export default function ITServices() {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic technology consulting and digital transformation services',
      icon: Building,
      color: 'from-blue-500 to-cyan-600',
      features: ['Technology Assessment', 'Digital Strategy', 'Architecture Design', 'Implementation Planning'],
      benefits: ['Optimized technology stack', 'Reduced costs', 'Improved efficiency'],
      useCases: ['Digital Transformation', 'Technology Modernization', 'Strategic Planning', 'Process Optimization'],
      pricing: 'From $150/hour',
      rating: 4.9,
      reviewCount: 234,
      featured: true
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure design, implementation, and management',
      icon: Server,
      color: 'from-indigo-500 to-purple-600',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      benefits: ['Reliable infrastructure', 'Scalable solutions', 'Reduced maintenance'],
      useCases: ['Data Center Design', 'Network Architecture', 'Cloud Migration', 'Disaster Recovery'],
      pricing: 'From $8,000/project',
      rating: 4.8,
      reviewCount: 167,
      featured: true
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure and platform services',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'DevOps Implementation', 'Cost Optimization'],
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance'],
      useCases: ['AWS Migration', 'Azure Implementation', 'Google Cloud Setup', 'Hybrid Cloud'],
      pricing: 'From $5,000/project',
      rating: 4.9,
      reviewCount: 189,
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced security solutions and compliance management',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      benefits: ['Enhanced security', 'Regulatory compliance', 'Risk reduction'],
      useCases: ['Security Audits', 'Compliance Certification', 'Threat Prevention', 'Security Training'],
      pricing: 'From $6,000/project',
      rating: 4.9,
      reviewCount: 145,
      featured: false
    },
    {
      id: 'data-management',
      name: 'Data Management',
      description: 'Comprehensive data strategy, governance, and analytics solutions',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      features: ['Data Strategy', 'Governance Framework', 'Analytics Platform', 'Data Quality'],
      benefits: ['Better insights', 'Improved decision-making', 'Data compliance'],
      useCases: ['Data Strategy', 'Analytics Implementation', 'Governance Setup', 'Quality Improvement'],
      pricing: 'From $4,500/project',
      rating: 4.7,
      reviewCount: 123,
      featured: false
    },
    {
      id: 'network-services',
      name: 'Network Services',
      description: 'Advanced networking solutions and optimization',
      icon: Network,
      color: 'from-purple-500 to-pink-600',
      features: ['Network Design', 'Performance Optimization', 'Security Implementation', 'Monitoring'],
      benefits: ['Improved performance', 'Enhanced security', 'Better reliability'],
      useCases: ['Network Design', 'Performance Tuning', 'Security Hardening', 'Monitoring Setup'],
      pricing: 'From $3,500/project',
      rating: 4.8,
      reviewCount: 98,
      featured: false
    },
    {
      id: 'managed-services',
      name: 'Managed Services',
      description: '24/7 IT infrastructure monitoring and management',
      icon: Monitor,
      color: 'from-teal-500 to-green-600',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Performance Reports'],
      benefits: ['Reduced downtime', 'Lower costs', 'Peace of mind'],
      useCases: ['Infrastructure Monitoring', 'Help Desk Support', 'Maintenance Management', 'Performance Optimization'],
      pricing: 'From $2,500/month',
      rating: 4.8,
      reviewCount: 267,
      featured: false
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery',
      description: 'Comprehensive business continuity and disaster recovery solutions',
      icon: Shield,
      color: 'from-yellow-500 to-orange-600',
      features: ['BCP Development', 'DR Planning', 'Backup Solutions', 'Testing & Validation'],
      benefits: ['Business continuity', 'Risk mitigation', 'Compliance ready'],
      useCases: ['BCP Development', 'DR Strategy', 'Backup Implementation', 'Recovery Testing'],
      pricing: 'From $7,500/project',
      rating: 4.9,
      reviewCount: 89,
      featured: false
    }
  ];

  const itCapabilities = [
    {
      category: 'Infrastructure Design',
      icon: Server,
      color: 'from-blue-500 to-cyan-600',
      capabilities: ['Network Architecture', 'Data Center Design', 'Cloud Infrastructure', 'Hybrid Solutions'],
      description: 'Comprehensive infrastructure design for modern enterprise needs'
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      capabilities: ['Security Audits', 'Compliance Management', 'Threat Prevention', 'Incident Response'],
      description: 'Advanced security solutions and regulatory compliance management'
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-600',
      capabilities: ['Cloud Migration', 'DevOps Implementation', 'CI/CD Pipelines', 'Infrastructure as Code'],
      description: 'Modern cloud solutions and development operations optimization'
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-emerald-600',
      capabilities: ['Data Strategy', 'Analytics Platform', 'Governance Framework', 'Business Intelligence'],
      description: 'Comprehensive data management and analytics solutions'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Users,
      color: 'from-pink-500 to-rose-600',
      applications: ['HIPAA Compliance', 'Patient Data Security', 'Medical Device Integration', 'Telemedicine'],
      benefits: ['Regulatory compliance', 'Enhanced security', 'Improved patient care']
    },
    {
      name: 'Finance',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      applications: ['SOX Compliance', 'Fraud Detection', 'Risk Management', 'Trading Systems'],
      benefits: ['Regulatory compliance', 'Enhanced security', 'Risk reduction']
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      color: 'from-blue-500 to-cyan-600',
      applications: ['IoT Integration', 'Predictive Maintenance', 'Supply Chain Management', 'Quality Control'],
      benefits: ['Operational efficiency', 'Cost reduction', 'Quality improvement']
    },
    {
      name: 'Retail',
      icon: Store,
      color: 'from-purple-500 to-pink-600',
      applications: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'POS Systems'],
      benefits: ['Improved customer experience', 'Operational efficiency', 'Increased sales']
    },
    {
      name: 'Education',
      icon: School,
      color: 'from-indigo-500 to-purple-600',
      applications: ['Learning Management Systems', 'Student Data Security', 'Digital Classrooms', 'Administrative Systems'],
      benefits: ['Enhanced learning', 'Improved administration', 'Better security']
    },
    {
      name: 'Government',
      icon: Building,
      color: 'from-slate-500 to-gray-600',
      applications: ['Citizen Services', 'Data Security', 'Compliance Management', 'Infrastructure Modernization'],
      benefits: ['Improved services', 'Enhanced security', 'Cost efficiency']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '1,200+', icon: CheckCircle, color: 'from-green-500 to-emerald-600' },
    { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'from-yellow-500 to-orange-600' },
    { label: 'Years of Experience', value: '15+', icon: Award, color: 'from-purple-500 to-pink-600' },
    { label: 'Certified Engineers', value: '50+', icon: Users, color: 'from-blue-500 to-cyan-600' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building },
    { id: 'capabilities', label: 'Capabilities', icon: Zap },
    { id: 'industries', label: 'Industries', icon: Globe },
    { id: 'benefits', label: 'Benefits', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT consulting, infrastructure, and managed services. Transform your technology operations with our expert IT solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your technology operations with our comprehensive IT consulting, infrastructure, 
              and managed services. From strategy to implementation, we deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  IT Service Portfolio
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Comprehensive IT solutions designed to optimize your technology operations and drive business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300 hover:border-cyan-400/50 ${
                      service.featured ? 'border-cyan-400/30' : 'border-slate-700/50'
                    }`}
                  >
                    {service.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs rounded-full mb-4">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Service
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Capabilities Tab */}
          {activeTab === 'capabilities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  IT Capabilities
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Our comprehensive IT capabilities cover the full spectrum of technology services and solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {itCapabilities.map((capability, index) => (
                  <motion.div
                    key={capability.category}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4`}>
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{capability.category}</h3>
                    <p className="text-gray-300 mb-6">{capability.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {capability.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Industries Tab */}
          {activeTab === 'industries' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Industry Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  IT solutions tailored for specific industries and regulatory requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                      <ul className="space-y-1">
                        {industry.applications.map((app, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">{app}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Why Choose Our IT Services?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover the advantages of partnering with Zion Tech Group for your IT needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: 'Expert IT Team',
                    description: 'Certified IT professionals with advanced degrees and industry certifications',
                    color: 'from-blue-500 to-cyan-600'
                  },
                  {
                    icon: Zap,
                    title: 'Rapid Implementation',
                    description: 'Quick deployment of IT solutions without compromising quality or security',
                    color: 'from-cyan-500 to-blue-600'
                  },
                  {
                    icon: Shield,
                    title: 'Enterprise Security',
                    description: 'ISO 27001 certified with SOC 2 Type II compliance and advanced security protocols',
                    color: 'from-indigo-500 to-purple-600'
                  },
                  {
                    icon: Target,
                    title: 'Proven Results',
                    description: 'Track record of delivering measurable business outcomes and ROI for clients',
                    color: 'from-purple-500 to-pink-600'
                  },
                  {
                    icon: Globe,
                    title: 'Global Support',
                    description: '24/7 support available across 25+ countries with local expertise',
                    color: 'from-green-500 to-emerald-600'
                  },
                  {
                    icon: Award,
                    title: 'Continuous Innovation',
                    description: 'Ongoing investment in emerging technologies and best practices',
                    color: 'from-yellow-500 to-orange-600'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our IT services can optimize your technology infrastructure and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

