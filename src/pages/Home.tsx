import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      name: "AI Solutions",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: "🤖",
      href: "/ai-services",
      count: 20,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Edge & IoT",
      description: "Ultra-low latency edge computing and IoT platform solutions",
      icon: "⚡",
      href: "/services/edge-computing-platform",
      count: 8,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: "☁️",
      href: "/services/cloud-devops",
      count: 12,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: "🔒",
      href: "/services/ai-compliance-copilot",
      count: 10,
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Data Governance",
      description: "AI-powered data protection and compliance management",
      icon: "🛡️",
      href: "/services/ai-data-governance",
      count: 6,
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Customer Success",
      description: "AI-driven customer engagement and retention platforms",
      icon: "💝",
      href: "/services/ai-customer-success-platform",
      count: 5,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across industries"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Expert professionals and specialists"
    },
    {
      number: "25+",
      label: "Countries Served",
      description: "Global presence and reach"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Consistent high-quality delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of technology with cutting-edge AI solutions and innovative approaches 
              that transform businesses and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                  <div className="text-slate-300">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-slate-300 text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/30">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the future of technology with our cutting-edge services. Our team of experts is ready to help you implement these revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">📞 +1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">✉️ kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">📍 364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="https://ziontechgroup.com/services" 
                className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}