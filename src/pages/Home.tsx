

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
  Sparkles as SparklesIcon,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Target as TargetIcon2,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Clock as ClockIcon,
  Eye as EyeIcon,
  Heart as HeartIcon
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
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      bgClass: "ai-bg"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      bgClass: "quantum-bg"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"],
      bgClass: "futuristic-bg"
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
      icon: BrainIcon,
      path: "/services#ai-business-intelligence",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reporting", "Data Visualization"],
      price: "From $299/month",
      category: "AI & Analytics"
    },
    {
      title: "Quantum-Secure Communication",
      description: "Next-generation communication platform using quantum encryption for unbreakable security. Perfect for financial institutions and government agencies.",
      icon: ShieldIcon,
      path: "/services#quantum-secure-communication",
      features: ["Quantum Encryption", "End-to-End Security", "Compliance Ready", "24/7 Monitoring"],
      price: "From $1,999/month",
      category: "Cybersecurity"
    },
    {
      title: "5G Enterprise Networks",
      description: "Complete 5G network infrastructure for enterprises, enabling ultra-fast connectivity, IoT integration, and edge computing capabilities.",
      icon: Network,
      path: "/services#5g-enterprise-networks",
      features: ["Ultra-Fast Connectivity", "IoT Integration", "Edge Computing", "Network Slicing"],
      price: "From $5,000/month",
      category: "Infrastructure"
    },
    {
      title: "AI Autonomous Research",
      description: "Fully autonomous research platform that conducts independent research, generates insights, and produces comprehensive reports across multiple domains.",
      icon: BrainIcon,
      path: "/services#ai-autonomous-research",
      features: ["Autonomous Research", "Multi-Domain Analysis", "Real-time Insights", "Custom Protocols"],
      price: "From $3,500/month",
      category: "AI Research"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", icon: BrainIcon, description: "Machine Learning, Deep Learning, NLP" },
    { name: "Quantum Computing", icon: CpuIcon, description: "Quantum Algorithms, Optimization, Security" },
    { name: "Blockchain", icon: CodeIcon, description: "Smart Contracts, DeFi, Digital Assets" },
    { name: "IoT & Edge", icon: Network, description: "Connected Devices, Real-time Processing" },
    { name: "Cybersecurity", icon: ShieldIcon, description: "Threat Detection, Compliance, Encryption" },
    { name: "Cloud & DevOps", icon: CloudIcon, description: "Multi-cloud, Automation, CI/CD" }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 40% through intelligent automation and optimization",
      icon: TrendingUp,
      value: "40%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Efficiency Boost",
      description: "Improve productivity and efficiency by up to 60% with AI-powered workflows",
      icon: Zap,
      value: "60%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security Enhancement",
      description: "Achieve 99.9% threat detection rate with our advanced security solutions",
      icon: Shield,
      value: "99.9%",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Innovation Acceleration",
      description: "Accelerate innovation and time-to-market by up to 3x with our cutting-edge solutions",
      icon: Rocket,
      value: "3x",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
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
    <div className="min-h-screen">
      <SEOHead {...SEOConfigs.home} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 ${heroSlides[currentSlide].bgClass}`}></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white neon-text-cyan leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 neon-text-purple">
                {heroSlides[currentSlide].subtitle}
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-full text-cyan-300 text-sm backdrop-blur-sm"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={heroSlides[currentSlide].path}
                className="btn-futuristic text-lg px-8 py-4"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-semibold text-lg"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-gray-400 hover:bg-cyan-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white neon-text mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white neon-text-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-cyan-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white neon-text mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and in-demand solutions that are transforming businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-futuristic group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400/50 transition-colors duration-200">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">
                    {service.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">
                    {service.price}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <Link
                  to={service.path}
                  className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0 quantum-bg opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white neon-text mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest advancements in technology to deliver innovative solutions that give your business a competitive edge.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl mb-4 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                  <tech.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 ai-bg opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white neon-text mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of our innovative solutions and see measurable results that drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white neon-text mb-4">
                  {benefit.value}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-white neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-futuristic text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-semibold text-lg"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>Custom Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
};

export default Home;
