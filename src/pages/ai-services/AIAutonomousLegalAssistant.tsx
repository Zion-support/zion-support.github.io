import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, Zap, ArrowRight, Brain, Search, Clock, DollarSign, CheckCircle, Users, TrendingUp, Target, Gavel, BookOpen, Lock, Database, Cloud, Phone, Mail, MapPin } from 'lucide-react';

export default function AIAutonomousLegalAssistant() {

  const features = [
    {

      icon: Scale,
      title: 'AI-Powered Legal Analysis',
      description: 'Advanced AI algorithms that analyze legal documents with human-level accuracy'
    },
    {

      icon: FileText,
      title: 'Contract Review Automation',
      description: 'Automated contract analysis that identifies risks, clauses, and compliance issues'
    },
    {

      icon: Shield,
      title: 'Risk Assessment',
      description: 'Intelligent risk identification and mitigation recommendations for legal documents'
    },
    {

      icon: Zap,
      title: 'Document Automation',
      description: 'Streamlined document generation and management for legal workflows'
    }
  ];

  const capabilities = [
    {

      title: 'Contract Analysis & Review',
      description: 'AI-powered analysis of contracts, agreements, and legal documents with instant risk assessment',
      icon: FileText
    },
    {

      title: 'Legal Research Assistant',
      description: 'Automated legal research, case law analysis, and precedent identification',
      icon: Search
    },
    {

      title: 'Compliance Monitoring',
      description: 'Real-time compliance tracking and regulatory requirement monitoring',
      icon: Shield
    },
    {

      title: 'Document Generation',
      description: 'Intelligent legal document creation with customizable templates and clauses',
      icon: BookOpen
    }
  ];

  const benefits = [
    {

      title: 'Time Savings',
      description: 'Reduce document review time by up to 80% with AI automation',
      icon: Clock
    },
    {

      title: 'Cost Reduction',
      description: 'Lower legal costs through efficient automation and reduced manual work',
      icon: DollarSign
    },
    {

      title: 'Risk Mitigation',
      description: 'Identify and address legal risks before they become problems',
      icon: Shield
    },
    {

      title: 'Improved Accuracy',
      description: 'Eliminate human errors with consistent AI-powered analysis',
      icon: CheckCircle
    }
  ];

  const pricing = [
    {

      plan: 'Professional',
      price: '$5,499',
      period: 'one-time',
      features: [
        'Basic contract analysis',
        'Risk assessment tools',
        'Document templates',
        'Standard support',
        'Training and onboarding'
      ],
      recommended: false
    },
    {

      plan: 'Enterprise',
      price: '$7,999',
      period: 'one-time',
      features: [
        'Advanced AI analysis',
        'Custom integrations',
        'Priority support',
        'Compliance monitoring',
        'Legal research tools',
        'Custom templates'
      ],
      recommended: true
    },
    {

      plan: 'Custom',
      price: 'Contact Us',
      period: 'custom',
      features: [
        'Full platform customization',
        'Dedicated support team',
        'API access',
        'White-label options',
        'Custom AI training',
        'SLA guarantees'
      ],
      recommended: false
    }
  ];

  const useCases = [
    {

      title: 'Corporate Legal Teams',
      description: 'Streamline contract management and compliance for large organizations',
      icon: Users
    },
    {

      title: 'Law Firms',
      description: 'Enhance client services with AI-powered legal research and document review',
      icon: Gavel
    },
    {

      title: 'In-House Counsel',
      description: 'Improve efficiency and reduce costs for internal legal departments',
      icon: Building
    },
    {

      title: 'Compliance Officers',
      description: 'Automate regulatory compliance monitoring and reporting',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Scale className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Legal Assistant</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Legal
              <span className="text-gradient"> Intelligence</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Transform your legal practice with AI that analyzes contracts, identifies risks, 
              and automates document review with unprecedented accuracy and speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Legal Assistant?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Advanced AI technology that revolutionizes legal document analysis and contract management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-zion-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive legal AI solutions that transform how you work with legal documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-800/30 backdrop-blur-sm border border-zion-slate-700 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-zion-slate-light text-lg">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Designed for legal professionals and organizations seeking to modernize their operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your legal practice with AI-powered efficiency and accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect AI legal assistant solution for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${

                  plan.recommended 
                    ? 'border-blue-500 shadow-blue-500/20' 
                    : 'border-zion-slate-700'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-zion-slate-light">{plan.period}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${

                  plan.recommended
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-zion-slate-700 hover:bg-zion-slate-600 text-white'
                }`}>
                  {plan.plan === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of legal technology with AI that works as hard as you do, 
              delivering faster, more accurate results every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}