import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Brain,
  Target,
  Rocket,
  DollarSign,
  ExternalLink,
  Search,
  Filter,
  BarChart3,
  Zap,
  AlertTriangle,
  Clock,
  Key,
  Fingerprint
} from 'lucide-react';

export default function AIDataGovernance() {
  const features = [
    {
      icon: Shield,
      title: 'Intelligent Data Classification',
      description: 'AI-powered automatic classification of sensitive data with context-aware labeling and risk assessment',
      benefits: ['Automated PII detection', 'Context-aware classification', 'Risk scoring', 'Real-time updates']
    },
    {
      icon: Lock,
      title: 'Advanced Access Control',
      description: 'Dynamic access management with behavioral analytics and just-in-time permissions',
      benefits: ['Behavioral analytics', 'Just-in-time access', 'Role-based permissions', 'Audit trails']
    },
    {
      icon: Eye,
      title: 'Privacy Compliance Automation',
      description: 'Automated GDPR, CCPA, and HIPAA compliance with intelligent data subject request handling',
      benefits: ['Automated compliance', 'Data subject requests', 'Consent management', 'Regulatory reporting']
    },
    {
      icon: Database,
      title: 'Data Lineage & Quality',
      description: 'End-to-end data lineage tracking with quality monitoring and impact analysis',
      benefits: ['Data lineage mapping', 'Quality monitoring', 'Impact analysis', 'Change tracking']
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance with automated data subject rights management',
      features: ['Right to be forgotten', 'Data portability', 'Consent management', 'Breach notification']
    },
    {
      name: 'CCPA/CPRA',
      description: 'California Consumer Privacy Act compliance with automated consumer rights fulfillment',
      features: ['Consumer rights', 'Opt-out mechanisms', 'Data disclosure', 'Financial incentives']
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance for healthcare data',
      features: ['PHI protection', 'Access controls', 'Audit logging', 'Breach prevention']
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for cloud service providers',
      features: ['Security controls', 'Availability monitoring', 'Processing integrity', 'Confidentiality']
    }
  ];

  const pricing = [
    {
      name: 'Foundation',
      price: '$3,500',
      period: '/month',
      description: 'Essential data governance for small to medium organizations',
      features: [
        'Up to 10TB data management',
        'Basic AI classification',
        'Standard compliance reports',
        'Email support',
        'Basic audit trails'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$8,500',
      period: '/month',
      description: 'Advanced data governance for growing enterprises',
      features: [
        'Up to 100TB data management',
        'Advanced AI classification',
        'Custom compliance frameworks',
        'Priority support',
        'Advanced analytics',
        'Multi-tenant support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$18,000',
      period: '/month',
      description: 'Comprehensive data governance for large enterprises',
      features: [
        'Unlimited data management',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'On-premise option',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Comprehensive data governance for banks, insurance, and fintech companies',
      benefits: ['Regulatory compliance', 'Fraud detection', 'Risk management', 'Customer privacy']
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'HIPAA-compliant data governance with patient privacy protection',
      benefits: ['Patient data security', 'Clinical research', 'Drug development', 'Compliance automation']
    },
    {
      title: 'E-commerce & Retail',
      description: 'Customer data protection with personalized marketing compliance',
      benefits: ['Customer privacy', 'Marketing compliance', 'Fraud prevention', 'Data monetization']
    },
    {
      title: 'Government & Public Sector',
      description: 'Secure data governance for sensitive government information',
      benefits: ['National security', 'Public records', 'Compliance automation', 'Audit readiness']
    }
  ];

  const integrations = [
    'Snowflake', 'Databricks', 'AWS Glue', 'Azure Purview', 'Google Cloud Data Catalog',
    'Tableau', 'Power BI', 'Looker', 'Qlik', 'Apache Atlas', 'Collibra', 'Informatica',
    'Okta', 'Azure AD', 'AWS IAM', 'Google Workspace', 'Slack', 'Microsoft Teams'
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="AI-Powered Data Governance - Zion Tech Group"
        description="Transform your data governance with AI-powered classification, compliance automation, and intelligent access control. Ensure data privacy and regulatory compliance."
        keywords="AI data governance, data privacy, compliance automation, GDPR, CCPA, HIPAA, data classification, access control"
        canonical="https://ziontechgroup.com/services/ai-data-governance"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-2 text-cyan-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="h-4 w-4" />
            <span className="text-sm font-semibold">AI DATA GOVERNANCE</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Data Governance
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your data governance with intelligent AI classification, automated compliance, and advanced access control. Ensure data privacy, regulatory compliance, and operational efficiency.
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
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Demo
            </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Intelligent Data Governance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage AI to automate data classification, ensure compliance, and maintain data quality across your organization
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Automated compliance with major regulatory frameworks and industry standards
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{framework.name}</h3>
                <p className="text-slate-300 mb-6">{framework.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {framework.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how AI-powered data governance transforms operations across industries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's data governance needs
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing data platforms and tools through our extensive integration ecosystem
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <span className="text-sm text-slate-300 font-medium">{integration}</span>
              </div>
            ))}
          </motion.div>
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
            Ready to Transform Your Data Governance?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join organizations already ensuring data privacy and compliance with AI-powered governance
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
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-sm text-cyan-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Contact us: <a href="tel:+13024640950" className="underline">+1 302 464 0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="underline">kleber@ziontechgroup.com</a></p>
            <p className="mt-2">364 E Main St STE 1008, Middletown DE 19709</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}