import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Building,
  Heart,
  TrendingUp,
  Factory,
  ShoppingCart,
  Globe,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Users,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Code,
  Server,
  Eye,
  Workflow,
  PenTool,
  MessageCircle,
  Atom,
  Leaf,
  Truck,
  Bank,
  Hospital,
  GraduationCap,
  ShieldCheck,
  Gauge,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Building2,
  Warehouse,
  Store,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Clock
} from 'lucide-react';

export default function Solutions() {
  const industrySolutions = [
    {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Scalable technology solutions for large organizations with complex requirements and global operations.',
      features: ['Digital Transformation', 'Cloud Migration', 'Enterprise Security', 'Scalable Infrastructure'],
      link: '/solutions/enterprise',
      color: 'from-blue-500 to-indigo-500',
      stats: { clients: '200+', projects: '500+', satisfaction: '99%' }
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'AI-powered healthcare analytics, diagnostics, and patient care optimization for modern healthcare providers.',
      features: ['AI Diagnostics', 'Patient Analytics', 'Healthcare Security', 'Compliance Management'],
      link: '/solutions/healthcare',
      color: 'from-red-500 to-pink-500',
      stats: { clients: '50+', projects: '150+', satisfaction: '98%' }
    },
    {
      icon: TrendingUp,
      title: 'Financial Solutions',
      description: 'AI-driven financial analytics, risk management, and trading optimization for financial institutions.',
      features: ['Risk Analytics', 'Trading Optimization', 'Fraud Detection', 'Regulatory Compliance'],
      link: '/solutions/financial',
      color: 'from-green-500 to-emerald-500',
      stats: { clients: '75+', projects: '200+', satisfaction: '99%' }
    },
    {
      icon: Factory,
      title: 'Manufacturing Solutions',
      description: 'Smart manufacturing with AI-powered predictive maintenance, quality control, and supply chain optimization.',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain AI', 'IoT Integration'],
      link: '/solutions/manufacturing',
      color: 'from-orange-500 to-red-500',
      stats: { clients: '100+', projects: '300+', satisfaction: '97%' }
    },
    {
      icon: ShoppingCart,
      title: 'Retail Solutions',
      description: 'AI-enhanced customer experience, inventory management, and sales optimization for modern retailers.',
      features: ['Customer Analytics', 'Inventory Management', 'Sales Optimization', 'Omnichannel Integration'],
      link: '/solutions/retail',
      color: 'from-purple-500 to-pink-500',
      stats: { clients: '150+', projects: '400+', satisfaction: '96%' }
    },
    {
      icon: Globe,
      title: 'Government Solutions',
      description: 'Secure AI solutions for public sector efficiency, citizen services, and government modernization.',
      features: ['Citizen Services', 'Security & Compliance', 'Process Automation', 'Data Analytics'],
      link: '/solutions/government',
      color: 'from-indigo-500 to-purple-500',
      stats: { clients: '25+', projects: '100+', satisfaction: '95%' }
    }
  ];

  const technologySolutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, MLOps, and intelligent automation that transform business operations.',
      link: '/ai-services',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automation, and modern development practices for rapid deployment.',
      link: '/services/cloud-devops',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions with AI-powered threat detection and compliance management.',
      link: '/services/cybersecurity',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services that modernize and optimize your business processes.',
      link: '/services/digital-transformation',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex optimization and scientific research problems.',
      link: '/services/quantum-computing',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Leaf,
      title: 'Sustainable Technology',
      description: 'Green technology solutions that reduce environmental impact while improving efficiency.',
      link: '/services/sustainable-technology',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Solutions Delivered', icon: Target },
    { number: '25+', label: 'Industries Served', icon: Building },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover industry-specific technology solutions designed to transform your business. From healthcare to manufacturing, we deliver tailored solutions that drive growth and innovation."
        keywords="business solutions, industry solutions, healthcare solutions, financial solutions, manufacturing solutions, retail solutions, government solutions, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Solutions That <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Transform</span> Your Industry
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tailored technology solutions designed specifically for your industry. We understand your unique challenges 
              and deliver solutions that drive real business value and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed specifically for your industry's unique challenges and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Stats */}
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">Clients</div>
                        <div className="text-2xl font-bold text-white">{solution.stats.clients}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Explore Solution</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-gray-400 mb-1">Satisfaction</div>
                        <div className="text-lg font-bold text-green-400">{solution.stats.satisfaction}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Core technology solutions that power our industry-specific offerings and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.link}>
                  <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our industry-specific solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 inline-flex items-center group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

