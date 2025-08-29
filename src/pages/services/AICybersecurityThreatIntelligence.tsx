import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {
  Shield,
  AlertTriangle,
  Brain,
  Zap,
  Eye,
  Users,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Lock,
  Search,
  Activity,
  BarChart3,
  Clock,
  DollarSign,
  Target,
  Award,
  Network,
  Database,
  Cpu,
  Fingerprint
} from 'lucide-react';

export default function AICybersecurityThreatIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and analyze cyber threats in real-time with 99.9% accuracy.',
      benefits: ['Real-time threat detection', 'Behavioral analysis', 'Anomaly identification', 'Predictive threat modeling']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance of your digital infrastructure with automated threat hunting and response capabilities.',
      benefits: ['Round-the-clock monitoring', 'Automated response', 'Threat hunting', 'Incident tracking']
    },
    {
      icon: Search,
      title: 'Threat Intelligence',
      description: 'Comprehensive threat intelligence feeds and analysis from global security sources and dark web monitoring.',
      benefits: ['Global threat feeds', 'Dark web monitoring', 'IOC sharing', 'Threat attribution']
    },
    {
      icon: Activity,
      title: 'Behavioral Analytics',
      description: 'User and entity behavior analytics (UEBA) to detect insider threats and compromised accounts.',
      benefits: ['User behavior analysis', 'Insider threat detection', 'Account compromise detection', 'Risk scoring']
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced network traffic analysis and intrusion detection with AI-powered pattern recognition.',
      benefits: ['Traffic analysis', 'Intrusion detection', 'DDoS protection', 'Network segmentation']
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Comprehensive data loss prevention and encryption with AI-driven security policy enforcement.',
      benefits: ['Data encryption', 'DLP policies', 'Access controls', 'Compliance monitoring']
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      title: 'Fraud Detection & Prevention',
      description: 'Protect financial transactions and customer data with AI-powered fraud detection and real-time threat response.',
      metrics: ['99.9% fraud detection accuracy', '60% reduction in false positives', 'Real-time response in <100ms']
    },
    {
      industry: 'Healthcare',
      title: 'Patient Data Security',
      description: 'Secure patient records and medical systems with HIPAA-compliant cybersecurity and threat intelligence.',
      metrics: ['100% HIPAA compliance', 'Zero data breaches', '24/7 threat monitoring']
    },
    {
      industry: 'Manufacturing',
      title: 'Industrial Control Security',
      description: 'Protect critical infrastructure and industrial control systems from cyber attacks and espionage.',
      metrics: ['99.99% uptime protection', 'Zero successful attacks', 'Real-time threat response']
    },
    {
      industry: 'E-commerce',
      title: 'Customer Data Protection',
      description: 'Secure online transactions and customer information with advanced fraud detection and threat prevention.',
      metrics: ['95% reduction in fraud losses', '100% secure transactions', 'Real-time threat blocking']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Threat Prevention',
      description: 'Proactively prevent cyber attacks before they can cause damage to your systems.',
      value: '99.9%'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Detect and respond to threats in real-time, minimizing potential damage.',
      value: '<100ms'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce cybersecurity costs while improving protection and compliance.',
      value: '40-60%'
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'High-precision threat detection with minimal false positives.',
      value: '99.9%'
    }
  ];

  const technologies = [
    'Machine Learning AI',
    'Deep Learning Neural Networks',
    'Natural Language Processing',
    'Behavioral Analytics',
    'Threat Intelligence Feeds',
    'Dark Web Monitoring',
    'Real-time Processing',
    'Cloud Security',
    'Zero Trust Architecture',
    'Blockchain Security',
    'Quantum-resistant Encryption',
    'IoT Security Protocols'
  ];

  const pricing = [
    {
      plan: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        '24/7 monitoring',
        'Email support',
        'Basic reporting'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Advanced AI threat detection',
        'Real-time monitoring',
        'Threat intelligence feeds',
        'Incident response',
        'Priority support',
        'Advanced analytics',
        'Compliance reporting',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Full AI cybersecurity suite',
        'Custom threat models',
        'Dedicated security team',
        'SLA guarantees',
        'On-site support',
        'Custom development',
        'Advanced compliance',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Cybersecurity Threat Intelligence - Zion Tech Group"
        description="Protect your business with AI-powered cybersecurity threat intelligence. Real-time threat detection, behavioral analytics, and automated response capabilities."
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
            <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                {' '}Cybersecurity Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay ahead of cyber threats with our advanced AI-powered cybersecurity platform. Real-time threat detection,
              behavioral analytics, and automated response capabilities that protect your business 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Protected</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                <span>View Pricing</span>
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
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-400">Threat Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">&lt;100ms</div>
              <div className="text-slate-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40-60%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Protection</div>
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
              Advanced Security
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Features
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge technology with comprehensive security
              features to protect your business from all types of cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
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
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI cybersecurity platform is tailored to meet the unique security challenges of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-red-400/20 text-red-400 text-sm rounded-full">
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
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Security Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI cybersecurity platform delivers quantifiable results that directly improve your security posture.
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
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Security Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on the latest AI and cybersecurity technologies to deliver superior protection and threat intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Security Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the perfect cybersecurity plan for your business. All plans include a 30-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-red-400/50 scale-105'
                    : 'border-slate-700/50 hover:border-red-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.plan === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-400 to-orange-500 text-white hover:from-red-500 hover:to-orange-600'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
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
              Ready to Secure Your
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Digital Assets?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our AI-powered cybersecurity platform
              to protect their digital infrastructure and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Protected</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}