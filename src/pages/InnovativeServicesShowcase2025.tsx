import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
  Scale,
  TreePine,
  Box,
  Eye,
  Target,
  BarChart,
  Activity,
  MessageSquare,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  ShieldCheck as ShieldCheckIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  Cloud as CloudIcon2,
  Rocket as RocketIcon,
  Code as CodeIcon,
  Chip as ChipIcon,
  Wifi as WifiIcon,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Activity as ActivityIcon,
  MessageCircle as MessageCircleIcon,
  BarChart as BarChartIcon2,
  Users2 as Users2Icon,
  Settings as SettingsIcon2,
  Palette as PaletteIcon,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const innovativeServices = [
    {
      name: 'AI Ethical Compliance Monitor',
      description: 'Ensure AI systems operate ethically and comply with global regulations',
      icon: Scale,
      href: '/services/ai-ethical-compliance-monitor',
      color: 'from-purple-600 to-pink-600',
      features: ['Bias detection', 'Regulatory compliance', 'Explainable AI', 'Stakeholder management'],
      pricing: 'Starting at $299/month',
      category: 'AI Ethics & Governance'
    },
    {
      name: 'AI Climate Intelligence Platform',
      description: 'Monitor and predict climate changes using AI and satellite data',
      icon: Satellite,
      href: '/services/ai-climate-intelligence-platform',
      color: 'from-green-600 to-cyan-600',
      features: ['Satellite data integration', 'Climate modeling', 'Risk assessment', 'Sustainability analytics'],
      pricing: 'Starting at $399/month',
      category: 'Climate & Sustainability'
    },
    {
      name: 'AI Digital Twin Platform',
      description: 'Create virtual replicas of physical assets for optimization',
      icon: Box,
      href: '/services/ai-digital-twin-platform',
      color: 'from-blue-600 to-indigo-600',
      features: ['3D modeling', 'IoT integration', 'Predictive analytics', 'Performance simulation'],
      pricing: 'Starting at $599/month',
      category: 'Digital Twin & IoT'
    },
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination for enterprise-scale operations',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-indigo-600 to-purple-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Intelligent orchestration'],
      pricing: 'Starting at $1,299/month',
      category: 'Enterprise AI'
    },
    {
      name: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered threat detection and response',
      icon: Shield,
      href: '/services/ai-cybersecurity-suite',
      color: 'from-red-600 to-orange-600',
      features: ['Threat detection', 'Real-time response', 'Compliance automation', 'Zero-trust architecture'],
      pricing: 'Starting at $899/month',
      category: 'Cybersecurity'
    },
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing solutions',
      icon: Atom,
      href: '/services/quantum-ai-platform',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum algorithms', 'Optimization', 'Research support', 'Hybrid computing'],
      pricing: 'Starting at $2,499/month',
      category: 'Quantum Computing'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI Ethics & Governance',
      icon: Scale,
      color: 'from-purple-600 to-pink-600',
      description: 'Ensure responsible and ethical AI deployment',
      services: ['AI Ethical Compliance Monitor', 'AI Governance Framework', 'Bias Detection Tools']
    },
    {
      name: 'Climate & Sustainability',
      icon: Leaf,
      color: 'from-green-600 to-cyan-600',
      description: 'AI-powered environmental monitoring and sustainability',
      services: ['AI Climate Intelligence Platform', 'Sustainability Analytics', 'ESG Reporting Tools']
    },
    {
      name: 'Digital Twin & IoT',
      icon: Box,
      color: 'from-blue-600 to-indigo-600',
      description: 'Virtual replicas and IoT integration solutions',
      services: ['AI Digital Twin Platform', 'IoT Edge Computing', 'Smart City Solutions']
    },
    {
      name: 'Enterprise AI',
      icon: Building,
      color: 'from-indigo-600 to-purple-600',
      description: 'Large-scale AI solutions for enterprise operations',
      services: ['AI Enterprise Orchestrator', 'Business Intelligence', 'Process Automation']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Ethics Officer, TechCorp',
      content: 'The AI Ethical Compliance Monitor has transformed how we approach AI governance. It provides the transparency and accountability our stakeholders demand.',
      rating: 5,
      service: 'AI Ethical Compliance Monitor'
    },
    {
      name: 'James Chen',
      role: 'Operations Director, AgriSolutions',
      content: 'The AI Climate Intelligence Platform has increased our crop yields by 25% through better climate-informed decision making. The predictive capabilities are game-changing.',
      rating: 5,
      service: 'AI Climate Intelligence Platform'
    },
    {
      name: 'Dr. Robert Chen',
      role: 'CTO, SmartManufacturing Inc',
      content: 'The AI Digital Twin Platform has transformed our manufacturing operations. We can now predict equipment failures before they happen and optimize production in real-time.',
      rating: 5,
      service: 'AI Digital Twin Platform'
    }
  ];

  const stats = [
    { label: 'AI Services', value: '50+', icon: Brain },
    { label: 'Enterprise Clients', value: '200+', icon: Building },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Star }
  ];

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Innovation 2025
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Innovative Services
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Showcase 2025</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              >
                Discover our cutting-edge AI, IT, and Micro SAAS solutions that are transforming industries 
                and driving innovation in 2025. From ethical AI governance to climate intelligence and digital twins.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Featured Innovative Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-zion-slate-light max-w-3xl mx-auto"
              >
                Our most advanced and innovative solutions that are reshaping industries in 2025
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <p className="text-zion-cyan font-semibold">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Service Categories
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-zion-slate-light max-w-3xl mx-auto"
              >
                Explore our comprehensive range of innovative services organized by category
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Client Success Stories
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-zion-slate-light max-w-3xl mx-auto"
              >
                See how our innovative services are transforming businesses across industries
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-3">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                  </div>
                  <div className="text-xs text-zion-slate-light bg-zion-purple/20 px-2 py-1 rounded">
                    {testimonial.service}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Join leading organizations in leveraging cutting-edge AI and technology solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div className="text-left">
                    <p className="text-zion-slate-light text-sm">Phone</p>
                    <p className="text-white font-medium">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div className="text-left">
                    <p className="text-zion-slate-light text-sm">Email</p>
                    <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div className="text-left">
                    <p className="text-zion-slate-light text-sm">Address</p>
                    <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
