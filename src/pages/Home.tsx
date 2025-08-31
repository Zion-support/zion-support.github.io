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

// Optimized futuristic animated background component with reduced re-renders
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.15,
      duration: 6 + i * 0.4
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Optimized animated grid with reduced opacity for better performance */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

      {/* Optimized floating particles with reduced count */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 shadow-lg shadow-cyan-400/30"
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.4, 1.1, 0.4],
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

// Optimized hero section with better accessibility
const HeroSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <FuturisticBackground />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering the future with cutting-edge AI, quantum computing, and innovative technology solutions
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Services
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

// Optimized features section with better performance
const FeaturesSection = React.memo(() => {
  const features = useMemo(() => [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Advanced artificial intelligence for business transformation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern enterprises",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security and compliance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Innovation Lab",
      description: "Cutting-edge research and development",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide technology consulting services",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized solutions for maximum efficiency",
      color: "from-yellow-500 to-orange-500"
    }
  ], []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Optimized stats section
const StatsSection = React.memo(() => {
  const stats = useMemo(() => [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: ShieldCheck },
    { number: "24/7", label: "Support Available", icon: Clock }
  ], []);

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-cyan-300 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Optimized CTA section
const CTASection = React.memo(() => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Let's discuss how our innovative solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home component with optimized rendering
const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default Home;
