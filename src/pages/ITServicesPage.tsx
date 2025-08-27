import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Server, Zap, Database, Globe, Code, Monitor, Smartphone, Settings, Users, BarChart3, MessageSquare, FileText, CheckCircle, Search, HardDrive, Cpu, Network, Rocket, Target, Award, Clock, Star, Lock, RefreshCw, TrendingUp, Package, ShieldCheck, BarChart, MessageCircle, UserCheck, CheckCircle2 } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const ITServices = [
    {
        title: "Cloud Infrastructure Management",
        description: "Comprehensive cloud services including AWS, Azure, and Google Cloud",
        price: "$1,500 - $8,000/month",
        features: ["24/7 monitoring", "Cost optimization", "Security compliance", "Auto-scaling"],
        icon: <Cloud className="h-8 w-8 text-zion-cyan"/>,
        category: "Cloud",
        badge: "Popular",
        link: "/request-quote?service=cloud-infrastructure",
        marketSize: "$178.5B",
        growthRate: "15.7% annually",
        deployment: "2-4 weeks"
    },
    {
        title: "Cybersecurity Services",
        description: "Complete security solutions to protect your digital assets",
        price: "$2,000 - $15,000",
        features: ["Security audits", "Penetration testing", "Incident response", "Compliance"],
        icon: <Shield className="h-8 w-8 text-zion-purple"/>,
        category: "Security",
        badge: "Premium",
        link: "/request-quote?service=cybersecurity",
        marketSize: "$182.3B",
        growthRate: "13.4% annually",
        deployment: "3-6 weeks"
    },
    {
        title: "DevOps & CI/CD",
        description: "Streamline development and deployment processes",
        price: "$3,000 - $12,000/month",
        features: ["Pipeline automation", "Infrastructure as code", "Monitoring", "Performance optimization"],
        icon: <Zap className="h-8 w-8 text-zion-blue"/>,
        category: "DevOps",
        link: "/request-quote?service=devops",
        marketSize: "$18.7B",
        growthRate: "250% annually",
        deployment: "4-8 weeks"
    },
    {
        title: "Database Management",
        description: "Expert database administration and optimization",
        price: "$1,000 - $6,000/month",
        features: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support"],
        icon: <Database className="h-8 w-8 text-zion-cyan"/>,
        category: "Database",
        link: "/request-quote?service=database-management",
        marketSize: "$63.1B",
        growthRate: "12.8% annually",
        deployment: "2-3 weeks"
    },
    {
        title: "Network Infrastructure",
        description: "Design, implement, and maintain robust network solutions",
        price: "$2,500 - $20,000",
        features: ["Network design", "Security implementation", "Monitoring", "24/7 support"],
        icon: <Globe className="h-8 w-8 text-zion-purple"/>,
        category: "Networking",
        link: "/request-quote?service=network-infrastructure",
        marketSize: "$45.2B",
        growthRate: "8.9% annually",
        deployment: "3-6 weeks"
    },
    {
        title: "IT Consulting & Strategy",
        description: "Strategic IT planning and digital transformation guidance",
        price: "$150 - $300/hour",
        features: ["Technology assessment", "Roadmap planning", "Vendor selection", "ROI analysis"],
        icon: <CheckCircle className="h-8 w-8 text-zion-blue"/>,
        category: "Consulting",
        link: "/request-quote?service=it-consulting",
        marketSize: "$58.7B",
        growthRate: "11.2% annually",
        deployment: "1-2 weeks"
    },
    {
        title: "Managed IT Services",
        description: "Complete IT management for small to enterprise businesses",
        price: "$500 - $5,000/month",
        features: ["Help desk support", "System administration", "Security management", "Backup services"],
        icon: <Settings className="h-8 w-8 text-zion-cyan"/>,
        category: "Managed Services",
        badge: "New",
        link: "/request-quote?service=managed-it",
        marketSize: "$274.3B",
        growthRate: "9.8% annually",
        deployment: "2-4 weeks"
    },
    {
        title: "Data Center Services",
        description: "On-premise and colocation data center solutions",
        price: "$1,000 - $10,000/month",
        features: ["Hardware provisioning", "Environmental monitoring", "Power management", "Security"],
        icon: <Server className="h-8 w-8 text-zion-purple"/>,
        category: "Data Center",
        link: "/request-quote?service=data-center",
        marketSize: "$89.4B",
        growthRate: "7.6% annually",
        deployment: "4-8 weeks"
    },
    {
        title: "Mobile App Development",
        description: "Custom mobile applications for iOS and Android",
        price: "$15,000 - $100,000",
        features: ["UI/UX design", "Native development", "Testing", "App store deployment"],
        icon: <Smartphone className="h-8 w-8 text-zion-blue"/>,
        category: "Development",
        link: "/request-quote?service=mobile-development",
        marketSize: "$935.2B",
        growthRate: "8.5% annually",
        deployment: "8-16 weeks"
    },
    {
        title: "Web Development",
        description: "Modern web applications and e-commerce solutions",
        price: "$10,000 - $75,000",
        features: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance"],
        icon: <Code className="h-8 w-8 text-zion-cyan"/>,
        category: "Development",
        link: "/request-quote?service=web-development",
        marketSize: "$89.4B",
        growthRate: "15.3% annually",
        deployment: "6-12 weeks"
    },
    // New innovative IT services
    {
        title: "Quantum Computing Solutions",
        description: "Next-generation computing infrastructure and applications",
        price: "$25,000 - $500,000",
        features: ["Quantum algorithms", "Quantum-safe cryptography", "Quantum simulation", "Research partnerships"],
        icon: <Cpu className="h-8 w-8 text-zion-purple"/>,
        category: "Quantum Computing",
        badge: "Revolutionary",
        link: "/request-quote?service=quantum-computing",
        marketSize: "$31.2B",
        growthRate: "280% annually",
        deployment: "12-24 weeks"
    },
    {
        title: "Edge Computing Infrastructure",
        description: "Distributed computing at the network edge for real-time processing",
        price: "$5,000 - $50,000/month",
        features: ["Edge node deployment", "Latency optimization", "Local processing", "IoT integration"],
        icon: <Network className="h-8 w-8 text-zion-cyan"/>,
        category: "Edge Computing",
        link: "/request-quote?service=edge-computing",
        marketSize: "$19.8B",
        growthRate: "300% annually",
        deployment: "6-10 weeks"
    },
    {
        title: "Blockchain Infrastructure",
        description: "Enterprise blockchain implementation and management",
        price: "$10,000 - $100,000",
        features: ["Smart contracts", "Consensus mechanisms", "Security protocols", "Scalability solutions"],
        icon: <ShieldCheck className="h-8 w-8 text-zion-blue"/>,
        category: "Blockchain",
        link: "/request-quote?service=blockchain-infrastructure",
        marketSize: "$67.4B",
        growthRate: "87.7% annually",
        deployment: "8-16 weeks"
    },
    {
        title: "AI Infrastructure & MLOps",
        description: "Complete infrastructure for machine learning and AI operations",
        price: "$8,000 - $75,000/month",
        features: ["GPU clusters", "Model training pipelines", "Deployment automation", "Monitoring & scaling"],
        icon: <Brain className="h-8 w-8 text-zion-purple"/>,
        category: "AI Infrastructure",
        badge: "Cutting-edge",
        link: "/request-quote?service=ai-infrastructure",
        marketSize: "$23.1B",
        growthRate: "320% annually",
        deployment: "8-12 weeks"
    },
    {
        title: "Zero Trust Security Architecture",
        description: "Modern security framework with continuous verification",
        price: "$15,000 - $100,000",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Threat detection"],
        icon: <Lock2 className="h-8 w-8 text-zion-cyan"/>,
        category: "Security",
        link: "/request-quote?service=zero-trust",
        marketSize: "$31.2B",
        growthRate: "280% annually",
        deployment: "6-12 weeks"
    },
    {
        title: "Green IT & Sustainability",
        description: "Energy-efficient and environmentally conscious IT solutions",
        price: "$3,000 - $25,000",
        features: ["Energy optimization", "Carbon footprint reduction", "Sustainable hardware", "Green data centers"],
        icon: <Leaf className="h-8 w-8 text-zion-blue"/>,
        category: "Green IT",
        link: "/request-quote?service=green-it",
        marketSize: "$14.7B",
        growthRate: "265% annually",
        deployment: "4-8 weeks"
    },
    {
        title: "5G & Next-Gen Networks",
        description: "Advanced networking solutions for the future",
        price: "$20,000 - $150,000",
        features: ["5G infrastructure", "Network slicing", "Ultra-low latency", "Massive IoT support"],
        icon: <Network2 className="h-8 w-8 text-zion-purple"/>,
        category: "Next-Gen Networks",
        link: "/request-quote?service=5g-networks",
        marketSize: "$28.9B",
        growthRate: "350% annually",
        deployment: "10-20 weeks"
    },
    {
        title: "Digital Twin Solutions",
        description: "Virtual replicas of physical systems for simulation and optimization",
        price: "$25,000 - $200,000",
        features: ["3D modeling", "Real-time monitoring", "Predictive analytics", "Simulation capabilities"],
        icon: <Eye2 className="h-8 w-8 text-zion-cyan"/>,
        category: "Digital Twins",
        link: "/request-quote?service=digital-twins",
        marketSize: "$22.4B",
        growthRate: "280% annually",
        deployment: "12-20 weeks"
    },
    {
        title: "IoT Platform & Management",
        description: "Complete Internet of Things infrastructure and management",
        price: "$5,000 - $50,000/month",
        features: ["Device management", "Data collection", "Analytics dashboard", "Security protocols"],
        icon: <Settings3 className="h-8 w-8 text-zion-blue"/>,
        category: "IoT",
        link: "/request-quote?service=iot-platform",
        marketSize: "$384.7B",
        growthRate: "13.4% annually",
        deployment: "6-12 weeks"
    },
    {
        title: "Hybrid Cloud Solutions",
        description: "Seamless integration of public and private cloud environments",
        price: "$8,000 - $60,000/month",
        features: ["Multi-cloud management", "Data synchronization", "Security integration", "Cost optimization"],
        icon: <Cloud2 className="h-8 w-8 text-zion-purple"/>,
        category: "Hybrid Cloud",
        link: "/request-quote?service=hybrid-cloud",
        marketSize: "$97.6B",
        growthRate: "22.5% annually",
        deployment: "8-16 weeks"
    },
    {
        title: "Disaster Recovery & Business Continuity",
        description: "Comprehensive backup and recovery solutions",
        price: "$2,000 - $20,000/month",
        features: ["Automated backups", "Rapid recovery", "Business continuity planning", "Testing & validation"],
        icon: <RefreshCw className="h-8 w-8 text-zion-cyan"/>,
        category: "Disaster Recovery",
        link: "/request-quote?service=disaster-recovery",
        marketSize: "$12.3B",
        growthRate: "18.7% annually",
        deployment: "4-8 weeks"
    },
    {
        title: "IT Compliance & Governance",
        description: "Regulatory compliance and IT governance frameworks",
        price: "$5,000 - $40,000",
        features: ["Compliance audits", "Policy development", "Risk assessment", "Training programs"],
        icon: <FileText3 className="h-8 w-8 text-zion-blue"/>,
        category: "Compliance",
        link: "/request-quote?service=it-compliance",
        marketSize: "$8.9B",
        growthRate: "15.2% annually",
        deployment: "6-10 weeks"
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const categories = [...new Set(ITServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Server className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                IT <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Comprehensive IT solutions that drive digital transformation and business growth. 
                From infrastructure to innovation, we're your technology partner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              End-to-end IT solutions designed to modernize and optimize your technology infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ITServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                      {service.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Pricing:</span>
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Deployment:</span>
                    <span className="text-zion-cyan font-semibold">{service.deployment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Market Size:</span>
                    <span className="text-zion-cyan font-semibold">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zion-slate-light">Growth Rate:</span>
                    <span className="text-zion-cyan font-semibold">{service.growthRate}</span>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 text-center block"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our IT experts to discuss your specific needs and discover how our services can modernize your technology infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-blue transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
              <p className="text-zion-slate-light">{contactInfo.address}</p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 inline-block"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
