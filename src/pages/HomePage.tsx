import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Play,
  Sparkles,
  Zap,
  Brain,
  Shield,
  HardDrive,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Database,
  Network,
  Smartphone,
  Lock,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

// Optimized futuristic animated background component
const FuturisticBackground: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
};

// Floating Action Button Component
const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative">
            {/* Quick Actions */}
            {isExpanded && (
              <div className="absolute bottom-16 right-0 space-y-3">
                <a
                  href="tel:+15551234567"
                  className="block w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="block w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="block w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            )}
            
            {/* Main FAB */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-white"
            >
              {isExpanded ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Hero Section
const HeroSection: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <FuturisticBackground />
    
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Main Heading */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            Transform Your Business
          </span>
          <br />
          <span className="text-white">With AI-Powered</span>
          <br />
          <span className="text-white">Technology Solutions</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
          Empowering enterprises with cutting-edge AI automation, cybersecurity, cloud infrastructure, 
          and digital transformation services that drive innovation and growth.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Link
          to="/services"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Explore Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
        >
          Get Started
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-zion-cyan" />
          <span>500+ Clients Worldwide</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-zion-cyan" />
          <span>99.9% Uptime Guarantee</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-zion-cyan" />
          <span>24/7 Expert Support</span>
        </div>
      </div>
    </div>
  </section>
);

// Services Overview Section
const ServicesOverview: React.FC = () => (
  <section className="py-20 bg-zion-blue-dark/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Comprehensive Technology Solutions
        </h2>
        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
          From AI automation to cybersecurity, we provide end-to-end solutions that transform 
          businesses and drive digital innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* AI & Automation */}
        <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">AI & Automation</h3>
          <p className="text-zion-slate-light mb-4">
            Intelligent automation solutions that streamline operations and enhance decision-making.
          </p>
          <Link
            to="/services/ai-automation"
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Cloud & DevOps */}
        <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <HardDrive className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Cloud & DevOps</h3>
          <p className="text-zion-slate-light mb-4">
            Scalable cloud infrastructure and DevOps automation for modern applications.
          </p>
          <Link
            to="/services/cloud-devops"
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Cybersecurity */}
        <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group">
          <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
          <p className="text-zion-slate-light mb-4">
            Advanced security solutions and compliance automation for enterprise protection.
          </p>
          <Link
            to="/services/cybersecurity"
            className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
          >
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue-darker">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
          <div className="text-zion-slate-light">Happy Clients</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">1000+</div>
          <div className="text-zion-slate-light">Projects Completed</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
          <div className="text-zion-slate-light">Uptime Guarantee</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">24/7</div>
          <div className="text-zion-slate-light">Expert Support</div>
        </div>
      </div>
    </div>
  </section>
);

// CTA Section
const CTASection: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-zion-slate-light mb-8">
        Let's discuss how our technology solutions can drive innovation and growth for your organization.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-purple/90 hover:to-zion-cyan/90 transition-all duration-200"
        >
          Get Started Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
        >
          Explore Services
        </Link>
      </div>
    </div>
  </section>
);

export function HomePage() {
  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <CTASection />
      <FloatingActionButton />
    </div>
  );
}
