import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Server, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Target, 
  TrendingUp, 
  Atom, 
  Network, 
  Eye, 
  PenTool, 
  Heart, 
  Building, 
  Truck, 
  Lock, 
  Smartphone, 
  Mail, 
  Video, 
  Satellite, 
  Leaf, 
  Code,
  Zap, 
  Star, 
  Rocket, 
  Globe, 
  Cpu, 
  ArrowRight, 
  FileText,
  Workflow,
  CheckCircle,
  Phone,
  MapPin,
  Sparkles,
  Lightbulb,
  Gauge,
  Palette,
  Database,
  Wifi,
  TestTube,
  Microscope,
  Flask,
  Gamepad2,
  Coins,
  Activity,
  PieChart,
  LineChart,
  ScatterChart
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions',
      color: 'from-blue-500 to-indigo-500',
      gradient: 'from-blue-900/50 to-indigo-900/50',
      services: [
        { 
          name: 'AI Quantum Hybrid Platform', 
          href: '/services/ai-quantum-hybrid-platform', 
          icon: Atom, 
          description: 'Quantum-AI integration for unprecedented computing power',
          price: '$15,000/month',
          features: ['Quantum-classical hybrid computing', 'AI-quantum neural networks', 'Quantum-secure AI operations']
        },
        { 
          name: 'AI Autonomous Research Assistant', 
          href: '/services/ai-autonomous-research-assistant', 
          icon: Brain, 
          description: 'Self-directed AI research across all domains',
          price: '$25,000/month',
          features: ['Autonomous research discovery', 'Intelligent literature analysis', 'Automated experiment design']
        },
        { 
          name: 'AI Autonomous Threat Intelligence', 
          href: '/services/ai-autonomous-threat-intelligence', 
          icon: Shield, 
          description: 'AI-powered cybersecurity threat detection and response',
          price: '$25,000/month',
          features: ['Real-time threat detection', 'Autonomous response', 'Predictive intelligence']
        },
        { 
          name: 'AI Business Intelligence', 
          href: '/services/ai-business-intelligence', 
          icon: BarChart3, 
          description: 'Advanced analytics & ML insights',
          price: '$18,000/month',
          features: ['Predictive analytics', 'Real-time insights', 'Automated reporting']
        },
        { 
          name: 'AI Compliance Assistant', 
          href: '/services/ai-compliance-assistant', 
          icon: Shield, 
          description: 'Automated regulatory compliance',
          price: '$20,000/month',
          features: ['Regulatory monitoring', 'Automated compliance', 'Risk assessment']
        },
        { 
          name: 'AI Sales Copilot', 
          href: '/services/ai-sales-copilot', 
          icon: Users, 
          description: 'Intelligent sales optimization',
          price: '$22,000/month',
          features: ['Lead scoring', 'Sales forecasting', 'Customer insights']
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-cyan-500 to-blue-500',
      gradient: 'from-cyan-900/50 to-blue-900/50',
      services: [
        { 
          name: 'Cloud DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'Infrastructure automation & scaling',
          price: '$15,000/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Auto-scaling']
        },
        { 
          name: 'IT Infrastructure', 
          href: '/services/it-infrastructure', 
          icon: Server, 
          description: 'Enterprise infrastructure solutions',
          price: '$20,000/month',
          features: ['Network design', 'Server management', 'Storage solutions']
        },
        { 
          name: 'FinOps Advisor', 
          href: '/services/finops-advisor', 
          icon: DollarSign, 
          description: 'Cloud cost optimization',
          price: '$12,000/month',
          features: ['Cost analysis', 'Optimization recommendations', 'Budget management']
        },
        { 
          name: 'Cloud FinOps Optimizer', 
          href: '/services/cloud-finops-optimizer', 
          icon: BarChart3, 
          description: 'Financial operations automation',
          price: '$18,000/month',
          features: ['Automated cost tracking', 'Resource optimization', 'ROI analysis']
        }
      ]
    },
    {
      title: 'Cybersecurity & Privacy',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-orange-500',
      gradient: 'from-red-900/50 to-orange-900/50',
      services: [
        { 
          name: 'Security Headers & CSP', 
          href: '/services/security-headers-csp', 
          icon: Lock, 
          description: 'Web security hardening',
          price: '$8,000/month',
          features: ['Security headers', 'Content Security Policy', 'Vulnerability scanning']
        },
        { 
          name: 'DSR Privacy Portal', 
          href: '/services/dsr-portal', 
          icon: Shield, 
          description: 'GDPR/CCPA compliance',
          price: '$15,000/month',
          features: ['Data subject rights', 'Privacy management', 'Compliance reporting']
        },
        { 
          name: 'Zero Trust Network Access', 
          href: '/services/zero-trust-network-access', 
          icon: Lock, 
          description: 'Modern security architecture',
          price: '$25,000/month',
          features: ['Identity verification', 'Access control', 'Network segmentation']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      description: 'Niche software solutions for specific business needs',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-900/50 to-pink-900/50',
      services: [
        { 
          name: 'Micro CRM', 
          href: '/services/micro-crm', 
          icon: Users, 
          description: 'Customer relationship management',
          price: '$5,000/month',
          features: ['Contact management', 'Sales tracking', 'Customer insights']
        },
        { 
          name: 'Helpdesk Platform', 
          href: '/services/helpdesk', 
          icon: MessageCircle, 
          description: 'Customer support system',
          price: '$8,000/month',
          features: ['Ticket management', 'Knowledge base', 'Customer portal']
        },
        { 
          name: 'Website Analytics', 
          href: '/services/website-analytics', 
          icon: BarChart3, 
          description: 'Performance tracking & insights',
          price: '$6,000/month',
          features: ['Real-time analytics', 'Performance monitoring', 'User behavior']
        },
        { 
          name: 'IT Helpdesk', 
          href: '/services/it-helpdesk', 
          icon: HelpCircle, 
          description: 'IT support management',
          price: '$10,000/month',
          features: ['Issue tracking', 'Asset management', 'Knowledge base']
        },
        { 
          name: 'Affiliate Tracking', 
          href: '/services/affiliate-tracking', 
          icon: TrendingUp, 
          description: 'Affiliate program management',
          price: '$7,000/month',
          features: ['Commission tracking', 'Performance analytics', 'Payout management']
        },
        { 
          name: 'Mobile Survey', 
          href: '/services/mobile-survey', 
          icon: Smartphone, 
          description: 'Mobile survey solutions',
          price: '$4,000/month',
          features: ['Survey creation', 'Response collection', 'Data analysis']
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Next-generation technology solutions',
      color: 'from-indigo-500 to-purple-500',
      gradient: 'from-indigo-900/50 to-purple-900/50',
      services: [
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Atom, 
          description: 'Next-gen computational power',
          price: '$50,000/month',
          features: ['Quantum algorithms', 'Quantum simulation', 'Quantum optimization']
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/services/iot-edge-computing', 
          icon: Network, 
          description: 'Smart device networks',
          price: '$30,000/month',
          features: ['Edge processing', 'Device management', 'Data analytics']
        },
        { 
          name: 'Space Technology', 
          href: '/space-tech', 
          icon: Satellite, 
          description: 'Space-based solutions',
          price: '$100,000/month',
          features: ['Satellite communications', 'Space data', 'Orbital solutions']
        },
        { 
          name: 'Digital Twin', 
          href: '/services/digital-twin', 
          icon: Eye, 
          description: 'Virtual system replicas',
          price: '$35,000/month',
          features: ['3D modeling', 'Real-time monitoring', 'Predictive maintenance']
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Quantum Hybrid Platform',
      description: 'Revolutionary quantum-AI integration for unprecedented computational power',
      icon: Atom,
      href: '/services/ai-quantum-hybrid-platform',
      color: 'from-purple-500 to-indigo-500',
      price: '$15,000/month',
      features: ['1000x faster calculations', 'Quantum-AI neural networks', 'Post-quantum security']
    },
    {
      name: 'AI Autonomous Research Assistant',
      description: 'Self-directed AI research across all scientific domains',
      icon: Brain,
      href: '/services/ai-autonomous-research-assistant',
      color: 'from-blue-500 to-indigo-500',
      price: '$25,000/month',
      features: ['24/7 research operation', 'Cross-domain synthesis', 'Automated experiments']
    },
    {
      name: 'AI Autonomous Threat Intelligence',
      description: 'AI-powered cybersecurity with autonomous threat response',
      icon: Shield,
      href: '/services/ai-autonomous-threat-intelligence',
      color: 'from-red-500 to-orange-500',
      price: '$25,000/month',
      features: ['Real-time detection', 'Autonomous response', 'Predictive defense']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.1)_50%,transparent_70%)] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                <Rocket className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              2025 Comprehensive Services Showcase
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of technology with our revolutionary AI, quantum computing, 
              cybersecurity, and micro SaaS solutions. Transform your business with cutting-edge innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Explore All Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative and cutting-edge solutions that are transforming industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20 hover:border-blue-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-full mr-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-blue-400 font-semibold text-2xl mb-6">
                  {service.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across all technology domains
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/20"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl mr-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                    <p className="text-xl text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-xl p-6 border border-slate-500/20 hover:border-blue-400/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg mr-3`}>
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold">{service.name}</h4>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="text-blue-400 font-semibold text-lg mb-4">
                        {service.price}
                      </div>

                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-200 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the technology revolution with our comprehensive suite of innovative services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
