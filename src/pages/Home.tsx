import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, Star, TrendingUp, Award, Target } from 'lucide-react';
import { SEO, SEOPresets } from '../components/SEO';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import EnhancedHeroSection from '../components/EnhancedHeroSection';
import EnhancedStatsSection from '../components/EnhancedStatsSection';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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

  const interactiveFeatures = [
    {
      icon: Star,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and insights powered by our advanced AI algorithms.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and analytics to track your business growth and success metrics.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Enterprise-grade quality standards with 99.9% uptime and comprehensive support.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven strategic planning and roadmap development for your digital transformation.',
      color: 'from-orange-500 to-red-500'
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

        {/* Interactive Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge solutions and unparalleled expertise
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Interactive Feature Cards */}
              <div className="space-y-4">
                {interactiveFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setActiveFeature(index)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeFeature === index 
                        ? 'bg-white/10 border-zion-cyan/50 shadow-lg shadow-zion-cyan/25' 
                        : 'bg-white/5 border-white/10 hover:bg-white/8'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Visualization */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gradient-to-br from-zion-slate-dark to-zion-slate rounded-2xl border border-white/10 overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0">
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="absolute top-1/4 left-1/4 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl"
                    />
                    <motion.div
                      animate={{ 
                        rotate: -360,
                        scale: [1, 0.9, 1]
                      }}
                      transition={{ 
                        duration: 25, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-zion-purple/20 rounded-full blur-xl"
                    />
                  </div>
                  
                  {/* Feature highlight */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center text-white"
                    >
                      <div className={`w-24 h-24 bg-gradient-to-r ${interactiveFeatures[activeFeature].color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <interactiveFeatures[activeFeature].icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{interactiveFeatures[activeFeature].title}</h3>
                      <p className="text-zion-slate-light max-w-xs mx-auto">
                        {interactiveFeatures[activeFeature].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
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
