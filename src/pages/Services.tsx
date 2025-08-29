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
  Building,
  Camera,
  Mic,
  Palette,
  Target,
  Truck,
  CreditCard,
  FileSearch,
  BarChart3,
  Workflow,
  FileText,
  ImageIcon,
  Video,
  Bot,
  LineChart
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      name: 'Revolutionary AI Services',
      icon: Brain,
      description: 'Next-generation AI solutions that transform enterprise operations',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Multi-agent AI coordination and workflow automation for enterprise transformation',
          features: ['Multi-Agent Coordination', 'Intelligent Process Orchestration', 'Predictive Analytics Engine', 'Enterprise Security Suite'],
          href: '/services/ai-enterprise-orchestrator',
          price: 'From $15,000',
          rating: 5.0,
          reviewCount: 89
        },
        {
          name: 'Quantum AI Platform',
          description: 'Next-generation quantum computing with AI capabilities for complex problem solving',
          features: ['Quantum Machine Learning', 'Quantum Cryptography', 'Quantum Optimization', 'Quantum Simulation'],
          href: '/services/quantum-ai-platform',
          price: 'From $25,000',
          rating: 5.0,
          reviewCount: 67
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'AI-powered threat detection and automated incident response with zero-trust architecture',
          features: ['AI Threat Detection', 'Zero-Trust Architecture', 'Automated Incident Response', 'Compliance Automation'],
          href: '/services/ai-cybersecurity-suite',
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Predictive diagnostics and patient care optimization with AI-powered insights',
          features: ['Predictive Diagnostics', 'Patient Care Optimization', 'Clinical Research Acceleration', 'Healthcare Operations'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 134
        }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Transform your data into actionable insights with advanced AI algorithms and predictive analytics',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization', 'Automated Reporting'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127,
          benefits: ['20% increase in decision speed', '30% reduction in manual analysis', 'Real-time insights']
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management with intelligent lead scoring',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups', 'Pipeline Optimization'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89,
          benefits: ['25% increase in conversion rates', '40% reduction in follow-up time', 'Predictive lead scoring']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and risk assessment for regulatory requirements',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Automated Reporting', 'Audit Trails', 'Policy Management'],
          href: '/services/ai-compliance-assistant',
          price: 'From $4,200',
          rating: 4.7,
          reviewCount: 156,
          benefits: ['90% reduction in compliance violations', 'Automated audit preparation', 'Real-time risk alerts']
        },
        {
          name: 'AI Document Intelligence Hub',
          description: 'Extract, classify, and analyze documents with AI-powered OCR and intelligent data extraction',
          features: ['Document OCR', 'Data Extraction', 'Classification', 'Search & Retrieval', 'Compliance Monitoring'],
          href: '/services/ai-document-intelligence',
          price: 'From $2,800',
          rating: 4.6,
          reviewCount: 203,
          benefits: ['80% faster document processing', '99% accuracy in data extraction', 'Automated workflows']
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer success with predictive analytics, churn prevention, and automated engagement',
          features: ['Churn Prediction', 'Customer Health Scoring', 'Automated Engagement', 'Success Metrics', 'Proactive Support'],
          href: '/services/ai-customer-success',
          price: 'From $2,500',
          rating: 4.8,
          reviewCount: 94,
          benefits: ['15% reduction in churn', 'Improved customer satisfaction', 'Automated success tracking']
        }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Multi-Cloud Management Platform',
          description: 'Unified management across AWS, Azure, and Google Cloud with cost optimization',
          features: ['Multi-Cloud Orchestration', 'Cost Optimization', 'Security Management', 'Performance Monitoring', 'Automated Scaling'],
          href: '/services/multi-cloud-management',
          price: 'From $8,000',
          rating: 4.7,
          reviewCount: 78,
          benefits: ['20% cost reduction', 'Unified management', 'Improved security posture']
        },
        {
          name: 'Kubernetes Enterprise Platform',
          description: 'Enterprise-grade Kubernetes management with advanced monitoring and security',
          features: ['Cluster Management', 'Security Policies', 'Monitoring & Alerting', 'Auto-scaling', 'Disaster Recovery'],
          href: '/services/kubernetes-enterprise',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 112,
          benefits: ['99.9% uptime guarantee', 'Automated scaling', 'Enhanced security']
        },
        {
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing with ultra-low latency and real-time analytics',
          features: ['Edge Nodes', 'Real-time Analytics', 'Low Latency', 'Global Distribution', 'IoT Integration'],
          href: '/services/edge-computing',
          price: 'From $6,500',
          rating: 4.6,
          reviewCount: 67,
          benefits: ['90% reduction in latency', 'Global reach', 'Real-time processing']
        },
        {
          name: 'Cloud Landing Zones',
          description: 'Secure multi-account landing zones with guardrails and golden patterns',
          features: ['Security Guardrails', 'Compliance Baselines', 'Cost Controls', 'Access Management', 'Monitoring'],
          href: '/services/cloud-landing-zones',
          price: 'From $15,000',
          rating: 4.8,
          reviewCount: 76
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'AI-powered supply chain optimization with demand forecasting and route optimization',
          features: ['AI Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Global Visibility'],
          href: '/services/ai-supply-chain-optimization',
          price: 'From $599',
          rating: 4.9,
          reviewCount: 98
        }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      description: 'Modern digital transformation and automation solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'API Management Platform',
          description: 'Comprehensive API lifecycle management with security and analytics',
          features: ['API Gateway', 'Security & Authentication', 'Rate Limiting', 'Analytics & Monitoring', 'Developer Portal'],
          href: '/services/api-management',
          price: 'From $4,500',
          rating: 4.7,
          reviewCount: 134,
          benefits: ['Improved API security', 'Better developer experience', 'Enhanced monitoring']
        },
        {
          name: 'Low-Code Development Platform',
          description: 'Rapid application development with visual development tools',
          features: ['Visual Development', 'Drag & Drop Interface', 'Pre-built Components', 'Workflow Automation', 'Integration Tools'],
          href: '/services/low-code-platform',
          price: 'From $6,000',
          rating: 4.6,
          reviewCount: 89,
          benefits: ['10x faster development', 'Reduced costs', 'Business user friendly']
        },
        {
          name: 'Digital Process Automation',
          description: 'End-to-end process automation with intelligent workflows',
          features: ['Process Mapping', 'Workflow Automation', 'Integration', 'Monitoring', 'Analytics'],
          href: '/services/process-automation',
          price: 'From $8,500',
          rating: 4.8,
          reviewCount: 156,
          benefits: ['50% process efficiency', 'Reduced manual work', 'Improved accuracy']
        },
        {
          name: 'Customer Experience Platform',
          description: 'Unified customer experience across all touchpoints',
          features: ['Omnichannel Support', 'Customer Journey Mapping', 'Personalization', 'Analytics', 'Integration'],
          href: '/services/customer-experience',
          price: 'From $12,000',
          rating: 4.7,
          reviewCount: 112,
          benefits: ['Improved customer satisfaction', 'Increased retention', 'Better insights']
        }
      ]
    },
    {
      name: 'Business Tools',
      icon: Building,
      description: 'Essential business tools and productivity solutions',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Contract Management System',
          description: 'Streamlined contract lifecycle management with AI-powered insights',
          features: ['Contract Creation', 'Approval Workflows', 'Compliance Monitoring', 'AI Analysis', 'Reporting'],
          href: '/services/contract-management',
          price: 'From $3,200',
          rating: 4.6,
          reviewCount: 78,
          benefits: ['Faster contract processing', 'Reduced risks', 'Better compliance']
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
        {
          name: 'AI Customer Churn Prediction',
          description: 'Predict and prevent customer churn with 95%+ accuracy using AI-powered analytics',
          features: ['Churn Prediction', 'Real-time Analytics', 'Proactive Interventions', 'Customer Segmentation'],
          href: '/services/ai-customer-churn-prediction',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Financial Fraud Detection',
          description: 'Protect your business with AI-powered fraud detection and 99.2% accuracy',
          features: ['Fraud Detection', 'Real-time Monitoring', 'Multi-layer Security', 'Adaptive Learning'],
          href: '/services/ai-financial-fraud-detection',
          price: 'From $799',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'AI HR Talent Acquisition',
          description: 'Revolutionize hiring with AI-powered candidate matching and recruitment automation',
          features: ['AI Matching', 'Intelligent Sourcing', 'Predictive Analytics', 'Smart Screening'],
          href: '/services/ai-hr-talent-acquisition',
          price: 'From $399',
          rating: 4.8,
          reviewCount: 267
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Comprehensive Services - Zion Tech Group" description="Explore our complete range of micro SaaS products, enterprise IT services, and AI solutions with transparent pricing and proven ROI." />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-1 text-cyan-300"
            >
              <Rocket className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wider">COMPREHENSIVE SERVICES</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              Enterprise Solutions,
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Startup Speed</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-3xl text-lg text-slate-300"
            >
              From micro SaaS to enterprise IT, we deliver innovative solutions that drive real business outcomes. 
              Transparent pricing, rapid deployment, and measurable ROI.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105">
                Get Started Today
              </Link>
              <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-white/5 transition-all duration-200">
                Request Quote
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-sm text-slate-400"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Free consultation & assessment
              </span>
              <span className="mx-3">•</span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Rapid deployment (2-8 weeks)
              </span>
              <span className="mx-3">•</span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                ROI guarantee
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Comprehensive solutions across all major technology domains, designed to scale with your business needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-slate-300">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * serviceIndex }}
                    className="group bg-white/5 rounded-xl border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-200 hover:translate-y-[-2px]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-xs text-slate-400">({service.reviewCount})</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-cyan-300 mb-2">Key Features:</h5>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-slate-400 flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-green-300 mb-2">Benefits:</h5>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-xs text-slate-400 flex items-center gap-2">
                            <TrendingUp className="h-3 w-3 text-green-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-cyan-300">{service.price}</div>
                      <Link 
                        to={service.href} 
                        className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/20 p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have already accelerated their digital transformation with our solutions.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105">
                Schedule Free Consultation
              </Link>
              <a 
                href="tel:+13024640950" 
                className="rounded-lg border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-white/5 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">
                  Visit our website for more information →
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

