import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Shield,
  Lock,
  Eye,
  FileText,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Users,
  Database,
  Globe,
  Zap,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIDataPrivacyCompliancePlatform() {

  const features = [
    {

      title: 'GDPR Compliance Automation',
      description: 'Automated GDPR compliance monitoring, data mapping, and consent management',
      icon: Shield,
      color: 'from-green-600 to-emerald-600'
    },
    {

      title: 'CCPA & LGPD Support',
      description: 'Comprehensive compliance for California, Brazil, and other privacy regulations',
      icon: Lock,
      color: 'from-blue-600 to-cyan-600'
    },
    {

      title: 'Data Discovery & Classification',
      description: 'AI-powered data discovery, classification, and risk assessment',
      icon: Eye,
      color: 'from-purple-600 to-pink-600'
    },
    {

      title: 'Privacy Impact Assessment',
      description: 'Automated PIA generation and risk evaluation for new projects',
      icon: FileText,
      color: 'from-orange-600 to-red-600'
    },
    {

      title: 'Consent Management',
      description: 'Centralized consent collection, tracking, and withdrawal management',
      icon: Users,
      color: 'from-indigo-600 to-purple-600'
    },
    {

      title: 'Data Subject Rights',
      description: 'Automated handling of data subject requests (access, deletion, portability)',
      icon: Database,
      color: 'from-teal-600 to-green-600'
    }
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their privacy journey',
      features: [
        'GDPR & CCPA compliance basics',
        'Data discovery up to 100GB',
        'Basic consent management',
        'Privacy policy generator',
        'Email support',
        'Monthly compliance reports'
      ],
      popular: false
    },
    {

      plan: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies with complex data operations',
      features: [
        'All Starter features',
        'Unlimited data discovery',
        'Advanced consent management',
        'Automated PIA generation',
        'Data subject rights automation',
        'Priority support',
        'Weekly compliance reports',
        'Custom integrations'
      ],
      popular: true
    },
    {

      plan: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large enterprises with global compliance requirements',
      features: [
        'All Professional features',
        'Multi-jurisdiction compliance',
        'Advanced risk analytics',
        'Custom workflow automation',
        'Dedicated compliance officer',
        '24/7 phone support',
        'Real-time compliance monitoring',
        'Custom reporting & dashboards'
      ],
      popular: false
    }
  ];

  const benefits = [
    {

      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Stay compliant with evolving privacy regulations worldwide'
    },
    {

      icon: Zap,
      title: 'Automated Workflows',
      description: 'Reduce manual compliance work by up to 80%'
    },
    {

      icon: TrendingUp,
      title: 'Risk Mitigation',
      description: 'Identify and address privacy risks before they become issues'
    },
    {

      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Avoid costly fines and legal fees from compliance violations'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6"
            >
              <Shield className="h-4 w-4 mr-2" />
              AI-Powered Privacy Compliance
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              AI Data Privacy
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Compliance Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Automate your data privacy compliance with AI-powered tools that keep you ahead of 
              evolving regulations like GDPR, CCPA, LGPD, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Privacy Compliance Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI-powered platform handles every aspect of data privacy compliance, 
              from automated discovery to regulatory reporting.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Transparent Pricing Plans
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose the plan that fits your compliance needs and scale as you grow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${

                  plan.popular 
                    ? 'border-blue-500 bg-gray-800/70 scale-105' 
                    : 'border-gray-700 hover:border-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Choose Our Platform?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Privacy Compliance?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies that trust our AI-powered platform to keep them compliant 
              and protect their customers' data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-blue-400 text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}