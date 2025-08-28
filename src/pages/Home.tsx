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
  GitFork,
  Eye,
  Sparkles,
  Zap as ZapIcon,
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
  Palette,
  Zap as ZapIcon2,
  Accessibility,
  Monitor,
  Smartphone as MobileIcon,
  Text
} from 'lucide-react';

// Import new components
import ThemeToggle from '../components/ThemeToggle';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import { EnhancedSEO } from '../components/EnhancedSEO';

// Enhanced loading component with better UX and accessibility
const EnhancedLoadingSpinner = () => (
  <div 
    className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    role="status"
    aria-label="Loading Zion Tech Group application"
  >
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Enhanced futuristic animated background component with performance optimizations
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => [...Array(40)], []);
  const lines = useMemo(() => [...Array(8)], []);
  const shapes = useMemo(() => [...Array(12)], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Enhanced floating particles with neon glow - optimized for performance */}
      <div className="absolute inset-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
            animate={{
              x: [0, 200, 0],
              y: [0, -200, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* New neon accent orbs */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Animated neon lines */}
      <div className="absolute inset-0">
        {lines.map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '0%',
              right: '0%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {shapes.map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute border border-cyan-400/30 opacity-40 ${
              i % 3 === 1 ? 'w-10 h-10' : i % 3 === 1 ? 'w-8 h-8' : 'w-6 h-6'
            }`}
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced hero slides data with better structure
const heroSlides = [
  {
    id: 1,
    title: "AI-Powered Solutions",
    description: "Transform your business with cutting-edge artificial intelligence",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    id: 2,
    title: "Quantum Computing",
    description: "Unlock the power of quantum mechanics for complex problem solving",
    icon: Atom,
    color: "from-purple-500 to-pink-500",
    features: ["Quantum Algorithms", "Quantum Machine Learning", "Quantum Cryptography", "Quantum Simulation"]
  },
  {
    id: 3,
    title: "Micro SAAS Services",
    description: "Scalable software solutions tailored to your specific needs",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    features: ["Cloud Infrastructure", "API Development", "Data Analytics", "Automation Tools"]
  },
  {
    id: 4,
    title: "Cybersecurity Excellence",
    description: "Protect your digital assets with advanced security solutions",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    features: ["Zero Trust Architecture", "Threat Detection", "Incident Response", "Compliance Management"]
  },
  {
    id: 5,
    title: "Digital Transformation",
    description: "Modernize your business processes for the digital age",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
    features: ["Cloud Migration", "DevOps Implementation", "Data Strategy", "Process Automation"]
  }
];

// Enhanced stats data
const stats = [
  { number: "500+", label: "AI Models Deployed", icon: Brain, description: "Advanced AI solutions" },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield, description: "Reliable infrastructure" },
  { number: "50+", label: "Micro SAAS Services", icon: Zap, description: "Scalable solutions" },
  { number: "24/7", label: "Global Support", icon: Globe, description: "Always available" }
];

// Enhanced testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    company: "TechCorp Industries",
    content: "Zion Tech Group's AI solutions transformed our data analytics capabilities. We've seen a 300% improvement in decision-making speed.",
    avatar: "👩‍💼",
    rating: 5,
    industry: "Technology"
  },
  {
    name: "Michael Chen",
    role: "Head of Innovation",
    company: "FutureTech Solutions",
    content: "Their quantum computing platform helped us solve complex optimization problems that were previously impossible. Game-changing technology.",
    avatar: "👨‍💻",
    rating: 5,
    industry: "Research"
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Operations",
    company: "Global Logistics Inc",
    content: "The micro SAAS solutions are perfectly tailored to our needs. Fast deployment and excellent ROI. Highly recommended!",
    avatar: "👩‍🔬",
    rating: 5,
    industry: "Logistics"
  }
];

// Enhanced contact information
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 302 464 0950",
    action: "Call Now",
    href: "tel:+13024640950",
    description: "Speak with our experts"
  },
  {
    icon: Mail,
    title: "Email",
    value: "kleber@ziontechgroup.com",
    action: "Send Email",
    href: "mailto:kleber@ziontechgroup.com",
    description: "Get in touch via email"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "364 E Main St STE 1008, Middletown DE 19709",
    action: "View on Map",
    href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
    description: "Visit our headquarters"
  }
];

// Enhanced accessibility features
const AccessibilityFeatures = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    <button
      className="p-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      onClick={() => document.documentElement.classList.toggle('high-contrast')}
      aria-label="Toggle high contrast mode"
      title="High Contrast"
    >
      <Eye className="w-5 h-5" />
    </button>
    <button
      className="p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      onClick={() => document.documentElement.classList.toggle('large-text')}
      aria-label="Toggle large text mode"
      title="Large Text"
    >
      <Text className="w-5 h-5" />
    </button>
  </div>
);

// Enhanced performance monitoring
const PerformanceMonitor = () => {
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
      return () => observer.disconnect();
    }
  }, []);

  return null;
};

// Enhanced Home component with better performance and accessibility
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Performance optimization: Memoize expensive calculations
  const currentSlideData = useMemo(() => heroSlides[currentSlide], [currentSlide]);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance slides with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Loading state management
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced slide navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Enhanced accessibility: Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') document.activeElement?.blur();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  if (isLoading) {
    return <EnhancedLoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white relative overflow-hidden">
      {/* SEO Component */}
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing platforms, and innovative micro SAAS services. Expert technology consulting and digital transformation."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, cybersecurity, cloud services, Zion Tech Group"
        ogImage="/zion-tech-group-og.jpg"
        canonicalUrl="https://ziontechgroup.com"
      />

      {/* Performance Monitor */}
      <PerformanceMonitor />

      {/* Enhanced Animated Background */}
      <FuturisticBackground />

      {/* Accessibility Features */}
      <AccessibilityFeatures />

      {/* Hero Section */}
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
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Explore our comprehensive service offerings"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Get started with Zion Tech Group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Hero Slides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 md:p-12"
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${currentSlideData.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <currentSlideData.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentSlideData.title}</h3>
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">{currentSlideData.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {currentSlideData.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-cyan-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full p-3 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Enhanced Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-cyan-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentSlide ? 'true' : 'false'}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. We deliver results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`${stat.label}: ${stat.number}`}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <contact.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-300 mb-2">{contact.value}</p>
                <p className="text-sm text-gray-500 mb-4">{contact.description}</p>
                <a 
                  href={contact.href} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded px-2 py-1"
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${contact.action} for ${contact.title.toLowerCase()}`}
                >
                  {contact.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Innovative Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge micro SAAS solutions, AI services, and emerging technology platforms
            </p>
          </motion.div>
          
          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
            </div>
          }>
            <UltimateServicesShowcase2025 />
          </Suspense>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`Read testimonial from ${testimonial.name}`}
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{testimonial.avatar}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-cyan-400">{testimonial.industry}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current text-yellow-400' : 'text-gray-600'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">({testimonial.rating}/5)</span>
                  </div>
                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of technology with Zion Tech Group. Our innovative solutions are designed to drive growth, 
              efficiency, and competitive advantage for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get started with Zion Tech Group today"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                aria-label="Explore our comprehensive service offerings"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mobile Experience Notice */}
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg z-40"
        >
          <div className="flex items-center space-x-2">
            <MobileIcon className="w-4 h-4" />
            <span className="text-sm">Mobile Optimized</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
