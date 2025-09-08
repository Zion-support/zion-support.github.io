import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building, Cloud, Shield, Brain, Globe, Users, Zap, Rocket,
  ArrowRight, ExternalLink, Download, Play, FileText, Search,
  CheckCircle, AlertCircle, Info, Clock, Star, Eye, Copy,
  Terminal, Key, Lock, Server, Wifi, Activity, BookOpen,
  MessageCircle, Mail, Github, Bookmark, Share2, Target,
  TrendingUp, Cpu, Network, BarChart3, Database, Layers,
  Workflow, Palette, TestTube, Bug, Lightbulb, Heart
} from 'lucide-react';

export default function ITConsulting() {
  const [selectedService, setSelectedService] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const consultingServices = [
    {
      id: 1,
      name: 'Digital Transformation',
      category: 'strategy',
      description: 'Comprehensive digital transformation strategies to modernize your business operations and technology infrastructure',
      features: ['Technology assessment', 'Process optimization', 'Change management', 'ROI analysis'],
      duration: '3-6 months',
      investment: '$50K - $200K',
      featured: true
    },
    {
      id: 2,
      name: 'Cloud Migration',
      category: 'infrastructure',
      description: 'Seamless migration to cloud platforms with minimal disruption and maximum cost optimization',
      features: ['Cloud strategy', 'Migration planning', 'Data migration', 'Performance optimization'],
      duration: '2-4 months',
      investment: '$30K - $150K',
      featured: true
    },
    {
      id: 3,
      name: 'Cybersecurity Assessment',
      category: 'security',
      description: 'Comprehensive security audits and vulnerability assessments to protect your digital assets',
      features: ['Security audit', 'Vulnerability assessment', 'Compliance review', 'Security roadmap'],
      duration: '1-2 months',
      investment: '$20K - $80K',
      featured: false
    },
    {
      id: 4,
      name: 'IT Strategy & Planning',
      category: 'strategy',
      description: 'Strategic IT planning aligned with business objectives and future growth requirements',
      features: ['Technology roadmap', 'Budget planning', 'Vendor selection', 'Risk assessment'],
      duration: '2-3 months',
      investment: '$25K - $100K',
      featured: false
    },
    {
      id: 5,
      name: 'Data Analytics & BI',
      category: 'analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions',
      features: ['Data strategy', 'Analytics platform', 'Dashboard design', 'Training & support'],
      duration: '2-5 months',
      investment: '$40K - $180K',
      featured: false
    },
    {
      id: 6,
      name: 'DevOps & Automation',
      category: 'infrastructure',
      description: 'Implement DevOps practices and automation to accelerate development and improve operational efficiency',
      features: ['CI/CD pipeline', 'Infrastructure automation', 'Monitoring setup', 'Team training'],
      duration: '2-4 months',
      investment: '$35K - $120K',
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 15 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Financial Services', count: 4 },
    { id: 'manufacturing', name: 'Manufacturing', count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'education', name: 'Education', count: 2 },
    { id: 'government', name: 'Government', count: 1 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare Provider Digital Transformation',
      industry: 'healthcare',
      challenge: 'Legacy system modernization and patient data integration',
      solution: 'Implemented cloud-based EHR system with AI-powered analytics',
      results: ['40% reduction in administrative costs', '60% faster patient data access', '99.9% system uptime'],
      featured: true
    },
    {
      id: 2,
      title: 'Financial Services Cloud Migration',
      industry: 'finance',
      challenge: 'On-premises infrastructure migration to multi-cloud environment',
      solution: 'Hybrid cloud strategy with automated disaster recovery',
      results: ['50% reduction in infrastructure costs', '80% faster deployment times', 'Enhanced security compliance'],
      featured: true
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      industry: 'manufacturing',
      challenge: 'Legacy equipment connectivity and real-time monitoring',
      solution: 'IoT platform with predictive maintenance capabilities',
      results: ['30% reduction in downtime', '25% improvement in efficiency', 'Real-time production insights'],
      featured: false
    }
  ];

  const consultingProcess = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current technology landscape, business processes, and objectives',
      duration: '1-2 weeks',
      deliverables: ['Technology audit report', 'Gap analysis', 'Recommendations']
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Create detailed roadmap and implementation plan aligned with business goals',
      duration: '2-3 weeks',
      deliverables: ['Strategic roadmap', 'Implementation plan', 'Resource requirements']
    },
    {
      step: 3,
      title: 'Implementation Support',
      description: 'Hands-on support during execution with regular progress reviews and adjustments',
      duration: 'Varies by project',
      deliverables: ['Project management', 'Technical guidance', 'Progress reports']
    },
    {
      step: 4,
      title: 'Optimization & Training',
      description: 'Performance optimization, user training, and ongoing support for sustained success',
      duration: '1-2 weeks',
      deliverables: ['Performance optimization', 'User training', 'Support documentation']
    }
  ];

  const teamExpertise = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Senior Technology Consultant',
      expertise: ['Digital Transformation', 'Cloud Architecture', 'AI Strategy'],
      experience: '15+ years',
      certifications: ['AWS Solutions Architect', 'TOGAF 9.2', 'PMP']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cybersecurity Specialist',
      expertise: ['Security Architecture', 'Compliance', 'Risk Management'],
      experience: '12+ years',
      certifications: ['CISSP', 'CISM', 'CEH']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Data Analytics Consultant',
      expertise: ['Big Data', 'Machine Learning', 'Business Intelligence'],
      experience: '10+ years',
      certifications: ['CDMP', 'AWS Data Analytics', 'Google Cloud Data Engineer']
    },
    {
      name: 'David Kim',
      role: 'Infrastructure Architect',
      expertise: ['Cloud Migration', 'DevOps', 'System Architecture'],
      experience: '14+ years',
      certifications: ['AWS DevOps Engineer', 'Azure Solutions Architect', 'Kubernetes Administrator']
    }
  ];

  const filteredServices = consultingServices.filter(service => {
    const matchesService = selectedService === 'all' || service.category === selectedService;
    const matchesIndustry = selectedIndustry === 'all';
    
    return matchesService && matchesIndustry;
  });

  const featuredServices = filteredServices.filter(service => service.featured);
  const regularServices = filteredServices.filter(service => !service.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      strategy: 'bg-blue-100 text-blue-800',
      infrastructure: 'bg-green-100 text-green-800',
      security: 'bg-red-100 text-red-800',
      analytics: 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              IT Consulting Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with strategic IT consulting services. From digital transformation to cloud migration, 
              we help organizations leverage technology for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Building className="w-5 h-5 mr-2" />
                View Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Service Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Category</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all" className="bg-slate-800 text-white">All Services</option>
                  <option value="strategy" className="bg-slate-800 text-white">Strategy & Planning</option>
                  <option value="infrastructure" className="bg-slate-800 text-white">Infrastructure & Cloud</option>
                  <option value="security" className="bg-slate-800 text-white">Cybersecurity</option>
                  <option value="analytics" className="bg-slate-800 text-white">Data & Analytics</option>
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Consulting Services</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(service.category)}`}>
                        {service.category}
                      </span>
                      <span className="text-gray-400 text-sm">{service.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Investment: {service.investment}</span>
                      <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Services */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Consulting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(service.category)}`}>
                      {service.category}
                    </span>
                    <span className="text-gray-400 text-sm">{service.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Investment: {service.investment}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Consulting Process</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable business outcomes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingProcess.map((step) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-400">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Duration:</span> {step.duration}
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Deliverables:</span>
                    </div>
                    <ul className="text-sm text-gray-400 ml-4 space-y-1">
                      {step.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Real-world examples of how our consulting services have transformed businesses across industries
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => study.featured).map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-400 text-sm">Case Study</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-1">Challenge</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-1">Solution</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-1">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Read Full Case Study
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Expert Consultants</h2>
            <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Our team of certified consultants brings deep expertise and proven track records across all technology domains
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamExpertise.map((expert) => (
                <motion.div
                  key={expert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{expert.name}</h3>
                    <p className="text-blue-400 text-sm mb-2">{expert.role}</p>
                    <p className="text-gray-400 text-xs">{expert.experience} experience</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Expertise</h4>
                      <div className="space-y-1">
                        {expert.expertise.map((skill, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Certifications</h4>
                      <div className="space-y-1">
                        {expert.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400" />
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our expert consultants help you navigate the digital landscape and achieve your technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                <Building className="w-5 h-5 mr-2" />
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
