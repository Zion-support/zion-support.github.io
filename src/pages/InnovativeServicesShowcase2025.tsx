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
  Workflow,
  FileText,
  ImageIcon,
  Video,
  Leaf,
  Building,
  Target,
  Calendar,
  Wrench,
  BarChart3
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const innovativeServices = [
    {
      category: 'AI & Machine Learning',
      services: [
        {
          name: 'AI Autonomous Business Operations',
          description: 'Fully automated business processes with intelligent decision-making and self-healing capabilities',
          features: ['Process Automation', 'Intelligent Decision Making', 'Self-Healing Systems', 'Performance Optimization'],
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 67,
          href: '/services/ai-autonomous-business-operations',
          icon: Brain,
          color: 'from-purple-600 to-pink-600'
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain analytics, demand forecasting, and inventory optimization',
          features: ['Demand Forecasting', 'Inventory Optimization', 'Route Optimization', 'Risk Assessment'],
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 167,
          href: '/services/ai-supply-chain-optimization',
          icon: TrendingUp,
          color: 'from-green-600 to-emerald-600'
        },
        {
          name: 'AI Healthcare Analytics Platform',
          description: 'Advanced healthcare data analytics with patient risk scoring and clinical decision support',
          features: ['Patient Risk Scoring', 'Treatment Optimization', 'Population Health Analytics', 'Clinical Decision Support'],
          price: 'From $8,500',
          rating: 4.9,
          reviewCount: 89,
          href: '/services/ai-healthcare-analytics',
          icon: Heart,
          color: 'from-red-600 to-pink-600'
        },
        {
          name: 'AI Customer Experience Orchestrator',
          description: 'Omnichannel customer experience management with AI-powered personalization',
          features: ['Multi-Channel Integration', 'Personalization Engine', 'Predictive Analytics', 'Automated Engagement'],
          price: 'From $6,000',
          rating: 4.9,
          reviewCount: 156,
          href: '/services/ai-customer-experience-platform',
          icon: Users,
          color: 'from-blue-600 to-cyan-600'
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Multi-agent workflow automation with intelligent routing and decision making',
          features: ['Process Orchestration', 'Multi-Agent Systems', 'Dynamic Adaptation', 'Performance Analytics'],
          price: 'From $2,500',
          rating: 4.9,
          reviewCount: 89,
          href: '/services/ai-workflow-orchestrator',
          icon: Workflow,
          color: 'from-indigo-600 to-purple-600'
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      services: [
        {
          name: 'Quantum Cloud Infrastructure',
          description: 'Quantum-ready cloud infrastructure for next-generation computing',
          features: ['Quantum Simulators', 'Hybrid Quantum-Classical', 'Quantum Security', 'Scalable Architecture'],
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 45,
          href: '/services/quantum-cloud-infrastructure',
          icon: Cpu,
          color: 'from-violet-600 to-purple-600'
        },
        {
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing with ultra-low latency and real-time analytics',
          features: ['Edge Nodes', 'Load Balancing', 'Real-time Analytics', 'Global Network'],
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 76,
          href: '/services/edge-computing-platform',
          icon: Server,
          color: 'from-blue-600 to-cyan-600'
        },
        {
          name: 'Platform Engineering Hub',
          description: 'Internal developer platforms with golden paths and governance frameworks',
          features: ['Developer Experience', 'Golden Paths', 'Backstage Portals', 'Governance Frameworks'],
          price: 'From $8,000',
          rating: 4.8,
          reviewCount: 123,
          href: '/services/platform-engineering',
          icon: Wrench,
          color: 'from-orange-600 to-red-600'
        },
        {
          name: 'Cloud Landing Zones',
          description: 'Secure multi-account cloud environments with guardrails and compliance',
          features: ['Multi-Account Setup', 'Security Guardrails', 'Compliance Baselines', 'Cost Controls'],
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 89,
          href: '/services/cloud-landing-zones',
          icon: Cloud,
          color: 'from-cyan-600 to-blue-600'
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered cybersecurity platform with threat intelligence',
          features: ['AI Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Threat Intelligence'],
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 189,
          href: '/services/ai-cybersecurity-suite',
          icon: Shield,
          color: 'from-red-600 to-orange-600'
        },
        {
          name: 'Zero Trust Security Suite',
          description: 'Comprehensive zero trust implementation with identity verification and access control',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 134,
          href: '/services/zero-trust-network-architecture',
          icon: Lock,
          color: 'from-orange-600 to-red-600'
        },
        {
          name: 'Security Headers & CSP Manager',
          description: 'Continuous security header auditing and Content Security Policy management',
          features: ['Header Auditing', 'CSP Management', 'Vulnerability Scanning', 'Automated Deployment'],
          price: 'From $49',
          rating: 4.7,
          reviewCount: 234,
          href: '/services/security-headers-csp-manager',
          icon: Shield,
          color: 'from-green-600 to-emerald-600'
        },
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered regulatory compliance and risk management solutions',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Trails'],
          price: 'From $7,500',
          rating: 4.9,
          reviewCount: 156,
          href: '/services/ai-compliance-assistant',
          icon: Brain,
          color: 'from-purple-600 to-pink-600'
        }
      ]
    },
    {
      category: 'Digital Transformation',
      services: [
        {
          name: 'Digital Twin Platform',
          description: 'Real-time digital simulation and monitoring for industrial processes',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78,
          href: '/services/digital-twin',
          icon: Building,
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'IoT Edge Computing Platform',
          description: 'Scalable IoT infrastructure with edge analytics and device management',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Scalable Infrastructure'],
          price: 'From $8,500',
          rating: 4.8,
          reviewCount: 156,
          href: '/services/iot-edge',
          icon: Network,
          color: 'from-green-600 to-teal-600'
        },
        {
          name: 'Blockchain Enterprise Platform',
          description: 'Enterprise blockchain implementation with smart contracts and DeFi protocols',
          features: ['Smart Contracts', 'DeFi Protocols', 'Supply Chain Tracking', 'Digital Identity'],
          price: 'From $20,000',
          rating: 4.8,
          reviewCount: 89,
          href: '/services/blockchain-enterprise-solutions',
          icon: Lock,
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Sustainability Analytics Platform',
          description: 'Environmental impact tracking and sustainability reporting automation',
          features: ['Carbon Footprint Analysis', 'Environmental Monitoring', 'Compliance Reporting', 'Green Certifications'],
          price: 'From $8,500',
          rating: 4.7,
          reviewCount: 89,
          href: '/services/sustainability',
          icon: Leaf,
          color: 'from-emerald-600 to-green-600'
        }
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      services: [
        {
          name: 'Privacy Request Portal (DSR)',
          description: 'GDPR/CCPA compliant data subject request management platform',
          features: ['Request Intake', 'Identity Verification', 'Workflow Automation', 'Compliance Reporting'],
          price: 'From $99',
          rating: 4.8,
          reviewCount: 167,
          href: '/services/privacy-request-portal',
          icon: Shield,
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'SaaS Billing Dunning & Recovery',
          description: 'Smart payment retry and churn reduction platform',
          features: ['Payment Retry Logic', 'Card Updater Integration', 'Churn Analytics', 'Recovery Optimization'],
          price: 'From $79',
          rating: 4.7,
          reviewCount: 189,
          href: '/services/saas-billing-dunning',
          icon: ShoppingCart,
          color: 'from-green-600 to-emerald-600'
        },
        {
          name: 'Checkout A/B Optimizer',
          description: 'Low-code checkout optimization platform for e-commerce',
          features: ['A/B Testing', 'Conversion Analytics', 'Stripe Integration', 'Performance Tracking'],
          price: 'From $99',
          rating: 4.6,
          reviewCount: 234,
          href: '/services/checkout-optimizer',
          icon: ShoppingCart,
          color: 'from-blue-600 to-cyan-600'
        },
        {
          name: 'Status & Incident Hub',
          description: 'Hosted status page with incident management and notifications',
          features: ['Status Monitoring', 'Incident Management', 'Webhook Integration', 'On-call Notifications'],
          price: 'From $59',
          rating: 4.8,
          reviewCount: 145,
          href: '/services/status-incident-hub',
          icon: Shield,
          color: 'from-orange-600 to-red-600'
        },
        {
          name: 'Multilingual UX Localizer',
          description: 'AI-powered localization and translation management platform',
          features: ['String Extraction', 'Machine Translation', 'Human Review', 'Version Control'],
          price: 'From $69',
          rating: 4.7,
          reviewCount: 123,
          href: '/services/multilingual-localizer',
          icon: Globe,
          color: 'from-cyan-600 to-blue-600'
        }
      ]
    },
    {
      category: 'Emerging Technologies',
      services: [
        {
          name: 'Quantum AI Platform',
          description: 'Hybrid quantum-classical AI platform for complex problem solving',
          features: ['Quantum ML', 'Hybrid Algorithms', 'Quantum Neural Networks', 'Performance Optimization'],
          price: 'From $35,000',
          rating: 4.9,
          reviewCount: 45,
          href: '/services/quantum-ai-platform',
          icon: Cpu,
          color: 'from-violet-600 to-purple-600'
        },
        {
          name: 'Space Technology Solutions',
          description: 'Advanced space technology and satellite solutions',
          features: ['Satellite Communications', 'Space Data Analytics', 'Orbital Mechanics', 'Ground Station Management'],
          price: 'From $50,000',
          rating: 4.9,
          reviewCount: 34,
          href: '/services/space-tech',
          icon: Rocket,
          color: 'from-slate-600 to-gray-600'
        },
        {
          name: 'AI Video Intelligence Platform',
          description: 'Advanced video analytics, transcription, and content summarization',
          features: ['Video Analytics', 'Transcription', 'Speaker Diarization', 'Content Summarization'],
          price: 'From $4,000',
          rating: 4.8,
          reviewCount: 123,
          href: '/services/ai-video-intelligence',
          icon: Video,
          color: 'from-purple-600 to-pink-600'
        },
        {
          name: 'AI Document Intelligence',
          description: 'OCR, form extraction, and intelligent document processing',
          features: ['OCR Processing', 'Form Extraction', 'Document Classification', 'Intelligent Processing'],
          price: 'From $4,000',
          rating: 4.8,
          reviewCount: 156,
          href: '/services/ai-document-intelligence',
          icon: FileText,
          color: 'from-blue-600 to-indigo-600'
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery across industries'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with advanced degrees and industry certifications in emerging technologies'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick turnaround times without compromising quality, security, or innovation'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified with SOC 2 Type II compliance and quantum-safe security protocols'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support available across 25+ countries with localized expertise'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Ongoing R&D investment in AI, quantum computing, and emerging technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's cutting-edge AI services, quantum computing solutions, cybersecurity platforms, and innovative micro SaaS products. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, cybersecurity, micro SaaS, digital transformation, emerging technologies, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2025"
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
            Innovative Services Showcase 2025
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-edge AI solutions, quantum computing platforms, and innovative micro SaaS products designed to revolutionize your business
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

      {/* Innovative Services */}
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
              Innovative Services Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge technology solutions organized by category
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {innovativeServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">{category.category}</h3>
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
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-4`}>
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                              <p className="text-slate-300">{service.description}</p>
                            </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
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
            Let's discuss how our innovative AI solutions and cutting-edge technology can revolutionize your operations
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
          <div className="mt-8 text-cyan-100">
            <p>Contact: +1 302 464 0950 • kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}