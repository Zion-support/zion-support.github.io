import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Building
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated regulatory compliance and risk management solutions',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Trails'],
          href: '/services/ai-compliance-assistant',
          price: 'From $7,500',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation with multi-agent coordination and real-time optimization',
          features: ['Process Orchestration', 'Multi-Agent Systems', 'Dynamic Adaptation', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator',
          price: 'From $2,500',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Data Governance',
          description: 'AI-powered data classification, compliance automation, and intelligent access control',
          features: ['Data Classification', 'Compliance Automation', 'Access Control', 'Data Lineage'],
          href: '/services/ai-data-governance',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content generation and management platform',
          features: ['Content Creation', 'Brand Voice Consistency', 'SEO Optimization', 'Multi-language Support'],
          href: '/services/llm-content-studio',
          price: 'From $2,500',
          rating: 4.7,
          reviewCount: 203
        },
        // New AI Services
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered cybersecurity with threat detection and automated response',
          features: ['Threat Intelligence', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
          href: '/services/ai-cybersecurity-suite',
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Advanced healthcare data analytics and predictive modeling for improved patient outcomes',
          features: ['Patient Risk Scoring', 'Treatment Optimization', 'Population Health Analytics', 'Clinical Decision Support'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 67
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer success with predictive analytics and automated engagement',
          features: ['Churn Prevention', 'Health Scoring', 'Automated Engagement', 'Predictive Analytics'],
          href: '/services/ai-customer-success-platform',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 234
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automated deployment solutions',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-scaling'],
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'FinOps Advisor',
          description: 'Strategic financial operations consulting and implementation',
          features: ['Financial Planning', 'Cost Control', 'Performance Metrics', 'Strategic Guidance'],
          href: '/services/finops-advisor',
          price: 'From $6,000',
          rating: 4.9,
          reviewCount: 98
        },
        {
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing with ultra-low latency and real-time analytics',
          features: ['Edge Nodes', 'Load Balancing', 'Real-time Analytics', 'Global Network'],
          href: '/services/edge-computing-platform',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 76
        },
        // New Cloud Services
        {
          name: 'Multi-Cloud Management',
          description: 'Unified management across AWS, Azure, and Google Cloud with cost optimization',
          features: ['Cross-Platform Monitoring', 'Cost Optimization', 'Security Compliance', 'Unified Dashboard'],
          href: '/services/multi-cloud-management',
          price: 'From $6,500',
          rating: 4.8,
          reviewCount: 112
        },
        {
          name: 'Kubernetes Enterprise Platform',
          description: 'Enterprise-grade Kubernetes management with advanced security and monitoring',
          features: ['Multi-Cluster Management', 'Security Policies', 'Auto-scaling', 'Disaster Recovery'],
          href: '/services/kubernetes-enterprise-platform',
          price: 'From $9,000',
          rating: 4.9,
          reviewCount: 78
        }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      description: 'Digital transformation and innovative technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Digital Twin',
          description: 'Real-time digital simulation and monitoring solutions',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
          href: '/services/digital-twin',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure and network management',
          features: ['Network Design', 'Server Management', 'Security Implementation', '24/7 Monitoring'],
          href: '/services/it-infrastructure',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 145
        },
        {
          name: 'Data Analytics',
          description: 'Comprehensive data analysis and business intelligence solutions',
          features: ['Data Mining', 'Statistical Analysis', 'Business Intelligence', 'Custom Dashboards'],
          href: '/services/data-analytics',
          price: 'From $6,500',
          rating: 4.7,
          reviewCount: 189
        },
        // New Digital Solutions
        {
          name: 'API Management Platform',
          description: 'Comprehensive API lifecycle management with security and analytics',
          features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Analytics Dashboard'],
          href: '/services/api-management-platform',
          price: 'From $5,500',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'Low-Code Development Platform',
          description: 'Rapid application development with visual programming and pre-built components',
          features: ['Visual Builder', 'Component Library', 'Workflow Automation', 'Multi-platform Deployment'],
          href: '/services/low-code-development-platform',
          price: 'From $7,500',
          rating: 4.7,
          reviewCount: 156
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security protocols and threat protection systems',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered cybersecurity and compliance management',
          features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Audits'],
          href: '/services/ai-compliance-copilot',
          price: 'From $9,500',
          rating: 4.9,
          reviewCount: 267
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Advanced zero-trust security implementation and management',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 134
        },
        // New Cybersecurity Services
        {
          name: 'SOC as a Service',
          description: '24/7 Security Operations Center with threat monitoring and incident response',
          features: ['Threat Monitoring', 'Incident Response', 'Vulnerability Management', 'Security Reporting'],
          href: '/services/soc-as-a-service',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'Penetration Testing Platform',
          description: 'Automated security testing with continuous vulnerability assessment',
          features: ['Automated Scanning', 'Manual Testing', 'Report Generation', 'Remediation Guidance'],
          href: '/services/penetration-testing-platform',
          price: 'From $8,500',
          rating: 4.8,
          reviewCount: 112
        }
      ]
    },
    {
      name: 'Business Tools',
      icon: ShoppingCart,
      description: 'Productized SaaS solutions for business automation',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Micro SaaS Solutions',
          description: 'Custom SaaS applications for specific business niches',
          features: ['Custom Development', 'User Management', 'Analytics Dashboard', 'API Integration'],
          href: '/services/micro-saas-solutions',
          price: 'From $10,000',
          rating: 4.8,
          reviewCount: 112
        },
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation and CRM integration',
          features: ['Smart Responses', 'CRM Integration', 'Analytics Tracking', 'Custom Templates'],
          href: '/services/ai-auto-email-responder',
          price: 'From $2,800',
          rating: 4.7,
          reviewCount: 298
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered customer feedback and survey management',
          features: ['Survey Creation', 'Response Analysis', 'Sentiment Analysis', 'Actionable Insights'],
          href: '/services/mobile-feedback-surveys',
          price: 'From $1,500',
          rating: 4.6,
          reviewCount: 445
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer success with predictive analytics and automated engagement',
          features: ['Churn Prevention', 'Health Scoring', 'Automated Engagement', 'Predictive Analytics'],
          href: '/services/ai-customer-success-platform',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 234
        },
        // New Business Tools
        {
          name: 'Contract Management System',
          description: 'AI-powered contract lifecycle management with automated workflows',
          features: ['Contract Templates', 'Approval Workflows', 'Compliance Monitoring', 'Risk Assessment'],
          href: '/services/contract-management-system',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'Invoice Automation Platform',
          description: 'Intelligent invoice processing with OCR and automated approval workflows',
          features: ['OCR Processing', 'Automated Matching', 'Approval Workflows', 'Payment Integration'],
          href: '/services/invoice-automation-platform',
          price: 'From $3,200',
          rating: 4.7,
          reviewCount: 234
        },
        {
          name: 'HR Management Suite',
          description: 'Comprehensive HR management with AI-powered insights and automation',
          features: ['Employee Onboarding', 'Performance Management', 'Payroll Integration', 'Analytics Dashboard'],
          href: '/services/hr-management-suite',
          price: 'From $5,500',
          rating: 4.8,
          reviewCount: 189
        }
      ]
    },
    // New Service Category
    {
      name: 'Industry Solutions',
      icon: Building,
      description: 'Specialized solutions for specific industries and verticals',
      color: 'from-amber-600 to-orange-600',
      services: [
        {
          name: 'Healthcare Technology Platform',
          description: 'Comprehensive healthcare solutions with HIPAA compliance and patient management',
          features: ['Patient Portal', 'Electronic Health Records', 'Telemedicine', 'HIPAA Compliance'],
          href: '/services/healthcare-tech',
          price: 'From $25,000',
          rating: 4.9,
          reviewCount: 67
        },
        {
          name: 'Manufacturing Intelligence',
          description: 'IoT-powered manufacturing analytics and predictive maintenance',
          features: ['Equipment Monitoring', 'Predictive Maintenance', 'Quality Control', 'Production Analytics'],
          href: '/services/manufacturing-intelligence',
          price: 'From $18,000',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'Retail Analytics Platform',
          description: 'Advanced retail analytics with customer behavior insights and inventory optimization',
          features: ['Customer Analytics', 'Inventory Management', 'Demand Forecasting', 'Omnichannel Insights'],
          href: '/services/retail-analytics-platform',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'Financial Services Platform',
          description: 'Secure financial services platform with compliance and risk management',
          features: ['Risk Assessment', 'Compliance Monitoring', 'Fraud Detection', 'Regulatory Reporting'],
          href: '/services/financial-services-platform',
          price: 'From $35,000',
          rating: 4.9,
          reviewCount: 56
        }
      ]
    }
  ];

  const emergingTechnologies = [
    {
      name: 'Quantum Computing',
      icon: Cpu,
      description: 'Next-generation quantum computing solutions for complex problem-solving',
      href: '/services/quantum-computing',
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Blockchain Solutions',
      icon: Lock,
      description: 'Enterprise blockchain implementation and DeFi solutions',
      href: '/services/blockchain-enterprise-solutions',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'IoT & Edge Computing',
      icon: Network,
      description: 'Internet of Things and edge computing infrastructure',
      href: '/services/iot-edge',
      color: 'from-green-600 to-teal-600'
    },
    {
      name: 'Healthcare Technology',
      icon: Heart,
      description: 'AI-powered healthcare solutions and medical technology',
      href: '/services/healthcare-tech',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Sustainability Solutions',
      icon: Globe,
      description: 'Green technology and sustainability-focused solutions',
      href: '/services/sustainability',
      color: 'from-emerald-600 to-green-600'
    },
    {
      name: 'Space Technology',
      icon: Rocket,
      description: 'Advanced space technology and satellite solutions',
      href: '/services/space-tech',
      color: 'from-slate-600 to-gray-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with advanced degrees and industry certifications'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick turnaround times without compromising quality or security'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified with SOC 2 Type II compliance'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support available across 25+ countries'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Ongoing R&D investment in emerging technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI solutions, cloud services, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, Zion Tech Group services"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive AI-powered solutions and technology services designed to transform your business and drive innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                            <p className="text-slate-300 mb-4">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="flex items-center justify-end mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                              ))}
                              <span className="text-sm text-slate-400 ml-2">({service.reviewCount})</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
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

      {/* Emerging Technologies */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Emerging Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={tech.href} className="block h-full">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our AI-powered solutions can revolutionize your operations and drive growth
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

