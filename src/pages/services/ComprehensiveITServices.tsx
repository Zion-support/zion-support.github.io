import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Database, Network, Zap, Star, CheckCircle, Users, Globe, Cpu, Lock, Building, BarChart3, Clock, Award, Phone, Mail as MailIcon, MapPin, Settings, Code, Database as DatabaseIcon, Shield as ShieldIcon, Globe as GlobeIcon } from 'lucide-react';
import { comprehensiveITServices } from '../../data/comprehensiveITServices';

export default function ComprehensiveITServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const serviceIcons: { [key: string]: React.ComponentType<any> } = {
    'Cloud Services': Cloud,
    'DevOps': Code,
    'Infrastructure': Server,
    'Networking': Network,
    'Data Protection': DatabaseIcon,
    'Security': ShieldIcon,
    'Integration': GlobeIcon
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Server className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
              Enterprise-grade IT solutions that modernize infrastructure, enhance security, and drive digital transformation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Cloud Migration</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">DevOps</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Infrastructure</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Security</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Networking</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Enterprise IT Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive IT services provide end-to-end solutions for modern enterprises, from cloud migration to security implementation and everything in between.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {comprehensiveITServices.map((service) => {
              const IconComponent = serviceIcons[service.category] || Server;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/30 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Starting at</span>
                        <span className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                          ${service.price.toLocaleString()}
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            {service.pricingModel === 'monthly' ? '/month' : ''}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">ROI</span>
                        <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                          {service.roi}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.estimatedDelivery}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Award className="w-4 h-4 mr-1" />
                        {service.innovationLevel}
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Market Size</span>
                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                          {service.marketSize}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-slate-600 to-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-slate-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-105">
                        Learn More
                      </button>
                      <button className="px-6 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine deep technical expertise with industry best practices to deliver reliable, scalable, and secure IT solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Security First</h3>
              <p className="text-gray-600 dark:text-gray-300">Enterprise-grade security and compliance</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Round-the-clock technical support</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Track record of successful implementations</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Let's discuss how our comprehensive IT services can help you achieve your technology goals and drive business transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MailIcon className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}