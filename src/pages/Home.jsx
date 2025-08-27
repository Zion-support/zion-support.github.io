import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnhancedSEO } from '../components/EnhancedSEO.tsx';
import { 
  ArrowRight, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Network,
  Lock,
  Code,
  Rocket,
  MessageCircle,
  BarChart3,
  FileText,
  Video,
  Heart,
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
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle
} from 'lucide-react';

// Import the enhanced services showcase component
import { EnhancedServicesShowcase } from '../components/home/EnhancedServicesShowcase';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const quickAccessItems = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue',
      link: '/services/ai'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat protection and security consulting',
      icon: Shield,
      color: 'from-zion-purple to-zion-cyan',
      link: '/services/cybersecurity'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and management',
      icon: Cloud,
      color: 'from-zion-blue to-zion-purple',
      link: '/services/cloud'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end business transformation solutions',
      icon: Zap,
      color: 'from-zion-cyan to-zion-purple',
      link: '/services/digital-transformation'
    }
  ];

  const featureHighlights = [
    {
      title: 'AI-Powered Innovation',
      description: 'Leading-edge artificial intelligence solutions that drive business growth',
      icon: Brain,
      benefits: ['Predictive Analytics', 'Process Automation', 'Intelligent Insights']
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions for modern threats',
      icon: Shield,
      benefits: ['Threat Detection', 'Zero Trust Security', 'Compliance Management']
    },
    {
      title: 'Global Infrastructure',
      description: 'Worldwide network and cloud infrastructure support',
      icon: Globe,
      benefits: ['Multi-Cloud Management', 'Edge Computing', 'Global CDN']
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring',
      icon: MessageCircle,
      benefits: ['Live Chat', 'Phone Support', 'Emergency Response']
    }
  ];

  const serviceCategories = [
    { name: 'AI & Machine Learning', icon: Brain, count: 25, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Cybersecurity', icon: Shield, count: 18, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Cloud & DevOps', icon: Cloud, count: 22, color: 'from-zion-blue to-zion-purple' },
    { name: 'Data & Analytics', icon: TrendingUp, count: 20, color: 'from-zion-cyan to-zion-purple' },
    { name: 'IoT & Edge Computing', icon: Network, count: 15, color: 'from-zion-purple to-zion-blue' },
    { name: 'Quantum Computing', icon: Rocket, count: 8, color: 'from-zion-blue to-zion-cyan' }
  ];

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - Advanced Technology Solutions"
        description="Leading provider of AI, cybersecurity, cloud services, and digital transformation solutions. Transform your business with cutting-edge technology services."
        keywords="AI solutions, cybersecurity, cloud services, digital transformation, technology consulting, IT services, machine learning, quantum computing"
        canonical="https://ziontechgroup.com"
      />
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-4 h-4 mr-2" />
              Trusted by 500+ Global Companies
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
              Transform your business with intelligent automation and next-generation cybersecurity.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-zion-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/comprehensive-services">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/comprehensive-pricing">
                <motion.button 
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                  <TrendingUp className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22ddd2 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quick Access to Premium Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get instant access to our most popular and in-demand technology solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {quickAccessItems.map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="group block"
                aria-label={`Access ${item.title} services`}
              >
                <motion.div 
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI & Machine Learning",
                description: "Cutting-edge artificial intelligence solutions for business automation and insights",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Advanced security solutions with zero-trust architecture and threat protection",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: Cloud,
                title: "Cloud & Infrastructure",
                description: "Scalable cloud solutions and DevOps automation for modern businesses",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Feature Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, #22ddd2 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the unique advantages that set us apart in the technology industry
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {featureHighlights.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-cyan">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-white">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22ddd2 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Explore Our Service Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div 
                  key={category.name}
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-white font-medium text-sm group-hover:text-zion-cyan transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-zion-slate-light text-xs mt-1">{category.count} services</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Global Clients" },
              { value: "25+", label: "Countries" },
              { value: "1000+", label: "Projects" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-cyan-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can drive your success
            </p>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
