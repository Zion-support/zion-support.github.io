import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Database, 
  Truck, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Cloud,
  Cpu,
  Workflow,
  BarChart3,
  MessageCircle,
  Calendar,
  Activity,
  Target,
  DollarSign,
  Clock,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  Award,
  Globe,
  Building2,
  FileText,
  Heart,
  ShoppingCart,
  Lock,
  Network,
  Atom,
  Wifi,
  Server,
  Palette,
  PenTool,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Link as LinkIcon,
  Copy,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';

const InnovativeServicesShowcase2026 = () => {
  const featuredServices = [
    {
      icon: Database,
      title: "AI Enterprise Resource Planning",
      description: "Transform your business operations with intelligent automation, real-time analytics, and AI-driven insights. Unify your enterprise resources and drive growth across your entire organization.",
      href: "/services/ai-enterprise-resource-planning",
      color: "from-emerald-500 to-teal-500",
      features: [
        "AI-Powered Forecasting",
        "Intelligent Process Automation",
        "Real-Time Analytics Dashboard",
        "Smart Resource Management",
        "Unified Data Platform",
        "Advanced Security & Compliance"
      ],
      benefits: [
        "30% Cost Reduction",
        "50% Faster Decision Making",
        "25% Improved Accuracy",
        "Enhanced Collaboration"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$1,999/month"
      }
    },
    {
      icon: Users,
      title: "AI Customer Success Platform",
      description: "Proactively manage customer relationships, prevent churn, and drive growth with intelligent automation, predictive analytics, and personalized success strategies powered by artificial intelligence.",
      href: "/services/ai-customer-success-platform",
      color: "from-pink-500 to-rose-500",
      features: [
        "AI-Powered Customer Insights",
        "Automated Success Workflows",
        "Real-Time Success Metrics",
        "Proactive Customer Engagement",
        "Unified Customer Data",
        "Predictive Churn Prevention"
      ],
      benefits: [
        "40% Higher Retention",
        "3x Faster Onboarding",
        "90% Customer Satisfaction",
        "2.5x Revenue Growth"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$499/month",
        enterprise: "$1,299/month"
      }
    },
    {
      icon: Truck,
      title: "AI Supply Chain Intelligence",
      description: "Optimize your entire supply chain with intelligent automation, predictive analytics, and AI-driven insights. Reduce costs, improve efficiency, and deliver exceptional customer experiences.",
      href: "/services/ai-supply-chain-intelligence",
      color: "from-orange-500 to-amber-500",
      features: [
        "AI-Powered Demand Forecasting",
        "Intelligent Route Optimization",
        "Real-Time Supply Chain Analytics",
        "Smart Inventory Management",
        "Unified Supply Chain Data",
        "Risk Management & Compliance"
      ],
      benefits: [
        "25% Cost Reduction",
        "40% Faster Delivery",
        "30% Better Accuracy",
        "Enhanced Visibility"
      ],
      pricing: {
        starter: "$399/month",
        professional: "$899/month",
        enterprise: "$2,499/month"
      }
    }
  ];

  const additionalServices = [
    {
      icon: Brain,
      title: "AI Enterprise Automation Platform",
      description: "Streamline business processes with intelligent automation and AI-driven decision making",
      href: "/services/ai-enterprise-automation-platform",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Advanced threat detection and prevention with machine learning",
      href: "/services/ai-cybersecurity-platform",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud FinOps Optimizer",
      description: "Optimize cloud costs and resource allocation with AI insights",
      href: "/services/cloud-finops-optimizer",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Edge Computing Solutions",
      description: "Ultra-low latency computing for IoT and real-time applications",
      href: "/services/edge-computing-solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Network,
      title: "Blockchain Enterprise Solutions",
      description: "Secure, transparent, and efficient blockchain implementations",
      href: "/services/blockchain-enterprise-solutions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Atom,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing for complex problem solving",
      href: "/services/quantum-computing-solutions",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const industrySolutions = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "AI-powered healthcare analytics, patient management, and medical research",
      href: "/solutions/healthcare",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Risk management, fraud detection, and automated trading platforms",
      href: "/solutions/financial",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Manufacturing",
      description: "Smart manufacturing, predictive maintenance, and quality control",
      href: "/solutions/manufacturing",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Government",
      description: "Digital transformation, citizen services, and security solutions",
      href: "/solutions/government",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Customer experience optimization, inventory management, and sales automation",
      href: "/solutions/retail",
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovation Showcase 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Business Technology</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Explore our latest innovative micro SAAS services, AI solutions, and enterprise platforms 
              designed to transform your business operations and drive unprecedented growth in 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Innovations 2026
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our flagship services that are revolutionizing business operations across industries
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                            <TrendingUp className="w-4 h-4 text-zion-cyan" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-zion-cyan mb-3">Pricing Plans</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-zion-slate-light">
                          <span>Starter:</span>
                          <span className="text-zion-cyan font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between text-zion-slate-light">
                          <span>Professional:</span>
                          <span className="text-zion-cyan font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between text-zion-slate-light">
                          <span>Enterprise:</span>
                          <span className="text-zion-cyan font-semibold">{service.pricing.enterprise}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive range of AI, cloud, and technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions designed for the unique challenges of different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-purple/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-4">{solution.description}</p>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Explore Solutions
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already using our innovative solutions to drive growth and success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-3" />
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2026;
