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
import { SEO } from '@/components/SEO';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = React.useMemo(() =>
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      title: "AI-Powered Business Transformation",
      subtitle: "Revolutionize your operations with cutting-edge artificial intelligence",
      description: "From autonomous business operations to intelligent customer service, we deliver AI solutions that drive real business value.",
      image: "/images/hero/ai-transformation.jpg",
      cta: "Explore AI Solutions",
      link: "/services"
    },
    {
      title: "Quantum Computing Innovation",
      subtitle: "Next-generation computing for tomorrow's challenges",
      description: "Harness the power of quantum mechanics to solve complex problems that classical computers cannot handle.",
      image: "/images/hero/quantum-computing.jpg",
      cta: "Discover Quantum",
      link: "/quantum"
    },
    {
      title: "Cloud-Native Architecture",
      subtitle: "Scalable, secure, and resilient cloud solutions",
      description: "Build the future with our enterprise-grade cloud infrastructure and microservices architecture.",
      image: "/images/hero/cloud-architecture.jpg",
      cta: "Cloud Solutions",
      link: "/cloud"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Autonomous Business Operations",
      description: "Automate complex business processes with intelligent AI agents",
      color: "from-purple-500 to-pink-500",
      link: "/services/ai-autonomous-business-operations"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions with automated deployment and management",
      color: "from-blue-500 to-cyan-500",
      link: "/services/cloud-infrastructure-devops"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Zero Trust",
      description: "Advanced security solutions for modern threat landscapes",
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity-zero-trust"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      color: "from-green-500 to-emerald-500",
      link: "/services/digital-transformation"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our business operations with their AI solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp Solutions",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      quote: "Their quantum computing expertise helped us solve complex optimization problems that were previously impossible.",
      author: "Dr. Michael Chen",
      role: "CTO",
      company: "InnovateAI Labs",
      avatar: "/images/testimonials/michael-chen.jpg"
    },
    {
      quote: "The cloud infrastructure they built for us is rock-solid and scales seamlessly with our growth.",
      author: "Emily Rodriguez",
      role: "VP of Engineering",
      company: "CloudScale Inc",
      avatar: "/images/testimonials/emily-rodriguez.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

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
}
