
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOEnhancer } from '../components/SEOEnhancer';
import { PerformanceMonitor } from '../components/PerformanceMonitor';
import { AccessibilityPanel } from '../components/AccessibilityPanel';
import { 
  RocketLaunchIcon, 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "John Smith",
      role: "CTO, TechCorp",
      company: "TechCorp",
      content: "Zion Tech Group transformed our infrastructure and helped us achieve 40% cost savings while improving performance.",
      avatar: "J",
      color: "bg-blue-500"
    },
    {
      name: "Sarah Johnson",
      role: "CEO, InnovateLab",
      company: "InnovateLab",
      content: "Their AI solutions helped us automate 70% of our manual processes, saving us countless hours every week.",
      avatar: "S",
      color: "bg-green-500"
    },
    {
      name: "Mike Chen",
      role: "VP Engineering, DataFlow",
      company: "DataFlow",
      content: "The cybersecurity implementation was seamless and gave us peace of mind with our sensitive data.",
      avatar: "M",
      color: "bg-purple-500"
    }
  ];

  const services = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description: "Machine learning, natural language processing, and computer vision solutions to automate and optimize your business processes.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision Systems", "Predictive Analytics"],
      color: "from-blue-500 to-cyan-500",
      borderColor: "hover:border-blue-400/50",
      linkColor: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: CloudIcon,
      title: "Cloud & DevOps",
      description: "Cloud migration, infrastructure automation, and DevOps practices to accelerate your development and deployment cycles.",
      features: ["Cloud Migration & Strategy", "Infrastructure as Code", "CI/CD Pipeline Automation", "Container Orchestration"],
      color: "from-green-500 to-emerald-500",
      borderColor: "hover:border-green-400/50",
      linkColor: "text-green-400 hover:text-green-300"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and compliance frameworks.",
      features: ["Threat Detection & Response", "Vulnerability Assessment", "Compliance & Governance", "Security Architecture"],
      color: "from-red-500 to-pink-500",
      borderColor: "hover:border-red-400/50",
      linkColor: "text-red-400 hover:text-red-300"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", color: "text-blue-400" },
    { value: "1000+", label: "Projects Delivered", color: "text-green-400" },
    { value: "99.9%", label: "Uptime SLA", color: "text-purple-400" },
    { value: "24/7", label: "Support Available", color: "text-cyan-400" }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <SEOEnhancer />
      <PerformanceMonitor isVisible={isVisible} />
      
      {/* Accessibility Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => setIsAccessibilityOpen(true)}
        className="fixed bottom-4 left-4 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 z-40"
        aria-label="Open accessibility settings"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </motion.button>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
            <motion.div 
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6"
                variants={itemVariants}
              >
                <RocketLaunchIcon className="w-4 h-4 mr-2" />
                Leading AI & Technology Solutions
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Leading provider of innovative technology solutions, AI-powered services, 
                and digital transformation expertise. We help businesses thrive in the digital age 
                with cutting-edge AI, cloud computing, and cybersecurity solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                variants={itemVariants}
              >
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
                >
                  Start Your Transformation
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center"
                >
                  Explore Services
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center space-x-8 text-sm text-gray-400"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Trusted by 500+ Companies
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse animation-delay-1000"></div>
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse animation-delay-2000"></div>
                  ISO 27001 Certified
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions to drive your business forward and stay ahead of the competition
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-slate-700/50 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="text-gray-400 text-sm mb-6 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`${service.linkColor} font-medium transition-colors duration-300 inline-flex items-center group/link`}
                  >
                    Learn More 
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-lg group"
              >
                View All Services
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="space-y-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">About Zion Tech Group</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We are a team of passionate technologists dedicated to helping businesses 
                  navigate the complex landscape of modern technology. With years of experience 
                  in AI, cloud computing, and digital transformation, we deliver solutions 
                  that drive real business value.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our mission is to empower organizations with cutting-edge technology 
                  solutions that enable growth, efficiency, and innovation in an ever-evolving digital world.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "ISO 27001 & SOC 2 Type II Certified",
                    "Microsoft Gold Partner & AWS Advanced Partner",
                    "Expert Team with 15+ Years Experience"
                  ].map((certification, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {certification}
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center group"
                >
                  Learn More About Us
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <motion.div 
                  className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center relative z-10">
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-white font-bold text-3xl">Z</span>
                    </motion.div>
                    <p className="text-white/80 text-lg">Innovation • Excellence • Growth</p>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't just take our word for it - hear from the businesses we've helped transform
              </p>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    className={`bg-slate-700/30 p-6 rounded-xl border border-white/10 transition-all duration-300 ${
                      index === currentTestimonial ? 'border-blue-400/50 bg-slate-700/50' : ''
                    }`}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Testimonial Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-400 w-8' : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss how our technology solutions can help you achieve your goals 
                and stay ahead of the competition. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/careers"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  Join Our Team
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Free consultation • No commitment required • Response within 24 hours
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Accessibility Panel */}
      <AccessibilityPanel 
        isVisible={isAccessibilityOpen} 
        onClose={() => setIsAccessibilityOpen(false)} 
      />
    </>
  );
}
