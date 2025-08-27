
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Brain, Cloud, Shield, Zap, Globe, Cpu, Database, Network, Atom, Link as LinkIcon, Server, BarChart3, Users, Clock, Target, Eye, Lock, Smartphone, TrendingUp, Rocket, Heart, ShoppingCart, MessageCircle, BookOpen, HelpCircle, DollarSign, Gauge, Search, Shield as ShieldIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Network as NetworkIcon, Atom as AtomIcon, LinkIcon as LinkIcon2, Server as ServerIcon, BarChart3 as BarChart3Icon, Users as UsersIcon, Clock as ClockIcon, Target as TargetIcon, Eye as EyeIcon, Lock as LockIcon, Smartphone as SmartphoneIcon, TrendingUp as TrendingUpIcon, Rocket as RocketIcon, Heart as HeartIcon, ShoppingCart as ShoppingCartIcon, MessageCircle as MessageCircleIcon, BookOpen as BookOpenIcon, HelpCircle as HelpCircleIcon, DollarSign as DollarSignIcon, Gauge as GaugeIcon, Search as SearchIcon } from 'lucide-react';
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: () => <div className="w-8 h-8 bg-white rounded-full" />
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: () => <div className="w-8 h-8 bg-white rounded-full" />
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: () => <div className="w-8 h-8 bg-white rounded-full" />
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: () => <div className="w-8 h-8 bg-white rounded-full" />
    }
  ];

  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      href: "/services/ai-business-intelligence"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/ai-compliance-assistant"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: Users,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      href: "/services/ai-sales-copilot"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 15,
      color: "from-zion-cyan to-zion-blue",
      services: ["AI Business Intelligence", "AI Compliance Assistant", "AI Sales Copilot", "AI-Powered SEO", "Interview Assessment AI"]
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 12,
      color: "from-zion-blue to-zion-purple",
      services: ["Cloud DevOps", "IT Infrastructure", "FinOps Advisor", "Cloud FinOps Optimizer"]
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      href: "/services/cybersecurity",
      count: 18,
      color: "from-zion-purple to-zion-orange",
      services: ["Cybersecurity", "Security Headers CSP", "DSR Portal", "Zero Trust Architecture"]
    },
    {
      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation guidance",
      icon: Zap,
      href: "/services/consulting",
      count: 9,
      color: "from-zion-orange to-zion-green",
      services: ["Digital Twin", "Digital Transformation", "IT Consulting", "Transformation Services"]
    },
    {
      name: "Emerging Technologies",
      description: "Next-generation technologies for future-ready businesses",
      icon: Rocket,
      href: "/services",
      count: 8,
      color: "from-zion-green to-zion-cyan",
      services: ["Quantum Computing", "Blockchain", "IoT Edge", "Space Tech"]
    },
    {
      name: "Micro SaaS Solutions",
      description: "Productized software solutions for specific business needs",
      icon: ShoppingCart,
      href: "/micro-saas",
      count: 12,
      color: "from-zion-cyan to-zion-purple",
      services: ["Micro CRM", "Email Sequencer", "Returns Management", "Affiliate Tracking"]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered SEO",
      description: "Revolutionize your search rankings with machine learning algorithms",
      icon: Search,
      price: "From $199/month",
      href: "/services/ai-seo",
      category: "AI & ML"
    },
    {
      title: "Digital Twin",
      description: "Create virtual replicas of your physical systems with real-time monitoring",
      icon: Eye,
      price: "From $2,999/month",
      href: "/services/digital-twin",
      category: "Emerging Tech"
    },
    {
      title: "Quantum Computing",
      description: "Harness quantum power for complex problem-solving and optimization",
      icon: Atom,
      price: "From $5,999/month",
      href: "/services/quantum-computing",
      category: "Emerging Tech"
    },
    {
      title: "Blockchain Solutions",
      description: "Build transparent, secure, and efficient decentralized applications",
      icon: LinkIcon,
      price: "From $3,999/month",
      href: "/services/blockchain",
      category: "Emerging Tech"
    },
    {
      title: "Cloud DevOps",
      description: "Transform your infrastructure with automated deployment and scaling",
      icon: Server,
      price: "From $299/month",
      href: "/services/cloud-devops",
      category: "Cloud & DevOps"
    },
    {
      title: "IT Infrastructure",
      description: "Build robust, scalable IT infrastructure for your business",
      icon: Cpu,
      price: "From $499/month",
      href: "/services/it-infrastructure",
      category: "Cloud & DevOps"
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
        <div className="absolute top-1/2 left-1/4 animate-pulse delay-700">
          <div className="w-6 h-6 bg-green-400 rounded-full opacity-40 neon-glow"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-pulse delay-1000">
          <div className="w-5 h-5 bg-orange-400 rounded-full opacity-40 neon-glow"></div>
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
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-zion-cyan/30 transition-all duration-500 hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-zinc-400">Services</span>
                      <span className="text-sm font-bold text-zion-cyan">{category.count}+</span>
                    </div>
                    <div className="space-y-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {service}
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-sm text-zinc-500 italic">
                          +{category.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Link 
                    to={category.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Services Showcase */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white/10 to-white/5 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Featured</span> Services
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-zion-cyan/30 transition-all duration-500 hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold text-zion-cyan">{service.price}</span>
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Services Showcase */}
      <AIServicesShowcase />

      {/* Tech Solutions Section */}
      <TechSolutionsSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Team Expertise Section */}
      <TeamExpertiseSection />

      {/* Global Presence Section */}
      <GlobalPresenceSection />

      {/* Innovation Research Section */}
      <InnovationResearchSection />

      {/* Client Success Stories Section */}
      <ClientSuccessStoriesSection />

      {/* Technology Stack Section */}
      <TechnologyStackSection />

      {/* Security Compliance Section */}
      <SecurityComplianceSection />

      {/* Interactive Testimonials */}
      <InteractiveTestimonials />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
