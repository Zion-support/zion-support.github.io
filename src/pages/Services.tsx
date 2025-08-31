<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  Users,
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
  TrendingUp,
  Scale,
  Gauge
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Cloud, 
  Code, 
  Database,
  Globe,
  Zap,
  Atom,
  Satellite,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: 0 },
    { id: 'ai', name: 'AI Solutions', icon: Brain, count: 8 },
    { id: 'saas', name: 'Micro SAAS', icon: Rocket, count: 6 },
    { id: 'it', name: 'IT Services', icon: Code, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'space', name: 'Space Technology', icon: Satellite, count: 3 }
  ];

  const services = [
    // AI Solutions
    {
<<<<<<< HEAD
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 25,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      services: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      href: "/services/cybersecurity",
      count: 22,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
    },
    {
      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation guidance",
      icon: Zap,
      href: "/services/digital-transformation",
      count: 15,
      color: "from-yellow-400 to-orange-500",
      services: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"]
    },
    {
      name: "IoT & Edge Computing",
      description: "Smart device networks and edge computing solutions",
      icon: Cpu,
      href: "/services/iot-edge",
      count: 20,
      color: "from-green-400 to-emerald-500",
      services: ["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem solving",
      icon: Atom,
      href: "/services/quantum-computing",
      count: 12,
      color: "from-purple-400 to-pink-500",
      services: ["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"]
    }
  ];

  const featuredServices = [
    {
      title: "AI Legal Document Analysis",
      description: "Revolutionize legal document processing with 95% accuracy and 80% time savings",
      price: "From $299/month",
      features: ["AI-Powered Analysis", "Compliance Monitoring", "Risk Assessment"],
      href: "/services/ai-legal-document-analysis",
      color: "from-blue-400 to-purple-500",
      popular: true
    },
    {
      title: "AI Real Estate Investment Analytics",
      description: "Transform real estate investments with 92% prediction accuracy",
      price: "From $199/month",
      features: ["Market Predictions", "ROI Calculator", "Geographic Intelligence"],
      href: "/services/ai-real-estate-investment-analytics",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Reduce costs by 40% and improve delivery times by 50%",
      price: "From $399/month",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management"],
      href: "/services/ai-supply-chain-optimization-enhanced",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "AI Sales Copilot",
      description: "Intelligent sales automation with 40% conversion improvement",
      price: "From $2,200/month",
      features: ["Lead Scoring", "Predictive Analytics", "Automated Follow-ups"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "AI Autonomous Logistics Platform",
      description: "Revolutionary logistics automation with 60% cost reduction and 70% efficiency improvement",
      price: "From $1,999/month",
      features: ["Autonomous Routing", "Real-time Tracking", "Predictive Analytics"],
      href: "/services/ai-autonomous-logistics-platform",
      color: "from-blue-400 to-cyan-500",
      popular: true
    },
    {
      title: "AI-Powered SEO",
      description: "Advanced SEO optimization using artificial intelligence for 300% traffic growth",
      price: "From $99/month",
      features: ["AI Content Optimization", "Keyword Research", "Performance Analytics"],
      href: "/services/ai-powered-seo",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Quantum Edge Computing Solutions",
      description: "Next-generation edge computing with quantum capabilities for ultra-fast processing",
      price: "From $2,999/month",
      features: ["Quantum Processing", "Edge Analytics", "Real-time Optimization"],
      href: "/services/quantum-edge-computing-solutions",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const aiServices = [
    {
      name: "AI-Cybersecurity-Platform",
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered security solutions for enterprise protection",
      icon: Shield,
      href: "/services/AI-Cybersecurity-Platform",
      features: ["Threat Detection", "Zero Trust", "Compliance", "Incident Response"]
    },
    {
      name: "AI-Healthcare-Platform",
      title: "AI Healthcare Platform",
      description: "Revolutionary healthcare solutions powered by artificial intelligence",
      icon: Activity,
      href: "/services/AI-Healthcare-Platform",
      features: ["Diagnostics", "Patient Care", "Drug Discovery", "Medical Imaging"]
    },
    {
      name: "AI-Quantum-Hybrid-Platform",
      title: "AI Quantum Hybrid Platform",
      description: "Next-generation computing combining AI and quantum technologies",
      icon: Atom,
      href: "/services/AI-Quantum-Hybrid-Platform",
      features: ["Quantum ML", "Hybrid Algorithms", "Quantum Security", "Optimization"]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and current technology landscape",
      icon: Search
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a customized solution architecture",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build and thoroughly test your solution",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance",
      icon: Rocket
    }
  ];

  const benefits = [
    "Increase efficiency by 60%",
    "Reduce operational costs by 40%",
    "Improve customer satisfaction by 50%",
    "Accelerate time-to-market by 70%",
    "Enhance security posture by 80%",
    "Boost team productivity by 45%"
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: "💳", description: "Risk management and fraud detection" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: "🛍️", description: "Customer analytics and inventory optimization" },
    { name: "Technology", icon: "💻", description: "Software development and cloud solutions" },
    { name: "Government", icon: "🏛️", description: "Digital transformation and security" }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI, cloud, cybersecurity, and digital transformation services designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Comprehensive Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to transform your business and drive innovation 
                across every aspect of your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your every need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Services</span>
                      <span className="text-blue-400 font-semibold">{category.count}</span>
                    </div>
                    <div className="space-y-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={category.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
=======
      id: 1,
      name: "NeuralFlow Enterprise 2029",
      category: "ai",
      description: "Next-generation neural network-powered workflow automation platform with quantum-enhanced decision making",
      price: "$5,999",
      pricingModel: "per month",
      features: ["AI-powered automation", "Quantum decision making", "Real-time optimization", "Enterprise security"],
      benefits: ["300% efficiency increase", "24/7 autonomous operation", "Scalable architecture"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "AI Financial Advisor Pro",
      category: "ai",
      description: "Advanced AI-powered financial advisory system with predictive analytics and risk assessment",
      price: "$3,999",
      pricingModel: "per month",
      features: ["Predictive analytics", "Risk assessment", "Portfolio optimization", "Regulatory compliance"],
      benefits: ["25% better returns", "Reduced risk exposure", "Automated compliance"],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Autonomous AI Research Assistant",
      category: "ai",
      description: "Self-learning AI research platform that autonomously conducts research and generates insights",
      price: "$2,999",
      pricingModel: "per month",
      features: ["Autonomous research", "Natural language processing", "Knowledge synthesis", "Citation management"],
      benefits: ["10x faster research", "Comprehensive insights", "Reduced manual work"],
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "AI-Powered Cybersecurity Suite",
      category: "ai",
      description: "Intelligent threat detection and prevention system with machine learning capabilities",
      price: "$4,999",
      pricingModel: "per month",
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Zero-day protection"],
      benefits: ["99.9% threat detection", "Real-time protection", "Reduced false positives"],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      name: "Healthcare AI Diagnostics",
      category: "ai",
      description: "Medical AI system for diagnostic imaging and patient data analysis",
      price: "$6,999",
      pricingModel: "per month",
      features: ["Medical imaging analysis", "Patient data insights", "Diagnostic accuracy", "HIPAA compliance"],
      benefits: ["95% diagnostic accuracy", "Faster diagnosis", "Reduced costs"],
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 6,
      name: "AI Marketing Automation",
      category: "ai",
      description: "Intelligent marketing platform with personalized content generation and campaign optimization",
      price: "$2,499",
      pricingModel: "per month",
      features: ["Content generation", "Campaign optimization", "Personalization", "Analytics"],
      benefits: ["40% higher engagement", "Automated optimization", "ROI tracking"],
      icon: Brain,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 7,
      name: "AI Supply Chain Optimization",
      category: "ai",
      description: "Intelligent supply chain management with predictive analytics and optimization",
      price: "$5,499",
      pricingModel: "per month",
      features: ["Demand forecasting", "Inventory optimization", "Route optimization", "Risk management"],
      benefits: ["30% cost reduction", "Improved efficiency", "Risk mitigation"],
      icon: Brain,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 8,
      name: "AI Customer Service Bot",
      category: "ai",
      description: "Advanced conversational AI for customer support and engagement",
      price: "$1,999",
      pricingModel: "per month",
      features: ["Natural conversations", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      benefits: ["24/7 availability", "Instant responses", "Cost reduction"],
      icon: Brain,
      color: "from-violet-500 to-purple-500"
    },

    // Micro SAAS
    {
      id: 9,
      name: "ProjectFlow Pro",
      category: "saas",
      description: "Comprehensive project management platform with AI-powered insights and automation",
      price: "$299",
      pricingModel: "per month",
      features: ["Task management", "Team collaboration", "AI insights", "Reporting"],
      benefits: ["Improved productivity", "Better collaboration", "Data-driven decisions"],
      icon: Rocket,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 10,
      name: "DataVault Enterprise",
      category: "saas",
      description: "Secure data management and analytics platform with advanced encryption",
      price: "$499",
      pricingModel: "per month",
      features: ["Data encryption", "Analytics tools", "Compliance", "Backup"],
      benefits: ["Enhanced security", "Regulatory compliance", "Data insights"],
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 11,
      name: "CloudSync Pro",
      category: "saas",
      description: "Multi-cloud synchronization and management platform",
      price: "$199",
      pricingModel: "per month",
      features: ["Multi-cloud sync", "File sharing", "Version control", "Security"],
      benefits: ["Seamless integration", "Cost optimization", "Enhanced security"],
      icon: Cloud,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 12,
      name: "Analytics Dashboard",
      category: "saas",
      description: "Real-time business intelligence and analytics platform",
      price: "$399",
      pricingModel: "per month",
      features: ["Real-time data", "Custom dashboards", "Predictive analytics", "Export tools"],
      benefits: ["Data-driven decisions", "Real-time insights", "Customizable reports"],
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 13,
      name: "TeamChat Pro",
      category: "saas",
      description: "Advanced team communication platform with AI-powered features",
      price: "$149",
      pricingModel: "per month",
      features: ["Team messaging", "Video calls", "File sharing", "AI assistance"],
      benefits: ["Improved communication", "Better collaboration", "AI-powered features"],
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 14,
      name: "Workflow Automation",
      category: "saas",
      description: "No-code workflow automation platform for business processes",
      price: "$249",
      pricingModel: "per month",
      features: ["Drag & drop builder", "Integration APIs", "Analytics", "Templates"],
      benefits: ["Process automation", "Time savings", "Error reduction"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },

    // IT Services
    {
      id: 15,
      name: "Cloud Infrastructure Setup",
      category: "it",
      description: "Complete cloud infrastructure design and implementation",
      price: "$15,000",
      pricingModel: "one-time",
      features: ["Architecture design", "Implementation", "Security setup", "Training"],
      benefits: ["Scalable infrastructure", "Cost optimization", "Enhanced security"],
      icon: Cloud,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 16,
      name: "DevOps Automation",
      category: "it",
      description: "Complete DevOps pipeline automation and optimization",
      price: "$8,000",
      pricingModel: "one-time",
      features: ["CI/CD setup", "Monitoring", "Automation", "Documentation"],
      benefits: ["Faster deployments", "Reduced errors", "Better collaboration"],
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 17,
      name: "Database Migration",
      category: "it",
      description: "Seamless database migration and optimization services",
      price: "$5,000",
      pricingModel: "one-time",
      features: ["Migration planning", "Data transfer", "Testing", "Optimization"],
      benefits: ["Zero downtime", "Improved performance", "Cost savings"],
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 18,
      name: "Security Audit",
      category: "it",
      description: "Comprehensive security assessment and vulnerability testing",
      price: "$3,500",
      pricingModel: "one-time",
      features: ["Vulnerability scan", "Penetration testing", "Report", "Remediation"],
      benefits: ["Enhanced security", "Compliance", "Risk mitigation"],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 19,
      name: "API Development",
      category: "it",
      description: "Custom API development and integration services",
      price: "$6,000",
      pricingModel: "one-time",
      features: ["API design", "Development", "Testing", "Documentation"],
      benefits: ["Custom solutions", "Integration", "Scalability"],
      icon: Code,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 20,
      name: "Performance Optimization",
      category: "it",
      description: "Application and system performance optimization",
      price: "$4,000",
      pricingModel: "one-time",
      features: ["Performance analysis", "Optimization", "Testing", "Monitoring"],
      benefits: ["Faster performance", "Better user experience", "Cost savings"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 21,
      name: "Disaster Recovery",
      category: "it",
      description: "Comprehensive disaster recovery and business continuity planning",
      price: "$7,500",
      pricingModel: "one-time",
      features: ["Planning", "Implementation", "Testing", "Training"],
      benefits: ["Business continuity", "Risk mitigation", "Peace of mind"],
      icon: Shield,
      color: "from-green-500 to-blue-500"
    },

    // Quantum Computing
    {
      id: 22,
      name: "Quantum Algorithm Development",
      category: "quantum",
      description: "Custom quantum algorithm development for specific use cases",
      price: "$25,000",
      pricingModel: "one-time",
      features: ["Algorithm design", "Implementation", "Testing", "Optimization"],
      benefits: ["Quantum advantage", "Custom solutions", "Future-proofing"],
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 23,
      name: "Quantum-Classical Hybrid",
      category: "quantum",
      description: "Hybrid quantum-classical computing solutions",
      price: "$18,000",
      pricingModel: "one-time",
      features: ["Hybrid design", "Integration", "Testing", "Documentation"],
      benefits: ["Best of both worlds", "Practical applications", "Scalability"],
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 24,
      name: "Quantum Security",
      category: "quantum",
      description: "Quantum-resistant cryptography and security solutions",
      price: "$12,000",
      pricingModel: "one-time",
      features: ["Cryptography design", "Implementation", "Testing", "Certification"],
      benefits: ["Future-proof security", "Quantum resistance", "Compliance"],
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 25,
      name: "Quantum Simulation",
      category: "quantum",
      description: "Quantum simulation services for research and development",
      price: "$15,000",
      pricingModel: "one-time",
      features: ["Simulation design", "Execution", "Analysis", "Reporting"],
      benefits: ["Research insights", "Cost savings", "Accelerated development"],
      icon: Atom,
      color: "from-indigo-500 to-purple-500"
    },

    // Space Technology
    {
      id: 26,
      name: "Satellite Data Analytics",
      category: "space",
      description: "Advanced analytics platform for satellite data processing",
      price: "$9,999",
      pricingModel: "per month",
      features: ["Data processing", "Analytics", "Visualization", "API access"],
      benefits: ["Real-time insights", "Global coverage", "High accuracy"],
      icon: Satellite,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 27,
      name: "Space Mission Planning",
      category: "space",
      description: "Comprehensive space mission planning and optimization",
      price: "$35,000",
      pricingModel: "one-time",
      features: ["Mission design", "Trajectory optimization", "Risk assessment", "Documentation"],
      benefits: ["Mission success", "Cost optimization", "Risk mitigation"],
      icon: Satellite,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 28,
      name: "Space Technology Integration",
      category: "space",
      description: "Integration of space technology into existing systems",
      price: "$22,000",
      pricingModel: "one-time",
      features: ["System analysis", "Integration design", "Implementation", "Testing"],
      benefits: ["Enhanced capabilities", "Competitive advantage", "Future readiness"],
      icon: Satellite,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  // Calculate category counts
  React.useEffect(() => {
    categories.forEach(category => {
      if (category.id !== 'all') {
        category.count = services.filter(service => service.category === category.id).length;
      }
    });
    categories[0].count = services.length;
  }, []);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive range of cutting-edge technology solutions designed to transform 
              your business and give you a competitive advantage in 2029 and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="bg-white/20 dark:bg-black/20 rounded-full px-2 py-1 text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          </div>
        </section>

<<<<<<< HEAD
        {/* Featured Services Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our most popular solutions that are transforming businesses across industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border hover:border-blue-400/50 transition-all duration-300 ${
                    service.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20' 
                      : 'border-white/10'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
=======
      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.price}</div>
                      <div className="text-sm opacity-90">/{service.pricingModel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span>{benefit}</span>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                        </div>
                      ))}
                    </div>
                  </div>
<<<<<<< HEAD

                  <Link
                    to={service.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our specialized AI platforms designed for specific industry needs and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services 2026 Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                New in 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our newest AI-powered solutions designed to revolutionize industries and drive unprecedented business growth.
              </p>
            </motion.div>

            <div className="text-center mb-12">
              <Link
                to="/innovative-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore All New Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zinc-800/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Proven results and measurable impact across all our service offerings.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Specialized solutions tailored to the unique challenges of your industry.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-zinc-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Get complete pricing information for all our revolutionary services. 
                Real market prices, proven ROI, and detailed comparisons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/comprehensive-pricing-guide-2032"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  View Complete Pricing Guide 2032
                </Link>
                <Link
                  to="/innovative-services-showcase-2026"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our innovative technology solutions can drive your success and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
=======

                  {/* CTA */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200">
                      <Star className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500 dark:text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're not just a technology company - we're your strategic partner in digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "15+ years of experience with industry experts in AI, quantum computing, and space technology"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with zero-trust architecture and quantum-resistant encryption"
              },
              {
                icon: TrendingUp,
                title: "Proven ROI",
                description: "Average 300-600% ROI within 12-24 months for our clients"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance to ensure your systems run smoothly"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our revolutionary technology solutions can give you a competitive advantage 
              and drive unprecedented growth in 2029.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/innovative-services-showcase-2029"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="text-lg">Call us at <span className="font-semibold">+1 302 464 0950</span></p>
              <p className="text-lg">Email us at <span className="font-semibold">kleber@ziontechgroup.com</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
