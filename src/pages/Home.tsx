

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
  Play,
  ExternalLink,
  ArrowUpRight,
  Sparkles as SparklesIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Target as TargetIcon2,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Clock as ClockIcon,
  Heart as HeartIcon,
  Eye as EyeIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  Users as UsersIcon,
  TrendingUp as TrendingUpIcon,
  Award as AwardIcon,
  Globe as GlobeIcon,
  Leaf
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEOConfigs } from '../components/SEOHead';

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
      icon: BrainIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      icon: CpuIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"],
      icon: CodeIcon,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: UsersIcon, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUpIcon, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: AwardIcon, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: GlobeIcon, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: BrainIcon,
      path: "/ai-solutions",
      color: "from-purple-500 to-pink-500",
      features: ["Predictive Analytics", "Real-time Dashboards", "Machine Learning", "Automated Reporting"],
      price: "Starting at $299/month",
      highlight: true
    },
    {
      title: "Quantum Security Platform",
      description: "Next-generation cybersecurity using quantum-resistant encryption algorithms to protect against future quantum computing threats.",
      icon: ShieldIcon,
      path: "/services/cybersecurity",
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum-Resistant", "Zero-Trust Architecture", "24/7 Monitoring", "Compliance Automation"],
      price: "Starting at $3,500/month",
      highlight: false
    },
    {
      title: "Autonomous DevOps",
      description: "AI-powered DevOps automation that manages infrastructure, deployments, and monitoring with minimal human intervention.",
      icon: CloudIcon,
      path: "/cloud-devops",
      color: "from-green-500 to-emerald-500",
      features: ["Automated CI/CD", "Self-healing Systems", "Cost Optimization", "Performance Monitoring"],
      price: "Starting at $1,200/month",
      highlight: false
    },
    {
      title: "Metaverse Business Platform",
      description: "Establish your presence in the metaverse with virtual offices, events, and customer interactions.",
      icon: EyeIcon,
      path: "/services/metaverse",
      color: "from-orange-500 to-red-500",
      features: ["Virtual Offices", "3D Asset Management", "Virtual Events", "Custom Branding"],
      price: "Starting at $800/month",
      highlight: false
    }
  ];

  const innovativeFeatures = [
    {
      title: "AI-Powered Content Generation",
      description: "Create high-quality, SEO-optimized content with human-like creativity using advanced AI algorithms.",
      icon: BrainIcon,
      color: "from-purple-500 to-pink-500",
      path: "/services/ai-content-generation"
    },
    {
      title: "Edge Computing Optimization",
      description: "Reduce latency by 80% with our advanced edge computing platform for IoT and real-time applications.",
      icon: CpuIcon,
      color: "from-blue-500 to-cyan-500",
      path: "/services/edge-computing"
    },
    {
      title: "Green Tech Sustainability",
      description: "Monitor and optimize environmental impact with comprehensive sustainability metrics and reporting.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      path: "/services/green-tech"
    },
    {
      title: "Quantum Machine Learning",
      description: "Combine quantum computing principles with ML algorithms for superior performance in complex computations.",
      icon: ZapIcon,
      color: "from-yellow-500 to-orange-500",
      path: "/services/quantum-ml"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our business operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings.",
      rating: 5,
      avatar: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateTech",
      company: "InnovateTech",
      content: "Their quantum security platform is revolutionary. We feel confident about our future-proof security infrastructure.",
      rating: 5,
      avatar: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, Global Solutions",
      company: "Global Solutions",
      content: "The autonomous DevOps platform has eliminated 90% of our deployment issues. It's like having a 24/7 expert team.",
      rating: 5,
      avatar: "/images/testimonial-3.jpg"
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
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* SEO Head */}
      <SEOHead 
        title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
        description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
        canonical="https://ziontechgroup.com"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 float-element"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40 float-element-delayed"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50 float-element"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-green-400 rounded-full opacity-30 float-element-delayed"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                    <SparklesIcon className="w-4 h-4" />
                    <span>Innovation Leader 2024</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="holographic-text">Future-Ready</span>
                    <br />
                    <span className="neon-glow-cyan">Technology</span>
                    <br />
                    <span className="neon-glow-purple">Solutions</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    Transform your business with cutting-edge AI, quantum computing, and cybersecurity solutions. 
                    We're your partner in the digital future.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="cyberpunk-button px-8 py-4 text-lg font-semibold"
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  
                  <Link
                    to="/demo"
                    className="flex items-center justify-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 rounded-lg font-semibold group"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span>Watch Demo</span>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldIcon className="w-4 h-4 text-blue-400" />
                    <span>SOC2 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AwardIcon className="w-4 h-4 text-yellow-400" />
                    <span>Industry Leader</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Hero Slider */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${slide.color} rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0 cyber-grid"></div>
                        </div>
                        
                        {/* Icon */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                            <slide.icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute inset-0 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl blur-xl opacity-50"></div>
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-white/90 mb-6 max-w-md">
                          {slide.description}
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-white/80">
                              <CheckCircleIcon className="w-4 h-4 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <Link
                          to={slide.path}
                          className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                        >
                          <span>{slide.cta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <div className="flex justify-center space-x-2 mt-6">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white neon-glow-cyan mb-2">
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
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="holographic-text">Innovative</span>{' '}
                <span className="neon-glow-cyan">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge technology solutions designed to transform your business 
                and give you a competitive advantage in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className={`group relative ${
                    service.highlight ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`h-full bg-gradient-to-br ${service.color} rounded-2xl p-6 lg:p-8 relative overflow-hidden transition-all duration-300 group-hover:scale-105`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 cyber-grid"></div>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl blur-xl opacity-50"></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-white/80">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Price */}
                    <div className="text-white/90 font-semibold mb-6">
                      {service.price}
                    </div>
                    
                    {/* CTA */}
                    <Link
                      to={service.path}
                      className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30 group-hover:border-white/50"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-glow-purple">Cutting-Edge</span>{' '}
                <span className="holographic-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our innovative features that set new 
                standards in the industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {innovativeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-full bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* CTA */}
                    <Link
                      to={feature.path}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
                    >
                      <span>Explore Feature</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-glow-green">Trusted</span>{' '}
                <span className="holographic-text">by Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what industry leaders and technology experts say about our innovative solutions 
                and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-full bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105">
                    {/* Quote Icon */}
                    <div className="text-cyan-400 mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-cyan-400">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl"></div>
              <div className="absolute inset-0 cyber-grid opacity-10 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10 py-16 px-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  <span className="holographic-text">Ready to</span>{' '}
                  <span className="neon-glow-cyan">Transform</span>{' '}
                  <span className="neon-glow-purple">Your Business?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of businesses that have already transformed their operations 
                  with our cutting-edge technology solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="cyberpunk-button px-8 py-4 text-lg font-semibold"
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  
                  <Link
                    to="/demo"
                    className="flex items-center justify-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 rounded-lg font-semibold group"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span>Schedule Demo</span>
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Home;