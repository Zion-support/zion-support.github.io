import { motion } from "framer-motion";
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  TrendingUp, 
  Target, 
  Zap, 
  Users, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
  Lock,
  Eye,
  Brain,
  Clock,
  DollarSign,
  BarChart3,
  Lightbulb,
  Rocket,
  Award,
  Scale,
  Gavel
} from 'lucide-react';

export default function AIComplianceAssistant() {
  const features = [
    {
      icon: Shield,
      title: 'Real-Time Compliance Monitoring',
      description: 'Continuous monitoring of all business activities to ensure compliance with regulatory requirements and internal policies.',
      benefits: ['24/7 monitoring', 'Instant alerts', 'Policy enforcement', 'Audit trails']
    },
    {
      icon: Brain,
      title: 'AI-Powered Risk Assessment',
      description: 'Advanced machine learning algorithms that identify potential compliance risks and provide proactive recommendations.',
      benefits: ['Risk scoring', 'Predictive analytics', 'Trend analysis', 'Mitigation strategies']
    },
    {
      icon: FileText,
      title: 'Automated Documentation',
      description: 'Generate and maintain compliance documentation automatically, ensuring accuracy and completeness across all processes.',
      benefits: ['Auto-generation', 'Version control', 'Template library', 'Regulatory updates']
    },
    {
      icon: AlertTriangle,
      title: 'Intelligent Alert System',
      description: 'Smart notification system that prioritizes alerts based on risk level and regulatory impact.',
      benefits: ['Risk-based prioritization', 'Escalation workflows', 'Custom thresholds', 'Multi-channel alerts']
    },
    {
      icon: Lock,
      title: 'Data Privacy & Security',
      description: 'Comprehensive data protection measures with built-in privacy controls and security monitoring.',
      benefits: ['GDPR compliance', 'Data encryption', 'Access controls', 'Privacy impact assessments']
    },
    {
      icon: Scale,
      title: 'Regulatory Intelligence',
      description: 'Stay updated with the latest regulatory changes and automatically adapt compliance processes.',
      benefits: ['Regulatory tracking', 'Change notifications', 'Impact analysis', 'Process updates']
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      title: 'Regulatory Compliance & Reporting',
      description: 'Ensure compliance with FINRA, SEC, and other financial regulations while automating reporting and monitoring.',
      metrics: ['100% regulatory compliance', '60% reduction in reporting time', '45% decrease in compliance costs']
    },
    {
      industry: 'Healthcare',
      title: 'HIPAA & Patient Data Protection',
      description: 'Maintain HIPAA compliance and protect patient data with AI-powered monitoring and automated safeguards.',
      metrics: ['Zero HIPAA violations', '80% faster incident response', '30% reduction in audit findings']
    },
    {
      industry: 'Manufacturing',
      title: 'Safety & Environmental Compliance',
      description: 'Monitor safety protocols and environmental regulations to ensure workplace safety and regulatory compliance.',
      metrics: ['95% reduction in safety incidents', '100% environmental compliance', '40% faster compliance reporting']
    },
    {
      industry: 'Technology',
      title: 'Data Privacy & Security Compliance',
      description: 'Maintain GDPR, CCPA, and other privacy regulations while protecting customer data and maintaining trust.',
      metrics: ['100% privacy compliance', '70% faster data subject requests', '50% reduction in privacy incidents']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce compliance costs through automation and proactive risk management.',
      value: '30-50%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate routine compliance tasks and focus on strategic risk management.',
      value: '60-80%'
    },
    {
      icon: Target,
      title: 'Risk Mitigation',
      description: 'Identify and address compliance risks before they become violations.',
      value: '90%+'
    },
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Streamline compliance processes and improve overall business operations.',
      value: '2-3x faster'
    }
  ];

  const regulations = [
    'GDPR (General Data Protection Regulation)',
    'CCPA (California Consumer Privacy Act)',
    'HIPAA (Health Insurance Portability and Accountability Act)',
    'SOX (Sarbanes-Oxley Act)',
    'FINRA (Financial Industry Regulatory Authority)',
    'SEC (Securities and Exchange Commission)',
    'ISO 27001 (Information Security)',
    'PCI DSS (Payment Card Industry)',
    'FTC Guidelines',
    'State Privacy Laws',
    'Industry-Specific Regulations',
    'International Compliance Standards'
  ];

  const capabilities = [
    'Compliance Monitoring',
    'Risk Assessment',
    'Policy Management',
    'Audit Trail Generation',
    'Incident Management',
    'Reporting & Analytics',
    'Training Management',
    'Document Control',
    'Change Management',
    'Performance Metrics',
    'Integration APIs',
    'Mobile Access'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Compliance Assistant - Zion Tech Group"
        description="Ensure regulatory compliance with AI-powered monitoring, risk assessment, and automated compliance management. Reduce risks and maintain compliance across all regulations."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Compliance
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Assistant
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay compliant with confidence using our AI-powered compliance monitoring and risk management solutions. 
              Automate compliance processes, identify risks proactively, and maintain regulatory adherence across all operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>View Success Stories</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-50%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">60-80%</div>
              <div className="text-slate-400">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">90%+</div>
              <div className="text-slate-400">Risk Mitigation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2-3x</div>
              <div className="text-slate-400">Faster Operations</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Features for
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Compliance Management
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Compliance Assistant provides end-to-end compliance management with intelligent automation, 
              real-time monitoring, and proactive risk assessment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Compliance Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tailored compliance solutions for different industries, ensuring regulatory adherence 
              while optimizing business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Results:</h4>
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Business Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Compliance Assistant delivers quantifiable results that directly impact your compliance 
              performance and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Regulatory Coverage
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Stay compliant with all major regulations and industry standards through our comprehensive 
              compliance management platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regulations.map((regulation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{regulation}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Capabilities
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built with enterprise-grade technology to handle complex compliance requirements 
              and deliver superior performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{capability}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Compliance Operations?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already revolutionized their compliance management 
              with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>View Success Stories</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

