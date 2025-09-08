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
};

export default $page;
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams getting started with AI tools",
      features: [
        "AI Content Generation (100 credits/month)",
        "Basic AI Image Editing",
        "AI Meeting Assistant (5 hours/month)",
        "Email Support",
        "Basic Analytics Dashboard",
        "Mobile App Access"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=starter"
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for growing businesses and professional teams",
      features: [
        "Everything in Starter",
        "AI Content Generation (500 credits/month)",
        "Advanced AI Image & Video Editing",
        "AI Code Assistant (Basic)",
        "AI Meeting Assistant (20 hours/month)",
        "AI Translation (10 languages)",
        "Priority Support",
        "Advanced Analytics",
        "API Access (1000 calls/month)",
        "Team Collaboration Tools"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/signup?plan=professional"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Professional",
        "AI Content Generation (2000 credits/month)",
        "AI Code Assistant (Advanced)",
        "AI Data Analytics Platform",
        "AI Threat Detection",
        "Multi-Cloud Management",
        "AI-Powered CRM",
        "Business Process Automation",
        "AI Meeting Assistant (Unlimited)",
        "AI Translation (100+ languages)",
        "24/7 Support",
        "Custom Integrations",
        "API Access (10000 calls/month)",
        "Advanced Security Features"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/signup?plan=business"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Everything in Business",
        "Unlimited AI Content Generation",
        "Custom AI Model Training",
        "Zero Trust Security Suite",
        "Edge Computing Solutions",
        "AI Market Research Platform",
        "AI Legal Document Review",
        "AI Financial Advisor",
        "AI Healthcare Assistant",
        "Dedicated Account Manager",
        "Custom Development",
        "On-Premise Deployment",
        "SLA Guarantees",
        "Compliance Certifications"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      services: [
        { name: "AI Content Generator Pro", price: "$29/month", features: ["Unlimited content generation", "50+ content types", "API access", "Advanced AI models"] },
        { name: "AI Image & Video Editor", price: "$19/month", features: ["Background removal", "Quality enhancement", "Style transfer", "Batch processing"] },
        { name: "AI Code Assistant", price: "$39/month", features: ["50+ languages", "IDE integrations", "Code review", "Debugging assistance"] },
        { name: "AI Data Analytics", price: "$199/month", features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Automated reporting"] }
      ]
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      services: [
        { name: "AI Threat Detection", price: "$99/month", features: ["24/7 monitoring", "Instant alerts", "Automated response", "Threat intelligence"] },
        { name: "Zero Trust Security", price: "$499/month", features: ["Identity verification", "Network segmentation", "Continuous monitoring", "Compliance tools"] },
        { name: "Penetration Testing", price: "$299/month", features: ["Monthly assessments", "Detailed reports", "Remediation guidance", "Compliance support"] }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      services: [
        { name: "Multi-Cloud Management", price: "$79/month", features: ["Unified dashboard", "Cost optimization", "Security compliance", "Performance monitoring"] },
        { name: "DevOps Automation", price: "$49/month", features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation"] },
        { name: "Edge Computing", price: "$149/month", features: ["Global edge network", "IoT integration", "Real-time processing", "Low latency"] }
      ]
    },
    {
      name: "Business Intelligence",
      icon: <Users className="h-8 w-8 text-zion-green" />,
      services: [
        { name: "AI-Powered CRM", price: "$39/user/month", features: ["Lead scoring", "Sales forecasting", "Automated follow-ups", "Predictive analytics"] },
        { name: "Business Automation", price: "$29/month", features: ["Workflow automation", "100+ integrations", "Document processing", "Process optimization"] },
        { name: "AI Market Research", price: "$199/month", features: ["Competitor analysis", "Trend prediction", "Real-time monitoring", "Market insights"] }
      ]
    },
    {
      name: "Communication & Collaboration",
      icon: <MessageCircle className="h-8 w-8 text-zion-orange" />,
      services: [
        { name: "AI Meeting Assistant", price: "$19/month", features: ["Real-time transcription", "Smart summaries", "Action tracking", "Automated follow-ups"] },
        { name: "Virtual Event Platform", price: "$99/month", features: ["Interactive features", "AI engagement", "Event analytics", "1000 attendees"] },
        { name: "AI Translation", price: "$29/month", features: ["100+ languages", "Cultural adaptation", "Real-time translation", "API access"] }
      ]
    },
    {
      name: "Specialized Tools",
      icon: <FileText className="h-8 w-8 text-zion-red" />,
      services: [
        { name: "AI Legal Review", price: "$149/month", features: ["Contract analysis", "Risk assessment", "Compliance monitoring", "Legal insights"] },
        { name: "AI Financial Advisor", price: "$39/month", features: ["Portfolio optimization", "Risk assessment", "Financial planning", "Investment advice"] },
        { name: "AI Healthcare Assistant", price: "$29/month", features: ["Health monitoring", "Symptom analysis", "Wellness coaching", "HIPAA compliant"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-purple-dark">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Transparent Pricing for Every Business
          </h1>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include a 14-day free trial, 
            no credit card required. Scale up or down anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              <Zap className="h-5 w-5 mr-2" />
              14-Day Free Trial
            </Badge>
            <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
              <Shield className="h-5 w-5 mr-2" />
              Enterprise Security
            </Badge>
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-lg">
              <Brain className="h-5 w-5 mr-2" />
              AI-Powered Tools
            </Badge>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-zion-purple shadow-2xl shadow-zion-purple/25 bg-gradient-to-br from-zion-purple/10 to-zion-purple/5' 
                    : 'border-zion-blue-light/30 hover:border-zion-purple/50 hover:shadow-xl hover:shadow-zion-purple/20'
                } bg-zion-slate-dark/80 backdrop-blur-sm`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 inline mr-2" />
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center ${tier.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                    <span className="text-zion-cyan/70">{tier.period}</span>
                  </div>
                  <CardDescription className="text-zion-cyan/80">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-cyan/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple' 
                        : 'bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-cyan hover:to-zion-blue'
                    } text-white border-0 shadow-lg`}
                  >
                    <Link to={tier.link}>
                      {tier.cta}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-lg text-zion-cyan/80 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered micro SAAS solutions, 
              each designed to address specific business needs and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30 hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-zion-purple/50 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-zion-cyan">{service.name}</h4>
                        <span className="text-zion-purple font-bold">{service.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-zion-cyan/70 flex items-center gap-2">
                            <Check className="h-3 w-3 text-zion-purple" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 backdrop-blur-sm border-zion-purple/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-lg text-zion-cyan/80">
                Join thousands of businesses already using Zion's AI-powered solutions to accelerate growth, 
                improve efficiency, and stay ahead of the competition.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">14 Days</div>
                  <div className="text-zion-cyan/70">Free Trial</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-cyan/70">Expert Support</div>
                </div>
                <div className="bg-zion-purple/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                  <div className="text-zion-cyan/70">Uptime SLA</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white border-0 shadow-lg shadow-zion-purple/25">
                <Link to="/signup">
                  Start Free Trial
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/contact">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Sales
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">What's included in the free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  All plans include a 14-day free trial with full access to all features. 
                  No credit card required. You can upgrade, downgrade, or cancel anytime.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">Can I change my plan later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing adjustments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">Do you offer enterprise discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  Yes, we offer volume discounts for enterprise customers. Contact our sales team 
                  for custom pricing and dedicated support options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-zion-slate-dark/80 backdrop-blur-sm border-zion-blue-light/30">
              <CardHeader>
                <CardTitle className="text-white">What support options are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan/80">
                  All plans include email support. Professional and Business plans include priority support, 
                  while Enterprise plans include 24/7 dedicated support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
