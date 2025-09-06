import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Zap, Target, Users, BarChart3, ArrowRight, CheckCircle, Star, Award, Clock, Globe } from 'lucide-react';

const services = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs',
    icon: Brain,
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: 'Starting at $5,000/month',
    icon: '🤖',
    link: '/ai-services'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization'],
    pricing: 'Starting at $2,000/month',
    icon: '☁️',
    link: '/services/cloud'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business',
    icon: Shield,
    features: ['Threat Detection', 'Security Audits', 'Data Protection', 'Compliance'],
    pricing: 'Starting at $1,500/month',
    icon: '🔒',
    link: '/services/cybersecurity'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform data into actionable business insights',
    icon: BarChart3,
    features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Reporting'],
    pricing: 'Starting at $1,800/month',
    icon: '📊',
    link: '/services/data-analytics'
  }
];


export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group | AI, Cloud, Blockchain & IT Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud solutions, blockchain, IoT platforms, and micro SAAS solutions. Expert IT services for modern businesses." />
        <meta name="keywords" content="AI development services, cloud solutions, blockchain development, IoT platforms, micro SAAS, cybersecurity, web development, data analytics" />
      </Head>


      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business 
                with AI, cloud services, cybersecurity, and data analytics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link

                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

            ))}
          </div>
        </section>

        {/* CTA Section */}

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our technology solutions can accelerate your growth</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </section>
export default ServicesIndex;
      </div>
    </>
  );
}
      </div>
    </>

  );
}
