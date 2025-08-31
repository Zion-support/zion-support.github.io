import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Server, 
  Rocket, 
  Zap, 
  Shield, 
  Cloud, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Workflow, 
  Atom, 
  Car, 
  Coins, 
  Heart, 
  FileText, 
  MessageCircle, 
  Target, 
  Globe, 
  Database, 
  Network,
  ArrowRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ComprehensiveServicesOverview = () => {
  const serviceCategories = [
    {
      title: "AI & Automation Services",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      description: "Transform your business with cutting-edge AI solutions",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Advanced analytics and insights platform",
          href: "/services/ai-business-intelligence-dashboard",
          price: "From $299/month",
          features: ["Real-time analytics", "Custom dashboards", "AI-powered insights"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer service automation",
          href: "/services/ai-customer-support-automation",
          price: "From $199/month",
          features: ["24/7 support", "Multi-language", "Sentiment analysis"]
        },
        {
          name: "AI Project Management Platform",
          description: "AI-powered project management and collaboration",
          href: "/services/ai-project-management-platform",
          price: "From $399/month",
          features: ["Smart scheduling", "Resource optimization", "Risk prediction"]
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Intelligent marketing campaign management",
          href: "/services/ai-marketing-automation-platform",
          price: "From $299/month",
          features: ["Personalization", "A/B testing", "ROI optimization"]
        },
        {
          name: "AI Enterprise Automation Platform",
          description: "End-to-end business process automation",
          href: "/services/ai-enterprise-automation-platform",
          price: "From $999/month",
          features: ["Process optimization", "Workflow automation", "Integration hub"]
        }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      description: "Next-generation technology solutions for the future",
      services: [
        {
          name: "AI Autonomous Vehicle Platform",
          description: "Revolutionary autonomous transportation solutions",
          href: "/services/ai-autonomous-vehicle-platform",
          price: "From $2,999/month",
          features: ["Advanced perception", "AI decision making", "Fleet management"]
        },
        {
          name: "AI Quantum Financial Trading Platform",
          description: "Quantum AI-powered financial trading",
          href: "/services/ai-quantum-financial-trading-platform",
          price: "From $4,999/month",
          features: ["Quantum algorithms", "Real-time analysis", "Risk management"]
        },
        {
          name: "Quantum Edge Computing Solutions",
          description: "Quantum-enhanced edge computing infrastructure",
          href: "/services/quantum-edge-computing-solutions",
          price: "From $1,999/month",
          features: ["Quantum processing", "Edge optimization", "Low latency"]
        },
        {
          name: "AI Space Technology Platform",
          description: "Advanced space technology and satellite solutions",
          href: "/services/ai-space-technology-platform",
          price: "From $3,999/month",
          features: ["Satellite management", "Space analytics", "Orbital optimization"]
        }
      ]
    },
    {
      title: "IT & Infrastructure Services",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      description: "Robust IT infrastructure and cloud solutions",
      services: [
        {
          name: "Cloud & DevOps Solutions",
          description: "Comprehensive cloud infrastructure and DevOps",
          href: "/services/cloud-devops",
          price: "From $499/month",
          features: ["Multi-cloud management", "CI/CD pipelines", "Infrastructure as code"]
        },
        {
          name: "Cybersecurity Solutions",
          description: "Advanced threat protection and security",
          href: "/services/cybersecurity",
          price: "From $399/month",
          features: ["Threat detection", "Incident response", "Compliance management"]
        },
        {
          name: "IT Infrastructure Management",
          description: "End-to-end infrastructure management",
          href: "/services/it-infrastructure-management",
          price: "From $799/month",
          features: ["Monitoring", "Automation", "Performance optimization"]
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Enterprise blockchain and Web3 solutions",
          href: "/services/blockchain-enterprise-solutions",
          price: "From $1,299/month",
          features: ["Smart contracts", "DeFi platforms", "NFT solutions"]
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      description: "Specialized software solutions for modern businesses",
      services: [
        {
          name: "AI HR Management Platform",
          description: "Intelligent human resources management",
          href: "/services/ai-hr-management-platform",
          price: "From $199/month",
          features: ["Recruitment AI", "Performance analytics", "Employee engagement"]
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Intelligent supply chain management",
          href: "/services/ai-supply-chain-optimization-platform",
          price: "From $399/month",
          features: ["Demand forecasting", "Route optimization", "Inventory management"]
        },
        {
          name: "AI Financial Risk Management",
          description: "Advanced financial risk assessment",
          href: "/services/ai-financial-risk-management-platform",
          price: "From $599/month",
          features: ["Risk modeling", "Portfolio optimization", "Compliance monitoring"]
        },
        {
          name: "AI Legal Document Automation",
          description: "Automated legal document processing",
          href: "/services/ai-legal-document-automation-platform",
          price: "From $299/month",
          features: ["Document analysis", "Contract review", "Legal research"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Industry Leading",
      description: "Cutting-edge solutions that outperform competitors"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of successful implementations"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 technical support and consultation"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Comprehensive Services Overview 2027
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Suite of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                AI & Technology Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive range of AI, IT, and Micro SaaS services designed to 
              transform your business operations and drive innovation across all industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "60+", label: "AI Services", icon: Brain },
                { number: "500+", label: "Enterprise Clients", icon: Users },
                { number: "99.9%", label: "Uptime SLA", icon: Shield },
                { number: "24/7", label: "Global Support", icon: Globe }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zinc-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category to find 
              the perfect solution for your business needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-400">{service.price}</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={service.href}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of working with a leading technology provider 
              committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises that have already transformed their operations 
              with our cutting-edge AI and technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/request-quote"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Request Custom Quote
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-purple-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview;
