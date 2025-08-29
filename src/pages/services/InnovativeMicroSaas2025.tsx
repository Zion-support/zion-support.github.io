import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Brain, Video, MessageCircle, Mail, Smartphone, Search, Calendar, Zap, Star, CheckCircle, Users, Globe, Cpu, Lock, Heart, Building, BarChart3, Clock, Award, Phone, Mail as MailIcon, MapPin, BookOpen, TrendingUp, Target, DollarSign } from 'lucide-react';
import { innovativeMicroSaas2025 } from '../../data/innovativeMicroSaas2025';

export default function InnovativeMicroSaas2025() {
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
    'Content Creation': BookOpen,
    'Video Production': Video,
    'Customer Service': MessageCircle,
    'Marketing': Mail,
    'Social Media': Smartphone,
    'SEO': Search,
    'Project Management': Calendar
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white">
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
                <ShoppingCart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Innovative Micro SaaS 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Revolutionary software-as-a-service solutions that leverage AI to automate, optimize, and transform business operations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">AI-Powered</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Automation</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Scalable</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Cloud-Native</span>
              <span className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">Innovative</span>
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
              Next-Generation SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative micro SaaS services combine cutting-edge AI technology with proven business models to deliver powerful, scalable solutions for modern businesses.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {innovativeMicroSaas2025.map((service) => {
              const IconComponent = serviceIcons[service.category] || ShoppingCart;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100 dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Starting at</span>
                        <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                          ${service.price.toLocaleString()}
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/{service.pricingModel}</span>
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
                        <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                          {service.marketSize}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-3">
                      <button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our innovative approach combines the best of AI technology with proven SaaS business models to deliver exceptional value.
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
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-600 dark:text-gray-300">Get up and running in weeks, not months</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Scalable Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">Grow with your business needs</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered</h3>
              <p className="text-gray-600 dark:text-gray-300">Leverage cutting-edge AI technology</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Focused Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">Specialized tools for specific needs</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI-Powered SaaS?
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Let's discuss how our innovative micro SaaS solutions can help you automate processes, improve efficiency, and drive growth.
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
                <Phone className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-orange-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MailIcon className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-orange-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-orange-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}