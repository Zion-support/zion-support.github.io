import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Building,, Users,, Shield,, Zap,, CheckCircle,, ArrowRight} from 'lucide-react';
import Layout from '../../components/Layout';

const enterpriseFeatures = [
  {
    title: 'Scalable Infrastructure',
    icon: Building,
    description: 'Enterprise-grade infrastructure that scales with your business needs'
  },
  {
    title: 'Team Collaboration',
    icon: Users,
    description: 'Advanced collaboration tools for large teams and organizations'
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    description: 'Enterprise-level security and compliance with industry standards'
  },
  {
    title: 'High Performance',
    icon: Zap,
    description: 'Optimized performance for mission-critical applications'
  }
];

const enterpriseSolutions = [
  {
    title: 'Cloud Migration',
    description: 'Seamless migration to cloud infrastructure with zero downtime',
    features: ['Data Migration', 'Application Modernization', 'Security Implementation']
  },
  {
    title: 'AI Integration',
    description: 'Integrate AI capabilities into your existing enterprise systems',
    features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics']
  },
  {
    title: 'DevOps Automation',
    description: 'Automate your development and deployment processes',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting']
  }
];

export default function EnterpriseSolutions() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise solutions for large organizations"
      keywords="enterprise solutions, business solutions, corporate services, enterprise software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Comprehensive solutions for large organizations
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Transform your business with our enterprise-grade technology solutions
              </p>
              <Link href="/contact">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Features
              </h2>
              <p className="text-xl text-gray-600">
                Built for scale, security, and performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive enterprise solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today to discuss your enterprise needs
              </p>
              <Link href="/contact">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}