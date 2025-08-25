

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
  Atom,
  Eye,
  Fingerprint,
  Layers,
  Workflow,
  Palette,
  Monitor,
  Smartphone,
  Tablet
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
    <div className="futuristic-loader mx-auto mb-4"></div>
    <span className="text-cyan-400">{message}</span>
  </div>
);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      icon: Brain,
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Quantum Technology Solutions",
      subtitle: "Next-generation computing for tomorrow's challenges",
      description: "Harness the power of quantum computing, cryptography, and machine learning for unprecedented performance.",
      image: "/images/hero-quantum.jpg",
      cta: "Discover Quantum Tech",
      path: "/services/quantum-technology",
      icon: Atom,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Autonomous Business Operations",
      subtitle: "Self-operating systems that never sleep",
      description: "Deploy intelligent autonomous systems that manage your business operations 24/7 with AI-driven decision making.",
      image: "/images/hero-autonomous.jpg",
      cta: "Learn More",
      path: "/autonomous-business-operations-platform",
      icon: Workflow,
      color: "from-green-400 to-emerald-600"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-cyan-400" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", color: "text-green-400" },
    { icon: Award, value: "10+", label: "Years Experience", color: "text-yellow-400" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-purple-400" }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Content Generation",
      description: "Create high-quality content across multiple formats and languages with advanced AI technology.",
      icon: Code,
      path: "/ai-powered-content-generator",
      category: "AI Solutions",
      price: "$199/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Multi-format Support", "SEO Optimization", "Brand Voice Customization"],
      features: ["AI Content Creation", "Multi-language Support", "Plagiarism Detection", "24/7 Support"],
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Quantum-Safe Encryption",
      description: "Future-proof your security with quantum-resistant encryption algorithms.",
      icon: Lock,
      path: "/quantum-encryption-platform",
      category: "Cybersecurity",
      price: "$3,500/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["Quantum-Resistant", "Multi-Algorithm Support", "Compliance Ready"],
      features: ["Post-Quantum Cryptography", "Key Management", "Real-time Monitoring", "Enterprise Support"],
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Autonomous DevOps Orchestration",
      description: "AI-powered DevOps platform that autonomously manages infrastructure and deployments.",
      icon: Workflow,
      path: "/autonomous-devops-orchestrator",
      category: "Cloud & DevOps",
      price: "$2,800/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["Self-Healing Systems", "Predictive Scaling", "Cost Optimization"],
      features: ["Autonomous Management", "Multi-cloud Support", "Real-time Analytics", "24/7 Operation"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Metaverse Development Platform",
      description: "Create immersive 3D virtual worlds with AI-powered content generation.",
      icon: Eye,
      path: "/metaverse-development-platform",
      category: "Emerging Technology",
      price: "$1,500/mo",
      rating: 4.7,
      reviewCount: 73,
      highlights: ["3D World Builder", "AI Content Generation", "Virtual Commerce"],
      features: ["Avatar Customization", "Social Interactions", "NFT Integration", "Multi-platform Support"],
      color: "from-orange-400 to-red-600"
    }
  ];

  const emergingTechnologies = [
    {
      title: "Edge Computing Orchestration",
      description: "Optimize data processing and reduce latency across distributed edge locations.",
      icon: Network,
      path: "/edge-computing-orchestrator",
      benefits: ["80% Latency Reduction", "Lower Bandwidth Costs", "Enhanced Security"],
      color: "from-blue-400 to-cyan-600"
    },
    {
      title: "Neuromorphic Computing",
      description: "Brain-like computing that mimics neural structures for advanced AI processing.",
      icon: Brain,
      path: "/neuromorphic-computing-platform",
      benefits: ["Energy-Efficient Computing", "Real-time Learning", "Advanced Pattern Recognition"],
      color: "from-purple-400 to-indigo-600"
    },
    {
      title: "Quantum Internet Protocol",
      description: "Ultra-secure communication network using quantum entanglement.",
      icon: Globe,
      path: "/quantum-internet-protocol",
      benefits: ["Unhackable Communication", "Instant Data Transfer", "Military-Grade Security"],
      color: "from-green-400 to-teal-600"
    }
  ];

  const businessSolutions = [
    {
      title: "AI-Powered Financial Advisory",
      description: "Personalized investment recommendations and portfolio management using AI.",
      icon: BarChart3,
      path: "/autonomous-financial-advisor",
      benefits: ["Professional Advice at Scale", "Lower Investment Fees", "24/7 Availability"],
      color: "from-yellow-400 to-orange-600"
    },
    {
      title: "HR Automation Platform",
      description: "Intelligent recruitment, employee management, and workforce analytics.",
      icon: Users,
      path: "/ai-powered-hr-automation",
      benefits: ["60% Faster Hiring", "Better Candidate Quality", "Data-Driven Decisions"],
      color: "from-pink-400 to-rose-600"
    },
    {
      title: "Legal Research Assistant",
      description: "Automate legal research, document analysis, and contract review with AI.",
      icon: Shield,
      path: "/ai-powered-legal-assistant",
      benefits: ["80% Time Reduction", "Lower Legal Costs", "Improved Accuracy"],
      color: "from-indigo-400 to-blue-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
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

  return (
    <div className="min-h-screen bg-quantum-gradient relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-mesh opacity-20"></div>
      <div className="absolute inset-0 neon-grid opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 quantum-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Hero Slides */}
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-3xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {heroSlides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className={`bg-gradient-to-br ${slide.color} p-12 rounded-3xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10">
                          <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <slide.icon className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text">
                            {slide.title}
                          </h1>
                          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6">
                            {slide.subtitle}
                          </h2>
                          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                            {slide.description}
                          </p>
                          <Link
                            to={slide.path}
                            className="futuristic-button text-lg px-8 py-4 inline-flex items-center space-x-2"
                          >
                            <span>{slide.cta}</span>
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="futuristic-card p-6 text-center cyber-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="futuristic-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and cutting-edge technology solutions designed to transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <div 
                  key={index}
                  className="futuristic-card p-6 hover:scale-105 transition-transform duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-400 text-center mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.path}
                    className="futuristic-button w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technologies Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="futuristic-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Emerging Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our cutting-edge technology solutions that define the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {emergingTechnologies.map((tech, index) => (
                <div 
                  key={index}
                  className="futuristic-card p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                    <tech.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-400 mb-6">{tech.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {tech.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={tech.path}
                    className="futuristic-button w-full"
                  >
                    Explore Technology
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="futuristic-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Business Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with intelligent automation and AI-powered solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessSolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="futuristic-card p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={solution.path}
                    className="futuristic-button w-full"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="futuristic-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge technology solutions can drive innovation and growth for your organization
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="futuristic-button text-lg px-8 py-4"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                View All Services
              </Link>
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
