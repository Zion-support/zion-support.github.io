import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Target,
  Handshake,
  Eye,
  Workflow,
  Gamepad2,
  Coins,
  Activity,
  Palette,
  Users2,
  Settings as SettingsIcon,
  HardDrive,
  MessageSquare,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const heroStats = [
    { label: 'AI Solutions', value: '75+', icon: Brain },
    { label: 'Enterprise Clients', value: '500+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge AI solutions for business transformation',
      services: [
        { 
          name: 'AI Enterprise Orchestrator', 
          href: '/services/ai-enterprise-orchestrator',
          description: 'Multi-agent AI coordination & workflow automation',
          price: 'From $2,999/month',
          features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration']
        },
        { 
          name: 'AI Cybersecurity Suite', 
          href: '/services/ai-cybersecurity-suite',
          description: 'AI-powered threat detection and response',
          price: 'From $1,999/month',
          features: ['Threat detection', 'Real-time response', 'Compliance automation']
        },
        { 
          name: 'AI Healthcare Analytics', 
          href: '/services/ai-healthcare-analytics-platform',
          description: 'Predictive diagnostics and care optimization',
          price: 'From $3,499/month',
          features: ['Predictive analytics', 'Diagnostic support', 'Care optimization']
        },
        { 
          name: 'AI Supply Chain Optimization', 
          href: '/services/ai-supply-chain-optimization',
          description: 'Intelligent supply chain management and optimization',
          price: 'From $2,499/month',
          features: ['Demand forecasting', 'Inventory optimization', 'Route planning']
        },
        { 
          name: 'AI Carbon Footprint Tracker', 
          href: '/services/ai-carbon-footprint-tracker',
          description: 'AI-powered sustainability and carbon monitoring',
          price: 'From $299/month',
          features: ['Real-time monitoring', 'Predictive analytics', 'Compliance reporting']
        },
        { 
          name: 'AI Talent Acquisition Platform', 
          href: '/services/ai-talent-acquisition-platform',
          description: 'Revolutionary AI-powered recruitment solution',
          price: 'From $499/month',
          features: ['Candidate matching', 'Automated screening', 'Success analytics']
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security solutions for modern threats',
      services: [
        { 
          name: 'Zero Trust Network Architecture', 
          href: '/services/zero-trust-network-architecture',
          description: 'Comprehensive zero-trust security framework',
          price: 'From $4,999/month',
          features: ['Identity verification', 'Continuous monitoring', 'Threat prevention']
        },
        { 
          name: 'SOC2 Compliance Tracker', 
          href: '/services/soc2-compliance-tracker',
          description: 'Automated SOC2 compliance management',
          price: 'From $1,299/month',
          features: ['Compliance automation', 'Audit preparation', 'Risk assessment']
        },
        { 
          name: 'Smart Contract Risk Scanner', 
          href: '/services/smart-contract-risk-scanner',
          description: 'Blockchain security and risk assessment',
          price: 'From $899/month',
          features: ['Vulnerability detection', 'Security auditing', 'Compliance checking']
        }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-blue-600 to-cyan-600',
      description: 'Next-generation quantum solutions',
      services: [
        { 
          name: 'Quantum AI Hybrid Platform', 
          href: '/services/ai-quantum-hybrid-platform',
          description: 'Quantum-classical AI hybrid computing',
          price: 'From $5,999/month',
          features: ['Quantum algorithms', 'AI integration', 'Optimization solutions']
        },
        { 
          name: 'Quantum Computing Elite', 
          href: '/services/quantum-computing-elite',
          description: 'Premium quantum computing services',
          price: 'From $8,999/month',
          features: ['Custom quantum solutions', 'Research support', 'Expert consultation']
        }
      ]
    },
    {
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      description: 'Specialized software solutions for specific needs',
      services: [
        { 
          name: 'Micro CRM Platform', 
          href: '/services/micro-crm',
          description: 'Lightweight CRM for small businesses',
          price: 'From $99/month',
          features: ['Contact management', 'Sales tracking', 'Basic analytics']
        },
        { 
          name: 'AI Project Management', 
          href: '/services/ai-project-management-platform',
          description: 'Intelligent project planning and execution',
          price: 'From $399/month',
          features: ['AI planning', 'Resource optimization', 'Progress tracking']
        },
        { 
          name: 'LLM Content Studio', 
          href: '/services/llm-content-studio',
          description: 'AI-powered content creation and optimization',
          price: 'From $199/month',
          features: ['Content generation', 'SEO optimization', 'Brand voice consistency']
        }
      ]
    },
    {
      name: 'IT Infrastructure & DevOps',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Modern infrastructure and development solutions',
      services: [
        { 
          name: 'Cloud DevOps Platform', 
          href: '/services/cloud-devops',
          description: 'Comprehensive DevOps and cloud management',
          price: 'From $1,499/month',
          features: ['CI/CD automation', 'Cloud optimization', 'Monitoring tools']
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/services/iot-edge-computing-platform',
          description: 'Edge computing for IoT applications',
          price: 'From $2,199/month',
          features: ['Edge processing', 'Real-time analytics', 'Device management']
        },
        { 
          name: 'Uptime SLA Monitor', 
          href: '/services/uptime-sla-monitor',
          description: 'Service level agreement monitoring',
          price: 'From $299/month',
          features: ['Uptime tracking', 'SLA reporting', 'Alert management']
        }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      description: 'Specialized solutions for specific industries',
      services: [
        { 
          name: 'Healthcare Tech Platform', 
          href: '/services/healthcare-tech',
          description: 'Comprehensive healthcare technology solutions',
          price: 'From $4,999/month',
          features: ['Patient management', 'Clinical workflows', 'Compliance tools']
        },
        { 
          name: 'Financial Compliance Assistant', 
          href: '/services/ai-financial-compliance-assistant',
          description: 'AI-powered financial compliance automation',
          price: 'From $2,999/month',
          features: ['Regulatory compliance', 'Risk assessment', 'Audit automation']
        },
        { 
          name: 'Space Tech Solutions', 
          href: '/services/space-tech',
          description: 'Innovative space technology applications',
          price: 'From $9,999/month',
          features: ['Satellite management', 'Data processing', 'Mission planning']
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovation Showcase
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Showcase 2025
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover Zion Tech Group's complete portfolio of cutting-edge AI, IT, and Micro SAAS solutions. 
              From enterprise AI platforms to specialized micro-services, we deliver innovation at every scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105">
                Explore All Services
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Request Custom Quote
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of innovative solutions designed to transform businesses 
              across all industries and sizes
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-dark border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                        <span className="text-zion-cyan font-semibold text-sm">{service.price}</span>
                      </div>
                      
                      <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-zion-cyan font-medium text-sm mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-zion-slate-light text-xs">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center">
                        <Link
                          to={service.href}
                          className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium flex items-center group"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-sm font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                          Get Started
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white font-medium hover:text-zion-cyan transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-zion-cyan transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Address</p>
                    <p className="text-white font-medium">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-zion-slate-light text-sm">Website</p>
                    <a 
                      href={contactInfo.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-zion-cyan transition-colors flex items-center"
                    >
                      {contactInfo.website}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get Your Custom Solution
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                />
                
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors"
                />
                
                <textarea
                  placeholder="Tell us about your project needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-blue border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
