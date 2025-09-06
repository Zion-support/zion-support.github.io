

import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';

import {
  DollarSign,
  Brain,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lock,
  CreditCard,
  Database,
  FileText,
  Users;
} from 'lucide-react';

import Layout from '../../components/Layout';
const services = [
  {
    title: 'Blockchain Solutions',
    description: 'Secure, transparent, and efficient blockchain implementations for financial services.',
    icon: Shield,
    features: [,
      'Smart contract development,',
      'Cryptocurrency integration',',
      'Decentralized finance (DeFi)',',
      'Digital identity management'';
    ];
  },
  {}
    title: 'AI Trading Algorithms,',
    description: 'Advanced machine learning algorithms for automated trading and investment strategies.,',
    icon: Brain,
    features: [,
      'Algorithmic trading systems,',
      'Risk management AI',',
      'Market prediction models',',
      'Portfolio optimization'';
    ];
  },
  {}
    title: 'Digital Payment Systems,',
    description: 'Secure, scalable payment processing solutions for modern financial transactions.',',
    icon: CreditCard,
    features: [,
      'Payment gateway integration,',
      'Mobile payment solutions',',
      'Cross-border payments',',
      'Fraud detection systems'';
    ];
  },
  {}
    title: 'Risk Management AI,',
    description: 'AI-powered risk assessment and management tools for financial institutions.,',
    icon: TrendingUp,
    features: [,
      'Credit risk analysis,',
      'Market risk modeling',',
      'Operational risk assessment',',
      'Regulatory compliance monitoring'';
    ];
  },
  {}
    title: 'Fraud Detection Systems,',
    description: 'Real-time fraud detection and prevention using advanced AI and machine learning.,',
    icon: Lock,
    features: [,
      'Real-time transaction monitoring,',
      'Behavioral analysis',',
      'Pattern recognition',',
      'Automated alert systems'';
    ];
  },
  {}
    title: 'Regulatory Compliance Tools,',
    description: 'Automated compliance monitoring and reporting for financial regulations.,',
    icon: FileText,
    features: [,
      'KYC/AML automation,',
      'Regulatory reporting',',
      'Audit trail management',',
      'Compliance dashboards'';
    ];
  }


];
const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Bank-grade security measures protect sensitive financial data and transactions.',
    icon: Shield
  },
  {}
    title: 'Improved Efficiency,',
    description: 'Automated processes reduce manual work and increase operational efficiency.,',
    icon: BarChart3,
  },
  {}
    title: 'Better Risk Management,',
    description: 'AI-powered risk assessment helps make informed financial decisions.,',
    icon: TrendingUp,
  },
  {}
    title: 'Regulatory Compliance,',
    description: 'Built-in compliance tools ensure adherence to financial regulations.,',
    icon: FileText,
  }


];
export default function FinancePage() {
  return (
    <Layout
      title="Financial Technology Solutions - Zion Tech Group"
      description="Transform financial services with blockchain solutions, AI trading algorithms, digital payments, and risk management systems."
      keywords="fintech, blockchain solutions, AI trading, digital payments, risk management, financial technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="w-12 h-12 text-green-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Financial
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Technology Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionizing financial services with cutting-edge blockchain, AI, and digital payment solutions.
                Enhance security, efficiency, and compliance in your financial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Fintech Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  View Finance Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Financial Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive fintech solutions designed for banks, financial institutions,
                and fintech startups.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />

                        {feature}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Fintech Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our financial technology solutions deliver enhanced security, improved efficiency,
                and regulatory compliance for financial institutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}

                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>"
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>"
                </motion.div>;
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Financial Services?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Let our fintech experts help you implement cutting-edge financial technology
                solutions that enhance security and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Fintech Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                  Learn About Our Expertise
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );

}