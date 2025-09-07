import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Project completion success"
    },
    {
      icon: FileText,
      title: "AI Document Processing",
      description: "Advanced AI-powered document intelligence and automation",
      href: "/services/ai-intelligent-document-processing",
      color: "from-blue-500 to-cyan-500",
      features: ["OCR & Data Extraction", "Intelligent Classification", "Process Automation", "Compliance & Security"]
    },
    {
      icon: Video,
      title: "AI Video Analytics",
      description: "Real-time video intelligence and behavioral analytics",
      href: "/services/ai-video-analytics-platform",
      color: "from-purple-500 to-pink-500",
      features: ["Object Detection", "Behavioral Analysis", "Anomaly Detection", "Real-time Processing"]
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating",
      description: "Client satisfaction score"
    }
  ];

  const innovativeServices = [
    {
      icon: Brain,
      title: "AI Customer Success Platform",
      description: "Intelligent platform that predicts churn, automates onboarding, and personalizes customer experiences.",
      features: ["Predictive churn analysis", "Automated workflows", "Real-time health scoring"],
      path: "/services/ai-customer-success-platform",
      price: "$1,999 - $5,999/month",
      category: "AI & Analytics",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["40% churn reduction", "60% LTV increase", "80% automation"]
    },
    {
      icon: Shield,
      title: "AI Threat Intelligence Platform",
      description: "Advanced cybersecurity platform with AI-powered threat detection and automated incident response.",
      features: ["Real-time threat detection", "Automated response", "Compliance monitoring"],
      path: "/services/ai-threat-intelligence-platform",
      price: "$3,999 - $12,999/month",
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["70% faster response", "85% accuracy", "60% automation"]
    },
    {
      icon: Cloud,
      title: "Cloud FinOps Optimizer",
      description: "Intelligent cloud cost optimization platform that reduces spending while improving performance.",
      features: ["Cost optimization", "Performance monitoring", "Automated scaling"],
      path: "/services/cloud-finops-optimizer",
      price: "$2,499 - $7,999/month",
      category: "Cloud & DevOps",
      rating: 4.7,
      reviewCount: 156,
      highlights: ["30% cost reduction", "Improved performance", "Automated scaling"]
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Analytics",
      description: "Intelligent business solutions powered by artificial intelligence",
      icon: "🤖",
      href: "/ai-services",
      count: 15,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: "🔒",
      href: "/services",
      count: 8,
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automation",
      icon: "☁️",
      href: "/services",
      count: 12,
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business process modernization",
      icon: "🚀",
      href: "/services",
      count: 10,
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Micro SaaS",
      description: "Productized software solutions for specific business needs",
      icon: "💻",
      href: "/micro-saas",
      count: 25,
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "IT Infrastructure",
      description: "Robust IT infrastructure and network management",
      icon: "🏗️",
      href: "/it-services",
      count: 6,
      color: "from-orange-600 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      <HeroSection />
      <QuickAccess />
      <AIServicesShowcase />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
import { AnimatedBackground, FloatingParticles } from "@/components/ui/AnimatedBackground";
// Lazy load heavy components for better performance
const InteractiveServiceShowcase = React.lazy(() => import('@/components/InteractiveServiceShowcase'));
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
    name: "AI & Analytics",
    description: "Cutting-edge artificial intelligence and data analytics solutions",
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
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-center mb-6 leading-relaxed">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// CTA section
const CTASection = React.memo(() => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of companies already leveraging our cutting-edge technology 
            solutions to stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Consultation
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zion-slate-dark font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home component
const Home: React.FC = () => {
  const handleGetStarted = () => {
    // Handle get started action

    console.log('Get started clicked');
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing expertise, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, cybersecurity, cloud computing, Zion Tech Group"
      />
      
      <FuturisticBackground />

      <HeroSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <FeaturedServices />

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
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
