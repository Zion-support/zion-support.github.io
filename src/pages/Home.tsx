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
  Zap as ZapIcon2
} from 'lucide-react';
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
    </div>
  );
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

// Hero Section Component
const HeroSection: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
            Discover cutting-edge AI, Quantum Computing, and Micro SAAS services that drive innovation, 
            optimize operations, and deliver measurable results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="btn-futuristic px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started Today
              <Rocket className="ml-2 w-5 h-5" />
            </button>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection: React.FC = () => {
  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Expert Support', icon: Users },
    { number: '50+', label: 'Industry Solutions', icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Featured Services Component
const FeaturedServices: React.FC = () => {
  const featuredServices = [
    {
      name: "AI Quantum Financial Analytics Platform",
      description: "Revolutionary AI and Quantum Computing-powered financial analytics with real-time risk modeling and market intelligence",
      href: "/services/ai-quantum-financial-analytics-platform",
      icon: "📊",
      price: "From $299/month",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      name: "AI Autonomous Supply Chain Optimization",
      description: "AI-powered autonomous supply chain optimization with predictive analytics and real-time monitoring",
      href: "/services/ai-autonomous-supply-chain-optimization-platform",
      icon: "🚚",
      price: "From $199/month",
      color: "from-green-500 to-blue-500",
      hoverColor: "group-hover:text-green-400"
    },
    {
      name: "AI Autonomous Healthcare Diagnostics",
      description: "Advanced AI-powered healthcare diagnostics with autonomous medical imaging analysis and predictive health analytics",
      href: "/services/ai-autonomous-healthcare-diagnostics-platform",
      icon: "🏥",
      price: "From $399/month",
      color: "from-emerald-500 to-blue-500",
      hoverColor: "group-hover:text-emerald-400"
    },
    {
      name: "AI Autonomous Cybersecurity Intelligence",
      description: "Next-generation AI-powered cybersecurity threat intelligence with autonomous incident response and global threat monitoring",
      href: "/services/ai-autonomous-cybersecurity-threat-intelligence-platform",
      icon: "🔒",
      price: "From $249/month",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "group-hover:text-indigo-400"
    },
    {
      name: "AI Autonomous Manufacturing Optimization",
      description: "AI-driven manufacturing optimization with autonomous quality control, predictive maintenance, and supply chain integration",
      href: "/services/ai-autonomous-manufacturing-optimization-platform",
      icon: "🏭",
      price: "From $349/month",
      color: "from-orange-500 to-red-500",
      hoverColor: "group-hover:text-orange-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Revolutionary <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">AI Autonomous Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Experience the future of business automation with our cutting-edge AI Autonomous Services that deliver enterprise-grade functionality with startup simplicity
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredServices.map((service, index) => (
            <motion.div key={service.name} variants={itemVariants} className="group">
              <Link to={service.href} className="block h-full">
                <div className="card-futuristic h-full flex flex-col justify-between hover-lift">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className={`text-xl font-bold text-white mb-3 ${service.hoverColor} transition-colors duration-300`}>
                      {service.name}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-cyan-400 text-sm font-medium">{service.price}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Link 
            to="/comprehensive-services-showcase-2025" 
            className="btn-futuristic inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          >
            View All AI Autonomous Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home component
const Home: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing expertise, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, cybersecurity, cloud computing, Zion Tech Group"
      />
      
      <FuturisticBackground />
      
      <main className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        <StatsSection />
        <FeaturedServices />
        
        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our experts to discuss how our innovative services can drive your success
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                  <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/comprehensive-services-showcase-2025"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
