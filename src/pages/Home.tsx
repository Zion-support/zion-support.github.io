import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';


import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Target as TargetIcon
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEOConfigs } from '../components/SEOHead';
import { motion } from 'framer-motion';

// Lazy load components for better performance
const LazyServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const LazyFeaturesSection = React.lazy(() => import('../components/home/FeaturesSection'));
const LazyTestimonialsSection = React.lazy(() => import('../components/home/TestimonialsSection'));
const LazyCTASection = React.lazy(() => import('../components/home/CTASection'));

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
    <span className="ml-3 text-gray-600">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"]
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"]
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"]
    }
  ];

export function Home() {
  const featuredServices = COMPREHENSIVE_SERVICES.slice(0, 6);
  
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Global Clients', value: '50+', icon: Globe },
    { label: 'Team Members', value: '25+', icon: Users },
  ];

  const testimonials = [
    {
      title: "AI Autonomous Code Review",
      description: "Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues using advanced AI algorithms.",
      icon: Code,
      path: "/services/ai-autonomous-systems",
      features: ["Automated Analysis", "Security Detection", "Performance Optimization", "Team Collaboration"],
      price: "$399/month",
      category: "AI & Development"
    },
    {
      title: "Zero Trust Security",
      description: "Advanced zero trust security architecture with continuous verification, micro-segmentation, and automated threat response for enterprise-grade protection.",
      icon: Shield,
      path: "/enhanced-services-showcase",
      category: "Cybersecurity",
      price: "$3,500/mo",
      rating: 4.9,
      reviewCount: 203,
      highlights: ["Zero Trust", "Micro-segmentation", "Continuous Verification", "Automated Response"],
      features: ["Identity Management", "Network Security", "Threat Detection", "Compliance", "24/7 Monitoring", "AI-Powered Analytics"]
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified multi-cloud management platform with cost optimization, performance monitoring, and automated resource management across all cloud providers.",
      icon: Cloud,
      path: "/enhanced-services-showcase",
      category: "Cloud & DevOps",
      price: "$2,800/mo",
      rating: 4.8,
      reviewCount: 156,
      highlights: ["Multi-Cloud", "Cost Optimization", "Unified Management", "Automation"],
      features: ["AWS/Azure/GCP", "Cost Management", "Performance Monitoring", "Security", "Automation", "Compliance"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliant with military-grade encryption and zero-trust architecture"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with 99.9% uptime guarantee and global CDN"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Cutting-edge artificial intelligence and machine learning capabilities"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support in multiple languages with dedicated success managers"
    }
  ];

  const latestTechnologies = [
    {
      name: "Quantum Computing",
      description: "Next-generation quantum algorithms and quantum-resistant security",
      icon: "⚛️",
      status: "Available Now"
    },
    {
      name: "AI Autonomous Systems",
      description: "Self-managing AI systems that learn and adapt continuously",
      icon: "🧠",
      status: "Available Now"
    },
    {
      name: "Blockchain & Web3",
      description: "Decentralized solutions for transparency and trust",
      icon: "🔗",
      status: "Available Now"
    },
    {
      name: "5G Enterprise Solutions",
      description: "Ultra-fast connectivity for enterprise applications",
      icon: "📡",
      status: "Available Now"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, heroSlides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...SEOConfigs.home} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift"
          >
            Future of Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
          >
            Transform your business with cutting-edge AI solutions, quantum computing, and autonomous systems. 
            We're not just building the future—we're living it.
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 neon-button"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/enhanced-services-showcase"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              aria-label="View our enhanced innovative services"
            >
              Enhanced Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
              <div className="text-lg font-semibold text-zion-slate-light mb-1">{stat.label}</div>
              <div className="text-sm text-zion-slate-light">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge technology solutions designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="futuristic-card p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-lg">
                    <service.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-zion-cyan">{service.price}</span>
                  <Link
                    to={service.path}
                    className="inline-flex items-center space-x-2 text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Enhanced Services Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enhanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Innovative Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our cutting-edge technology solutions designed to transform your business with AI, quantum computing, cybersecurity, and more
            </p>
            <Link
              to="/enhanced-services-showcase"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Explore Enhanced Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced AI solutions including business intelligence, content generation, video analytics, and predictive maintenance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">AI Analytics</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Content Generation</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Predictive ML</span>
              </div>
              <div className="text-2xl font-bold text-purple-400 mb-2">From $899/mo</div>
              <Link
                to="/enhanced-services-showcase"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Cybersecurity</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Enterprise-grade security solutions including zero trust architecture, threat detection, and cloud security.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Zero Trust</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Threat Detection</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Cloud Security</span>
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">From $1,800/mo</div>
              <Link
                to="/enhanced-services-showcase"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Cloud className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Cloud & DevOps</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced cloud infrastructure and DevOps automation with multi-cloud management and container orchestration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Multi-Cloud</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">CI/CD</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Kubernetes</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-2">From $1,800/mo</div>
              <Link
                to="/enhanced-services-showcase"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results. Our commitment to innovation and customer success sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Latest Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Technologies</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="futuristic-card p-6 text-center group"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-zion-slate-light mb-3">
                  {tech.description}
                </p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-xs text-zion-cyan">
                  {tech.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="futuristic-card p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge AI and technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 neon-button"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border-2 border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105"
              >
                <span>View Pricing</span>
                <Eye className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lazy Loaded Components */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <LazyServicesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <LazyFeaturesSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;