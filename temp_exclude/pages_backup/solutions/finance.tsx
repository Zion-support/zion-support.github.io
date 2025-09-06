
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Users, 
  Database, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Financial Analytics',
    description: 'Advanced analytics and reporting for financial institutions'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Bank-grade security with regulatory compliance built-in'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and management tools'
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Secure user management with role-based access control',
    benefits: ['User provisioning', 'Role management', 'Access control', 'Audit logs']
  }
];

export default function FinanceSolutionsPage() {

  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Secure financial technology solutions for banks, fintech companies, and financial institutions. Regulatory compliant and secure."
      keywords="finance solutions, fintech, banking technology, financial services, regulatory compliance, risk management"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Secure, compliant, and innovative financial technology solutions
                designed for modern financial institutions and fintech companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Financial Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for financial institutions with security, compliance, and performance as top priorities.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />

                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Financial Services?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our finance solutions team to discuss your specific requirements
              and discover how we can help modernize your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Finance Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Finance Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
    </>

  );
}