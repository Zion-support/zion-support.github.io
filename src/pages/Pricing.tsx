import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Cpu,
  Database,
  Network,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
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
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  TrendingUp,
  Scale,
  Gauge,
  PenTool,
  Handshake,
  Building2,
  Users,
  HardDrive,
  HelpCircle,
  Calendar,
  Award,
  Zap as ZapIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Atom as AtomIcon,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  MessageCircle as MessageCircleIcon,
  Star as StarIcon,
  Users2 as Users2Icon,
  Cog,
  Palette as PaletteIcon2
} from 'lucide-react';

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingCategories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'industry', name: 'Industry Solutions', icon: Target },
    { id: 'micro', name: 'Micro SaaS', icon: Zap }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      category: 'ai',
      name: "AI Enterprise Intelligence Platform",
      description: "Comprehensive AI platform for business transformation",
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      marketPrice: "5,000-15,000",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Automated Decision Making",
        "Real-time Data Processing",
        "Custom AI Model Training",
        "24/7 Support",
        "API Access",
        "Custom Integrations"
      ],
      benefits: [
        "Increase operational efficiency by 40%",
        "Reduce decision-making time by 60%",
        "Improve prediction accuracy by 35%"
      ],
      href: "/services/ai-enterprise-intelligence-platform",
      icon: Brain,
      color: "from-cyan-400 to-blue-500",
      popular: false
    },
    {
      category: 'ai',
      name: "AI Quantum Neural Network Platform",
      description: "Revolutionary quantum computing-powered AI",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      marketPrice: "10,000-25,000",
      features: [
        "Quantum Neural Networks",
        "Hybrid Classical-Quantum Computing",
        "Advanced Optimization Algorithms",
        "Quantum Machine Learning",
        "Research & Development Tools",
        "Dedicated Support",
        "Custom Quantum Circuits",
        "Performance Analytics"
      ],
      benefits: [
        "1000x faster computation for complex problems",
        "Breakthrough research capabilities",
        "Competitive advantage in AI development"
      ],
      href: "/services/ai-quantum-neural-network-platform",
      icon: Atom,
      color: "from-purple-400 to-pink-500",
      popular: true
    },
    {
      category: 'ai',
      name: "AI Sales Copilot",
      description: "Intelligent sales automation platform",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      marketPrice: "500-1,200",
      features: [
        "AI-Powered Lead Scoring",
        "Customer Behavior Analysis",
        "Automated Follow-up Sequences",
        "Sales Performance Analytics",
        "CRM Integration",
        "Email Support",
        "Training & Onboarding",
        "Mobile App Access"
      ],
      benefits: [
        "Increase sales conversion by 45%",
        "Reduce follow-up time by 70%",
        "Improve lead quality by 60%"
      ],
      href: "/services/ai-sales-copilot",
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500",
      popular: false
    },
    {
      category: 'ai',
      name: "AI Compliance Assistant",
      description: "Automated compliance monitoring system",
      monthlyPrice: 1200,
      yearlyPrice: 12000,
      marketPrice: "2,500-8,000",
      features: [
        "Regulatory Compliance Monitoring",
        "Automated Risk Assessment",
        "Real-time Compliance Alerts",
        "Audit Trail Management",
        "Multi-Jurisdiction Support",
        "Priority Support",
        "Compliance Training",
        "Custom Reports"
      ],
      benefits: [
        "Reduce compliance risks by 80%",
        "Automate regulatory reporting",
        "Real-time compliance monitoring"
      ],
      href: "/services/ai-compliance-assistant",
      icon: Shield,
      color: "from-red-400 to-pink-500",
      popular: false
    },
    {
      category: 'ai',
      name: "AI Healthcare Platform",
      description: "Comprehensive AI healthcare solutions",
      monthlyPrice: 4000,
      yearlyPrice: 40000,
      marketPrice: "8,000-25,000",
      features: [
        "Medical Image Analysis",
        "Patient Care Optimization",
        "Healthcare Analytics",
        "Drug Discovery Support",
        "Clinical Decision Support",
        "HIPAA Compliance",
        "Dedicated Support",
        "Custom Healthcare Models"
      ],
      benefits: [
        "Improve diagnostic accuracy by 25%",
        "Reduce patient wait times by 40%",
        "Optimize healthcare workflows"
      ],
      href: "/services/ai-healthcare-platform",
      icon: Activity,
      color: "from-green-400 to-emerald-500",
      popular: false
    },
    {
      category: 'ai',
      name: "AI Financial Trading Platform",
      description: "Advanced AI-powered trading platform",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      marketPrice: "10,000-30,000",
      features: [
        "AI Trading Algorithms",
        "Risk Management Systems",
        "Market Analysis Tools",
        "Portfolio Optimization",
        "Real-time Market Data",
        "24/7 Trading Support",
        "Custom Trading Strategies",
        "Performance Analytics"
      ],
      benefits: [
        "Increase trading accuracy by 35%",
        "Reduce risk exposure by 50%",
        "Automated trading strategies"
      ],
      href: "/services/ai-financial-trading-platform",
      icon: TrendingUp,
      color: "from-emerald-400 to-teal-500",
      popular: false
    },
    {
      category: 'ai',
      name: "AI Supply Chain Optimization",
      description: "Intelligent supply chain optimization",
      monthlyPrice: 2800,
      yearlyPrice: 28000,
      marketPrice: "5,500-18,000",
      features: [
        "Demand Forecasting",
        "Inventory Optimization",
        "Route Optimization",
        "Supplier Management",
        "Real-time Tracking",
        "Priority Support",
        "Custom Optimization Models",
        "Supply Chain Analytics"
      ],
      benefits: [
        "Reduce supply chain costs by 25%",
        "Improve delivery times by 30%",
        "Optimize inventory levels"
      ],
      href: "/services/ai-supply-chain-optimization",
      icon: Workflow,
      color: "from-blue-400 to-cyan-500",
      popular: false
    },

    // Cloud & DevOps Services
    {
      category: 'cloud',
      name: "Cloud FinOps Optimizer",
      description: "AI-powered cloud cost optimization",
      monthlyPrice: 800,
      yearlyPrice: 8000,
      marketPrice: "1,500-5,000",
      features: [
        "AI-Powered Cost Optimization",
        "Resource Utilization Analysis",
        "Automated Scaling Recommendations",
        "Cost Forecasting & Budgeting",
        "Multi-Cloud Management",
        "Email Support",
        "Cost Optimization Reports",
        "Cloud Migration Support"
      ],
      benefits: [
        "Reduce cloud costs by 30-50%",
        "Optimize resource utilization",
        "Automated cost management"
      ],
      href: "/services/cloud-finops-optimizer",
      icon: Cloud,
      color: "from-blue-400 to-indigo-500",
      popular: false
    },
    {
      category: 'cloud',
      name: "Edge Computing Solutions",
      description: "Next-generation edge computing infrastructure",
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      marketPrice: "3,000-10,000",
      features: [
        "Edge Computing Infrastructure",
        "Low-Latency Processing",
        "Distributed Computing",
        "IoT Integration",
        "Real-time Analytics",
        "Priority Support",
        "Custom Edge Solutions",
        "Performance Monitoring"
      ],
      benefits: [
        "Reduce latency by 90%",
        "Improve application performance",
        "Enable real-time processing"
      ],
      href: "/services/edge-computing-solutions",
      icon: Cpu,
      color: "from-orange-400 to-red-500",
      popular: false
    },
    {
      category: 'cloud',
      name: "Cloud & DevOps Services",
      description: "Enterprise cloud and DevOps solutions",
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      marketPrice: "4,000-12,000",
      features: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
        "CI/CD Pipelines",
        "Priority Support",
        "DevOps Training",
        "Custom Automation"
      ],
      benefits: [
        "Accelerate deployment by 80%",
        "Reduce infrastructure costs by 40%",
        "Improve system reliability"
      ],
      href: "/services/cloud-devops",
      icon: Cloud,
      color: "from-blue-400 to-indigo-500",
      popular: false
    },

    // Cybersecurity Services
    {
      category: 'security',
      name: "AI Cybersecurity Platform",
      description: "Advanced AI-powered cybersecurity",
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      marketPrice: "4,000-12,000",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Behavioral Analysis",
        "Zero-Day Threat Protection",
        "Security Analytics Dashboard",
        "24/7 Security Monitoring",
        "Incident Response Support",
        "Security Training"
      ],
      benefits: [
        "Detect threats 10x faster",
        "Reduce false positives by 80%",
        "Automated security response"
      ],
      href: "/services/ai-cybersecurity-platform",
      icon: Shield,
      color: "from-red-400 to-pink-500",
      popular: false
    },
    {
      category: 'security',
      name: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain solutions",
      monthlyPrice: 3000,
      yearlyPrice: 30000,
      marketPrice: "6,000-20,000",
      features: [
        "Smart Contract Development",
        "Supply Chain Transparency",
        "Decentralized Applications",
        "Blockchain Integration",
        "Consensus Mechanisms",
        "Priority Support",
        "Custom Blockchain Development",
        "Security Audits"
      ],
      benefits: [
        "Enhanced supply chain transparency",
        "Automated contract execution",
        "Reduced transaction costs"
      ],
      href: "/services/blockchain-enterprise-solutions",
      icon: Network,
      color: "from-yellow-400 to-orange-500",
      popular: false
    },
    {
      category: 'security',
      name: "Cybersecurity Services",
      description: "Comprehensive cybersecurity solutions",
      monthlyPrice: 1500,
      yearlyPrice: 15000,
      marketPrice: "3,000-10,000",
      features: [
        "Threat Detection",
        "Zero Trust Security",
        "Compliance Management",
        "Incident Response",
        "Security Audits",
        "Priority Support",
        "Security Training",
        "Vulnerability Assessment"
      ],
      benefits: [
        "Protect against advanced threats",
        "Ensure regulatory compliance",
        "Reduce security risks"
      ],
      href: "/services/cybersecurity",
      icon: Shield,
      color: "from-red-400 to-pink-500",
      popular: false
    },

    // Industry Solutions
    {
      category: 'industry',
      name: "Digital Transformation",
      description: "Strategic technology consulting",
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      marketPrice: "5,000-15,000",
      features: [
        "Process Automation",
        "Digital Strategy",
        "Change Management",
        "Technology Roadmap",
        "Digital Maturity Assessment",
        "Priority Support",
        "Change Management Training",
        "Custom Digital Solutions"
      ],
      benefits: [
        "Accelerate digital transformation",
        "Improve operational efficiency",
        "Enhance customer experience"
      ],
      href: "/services/digital-transformation",
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      popular: false
    },
    {
      category: 'industry',
      name: "IT Infrastructure Management",
      description: "Comprehensive infrastructure solutions",
      monthlyPrice: 1800,
      yearlyPrice: 18000,
      marketPrice: "3,500-12,000",
      features: [
        "Infrastructure Monitoring",
        "Performance Optimization",
        "Automated Scaling",
        "Health Management",
        "Capacity Planning",
        "Priority Support",
        "Infrastructure Audits",
        "Custom Monitoring"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Automated maintenance",
        "Performance optimization"
      ],
      href: "/services/it-infrastructure-management",
      icon: Server,
      color: "from-gray-400 to-slate-500",
      popular: false
    },

    // Micro SaaS Solutions
    {
      category: 'micro',
      name: "Micro SaaS Solutions Comprehensive",
      description: "Complete suite of micro SaaS solutions",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      marketPrice: "400-1,200",
      features: [
        "Customer Relationship Management",
        "Project Management Tools",
        "Financial Management",
        "Marketing Automation",
        "Analytics & Reporting",
        "Email Support",
        "User Training",
        "Mobile Apps"
      ],
      benefits: [
        "Affordable business solutions",
        "Easy-to-use interfaces",
        "Scalable growth platform"
      ],
      href: "/services/micro-saas-solutions-comprehensive",
      icon: Zap,
      color: "from-purple-400 to-indigo-500",
      popular: false
    },
    {
      category: 'micro',
      name: "AI Content Creation Studio",
      description: "AI-powered content creation platform",
      monthlyPrice: 150,
      yearlyPrice: 1500,
      marketPrice: "300-800",
      features: [
        "AI Content Generation",
        "Multi-format Support",
        "Brand Voice Customization",
        "SEO Optimization",
        "Content Analytics",
        "Email Support",
        "Content Templates",
        "Brand Guidelines"
      ],
      benefits: [
        "Create content 10x faster",
        "Maintain consistent brand voice",
        "SEO-optimized content"
      ],
      href: "/services/ai-content-creation-studio",
      icon: PenTool,
      color: "from-pink-400 to-rose-500",
      popular: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's comprehensive AI, IT, and micro SaaS services. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT solutions pricing, micro SaaS pricing, cloud services pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All our services come with transparent pricing, 
              comprehensive features, and exceptional support to help you succeed.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-4 text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-4 text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-1 text-cyan-400 text-xs">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {pricingCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-cyan-400">
                      ${billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice}
                      <span className="text-lg text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Market: ${service.marketPrice}/month
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">Features</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-green-400 mb-4 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    to={service.href}
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 px-6 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer custom enterprise solutions tailored to your specific needs. 
              Contact us to discuss your requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
              <Link
                to="/enterprise"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Building2 className="w-5 h-5 mr-2" />
                Enterprise Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
