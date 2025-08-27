import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, TrendingUp, Sparkles, Bot, Shield, FileText, Users, BarChart3, Cloud, ShieldCheck, Server, Database, Network, Rocket, Mail, Activity, Brain, Cpu, Zap, Lock, Target, BarChart, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';
import { CUTTING_EDGE_AI_SERVICES_2026 } from '../data/cuttingEdgeAIServices2026';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES_2026 } from '../data/specializedITInfrastructureServices2026';
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2026 } from '../data/specializedIndustrySolutions2026';

export default function Services() {
  const aiServices = [
    {
      title: "AI Autonomous Business Operations 2026",
      description: "Fully autonomous AI system that manages business operations, makes decisions, and optimizes processes without human intervention using advanced machine learning and decision-making algorithms.",
      icon: Bot,
      price: "From $4,999/month",
      features: ["Autonomous decision-making engine", "Real-time process optimization", "Predictive analytics and forecasting", "Automated resource allocation", "Intelligent workflow management", "Self-healing system architecture"],
      benefits: ["Reduce operational costs by 40-60%", "Improve decision accuracy by 85%", "24/7 autonomous operation", "Eliminate human error in critical processes", "Scalable business intelligence"],
      path: "/services/ai-autonomous-business-operations",
      rating: 4.9,
      reviewCount: 127,
      category: "AI & Automation",
      marketPrice: "$4,999 - $15,000/month",
      roi: "300-500%"
    },
    {
      title: "Quantum-Enhanced AI Analytics Platform 2026",
      description: "Next-generation analytics platform that combines quantum computing algorithms with AI to solve complex optimization problems, perform advanced simulations, and provide unprecedented insights.",
      icon: Brain,
      price: "From $8,999/month",
      features: ["Quantum machine learning algorithms", "Quantum optimization solvers", "Hybrid quantum-classical computing", "Advanced simulation capabilities", "Real-time quantum processing", "Scalable quantum architecture"],
      benefits: ["Solve previously intractable problems", "Exponential speedup for optimization", "Unprecedented simulation accuracy", "Future-proof quantum architecture", "Competitive advantage in research"],
      path: "/services/quantum-ai-analytics-platform",
      rating: 4.9,
      reviewCount: 156,
      category: "Quantum Computing & AI",
      marketPrice: "$8,999 - $25,000/month",
      roi: "400-700%"
    },
    {
      title: "AI-Powered Cybersecurity Threat Intelligence 2026",
      description: "Advanced cybersecurity platform that uses AI and machine learning to detect, analyze, and respond to cyber threats in real-time, providing proactive protection against evolving security risks.",
      icon: Shield,
      price: "From $3,999/month",
      features: ["Real-time threat detection", "AI-powered behavioral analysis", "Automated incident response", "Threat hunting capabilities", "Vulnerability assessment", "Security orchestration"],
      benefits: ["Reduce security incidents by 80%", "Automate threat response", "Improve security posture", "Compliance automation", "24/7 security monitoring"],
      path: "/services/ai-cybersecurity-threat-intelligence",
      rating: 4.9,
      reviewCount: 203,
      category: "AI & Security",
      marketPrice: "$3,999 - $12,000/month",
      roi: "300-500%"
    },
    {
      title: "AI Content Marketing Suite 2026",
      description: "Comprehensive content creation platform that generates high-quality, engaging content across multiple formats using advanced AI models, including text, images, videos, and interactive content.",
      icon: FileText,
      price: "From $1,999/month",
      features: ["Multi-format content generation", "AI-powered writing assistance", "Image and video creation", "Content optimization", "SEO integration", "Brand voice consistency"],
      benefits: ["Reduce content creation time by 70%", "Improve content quality and engagement", "Scale content production", "Maintain brand consistency", "Optimize for search engines"],
      path: "/services/ai-content-generation-suite",
      rating: 4.8,
      reviewCount: 89,
      category: "AI & Content",
      marketPrice: "$1,999 - $5,000/month",
      roi: "200-350%"
    },
    {
      title: "AI Sales Copilot 2026",
      description: "Intelligent sales assistant that automates lead qualification, follow-ups, and sales process optimization using advanced AI.",
      icon: Users,
      price: "From $1,200/month",
      features: ["Lead Qualification", "Automated Follow-ups", "Sales Process Optimization", "Performance Analytics", "CRM Integration", "Predictive Lead Scoring"],
      benefits: ["Increase conversion rates by 35%", "Reduce follow-up time by 70%", "Improve lead quality by 50%", "Automated sales reporting"],
      path: "/services/ai-sales-copilot",
      rating: 4.7,
      reviewCount: 203,
      category: "AI & Sales",
      marketPrice: "$1,200 - $3,500/month",
      roi: "250-400%"
    },
    {
      title: "AI Customer Support Platform 2026",
      description: "Intelligent customer support solution that provides instant responses, ticket routing, and customer satisfaction optimization.",
      icon: MessageSquare,
      price: "From $600/month",
      features: ["AI Chatbots", "Intelligent Ticket Routing", "Sentiment Analysis", "Knowledge Base", "Multi-language Support", "Performance Analytics"],
      benefits: ["Reduce response time by 80%", "Improve customer satisfaction by 40%", "Handle 10x more inquiries", "24/7 customer support"],
      path: "/services/ai-customer-support-platform",
      rating: 4.8,
      reviewCount: 167,
      category: "AI & Support",
      marketPrice: "$600 - $1,800/month",
      roi: "200-300%"
    }
  ];

  const itServices = [
    {
      title: "5G Enterprise Network Solutions 2026",
      description: "Advanced 5G enterprise networking solutions that provide ultra-fast connectivity, low latency, and massive IoT device support for modern business operations.",
      icon: Zap,
      price: "From $4,500/month",
      features: ["5G SA/NSA network deployment", "Network slicing for QoS", "Edge computing integration", "IoT device management", "Network security & monitoring", "Performance optimization"],
      benefits: ["10x faster data transfer", "Ultra-low latency (<1ms)", "Massive IoT device support", "Enhanced security features", "Future-proof infrastructure"],
      path: "/services/5g-enterprise-network-solutions",
      rating: 4.8,
      reviewCount: 145,
      category: "IT & Infrastructure",
      marketPrice: "$4,500 - $12,000/month",
      roi: "250-400%"
    },
    {
      title: "Zero Trust Network Architecture 2026",
      description: "Comprehensive zero trust security framework that implements strict access controls, continuous monitoring, and least-privilege access across all network resources.",
      icon: Lock,
      price: "From $3,200/month",
      features: ["Identity verification", "Device trust assessment", "Network segmentation", "Continuous monitoring", "Access control policies", "Threat detection"],
      benefits: ["Reduce attack surface by 80%", "Prevent lateral movement", "Improve compliance posture", "Real-time threat detection", "Enhanced security visibility"],
      path: "/services/zero-trust-network-architecture",
      rating: 4.9,
      reviewCount: 178,
      category: "IT & Security",
      marketPrice: "$3,200 - $8,500/month",
      roi: "300-500%"
    },
    {
      title: "Hybrid Cloud Infrastructure 2026",
      description: "Seamless hybrid cloud solution that combines on-premises infrastructure with public and private cloud services for optimal performance, cost, and security.",
      icon: Cloud,
      price: "From $3,800/month",
      features: ["Multi-cloud management", "Hybrid connectivity", "Data synchronization", "Workload optimization", "Cost management", "Security & compliance"],
      benefits: ["Optimize costs by 30-40%", "Improve performance", "Enhanced security", "Flexible deployment", "Scalable infrastructure"],
      path: "/services/hybrid-cloud-infrastructure",
      rating: 4.8,
      reviewCount: 145,
      category: "IT & Infrastructure",
      marketPrice: "$3,800 - $10,000/month",
      roi: "250-400%"
    },
    {
      title: "Software-Defined Networking (SDN) 2026",
      description: "Advanced SDN solution that centralizes network control, automates configuration, and provides programmatic network management for improved agility and efficiency.",
      icon: Network,
      price: "From $2,800/month",
      features: ["Centralized network control", "Programmatic configuration", "Network automation", "Traffic optimization", "Security policies", "Performance monitoring"],
      benefits: ["Reduce network management time by 60%", "Improve network agility", "Automate configuration", "Enhanced security", "Cost optimization"],
      path: "/services/software-defined-networking-sdn",
      rating: 4.7,
      reviewCount: 189,
      category: "IT & Networking",
      marketPrice: "$2,800 - $7,500/month",
      roi: "200-350%"
    },
    {
      title: "Edge Computing Infrastructure 2026",
      description: "Distributed edge computing platform that brings computation and data storage closer to data sources, reducing latency and improving real-time processing capabilities.",
      icon: Cpu,
      price: "From $2,200/month",
      features: ["Edge node deployment", "Local data processing", "Real-time analytics", "Edge-to-cloud sync", "Load balancing", "Security at edge"],
      benefits: ["Reduce latency by 80-90%", "Lower bandwidth costs", "Improve reliability", "Enable offline operation", "Scalable architecture"],
      path: "/services/edge-computing-infrastructure",
      rating: 4.7,
      reviewCount: 189,
      category: "IT & Infrastructure",
      marketPrice: "$2,200 - $6,000/month",
      roi: "200-350%"
    }
  ];

  const microSaaSServices = [
    {
      title: "Website Analytics & SEO 2026",
      description: "Comprehensive website analytics and SEO optimization platform to improve your online presence and drive traffic.",
      icon: BarChart3,
      price: "From $200/month",
      features: ["Traffic Analytics", "SEO Optimization", "Keyword Tracking", "Performance Monitoring", "Competitor Analysis", "Automated Reports"],
      benefits: ["Increase organic traffic by 60%", "Improve search rankings", "Track performance metrics", "Automated optimization"],
      path: "/services/website-analytics",
      rating: 4.8,
      reviewCount: 456,
      category: "Micro SaaS & Marketing",
      marketPrice: "$200 - $800/month",
      roi: "150-250%"
    },
    {
      title: "Email Marketing Automation 2026",
      description: "Powerful email marketing platform with automation, segmentation, and analytics to boost customer engagement.",
      icon: Mail,
      price: "From $150/month",
      features: ["Email Automation", "List Segmentation", "A/B Testing", "Analytics Dashboard", "Template Library", "CRM Integration"],
      benefits: ["Increase open rates by 40%", "Automate customer journeys", "Improve conversion rates", "Detailed analytics"],
      path: "/services/email-marketing",
      rating: 4.7,
      reviewCount: 323,
      category: "Micro SaaS & Marketing",
      marketPrice: "$150 - $500/month",
      roi: "200-300%"
    },
    {
      title: "Customer Feedback Surveys 2026",
      description: "Professional survey platform to collect customer feedback, measure satisfaction, and improve your products.",
      icon: MessageSquare,
      price: "From $100/month",
      features: ["Survey Builder", "Response Collection", "Data Analysis", "Custom Reports", "Integration APIs", "Multi-language Support"],
      benefits: ["Improve customer satisfaction", "Make data-driven decisions", "Increase customer retention", "Professional insights"],
      path: "/services/customer-feedback",
      rating: 4.6,
      reviewCount: 234,
      category: "Micro SaaS & Analytics",
      marketPrice: "$100 - $400/month",
      roi: "150-250%"
    },
    {
      title: "Affiliate Tracking Platform 2026",
      description: "Complete affiliate marketing solution to manage partnerships, track performance, and optimize revenue.",
      icon: TrendingUp,
      price: "From $300/month",
      features: ["Affiliate Management", "Performance Tracking", "Commission Management", "Reporting Dashboard", "API Integration", "Fraud Detection"],
      benefits: ["Increase affiliate revenue", "Automate commission tracking", "Prevent fraud", "Detailed analytics"],
      path: "/services/affiliate-tracking",
      rating: 4.7,
      reviewCount: 189,
      category: "Micro SaaS & Marketing",
      marketPrice: "$300 - $1,200/month",
      roi: "200-400%"
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare AI Platform 2026",
      description: "Comprehensive AI-powered healthcare platform that provides diagnostic assistance, patient monitoring, and clinical decision support for healthcare providers.",
      icon: ShieldIcon,
      price: "From $5,500/month",
      features: ["AI diagnostic assistance", "Patient monitoring", "Clinical decision support", "Medical image analysis", "Predictive analytics", "Electronic health records"],
      benefits: ["Improve diagnostic accuracy by 30%", "Reduce diagnosis time by 50%", "Enhance patient outcomes", "Compliance automation", "Cost optimization"],
      path: "/services/healthcare-ai-platform",
      rating: 4.9,
      reviewCount: 234,
      category: "Healthcare",
      marketPrice: "$5,500 - $15,000/month",
      roi: "300-500%"
    },
    {
      title: "Financial Services AI Platform 2026",
      description: "Advanced AI platform for financial services that provides fraud detection, risk assessment, algorithmic trading, and customer service automation.",
      icon: DollarSign,
      price: "From $6,800/month",
      features: ["Fraud detection", "Risk assessment", "Algorithmic trading", "Customer service automation", "Compliance monitoring", "Portfolio optimization"],
      benefits: ["Reduce fraud by 90%", "Improve risk assessment accuracy", "Automate compliance", "Enhance customer experience", "Increase operational efficiency"],
      path: "/services/financial-services-ai-platform",
      rating: 4.9,
      reviewCount: 189,
      category: "Financial Services",
      marketPrice: "$6,800 - $20,000/month",
      roi: "400-600%"
    },
    {
      title: "Manufacturing IoT Platform 2026",
      description: "Comprehensive IoT platform for manufacturing that provides real-time monitoring, predictive maintenance, quality control, and supply chain optimization.",
      icon: Workflow,
      price: "From $4,200/month",
      features: ["Real-time monitoring", "Predictive maintenance", "Quality control", "Supply chain optimization", "Energy management", "Asset tracking"],
      benefits: ["Reduce downtime by 40%", "Improve quality by 25%", "Optimize energy usage", "Enhance supply chain visibility", "Increase productivity"],
      path: "/services/manufacturing-iot-platform",
      rating: 4.8,
      reviewCount: 156,
      category: "Manufacturing",
      marketPrice: "$4,200 - $12,000/month",
      roi: "250-400%"
    },
    {
      title: "Retail AI Platform 2026",
      description: "AI-powered retail platform that provides personalized recommendations, inventory optimization, customer analytics, and omnichannel experience management.",
      icon: GlobeIcon,
      price: "From $2,800/month",
      features: ["Personalized recommendations", "Inventory optimization", "Customer analytics", "Omnichannel experience", "Demand forecasting", "Price optimization"],
      benefits: ["Increase sales by 25%", "Reduce inventory costs by 30%", "Improve customer satisfaction", "Optimize pricing", "Enhance marketing ROI"],
      path: "/services/retail-ai-platform",
      rating: 4.7,
      reviewCount: 234,
      category: "Retail",
      marketPrice: "$2,800 - $8,000/month",
      roi: "200-350%"
    }
  ];

  const renderServiceCard = (service: any) => (
    <motion.div
      key={service.title}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg mr-4">
            <service.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-zion-slate-dark">{service.title}</h3>
            <span className="inline-block px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm font-medium rounded-full">
              {service.category}
            </span>
          </div>
        </div>
        
        <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-zion-slate-light">({service.reviewCount})</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-zion-slate-light/5 p-2 rounded">
              <span className="font-medium text-zion-slate-dark">Market Price:</span>
              <div className="text-zion-cyan font-semibold">{service.marketPrice}</div>
            </div>
            <div className="bg-zion-slate-light/5 p-2 rounded">
              <span className="font-medium text-zion-slate-dark">ROI:</span>
              <div className="text-zion-cyan font-semibold">{service.roi}</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-zion-slate-dark mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-zion-slate-light">
                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-zion-slate-dark mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-zion-slate-light">
                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <a
            href={service.path}
            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 px-4 rounded-lg font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="https://ziontechgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEO 
        title="Innovative Services & Solutions 2026 - Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI services, IT infrastructure solutions, and specialized industry platforms. From autonomous business operations to quantum computing and specialized industry solutions."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Cutting-Edge Technology Solutions 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Innovative Services & 
                <span className="block bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                  Solutions Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of AI-powered services, 
                cutting-edge IT infrastructure, and specialized industry solutions. 
                From autonomous operations to quantum computing, we deliver the future of technology today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold text-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zion-slate-dark mb-6">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our innovative services span across AI & Automation, IT Infrastructure, 
                Micro SaaS Solutions, and Specialized Industry Platforms. 
                Each solution is designed to deliver measurable business value and competitive advantage.
              </p>
            </motion.div>

            {/* AI Services Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-zion-slate-dark">AI & Automation Services</h3>
                  <p className="text-zion-slate-light">Revolutionary AI solutions that transform business operations</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map(renderServiceCard)}
              </div>
            </div>

            {/* IT Infrastructure Services Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-zion-slate-dark">IT Infrastructure & Networking</h3>
                  <p className="text-zion-slate-light">Advanced infrastructure solutions for modern enterprises</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map(renderServiceCard)}
              </div>
            </div>

            {/* Micro SaaS Services Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-zion-slate-dark">Micro SaaS & Marketing Solutions</h3>
                  <p className="text-zion-slate-light">Scalable solutions for growing businesses</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaaSServices.map(renderServiceCard)}
              </div>
            </div>

            {/* Industry Solutions Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-zion-slate-dark">Specialized Industry Solutions</h3>
                  <p className="text-zion-slate-light">Tailored solutions for specific industry challenges</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industrySolutions.map(renderServiceCard)}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-cyan">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our innovative services can drive your business forward. 
                Our team of experts is ready to help you implement cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold text-lg hover:bg-zion-slate-light transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
              
              <div className="mt-8 text-white/80">
                <p className="text-lg">Visit our website for more information:</p>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-white transition-colors duration-300 font-semibold"
                >
                  ziontechgroup.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

