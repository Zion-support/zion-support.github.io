import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette
} from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { LazyLoadWrapper, OptimizedImage } from '../components/PerformanceOptimizer';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"]
    },
    {
      title: "Micro SAAS Services",
      description: "Scalable software solutions tailored to your needs",
      icon: Zap,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your infrastructure for the future",
      icon: Rocket,
      features: ["Cloud Migration", "DevOps", "Security", "Compliance"]
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Leading the future of technology with cutting-edge AI solutions, quantum computing, 
            and innovative micro SAAS services that transform businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Explore our services"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Get started with Zion Tech"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Hero Slides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-6">
                  <heroSlides[currentSlide].icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                  {heroSlides[currentSlide].description}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {heroSlides[currentSlide].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-cyan-300 border border-cyan-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Enhanced features section
const FeaturesSection = React.memo(() => {
  const features = useMemo(() => [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions for business automation and insights",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and modern infrastructure management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for modern digital threats",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Micro SAAS",
      description: "Custom software solutions designed for your specific needs",
      color: "from-yellow-500 to-orange-500"
    }
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

// Enhanced stats section
const StatsSection = React.memo(() => {
  const stats = useMemo(() => [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: ShieldCheck },
    { number: "24/7", label: "Support Available", icon: Clock }
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Enhanced CTA section
const CTASection = React.memo(() => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/schedule-demo"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center justify-center space-x-2"
            >
              <span>Schedule Demo</span>
              <Play className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

// Main EnhancedHome component
const EnhancedHome: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGetStarted = useCallback(() => {
    // Scroll to services section or navigate
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-zion-slate-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - Leading AI Solutions & Technology Services"
        description="Transform your business with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Expert technology consulting and digital transformation."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, technology consulting, machine learning, cybersecurity, cloud services"
        type="website"
      />
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        
        <LazyLoadWrapper>
          <FeaturesSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <StatsSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <CTASection />
        </LazyLoadWrapper>
      </div>
    </>
  );
};

export default EnhancedHome;