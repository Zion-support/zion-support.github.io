import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Building2,
  Car,
  Factory,
  GraduationCap,
  Scale,
  Truck,
  Wheat,
  Zap2,
  Brain2,
  Cloud2,
  Lock2,
  ChevronLeft,
  ChevronRight,
  Play,
  Crown,
  Check,
  X,
  PenTool
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Comprehensive pricing data
  const pricingData = {
    microSaas: [
      {
        name: "AI-Powered Business Intelligence Suite",
        category: "AI & Analytics",
        description: "Advanced business intelligence platform powered by machine learning algorithms",
        monthlyPrice: 2999,
        yearlyPrice: 29990,
        features: [
          "Predictive Analytics",
          "Real-time Dashboards", 
          "Custom Reports",
          "API Integration",
          "Advanced AI Models",
          "24/7 Support",
          "Custom Training",
          "White-label Options"
        ],
        marketPrice: 4500,
        competitors: ["Tableau", "Power BI", "Qlik"],
        roi: "300% in 12 months",
        setupTime: "2-4 weeks",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        popular: true
      },
      {
        name: "Quantum Computing Optimization Platform",
        category: "Quantum Computing",
        description: "Next-generation quantum computing solutions for complex optimization problems",
        monthlyPrice: 5999,
        yearlyPrice: 59990,
        features: [
          "Quantum Algorithms",
          "Hybrid Classical-Quantum",
          "Industry Solutions",
          "Expert Support",
          "Custom Development",
          "Training & Certification",
          "Research Collaboration",
          "Patent Support"
        ],
        marketPrice: 8000,
        competitors: ["IBM Quantum", "Google Quantum", "Microsoft Azure Quantum"],
        roi: "500% in 18 months",
        setupTime: "4-8 weeks",
        icon: Cpu,
        color: "from-blue-500 to-cyan-500",
        popular: false
      },
      {
        name: "Blockchain Supply Chain Tracker",
        category: "Blockchain & Web3",
        description: "Transparent and secure supply chain tracking using blockchain technology",
        monthlyPrice: 1999,
        yearlyPrice: 19990,
        features: [
          "Real-time Tracking",
          "Smart Contracts",
          "Compliance Reporting",
          "Mobile App",
          "API Access",
          "Custom Integrations",
          "Audit Trails",
          "Multi-currency Support"
        ],
        marketPrice: 3200,
        competitors: ["IBM Blockchain", "Hyperledger", "Ethereum Enterprise"],
        roi: "250% in 9 months",
        setupTime: "3-6 weeks",
        icon: Database,
        color: "from-green-500 to-emerald-500",
        popular: false
      },
      {
        name: "IoT Edge Computing Hub",
        category: "IoT & Edge Computing",
        description: "Intelligent edge computing platform for IoT devices with real-time processing",
        monthlyPrice: 3499,
        yearlyPrice: 34990,
        features: [
          "Edge AI",
          "Device Management",
          "Data Analytics",
          "Security",
          "Auto-scaling",
          "Custom Protocols",
          "Real-time Monitoring",
          "Predictive Maintenance"
        ],
        marketPrice: 5500,
        competitors: ["AWS IoT", "Azure IoT", "Google Cloud IoT"],
        roi: "400% in 15 months",
        setupTime: "4-6 weeks",
        icon: Network,
        color: "from-orange-500 to-red-500",
        popular: false
      },
      {
        name: "Cybersecurity Threat Intelligence",
        category: "Cybersecurity",
        description: "AI-driven cybersecurity platform with real-time threat detection",
        monthlyPrice: 4499,
        yearlyPrice: 44990,
        features: [
          "Threat Detection",
          "Automated Response",
          "Compliance",
          "24/7 Monitoring",
          "Incident Response",
          "Vulnerability Assessment",
          "Security Training",
          "Compliance Reporting"
        ],
        marketPrice: 6800,
        competitors: ["CrowdStrike", "SentinelOne", "Carbon Black"],
        roi: "600% in 12 months",
        setupTime: "2-3 weeks",
        icon: Shield,
        color: "from-red-500 to-pink-500",
        popular: true
      },
      {
        name: "Metaverse Development Studio",
        category: "AI & Metaverse",
        description: "Complete metaverse development platform for immersive virtual experiences",
        monthlyPrice: 6999,
        yearlyPrice: 69990,
        features: [
          "3D Modeling",
          "VR/AR Support",
          "Asset Management",
          "Multi-platform",
          "Custom Avatars",
          "Virtual Events",
          "NFT Integration",
          "Analytics Dashboard"
        ],
        marketPrice: 10000,
        competitors: ["Unity", "Unreal Engine", "Roblox Studio"],
        roi: "800% in 24 months",
        setupTime: "6-12 weeks",
        icon: Globe,
        color: "from-indigo-500 to-purple-500",
        popular: false
      }
    ],
    itServices: [
      {
        name: "Cloud Infrastructure Management",
        category: "Cloud & DevOps",
        description: "Complete cloud infrastructure management and optimization",
        hourlyRate: 150,
        projectRate: 15000,
        features: [
          "Infrastructure Design",
          "Migration Services",
          "Cost Optimization",
          "Security Hardening",
          "Monitoring Setup",
          "Disaster Recovery",
          "Compliance Audits",
          "24/7 Support"
        ],
        marketPrice: 200,
        competitors: ["AWS Professional Services", "Azure Consulting", "Google Cloud Professional Services"],
        roi: "400% in 12 months",
        responseTime: "2-4 hours",
        icon: Cloud,
        color: "from-blue-500 to-cyan-500"
      },
      {
        name: "AI Model Development",
        category: "AI & Machine Learning",
        description: "Custom AI model development and deployment services",
        hourlyRate: 200,
        projectRate: 25000,
        features: [
          "Custom Model Development",
          "Data Preparation",
          "Training & Validation",
          "Model Deployment",
          "Performance Optimization",
          "API Development",
          "Documentation",
          "Maintenance Support"
        ],
        marketPrice: 250,
        competitors: ["OpenAI", "Anthropic", "Google AI"],
        roi: "500% in 18 months",
        responseTime: "4-8 hours",
        icon: Brain,
        color: "from-purple-500 to-pink-500"
      }
    ],
    aiServices: [
      {
        name: "AI Content Creation Studio",
        category: "AI & Content",
        description: "AI-powered content creation and optimization platform",
        monthlyPrice: 1499,
        yearlyPrice: 14990,
        features: [
          "Content Generation",
          "SEO Optimization",
          "Multi-language Support",
          "Brand Voice Training",
          "Content Analytics",
          "Workflow Automation",
          "Team Collaboration",
          "API Access"
        ],
        marketPrice: 2500,
        competitors: ["Jasper", "Copy.ai", "Writesonic"],
        roi: "350% in 9 months",
        setupTime: "1-2 weeks",
        icon: PenTool,
        color: "from-orange-500 to-red-500"
      },
      {
        name: "AI Customer Support Platform",
        category: "AI & Customer Support",
        description: "Intelligent customer support automation with AI chatbots",
        monthlyPrice: 999,
        yearlyPrice: 9990,
        features: [
          "AI Chatbots",
          "Multi-language Support",
          "Sentiment Analysis",
          "Ticket Routing",
          "Knowledge Base",
          "Analytics Dashboard",
          "CRM Integration",
          "Custom Training"
        ],
        marketPrice: 1800,
        competitors: ["Intercom", "Zendesk", "Freshdesk"],
        roi: "280% in 6 months",
        setupTime: "1-3 weeks",
        icon: MessageSquare,
        color: "from-green-500 to-emerald-500"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'microSaas', name: 'Micro SAAS Products', icon: ShoppingCart },
    { id: 'itServices', name: 'IT Services', icon: Code },
    { id: 'aiServices', name: 'AI Services', icon: Brain }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? [...pricingData.microSaas, ...pricingData.itServices, ...pricingData.aiServices]
    : pricingData[selectedCategory as keyof typeof pricingData] || [];

  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Transparent Pricing - Zion Tech Group"
        description="Discover our transparent pricing for innovative micro SAAS services, IT solutions, and AI platforms. Compare with market prices and see your ROI potential."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Transparent Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                That Makes Sense
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              No hidden fees, no surprises. Our transparent pricing shows exactly what you get and how it compares to the market. 
              See your ROI potential and make informed decisions.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  billingCycle === 'yearly' ? 'bg-zion-cyan' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
                Yearly
                <span className="ml-1 text-zion-cyan font-bold">
                  (Save up to 20%)
                </span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-zion-cyan text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border p-8 hover:border-zion-cyan/50 transition-all duration-300 group ${
                service.popular ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' : 'border-slate-700/50'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-slate-400 text-sm">{service.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                {('monthlyPrice' in service) ? (
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${billingCycle === 'monthly' ? service.monthlyPrice.toLocaleString() : service.yearlyPrice.toLocaleString()}
                    </div>
                    <div className="text-slate-400">
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-zion-cyan text-sm font-medium mt-2">
                        Save {getSavings(service.monthlyPrice, service.yearlyPrice)}%
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">
                      ${service.hourlyRate}/hour
                    </div>
                    <div className="text-slate-400 mb-2">or</div>
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.projectRate.toLocaleString()}
                    </div>
                    <div className="text-slate-400">project-based</div>
                  </div>
                )}
              </div>

              {/* Market Comparison */}
              <div className="bg-slate-700/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400">Market Price:</span>
                  <span className="text-slate-300 font-medium">
                    ${('monthlyPrice' in service) ? service.marketPrice.toLocaleString() : service.marketPrice.toLocaleString()}/month
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-400">Your Savings:</span>
                  <span className="text-green-400 font-medium">
                    ${('monthlyPrice' in service) ? (service.marketPrice - service.monthlyPrice).toLocaleString() : (service.marketPrice - service.hourlyRate).toLocaleString()}/month
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">ROI Potential:</span>
                  <span className="text-zion-cyan font-medium">{service.roi}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-300 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Setup Info */}
              <div className="bg-slate-700/30 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {('setupTime' in service) && (
                    <div>
                      <span className="text-slate-400">Setup Time:</span>
                      <div className="text-white font-medium">{service.setupTime}</div>
                    </div>
                  )}
                  {('responseTime' in service) && (
                    <div>
                      <span className="text-slate-400">Response Time:</span>
                      <div className="text-white font-medium">{service.responseTime}</div>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-400">Competitors:</span>
                    <div className="text-white font-medium text-xs">
                      {service.competitors.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-slate-700/50 text-slate-300 font-medium rounded-xl hover:bg-slate-600/50 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 rounded-3xl border border-zion-cyan/20 p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Enterprise Solutions?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            We offer custom enterprise solutions with dedicated support, custom integrations, 
            and enterprise-grade security. Let's discuss your specific requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
              <p className="text-slate-400 text-sm">24/7 dedicated support team with direct access to engineers</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-400 text-sm">SOC 2, ISO 27001, and custom security compliance</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Development</h3>
              <p className="text-slate-400 text-sm">Tailored solutions built specifically for your business needs</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transform hover:scale-105 transition-all duration-200"
            >
              Contact Sales
              <MessageSquare className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              Request Demo
              <Play className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-300">Get answers to common questions about our pricing and services</p>
        </div>
        
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Can I switch between monthly and yearly billing?</h3>
            <p className="text-slate-300">Yes, you can switch between billing cycles at any time. Yearly billing offers significant savings and can be canceled with 30 days notice.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-3">What's included in the setup time?</h3>
            <p className="text-slate-300">Setup time includes initial configuration, data migration, user training, and integration with your existing systems. We provide comprehensive documentation and support throughout the process.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Do you offer volume discounts?</h3>
            <p className="text-slate-300">Yes, we offer volume discounts for enterprise customers with multiple licenses or services. Contact our sales team for custom pricing based on your specific needs.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
