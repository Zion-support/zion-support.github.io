

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
      path: "/services/ai-business-intelligence",
      category: "AI Solutions",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "AI Insights"],
      features: ["Machine Learning", "Data Visualization", "API Integration", "24/7 Support", "Custom Alerts", "Performance Monitoring"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability and performance.",
      icon: Cloud,
      path: "/services/cloud-infrastructure",
      category: "Infrastructure",
      price: "$1,800/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["99.9% Uptime", "Auto-scaling", "Security First", "Cost Optimization"],
      features: ["AWS/Azure/GCP", "Load Balancing", "Backup & Recovery", "Monitoring", "Security Compliance", "Disaster Recovery"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and data. Stay ahead of threats with proactive security measures.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$3,200/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Threat Detection", "Compliance Ready", "24/7 Monitoring", "Incident Response"],
      features: ["Penetration Testing", "Security Audits", "Incident Response", "Training", "Vulnerability Assessment", "Security Architecture"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment with cutting-edge technologies"
    },
    {
      icon: Lock,
      title: "Secure by Design",
      description: "Enterprise-grade security built into every solution from the ground up"
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Grow without limits with our flexible and scalable infrastructure solutions"
    },
    {
      icon: Database,
      title: "Data-Driven",
      description: "Insights that drive better business decisions and strategic planning"
    }
  ];

  const trustSignals = [
    { icon: Eye, label: "Transparent Pricing", description: "No hidden fees or surprises" },
    { icon: Heart, label: "Customer First", description: "Your success is our priority" },
    { icon: TargetIcon, label: "Results Focused", description: "Measurable outcomes guaranteed" },
    { icon: Sparkles, label: "Innovation Leader", description: "Cutting-edge technology solutions" }
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
      <SEOHead 
        title="Zion Tech Group - AI-Powered Innovation & Enterprise Solutions"
        description="Transform your business with cutting-edge AI solutions, quantum technology, and innovative micro SAAS platforms. Leading the future of technology."
        keywords={['AI solutions', 'quantum technology', 'enterprise IT', 'cybersecurity', 'micro SAAS', 'digital transformation', 'machine learning', 'blockchain']}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)] animate-pulse"></div>
        </div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
            opacity: 0.4,
            transform: `scale(${isVisible ? 1.1 : 1})`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        {/* Content */}
        <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading AI Technology Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200 max-w-3xl mx-auto">
            {heroSlides[currentSlide].subtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {heroSlides[currentSlide].features.map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-200"
              >
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={heroSlides[currentSlide].path}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              aria-label={`Learn more about ${heroSlides[currentSlide].title}`}
            >
              {heroSlides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              aria-label="Explore all our services"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-cyan-500"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-cyan-500"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50' 
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                  <signal.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{signal.label}</div>
                <div className="text-xs text-gray-400">{signal.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our track record speaks for itself. See why hundreds of companies choose Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most popular solutions that are transforming businesses worldwide. Each service is designed with scalability, security, and performance in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <article key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  {service.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-cyan-400 mb-2">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3 font-medium">Key Features:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-1 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.path}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25 font-medium"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </article>
            ))}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already revolutionized their operations with our cutting-edge solutions. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Get started today with our solutions"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              aria-label="View our pricing plans"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Suspense fallback={<LoadingFallback message="Loading services..." />}>
        <LazyServicesSection />
      </Suspense>

      {/* Features Section */}
      <Suspense fallback={<LoadingFallback message="Loading features..." />}>
        <LazyFeaturesSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<LoadingFallback message="Loading testimonials..." />}>
        <LazyTestimonialsSection />
      </Suspense>

      {/* CTA Section */}
      <Suspense fallback={<LoadingFallback message="Loading CTA..." />}>
        <LazyCTASection />
      </Suspense>
    </div>
  );
};

export default Home;
