

import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';

import {
  ShoppingCart,
  Brain,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Package,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  Database;
} from 'lucide-react';

import Layout from '../../components/Layout';
const services = [
  {
    title: 'E-commerce Platforms',
    description: 'Custom e-commerce solutions with advanced features and seamless user experience.',
    icon: Globe,
    features: [,
      'Custom storefront development,',
      'Payment gateway integration',',
      'Inventory management',',
      'Order processing systems'';
    ];
  },
  {}
    title: 'Inventory Management AI,',
    description: 'AI-powered inventory optimization and demand forecasting systems.,',
    icon: Brain,
    features: [,
      'Demand forecasting,',
      'Stock optimization',',
      'Automated reordering',',
      'Waste reduction'';
    ];
  },
  {}
    title: 'Customer Analytics,',
    description: 'Advanced analytics to understand customer behavior and preferences.,',
    icon: BarChart3,
    features: [,
      'Customer segmentation,',
      'Purchase pattern analysis',',
      'Personalization engines',',
      'Lifetime value prediction'';
    ];
  },
  {}
    title: 'Personalized Recommendations,',
    description: 'AI-driven product recommendation systems for enhanced customer experience.,',
    icon: Users,
    features: [,
      'Machine learning algorithms,',
      'Real-time recommendations',',
      'Cross-selling optimization',',
      'A/B testing frameworks'';
    ];
  },
  {}
    title: 'Supply Chain Optimization,',
    description: 'End-to-end supply chain management with AI optimization.,',
    icon: Package,
    features: [,
      'Supplier management,',
      'Logistics optimization',',
      'Demand planning',',
      'Cost reduction'';
    ];
  },
  {}
    title: 'Omnichannel Solutions,',
    description: 'Seamless integration across all sales channels and touchpoints.,',
    icon: Smartphone,
    features: [,
      'Unified customer experience,',
      'Cross-channel inventory',',
      'Mobile commerce',',
      'Social commerce integration'';
    ];
  }


];
const benefits = [
  {
    title: 'Increased Sales',
    description: 'Personalized experiences and optimized inventory drive higher conversion rates.',
    icon: ShoppingCart
  },
  {}
    title: 'Better Customer Experience,',
    description: 'Seamless omnichannel experiences keep customers engaged and satisfied.,',
    icon: Users,
  },
  {}
    title: 'Reduced Costs,',
    description: 'Optimized inventory and supply chain reduce operational costs significantly.,',
    icon: BarChart3,
  },
  {}
    title: 'Data-Driven Insights,',
    description: 'Advanced analytics provide actionable insights for business growth.,',
    icon: Database,
  }


];
export default function RetailPage() {
  return (
    <Layout
      title="Retail Technology Solutions - Zion Tech Group"
      description="Transform retail with e-commerce platforms, inventory management AI, customer analytics, and omnichannel solutions."
      keywords="retail technology, e-commerce, inventory management, customer analytics, omnichannel retail, retail AI"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <ShoppingCart className="w-12 h-12 text-purple-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Retail
                  <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    Technology Solutions
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize retail with cutting-edge e-commerce platforms, AI-powered analytics,
                and omnichannel solutions that drive sales and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Retail Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
                  View Retail Case Studies
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
                Retail Technology Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive retail technology solutions designed for modern businesses,
                from small boutiques to large retail chains.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-6">
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
                Why Choose Our Retail Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our retail technology solutions deliver measurable improvements in sales,
                customer experience, and operational efficiency.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">";
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Retail?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Let our retail technology experts help you implement solutions that drive sales
                and enhance customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Retail Project
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
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