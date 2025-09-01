import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Brain,
  Shield,
  Cloud,
  Cpu,
  Rocket,
  Lock,
  Globe,
  Heart,
  Code,
  Users,
  BarChart3,
  MessageCircle,
  Zap,
  CheckCircle,
  ArrowRight,
  Database,
  Network,
  Smartphone,
  Target,
  TrendingUp,
  FileText,
  Video,
  Camera,
  Palette,
  Search,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Leaf,
  Sun,
  Wind,
  Atom,
  Dna,
  Microscope,
  Flask,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Fingerprint,
  Key,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Robot,
  Sparkles,
  Star,
  Award,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

// Enhanced Micro SAAS Solutions with Real Market Pricing
const enhancedMicroSAASSolutions = [
  // AI & Machine Learning Services
  {

    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence Suite',
    description: 'Enterprise-grade AI-powered business intelligence platform with predictive analytics and real-time insights.',
    icon: Brain,
    category: 'AI & ML',
    features: [
      'Predictive Analytics & Forecasting',
      'Natural Language Query Interface',
      'Real-time Dashboard Creation',
      'Automated Report Generation',
      'Multi-source Data Integration',
      'Advanced Visualization Tools',
      'Custom ML Model Training',
      'API Integration & Webhooks'
    ],
    pricing: {

      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month'
    },
    benefits: [
      'Reduce decision-making time by 60%',
      'Increase revenue insights by 40%',
      '24/7 automated monitoring',
      'GDPR & SOC2 compliant'
    ],
    href: '/services/ai-business-intelligence',
    color: 'from-blue-600 to-cyan-600',
    marketPrice: '$500-2,500/month',
    competitors: ['Tableau', 'Power BI', 'Looker']
  },
  {

    id: 'ai-content-creation',
    title: 'AI Content Creation Studio',
    description: 'Professional content creation platform powered by advanced AI for marketing, social media, and business communications.',
    icon: FileText,
    category: 'AI & ML',
    features: [
      'Multi-format Content Generation',
      'SEO-Optimized Writing',
      'Brand Voice Consistency',
      'Multi-language Support',
      'Content Calendar Management',
      'Performance Analytics',
      'Plagiarism Detection',
      'Social Media Integration'
    ],
    pricing: {

      starter: '$99/month',
      professional: '$299/month',
      enterprise: '$799/month'
    },
    benefits: [
      '10x faster content creation',
      'SEO ranking improvements',
      'Consistent brand messaging',
      'Multi-platform publishing'
    ],
    href: '/services/ai-content-creation',
    color: 'from-purple-600 to-pink-600',
    marketPrice: '$150-800/month',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic']
  },
  {

    id: 'ai-customer-service',
    title: 'AI Customer Service Platform',
    description: 'Intelligent customer service automation with natural language processing and seamless human handoff.',
    icon: MessageCircle,
    category: 'AI & ML',
    features: [
      '24/7 AI Chatbot Support',
      'Multi-language Support',
      'Sentiment Analysis',
      'Smart Ticket Routing',
      'Knowledge Base Integration',
      'Customer Journey Tracking',
      'Performance Analytics',
      'CRM Integration'
    ],
    pricing: {

      starter: '$199/month',
      professional: '$499/month',
      enterprise: '$1,299/month'
    },
    benefits: [
      '80% reduction in response time',
      '24/7 customer support',
      'Improved customer satisfaction',
      'Reduced support costs'
    ],
    href: '/services/ai-customer-service',
    color: 'from-green-600 to-teal-600',
    marketPrice: '$300-1,500/month',
    competitors: ['Intercom', 'Zendesk', 'Freshdesk']
  },

  // IT Infrastructure & Security Services
  {

    id: 'cybersecurity-suite',
    title: 'Enterprise Cybersecurity Suite',
    description: 'Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance management.',
    icon: Shield,
    category: 'IT & Security',
    features: [
      'Real-time Threat Detection',
      'Vulnerability Assessment',
      'Incident Response Automation',
      'Compliance Management (SOC2, GDPR)',
      'Security Awareness Training',
      'Penetration Testing',
      'Security Monitoring Dashboard',
      'API Security & Rate Limiting'
    ],
    pricing: {

      starter: '$399/month',
      professional: '$999/month',
      enterprise: '$2,499/month'
    },
    benefits: [
      '99.9% threat detection rate',
      '24/7 security monitoring',
      'Compliance certification support',
      'Reduced security incidents'
    ],
    href: '/services/cybersecurity-suite',
    color: 'from-red-600 to-orange-600',
    marketPrice: '$500-3,000/month',
    competitors: ['CrowdStrike', 'SentinelOne', 'Carbon Black']
  },
  {

    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Management',
    description: 'Multi-cloud infrastructure management with automated scaling, monitoring, and cost optimization.',
    icon: Cloud,
    category: 'IT & Security',
    features: [
      'Multi-cloud Orchestration',
      'Automated Scaling',
      'Cost Optimization',
      'Performance Monitoring',
      'Disaster Recovery',
      'Security Compliance',
      'API Management',
      'Container Orchestration'
    ],
    pricing: {

      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month'
    },
    benefits: [
      '30% cost reduction',
      '99.9% uptime guarantee',
      'Automated scaling',
      'Multi-cloud flexibility'
    ],
    href: '/services/cloud-infrastructure',
    color: 'from-indigo-600 to-purple-600',
    marketPrice: '$400-2,500/month',
    competitors: ['AWS', 'Azure', 'Google Cloud']
  },
  {

    id: 'devops-automation',
    title: 'DevOps Automation Platform',
    description: 'End-to-end DevOps automation with CI/CD pipelines, infrastructure as code, and deployment management.',
    icon: Code,
    category: 'IT & Security',
    features: [
      'CI/CD Pipeline Automation',
      'Infrastructure as Code',
      'Container Management',
      'Automated Testing',
      'Deployment Orchestration',
      'Monitoring & Alerting',
      'Security Scanning',
      'Performance Optimization'
    ],
    pricing: {

      starter: '$199/month',
      professional: '$599/month',
      enterprise: '$1,499/month'
    },
    benefits: [
      '90% faster deployments',
      'Reduced human errors',
      'Improved code quality',
      'Faster time to market'
    ],
    href: '/services/devops-automation',
    color: 'from-yellow-600 to-orange-600',
    marketPrice: '$300-2,000/month',
    competitors: ['Jenkins', 'GitLab', 'CircleCI']
  },

  // Business Process Automation
  {

    id: 'workflow-automation',
    title: 'Business Workflow Automation',
    description: 'Intelligent workflow automation platform for business processes with AI-powered decision making.',
    icon: BarChart3,
    category: 'Business Automation',
    features: [
      'Visual Workflow Designer',
      'AI Decision Making',
      'Document Processing',
      'Approval Workflows',
      'Integration APIs',
      'Performance Analytics',
      'Mobile App Support',
      'Custom Dashboards'
    ],
    pricing: {

      starter: '$149/month',
      professional: '$399/month',
      enterprise: '$999/month'
    },
    benefits: [
      '70% process efficiency gain',
      'Reduced manual errors',
      'Faster approval cycles',
      'Improved compliance'
    ],
    href: '/services/workflow-automation',
    color: 'from-emerald-600 to-green-600',
    marketPrice: '$200-1,200/month',
    competitors: ['Zapier', 'Microsoft Power Automate', 'Automation Anywhere']
  },
  {

    id: 'hr-management-platform',
    title: 'AI-Powered HR Management',
    description: 'Comprehensive HR platform with AI-driven recruitment, performance management, and employee engagement.',
    icon: Users,
    category: 'Business Automation',
    features: [
      'AI Recruitment Assistant',
      'Performance Management',
      'Learning & Development',
      'Employee Engagement',
      'Payroll Integration',
      'Benefits Management',
      'Compliance Tracking',
      'Analytics Dashboard'
    ],
    pricing: {

      starter: '$99/month',
      professional: '$299/month',
      enterprise: '$799/month'
    },
    benefits: [
      '50% faster hiring process',
      'Improved employee retention',
      'Better performance insights',
      'Reduced HR overhead'
    ],
    href: '/services/hr-management-platform',
    color: 'from-blue-600 to-indigo-600',
    marketPrice: '$150-1,000/month',
    competitors: ['BambooHR', 'Workday', 'ADP']
  },

  // Industry-Specific Solutions
  {

    id: 'healthcare-ai',
    title: 'Healthcare AI Solutions',
    description: 'AI-powered healthcare platform for patient care, diagnosis assistance, and medical research.',
    icon: Heart,
    category: 'Healthcare',
    features: [
      'Patient Data Analytics',
      'Diagnosis Assistance',
      'Treatment Recommendations',
      'Medical Image Analysis',
      'Drug Discovery Support',
      'Clinical Trial Management',
      'HIPAA Compliance',
      'Integration APIs'
    ],
    pricing: {

      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: '$2,999/month'
    },
    benefits: [
      'Improved diagnostic accuracy',
      'Faster treatment decisions',
      'Reduced medical errors',
      'HIPAA compliant'
    ],
    href: '/services/healthcare-ai',
    color: 'from-red-500 to-pink-500',
    marketPrice: '$800-4,000/month',
    competitors: ['IBM Watson Health', 'Google Health', 'Microsoft Healthcare']
  },
  {

    id: 'financial-ai',
    title: 'Financial AI Platform',
    description: 'AI-driven financial services platform for risk assessment, fraud detection, and investment analysis.',
    icon: CreditCard,
    category: 'Finance',
    features: [
      'Risk Assessment Models',
      'Fraud Detection',
      'Investment Analysis',
      'Portfolio Optimization',
      'Regulatory Compliance',
      'Real-time Monitoring',
      'API Integration',
      'Custom Alerts'
    ],
    pricing: {

      starter: '$399/month',
      professional: '$999/month',
      enterprise: '$2,499/month'
    },
    benefits: [
      '90% fraud detection rate',
      'Improved risk assessment',
      'Regulatory compliance',
      'Real-time monitoring'
    ],
    href: '/services/financial-ai',
    color: 'from-green-500 to-emerald-500',
    marketPrice: '$600-3,500/month',
    competitors: ['Palantir', 'SAS', 'FICO']
  },
  {

    id: 'manufacturing-iot',
    title: 'Manufacturing IoT Platform',
    description: 'Industrial IoT platform for smart manufacturing with predictive maintenance and quality control.',
    icon: Factory,
    category: 'Manufacturing',
    features: [
      'Predictive Maintenance',
      'Quality Control',
      'Supply Chain Optimization',
      'Energy Management',
      'Safety Monitoring',
      'Performance Analytics',
      'Integration APIs',
      'Mobile Dashboard'
    ],
    pricing: {

      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month'
    },
    benefits: [
      '30% reduction in downtime',
      'Improved product quality',
      'Energy cost savings',
      'Enhanced safety'
    ],
    href: '/services/manufacturing-iot',
    color: 'from-gray-600 to-blue-600',
    marketPrice: '$400-2,500/month',
    competitors: ['Siemens', 'GE Digital', 'PTC']
  },

  // Emerging Technology Solutions
  {

    id: 'quantum-computing',
    title: 'Quantum Computing Services',
    description: 'Access to quantum computing resources for complex optimization and simulation problems.',
    icon: Atom,
    category: 'Emerging Tech',
    features: [
      'Quantum Algorithm Library',
      'Optimization Problems',
      'Cryptography Services',
      'Simulation Tools',
      'API Access',
      'Expert Consultation',
      'Training Programs',
      'Research Support'
    ],
    pricing: {

      starter: '$999/month',
      professional: '$2,499/month',
      enterprise: '$4,999/month'
    },
    benefits: [
      'Exponential speed improvements',
      'Solving previously impossible problems',
      'Future-proof technology',
      'Expert quantum support'
    ],
    href: '/services/quantum-computing',
    color: 'from-purple-600 to-indigo-600',
    marketPrice: '$1,500-10,000/month',
    competitors: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum']
  },
  {

    id: 'blockchain-platform',
    title: 'Enterprise Blockchain Platform',
    description: 'Secure blockchain platform for supply chain transparency, smart contracts, and digital assets.',
    icon: Link,
    category: 'Emerging Tech',
    features: [
      'Smart Contract Development',
      'Supply Chain Tracking',
      'Digital Asset Management',
      'Identity Verification',
      'Cross-chain Interoperability',
      'API Integration',
      'Compliance Tools',
      'Analytics Dashboard'
    ],
    pricing: {

      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month'
    },
    benefits: [
      'Enhanced transparency',
      'Reduced fraud',
      'Automated compliance',
      'Improved efficiency'
    ],
    href: '/services/blockchain-platform',
    color: 'from-orange-600 to-yellow-600',
    marketPrice: '$500-3,000/month',
    competitors: ['Hyperledger', 'Ethereum Enterprise', 'Corda']
  }
];

// Contact Information
const contactInfo = {

  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Benefits Section
const benefits = [
  {

    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months'
  },
  {

    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'See measurable results within 30 days'
  },
  {

    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {

    icon: Users,
    title: '24/7 Expert Support',
    description: 'Dedicated support team available anytime'
  },
  {

    icon: Rocket,
    title: 'Scalable Solutions',
    description: 'Grow with your business needs'
  },
  {

    icon: Star,
    title: 'Industry Expertise',
    description: '15+ years of technology consulting'
  }
];

// Testimonials
const testimonials = [
  {

    name: 'Sarah Johnson',
    role: 'CTO, TechFlow Inc.',
    company: 'TechFlow Inc.',
    content: 'Zion Tech Group\'s AI Business Intelligence platform transformed our data analytics capabilities. We saw a 40% improvement in decision-making speed within the first month.',
    rating: 5
  },
  {

    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'Global Manufacturing Co.',
    content: 'The Manufacturing IoT platform helped us reduce downtime by 30% and improve product quality significantly. The ROI was immediate and substantial.',
    rating: 5
  },
  {

    name: 'Dr. Emily Rodriguez',
    role: 'Chief Medical Officer',
    company: 'Metro Health Systems',
    content: 'Their Healthcare AI solutions have improved our diagnostic accuracy and patient outcomes. The platform is intuitive and HIPAA compliant.',
    rating: 5
  }
];

export default function EnhancedMicroSAASServices2025() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              2025 Enhanced Micro SAAS Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Micro SAAS
              </span>
              Solutions
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our cutting-edge micro SAAS applications. 
              Each solution is engineered for maximum efficiency, security, and ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our micro SAAS solutions are built for modern businesses that need powerful,
              focused tools without the complexity of enterprise software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 text-center hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum computing services, 
              we offer the most innovative solutions in the market.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'AI & ML', 'IT & Security', 'Business Automation', 'Healthcare', 'Finance', 'Manufacturing', 'Emerging Tech'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedMicroSAASSolutions.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6 p-4 bg-zion-blue-dark/30 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Starter:</span>
                      <span className="text-zion-cyan font-semibold">{service.pricing.starter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Professional:</span>
                      <span className="text-zion-cyan font-semibold">{service.pricing.professional}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-light">Enterprise:</span>
                      <span className="text-zion-cyan font-semibold">{service.pricing.enterprise}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-zion-slate-light">
                    Market average: {service.marketPrice}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <Star className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-zion-cyan text-zion-cyan" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                  <p className="text-zion-slate-light text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Let's discuss how our micro SAAS solutions can drive your business forward.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <a href={`mailto:${contactInfo.email}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 block"
                  >
                    Request Demo
                  </Link>
                  <Link
                    to="/pricing"
                    className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 block"
                  >
                    View Pricing
                  </Link>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="w-full border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-zion-slate-light mb-4">
                All our solutions come with a 30-day free trial and money-back guarantee.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ 30-Day Free Trial
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ Money-Back Guarantee
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ 24/7 Support
                </span>
                <span className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                  ✓ Enterprise Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}