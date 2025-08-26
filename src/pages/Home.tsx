<<<<<<< HEAD

const Home: React.FC = () => {
  return (
=======

import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UltimateServicesShowcase2027 } from "@/components/UltimateServicesShowcase2027";
import { FuturisticAnimatedBackground } from "@/components/FuturisticAnimatedBackground";

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Performance-optimized stats section
const StatsSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "500+", label: "Projects Delivered", description: "Successful implementations", icon: "🚀" },
    { value: "50+", label: "Expert Team", description: "Certified professionals", icon: "👥" },
    { value: "99.9%", label: "Uptime", description: "Reliable infrastructure", icon: "⚡" },
    { value: "24/7", label: "Support", description: "Always available", icon: "🛡️" }
  ];

  return (
    <section id="stats-section" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <FuturisticAnimatedBackground />
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
        Welcome to
        <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
          {' '}Zion Tech Group
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
      >
        Revolutionary AI-powered services, innovative Micro SAAS solutions, and cutting-edge IT infrastructure services designed to transform your business in 2027 and beyond.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/comprehensive-pricing-guide-2027"
          className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-4 px-8 rounded-xl hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
        >
          View All Services
        </Link>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border border-zion-cyan text-zion-cyan font-semibold py-4 px-8 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

// Contact Information Section
const ContactInfo = () => (
  <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8"
      >
        Get in Touch
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-zion-slate-dark/50 p-6 rounded-2xl border border-zion-cyan/20"
        >
          <div className="text-3xl mb-4">📱</div>
          <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
          <p className="text-zion-cyan">+1 302 464 0950</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zion-slate-dark/50 p-6 rounded-2xl border border-zion-cyan/20"
        >
          <div className="text-3xl mb-4">✉️</div>
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-zion-slate-dark/50 p-6 rounded-2xl border border-zion-cyan/20"
        >
          <div className="text-3xl mb-4">📍</div>
          <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
          <p className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Ultimate Services Showcase 2027 */}
      <UltimateServicesShowcase2027 />

      {/* Contact Information */}
      <ContactInfo />
    </>
>>>>>>> 8acf49b1dc41545217fe885b1b9a65c675989e84
  );
}
