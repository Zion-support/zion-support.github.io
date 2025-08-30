import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Eye,
  AlertTriangle,
  Target,
  PieChart,
  Activity,
  Bell,
  RefreshCw,
  MapPin,
  Wifi,
  Bluetooth,
  CreditCard,
  Wallet,
  PiggyBank,
  Home,
  Navigation,
  Compass,
  World,
  Flag,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Tag,
  Label,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  ListOrdered,
  ListUnordered,
  Quote,
  Code as CodeIcon,
  Link as LinkIcon,
  Image,
  Video,
  Music,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  HardDrive,
  Archive,
  Inbox,
  Send,
  MailOpen,
  MailCheck,
  MailWarning,
  MailX,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  Voicemail,
  MessageSquare,
  MessageCircle as MessageCircleIcon,
  MessageSquare as MessageSquareIcon,
  MessageCircle as MessageCircleIcon2,
  MessageSquare as MessageSquareIcon2,
  MessageCircle as MessageCircleIcon3,
  MessageSquare as MessageSquareIcon3,
  MessageCircle as MessageCircleIcon4,
  MessageSquare as MessageSquareIcon4,
  MessageCircle as MessageCircleIcon5,
  MessageSquare as MessageSquareIcon5,
  MessageCircle as MessageCircleIcon6,
  MessageSquare as MessageSquareIcon6,
  MessageCircle as MessageCircleIcon7,
  MessageSquare as MessageSquareIcon7,
  MessageCircle as MessageCircleIcon8,
  MessageSquare as MessageSquareIcon8,
  MessageCircle as MessageCircleIcon9,
  MessageSquare as MessageSquareIcon9,
  MessageCircle as MessageCircleIcon10,
  MessageSquare as MessageSquareIcon10
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const heroStats = [
    { label: 'AI Solutions', value: '50+', icon: Brain },
    { label: 'Enterprise Clients', value: '200+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star }
  ];

  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Advanced AI solutions for business intelligence and analytics',
      services: [
        { 
          name: 'AI Business Intelligence', 
          href: '/services/ai-business-intelligence',
          description: 'Advanced analytics and business intelligence powered by machine learning',
          price: 'From $2,500/month',
          features: ['Predictive analytics', 'Data visualization', 'Business insights', 'Performance tracking']
        },
        { 
          name: 'AI Customer Experience Analytics', 
          href: '/services/ai-customer-experience-analytics',
          description: 'AI-powered customer insights with real-time sentiment analysis and predictive behavior modeling',
          price: 'From $199/month',
          features: ['Real-time sentiment analysis', 'Customer journey mapping', 'Predictive analytics', 'Multi-channel tracking']
        },
        { 
          name: 'AI Content Generation Platform', 
          href: '/services/ai-content-generation-platform',
          description: 'AI-powered content creation and optimization for marketing and communications',
          price: 'From $199/month',
          features: ['Content creation', 'SEO optimization', 'Brand consistency', 'Multi-format support']
        },
        { 
          name: 'AI Marketing Automation', 
          href: '/services/ai-marketing-automation',
          description: 'Intelligent marketing campaign optimization and customer engagement',
          price: 'From $399/month',
          features: ['Campaign optimization', 'Customer segmentation', 'A/B testing', 'ROI tracking']
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Comprehensive security and compliance solutions',
      services: [
        { 
          name: 'AI Cybersecurity Suite', 
          href: '/services/ai-cybersecurity-suite',
          description: 'AI-powered threat detection and response for comprehensive security',
          price: 'From $799/month',
          features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Advanced analytics']
        },
        { 
          name: 'AI Financial Compliance Assistant', 
          href: '/services/ai-financial-compliance-assistant',
          description: 'AI-powered financial compliance monitoring and automated reporting',
          price: 'From $299/month',
          features: ['Real-time monitoring', 'AI risk assessment', 'Automated reporting', 'Multi-jurisdiction support']
        },
        { 
          name: 'Zero Trust Network Architecture', 
          href: '/services/zero-trust-network-architecture',
          description: 'Modern security architecture with continuous verification and least-privilege access',
          price: 'From $1,299/month',
          features: ['Continuous verification', 'Least-privilege access', 'Micro-segmentation', 'Advanced monitoring']
        },
        { 
          name: 'AI Cybersecurity Threat Detection', 
          href: '/services/ai-cybersecurity-threat-detection',
          description: 'Advanced AI-powered threat detection and response system',
          price: 'From $899/month',
          features: ['Real-time detection', 'Behavioral analysis', 'Automated response', 'Threat intelligence']
        }
      ]
    },
    {
      name: 'Supply Chain & Operations',
      icon: Globe,
      color: 'from-blue-600 to-cyan-600',
      description: 'AI-powered supply chain optimization and risk management',
      services: [
        { 
          name: 'AI Supply Chain Optimization', 
          href: '/services/ai-supply-chain-optimization',
          description: 'Intelligent supply chain optimization with predictive analytics',
          price: 'From $599/month',
          features: ['Demand forecasting', 'Inventory optimization', 'Route optimization', 'Cost reduction']
        },
        { 
          name: 'AI Supply Chain Risk Management', 
          href: '/services/ai-supply-chain-risk-management',
          description: 'Comprehensive risk monitoring and predictive analytics for supply chains',
          price: 'From $399/month',
          features: ['Real-time monitoring', 'AI risk prediction', 'Multi-tier mapping', 'Geopolitical analysis']
        },
        { 
          name: 'AI Healthcare Analytics Platform', 
          href: '/services/ai-healthcare-analytics-platform',
          description: 'Predictive diagnostics and care optimization powered by AI',
          price: 'From $1,299/month',
          features: ['Predictive analytics', 'Diagnostic support', 'Care optimization', 'Patient monitoring']
        },
        { 
          name: 'AI IoT Edge Computing Platform', 
          href: '/services/ai-iot-edge-computing-platform',
          description: 'Intelligent edge computing solutions for IoT devices',
          price: 'From $799/month',
          features: ['Edge AI processing', 'Real-time analytics', 'Device management', 'Security integration']
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      description: 'Cutting-edge technology solutions for the future',
      services: [
        { 
          name: 'Quantum AI Platform', 
          href: '/services/quantum-ai-platform',
          description: 'Next-generation quantum computing solutions for complex problem solving',
          price: 'From $2,999/month',
          features: ['Quantum algorithms', 'Optimization', 'Research support', 'Advanced computing']
        },
        { 
          name: 'AI Quantum Hybrid Platform', 
          href: '/services/ai-quantum-hybrid-platform',
          description: 'Hybrid AI and quantum computing solutions',
          price: 'From $3,999/month',
          features: ['Hybrid computing', 'Quantum AI', 'Advanced algorithms', 'Research collaboration']
        },
        { 
          name: 'Space Technology Solutions', 
          href: '/services/space-tech',
          description: 'Innovative space technology and satellite solutions',
          price: 'From $1,999/month',
          features: ['Satellite technology', 'Space analytics', 'Orbital solutions', 'Research support']
        },
        { 
          name: 'Digital Twin Platform', 
          href: '/services/digital-twin',
          description: 'Digital twin technology for simulation and optimization',
          price: 'From $899/month',
          features: ['3D modeling', 'Real-time simulation', 'Predictive maintenance', 'Performance optimization']
        }
      ]
    }
  ];

  const microSaaSProducts = [
    {
      name: 'AI Sales Copilot',
      description: 'Complete sales automation suite with AI-powered insights',
      icon: TrendingUp,
      href: '/services/ai-sales-copilot',
      price: '$299/month',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline management', 'Performance analytics']
    },
    {
      name: 'AI Support Helpdesk',
      description: 'Intelligent customer support platform with 24/7 availability',
      icon: MessageCircle,
      href: '/services/ai-support-helpdesk',
      price: '$199/month',
      features: ['24/7 support', 'AI chatbots', 'Ticket management', 'Knowledge base']
    },
    {
      name: 'AI Content Generator',
      description: 'AI-powered content creation and optimization platform',
      icon: BookOpen,
      href: '/services/ai-content-generator',
      price: '$149/month',
      features: ['Content creation', 'SEO optimization', 'Multi-format support', 'Brand consistency']
    },
    {
      name: 'AI Lead Scoring',
      description: 'Machine learning-based lead prioritization and scoring',
      icon: Target,
      href: '/services/ai-lead-scoring',
      price: '$99/month',
      features: ['Lead scoring', 'Behavioral analysis', 'Conversion prediction', 'ROI optimization']
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

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              2025 Comprehensive Services Showcase
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Zion Tech Group
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete Service Portfolio
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Discover our comprehensive suite of AI-powered solutions, IT services, and micro SAAS platforms designed to transform your business operations and drive innovation.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Complete Service Portfolio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              From AI-powered analytics to cybersecurity and emerging technologies, we provide comprehensive solutions for every business need.
            </motion.p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <div className="text-lg font-bold text-green-400">{service.price}</div>
                      </div>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Products Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Micro SAAS Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Ready-to-deploy AI-powered applications that solve specific business challenges
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaaSProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={product.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses that have transformed with Zion Tech Group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Contact us today to discuss your needs and discover how our solutions can help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Visit our website: <a href={contactInfo.website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{contactInfo.website}</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already accelerated their growth with our comprehensive AI solutions and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
