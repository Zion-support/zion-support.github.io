import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Target, 
  TrendingUp, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Mail,
  MessageSquare,
  Phone,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Workflow,
  Megaphone,
  Bot,
  Cpu,
  Network,
  Smartphone,
  Lock,
  BarChart,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Play,
  DollarSign,
  Award,
  Rocket,
  Building2,
  Cloud,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  Handshake,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence Dashboard",
      description: "Transform your data into actionable intelligence with AI-powered analytics and real-time dashboards",
      href: "/services/ai-business-intelligence-dashboard",
      color: "from-purple-500 to-pink-500",
      price: "From $299/month",
      features: ["AI-Powered Analytics", "Real-time Dashboards", "Predictive Analytics", "User Behavior Analytics"],
      benefits: ["Data-driven decisions", "Improved ROI", "Real-time insights", "Predictive capabilities"]
    },
    {
      icon: Bot,
      title: "AI Customer Support Automation",
      description: "Revolutionize customer support with intelligent chatbots and automated workflows",
      href: "/services/ai-customer-support-automation",
      color: "from-cyan-500 to-blue-500",
      price: "From $199/month",
      features: ["AI-Powered Chatbots", "Smart Ticket Routing", "Omnichannel Support", "Predictive Analytics"],
      benefits: ["24/7 availability", "Reduced response time", "Improved satisfaction", "Cost reduction"]
    },
    {
      icon: Workflow,
      title: "AI Project Management Platform",
      description: "Transform project delivery with AI-powered planning, automation, and predictive analytics",
      href: "/services/ai-project-management-platform",
      color: "from-green-500 to-emerald-500",
      price: "From $99/month",
      features: ["AI-Powered Planning", "Intelligent Workflows", "Team Collaboration", "Resource Management"],
      benefits: ["Faster delivery", "Better efficiency", "Improved collaboration", "Higher success rate"]
    },
    {
      icon: Megaphone,
      title: "AI Marketing Automation Platform",
      description: "Automate marketing campaigns with AI-driven segmentation and personalization",
      href: "/services/ai-marketing-automation-platform",
      color: "from-orange-500 to-red-500",
      price: "From $199/month",
      features: ["AI Audience Segmentation", "Smart Campaigns", "Multi-channel Marketing", "Predictive Analytics"],
      benefits: ["Increased ROI", "Better engagement", "Scalable growth", "Time savings"]
    }
  ];

  const allServices = [
    {
      category: "AI & Automation",
      services: [
        { name: "AI Enterprise Automation Platform", href: "/services/ai-enterprise-automation-platform", price: "From $599/month" },
        { name: "AI Enterprise Intelligence Platform", href: "/services/ai-enterprise-intelligence-platform", price: "From $799/month" },
        { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform", price: "From $399/month" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", price: "From $299/month" },
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform", price: "From $499/month" },
        { name: "AI Autonomous Research Assistant", href: "/services/ai-autonomous-research-assistant", price: "From $299/month" },
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform", price: "From $999/month" },
        { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform", price: "From $699/month" },
        { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform", price: "From $1,299/month" },
        { name: "AI Quantum Neural Network Platform", href: "/services/ai-quantum-neural-network-platform", price: "From $1,499/month" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization", price: "From $599/month" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", price: "From $199/month" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", price: "From $299/month" },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio", price: "From $199/month" },
        { name: "AI Content Optimizer Pro", href: "/services/ai-content-optimizer-pro", price: "From $299/month" },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform", price: "From $399/month" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", price: "From $199/month" },
        { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform", price: "From $599/month" }
      ]
    },
    {
      category: "IT & Infrastructure",
      services: [
        { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management", price: "From $399/month" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", price: "From $299/month" },
        { name: "Cybersecurity", href: "/services/cybersecurity", price: "From $199/month" },
        { name: "Edge Computing Solutions", href: "/services/edge-computing-solutions", price: "From $499/month" },
        { name: "Blockchain Enterprise Solutions", href: "/services/blockchain-enterprise-solutions", price: "From $799/month" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer", price: "From $299/month" },
        { name: "Digital Transformation", href: "/services/digital-transformation", price: "From $599/month" },
        { name: "Green IT Solutions", href: "/services/green-it", price: "From $199/month" },
        { name: "Healthcare Technology", href: "/services/healthcare-tech", price: "From $399/month" },
        { name: "Space Technology", href: "/services/space-tech", price: "From $999/month" }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [
        { name: "Micro SaaS Solutions Comprehensive", href: "/services/micro-saas-solutions-comprehensive", price: "From $99/month" },
        { name: "Micro CRM", href: "/services/micro-crm", price: "From $49/month" },
        { name: "Employee Scheduling SaaS", href: "/services/employee-scheduling-saas", price: "From $79/month" },
        { name: "GDPR Cookie Compliance", href: "/services/gdpr-cookie-compliance", price: "From $29/month" },
        { name: "GDPR DSAR Portal", href: "/services/gdpr-dsar-portal", price: "From $49/month" },
        { name: "IT Helpdesk", href: "/services/it-helpdesk", price: "From $99/month" },
        { name: "Email Sequencer", href: "/services/email-sequencer", price: "From $39/month" },
        { name: "E-commerce Personalization", href: "/services/ecommerce-personalization", price: "From $79/month" },
        { name: "Returns Management SaaS", href: "/services/returns-management-saas", price: "From $59/month" },
        { name: "Website AI Chatbot", href: "/services/website-ai-chatbot", price: "From $49/month" }
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: "Healthcare",
      description: "AI-powered healthcare solutions for improved patient outcomes and operational efficiency",
      services: ["AI Healthcare Platform", "Healthcare Technology", "AI Healthcare Analytics", "Patient Management"],
      icon: Activity
    },
    {
      industry: "Financial Services",
      description: "Advanced financial technology solutions for trading, compliance, and risk management",
      services: ["AI Financial Trading", "AI Compliance Assistant", "Cloud FinOps", "Blockchain Solutions"],
      icon: Coins
    },
    {
      industry: "Manufacturing",
      description: "Smart manufacturing solutions with AI optimization and predictive maintenance",
      services: ["AI Supply Chain", "Edge Computing", "IoT Solutions", "Predictive Analytics"],
      icon: Cpu
    },
    {
      industry: "E-commerce",
      description: "E-commerce optimization with AI personalization and automation",
      services: ["AI Marketing Automation", "E-commerce Personalization", "AI Content Creation", "Customer Analytics"],
      icon: ShoppingCart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive Services Showcase 2025
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Our Complete Portfolio of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Innovative Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Explore our comprehensive suite of AI-powered services, IT solutions, and Micro SaaS platforms. 
              From enterprise automation to cutting-edge quantum computing, we have everything you need to transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
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
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-medium mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 bg-slate-800/30">
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
              Explore our comprehensive range of services across all categories
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
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-cyan-400" />
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
                      className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <div className="text-cyan-400 font-medium mb-4">{service.price}</div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions designed for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{solution.industry}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="text-cyan-400 font-medium mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {solution.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              With over 50+ innovative services, we have the perfect solution for your business needs. 
              Let's discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>

            <div className="mt-8 text-gray-400">
              <p className="text-sm">
                <strong>Contact Us:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
              </p>
              <p className="text-sm mt-2">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
