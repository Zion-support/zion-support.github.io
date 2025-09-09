import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  BarChart3,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Code,
  Key,
  Fingerprint,
  Bug,
  Virus,
  Fire,
  Zap,
  Target,
  Search,
  Filter,
  Download,
  Share2,
  Settings
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Advanced Threat Detection',
    description: 'AI-powered threat detection that identifies and blocks sophisticated cyber attacks in real-time.',
    benefits: ['Behavioral analysis', 'Machine learning', 'Real-time monitoring', 'Zero-day protection']
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    description: 'Secure user authentication and authorization with multi-factor authentication and role-based access.',
    benefits: ['Multi-factor auth', 'Single sign-on', 'Role management', 'Privileged access']
  },
  {
    icon: Eye,
    title: 'Security Monitoring',
    description: '24/7 security monitoring with automated incident response and threat intelligence.',
    benefits: ['SIEM integration', 'Log analysis', 'Incident response', 'Threat hunting']
  },
  {
    icon: AlertTriangle,
    title: 'Vulnerability Management',
    description: 'Continuous vulnerability assessment and automated patch management.',
    benefits: ['Automated scanning', 'Risk scoring', 'Patch management', 'Compliance reporting']
  }
];

const useCases = [
  {
    title: 'Financial Services',
    description: 'Protect sensitive financial data and ensure regulatory compliance.',
    icon: Shield,
    metrics: ['PCI DSS compliance', 'Fraud detection', 'Data encryption', 'Audit trails']
  },
  {
    title: 'Healthcare',
    description: 'Secure patient data and maintain HIPAA compliance.',
    icon: Lock,
    metrics: ['HIPAA compliance', 'Patient privacy', 'Secure messaging', 'Access controls']
  },
  {
    title: 'E-commerce',
    description: 'Protect customer data and secure online transactions.',
    icon: Globe,
    metrics: ['Payment security', 'Customer data protection', 'Fraud prevention', 'SSL management']
  },
  {
    title: 'Government',
    description: 'Secure sensitive government information and critical infrastructure.',
    icon: Target,
    metrics: ['FedRAMP compliance', 'Classified data protection', 'Infrastructure security', 'Incident response']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$399',
    period: '/month',
    description: 'Perfect for small businesses with basic security needs.',
    features: [
      'Up to 50 users',
      'Basic threat detection',
      'Email security',
      'Basic monitoring',
      'Email support',
      'Standard reports'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$899',
    period: '/month',
    description: 'Ideal for growing businesses with advanced security requirements.',
    features: [
      'Up to 500 users',
      'Advanced threat detection',
      'Identity management',
      'Vulnerability scanning',
      'Priority support',
      'Advanced analytics',
      'Incident response',
      'Compliance tools'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,999',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade security.',
    features: [
      'Unlimited users',
      'Custom security solutions',
      'Advanced monitoring',
      '24/7 support',
      'Custom integrations',
      'Advanced analytics',
      'Custom ML models',
      'White-label options',
      'Advanced compliance',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Cybersecurity
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions. 
              Advanced threat detection, identity management, and 24/7 monitoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity platform provides multi-layered protection with advanced 
              AI capabilities and real-time threat intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity platform is designed to meet the unique security challenges 
              of different industries and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4 text-center text-sm">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-zion-cyan text-center">
                      • {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your security needs. 
              Start protecting your business today with enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan/50 bg-zion-cyan/5' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light text-sm">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our cybersecurity platform to protect 
              their digital assets and maintain compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}