import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Shield, Cloud, Database, Code, 
  BarChart3, Star, Zap, Sparkles, ArrowRight, CheckCircle,
  TrendingUp, Users, Globe, Cpu, Lock, Target, Award, Phone
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-micro-saas';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge Innovations',
    description: 'Beyond the future of technology',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    services: futuristic2028Services.slice(0, 4)
  },
  {
    title: '🎯 Practical Micro SAAS 2028',
    description: 'Real business solutions for today',
    icon: Target,
    color: 'from-blue-600 to-cyan-600',
    services: futuristic2028Services.slice(4, 8)
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    description: 'Quantum computing and space exploration',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    services: emergingTech2028Services.slice(0, 4)
  },
  {
    title: '🤖 AI & Machine Learning 2028',
    description: 'Next-generation AI solutions',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    services: emergingTech2028Services.slice(4, 8)
  }
];

const features = [
  {
    icon: Star,
    title: 'Industry Leading',
    description: 'First-to-market solutions with cutting-edge technology'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with quantum computing integration'
  },
  {
    icon: Shield,
    title: 'Enterprise Secure',
    description: 'Military-grade security with quantum encryption'
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Dedicated support and personalized solutions'
  }
];

export default function ServicesShowcase2028() {
  return (
    <>
      <Head>
        <title>2028 Revolutionary Services Showcase | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover our revolutionary 2028 services including AI Quantum Financial Trading, Neural Interface Development, Quantum Internet Infrastructure, and more cutting-edge solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2028 services, AI quantum trading, neural interface, quantum internet, autonomous manufacturing, AI marketing, healthcare AI, quantum cybersecurity&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/2028-services-showcase&quot; />
        
        {/* Open Graph */}
        <meta property=&quot;og:title&quot; content=&quot;2028 Revolutionary Services Showcase | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Discover our revolutionary 2028 services including AI Quantum Financial Trading, Neural Interface Development, and more cutting-edge solutions.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/2028-services-showcase&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:title&quot; content=&quot;2028 Revolutionary Services Showcase | Zion Tech Group&quot; />
        <meta name=&quot;twitter:description&quot; content=&quot;Discover our revolutionary 2028 services including AI Quantum Financial Trading, Neural Interface Development, and more cutting-edge solutions.&quot; />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black&quot;></div>
          <div className=&quot;absolute top-0 left-0 w-full h-full&quot;>
            <div className=&quot;absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse&quot;></div>
            <div className=&quot;absolute top-40 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
            <div className=&quot;absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000&quot;></div>
          </div>
        </div>

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;space-y-8&quot;
          >
            <div className=&quot;inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm&quot;>
              <Rocket className=&quot;w-4 h-4&quot; />
              <span>2028 Future Technology</span>
            </div>
            
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent&quot;>
                Revolutionary
              </span>
              <br />
              <span className=&quot;text-white&quot;>2028 Services</span>
            </h1>
            
            <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
              Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions that transform industries and redefine possibilities.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Get Started Today</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              
              <Link
                href=&quot;/pricing&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200 flex items-center space-x-2&quot;
              >
                <span>View Pricing</span>
                <TrendingUp className=&quot;w-5 h-5&quot; />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-black to-purple-900/10&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Why Choose Our <span className=&quot;bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>2028 Services</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              We combine cutting-edge technology with practical business solutions to deliver unprecedented value and performance.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center group&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-400 leading-relaxed&quot;>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className=&quot;py-20 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Our <span className=&quot;bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>Revolutionary Services</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Discover the future of technology with our comprehensive suite of innovative solutions designed for the modern digital landscape.
            </p>
          </motion.div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className=&quot;mb-20&quot;
            >
              <div className=&quot;flex items-center space-x-4 mb-12&quot;>
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <div>
                  <h3 className=&quot;text-3xl font-bold text-white&quot;>{category.title}</h3>
                  <p className=&quot;text-gray-400 text-lg&quot;>{category.description}</p>
                </div>
              </div>

              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className=&quot;group&quot;
                  >
                    <div className=&quot;bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25&quot;>
                      <div className=&quot;flex items-start justify-between mb-4&quot;>
                        <div className=&quot;text-4xl&quot;>{service.icon}</div>
                        {service.popular && (
                          <div className=&quot;px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold rounded-full&quot;>
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <h4 className=&quot;text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors&quot;>
                        {service.name}
                      </h4>
                      
                      <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                        {service.description}
                      </p>
                      
                      <div className=&quot;space-y-3 mb-6&quot;>
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className=&quot;flex items-center space-x-2&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                            <span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className=&quot;flex items-center justify-between mb-6&quot;>
                        <div className=&quot;text-2xl font-bold text-cyan-400&quot;>
                          {service.price}
                          <span className=&quot;text-gray-400 text-sm font-normal&quot;>{service.period}</span>
                        </div>
                        <div className=&quot;flex items-center space-x-1&quot;>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                            />
                          ))}
                          <span className=&quot;text-gray-400 text-sm ml-2&quot;>({service.reviews})</span>
                        </div>
                      </div>
                      
                      <div className=&quot;space-y-3 mb-6&quot;>
                        <div className=&quot;flex items-center justify-between text-sm&quot;>
                          <span className=&quot;text-gray-400&quot;>Setup Time:</span>
                          <span className=&quot;text-white&quot;>{service.setupTime}</span>
                        </div>
                        <div className=&quot;flex items-center justify-between text-sm&quot;>
                          <span className=&quot;text-gray-400&quot;>Trial:</span>
                          <span className=&quot;text-white&quot;>{service.trialDays} days</span>
                        </div>
                        <div className=&quot;flex items-center justify-between text-sm&quot;>
                          <span className=&quot;text-gray-400&quot;>Customers:</span>
                          <span className=&quot;text-white&quot;>{service.customers.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={service.link}
                        className=&quot;block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105&quot;
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white&quot;>
              Ready to Experience the <span className=&quot;bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>Future</span>?
            </h2>
            
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Join thousands of forward-thinking companies already transforming their business with our revolutionary 2028 services.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Start Your Journey</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              
              <a
                href={`tel:${contactInfo.mobile}`}
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200 flex items-center space-x-2&quot;
              >
                <span>Call {contactInfo.mobile}</span>
                <Phone className=&quot;w-5 h-5&quot; />
              </Link>
            </div>

            <div className=&quot;pt-8 border-t border-purple-500/30&quot;>
              <p className=&quot;text-gray-400&quot;>
                Need help choosing? Our experts are here to guide you to the perfect solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  );
}