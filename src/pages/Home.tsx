
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { FloatingCTA } from "@/components/FloatingCTA";

// Stats data
const stats = [
  {
    value: "500+",
    label: "AI Solutions",
    description: "Deployed worldwide",
    icon: () => (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    value: "1000+",
    label: "Happy Clients",
    description: "Trust our expertise",
    icon: () => (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    value: "50+",
    label: "Countries",
    description: "Global presence",
    icon: () => (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    value: "24/7",
    label: "Support",
    description: "Always available",
    icon: () => (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033zm7.246 2.332a4.002 4.002 0 00-2.346-.033l-1.54-1.54A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l1.54 1.54a4.002 4.002 0 00-2.346.033z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light opacity-20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI solutions to quantum technology, we provide comprehensive services that drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Solutions",
                description: "Cutting-edge artificial intelligence services for modern businesses",
                icon: "🤖",
                link: "/ai-business-solutions"
              },
              {
                title: "Cloud Infrastructure",
                description: "Scalable cloud solutions for enterprise needs",
                icon: "☁️",
                link: "/cloud-infrastructure"
              },
              {
                title: "Cybersecurity",
                description: "Advanced security solutions to protect your digital assets",
                icon: "🔒",
                link: "/cybersecurity-suite"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-light p-8 rounded-lg border border-zion-slate hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of companies already leveraging our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </>
  );
}
