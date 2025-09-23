import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Server, 
  Users, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure Setup',
    description: 'Complete cloud infrastructure setup and migration services for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Monitoring & Alerting'],
    pricing: '$2,999 - $9,999/month',
    category: 'Cloud & Infrastructure',
    benefits: ['99.9% Uptime', 'Cost Optimization', 'Scalability', 'Security'],
    popular: true
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Security Training'],
    pricing: '$1,999 - $7,999/month',
    category: 'Security',
    benefits: ['24/7 Monitoring', 'Threat Prevention', 'Compliance', 'Incident Response'],
    popular: true
  },
  {
    id: 3,
    title: 'IT Support & Helpdesk',
    description: '24/7 IT support and helpdesk services to keep your business running smoothly.',
    icon: Users,
    features: ['24/7 Support', 'Remote Assistance', 'Hardware Support', 'Software Support'],
    pricing: '$99 - $299/user/month',
    category: 'Support',
    benefits: ['Fast Response', 'Expert Support', 'Proactive Monitoring', 'Documentation'],
    popular: false
  },
  {
    id: 4,
    title: 'Database Management',
    description: 'Professional database administration, optimization, and maintenance services.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security'],
    pricing: '$1,499 - $4,999/month',
    category: 'Database',
    benefits: ['High Performance', 'Data Security', 'Automated Backups', 'Monitoring'],
    popular: false
  },
  {
    id: 5,
    title: 'Network Infrastructure',
    description: 'Complete network design, implementation, and maintenance services.',
    icon: Server,
    features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
    pricing: '$2,499 - $8,999/month',
    category: 'Networking',
    benefits: ['Reliable Connectivity', 'Security', 'Performance', 'Scalability'],
    popular: false
  },
  {
    id: 6,
    title: 'IT Service Management',
    description: 'ITSM implementation and management using industry best practices and tools.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Incident Management', 'Problem Management'],
    pricing: '$3,999 - $14,999/month',
    category: 'ITSM',
    benefits: ['Process Standardization', 'Better Visibility', 'Cost Optimization', 'Service Quality'],
    popular: false
  }
];

const categories = [
  'All',
  'Cloud & Infrastructure',
  'Security',
  'Support',
  'Database',
  'Networking',
  'ITSM'
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => 
                           feature.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database management, and 24/7 support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT services to keep your business running smoothly and securely. 
                From cloud infrastructure to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Pricing
                </Link>
=======
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Wrench
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'enterprise-it',
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise infrastructure and management',
      features: ['Infrastructure Management', 'Cloud Migration', 'Security Implementation', 'Performance Optimization'],
      price: '$2,999',
      period: 'month',
      popular: true,
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      description: 'Advanced security solutions for modern threats',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      features: ['Cloud Architecture', 'Migration Services', 'Optimization', 'Multi-cloud Management'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <Cloud className="w-8 h-8" />
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation',
      description: 'Streamlined development and operations',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      price: '$1,799',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'data-management',
      name: 'Data Management',
      description: 'Comprehensive data solutions and analytics',
      features: ['Data Strategy', 'Analytics Platform', 'Governance', 'Business Intelligence'],
      price: '$2,299',
      period: 'month',
      popular: false,
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Robust networking and connectivity solutions',
      features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Scalability'],
      price: '$1,599',
      period: 'month',
      popular: false,
      icon: <Network className="w-8 h-8" />
    }
  ];

  const itCapabilities = [
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Cloud Services',
      description: 'Multi-cloud and hybrid solutions',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Security & Compliance',
      description: 'Advanced cybersecurity and compliance',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development operations',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Data & Analytics',
      description: 'Data-driven insights and solutions',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking infrastructure',
      icon: <Network className="w-6 h-6" />
    }
  ];

  const itAdvantages = [
    {
      title: 'Scalability',
      description: 'Flexible solutions that grow with your business needs',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security to protect your business',
      icon: <Lock className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Efficiency',
      description: 'Optimized processes that improve productivity',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology to stay ahead of competition',
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Transportation'
  ];

  const technologies = [
    'AWS & Azure',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Jenkins',
    'GitLab',
    'Ansible',
    'Prometheus'
  ];

  return (
    <Layout>
      <SEO 
        title="IT Services & Solutions - Zion Tech Group"
        description="Comprehensive IT services and solutions for modern enterprises. From infrastructure to cybersecurity, we deliver reliable technology solutions."
        keywords="IT services, enterprise IT, cybersecurity, cloud solutions, DevOps, data management, network infrastructure"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions that drive business transformation and operational excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
>>>>>>> origin/auto/autonomy-17186719616
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
=======
        {/* IT Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                IT Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions covering every aspect of modern business technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg mr-3">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
>>>>>>> origin/auto/autonomy-17186719616
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Filter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional IT services designed to keep your business running smoothly and securely.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-blue-600">
                        <IconComponent className="w-12 h-12" />
                      </div>
                      {service.popular && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="text-2xl font-bold text-blue-600 mb-4">
                        {service.pricing}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
=======
        {/* IT Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT solutions and services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                      : 'border-gray-700 hover:border-emerald-500'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-emerald-500/20 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">/{service.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
>>>>>>> origin/auto/autonomy-17186719616
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your IT needs and create a customized solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Pricing
                </Link>
=======
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to build a robust, scalable, and secure technology foundation for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IT Transformation
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
>>>>>>> origin/auto/autonomy-17186719616
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </>
  );
}
=======
      </main>
    </Layout>
  );
};

export default ITServicesPage;

>>>>>>> origin/auto/autonomy-17186719616
