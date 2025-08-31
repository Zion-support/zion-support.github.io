import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Network,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  Workflow,
  MessageCircle,
  Calendar,
  PenTool,
  Activity,
  Atom,
  Server,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Phone,
  Mail,
  MapPin,
  Star,
  DollarSign,
  Clock,
  Eye,
  Search,
  Settings,
  Palette,
  Building2,
  Truck,
  Package,
  Warehouse,
  Route,
  AlertTriangle,
  Bug,
  Virus,
  Key,
  Fingerprint,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  TrendingDown,
  Zap as ZapIcon,
  CreditCard,
  UserCheck,
  Building
} from 'lucide-react';

const ComprehensiveServicesShowcase2025 = () => {
  const featuredServices = [
    {
      title: "AI Intelligent Document Processing",
      description: "Transform your document workflow with AI-powered processing. Extract, analyze, and automate document handling with 99.9% accuracy.",
      icon: FileText,
      price: "From $299/month",
      features: ["AI-Powered OCR", "Workflow Automation", "Content Extraction", "Enterprise Security"],
      benefits: ["90% Faster Processing", "70% Cost Reduction", "99.9% Accuracy", "24/7 Availability"],
      link: "/services/ai-intelligent-document-processing",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "AI Supply Chain Optimization 2025",
      description: "Revolutionize your supply chain with AI-powered optimization. Reduce costs by 30%, improve delivery times by 50%, and achieve 99.9% availability.",
      icon: Network,
      price: "From $499/month",
      features: ["Demand Forecasting", "Route Optimization", "Risk Management", "Real-time Analytics"],
      benefits: ["30% Cost Reduction", "50% Faster Delivery", "99.9% Availability", "25% Revenue Increase"],
      link: "/services/ai-supply-chain-optimization-2025",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "AI Cybersecurity Platform 2025",
      description: "Protect your organization with AI-powered cybersecurity. Detect threats with 99.9% accuracy, respond instantly, and maintain compliance.",
      icon: Shield,
      price: "From $399/month",
      features: ["Threat Detection", "Zero-Day Prevention", "Incident Response", "Compliance Monitoring"],
      benefits: ["99.9% Threat Detection", "Instant Response", "60% Cost Reduction", "24/7 Protection"],
      link: "/services/ai-cybersecurity-platform-2025",
      color: "from-red-500 to-orange-600"
    }
  ];

  const allServices = [
    {
      category: "AI & Automation",
      services: [
        {
          name: "AI Enterprise Automation Platform",
          description: "Automate complex business processes with AI",
          price: "From $1,299/month",
          link: "/services/ai-enterprise-automation-platform"
        },
        {
          name: "AI Business Intelligence Dashboard",
          description: "Real-time insights and analytics dashboard",
          price: "From $599/month",
          link: "/services/ai-business-intelligence-dashboard"
        },
        {
          name: "AI Customer Support Automation",
          description: "Automate customer support with AI",
          price: "From $399/month",
          link: "/services/ai-customer-support-automation"
        },
        {
          name: "AI Project Management Platform",
          description: "AI-powered project management and collaboration",
          price: "From $799/month",
          link: "/services/ai-project-management-platform"
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Intelligent marketing automation and optimization",
          price: "From $699/month",
          link: "/services/ai-marketing-automation-platform"
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Orchestrate complex workflows with AI",
          price: "From $899/month",
          link: "/services/ai-workflow-orchestrator"
        }
      ]
    },
    {
      category: "IT & Infrastructure",
      services: [
        {
          name: "Cloud DevOps Solutions",
          description: "End-to-end cloud and DevOps services",
          price: "From $1,199/month",
          link: "/services/cloud-devops"
        },
        {
          name: "Cybersecurity Services",
          description: "Comprehensive cybersecurity protection",
          price: "From $799/month",
          link: "/services/cybersecurity"
        },
        {
          name: "IT Infrastructure Management",
          description: "Managed IT infrastructure services",
          price: "From $999/month",
          link: "/services/it-infrastructure-management"
        },
        {
          name: "Edge Computing Solutions",
          description: "Next-generation edge computing",
          price: "From $1,499/month",
          link: "/services/edge-computing-solutions"
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Enterprise blockchain implementation",
          price: "From $2,999/month",
          link: "/services/blockchain-enterprise-solutions"
        }
      ]
    },
    {
      category: "Specialized Solutions",
      services: [
        {
          name: "AI Predictive Maintenance",
          description: "Predictive maintenance with AI",
          price: "From $599/month",
          link: "/services/ai-predictive-maintenance"
        },
        {
          name: "AI HR Platform",
          description: "AI-powered HR management",
          price: "From $499/month",
          link: "/services/ai-hr-platform"
        },
        {
          name: "AI Financial Risk Management",
          description: "Financial risk assessment with AI",
          price: "From $1,199/month",
          link: "/services/ai-financial-trading-risk-management"
        },
        {
          name: "AI Sales Copilot",
          description: "AI-powered sales assistance",
          price: "From $399/month",
          link: "/services/ai-sales-copilot"
        },
        {
          name: "AI Compliance Assistant",
          description: "Automated compliance monitoring",
          price: "From $699/month",
          link: "/services/ai-compliance-assistant"
        }
      ]
    }
  ];

  const pricingComparison = [
    {
      feature: "AI-Powered Analytics",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Custom AI Models"
    },
    {
      feature: "User Accounts",
      starter: "5 users",
      professional: "Unlimited",
      enterprise: "Unlimited + SSO"
    },
    {
      feature: "API Access",
      starter: "Limited",
      professional: "Full Access",
      enterprise: "Custom Endpoints"
    },
    {
      feature: "Support",
      starter: "Email",
      professional: "Priority",
      enterprise: "Dedicated Team"
    },
    {
      feature: "Compliance",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Custom Frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Discover our complete portfolio of AI-powered services, IT solutions, and micro SaaS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro SaaS, business automation, digital transformation, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-8 shadow-2xl shadow-purple-500/25">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Services Showcase 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our complete portfolio of AI-powered services, IT solutions, and micro SaaS platforms. 
              Transform your business with cutting-edge technology designed for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                Get Custom Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services 2025
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most innovative and transformative services designed to revolutionize 
              how businesses operate in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                
                <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="block w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center group-hover:shadow-2xl group-hover:shadow-purple-500/25"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of services designed to meet every business need 
              and drive digital transformation.
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/20 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 group"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="text-purple-400 font-semibold text-sm mb-4">{service.price}</div>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:underline"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Tiers Comparison
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the service tier that best fits your business needs and budget requirements.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left text-white font-semibold p-4">Feature</th>
                  <th className="text-center text-white font-semibold p-4">Starter</th>
                  <th className="text-center text-white font-semibold p-4">Professional</th>
                  <th className="text-center text-white font-semibold p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row, index) => (
                  <tr key={index} className="border-b border-slate-600/30">
                    <td className="text-gray-300 p-4">{row.feature}</td>
                    <td className="text-center text-gray-400 p-4">{row.starter}</td>
                    <td className="text-center text-gray-400 p-4">{row.professional}</td>
                    <td className="text-center text-gray-400 p-4">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive portfolio of AI-powered services and start your 
              digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Need Help Choosing the Right Service?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
