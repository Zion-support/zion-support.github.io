import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Zap, Eye, ArrowRight, Cpu, Database, Network, Globe, Users, TrendingUp, Target, CheckCircle, Clock, DollarSign, Brain, Key, Server, Cloud, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function QuantumCryptography() {

  const features = [
    {

      icon: Shield,
      title: 'Unbreakable Encryption',
      description: 'Quantum-resistant cryptographic algorithms that provide future-proof security'
    },
    {

      icon: Lock,
      title: 'Post-Quantum Security',
      description: 'Advanced security protocols designed to withstand quantum computing attacks'
    },
    {

      icon: Zap,
      title: 'Quantum Key Distribution',
      description: 'Secure key exchange using quantum entanglement principles'
    },
    {

      icon: Eye,
      title: 'Real-time Threat Detection',
      description: 'Instant identification and response to emerging security threats'
    }
  ];

  const capabilities = [
    {

      title: 'Quantum-Resistant Algorithms',
      description: 'Implementation of lattice-based, hash-based, and multivariate cryptographic schemes',
      icon: Cpu
    },
    {

      title: 'Secure Key Management',
      description: 'Advanced key generation, distribution, and rotation systems',
      icon: Key
    },
    {

      title: 'Hardware Security Modules',
      description: 'Tamper-resistant hardware for secure cryptographic operations',
      icon: Server
    },
    {

      title: 'Cloud Security Integration',
      description: 'Seamless integration with existing cloud security infrastructure',
      icon: Cloud
    }
  ];

  const benefits = [
    {

      title: 'Future-Proof Security',
      description: 'Protect your data against current and future quantum computing threats',
      icon: ShieldCheck
    },
    {

      title: 'Regulatory Compliance',
      description: 'Meet industry standards and government requirements for data protection',
      icon: CheckCircle
    },
    {

      title: 'Cost-Effective Protection',
      description: 'Prevent expensive data breaches and security incidents',
      icon: DollarSign
    },
    {

      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with cutting-edge security technology',
      icon: TrendingUp
    }
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$8,999',
      period: 'one-time',
      features: [
        'Basic quantum-resistant encryption',
        'Key management system',
        'Standard support',
        'Documentation and training'
      ],
      recommended: false
    },
    {

      plan: 'Professional',
      price: '$12,999',
      period: 'one-time',
      features: [
        'Advanced quantum algorithms',
        'Hardware security modules',
        'Priority support',
        'Custom integration',
        'Security audit'
      ],
      recommended: true
    },
    {

      plan: 'Enterprise',
      price: '$15,999',
      period: 'one-time',
      features: [
        'Full quantum cryptography suite',
        'Custom algorithm development',
        '24/7 dedicated support',
        'Compliance certification',
        'Ongoing security updates'
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 text-violet-400" />
              <span className="text-violet-400 font-medium">Quantum Cryptography</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Unbreakable Security for the
              <span className="text-gradient"> Quantum Era</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Next-generation cryptographic platform that leverages quantum computing principles to provide 
              unbreakable encryption, secure key distribution, and future-proof security for sensitive data and communications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Quantum Security
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
              Why Choose Quantum Cryptography?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Advanced security that stays ahead of emerging threats and quantum computing advances
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
                className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-700 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-400" />
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
              Comprehensive quantum cryptography solutions for enterprise security needs
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
                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-zion-slate-light text-lg">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Key Benefits
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your security posture with quantum-ready cryptography
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
                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect quantum cryptography solution for your organization
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
                    ? 'border-violet-500 shadow-violet-500/20' 
                    : 'border-zion-slate-700'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${

                  plan.recommended
                    ? 'bg-violet-500 hover:bg-violet-600 text-white'
                    : 'bg-zion-slate-700 hover:bg-zion-slate-600 text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Don't wait for quantum threats to become reality. Protect your organization today with 
              the most advanced cryptography available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Your Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Contact Sales Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-slate-900/50">
        <div className="container-responsive">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-violet-400" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-violet-400" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-violet-400" />
                <span className="text-zion-slate-light text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}