

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Zap,
  Globe,
  Target
} from 'lucide-react';

// Memoized components for better performance
const HeroSlide = React.memo(({ slide, isActive, index }: {
  slide: any;
  isActive: boolean;
  index: number;
}) => (
  <div
    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}
    aria-hidden={!isActive}
    role="tabpanel"
    aria-labelledby={`slide-${index}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80"></div>
    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>
    
    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <slide.icon className="w-20 h-20 mx-auto mb-6 text-white opacity-80" aria-hidden="true" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
            {slide.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {slide.description}
          </p>
          <Link
            to={slide.path}
            className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={`Learn more about ${slide.title}`}
          >
            <span>{slide.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
));

const StatCard = React.memo(({ stat, index }: { stat: any; index: number }) => (
  <div
    className="text-center group"
    style={{ animationDelay: `${index * 200}ms` }}
  >
    <div className="glass-card p-6 hover:scale-105 transition-transform duration-300 focus-within:ring-4 focus-within:ring-cyan-500/50">
      <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} aria-hidden="true" />
      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
      <div className="text-gray-400">{stat.label}</div>
    </div>
  </div>
));

const ServiceCard = React.memo(({ service, index }: { service: any; index: number }) => (
  <div
    className="glass-card p-6 hover:scale-105 transition-all duration-300 group focus-within:ring-4 focus-within:ring-cyan-500/50"
    style={{ animationDelay: `${index * 200}ms` }}
    tabIndex={0}
    role="article"
    aria-labelledby={`service-${service.id}`}
  >
    <div className="flex items-center justify-between mb-4">
      <service.icon className="w-12 h-12 text-cyan-400" aria-hidden="true" />
      <div className="flex items-center space-x-1" aria-label={`Rating: ${service.rating} out of 5 stars from ${service.reviewCount} reviews`}>
        <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
        <span className="text-sm text-gray-300">{service.rating}</span>
        <span className="text-xs text-gray-500">({service.reviewCount})</span>
      </div>
    </div>

    <h3 id={`service-${service.id}`} className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
      {service.title}
    </h3>
    
    <p className="text-gray-300 mb-4 leading-relaxed">
      {service.description}
    </p>

    <div className="mb-4">
      <span className="text-sm text-purple-400 font-medium">{service.category}</span>
      <div className="text-2xl font-bold text-cyan-400 mt-1">{service.price}</div>
    </div>

    <div className="mb-6">
      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
      <ul className="space-y-1" role="list">
        {service.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <Link
      to={service.path}
      className="w-full futuristic-btn text-center group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
      aria-label={`Learn more about ${service.title}`}
    >
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
    </Link>
  </div>
));

const FeatureCard = React.memo(({ feature, index }: { feature: any; index: number }) => (
  <div
    className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group focus-within:ring-4 focus-within:ring-cyan-500/50"
    style={{ animationDelay: `${index * 100}ms` }}
    tabIndex={0}
    role="article"
  >
    <feature.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" aria-hidden="true" />
    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-gray-300 leading-relaxed">
      {feature.description}
    </p>
  </div>
));

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoized data for better performance
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "From predictive analytics to intelligent automation, we deliver AI solutions that drive real business results.",
      cta: "Explore AI Solutions",
      path: "/comprehensive-services",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Enterprise IT Excellence",
      subtitle: "Comprehensive IT services for modern businesses",
      description: "24/7 support, cybersecurity, cloud solutions, and strategic technology consulting to keep your business ahead.",
      cta: "View IT Services",
      path: "/it-onsite-services",
      icon: Shield,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Micro SAAS Solutions",
      subtitle: "Scalable software solutions for every business need",
      description: "Custom micro SAAS applications that streamline operations, reduce costs, and accelerate growth.",
      cta: "Browse Services",
      path: "/services",
      icon: Cpu,
      color: "from-green-500 to-emerald-600"
    }
  ], []);

  const featuredServices = useMemo(() => [
    {
      id: "ai-powered-crm",
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive analytics and automated insights",
      price: "$1,500/month",
      features: ["Predictive Analytics", "Automated Follow-ups", "Smart Lead Scoring", "Real-time Insights"],
      icon: Brain,
      category: "AI & Machine Learning",
      rating: 4.9,
      reviewCount: 342,
      path: "/services/ai-powered-crm"
    },
    {
      id: "cybersecurity-platform",
      title: "Cybersecurity Platform",
      description: "Comprehensive threat detection and response system with AI-powered security intelligence",
      price: "$1,800/month",
      features: ["Threat Detection", "Incident Response", "Compliance Monitoring", "24/7 Protection"],
      icon: Shield,
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 189,
      path: "/services/cybersecurity-platform"
    },
    {
      id: "cloud-optimization",
      title: "Cloud Cost Optimization",
      description: "AI-driven cloud cost management that reduces spending by 30-50% automatically",
      price: "$350/month",
      features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management"],
      icon: Cpu,
      category: "Cloud Computing",
      rating: 4.7,
      reviewCount: 234,
      path: "/services/cloud-optimization"
    }
  ], []);

  const stats = useMemo(() => [
    { label: "AI Services", value: "25+", icon: Brain, color: "text-cyan-400" },
    { label: "Happy Clients", value: "100+", icon: Users, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-green-400" },
    { label: "Support", value: "24/7", icon: Clock, color: "text-yellow-400" }
  ], []);

  const features = useMemo(() => [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance standards to protect your business and data."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to keep your systems running smoothly."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes and ROI for our clients."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep expertise in AI, cybersecurity, and enterprise IT."
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Solutions designed to scale and adapt as your business grows and technology evolves."
    }
  ], []);

  // Optimized slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Pause auto-play on user interaction
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        pauseAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        pauseAutoPlay();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, pauseAutoPlay]);

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden" aria-label="Hero Section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Slides */}
          <div 
            className="relative h-[600px] rounded-3xl overflow-hidden"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
            onFocus={pauseAutoPlay}
            onBlur={resumeAutoPlay}
          >
            {heroSlides.map((slide, index) => (
              <HeroSlide
                key={index}
                slide={slide}
                isActive={index === currentSlide}
                index={index}
              />
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevSlide();
                pauseAutoPlay();
              }}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" aria-hidden="true" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                pauseAutoPlay();
              }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 z-20 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" aria-hidden="true" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20" role="tablist" aria-label="Slide navigation">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  id={`slide-${index}`}
                  onClick={() => {
                    goToSlide(index);
                    pauseAutoPlay();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-controls={`slide-${index}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={() => setIsAutoPlaying(prev => !prev)}
                className="p-2 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
              >
                {isAutoPlaying ? (
                  <Clock className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                ) : (
                  <Zap className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" aria-label="Company Statistics">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16" aria-label="Featured Services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular AI-powered solutions and IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="View all our services"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" aria-label="Why Choose Zion Tech Group">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" aria-label="Call to Action">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="futuristic-btn text-lg px-8 py-4 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Get started with Zion Tech Group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label="Explore our services"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
