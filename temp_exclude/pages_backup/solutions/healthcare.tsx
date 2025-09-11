
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Database, 
  Users, 
  Activity, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Patient Management',
    description: 'Comprehensive patient data management and care coordination'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Full compliance with healthcare data protection regulations'
  },
  {
    icon: Activity,
    title: 'Health Analytics',
    description: 'Advanced analytics for patient outcomes and operational efficiency'
  },
  {
    icon: Users,
    title: 'Provider Management',
    description: 'Comprehensive provider and staff management solutions',
    benefits: ['Provider profiles', 'Scheduling', 'Communication', 'Performance tracking']
  }
];

export default function HealthcareSolutionsPage() {

  return (
    <Layout
      title="Healthcare Solutions - Zion Tech Group"
      description="Advanced healthcare technology solutions for hospitals, clinics, and healthcare providers. HIPAA compliant and patient-focused."
      keywords="healthcare solutions, HIPAA compliance, electronic health records, patient management, healthcare technology"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with secure, compliant, and intelligent technology solutions
                designed for modern healthcare providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  View Demo
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
                Healthcare-Focused Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built specifically for healthcare organizations with compliance, security, and patient care in mind.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-green-600" />
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
              Ready to Improve Healthcare Delivery?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our healthcare solutions team to discuss your specific requirements
              and discover how we can help transform your healthcare organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Contact Healthcare Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Healthcare Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
    </>

  );
}