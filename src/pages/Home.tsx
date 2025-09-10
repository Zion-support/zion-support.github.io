

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
  Target as TargetIcon,
  ArrowUpRight,
  Play,
  Pause
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
      title: "Quantum Computing Solutions",
      subtitle: "Next-generation computing power for complex problems",
      description: "Harness the power of quantum computing to solve previously unsolvable problems in cryptography, optimization, and scientific research.",
      image: "/images/hero-quantum.jpg",
      cta: "Discover Quantum Tech",
      path: "/services/quantum-technology",
      features: ["Quantum Algorithms", "Cryptography", "Optimization", "Scientific Research"]
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"]
    },
    {
      title: "Cybersecurity & Compliance",
      subtitle: "Protect your business with advanced security solutions",
      description: "Comprehensive cybersecurity services including threat detection, compliance automation, and 24/7 monitoring to keep your business safe.",
      image: "/images/hero-cybersecurity.jpg",
      cta: "Secure Your Business",
      path: "/services/cybersecurity",
      features: ["Threat Detection", "Compliance Automation", "24/7 Monitoring", "Incident Response"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: Brain,
      path: "/ai-solutions",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reporting", "Machine Learning Models"],
      price: "From $299/month",
      category: "AI & Analytics"
    },
    {
      title: "Quantum Neural Networks",
      description: "Advanced quantum computing platform for neural network training and optimization. Solve complex problems with exponential speed improvements.",
      icon: Cpu,
      path: "/quantum-neural-network-platform",
      features: ["Quantum Algorithms", "Neural Network Training", "Exponential Speed", "Research Tools"],
      price: "From $5,000/month",
      category: "Quantum Computing"
    },
    {
      title: "Autonomous Business Operations",
      description: "Self-managing business systems that optimize operations, reduce costs, and improve efficiency automatically.",
      icon: Zap,
      path: "/autonomous-business-operations-platform",
      features: ["Process Automation", "Cost Optimization", "Performance Monitoring", "Self-healing Systems"],
      price: "From $1,500/month",
      category: "Business Automation"
    },
    {
      title: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain platforms for supply chain, finance, and digital identity management.",
      icon: Lock,
      path: "/blockchain-enterprise-solutions",
      features: ["Smart Contracts", "Supply Chain Tracking", "Digital Identity", "DeFi Solutions"],
      price: "From $2,500/month",
      category: "Blockchain & Web3"
    },
    {
      title: "IoT Data Analytics",
      description: "Comprehensive IoT platform for collecting, analyzing, and visualizing data from connected devices.",
      icon: Network,
      path: "/iot-data-analytics",
      features: ["Real-time Monitoring", "Predictive Maintenance", "Data Visualization", "API Integration"],
      price: "From $1,200/month",
      category: "Internet of Things"
    },
    {
      title: "AI Workflow Automation",
      description: "Intelligent workflow automation that learns from your processes and continuously improves efficiency.",
      icon: Code,
      path: "/ai-workflow-automation",
      features: ["Process Learning", "Automated Workflows", "Performance Analytics", "Integration APIs"],
      price: "From $899/month",
      category: "Workflow Automation"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain, description: "Machine learning, neural networks, and AI automation" },
    { name: "Quantum Computing", icon: Cpu, description: "Quantum algorithms and quantum machine learning" },
    { name: "Blockchain", icon: Lock, description: "Smart contracts, DeFi, and supply chain solutions" },
    { name: "IoT & Edge Computing", icon: Network, description: "Connected devices and real-time analytics" },
    { name: "Cybersecurity", icon: Shield, description: "Advanced threat detection and compliance automation" },
    { name: "Cloud Infrastructure", icon: Cloud, description: "Scalable cloud solutions and DevOps automation" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our business operations with their AI-powered solutions. We've seen a 40% increase in efficiency and significant cost savings.",
      rating: 5,
      avatar: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateTech",
      company: "InnovateTech",
      content: "The quantum computing platform from Zion Tech Group has revolutionized our research capabilities. We're solving problems that were previously impossible.",
      rating: 5,
      avatar: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, Global Manufacturing",
      company: "Global Manufacturing",
      content: "Their autonomous business operations platform has streamlined our entire supply chain. The ROI was immediate and substantial.",
      rating: 5,
      avatar: "/images/testimonial-3.jpg"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum opacity-20"></div>
      <div className="absolute inset-0 cyber-grid"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500/20 text-xs matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-holographic animate-holographic-shift"
              >
                Future Technology
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Solutions
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Leading provider of AI-powered technology solutions, quantum computing, 
                cybersecurity, and enterprise digital transformation services.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Link
                  to="/services"
                  className="neon-button px-8 py-4 text-lg font-semibold rounded-lg group"
                >
                  Explore Our Services
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/contact"
                  className="px-8 py-4 text-lg font-semibold text-cyan-400 hover:text-white border-2 border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-400/10 group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-cyan-400 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Featured Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most popular and innovative technology solutions designed to transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cyber-card rounded-xl p-6 hover:shadow-neon transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-400 flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-cyan-400">
                      {service.price}
                    </span>
                    <Link
                      to={service.path}
                      className="text-cyan-400 hover:text-white transition-colors duration-300 group-hover:text-white"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Technologies</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We leverage the latest technologies to deliver innovative solutions that drive business transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cyber-card rounded-xl p-6 text-center hover:shadow-neon transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it - hear from the businesses we've helped transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cyber-card rounded-xl p-6 hover:shadow-neon transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-cyan-400">{testimonial.role}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="cyber-card rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Business?</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already revolutionized their operations with our cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="neon-button px-8 py-4 text-lg font-semibold rounded-lg group"
                >
                  Get Started Today
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 text-lg font-semibold text-cyan-400 hover:text-white border-2 border-cyan-400/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-400/10"
                >
                  View All Services
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
