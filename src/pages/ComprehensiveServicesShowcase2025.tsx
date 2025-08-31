import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Lightbulb,
  Eye,
  Heart,
  Atom,
  Globe,
  Bot,
  PenTool,
  Cpu,
  Database,
  Network,
  Server,
  Cloud,
  Lock,
  Target,
  Clock,
  DollarSign,
  ChartBar,
  Activity,
  Gauge,
  Layers,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Globe as GlobeIcon,
  Bot as BotIcon,
  PenTool as PenToolIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Lock as LockIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      name: 'AI Quantum Healthcare Diagnostics',
      description: 'Revolutionary quantum-enhanced AI diagnostics with 95% accuracy and 60% faster diagnosis',
      href: '/services/ai-quantum-healthcare-diagnostics',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      category: 'Healthcare AI',
      price: 'From $299/month',
      features: ['Quantum AI Diagnostics', 'Real-time Monitoring', 'Predictive Prevention', 'HIPAA Compliant']
    },
    {
      name: 'AI Autonomous Business Operations',
      description: 'Self-managing business platform that operates 24/7 with 300% efficiency increase',
      href: '/services/ai-autonomous-business-operations-platform',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      category: 'Business Automation',
      price: 'From $199/month',
      features: ['Autonomous Operations', 'Intelligent Decision Making', 'Process Automation', 'Real-time Analytics']
    },
    {
      name: 'AI Smart City Platform',
      description: 'Intelligent urban infrastructure management reducing traffic by 40% and energy by 30%',
      href: '/services/ai-smart-city-platform',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      category: 'Smart Cities',
      price: 'From $2,999/month',
      features: ['Traffic Management', 'Energy Optimization', 'Environmental Monitoring', 'Public Safety AI']
    },
    {
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform for marketing, writing, and creative content',
      href: '/services/AI-Content-Creation-Studio-Pro',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      category: 'Content AI',
      price: 'From $99/month',
      features: ['AI Writing', 'Content Optimization', 'Multi-format Creation', 'SEO Integration']
    },
    {
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform with advanced financial analytics',
      href: '/services/Quantum-AI-Trading-Platform',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      category: 'Financial AI',
      price: 'From $499/month',
      features: ['Quantum Computing', 'AI Trading', 'Risk Management', 'Real-time Analytics']
    }
  ];

  const serviceCategories = [
    {
      name: 'Healthcare & Life Sciences',
      description: 'AI-powered healthcare solutions for diagnosis, treatment, and patient care',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      services: ['AI Quantum Healthcare Diagnostics', 'AI Healthcare Analytics', 'AI Medical Imaging']
    },
    {
      name: 'Business Operations',
      description: 'Intelligent automation and optimization for business processes',
      icon: Bot,
      color: 'from-blue-500 to-cyan-500',
      services: ['AI Autonomous Business Operations', 'AI Business Intelligence', 'AI Process Optimization']
    },
    {
      name: 'Smart Cities & Infrastructure',
      description: 'AI solutions for urban development and infrastructure management',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      services: ['AI Smart City Platform', 'AI Traffic Management', 'AI Energy Optimization']
    },
    {
      name: 'Content & Marketing',
      description: 'AI-powered content creation and marketing automation',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      services: ['AI Content Creation Studio Pro', 'AI Marketing Automation', 'AI SEO Optimization']
    },
    {
      name: 'Financial Technology',
      description: 'Advanced AI solutions for financial services and trading',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      services: ['Quantum AI Trading Platform', 'AI Financial Analytics', 'AI Risk Management']
    },
    {
      name: 'IT & Infrastructure',
      description: 'Enterprise-grade IT solutions and infrastructure management',
      icon: Server,
      color: 'from-indigo-500 to-blue-500',
      services: ['AI Cybersecurity', 'Cloud Infrastructure', 'AI DevOps', 'AI Network Management']
    }
  ];

  const benefits = [
    {
      title: 'Cutting-Edge Technology',
      description: 'Latest AI, quantum computing, and machine learning innovations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Proven Results',
      description: 'Measurable improvements in efficiency, accuracy, and cost reduction',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible platforms that grow with your business needs',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Expert Support',
      description: '24/7 technical support and dedicated account management',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive suite of AI-powered services including healthcare diagnostics, business automation, smart cities, and more. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, healthcare AI, business automation, smart cities, content creation, financial AI, IT services"
        canonicalUrl="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              2025 Comprehensive Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive AI Services
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete suite of revolutionary AI-powered services designed to transform 
              every aspect of your business, from healthcare and operations to smart cities and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most innovative and transformative AI services that are revolutionizing industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                      {service.category}
                    </span>
                    <div className="text-2xl font-bold text-white mt-2">{service.price}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a
                  href={service.href}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organized solutions across all major industries and business functions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.services.map((service) => (
                    <li key={service} className="text-gray-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/services"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Explore Category
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of working with a leading AI technology company.
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
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already leveraging our AI-powered solutions 
                to achieve unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-2">Contact Information</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
