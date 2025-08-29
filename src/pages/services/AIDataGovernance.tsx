import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Activity,
  Cpu,
  Network,
  Cloud,
  Globe,
  Smartphone,
  Monitor,
  Server,
  BarChart,
  PieChart,
  LineChart,
  Target,
  Award,
  Rocket,
  Lightbulb,
  Cog,
  Settings,
  Download,
  Upload,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Brain,
  Users,
  TrendingUp,
  Clock,
  FileText,
  Search,
  Filter,
  AlertTriangle,
  CheckSquare,
  XCircle,
  ShieldCheck,
  Key,
  Fingerprint,
  Scan,
  Globe2,
  Building,
  UserCheck,
  UserX,
  CreditCard
} from 'lucide-react';

export default function AIDataGovernance() {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Data Classification',
      description: 'Intelligent data discovery and classification using machine learning algorithms',
      benefits: ['Automated data discovery', 'Smart classification', 'Real-time updates', 'Compliance mapping']
    },
    {
      icon: Lock,
      title: 'Intelligent Access Control',
      description: 'Dynamic access management based on data sensitivity and user context',
      benefits: ['Context-aware access', 'Dynamic permissions', 'Risk-based controls', 'Audit trails']
    },
    {
      icon: Database,
      title: 'Data Lineage & Tracking',
      description: 'Complete visibility into data flow, transformations, and usage across systems',
      benefits: ['End-to-end tracking', 'Impact analysis', 'Change management', 'Compliance reporting']
    },
    {
      icon: Brain,
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting for GDPR, HIPAA, and other regulations',
      benefits: ['Regulatory compliance', 'Automated reporting', 'Risk assessment', 'Policy enforcement']
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Ensure regulatory compliance and data security for sensitive financial information',
      benefits: ['SOX compliance', 'PCI DSS adherence', 'Data privacy', 'Risk mitigation']
    },
    {
      industry: 'Healthcare',
      description: 'Protect patient data and ensure HIPAA compliance with intelligent governance',
      benefits: ['HIPAA compliance', 'Patient privacy', 'Secure sharing', 'Audit trails']
    },
    {
      industry: 'Retail & E-commerce',
      description: 'Manage customer data responsibly while maintaining compliance with privacy regulations',
      benefits: ['GDPR compliance', 'Customer consent', 'Data minimization', 'Transparent policies']
    },
    {
      industry: 'Government & Public Sector',
      description: 'Secure sensitive government data and ensure compliance with security standards',
      benefits: ['FedRAMP compliance', 'Data sovereignty', 'Security clearance', 'Public transparency']
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for small organizations with basic data governance needs',
      features: [
        'Up to 10TB data',
        'Basic classification',
        'Standard access control',
        'Email support',
        '5 team members',
        'Core compliance'
      ],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced data governance requirements',
      features: [
        'Up to 100TB data',
        'Advanced AI classification',
        'Intelligent access control',
        'Priority support',
        'Unlimited team members',
        'Custom policies',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'For large organizations requiring enterprise-grade data governance',
      features: [
        'Unlimited data',
        'Custom AI models',
        'Advanced analytics & ML',
        '24/7 dedicated support',
        'Custom deployment',
        'SLA guarantees',
        'On-premise option',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      category: 'AI & Machine Learning',
      specs: [
        'GPT-4 integration for natural language processing',
        'Custom ML models for data classification',
        'Real-time learning and adaptation',
        'Behavioral pattern recognition'
      ]
    },
    {
      category: 'Security & Encryption',
      specs: [
        'End-to-end encryption (AES-256)',
        'Zero-knowledge architecture',
        'Multi-factor authentication',
        'Hardware security modules (HSM)'
      ]
    },
    {
      category: 'Compliance & Standards',
      specs: [
        'SOC 2 Type II compliance',
        'ISO 27001 certification',
        'GDPR, HIPAA, SOX ready',
        'FedRAMP authorization'
      ]
    },
    {
      category: 'Performance & Scalability',
      specs: [
        '99.9% uptime SLA',
        'Auto-scaling infrastructure',
        'Global CDN for fast access',
        'Real-time processing capabilities'
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data subjects',
      icon: Globe2,
      color: 'from-blue-500 to-cyan-600',
      features: ['Data subject rights', 'Consent management', 'Data portability', 'Breach notification']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act for healthcare data',
      icon: ShieldCheck,
      color: 'from-green-500 to-emerald-600',
      features: ['Patient privacy', 'Secure transmission', 'Access controls', 'Audit requirements']
    },
    {
      name: 'SOX',
      description: 'Sarbanes-Oxley Act for financial reporting and corporate governance',
      icon: Building,
      color: 'from-purple-500 to-pink-600',
      features: ['Financial controls', 'Data integrity', 'Internal controls', 'Executive accountability']
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for payment data',
      icon: CreditCard,
      color: 'from-orange-500 to-red-600',
      features: ['Cardholder data', 'Secure networks', 'Vulnerability management', 'Access control']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="AI Data Governance Platform - Zion Tech Group"
        description="Transform data governance with AI-powered classification, access control, and compliance automation. Ensure data security and regulatory compliance."
        keywords="AI data governance, data classification, access control, compliance automation, data security, regulatory compliance"
        canonical="https://ziontechgroup.com/services/ai-data-governance"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-slate-900 to-teal-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Data Governance Platform
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionize data governance with AI-powered classification, intelligent access control, and automated compliance management
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#pricing" 
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              View Pricing
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful capabilities that transform how you manage data governance and compliance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built-in support for major regulatory and compliance standards
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${framework.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {framework.name}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {framework.description}
                  </p>
                  <div className="space-y-1">
                    {framework.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-slate-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Industry Use Cases
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how different industries leverage our AI Data Governance Platform to ensure compliance and security
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-slate-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the perfect plan for your data governance needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade technology stack designed for reliability, security, and performance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors duration-300">
                    {spec.category}
                  </h3>
                  <div className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <div key={idx} className="flex items-start text-sm text-slate-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Data Governance?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ensure data security, compliance, and governance with AI-powered intelligence and automation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Getting Started?</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}