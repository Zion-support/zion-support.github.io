import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Building2,
  Truck,
  Scale,
  BookOpen,
  Home
} from 'lucide-react';

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

// Enhanced Hero Section with improved animations
const HeroSection = React.memo(() => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroTexts = [
    "AI-Powered Solutions",
    "Digital Transformation",
    "Innovation at Scale",
    "Future-Ready Technology"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  const scrollToServices = useCallback(() => {
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <FuturisticBackground />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Enhanced Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mb-6 shadow-2xl shadow-cyan-400/25">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
        </motion.div>

        {/* Dynamic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Leading the future of technology with cutting-edge
          </p>
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-cyan-400"
          >
            {heroTexts[currentTextIndex]}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your business with our comprehensive suite of AI, quantum computing, and micro SAAS solutions. 
          We help organizations of all sizes accelerate their digital transformation journey.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Get Started</span>
            <Rocket className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm">SOC 2 Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Industry Leader</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Services Section
const ServicesSection = React.memo(() => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for business automation and optimization",
      href: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem solving",
      href: "/quantum-computing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and DevOps automation services",
      href: "/cloud-devops",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      href: "/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Building2,
      title: "Micro SAAS",
      description: "Innovative micro SAAS solutions for modern businesses",
      href: "/micro-saas",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      href: "/digital-transformation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our innovative solutions designed to transform your business and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.href}
                className="block p-6 bg-zion-slate rounded-xl border border-zion-slate-light hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

// Contact Section
const ContactSection = React.memo(() => {
  return (
    <section className="py-20 bg-zion-slate-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <a
              href="tel:+13024640950"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              +1 302 464 0950
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              kleber@ziontechgroup.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <a
              href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              364 E Main St STE 1008<br />Middletown DE 19709
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home Component
const Home = () => {
  return (
    <>
      <SEO
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
        ogImage="/og-image.jpg"
        canonicalUrl="https://ziontechgroup.com"
      />
      
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
