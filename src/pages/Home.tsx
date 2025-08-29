import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Sparkles, Star, TrendingUp, Users, Award } from 'lucide-react';
import { SEO } from "@/components/SEO";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";

// Lazy load components for better performance
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"));
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"));
const ServicesShowcase = React.lazy(() => import("@/components/home/ServicesShowcase"));
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"));

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users, color: "from-zion-cyan to-zion-blue" },
    { label: "Projects Completed", value: "1000+", icon: Award, color: "from-zion-blue to-zion-purple" },
    { label: "Success Rate", value: "98%", icon: TrendingUp, color: "from-zion-purple to-zion-cyan" },
    { label: "Years Experience", value: "15+", icon: Star, color: "from-zion-cyan to-zion-blue" }
  ];

  return (
    <>
      <SEO
        title="Zion Tech Group - AI-Powered Business Solutions & IT Services"
        description="Transform your business with cutting-edge AI solutions, quantum technology, and innovative IT services. Expert consulting, development, and digital transformation."
        keywords="AI solutions, IT services, digital transformation, quantum computing, cybersecurity, cloud services, business intelligence"
        author="Zion Tech Group"
        url="https://ziontechgroup.com"
      />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-zion-slate/50 to-zion-slate-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>

        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-32 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <QuickAccess />
      </Suspense>

      {/* Feature Highlights Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-32 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <FeatureHighlights />
      </Suspense>

      {/* Services Showcase */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-32 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <ServicesShowcase />
      </Suspense>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>

        <div className="container-responsive relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Transform?</span>
              <Star className="w-4 h-4" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Let's Build the Future Together
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join the ranks of industry leaders who have already transformed their businesses with our cutting-edge technology solutions. The future is waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
              >
                <span>Start Your Journey</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
              
              <Link
                to="/services"
                className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Services</span>
                <motion.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  );
}
