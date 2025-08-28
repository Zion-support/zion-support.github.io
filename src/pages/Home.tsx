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
  ArrowUpRight,
  Sparkles as SparklesIcon
} from 'lucide-react';

// Import new components
import ThemeToggle from '../components/ThemeToggle';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SEO from '../components/SEO';

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
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const seoData = {
    title: "Zion Tech Group - AI, Cloud & Cybersecurity Solutions",
    description: "Leading provider of innovative AI, cloud computing, and cybersecurity solutions. Transform your business with cutting-edge technology.",
    keywords: ["AI", "Machine Learning", "Cloud Computing", "Cybersecurity", "Digital Transformation", "IT Services"],
    canonicalUrl: "https://ziontechgroup.com",
    ogImage: "https://ziontechgroup.com/og-image.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "AI, Cloud, and Cybersecurity Solutions",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.svg",
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ]
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* SEO Component */}
      <SEO data={seoData} showAnalysis={false} />
      
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Performance Monitor */}
      <div className="fixed top-4 left-4 z-50">
        <PerformanceMonitor showDetails={false} />
      </div>

      {/* Accessibility Enhancer */}
      <AccessibilityEnhancer />

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <FuturisticBackground />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Future-Ready
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, cloud computing, and cybersecurity solutions. 
              We deliver innovation that drives growth and secures your digital future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/services"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get Started Today
              <ArrowUpRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Projects Delivered", icon: Rocket },
              { number: "50+", label: "AI Solutions", icon: Brain },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { number: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* 2025 Services Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Introducing Our 2025 Innovative Services
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge AI, IT, and Micro SaaS solutions designed for the future of business technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "AI Services 2025",
                  description: "Quantum-enhanced machine learning, advanced NLP, and computer vision solutions",
                  icon: Brain,
                  color: "from-purple-500 to-pink-500",
                  count: "9 Services"
                },
                {
                  title: "IT Services 2025",
                  description: "Quantum cloud computing, blockchain solutions, and edge computing infrastructure",
                  icon: Server,
                  color: "from-blue-500 to-cyan-500",
                  count: "9 Services"
                },
                {
                  title: "Micro SaaS 2025",
                  description: "AI-powered financial modeling, content creation, and business automation tools",
                  icon: Zap,
                  color: "from-green-500 to-emerald-500",
                  count: "10 Services"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 mb-3">{service.description}</p>
                  <div className="text-cyan-400 font-semibold">{service.count}</div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/comprehensive-services-showcase-2025"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore All 2025 Services
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Innovation",
                description: "Leverage the latest artificial intelligence and machine learning technologies to automate processes and gain competitive advantages.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Cloud,
                title: "Cloud-First Approach",
                description: "Scalable, secure, and cost-effective cloud solutions that grow with your business needs.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Comprehensive cybersecurity solutions that protect your data, applications, and infrastructure from evolving threats.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                description: "Strategic consulting and implementation services to modernize your technology stack and business processes.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with deep expertise in the latest technologies and industry best practices.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Rocket,
                title: "Rapid Deployment",
                description: "Agile development methodologies that deliver working solutions quickly and iterate based on feedback.",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of companies that have already revolutionized their operations with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                View All Services
                <ArrowUpRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your next project? Contact our team of experts today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                contact: "+1 302 464 0950",
                href: "tel:+13024640950",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Mail,
                title: "Email",
                contact: "kleber@ziontechgroup.com",
                href: "mailto:kleber@ziontechgroup.com",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: MapPin,
                title: "Address",
                contact: "364 E Main St STE 1008 Middletown DE 19709",
                href: "#",
                color: "from-purple-500 to-pink-500"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{contact.title}</h3>
                <a
                  href={contact.href}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  {contact.contact}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
