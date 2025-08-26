import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Link as LinkIcon, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Globe, 
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  BarChart3,
  Palette,
  Building,
  Car,
  MessageSquare,
  Target,
  Monitor,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Fingerprint,
  ShieldCheck,
  Globe2,
  Wallet,
  Coins,
  Smartphone,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Workflow Automation",
      description: "Transform business operations with intelligent, AI-driven workflow automation",
      features: ["Process automation", "AI-powered insights", "Real-time monitoring", "Predictive analytics"],
      pricing: "$299 - $1,999/month",
      link: "/services/ai-workflow-automation",
      category: "AI & Automation",
      color: "from-zion-cyan to-zion-blue",
      badge: "Most Popular",
      roi: "300%",
      timeSaved: "8 hours/day"
    },
    {
      icon: Atom,
      title: "Quantum AI Platform",
      description: "Experience the future of AI with quantum computing and exponential speedup",
      features: ["Quantum algorithms", "Hybrid AI processing", "Quantum cryptography", "Real-time processing"],
      pricing: "$1,299 - $5,999/month",
      link: "/services/quantum-ai-platform",
      category: "Quantum Computing",
      color: "from-zion-purple to-zion-blue",
      badge: "Cutting-Edge",
      roi: "500%",
      timeSaved: "10x faster"
    },
    {
      icon: LinkIcon,
      title: "Blockchain Web3 Platform",
      description: "Build the future of decentralized applications with comprehensive Web3 capabilities",
      features: ["Multi-chain support", "Smart contracts", "DeFi protocols", "NFT marketplace"],
      pricing: "$499 - $2,999/month",
      link: "/services/blockchain-web3-platform",
      category: "Blockchain",
      color: "from-zion-blue to-zion-cyan",
      badge: "Decentralized",
      roi: "400%",
      timeSaved: "24/7 operation"
    }
  ];

  const allServices = [
    {
      category: "Artificial Intelligence",
      services: [
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation", icon: Brain, description: "Intelligent process automation" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: BarChart3, description: "Data-driven insights" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation", icon: Target, description: "Smart marketing campaigns" },
        { name: "AI Customer Service", href: "/services/ai-customer-service", icon: MessageSquare, description: "Automated customer support" }
      ]
    },
    {
      category: "Quantum Technology",
      services: [
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", icon: Atom, description: "Quantum-powered AI" },
        { name: "Quantum Computing", href: "/services/quantum-computing", icon: Rocket, description: "Quantum algorithms" },
        { name: "Quantum Neural Networks", href: "/services/quantum-neural-networks", icon: Brain, description: "Quantum ML models" },
        { name: "Quantum Cryptography", href: "/services/quantum-cryptography", icon: Lock, description: "Unbreakable encryption" }
      ]
    },
    {
      category: "Blockchain & Web3",
      services: [
        { name: "Blockchain Web3 Platform", href: "/services/blockchain-web3-platform", icon: LinkIcon, description: "DeFi & NFT platform" },
        { name: "Smart Contract Development", href: "/services/smart-contract-development", icon: Code, description: "Secure contracts" },
        { name: "DeFi Protocols", href: "/services/defi-protocols", icon: Coins, description: "Decentralized finance" },
        { name: "NFT Solutions", href: "/services/nft-solutions", icon: Palette, description: "Digital assets" }
      ]
    },
    {
      category: "Cloud & DevOps",
      services: [
        { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure", icon: Cloud, description: "Scalable cloud solutions" },
        { name: "DevOps Automation", href: "/services/devops-automation", icon: Zap, description: "CI/CD pipelines" },
        { name: "Container Orchestration", href: "/services/container-orchestration", icon: Cpu, description: "Kubernetes & Docker" },
        { name: "Microservices Architecture", href: "/services/microservices", icon: Network, description: "Scalable architecture" }
      ]
    },
    {
      category: "Cybersecurity",
      services: [
        { name: "Zero Trust Security", href: "/services/zero-trust-security", icon: Shield, description: "Advanced security model" },
        { name: "Threat Detection", href: "/services/threat-detection", icon: Eye, description: "AI-powered security" },
        { name: "Incident Response", href: "/services/incident-response", icon: AlertTriangle, description: "24/7 security monitoring" },
        { name: "Compliance & Audit", href: "/services/compliance-audit", icon: CheckCircle, description: "Regulatory compliance" }
      ]
    },
    {
      category: "IoT & Edge Computing",
      services: [
        { name: "IoT Platform", href: "/services/iot-platform", icon: Cpu, description: "Connected devices" },
        { name: "Edge Computing", href: "/services/edge-computing", icon: Network, description: "Edge processing" },
        { name: "5G Solutions", href: "/services/5g-solutions", icon: Zap, description: "Next-gen networks" },
        { name: "Digital Twin", href: "/services/digital-twin", icon: Globe, description: "Virtual replicas" }
      ]
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "AI-powered diagnostics, blockchain patient records, and quantum drug discovery",
      icon: Heart,
      services: ["AI Diagnostics", "Blockchain Records", "Quantum Drug Discovery", "IoT Monitoring"]
    },
    {
      title: "Finance",
      description: "DeFi protocols, AI trading algorithms, and quantum financial modeling",
      icon: Coins,
      services: ["DeFi Platforms", "AI Trading", "Quantum Modeling", "Blockchain Payments"]
    },
    {
      title: "Manufacturing",
      description: "Smart factories, IoT sensors, and AI-powered quality control",
      icon: Building,
      services: ["Smart Factories", "IoT Sensors", "AI Quality Control", "Predictive Maintenance"]
    },
    {
      title: "Retail",
      description: "AI customer insights, blockchain supply chain, and personalized experiences",
      icon: ShoppingCart,
      services: ["AI Insights", "Blockchain Supply Chain", "Personalization", "IoT Inventory"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
            {/* Floating particles */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-zion-cyan rounded-full animate-quantum-float"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-zion-purple rounded-full animate-blockchain-pulse delay-1000"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-zion-blue rounded-full animate-ai-glow delay-2000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive suite of cutting-edge technology services designed to transform your business 
              and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most innovative and popular technology solutions that are transforming businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  {service.badge && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {service.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-zion-cyan/10 rounded-xl">
                      <div className="text-lg font-bold text-zion-cyan">{service.roi}</div>
                      <div className="text-xs text-zion-slate-light">ROI Increase</div>
                    </div>
                    <div className="text-center p-3 bg-zion-blue/10 rounded-xl">
                      <div className="text-lg font-bold text-zion-blue">{service.timeSaved}</div>
                      <div className="text-xs text-zion-slate-light">Time Saved</div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services by Category */}
      <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Service Portfolio</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-3">
                    {React.createElement(category.services[0].icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="group"
                    >
                      <Link to={service.href}>
                        <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-6 rounded-xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-xl hover:shadow-zion-cyan/25">
                          <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-zion-slate-light text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored technology solutions for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                      <p className="text-zion-slate-light text-sm">{industry.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Let our technology experts help you choose the right solutions and implement them successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to explore our services? Our technology experts are here to help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-zion-slate-light text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light text-sm">Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;