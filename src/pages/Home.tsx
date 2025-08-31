import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
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

// SEO Component
const SEO = () => (
  <div className="sr-only">
    <title>Zion Tech Group - Leading AI & Technology Solutions</title>
    <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, IoT, and digital transformation solutions. Expert consulting and innovative technology services." />
    <meta name="keywords" content="AI solutions, quantum computing, IoT, digital transformation, technology consulting, cybersecurity, cloud services" />
    <link rel="canonical" href="https://ziontechgroup.com/" />
  </div>
);

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
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
      title: "AI-Powered Innovation",
      description: "Transform your business with cutting-edge artificial intelligence solutions",
      icon: Brain,
      features: ["Machine Learning", "Predictive Analytics", "Natural Language Processing"]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for breakthrough discoveries",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography"]
    },
    {
      title: "Cybersecurity Excellence",
      description: "Protect your digital assets with advanced security protocols",
      icon: Shield,
      features: ["Threat Detection", "Zero Trust", "Compliance"]
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Future of Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Zion Tech Group delivers cutting-edge AI, quantum computing, and digital transformation 
            solutions that propel businesses into the next generation of innovation.
          </p>
          
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 mx-auto"
            aria-label="Get started with Zion Tech"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Hero Slides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                {React.createElement(heroSlides[currentSlide].icon, { className: "w-12 h-12 text-cyan-400" })}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              {heroSlides[currentSlide].title}
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Statistics section
const StatsSection = React.memo(() => {
  const stats = useMemo(() => [
    { label: "AI Solutions", value: "50+", icon: Brain, color: "from-cyan-500 to-blue-600" },
    { label: "Global Clients", value: "200+", icon: Globe, color: "from-blue-500 to-purple-600" },
    { label: "Success Rate", value: "98%", icon: Award, color: "from-green-500 to-emerald-600" },
    { label: "Years Experience", value: "15+", icon: Clock, color: "from-purple-500 to-pink-600" }
  ], []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Featured services section
const FeaturedServices = React.memo(() => {
  const featuredServices = useMemo(() => [
    {
      title: "AI-Powered Analytics",
      description: "Advanced business intelligence with machine learning insights",
      icon: Brain,
      path: "/ai-services",
      features: ["Real-time Data Processing", "Predictive Analytics", "Custom Dashboards", "API Integration"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: Cloud,
      path: "/it-services",
      features: ["Multi-cloud Strategy", "DevOps Automation", "Security & Compliance", "24/7 Monitoring"]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Custom software solutions for specific business needs",
      icon: Zap,
      path: "/micro-saas",
      features: ["Custom Development", "Scalable Architecture", "API-First Design", "Cloud Deployment"]
    }
  ], []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered insights to quantum computing breakthroughs, 
            we deliver cutting-edge solutions that drive innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-3">Key Features:</div>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={service.path}
                className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturedServices.displayName = 'FeaturedServices';

// Testimonials section
const TestimonialsSection = React.memo(() => {
  const testimonials = useMemo(() => [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "👩‍💼",
      rating: 5,
      content: "Zion Tech Group transformed our data infrastructure with their AI solutions. The results exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      avatar: "👨‍💼",
      rating: 5,
      content: "Their quantum computing expertise gave us a competitive edge in the market. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      avatar: "👩‍🔬",
      rating: 5,
      content: "The cybersecurity implementation was seamless and robust. Our data has never been safer."
    }
  ], []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders 
            have to say about working with Zion Tech Group.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

// CTA section
const CTASection = React.memo(() => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of companies already leveraging our cutting-edge technology 
            solutions to stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Consultation
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

// Main Home component
const Home: React.FC = () => {
  const handleGetStarted = () => {
    // Handle get started action
    console.log('Get started clicked');
  };

  return (
    <>
      <SEO />
      <FuturisticBackground />
      
      <main className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        <StatsSection />
        <FeaturedServices />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;
