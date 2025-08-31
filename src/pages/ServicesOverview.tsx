import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  PenTool,
  Analytics,
  MessageSquare,
  Calendar,
  DollarSign,
  Heart,
  Smile,
  ThumbsUp,
  UserCheck,
  Monitor,
  Smartphone,
  AlertTriangle,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Cpu,
  Lock,
  Database,
  Network,
  Rocket,
  Atom,
  Cloud,
  Server,
  Code,
  Phone,
  Mail,
  MapPin,
  Search,
  FileText,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const ServicesOverview = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Content Intelligence Platform",
      description: "Transform your content strategy with AI-powered intelligence. Analyze performance, optimize engagement, and drive results.",
      features: ["Content Analysis", "Predictive Optimization", "Audience Intelligence", "Multi-platform Integration"],
      pricing: "Starting at $99/month",
      href: "/services/ai-content-intelligence-platform",
      benefits: ["300% increase in content reach", "400% improvement in ROI", "Real-time optimization"]
    },
    {
      icon: Heart,
      title: "AI Customer Experience Analytics",
      description: "Transform your customer experience with AI-powered analytics. Understand, predict, and optimize every customer interaction.",
      features: ["Sentiment Analysis", "Customer Journey Mapping", "Predictive Behavior", "Personalization Engine"],
      pricing: "Starting at $149/month",
      href: "/services/ai-customer-experience-analytics",
      benefits: ["45% increase in customer satisfaction", "60% reduction in churn", "300% improvement in CLV"]
    },
    {
      icon: AlertTriangle,
      title: "AI Financial Risk Management",
      description: "Transform your financial risk management with AI-powered analytics. Monitor, predict, and mitigate risks effectively.",
      features: ["Risk Assessment", "Market Monitoring", "Predictive Modeling", "Portfolio Analysis"],
      pricing: "Starting at $299/month",
      href: "/services/ai-financial-risk-management",
      benefits: ["48-hour early risk detection", "35% reduction in losses", "40% cost savings"]
    },
    {
      icon: Brain,
      title: "AI Supply Chain Optimization",
      description: "Revolutionize your supply chain with AI-powered optimization and predictive analytics.",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"],
      pricing: "Starting at $199/month",
      href: "/services/ai-supply-chain-optimization",
      benefits: ["30% cost reduction", "95% forecast accuracy", "40% efficiency increase"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered cybersecurity platform for threat detection and prevention.",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Security Automation"],
      pricing: "Starting at $399/month",
      href: "/services/ai-cybersecurity-platform",
      benefits: ["99.9% threat blocking", "< 1 second response time", "AI-powered automation"]
    },
    {
      icon: Heart,
      title: "AI Healthcare Platform",
      description: "AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization.",
      features: ["Medical Imaging", "Diagnostic Support", "Treatment Planning", "Patient Monitoring"],
      pricing: "Starting at $599/month",
      href: "/services/ai-healthcare-platform",
      benefits: ["95% diagnostic accuracy", "25% cost reduction", "HIPAA compliance"]
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Comprehensive cloud infrastructure and DevOps automation services for modern applications.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Logging"],
      pricing: "Starting at $150/hour",
      href: "/services/cloud-devops",
      benefits: ["Faster deployment cycles", "Improved reliability", "Cost optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "End-to-end cybersecurity solutions to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Incident Response", "Security Training"],
      pricing: "Starting at $200/hour",
      href: "/services/cybersecurity",
      benefits: ["Comprehensive protection", "24/7 monitoring", "Compliance assurance"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data engineering, analytics, and business intelligence solutions for data-driven decisions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Governance"],
      pricing: "Starting at $175/hour",
      href: "/services/data-analytics",
      benefits: ["Actionable insights", "Improved decision making", "Operational efficiency"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of enterprise network infrastructure.",
      features: ["Network Design", "Implementation", "Management", "Security"],
      pricing: "Starting at $125/hour",
      href: "/services/network-infrastructure",
      benefits: ["Reliable connectivity", "Scalable architecture", "Performance optimization"]
    }
  ];

  const microSaaSServices = [
    {
      icon: Code,
      title: "Micro CRM Platform",
      description: "Lightweight, scalable CRM solution designed for small to medium businesses.",
      features: ["Contact Management", "Sales Pipeline", "Email Integration", "Analytics"],
      pricing: "Starting at $49/month",
      href: "/services/micro-crm",
      benefits: ["Easy to use", "Affordable pricing", "Quick implementation"]
    },
    {
      icon: Search,
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO optimization platform with AI-driven insights and recommendations.",
      features: ["Keyword Research", "Content Optimization", "Ranking Analysis", "Competitive Intelligence"],
      pricing: "Starting at $79/month",
      href: "/services/ai-powered-seo",
      benefits: ["Higher search rankings", "Increased organic traffic", "Better ROI"]
    },
    {
      icon: FileText,
      title: "LLM Content Studio",
      description: "AI-powered content creation and optimization platform for marketers and creators.",
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Performance Analytics"],
      pricing: "Starting at $89/month",
      href: "/services/llm-content-studio",
      benefits: ["Faster content creation", "Better quality", "SEO optimization"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Analytics",
      description: "Comprehensive analytics platform for e-commerce businesses to optimize performance.",
      features: ["Sales Analytics", "Customer Insights", "Conversion Optimization", "Inventory Management"],
      pricing: "Starting at $69/month",
      href: "/services/ecommerce-analytics",
      benefits: ["Better conversion rates", "Improved customer experience", "Increased sales"]
    }
  ];

  const contactInfo = {
    phone: "+1 (302) 464-0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <SEO 
        title="Services Overview | Zion Tech Group"
        description="Explore our comprehensive range of AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro SAAS, technology services, digital transformation, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Comprehensive Technology Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Our Services
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Overview
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of AI-powered services, IT solutions, and micro SAAS platforms. 
                From cutting-edge artificial intelligence to robust infrastructure solutions, we have everything 
                you need to transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Brain className="w-5 h-5" />
                <span>AI & Machine Learning Services</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence technology. 
                Our AI services deliver measurable results and competitive advantages.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-cyan-400">
                      {service.pricing}
                    </p>
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Server className="w-5 h-5" />
                <span>IT Infrastructure & Services</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                IT Infrastructure Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT infrastructure and managed services for modern enterprises. 
                Build, deploy, and manage your technology foundation with confidence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-cyan-400">{service.pricing}</p>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Code className="w-5 h-5" />
                <span>Micro SAAS Solutions</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Micro SAAS Platforms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Scalable software-as-a-service solutions designed for specific business needs. 
                Affordable, powerful, and easy to implement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {microSaaSServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-cyan-400">{service.pricing}</p>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss how we can help transform your business with our technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                >
                  Visit Our Website
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesOverview;