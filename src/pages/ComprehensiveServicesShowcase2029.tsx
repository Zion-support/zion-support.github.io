import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Database, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Target,
  BarChart3,
  Cloud,
  Network,
  Eye,
  Code,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Atom,
  Truck,
  Package,
  Factory,
  Warehouse,
  Route,
  Virus,
  Bug,
  Flask,
  ShoppingCart,
  PenTool,
  DollarSign,
  FileText,
  Search,
  Heart,
  Leaf,
  Satellite,
  Gamepad2,
  Coins,
  Smartphone,
  Server,
  Clock,
  BookOpen,
  ExternalLink
} from 'lucide-react';

const ComprehensiveServicesShowcase2029: React.FC = () => {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions that transform business operations",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          title: "AI Workflow Orchestrator",
          description: "AI-powered workflow automation and optimization",
          href: "/services/ai-workflow-orchestrator",
          price: "$3,999/month",
          features: ["Intelligent process automation", "Real-time optimization", "Predictive analytics"]
        },
        {
          title: "AI Data Governance Platform",
          description: "AI-powered data governance and compliance",
          href: "/services/ai-data-governance-platform",
          price: "$4,999/month",
          features: ["Automated compliance", "Data quality monitoring", "Privacy protection"]
        },
        {
          title: "AI Customer Experience Analytics",
          description: "Advanced customer insights and behavior analysis",
          href: "/services/ai-customer-experience-analytics",
          price: "$2,999/month",
          features: ["Behavioral analysis", "Sentiment tracking", "Predictive modeling"]
        },
        {
          title: "AI Quantum Hybrid Platform",
          description: "Revolutionary quantum-AI integration platform",
          href: "/services/ai-quantum-hybrid-platform",
          price: "$7,999/month",
          features: ["Quantum processing", "AI integration", "Advanced algorithms"]
        },
        {
          title: "AI Autonomous Supply Chain",
          description: "AI-powered supply chain automation and optimization",
          href: "/services/ai-autonomous-supply-chain",
          price: "$3,999/month",
          features: ["Autonomous decision making", "Predictive analytics", "Real-time optimization"]
        },
        {
          title: "AI Cybersecurity Threat Intelligence",
          description: "AI-powered threat detection and response",
          href: "/services/ai-cybersecurity-threat-intelligence",
          price: "$5,999/month",
          features: ["Real-time threat detection", "Behavioral analytics", "Automated response"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      description: "Specialized software solutions for niche business needs",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          title: "Micro CRM",
          description: "Lightweight customer relationship management",
          href: "/services/micro-crm",
          price: "$299/month",
          features: ["Contact management", "Sales tracking", "Basic analytics"]
        },
        {
          title: "Website Analytics",
          description: "Comprehensive website performance tracking",
          href: "/services/website-analytics",
          price: "$199/month",
          features: ["Performance metrics", "User behavior", "Conversion tracking"]
        },
        {
          title: "Helpdesk Platform",
          description: "Customer support and ticket management",
          href: "/services/helpdesk-platform",
          price: "$399/month",
          features: ["Ticket management", "Knowledge base", "Customer portal"]
        },
        {
          title: "AI Project Management",
          description: "AI-driven project optimization and management",
          href: "/services/ai-project-management",
          price: "$599/month",
          features: ["Intelligent scheduling", "Resource optimization", "Risk assessment"]
        },
        {
          title: "AI Customer Support Automation",
          description: "Automated customer support and engagement",
          href: "/services/ai-customer-support-automation",
          price: "$499/month",
          features: ["Chatbot automation", "Ticket routing", "Self-service options"]
        },
        {
          title: "AI Financial Analytics",
          description: "Intelligent financial insights and reporting",
          href: "/services/ai-financial-analytics",
          price: "$799/month",
          features: ["Financial modeling", "Risk assessment", "Performance analytics"]
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      description: "Modern infrastructure and development operations solutions",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          title: "Cloud DevOps",
          description: "Infrastructure automation and scaling",
          href: "/services/cloud-devops",
          price: "$8,999/month",
          features: ["CI/CD pipelines", "Infrastructure as code", "Auto-scaling"]
        },
        {
          title: "IT Infrastructure",
          description: "Enterprise infrastructure solutions",
          href: "/services/it-infrastructure",
          price: "$12,999/month",
          features: ["Network design", "Security implementation", "Performance optimization"]
        },
        {
          title: "FinOps Advisor",
          description: "Cloud cost optimization and management",
          href: "/services/finops-advisor",
          price: "$1,999/month",
          features: ["Cost analysis", "Optimization recommendations", "Budget management"]
        }
      ]
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions for modern threats",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          title: "Zero Trust Network Access",
          description: "Modern security architecture implementation",
          href: "/services/zero-trust-network-access",
          price: "$15,999/month",
          features: ["Identity verification", "Micro-segmentation", "Continuous monitoring"]
        },
        {
          title: "Security Headers & CSP",
          description: "Web security hardening and protection",
          href: "/services/security-headers-csp",
          price: "$999/month",
          features: ["Security headers", "Content Security Policy", "Vulnerability scanning"]
        },
        {
          title: "DSR Privacy Portal",
          description: "GDPR/CCPA compliance and data privacy",
          href: "/services/dsr-portal",
          price: "$1,499/month",
          features: ["Data subject requests", "Privacy compliance", "Audit trails"]
        }
      ]
    },
    {
      name: "Emerging Technologies",
      description: "Next-generation technology solutions",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          title: "Quantum Computing",
          description: "Next-gen computational power solutions",
          href: "/services/quantum-computing",
          price: "$25,999/month",
          features: ["Quantum algorithms", "Research collaboration", "Advanced simulations"]
        },
        {
          title: "IoT Edge Computing",
          description: "Smart device networks and edge processing",
          href: "/services/iot-edge-computing",
          price: "$8,999/month",
          features: ["Edge processing", "Device management", "Real-time analytics"]
        },
        {
          title: "Space Technology",
          description: "Space-based solutions and satellite technology",
          href: "/space-tech",
          price: "$45,999/month",
          features: ["Satellite systems", "Space analytics", "Global coverage"]
        }
      ]
    }
  ];

  const benefits = [
    {
      metric: "200+",
      description: "AI-powered services available"
    },
    {
      metric: "99.9%",
      description: "Uptime guarantee"
    },
    {
      metric: "24/7",
      description: "Expert support available"
    },
    {
      metric: "Global",
      description: "Service coverage worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              2029 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of cutting-edge AI, micro SaaS, and emerging technology 
              solutions designed to transform your business in 2029 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our comprehensive service portfolio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{benefit.metric}</span>
                </div>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? '' : 'bg-gradient-to-r from-slate-800/30 to-slate-700/30'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-full`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {category.name}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                  className="group"
                >
                  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <div className="text-sm text-purple-400 font-semibold">
                        {service.price}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our technology experts to learn how our comprehensive service portfolio 
              can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to explore our services? Contact our team for personalized solutions and expert guidance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/services" className="text-purple-400 hover:text-purple-300 transition-colors">
                    All Services
                  </Link>
                  <Link to="/pricing" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Pricing Guide
                  </Link>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Case Studies
                  </Link>
                  <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Request Information</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500">
                  <option value="">Select Service Category</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="micro-saas">Micro SaaS Solutions</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="emerging-tech">Emerging Technologies</option>
                </select>
                <textarea
                  placeholder="Tell us about your needs and challenges"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Send Request
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;