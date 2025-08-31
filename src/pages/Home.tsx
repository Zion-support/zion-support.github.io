import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Play
} from 'lucide-react';

// Import components
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

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      href: "/services/customer-success",
      count: 15,
      color: "from-pink-500 to-rose-600"
    }
  ];

  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"]
    },
    {
      title: "Micro SAAS Services",
      description: "Scalable software solutions tailored to your needs",
      icon: Zap,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your infrastructure for the future",
      icon: Rocket,
      features: ["Cloud Migration", "DevOps", "Security", "Compliance"]
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "from-cyan-400 to-blue-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: Shield,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      href: "/services/ai-business-intelligence",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/ai-compliance-assistant",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: Users,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. Expert consulting for the future of technology."
        keywords="AI solutions, quantum computing, digital transformation, business intelligence, cybersecurity, cloud services"
      />
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Future-Ready
                <br />
                <span className="text-white">Business Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and digital transformation services. 
                We help visionary companies build the future, today.
              </p>

              {/* Hero Carousel */}
              <div className="relative mb-12">
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <heroSlides[currentSlide].icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-2xl font-semibold">{heroSlides[currentSlide].title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{heroSlides[currentSlide].description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {heroSlides[currentSlide].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                {/* Slide indicators */}
                <div className="flex justify-center space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Explore Services
                  <Play className="inline-block w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                  <p className="text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered solutions to quantum computing, we offer the full spectrum of 
                cutting-edge technology services to drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={category.href}
                    className="block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">
                        {category.count} Services
                      </span>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Showcase */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, 
                enhance customer experiences, and unlock new growth opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={service.href}
                    className="block p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of forward-thinking companies that have already partnered with Zion Tech Group 
                to build their future-ready technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Schedule a Consultation
                  <ArrowRight className="inline-block w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
