import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  Play,
  Activity,
  Target,
  AlertTriangle,
  LineChart,
  Stethoscope,
  Pill,
  Microscope,
  UserCheck,
  Calendar,
  TrendingUp,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Hospital,
  Ambulance,
  User,
  Clipboard,
  PenTool,
  Atom,
  Heart,
  BarChart3,
  PieChart,
  DollarSign,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck,
  Building2,
  Warehouse,
  Store,
  Bank,
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
  Waterfall
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-saas',
      name: 'AI Micro SAAS',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'financial',
      name: 'Financial Tech',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: Building,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const allServices = [
    {
      id: 'ai-project-management',
      title: 'AI Intelligent Project Management Platform',
      description: 'Transform project management with AI-driven insights, predictive analytics, and intelligent automation.',
      category: 'ai-saas',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      price: '$99 - $799/month',
      features: [
        'AI-powered task prioritization',
        'Predictive resource allocation',
        'Real-time risk assessment',
        'Automated progress tracking',
        'Intelligent communication hub',
        'Advanced analytics & insights'
      ],
      benefits: ['30% faster completion', '25% cost reduction', '99.9% uptime', '24/7 AI support'],
      href: '/services/ai-intelligent-project-management-platform',
      featured: true
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics Platform',
      description: 'Revolutionize financial operations with AI-driven insights, predictive analytics, and intelligent risk management.',
      category: 'financial',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      price: '$199 - $1,999/month',
      features: [
        'Real-time market intelligence',
        'Risk assessment & management',
        'Portfolio optimization',
        'Fraud detection & prevention',
        'Predictive financial modeling',
        'Regulatory compliance automation'
      ],
      benefits: ['40% faster decisions', '35% risk reduction', '99.99% accuracy', '24/7 monitoring'],
      href: '/services/ai-financial-analytics-platform',
      featured: true
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-driven insights, predictive analytics, and intelligent clinical decision support.',
      category: 'healthcare',
      icon: Heart,
      color: 'from-blue-500 to-green-500',
      price: '$299 - $2,499/month',
      features: [
        'Predictive patient analytics',
        'Clinical decision support',
        'Population health management',
        'Drug interaction analysis',
        'Medical image analysis',
        'Healthcare fraud detection'
      ],
      benefits: ['30% better outcomes', '40% faster diagnosis', '25% cost reduction', '99.9% HIPAA compliance'],
      href: '/services/ai-healthcare-analytics-platform',
      featured: true
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform for marketing, education, and creative professionals.',
      category: 'ai-saas',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      price: '$149 - $999/month',
      features: [
        'AI-powered content generation',
        'Multi-format support',
        'Brand voice consistency',
        'SEO optimization',
        'Content analytics',
        'Collaboration tools'
      ],
      benefits: ['10x faster creation', 'Improved engagement', 'SEO optimization', 'Brand consistency'],
      href: '/services/AI-Content-Creation-Studio-Pro',
      featured: true
    },
    {
      id: 'quantum-ai-trading',
      title: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform with AI-powered market analysis and predictive modeling.',
      category: 'quantum',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      price: '$499 - $2,999/month',
      features: [
        'Quantum computing algorithms',
        'AI market prediction',
        'Real-time trading signals',
        'Risk management',
        'Portfolio optimization',
        'Advanced analytics'
      ],
      benefits: ['Quantum advantage', 'Faster execution', 'Better predictions', 'Risk mitigation'],
      href: '/services/Quantum-AI-Trading-Platform',
      featured: true
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solutions for enterprise threat detection and prevention.',
      category: 'enterprise',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      price: '$399 - $1,999/month',
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated response',
        'Threat intelligence',
        'Compliance monitoring',
        '24/7 monitoring'
      ],
      benefits: ['99.9% threat detection', 'Real-time response', 'Reduced false positives', 'Compliance ready'],
      href: '/services/ai-cybersecurity',
      featured: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionary AI Services
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                That Transform Industries
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered solutions designed to revolutionize project management, 
              financial analytics, healthcare delivery, and more. Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  service.featured ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                      <span key={benefit} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={service.href}
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive suite of AI-powered solutions and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;