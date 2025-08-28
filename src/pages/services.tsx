import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'digital', name: 'Digital Transformation', icon: Zap },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
  ];

  const coreServices = [
    {
      category: 'ai',
      icon: Brain,
      title: "AI Business Intelligence Elite",
      description: "Advanced AI-powered analytics platform with real-time insights, predictive analytics, and automated reporting.",
      features: ["GPT-4 & Claude 3.5 Integration", "Real-time BI", "Predictive Analytics", "Enterprise Security"],
      pricing: "$2,500 - $12,000/month",
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: "/services/ai-business-intelligence-elite"
    },
    {
      category: 'security',
      icon: Shield,
      title: "AI Cybersecurity Elite",
      description: "Military-grade AI-powered cybersecurity platform with real-time threat detection and automated response.",
      features: ["AI Threat Detection", "Zero-Day Protection", "Automated Response", "Compliance Ready"],
      pricing: "$3,500 - $18,000/month",
      color: "from-red-500 to-orange-500",
      featured: true,
      href: "/services/ai-cybersecurity-elite"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "Quantum Computing Elite",
      description: "Access to cutting-edge quantum computing with AI-quantum hybrid systems for complex problem solving.",
      features: ["1000+ Qubit Access", "AI-Quantum Hybrid", "Quantum-Safe Crypto", "Global Network"],
      pricing: "$8,500 - $45,000/month",
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/quantum-computing-elite"
    },
    {
      category: 'micro-saas',
      icon: Rocket,
      title: "Micro-SaaS Platform Elite",
      description: "Complete platform to launch and scale your micro-SaaS business with proven templates and automation.",
      features: ["Rapid Launch", "Built-in Payments", "AI Automation", "Multi-tenant Architecture"],
      pricing: "$2,500 - $12,000/month",
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/micro-saas-platform-elite"
    },
    {
      category: 'ai',
      icon: Brain,
      title: "AI Development & Strategy",
      description: "Custom AI models, machine learning solutions, and strategic AI roadmapping for your business.",
      features: ["Custom AI Models", "ML Strategy", "Data Analytics", "AI Integration"],
      pricing: "$5,000 - $50,000",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: 'cloud',
      icon: Cloud,
      title: "Cloud Migration & Architecture",
      description: "Seamless cloud migration, scalable architecture, and cost optimization strategies.",
      features: ["AWS/Azure/GCP", "Cost Optimization", "Scalability", "Security"],
      pricing: "$10,000 - $100,000",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: 'security',
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments, threat detection, and compliance frameworks.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"],
      pricing: "$3,000 - $25,000",
      color: "from-red-500 to-orange-500"
    },
    {
      category: 'digital',
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic consulting and implementation to modernize your technology stack.",
      features: ["Process Optimization", "Technology Stack", "Change Management", "ROI Analysis"],
      pricing: "$15,000 - $75,000",
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: 'ai',
      icon: Users,
      title: "AI-Powered Analytics",
      description: "Advanced business intelligence and predictive analytics solutions.",
      features: ["Predictive Models", "Real-time Insights", "Custom Dashboards", "Data Integration"],
      pricing: "$8,000 - $40,000",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: 'cloud',
      icon: Server,
      title: "DevOps Automation",
      description: "CI/CD pipelines, infrastructure as code, and automated deployment solutions.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automation"],
      pricing: "$6,000 - $35,000",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const microSaasServices = [
    {
      title: "AI Sales Email Optimizer",
      description: "Auto-drafts and A/B tests emails based on CRM context to raise reply rates.",
      features: [
        "CRM integration (HubSpot, Salesforce)",
        "Sequence testing and analytics",
        "Compliance guardrails",
        "AI-powered subject lines"
      ],
      pricing: "$299 - $799/month",
      cta: "Get a demo",
      ctaLink: "/contact",
      icon: Mail,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Support Ticket Triage Copilot",
      description: "Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.",
      features: [
        "Auto-priority and routing",
        "Knowledge base suggestions",
        "First-response macros",
        "Sentiment analysis"
      ],
      pricing: "$249 - $999/month",
      cta: "See solution",
      ctaLink: "/services",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Invoice OCR + Reconciliation",
      description: "Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.",
      features: [
        "Vendor anomaly detection",
        "Tax and currency support",
        "Audit trails",
        "Multi-format support"
      ],
      pricing: "$199 - $799/month",
      cta: "Learn more",
      ctaLink: "/services",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "SEO Content Planner",
      description: "Keyword clustering, brief generation, and on-page optimization recommendations.",
      features: [
        "Competitor gap analysis",
        "Automatic internal linking",
        "Publish to CMS",
        "Performance tracking"
      ],
      pricing: "$99 - $399/month",
      cta: "Pricing",
      ctaLink: "/pricing",
      icon: Search,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "HR Screening Assistant",
      description: "Summarizes resumes, auto-screens candidates, and schedules interviews.",
      features: [
        "ATS integration",
        "Bias-mitigation controls",
        "Compliance exports",
        "Interview scheduling"
      ],
      pricing: "$149 - $599/month",
      cta: "Talk to sales",
      ctaLink: "/contact",
      icon: Users,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "AI Project Management",
      description: "Intelligent project tracking, resource allocation, and risk prediction.",
      features: [
        "AI-powered scheduling",
        "Risk prediction",
        "Resource optimization",
        "Progress tracking"
      ],
      pricing: "$199 - $699/month",
      cta: "Start free trial",
      ctaLink: "/contact",
      icon: Rocket,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const innovativeAIServices = [
    {
      title: "AI Autonomous Research Assistant",
      description: "AI-powered autonomous research that discovers, analyzes, and synthesizes information across multiple sources.",
      features: [
        "Autonomous Research",
        "Multi-Source Analysis",
        "Intelligent Summarization",
        "Real-time Updates"
      ],
      pricing: "$299 - $1,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-autonomous-research-assistant",
      icon: Brain,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Transform your supply chain with AI that predicts demand, optimizes inventory, and reduces costs.",
      features: [
        "AI-Powered Forecasting",
        "Real-time Visibility",
        "Intelligent Routing",
        "Risk Management"
      ],
      pricing: "$499 - $2,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-supply-chain-optimization",
      icon: Network,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "AI Content Marketing Suite",
      description: "AI-powered content creation, optimization, and distribution for maximum engagement.",
      features: [
        "AI Content Generation",
        "Audience Intelligence",
        "SEO Optimization",
        "Performance Analytics"
      ],
      pricing: "$199 - $1,499/month",
      cta: "Learn More",
      ctaLink: "/services/ai-content-marketing-suite",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Workflow Orchestrator",
      description: "Intelligent workflow automation that learns from your processes and optimizes them continuously.",
      features: [
        "Process Learning",
        "Automated Optimization",
        "Integration Hub",
        "Performance Analytics"
      ],
      pricing: "$399 - $1,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-workflow-orchestrator",
      icon: GitFork,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Deep insights into customer behavior with predictive analytics and personalized recommendations.",
      features: [
        "Behavioral Analysis",
        "Predictive Insights",
        "Personalization Engine",
        "ROI Tracking"
      ],
      pricing: "$349 - $1,799/month",
      cta: "Learn More",
      ctaLink: "/services/ai-customer-experience-analytics",
      icon: BarChart3,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "AI Financial Risk Management",
      description: "Intelligent financial risk assessment with AI-driven predictive analytics.",
      features: [
        "Risk Assessment",
        "Predictive Analytics",
        "Compliance Monitoring",
        "Real-time Alerts"
      ],
      pricing: "$599 - $2,999/month",
      cta: "Learn More",
      ctaLink: "/services/ai-financial-risk-management",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? coreServices 
    : coreServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and drive innovation.
          </p>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", icon: Award },
              { number: "50+", label: "AI Solutions", icon: Brain },
              { number: "99.9%", label: "Uptime Guarantee", icon: ShieldCheck },
              { number: "24/7", label: "Support Available", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Core Enterprise Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300 group hover:transform hover:scale-105 ${
                  service.featured 
                    ? 'border-purple-500/60 hover:border-purple-400/80 shadow-2xl shadow-purple-500/25' 
                    : 'border-white/20 hover:bg-white/15 hover:border-cyan-400/40'
                }`}
              >
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {service.featured && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        ELITE
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                
                {service.href ? (
                  <a
                    href={service.href}
                    className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Micro-SaaS Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Fast-to-deploy, subscription-based tools that solve specific business problems with clear ROI and immediate value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovative AI-Powered Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Innovative AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cutting-edge AI solutions that transform business operations with intelligent automation, predictive analytics, and autonomous decision-making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeAIServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.pricing}</div>
                
                <a
                  href={service.ctaLink}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  {service.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our innovative solutions can drive your success and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-cyan-400/30 hover:border-cyan-400/50 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;