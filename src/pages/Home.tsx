import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      color: "from-purple-500 to-indigo-600",
      link: "/ai-services"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and management",
      color: "from-blue-500 to-cyan-600",
      link: "/it-services"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      color: "from-red-500 to-pink-600",
      link: "/micro-saas"
    },
    {
      icon: Rocket,
      title: "Micro SAAS",
      description: "Innovative software-as-a-service solutions",
      color: "from-green-500 to-emerald-600",
      link: "/micro-saas"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 technical support and consultation"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful implementations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Transform Your Business with
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, 
            and AI-powered platforms designed to drive business transformation and growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/comprehensive-services">
              <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Explore Services
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-zion-cyan font-semibold mb-1">{stat.label}</p>
                <p className="text-zion-slate-light text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From AI-powered analytics to enterprise infrastructure, we provide comprehensive 
              solutions that scale with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className={`w-full h-48 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300`}>
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver innovative, scalable, and cost-effective solutions that drive real business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Schedule Consultation
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                  <Mail className="inline mr-2 h-5 w-5" />
                  Request Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6 text-zion-slate-light mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-zion-cyan" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/comprehensive-services">
                <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Explore All Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Contact Sales Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
