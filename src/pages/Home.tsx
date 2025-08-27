import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building } from 'lucide-react';
import { SEO, SEOPresets } from '../components/SEO';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import EnhancedStatsSection from '../components/EnhancedStatsSection';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const quickActions = [
    {
      name: 'AI Solutions',
      description: 'Explore our AI-powered business solutions',
      icon: Brain,
      href: '/services/ai-business-intelligence',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cloud Services',
      description: 'Scalable cloud infrastructure and DevOps',
      icon: Cloud,
      href: '/services/cloud-devops',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security and compliance solutions',
      icon: Shield,
      href: '/services',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'Digital Transformation',
      description: 'Transform your business with modern tech',
      icon: Zap,
      href: '/solutions',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      <SEO {...SEOPresets.home} />
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
              {/* Enhanced Hero Section */}
        <EnhancedHeroSection />
        
        {/* Quick Actions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
              <p className="text-zion-slate-light text-lg">Get started with our most popular services</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <a
                    href={action.href}
                    className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{action.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{action.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enhanced Stats Section */}
      <EnhancedStatsSection />
      
      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />
      
      {/* Enhanced Testimonials Section */}
      <EnhancedTestimonialsSection />
      
      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Digital Transformation?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8"
            >
              Join hundreds of businesses that have already transformed their operations with Zion Tech Group's cutting-edge solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      </div>
    </>
  );
}
