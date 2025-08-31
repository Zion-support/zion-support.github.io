import React from 'react';
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
  FileText as FileTextIcon,
  HelpCircle,
  BarChart3 as BarChart3Icon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Cpu as CpuIcon,
  Workflow as WorkflowIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Code as CodeIcon,
  Monitor,
  Smartphone,
  Network as NetworkIcon,
  Wifi as WifiIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
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

export default function InnovativeServicesShowcase2026() {
  const innovativeServices = [
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "AI Enterprise Intelligence Platform",
          description: "Comprehensive AI platform that transforms business intelligence with predictive analytics, natural language processing, and automated decision-making capabilities.",
          features: [
            "Predictive Analytics & Forecasting",
            "Natural Language Processing",
            "Automated Decision Making",
            "Real-time Data Processing",
            "Custom AI Model Training"
          ],
          pricing: "$2,500/month",
          marketPrice: "$5,000-15,000/month",
          benefits: [
            "Increase operational efficiency by 40%",
            "Reduce decision-making time by 60%",
            "Improve prediction accuracy by 35%",
            "24/7 automated monitoring",
            "Scalable AI infrastructure"
          ],
          href: "/services/ai-enterprise-intelligence-platform",
          icon: Brain,
          color: "from-cyan-400 to-blue-500"
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Revolutionary quantum computing-powered neural networks for solving complex computational problems and advancing AI research.",
          features: [
            "Quantum Neural Networks",
            "Hybrid Classical-Quantum Computing",
            "Advanced Optimization Algorithms",
            "Quantum Machine Learning",
            "Research & Development Tools"
          ],
          pricing: "$5,000/month",
          marketPrice: "$10,000-25,000/month",
          benefits: [
            "1000x faster computation for complex problems",
            "Breakthrough research capabilities",
            "Competitive advantage in AI development",
            "Access to cutting-edge quantum technology",
            "Expert quantum computing support"
          ],
          href: "/services/ai-quantum-neural-network-platform",
          icon: Atom,
          color: "from-purple-400 to-pink-500"
        },
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales automation platform that enhances sales team performance with AI-powered lead scoring, customer insights, and automated follow-ups.",
          features: [
            "AI-Powered Lead Scoring",
            "Customer Behavior Analysis",
            "Automated Follow-up Sequences",
            "Sales Performance Analytics",
            "CRM Integration"
          ],
          pricing: "$299/month per user",
          marketPrice: "$500-1,200/month per user",
          benefits: [
            "Increase sales conversion by 45%",
            "Reduce follow-up time by 70%",
            "Improve lead quality by 60%",
            "Automated sales processes",
            "Real-time performance insights"
          ],
          href: "/services/ai-sales-copilot",
          icon: TrendingUp,
          color: "from-green-400 to-emerald-500"
        },
        {
          name: "AI Compliance Assistant",
          description: "Automated compliance monitoring and reporting system that ensures regulatory adherence across multiple industries and jurisdictions.",
          features: [
            "Regulatory Compliance Monitoring",
            "Automated Risk Assessment",
            "Real-time Compliance Alerts",
            "Audit Trail Management",
            "Multi-Jurisdiction Support"
          ],
          pricing: "$1,200/month",
          marketPrice: "$2,500-8,000/month",
          benefits: [
            "Reduce compliance risks by 80%",
            "Automate regulatory reporting",
            "Real-time compliance monitoring",
            "Cost-effective compliance management",
            "Expert regulatory guidance"
          ],
          href: "/services/ai-compliance-assistant",
          icon: Shield,
          color: "from-red-400 to-pink-500"
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      services: [
        {
          name: "Cloud FinOps Optimizer",
          description: "Intelligent cloud cost optimization platform that maximizes cloud efficiency while minimizing costs through AI-driven insights and automation.",
          features: [
            "AI-Powered Cost Optimization",
            "Resource Utilization Analysis",
            "Automated Scaling Recommendations",
            "Cost Forecasting & Budgeting",
            "Multi-Cloud Management"
          ],
          pricing: "$800/month",
          marketPrice: "$1,500-5,000/month",
          benefits: [
            "Reduce cloud costs by 30-50%",
            "Optimize resource utilization",
            "Automated cost management",
            "Real-time cost monitoring",
            "Expert cloud optimization"
          ],
          href: "/services/cloud-finops-optimizer",
          icon: Cloud,
          color: "from-blue-400 to-indigo-500"
        },
        {
          name: "Edge Computing Solutions",
          description: "Next-generation edge computing infrastructure that brings computation closer to data sources for ultra-low latency applications.",
          features: [
            "Edge Computing Infrastructure",
            "Low-Latency Processing",
            "Distributed Computing",
            "IoT Integration",
            "Real-time Analytics"
          ],
          pricing: "$1,500/month",
          marketPrice: "$3,000-10,000/month",
          benefits: [
            "Reduce latency by 90%",
            "Improve application performance",
            "Enable real-time processing",
            "Scalable edge infrastructure",
            "Expert edge computing support"
          ],
          href: "/services/edge-computing-solutions",
          icon: Cpu,
          color: "from-orange-400 to-red-500"
        }
      ]
    },
    {
      category: "Cybersecurity & Blockchain",
      services: [
        {
          name: "AI Cybersecurity Platform",
          description: "Advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and comprehensive security monitoring.",
          features: [
            "AI Threat Detection",
            "Automated Incident Response",
            "Behavioral Analysis",
            "Zero-Day Threat Protection",
            "Security Analytics Dashboard"
          ],
          pricing: "$2,000/month",
          marketPrice: "$4,000-12,000/month",
          benefits: [
            "Detect threats 10x faster",
            "Reduce false positives by 80%",
            "Automated security response",
            "24/7 security monitoring",
            "Expert security support"
          ],
          href: "/services/ai-cybersecurity-platform",
          icon: Shield,
          color: "from-red-400 to-pink-500"
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Enterprise-grade blockchain solutions for supply chain transparency, smart contracts, and decentralized applications.",
          features: [
            "Smart Contract Development",
            "Supply Chain Transparency",
            "Decentralized Applications",
            "Blockchain Integration",
            "Consensus Mechanisms"
          ],
          pricing: "$3,000/month",
          marketPrice: "$6,000-20,000/month",
          benefits: [
            "Enhanced supply chain transparency",
            "Automated contract execution",
            "Reduced transaction costs",
            "Immutable record keeping",
            "Expert blockchain development"
          ],
          href: "/services/blockchain-enterprise-solutions",
          icon: Network,
          color: "from-yellow-400 to-orange-500"
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      services: [
        {
          name: "AI Healthcare Platform",
          description: "Comprehensive AI healthcare platform for medical diagnosis, patient care optimization, and healthcare analytics.",
          features: [
            "Medical Image Analysis",
            "Patient Care Optimization",
            "Healthcare Analytics",
            "Drug Discovery Support",
            "Clinical Decision Support"
          ],
          pricing: "$4,000/month",
          marketPrice: "$8,000-25,000/month",
          benefits: [
            "Improve diagnostic accuracy by 25%",
            "Reduce patient wait times by 40%",
            "Optimize healthcare workflows",
            "Compliance with healthcare regulations",
            "Expert healthcare AI support"
          ],
          href: "/services/ai-healthcare-platform",
          icon: Activity,
          color: "from-green-400 to-emerald-500"
        },
        {
          name: "AI Financial Trading Platform",
          description: "Advanced AI-powered financial trading platform with predictive analytics, risk management, and automated trading strategies.",
          features: [
            "AI Trading Algorithms",
            "Risk Management Systems",
            "Market Analysis Tools",
            "Portfolio Optimization",
            "Real-time Market Data"
          ],
          pricing: "$5,000/month",
          marketPrice: "$10,000-30,000/month",
          benefits: [
            "Increase trading accuracy by 35%",
            "Reduce risk exposure by 50%",
            "Automated trading strategies",
            "Real-time market insights",
            "Expert financial AI support"
          ],
          href: "/services/ai-financial-trading-platform",
          icon: TrendingUp,
          color: "from-emerald-400 to-teal-500"
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Intelligent supply chain optimization platform that maximizes efficiency, reduces costs, and improves visibility across the entire supply chain.",
          features: [
            "Demand Forecasting",
            "Inventory Optimization",
            "Route Optimization",
            "Supplier Management",
            "Real-time Tracking"
          ],
          pricing: "$2,800/month",
          marketPrice: "$5,500-18,000/month",
          benefits: [
            "Reduce supply chain costs by 25%",
            "Improve delivery times by 30%",
            "Optimize inventory levels",
            "Enhanced supply chain visibility",
            "Expert supply chain optimization"
          ],
          href: "/services/ai-supply-chain-optimization",
          icon: Workflow,
          color: "from-blue-400 to-cyan-500"
        }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [
        {
          name: "Micro SaaS Solutions Comprehensive",
          description: "Complete suite of micro SaaS solutions designed for small to medium businesses, providing essential tools for growth and efficiency.",
          features: [
            "Customer Relationship Management",
            "Project Management Tools",
            "Financial Management",
            "Marketing Automation",
            "Analytics & Reporting"
          ],
          pricing: "$199/month",
          marketPrice: "$400-1,200/month",
          benefits: [
            "Affordable business solutions",
            "Easy-to-use interfaces",
            "Scalable growth platform",
            "Integrated business tools",
            "Expert support & training"
          ],
          href: "/services/micro-saas-solutions-comprehensive",
          icon: Zap,
          color: "from-purple-400 to-indigo-500"
        },
        {
          name: "AI Content Creation Studio",
          description: "AI-powered content creation platform that generates high-quality written content, images, and multimedia for marketing and communication.",
          features: [
            "AI Content Generation",
            "Multi-format Support",
            "Brand Voice Customization",
            "SEO Optimization",
            "Content Analytics"
          ],
          pricing: "$150/month",
          marketPrice: "$300-800/month",
          benefits: [
            "Create content 10x faster",
            "Maintain consistent brand voice",
            "SEO-optimized content",
            "Reduce content creation costs",
            "Expert content strategy support"
          ],
          href: "/services/ai-content-creation-studio",
          icon: PenTool,
          color: "from-pink-400 to-rose-500"
        }
      ]
    }
  ];

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
        <title>Innovative Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's cutting-edge AI, IT, and micro SaaS services. Transform your business with innovative technology solutions." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cybersecurity, cloud computing, blockchain, healthcare AI, financial AI" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
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
                Innovative Services Showcase 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with Zion Tech Group's cutting-edge AI, IT, and micro SaaS solutions. 
              Transform your business with innovative services designed for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {innovativeServices.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                          <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Link
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Get Started
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
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
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging Zion Tech Group's innovative solutions. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
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
