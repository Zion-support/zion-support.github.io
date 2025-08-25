import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  MapPin
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      color: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
      title: "Next-Gen Innovative Services 2025",
      subtitle: "Discover cutting-edge solutions revolutionizing industries",
      description: "Explore our portfolio of 25+ innovative AI-powered services designed to deliver unprecedented ROI and market advantage.",
      image: "/images/hero-innovative-services.jpg",
      cta: "View Innovative Services",
      path: "/next-gen-innovative-services-2025",
      color: "from-blue-400 via-purple-500 to-pink-600"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      color: "from-green-400 via-blue-500 to-purple-600"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  const featuredServices = [
    {
      title: "QuantumFin AI Trading Platform",
      description: "Revolutionary AI-powered quantum computing platform for high-frequency trading, portfolio optimization, and risk management.",
      icon: Brain,
      path: "/next-gen-innovative-services-2025",
      category: "Financial Technology",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 89,
      highlights: ["Quantum Algorithm Optimization", "300-500% Performance Increase", "Real-time Market Prediction"],
      features: ["IBM Quantum Integration", "SEC/FINRA Compliance", "Portfolio Automation", "Risk Assessment"]
    },
    {
      title: "EdgeAI Computing Platform",
      description: "AI-powered edge computing platform that brings machine learning capabilities to edge devices with 80% latency reduction.",
      icon: Cpu,
      path: "/next-gen-innovative-services-2025",
      category: "Edge Computing",
      price: "$1,800/mo",
      rating: 4.8,
      reviewCount: 156,
      highlights: ["AI Model Deployment", "Real-time Processing", "Multi-cloud Integration"],
      features: ["TensorFlow Lite", "Kubernetes", "IoT Support", "Security at Edge"]
    },
    {
      title: "ZeroTrust AI Security Platform",
      description: "Advanced AI-powered zero trust security platform that continuously monitors and authenticates every user and device.",
      icon: Shield,
      path: "/next-gen-innovative-services-2025",
      category: "Cybersecurity",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 234,
      highlights: ["90% Security Incident Reduction", "Real-time Threat Prevention", "Compliance Ready"],
      features: ["Continuous Authentication", "Behavioral Analytics", "AI Threat Detection", "24/7 Monitoring"]
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
      icon: Database,
      title: "Data-Driven",
      description: "Insights that drive better business decisions"
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

  const seoMetadata = {
    title: "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services",
    description: "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology.",
    keywords: ["AI solutions", "quantum computing", "cybersecurity", "digital transformation", "enterprise technology", "machine learning", "cloud services", "IT infrastructure"],
    canonicalUrl: "https://ziontechgroup.com",
    ogImage: "https://ziontechgroup.com/og-image.jpg",
    ogType: "website",
    twitterCard: "summary_large_image"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...seoMetadata} />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Animated Hero Content */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              to={heroSlides[currentSlide].path}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              {heroSlides[currentSlide].cta}
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

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
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
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Featured Innovative Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular AI-powered solutions that are transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                  </div>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/next-gen-innovative-services-2025"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Innovative Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver results that exceed expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Services Promotion */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Next-Generation Innovative Services 2025
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our portfolio of 25+ cutting-edge AI-powered solutions that are revolutionizing industries 
              and delivering unprecedented ROI. From quantum computing to autonomous systems, we're building the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg w-fit mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-gray-300 text-sm">Autonomous systems, content generation, and intelligent automation</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emerging Technologies</h3>
              <p className="text-gray-300 text-sm">Quantum computing, space technology, and neurotechnology</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Infrastructure</h3>
              <p className="text-gray-300 text-sm">Edge computing, zero trust security, and hybrid cloud management</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/next-gen-innovative-services-2025"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Lightbulb className="w-5 h-5" />
              <span>Explore All Innovative Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <span>Visit Our Website</span>
              <Globe className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Our team of experts is ready to help you implement these cutting-edge solutions and achieve unprecedented results. 
            Get in touch today to start your transformation journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-cyan-400 font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Response within 2 hours</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-semibold text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              <p className="text-gray-400 text-sm">By appointment</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Visit Our Website</span>
              <Globe className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
