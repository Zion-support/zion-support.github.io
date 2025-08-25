import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Bot,
  Microchip,
  Globe2,
  BarChart,
  ShieldCheck,
  Zap as ZapIcon,
  Play,
  Pause,
  ExternalLink,
  Building
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // SEO metadata for the home page
  const seoMetadata = {
    title: "AI-Powered Innovation & Enterprise Solutions",
    description: "Transform your business with cutting-edge AI solutions, comprehensive IT services, and digital transformation expertise. Leading technology consulting for modern enterprises.",
    keywords: "AI solutions, artificial intelligence, enterprise IT, cybersecurity, cloud computing, digital transformation, Zion Tech Group",
    type: "website" as const,
    url: "https://ziontechgroup.com"
  };

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-blue-600 via-purple-600 to-cyan-600"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      gradient: "from-green-600 via-blue-600 to-purple-600"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity. Built with modern technologies and best practices.",
      image: "/images/hero-saas.jpg",
      cta: "Learn More",
      path: "/services/micro-saas-solutions",
      features: ["Custom Development", "Scalable Architecture", "API Integration", "User Management"],
      gradient: "from-orange-600 via-red-600 to-pink-600"
    }
  ];

  const stats = [
    { label: "AI Solutions Deployed", value: "500+", icon: Brain, color: "text-blue-500" },
    { label: "Enterprise Clients", value: "200+", icon: Building, color: "text-green-500" },
    { label: "Success Rate", value: "98%", icon: CheckCircle, color: "text-purple-500" },
    { label: "Global Reach", value: "25+ Countries", icon: Globe, color: "text-orange-500" }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that adapt and improve over time, providing deeper insights and better decision-making capabilities.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols and compliance frameworks to protect your most sensitive data and operations.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times and 99.9% uptime guarantees for mission-critical applications.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock expert support team ready to assist you with any technical challenges or questions.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
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
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead {...seoMetadata} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Carousel */}
            <div className="relative mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8"
                    >
                      <Sparkles className="h-5 w-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Leading AI Innovation</span>
                    </motion.div>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
                  >
                    <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                      {heroSlides[currentSlide].title}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>

                  {/* Feature Pills */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                  >
                    {heroSlides[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                  >
                    <Link
                      to={heroSlides[currentSlide].path}
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span className="flex items-center justify-center">
                        {heroSlides[currentSlide].cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Link>
                    
                    <button
                      onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    >
                      <span className="flex items-center justify-center">
                        {isVideoPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                        Watch Demo
                      </span>
                    </button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextSlide}
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={toggleAutoPlay}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isAutoPlaying 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}
                  title={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
                >
                  {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
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