import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Bot,
  Workflow,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Activity,
  Eye,
  Lock,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Code,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2,
  Building2,
  Handshake,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Atom,
  Heart,
  Star,
  ThumbsUp,
  MessageSquare,
  UserCheck,
  PieChart,
  LineChart,
  MousePointer,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      title: "AI Autonomous Business Operations Platform",
      description: "Transform your business operations with AI that autonomously manages, optimizes, and scales your entire business ecosystem in real-time.",
      icon: Brain,
      category: "AI & Automation",
      pricing: "From $2,999/month",
      features: ["AI-Powered Decision Making", "Automated Process Orchestration", "Predictive Analytics", "Intelligent Risk Management"],
      link: "/services/ai-autonomous-business-operations-platform",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      title: "AI Customer Experience Analytics Platform",
      description: "Transform customer relationships with AI-powered analytics that understand, predict, and optimize every customer interaction across all touchpoints.",
      icon: Heart,
      category: "Customer Experience",
      pricing: "From $1,999/month",
      features: ["AI-Powered Sentiment Analysis", "Real-Time Customer Journey Mapping", "Predictive Customer Behavior", "Omnichannel Experience Monitoring"],
      link: "/services/ai-customer-experience-analytics-platform",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "Quantum Edge Computing Solutions",
      description: "Revolutionize your infrastructure with the world's first quantum-enhanced edge computing platform for unprecedented performance.",
      icon: Atom,
      category: "Infrastructure",
      pricing: "From $3,999/month",
      features: ["Quantum Computing Integration", "Edge AI Processing", "5G/6G Network Optimization", "Quantum-Secure Edge"],
      link: "/services/quantum-edge-computing-solutions",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      title: "AI Project Management Platform",
      description: "Transform your project management with AI-powered insights, automated workflows, and intelligent resource allocation.",
      icon: Workflow,
      category: "Project Management",
      pricing: "From $99/month",
      features: ["AI-Powered Task Prioritization", "Smart Workflow Automation", "Predictive Project Analytics", "Intelligent Team Management"],
      link: "/services/ai-project-management-platform",
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      services: [
        "AI Enterprise Automation Platform",
        "AI Enterprise Intelligence Platform",
        "AI Data Analytics Platform",
        "AI Business Intelligence",
        "AI Cybersecurity Platform",
        "AI Autonomous Research Assistant",
        "AI Financial Trading Platform",
        "AI Healthcare Platform",
        "AI Quantum Hybrid Platform",
        "AI Quantum Neural Network Platform",
        "AI Supply Chain Optimization",
        "AI Content Creation Studio",
        "AI Sales Copilot",
        "AI Compliance Assistant"
      ],
      icon: Brain,
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      name: "IT Infrastructure & Cloud",
      services: [
        "IT Infrastructure Management",
        "Cloud & DevOps Solutions",
        "Cybersecurity Services",
        "Digital Transformation",
        "Edge Computing Solutions",
        "Blockchain Enterprise Solutions",
        "Quantum Computing Solutions",
        "IoT Edge Computing",
        "5G/6G Network Optimization",
        "Zero Trust Network Architecture"
      ],
      icon: Server,
      color: "from-zion-cyan to-zion-cyan-dark"
    },
    {
      name: "Micro SaaS Solutions",
      services: [
        "AI Project Management Platform",
        "AI Customer Support Automation",
        "AI Content Creation Studio",
        "Cloud FinOps Optimizer",
        "AI Sales Copilot",
        "AI Compliance Assistant",
        "Micro CRM Solutions",
        "AI Marketing Automation",
        "AI HR Platform",
        "AI Workflow Orchestrator"
      ],
      icon: Zap,
      color: "from-zion-purple to-zion-cyan"
    },
    {
      name: "Industry Solutions",
      services: [
        "Healthcare Technology Solutions",
        "Financial Services Solutions",
        "Manufacturing Solutions",
        "Retail Solutions",
        "Government Solutions",
        "Space Technology Solutions",
        "Sustainability Solutions",
        "Green IT Solutions"
      ],
      icon: Building2,
      color: "from-zion-cyan to-zion-purple"
    }
  ];

  const benefits = [
    "Reduce operational costs by 40-60% through intelligent automation",
    "Improve decision-making speed by 80% with real-time AI insights",
    "Increase operational efficiency by 50-70%",
    "Minimize human errors by 90% in repetitive tasks",
    "Scale operations seamlessly without proportional cost increases",
    "24/7 autonomous monitoring and response capabilities"
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 text-zion-purple text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              2025 Comprehensive Services Showcase
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {" "}Innovation Hub
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge AI, IT, and Micro SaaS solutions designed to transform 
              businesses across every industry. From autonomous operations to quantum computing, we're building the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Innovation Services
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our flagship services that are revolutionizing industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-zinc-400 bg-zinc-700 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zinc-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-zion-cyan font-semibold text-lg mb-3">{service.pricing}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className={`inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services across all technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zinc-300 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and growth with our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Commitment</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Built on enterprise-grade infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">99.9% uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">SOC 2 Type II certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">24/7 expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                  <span className="text-zinc-300">Custom AI model training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
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
            <p className="text-xl text-zinc-300 mb-8">
              Join the future of technology with our comprehensive suite of innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Learn More</h3>
              <div className="space-y-3">
                <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  View All Services →
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Case Studies →
                </Link>
                <Link to="/blog" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Latest Insights →
                </Link>
                <Link to="/pricing" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Pricing Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
