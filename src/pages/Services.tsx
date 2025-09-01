import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Brain, Cloud, Shield, Rocket, Zap, Users, Globe, Cpu, Lock, Heart, Star, ArrowRight, CheckCircle, TrendingUp, Code, Database, Network, Smartphone, BarChart3, MessageSquare, FileText, ShoppingCart, Headphones, Mail, Search, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
          description: 'AI-powered content creation and optimization',
          href: '/services/llm-content-studio',
          features: ['Content generation', 'SEO optimization', 'Brand consistency']
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and modern development practices',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless transition to cloud infrastructure',
          href: '/services/cloud-migration',
          features: ['Infrastructure assessment', 'Migration planning', 'Performance optimization']
        },
        {
          name: 'DevOps Automation',
          description: 'Streamlined development and deployment pipelines',
          href: '/services/devops-automation',
          features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & alerting']
        },
        {
          name: 'Container Orchestration',
          description: 'Scalable container management and deployment',
          href: '/services/container-orchestration',
          features: ['Kubernetes setup', 'Service mesh', 'Auto-scaling']
        }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Zero Trust Architecture',
          description: 'Modern security framework for enterprise protection',
          href: '/services/zero-trust',
          features: ['Identity verification', 'Access control', 'Continuous monitoring']
        },
        {
          name: 'Threat Detection',
          description: 'Advanced threat intelligence and response',
          href: '/services/threat-detection',
          features: ['SIEM implementation', 'EDR/XDR solutions', 'Incident response']
        },
        {
          name: 'Compliance & Audit',
          description: 'Regulatory compliance and security assessments',
          href: '/services/compliance-audit',
          features: ['SOC 2 preparation', 'GDPR compliance', 'Security audits']
        }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable business insights',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Data Engineering',
          description: 'Build robust data pipelines and infrastructure',
          href: '/services/data-engineering',
          features: ['ETL/ELT pipelines', 'Data warehousing', 'Data quality']
        },
        {
          name: 'Business Intelligence',
          description: 'Interactive dashboards and reporting solutions',
          href: '/services/business-intelligence',
          features: ['KPI dashboards', 'Real-time analytics', 'Custom reporting']
        },
        {
          name: 'Machine Learning Ops',
          description: 'Operationalize and scale ML models',
          href: '/services/mlops',
          features: ['Model deployment', 'Monitoring', 'A/B testing']
        }
      ]
    }
  ];

  const featuredServices = [
    {
      title: 'AI Development & MLOps',
      description: 'Custom LLMs, RAG, fine-tuning, and MLOps pipelines on AWS/Azure/GCP.',
      priceRange: '$8,000 - $120,000',
      icon: Brain,
      features: ['Custom Model Development', 'RAG Implementation', 'MLOps Pipelines', 'Cloud Integration']
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
      priceRange: '$15,000 - $250,000',
      icon: Cloud,
      features: ['Infrastructure Assessment', 'Migration Planning', 'Containerization', 'Serverless Architecture']
    },
    {
      title: 'Zero-Trust Cybersecurity',
      description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
      priceRange: '$5,000 - $90,000',
      icon: Shield,
      features: ['Zero Trust Architecture', 'SOC Implementation', 'SIEM Setup', 'Threat Detection']
    }
  ];

  const microSaaS = [
    {
      title: 'LeadGen AI Microsite',
      description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
      priceRange: '$99 - $499/mo',
      icon: Users,
      features: ['AI Chat Integration', 'CRM Integration', 'Analytics Dashboard', 'SEO Optimization']
    },
    {
      title: 'Agentic Support Bot',
      description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
      priceRange: '$149 - $999/mo',
      icon: MessageSquare,
      features: ['AI Support Agent', 'Knowledge Base', 'Slack Integration', 'Teams Integration']
    },
    {
      title: 'Automated Reporting Studio',
      description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
      priceRange: '$79 - $399/mo',
      icon: BarChart3,
      features: ['Data Import', 'Dashboard Generation', 'Scheduled Reports', 'PDF Export']
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.title.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <>
      <SEO
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI development, cloud migration, cybersecurity, and data analytics. Transform your business with our expert solutions."
        keywords="AI services, cloud migration, cybersecurity, data analytics, DevOps, Zion Tech Group services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation
              and drive innovation across your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Featured Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and impactful technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-3">{service.priceRange}</div>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Service Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/30 rounded-lg">
                      <h4 className="text-white font-medium mb-1">{service.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, featureIdx) => (
                          <span key={featureIdx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy AI-powered applications for immediate business impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-3">{service.priceRange}</div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm">
                    Deploy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology services can accelerate your digital transformation
              and drive innovation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;