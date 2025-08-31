import React, { Suspense, useState, useEffect } from 'react';
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
import { SEO } from '@/components/SEO';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Zion Tech Group - AI-Powered Business Transformation"
        description="Leading provider of AI solutions, quantum computing, and cloud infrastructure. Transform your business with cutting-edge technology."
        keywords="AI, artificial intelligence, quantum computing, cloud infrastructure, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com"
      />

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
              Pioneering the future of technology with AI-powered solutions that transform businesses and empower innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Carousel */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 flex items-center justify-center ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-cyan-400 mb-6">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
                    {slide.description}
                  </p>
                  <Link 
                    to={slide.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-full text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our track record speaks for itself - delivering exceptional results across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from real businesses that have transformed with our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
