import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Star as StarIcon
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

<<<<<<< HEAD
<<<<<<< HEAD
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

  const seoMetadata = {
    title: "Zion Tech Group - AI-Powered Technology Solutions",
    description: "Transform your business with cutting-edge AI solutions, cloud services, and digital transformation expertise.",
    keywords: "AI solutions, cloud services, cybersecurity, digital transformation, IT consulting",
    image: "/images/zion-tech-group-hero.jpg"
  };

  const heroSlides = [
    {
      title: "AI-Powered Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      color: "from-green-400 to-teal-400"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Globe, number: "25+", label: "Countries Served" }
  ];

  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence for business automation",
      icon: Brain,
      link: "/ai-solutions",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and management",
      icon: Cloud,
      link: "/cloud-devops",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security and compliance solutions",
      icon: Shield,
      link: "/services/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business transformation services",
      icon: Zap,
      link: "/digital-transformation",
      color: "from-green-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our infrastructure with AI-powered solutions that increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The autonomous business platform revolutionized our operations. We've never been more efficient or scalable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "Outstanding service and cutting-edge technology. Zion Tech Group is our trusted partner for innovation.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment"
    },
    {
      icon: Lock,
      title: "Secure by Design",
      description: "Enterprise-grade security built into every solution"
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Grow without limits with our flexible infrastructure"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Intelligent automation and decision making"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, heroSlides.length]);

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
=======
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
<<<<<<< HEAD
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { HomePageSEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { MicroSaasShowcase } from "@/components/home/MicroSaasShowcase";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { EnhancedServicesShowcase } from "@/components/home/EnhancedServicesShowcase";
import { BottomNavigation } from "@/components/MobileNavigation";
import { MicroSaasServicesSection } from "@/components/home/MicroSaasServicesSection";
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
import { ServicesOverview } from "@/components/home/ServicesOverview";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
import { FloatingCTA } from "@/components/FloatingCTA";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...seoMetadata} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Animated Hero Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center z-10 px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className={`bg-gradient-to-r ${heroSlides[currentSlide].color} bg-clip-text text-transparent`}>
                {heroSlides[currentSlide].title}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link to={service.link}>
                  <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
=======
    <div className="min-h-screen bg-background">
      <HomePageSEO />
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]"></div>
      
=======
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Users, Globe, Database, ArrowRight, CheckCircle, Star, Award, Rocket, Target, Brain, Cloud, Lock, BarChart3 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ContactInfo } from "@/components/ContactInfo";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
import { FloatingCTA } from "@/components/FloatingCTA";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
=======
import { ComprehensiveServicesShowcase } from "@/components/home/ComprehensiveServicesShowcase";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
=======
import { ServicesOverview } from "@/components/ServicesOverview";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
=======
import { FuturisticBackground } from "@/components/FuturisticBackground";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions with 24/7 monitoring and threat detection",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-zion-purple" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI and machine learning services for business automation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8 text-zion-blue" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with DevOps and infrastructure management",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Database className="w-8 h-8 text-zion-green" />,
      title: "Data Analytics",
      description: "Big data processing and business intelligence solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-orange" />,
      title: "Expert Talent",
      description: "Connect with top AI and tech professionals worldwide",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-zion-red" />,
      title: "Growth Solutions",
      description: "Strategic consulting and digital transformation services",
      color: "from-red-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Consultants" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. 40% cost reduction and improved performance.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "Their cybersecurity expertise helped us achieve SOC 2 compliance in record time. Highly recommended!",
      rating: 5,
      company: "DataFlow"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, CloudScale",
      content: "The team's expertise in cloud migration saved us months of development time and significantly reduced costs.",
      rating: 5,
      company: "CloudScale"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "AI/ML" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
    { name: "Kubernetes", icon: "⚓", category: "DevOps" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-background" id="main-content">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zion-purple/3 to-transparent"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zion-cyan/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-zion-purple/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-zion-cyan/8 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
=======
    <div className="min-h-screen bg-background relative">
      <FuturisticBackground intensity="low" />
      
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
      <SEO 
<<<<<<< HEAD
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
=======
        title="Leading Tech & AI Marketplace - Connect with World-Class Talent & Services" 
        description="Zion Tech Group is the premier marketplace for AI talent, IT services, and cutting-edge technology solutions. Connect with 10,000+ verified professionals, get 24/7 global IT support, and accelerate your digital transformation."
        keywords="AI marketplace, tech talent, IT services, software development, artificial intelligence, technology consulting, digital transformation, tech recruitment, AI solutions, enterprise technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
        type="website"
        ogImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop&crop=center"
        tags={["AI", "Technology", "Marketplace", "IT Services", "Digital Transformation"]}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4514
      />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5

<<<<<<< HEAD
      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are powering businesses around the world with proven results.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
=======
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 border border-zion-cyan/10 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border border-zion-purple/10 rotate-45 opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-zion-cyan/5 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white animate-fade-in">
              🚀 Leading Tech Solutions Provider
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent animate-fade-in-up">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover top AI and tech talent, services, and equipment in one place.
              Your comprehensive marketplace for all things technology and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Master</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks we use to deliver exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="font-medium text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI-powered solutions can accelerate your growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
=======
      <HeroSection />
      
      <QuickAccess />
      
      <FeatureCTAs />
      
<<<<<<< HEAD
      <MicroSaasServicesSection />
=======
      <MicroSaasShowcase />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
      
      <FeatureHighlights />
      
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <MicroSaasShowcase />
=======
      <ServicesOverview />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-302a
=======
      <ServicesShowcase />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-936f
=======
      <TestimonialCarousel />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
=======
      <ComprehensiveServicesShowcase />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8a54
=======
      <ServicesOverview />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
      
      <CategoriesSection />
      <ServicesShowcase />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <ContactInfo />
      <NewsletterSection />
      
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
      <FloatingCTA />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-099e
=======
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <CategoriesSection />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from businesses we've helped transform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section from main branch */}
      <BenefitsSection />

      {/* New Performance Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate/5 to-zion-blue/5">
        <PerformanceOptimizations />
      </section>
      
      {/* New Analytics Section */}
      <section className="py-16">
        <AdvancedAnalytics />
      </section>

      {/* CTA Section */}
      <div className="py-20 bg-zion-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100 group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
      <FloatingCTA />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fb01
=======
    <div className="min-h-screen bg-background" id="main-content">
      <CategoriesSection />
      <ServicesShowcase />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
    </div>
  );
};

export default Home;
