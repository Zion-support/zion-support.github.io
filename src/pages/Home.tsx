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
import { SEO } from '@/components/SEO';

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
          style={{
            left: particle.left,
            top: particle.top
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
});

FuturisticBackground.displayName = 'FuturisticBackground';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence for modern businesses"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for any scale"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security to protect your digital assets"
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Transform your business with innovative technology"
    }
  ];

  const services = [
    {
      title: "AI Business Intelligence",
      description: "Advanced analytics and insights powered by AI",
      icon: BarChart3,
      href: "/services/ai-business-intelligence-platform",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Customer Experience",
      description: "Personalized customer engagement platforms",
      icon: Users,
      href: "/services/ai-customer-experience-platform",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "AI Cybersecurity",
      description: "Intelligent threat detection and response",
      icon: Shield,
      href: "/services/ai-cybersecurity",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing solutions",
      icon: Atom,
      href: "/services/quantum-computing",
      color: "from-green-500 to-blue-600"
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Projects Completed", value: "1000+", icon: CheckCircle },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Global Reach", value: "50+", icon: Globe }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Innovation Labs",
      content: "Their expertise in quantum computing and AI is unmatched. They delivered exactly what we needed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Technology",
      company: "Future Systems",
      content: "The team at Zion Tech Group is professional, innovative, and delivers exceptional results.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - AI, Quantum Computing & Digital Transformation Solutions"
        description="Leading provider of AI-powered solutions, quantum computing, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, quantum computing, digital transformation, cybersecurity, cloud services, business intelligence, customer experience"
      />

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading AI & Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> AI & Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge AI solutions, quantum computing, and digital transformation 
              services to help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/comprehensive-innovative-services-2025"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Hero Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered solutions designed to transform your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={service.href}
                  className="block bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Get started with our innovative AI solutions and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-blue-100 text-sm">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 https://ziontechgroup.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
