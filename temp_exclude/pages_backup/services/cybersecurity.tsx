import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Eye, Shield, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const securityServices = [
  {
    icon: Eye,
    title: 'Threat Monitoring',
    description: '24/7 security monitoring and threat detection'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid response to security incidents and breaches'
  },
  {
    icon: CheckCircle,
    title: 'Compliance',
    description: 'GDPR, HIPAA, SOX, and other regulatory compliance'
  },
  {
    icon: ArrowRight,
    title: 'Security Training',
    description: 'Employee security awareness and training programs'
  }
];

export default function CybersecurityPage() {

export default function CybersecurityPage() {

  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity services to protect your business from threats. Advanced security solutions, compliance, and 24/7 monitoring."
      keywords="cybersecurity, security services, data protection, threat monitoring, compliance, security audit"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}

        <section className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions.
                Advanced threat protection, compliance, and 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* CTA Section */}

        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our cybersecurity team to discuss your security requirements
              and discover how we can help protect your business from threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Contact Security Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Security Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
    </>

  );
}