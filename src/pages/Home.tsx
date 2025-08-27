
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, Globe, Users, TrendingUp, Star, ArrowRight, Brain, Cloud, Lock, Rocket } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Shield,
      color: "text-purple-400"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: Zap,
      color: "text-yellow-400"
    }
  ];

  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      color: "from-green-500 to-blue-600"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: TrendingUp,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 15,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 12,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Lock,
      href: "/services/cybersecurity",
      count: 18,
      color: "from-purple-500 to-orange-500"
    },
    {
      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation guidance",
      icon: Rocket,
      href: "/services/consulting",
      count: 9,
      color: "from-orange-500 to-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold">Loading Zion Tech Group</h2>
          <p className="text-gray-400 mt-2">Preparing your digital transformation journey...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-futuristic">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
        </div>
      </div>

      {/* IT Service Request Hero - Enhanced */}
      <ITServiceRequestHero />

      {/* Main Hero Section */}
      <HeroSection />
      
      {/* Enhanced Service Categories Overview */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-medium text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                        {category.count} services
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <Link
                      to={category.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Join hundreds of companies that have transformed their business with Zion Tech Group.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Services Showcase */}
      <AIServicesShowcase />

      {/* Enhanced Features Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white w-fit mb-6`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/ai-services"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Sections */}
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      
      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join the future of technology with Zion Tech Group. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
