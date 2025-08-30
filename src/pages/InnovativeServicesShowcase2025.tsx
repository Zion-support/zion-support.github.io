import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Atom, 
  Heart, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Settings,
  Lock,
  Globe,
  Cloud,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Handshake,
  Code,
  Server,
  Network,
  Smartphone,
  Monitor,
  HardDrive,
  FileText,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Cpu,
  Database,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Eye,
  Palette,
  Building2,
  FileText as FileTextIcon,
  HelpCircle,
  BarChart,
  Users2
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const innovativeServices = [
    {
      name: "AI Enterprise Automation Hub",
      description: "Transform business operations with intelligent automation and AI-powered workflows",
      icon: Brain,
      href: "/services/ai-enterprise-automation-hub",
      color: "from-purple-600 to-pink-600",
      features: [
        "Intelligent Process Automation",
        "Multi-Agent Coordination", 
        "Predictive Analytics Engine",
        "Enterprise Integration Hub"
      ],
      pricing: "Starting at $2,999/month",
      benefits: [
        "Reduce manual tasks by 80%",
        "24/7 automated operations",
        "Process optimization insights"
      ]
    },
    {
      name: "AI Cybersecurity Intelligence Platform",
      description: "Next-generation AI-powered cybersecurity with real-time threat detection and response",
      icon: Shield,
      href: "/services/ai-cybersecurity-intelligence-platform",
      color: "from-red-600 to-orange-600",
      features: [
        "AI-Powered Threat Detection",
        "Intelligent Incident Response",
        "Predictive Security Analytics",
        "Zero Trust Architecture"
      ],
      pricing: "Starting at $3,499/month",
      benefits: [
        "99.9% threat detection accuracy",
        "Response time under 30 seconds",
        "Zero-day attack prevention"
      ]
    },
    {
      name: "Quantum AI Financial Trading Platform",
      description: "Revolutionary quantum computing-powered trading with AI market analysis",
      icon: Atom,
      href: "/services/quantum-ai-financial-trading-platform",
      color: "from-green-600 to-emerald-600",
      features: [
        "Quantum Computing Algorithms",
        "AI-Powered Market Analysis",
        "High-Frequency Trading",
        "Risk Management System"
      ],
      pricing: "Starting at $4,999/month",
      benefits: [
        "Sub-millisecond execution",
        "45% risk reduction",
        "32% ROI improvement"
      ]
    },
    {
      name: "AI Healthcare Analytics Platform",
      description: "Predictive diagnostics and care optimization powered by advanced AI",
      icon: Heart,
      href: "/services/ai-healthcare-analytics",
      color: "from-blue-600 to-cyan-600",
      features: [
        "Predictive Diagnostics",
        "Care Optimization",
        "Patient Risk Assessment",
        "Treatment Recommendations"
      ],
      pricing: "Starting at $5,999/month",
      benefits: [
        "Early disease detection",
        "Personalized treatment plans",
        "Reduced healthcare costs"
      ]
    },
    {
      name: "AI Business Intelligence Suite",
      description: "Comprehensive business intelligence powered by artificial intelligence",
      icon: BarChart3,
      href: "/services/ai-business-intelligence",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Real-time Analytics",
        "Predictive Modeling",
        "Data Visualization",
        "Automated Reporting"
      ],
      pricing: "Starting at $2,499/month",
      benefits: [
        "Data-driven decisions",
        "Real-time insights",
        "Automated reporting"
      ]
    },
    {
      name: "AI Customer Support Automation",
      description: "Intelligent customer support with AI-powered automation and personalization",
      icon: MessageCircle,
      href: "/services/ai-customer-support-automation",
      color: "from-teal-600 to-green-600",
      features: [
        "AI Chatbots",
        "Sentiment Analysis",
        "Automated Ticket Routing",
        "Personalized Responses"
      ],
      pricing: "Starting at $1,999/month",
      benefits: [
        "24/7 customer support",
        "Faster response times",
        "Improved customer satisfaction"
      ]
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      services: [
        "AI Enterprise Automation Hub",
        "AI Business Intelligence Suite",
        "AI Customer Support Automation",
        "AI Healthcare Analytics Platform"
      ]
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      services: [
        "AI Cybersecurity Intelligence Platform",
        "Zero Trust Network Architecture",
        "Incident Response Platform",
        "SOC2 Compliance Tracker"
      ]
    },
    {
      name: "Quantum Computing",
      icon: Atom,
      color: "from-green-600 to-emerald-600",
      services: [
        "Quantum AI Financial Trading Platform",
        "Quantum Computing Solutions",
        "Quantum Neural Network Platform",
        "Quantum AI Platform"
      ]
    },
    {
      name: "Enterprise Solutions",
      icon: Building2,
      color: "from-blue-600 to-cyan-600",
      services: [
        "Digital Transformation",
        "Cloud DevOps",
        "IT Infrastructure",
        "Blockchain Solutions"
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: "Healthcare",
      description: "AI-powered diagnostics, patient care optimization, and healthcare analytics",
      icon: Heart,
      services: ["AI Healthcare Analytics", "Predictive Diagnostics", "Care Optimization"]
    },
    {
      industry: "Financial Services",
      description: "Quantum AI trading, risk management, and financial compliance",
      icon: DollarSign,
      services: ["Quantum AI Trading", "AI Financial Compliance", "Risk Management"]
    },
    {
      industry: "Manufacturing",
      description: "Smart manufacturing, predictive maintenance, and supply chain optimization",
      icon: Cpu,
      services: ["AI Supply Chain", "Predictive Maintenance", "Smart Manufacturing"]
    },
    {
      industry: "Retail",
      description: "Customer experience optimization, inventory management, and analytics",
      icon: ShoppingCart,
      services: ["Customer Analytics", "Inventory Management", "Personalization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Innovative Services
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge AI, cybersecurity, quantum computing, and enterprise solutions. 
              Transform your business with next-generation technology designed for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl"
        />
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our most advanced and in-demand services that are transforming industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-zion-cyan font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-zion-slate-light text-sm">
                        <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-zion-cyan font-semibold text-lg">{service.pricing}</p>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by technology and industry focus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                      <ArrowRight className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions designed to address the unique challenges and opportunities in your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{solution.industry}</h3>
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {solution.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span>{service}</span>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations already using our innovative services to gain competitive advantages 
              and drive digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
              <p className="text-zion-cyan font-semibold">+1 302 464 0950</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
              <p className="text-zion-cyan font-semibold">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Visit Us</h3>
              <p className="text-zion-cyan font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
