
import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI-Powered Customer Success Automation",
      description: "Intelligent platform that automates customer onboarding, success tracking, and churn prevention using predictive analytics with 35% churn reduction.",
      category: "Micro SAAS",
      price: "$199/month",
      features: ["AI-driven health scoring", "Predictive churn detection", "Automated workflows", "Real-time insights"],
      path: "/services",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "AI-Powered Cybersecurity Suite",
      description: "Advanced cybersecurity platform using AI to detect threats 10x faster with 80% reduction in false positives.",
      category: "Cybersecurity",
      price: "$699/month",
      features: ["AI threat detection", "Behavioral analysis", "Automated response", "24/7 SOC monitoring"],
      path: "/services",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "AI-Quantum Hybrid Computing Platform",
      description: "Revolutionary platform combining classical AI with quantum computing for 1000x faster problem solving.",
      category: "Emerging Tech",
      price: "$999/month",
      features: ["Quantum-classical hybrid", "Quantum ML", "Optimization algorithms", "Future-proof technology"],
      path: "/services",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Database,
      title: "AI Healthcare Analytics Platform",
      description: "Intelligent healthcare platform improving diagnosis accuracy by 30% and reducing treatment costs.",
      category: "AI Solutions",
      price: "$599/month",
      features: ["Patient data analytics", "Disease prediction", "Treatment optimization", "Clinical decision support"],
      path: "/services",
      gradient: "from-red-500 to-orange-600"
    }
  ];

  const stats = [
    { label: "Services Available", value: "50+", icon: Zap },
    { label: "Innovation Levels", value: "4", icon: Star },
    { label: "Market Coverage", value: "$100B+", icon: TrendingUp },
    { label: "Support Levels", value: "4", icon: Users }
  ];

  const innovationLevels = [
    {
      level: "Revolutionary",
      description: "Breakthrough technologies that redefine industries and create new markets",
      examples: ["AI-Quantum Hybrid Computing", "Space Technology Platform", "Quantum Computing as a Service"],
      color: "text-purple-400 border-purple-400"
    },
    {
      level: "Cutting-edge",
      description: "Advanced solutions using latest AI and emerging technologies",
      examples: ["AI Cybersecurity Suite", "AI Healthcare Platform", "AI Financial Trading Platform"],
      color: "text-blue-400 border-blue-400"
    },
    {
      level: "Advanced",
      description: "Sophisticated solutions with proven track records and market validation",
      examples: ["AI Customer Success Automation", "AI Content Optimization", "AI Project Management"],
      color: "text-green-400 border-green-400"
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
});

// Loading fallback component
const LoadingFallback = ({ message }: { message: string })  => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-services",
    count: 25,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 18,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 12,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: "🚀",
    href: "/services/digital-transformation",
    count: 15,
    color: "from-green-500 to-cyan-600"
  },
  {
    name: "Infrastructure",
    description: "Robust IT infrastructure and network management solutions",
    icon: "🏗️",
    href: "/services/it-infrastructure",
    count: 10,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Consulting",
    description: "Strategic technology consulting and implementation guidance",
    icon: "💡",
    href: "/services/it-consulting",
    count: 14,
    color: "from-orange-500 to-green-600"
  },
  {
    name: "Emerging Tech",
    description: "Quantum computing, blockchain, and space technology solutions",
    icon: "⚡",
    href: "/services/quantum-computing",
    count: 8,
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "Healthcare Tech",
    description: "AI-powered healthcare and biotechnology solutions",
    icon: "🏥",
    href: "/services/healthcare-tech",
    count: 6,
    color: "from-pink-500 to-red-600"
  }
];

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

// Enhanced service categories with better descriptions
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-solutions",
    count: 15,
    color: "from-zion-cyan to-zion-blue"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud",
    count: 12,
    color: "from-zion-blue to-zion-purple"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/cybersecurity",
    count: 8,
    color: "from-zion-red to-zion-orange"
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: "🚀",
    href: "/services/transformation",
    count: 10,
    color: "from-zion-green to-zion-cyan"
  },
  {
    name: "Infrastructure",
    description: "Robust IT infrastructure and network management solutions",
    icon: "🏗️",
    href: "/services/infrastructure",
    count: 6,
    color: "from-zion-purple to-zion-pink"
  },
  {
    name: "Consulting",
    description: "Strategic technology consulting and implementation guidance",
    icon: "💡",
    href: "/services/consulting",
    count: 9,
    color: "from-zion-orange to-zion-green"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="particles" />
      <FloatingParticles count={20} />

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
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-transparent to-zion-purple/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
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
                variants={itemVariants}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-semibold border border-zion-cyan/30">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Service Showcase - Lazy Loaded */}
      <Suspense fallback={
        <div className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-12 bg-zion-cyan/20 rounded-lg mb-4 max-w-md mx-auto"></div>
                <div className="h-6 bg-zion-slate-light/20 rounded-lg max-w-2xl mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <InteractiveServiceShowcase />
      </Suspense>

      {/* Enhanced Featured Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-zion-slate-dark to-background"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* AI-Powered Solutions */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 backdrop-blur-md p-8 rounded-3xl border border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                    <p className="text-zion-cyan text-sm font-medium">Most Popular</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.
                </p>
                <Link 
                  to="/ai-solutions" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore AI Solutions
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div variants={itemVariants} className="group">
              <div className="bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 backdrop-blur-md p-8 rounded-3xl border border-zion-blue/30 hover:border-zion-blue/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-blue/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                    <p className="text-zion-blue text-sm font-medium">Enterprise Ready</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Build, deploy, and scale your applications with our enterprise-grade cloud infrastructure and automated DevOps practices.
                </p>
                <Link 
                  to="/services/cloud" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-blue to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-blue/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Cloud Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Quick Access Section */}
      <QuickAccess />

      {/* Enhanced Feature Highlights */}
      <FeatureHighlights />

      {/* Enhanced Feature CTAs */}
      <FeatureCTAs />

      {/* Enhanced Categories Section */}
      <CategoriesSection />

      {/* Enhanced Benefits Section */}
      <BenefitsSection />

      {/* Enhanced How It Works Section */}
      <HowItWorksSection />

      {/* Enhanced Featured Listings Section */}
      <FeaturedListingsSection />

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
