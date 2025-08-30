import React from 'react';
import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export function ComprehensiveServicesPage() {
  return (
    <>
      <Helmet>
        <title>Comprehensive Technology Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive portfolio of AI-powered micro SaaS solutions, cutting-edge IT services, and revolutionary AI platforms designed to transform your business." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, quantum computing, cybersecurity, cloud services, IoT, space technology, sustainability, enterprise solutions" />
        <meta property="og:title" content="Comprehensive Technology Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our innovative AI-powered services and cutting-edge technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services" />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive Technology Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our complete portfolio of innovative AI-powered micro SaaS solutions, 
              cutting-edge IT services, and revolutionary technology platforms designed to 
              transform your business and drive unprecedented growth.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-gray-400">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Showcase */}
        <EnhancedServicesShowcase />

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-20 bg-gray-800/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that drive real business transformation and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Innovation First',
                  description: 'We stay ahead of the curve with the latest AI, quantum computing, and emerging technologies.'
                },
                {
                  icon: '🎯',
                  title: 'Results Driven',
                  description: 'Every solution is designed to deliver measurable business impact and ROI for our clients.'
                },
                {
                  icon: '🔒',
                  title: 'Enterprise Grade',
                  description: 'Bank-level security, compliance, and scalability for mission-critical business operations.'
                },
                {
                  icon: '⚡',
                  title: 'Rapid Deployment',
                  description: 'Quick implementation and time-to-value with our proven deployment methodologies.'
                },
                {
                  icon: '🌍',
                  title: 'Global Expertise',
                  description: 'Deep knowledge across industries and technologies, from startups to Fortune 500 companies.'
                },
                {
                  icon: '💎',
                  title: 'Premium Support',
                  description: '24/7 expert support and dedicated success managers to ensure your success.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-700/70 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Technology Stack Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Cutting-Edge Technology Stack</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the most advanced technologies and frameworks to build robust, 
                scalable, and future-proof solutions for our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'AI & Machine Learning',
                'Quantum Computing',
                'Blockchain & Web3',
                'IoT & Edge Computing',
                'Cloud & DevOps',
                'Cybersecurity',
                'Data Analytics',
                'Space Technology',
                'Sustainability Tech',
                'Digital Twin',
                'Robotic Process Automation',
                'Natural Language Processing'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="text-gray-300 font-medium text-sm">{tech}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Success Metrics Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Success Metrics</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions have delivered exceptional results across industries, 
                helping businesses achieve unprecedented growth and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '95%', label: 'Client Satisfaction Rate', description: 'Consistently high satisfaction across all services' },
                { number: '10x', label: 'Performance Improvement', description: 'Average performance gains for our clients' },
                { number: '60%', label: 'Cost Reduction', description: 'Average operational cost savings achieved' },
                { number: '24/7', label: 'Support Availability', description: 'Round-the-clock expert support and monitoring' }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {metric.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{metric.label}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful businesses that have already transformed their operations 
              with our innovative technology solutions. Let's discuss how we can help you achieve 
              your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105"
              >
                ✉️ Email Us
              </a>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div>+1 302 464 0950</div>
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
