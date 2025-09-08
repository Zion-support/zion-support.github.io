import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Star,
  Crown,
  Sparkles,
  Target,
  Award,
  Code,
  Server,
  Cloud,
  Heart,
  Leaf,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Gauge,
  GitFork,
  Atom,
  Eye,
  Smartphone,
  Truck,
  Factory,
  City,
  CheckCircle2,
  PenTool,
  Image,
  Video,
  FileText,
  Layers,
  Type,
  Share2,
  ShoppingCart,
  Home,
  Palette,
  Camera,
  Mic,
  Play,
  Music,
  Network2,
  AlertTriangle,
  Key,
  Fingerprint,
  ServerCrash
} from 'lucide-react';

export default function ComprehensiveServicesLanding2027() {
  const featuredServices = [
    {
      title: 'AI Autonomous Business Operations Platform',
      description: 'Transform your business with autonomous AI operations. Our platform makes intelligent decisions, optimizes processes, and drives unprecedented efficiency 24/7.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-autonomous-business-operations-platform',
      features: [
        'AI-Powered Decision Making',
        'Autonomous Process Optimization',
        'Predictive Analytics',
        'Real-time Monitoring',
        'Intelligent Resource Allocation',
        'Automated Risk Management'
      ],
      pricing: {
        starter: 299,
        professional: 799,
        enterprise: 1999
      },
      benefits: [
        'Reduce operational costs by up to 40%',
        'Increase efficiency by 60%',
        'Improve decision accuracy by 95%',
        '24/7 autonomous operations'
      ]
    },
    {
      title: 'AI Sales Intelligence Platform',
      description: 'Revolutionize your sales process with AI-powered intelligence. Automate lead scoring, predict outcomes, and optimize every sales interaction for maximum conversion.',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-sales-intelligence-platform',
      features: [
        'AI-Powered Lead Scoring',
        'Predictive Sales Analytics',
        'Real-time Market Intelligence',
        'Automated Sales Outreach',
        'Customer Behavior Analysis',
        'Sales Performance Optimization'
      ],
      pricing: {
        starter: 199,
        professional: 499,
        enterprise: 1299
      },
      benefits: [
        'Increase sales conversion rates by up to 300%',
        'Reduce lead qualification time by 80%',
        'Improve sales forecasting accuracy by 95%',
        'Automate repetitive sales tasks'
      ]
    },
    {
      title: 'Quantum AI Cybersecurity Platform',
      description: 'Future-proof your security with quantum-resistant encryption and AI-powered threat detection. Our platform provides unparalleled protection against emerging cyber threats.',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      href: '/services/quantum-ai-cybersecurity-platform',
      features: [
        'Quantum-Resistant Encryption',
        'AI-Powered Threat Detection',
        'Zero-Trust Architecture',
        'Advanced Behavioral Analytics',
        'Automated Incident Response',
        'Quantum Key Distribution'
      ],
      pricing: {
        starter: 399,
        professional: 899,
        enterprise: 2499
      },
      benefits: [
        'Protect against quantum computing attacks',
        'Reduce security incidents by up to 95%',
        'Real-time threat detection and response',
        'Compliance with international security standards'
      ]
    },
    {
      title: 'AI Content Creation Studio',
      description: 'Transform your content strategy with AI-powered creation. Generate engaging, SEO-optimized content at scale while maintaining your unique brand voice.',
      icon: PenTool,
      color: 'from-emerald-500 to-teal-500',
      href: '/services/ai-content-creation-studio',
      features: [
        'AI Text Generation',
        'Visual Content Creation',
        'Multi-Format Output',
        'Brand Voice Consistency',
        'SEO Optimization',
        'Content Analytics'
      ],
      pricing: {
        starter: 99,
        professional: 299,
        enterprise: 799
      },
      benefits: [
        'Increase content production by up to 500%',
        'Reduce content creation costs by 70%',
        'Improve SEO rankings with optimized content',
        'Maintain consistent brand voice'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics with AI-powered insights for improved patient outcomes and operational efficiency.',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      href: '/services/ai-healthcare-analytics',
      pricing: 'Starting at $599/month'
    },
    {
      title: 'AI Financial Trading Platform',
      description: 'Intelligent trading algorithms with real-time market analysis and automated portfolio optimization.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      href: '/services/ai-financial-trading',
      pricing: 'Starting at $799/month'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'End-to-end supply chain visibility with AI-driven optimization and predictive analytics.',
      icon: Truck,
      color: 'from-orange-500 to-yellow-500',
      href: '/services/ai-supply-chain-optimization',
      pricing: 'Starting at $699/month'
    },
    {
      title: 'AI Legal Document Analysis',
      description: 'Automated legal document review and analysis with AI-powered contract intelligence.',
      icon: FileText,
      color: 'from-indigo-500 to-blue-500',
      href: '/services/ai-legal-document-analysis',
      pricing: 'Starting at $399/month'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive AI & Micro SAAS Services 2027 | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services. From autonomous business operations to quantum cybersecurity, transform your business with cutting-edge technology."
        keywords="AI services, micro SAAS, business automation, cybersecurity, sales intelligence, content creation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Services 2027
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive AI &
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our cutting-edge AI-powered micro SAAS solutions. 
              From autonomous operations to quantum cybersecurity, we provide the tools you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship services designed to revolutionize your business operations
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-xl text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {service.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-slate-700/30 rounded-2xl p-6 mb-6">
                        <h4 className="text-xl font-semibold text-white mb-4">Pricing Plans</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Starter</span>
                            <span className="text-white font-semibold">${service.pricing.starter}/month</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Professional</span>
                            <span className="text-white font-semibold">${service.pricing.professional}/month</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Enterprise</span>
                            <span className="text-white font-semibold">${service.pricing.enterprise}/month</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-2xl p-6">
                        <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our complete portfolio of AI-powered solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-purple-300 font-semibold mb-4">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss your specific needs and discover how our AI services can help you succeed
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Visit Website
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}