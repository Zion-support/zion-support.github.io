import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target, 
  Rocket, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  TrendingUp, 
  Award, 
  Code, 
  Truck, 
  Building, 
  PenTool, 
  Eye, 
  Server, 
  Smartphone, 
  Database, 
  Network, 
  Clock, 
  Satellite, 
  FileText,
  MessageSquare,
  Calendar,
  Search,
  Share2,
  Eye,
  Network,
  BookOpen,
  Lightbulb
} from 'lucide-react';

const Services: React.FC = () => {
  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      price: "$299 - $1,999/month",
      features: ["Predictive analytics", "Real-time dashboards", "Natural language queries"],
      link: "/services/ai-business-intelligence",
      icon: BarChart3,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "AI Content Marketing Suite",
      description: "Create engaging content with AI-powered generation and optimization",
      price: "$199 - $1,299/month",
      features: ["Content generation", "SEO optimization", "Social media automation"],
      link: "/services/ai-content-marketing-suite",
      icon: PenTool,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "AI Autonomous Research Assistant",
      description: "24/7 AI research with automated insights and report generation",
      price: "$399 - $2,499/month",
      features: ["Multi-source analysis", "Automated reports", "Predictive insights"],
      link: "/services/ai-autonomous-research-assistant",
      icon: Brain,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "AI Workflow Orchestrator",
      description: "Intelligent automation and workflow optimization",
      price: "$599 - $2,999/month",
      features: ["Process automation", "Smart routing", "Performance analytics"],
      link: "/services/ai-workflow-orchestrator",
      icon: Workflow,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "AI Customer Experience Analytics",
      description: "Deep insights into customer behavior and satisfaction",
      price: "$449 - $1,799/month",
      features: ["Behavior tracking", "Sentiment analysis", "Predictive modeling"],
      link: "/services/ai-customer-experience-analytics",
      icon: Users,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "AI Financial Analytics",
      description: "Intelligent financial insights and risk management",
      price: "$699 - $2,299/month",
      features: ["Risk assessment", "Portfolio optimization", "Fraud detection"],
      link: "/services/ai-financial-analytics",
      icon: DollarSign,
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const microSaaSServices = [
    {
      title: "AI Sales Email Optimizer",
      description: "Auto-drafts and A/B tests emails based on CRM context",
      price: "$299 - $799/month",
      features: ["CRM integration", "Sequence testing", "Compliance guardrails"],
      icon: MessageSquare,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Support Ticket Triage Copilot",
      description: "Classifies, deduplicates, and suggests resolutions",
      price: "$249 - $999/month",
      features: ["Auto-priority routing", "Knowledge base suggestions", "First-response macros"],
      icon: HelpCircle,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Invoice OCR + Reconciliation",
      description: "Extracts line-items and auto-matches to POs",
      price: "$199 - $799/month",
      features: ["Vendor anomaly detection", "Tax support", "Audit trails"],
      icon: FileText,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "SEO Content Planner",
      description: "Keyword clustering and optimization recommendations",
      price: "$99 - $399/month",
      features: ["Competitor analysis", "Internal linking", "CMS integration"],
      icon: Search,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "HR Screening Assistant",
      description: "Resume summarization and candidate screening",
      price: "$149 - $599/month",
      features: ["ATS integration", "Bias mitigation", "Compliance exports"],
      icon: Users,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Micro CRM Platform",
      description: "Lightweight customer relationship management",
      price: "$199 - $699/month",
      features: ["Contact management", "Sales tracking", "Email automation"],
      icon: ShoppingCart,
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const itServices = [
    {
      title: "Cloud DevOps",
      description: "Infrastructure automation and scaling solutions",
      price: "$10,000 - $100,000",
      features: ["CI/CD pipelines", "Infrastructure as code", "Auto-scaling"],
      icon: Cloud,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "IT Infrastructure",
      description: "Enterprise infrastructure and network solutions",
      price: "$15,000 - $150,000",
      features: ["Network design", "Security implementation", "Performance optimization"],
      icon: Server,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Cybersecurity Platform",
      description: "Advanced AI-powered security solutions",
      price: "$8,000 - $75,000",
      features: ["Threat detection", "Vulnerability assessment", "Incident response"],
      icon: Shield,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Zero Trust Network Access",
      description: "Modern security architecture implementation",
      price: "$12,000 - $95,000",
      features: ["Identity verification", "Micro-segmentation", "Continuous monitoring"],
      icon: Lock,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Data Platform Modernization",
      description: "Lakehouse design and real-time analytics",
      price: "$18,000 - $140,000",
      features: ["Data architecture", "ETL pipelines", "Analytics platforms"],
      icon: Database,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Managed IT Services",
      description: "Comprehensive IT management and support",
      price: "$2,000 - $25,000/month",
      features: ["24/7 monitoring", "Proactive maintenance", "Onsite support"],
      icon: Cpu,
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const emergingTechServices = [
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation computational power for complex problems",
      price: "$25,000 - $200,000",
      features: ["Algorithm optimization", "Quantum simulation", "Hybrid computing"],
      icon: Atom,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "IoT Edge Computing",
      description: "Smart device networks and edge processing",
      price: "$15,000 - $120,000",
      features: ["Device management", "Edge analytics", "Real-time processing"],
      icon: Network,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Space Technology Solutions",
      description: "Space-based technology and satellite systems",
      price: "$50,000 - $500,000",
      features: ["Satellite integration", "Space data analysis", "Ground station systems"],
      icon: Satellite,
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Digital Twin Platform",
      description: "Virtual replicas for system optimization",
      price: "$20,000 - $180,000",
      features: ["3D modeling", "Real-time simulation", "Predictive maintenance"],
      icon: Eye,
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-zion-slate-light">
              Cutting-edge technology solutions designed to transform your business. 
              From AI-powered micro SAAS to enterprise IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Services Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From strategy to production MLOps, we deliver outcomes, not experiments. 
              Transform your business with intelligent automation and insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</p>
                <a 
                  href={service.link} 
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Micro SaaS Solutions Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Fast-to-deploy, subscription-based tools that solve specific business problems with clear ROI. 
              Start small, scale fast, and see immediate results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</p>
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center group-hover:underline"
                >
                  Get a demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* IT Services Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              IT Services & Modernization
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              End-to-end services to secure, scale, and streamline your technology footprint. 
              From cloud migration to cybersecurity, we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</p>
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Emerging Technologies Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Emerging Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Stay ahead of the curve with cutting-edge technology solutions. 
              From quantum computing to space technology, we're building the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {emergingTechServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-cyan">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</p>
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="text-zion-cyan hover:text-zion-cyan-light font-semibold flex items-center group-hover:underline"
                >
                  Explore solution <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA and Contact Section */}
      <div className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-sm rounded-3xl p-12 border border-zion-cyan/20 text-center"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to start?
            </h3>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Talk with our experts to scope a pilot or request a tailored quote. 
              We respond within 24 hours and offer free consultations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Book a consultation
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-zion-slate-light">
              <p className="mb-2">
                <MapPin className="inline w-4 h-4 mr-2" />
                Address: 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p>
                <Globe className="inline w-4 h-4 mr-2" />
                Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +1 (302) 464-0950
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;