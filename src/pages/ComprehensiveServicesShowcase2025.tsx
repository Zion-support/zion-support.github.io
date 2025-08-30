import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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
  Cloud,
  Coins,
  Activity,
  BarChart,
  Target,
  Handshake,
  Eye,
  Workflow,
  Bot,
  HardDrive,
  Building2,
  HelpCircle,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      title: 'AI Edge Computing Platform',
      description: 'Revolutionary AI-powered edge computing for real-time processing and IoT optimization',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      price: 'Starting at $299/month',
      features: ['Real-time AI processing', 'IoT optimization', '5G network enhancement', 'Edge security'],
      href: '/services/ai-edge-computing-platform'
    },
    {
      title: 'AI Quantum Financial Trading',
      description: 'Next-generation AI-powered quantum computing for financial markets',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      price: 'Starting at $199/month',
      features: ['Quantum AI algorithms', 'Real-time analysis', 'Risk management', 'Multi-asset trading'],
      href: '/services/ai-quantum-financial-trading-platform'
    },
    {
      title: 'AI Healthcare Predictive Analytics',
      description: 'Transform healthcare with AI-powered predictive analytics and early detection',
      icon: Heart,
      color: 'from-green-600 to-emerald-600',
      price: 'Starting at $399/month',
      features: ['Predictive diagnostics', 'Risk assessment', 'Treatment optimization', 'HIPAA compliant'],
      href: '/services/ai-healthcare-predictive-analytics-platform'
    },
    {
      title: 'AI Cybersecurity Threat Intelligence',
      description: 'Advanced AI-powered cybersecurity with real-time threat detection and response',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      price: 'Starting at $299/month',
      features: ['AI threat detection', 'Behavioral analytics', 'Incident response', 'SOC 2 compliant'],
      href: '/services/ai-cybersecurity-threat-intelligence-platform'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Discover our complete portfolio of innovative AI, IT, and Micro SAAS solutions. Transform your business with cutting-edge technology."
        keywords="AI services, IT services, Micro SAAS, edge computing, quantum trading, healthcare analytics, cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of innovative AI, IT, and Micro SAAS solutions. 
              Transform your business with cutting-edge technology and expert consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                View All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most popular and innovative services designed to transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <div className="text-xl font-bold text-zion-cyan mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our team to discuss your project requirements and get a personalized solution.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-zion-slate-light">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zion-slate-light">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-zion-slate-light">
                <MapPin className="w-5 h-5 text-zion-cyan" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
