import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud
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

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = useMemo(() => [
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration']
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and response for comprehensive security',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation']
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support']
    },
    {
      name: 'AI Healthcare Analytics',
      description: 'Predictive diagnostics and care optimization powered by AI',
      icon: Heart,
      href: '/services/ai-healthcare-analytics',
      color: 'from-green-600 to-emerald-600',
      features: ['Predictive analytics', 'Diagnostic support', 'Care optimization']
    }
  ], []);

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'Threat Intelligence', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Compliance Automation', href: '/services/ai-compliance-assistant' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Edge Computing', href: '/services/edge-computing-platform' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Space Technology', href: '/services/space-tech' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'IoT & Edge', href: '/services/iot-edge' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' }
      ]
    }
  ];

  const microSaaSProducts = [
    {
      name: 'AI Sales Copilot',
      description: 'Complete sales automation suite with AI-powered insights',
      icon: TrendingUp,
      href: '/services/ai-sales-copilot',
      price: '$299/month'
    },
    {
      name: 'AI Support Helpdesk',
      description: 'Intelligent customer support platform with 24/7 availability',
      icon: MessageCircle,
      href: '/services/ai-support-helpdesk',
      price: '$199/month'
    },
    {
      name: 'AI Content Generator',
      description: 'AI-powered content creation and optimization platform',
      icon: BookOpen,
      href: '/services/ai-content-generator',
      price: '$149/month'
    },
    {
      name: 'AI Lead Scoring',
      description: 'Machine learning-based lead prioritization and scoring',
      icon: Target,
      href: '/services/ai-lead-scoring',
      price: '$99/month'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our AI strategy. Their Enterprise Orchestrator increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Director of IT, HealthFirst',
      content: 'The AI Healthcare Analytics platform has revolutionized our diagnostic capabilities and patient care.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, FinTech Solutions',
      content: 'Outstanding cybersecurity solutions. Their AI-powered threat detection is cutting-edge and reliable.',
      rating: 5
    }
  ];

  return (
    <div className="relative">
      <FuturisticBackground />
      <div className="relative z-10">
        {/* Hero content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Transforming Business Through
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Zion Tech Group delivers cutting-edge AI solutions, micro SaaS products, and strategic IT services 
            that drive digital transformation and business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

HeroSection.displayName = 'HeroSection';

// Main Home component
export default function Home() {
  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain, description: 'Cutting-edge AI services' },
    { label: 'Micro SaaS', value: '25+', icon: Rocket, description: 'Innovative products' },
    { label: 'Enterprise Clients', value: '100+', icon: Building, description: 'Trusted partnerships' },
    { label: 'Success Rate', value: '99%', icon: CheckCircle, description: 'Proven results' }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <HeroSection onGetStarted={() => {}} />
          </div>
        </section>
      </div>
    </>
  );
}
