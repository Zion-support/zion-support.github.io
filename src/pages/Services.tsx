import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  ShoppingCart, 
  Heart, 
  Atom, 
  Rocket, 
  Leaf, 
  Satellite,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  BarChart3,
  Server,
  Network,
  Code,
  Lock,
  Users,
  Target,
  TrendingUp,
  MessageCircle,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai', name: 'AI & Analytics', icon: Brain },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'saas', name: 'Micro SaaS', icon: ShoppingCart },
    { id: 'innovation', name: 'Innovation', icon: Rocket }
  ];

  const allServices = [
    // AI & Analytics Services
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with our AI-powered analytics platform.',
      category: 'ai',
      icon: Brain,
      price: '$2,500/mo',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      path: '/services/ai-business-intelligence',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics',
      description: 'Advanced healthcare analytics platform with AI-powered diagnostics and predictive insights.',
      category: 'ai',
      icon: Heart,
      price: '$3,500/mo',
      features: ['Medical AI', 'Predictive Diagnostics', 'HIPAA Compliance', 'Real-time Monitoring'],
      path: '/services/ai-healthcare-analytics-platform',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and cybersecurity protection for modern enterprises.',
      category: 'ai',
      icon: Shield,
      price: '$2,800/mo',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', '24/7 Monitoring'],
      path: '/services/ai-cybersecurity-threat-detection',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation and orchestration powered by artificial intelligence.',
      category: 'ai',
      icon: Brain,
      price: '$2,200/mo',
      features: ['Process Automation', 'Smart Routing', 'Performance Analytics', 'Integration Hub'],
      path: '/services/ai-workflow-orchestrator',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-content-marketing',
      title: 'AI Content Marketing',
      description: 'Automate content creation and marketing campaigns with AI-powered tools.',
      category: 'ai',
      icon: MessageCircle,
      price: '$1,800/mo',
      features: ['Content Generation', 'Campaign Automation', 'SEO Optimization', 'Performance Tracking'],
      path: '/services/ai-content-marketing-automation',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },

    // Infrastructure Services
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      category: 'infrastructure',
      icon: Cloud,
      price: '$1,800/mo',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Best Practices'],
      path: '/services/cloud-devops',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Comprehensive IT infrastructure solutions for enterprise environments.',
      category: 'infrastructure',
      icon: Server,
      price: '$2,200/mo',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      path: '/services/it-infrastructure',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics solutions for informed decision-making.',
      category: 'infrastructure',
      icon: BarChart3,
      price: '$1,900/mo',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Tools', 'Data Visualization'],
      path: '/services/data-analytics',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },

    // Security Services
    {
      id: 'zero-trust-architecture',
      title: 'Zero Trust Network Architecture',
      description: 'Implement modern zero-trust security principles for comprehensive network protection.',
      category: 'security',
      icon: Lock,
      price: '$3,200/mo',
      features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Prevention'],
      path: '/services/zero-trust-network-architecture',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },

    // Micro SaaS Services
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Custom SaaS applications designed to streamline operations and boost productivity.',
      category: 'saas',
      icon: ShoppingCart,
      price: '$1,500/mo',
      features: ['Custom Development', 'Scalable Architecture', 'User Management', 'Analytics Dashboard'],
      path: '/services/micro-saas',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'affiliate-marketing-tracker',
      title: 'Affiliate Marketing Tracker',
      description: 'Comprehensive affiliate marketing tracking and analytics platform.',
      category: 'saas',
      icon: TrendingUp,
      price: '$800/mo',
      features: ['Affiliate Tracking', 'Commission Management', 'Performance Analytics', 'Payment Processing'],
      path: '/services/affiliate-marketing-tracker',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'uptime-sla-monitor',
      title: 'Uptime SLA Monitor',
      description: 'Monitor service uptime and SLA compliance with real-time alerts.',
      category: 'saas',
      icon: Clock,
      price: '$600/mo',
      features: ['Uptime Monitoring', 'SLA Tracking', 'Alert System', 'Performance Reports'],
      path: '/services/uptime-sla-monitor',
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },

    // Innovation Services
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Quantum computing solutions for complex optimization and simulation problems.',
      category: 'innovation',
      icon: Atom,
      price: '$5,000/mo',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Simulation Tools', 'Research Support'],
      path: '/services/quantum-computing',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Platform',
      description: 'Create virtual replicas of your physical systems for simulation and optimization.',
      category: 'innovation',
      icon: Globe,
      price: '$3,200/mo',
      features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'IoT Integration'],
      path: '/services/digital-twin',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iot-edge',
      title: 'IoT Edge Computing',
      description: 'IoT solutions with edge computing capabilities for real-time processing.',
      category: 'innovation',
      icon: Cpu,
      price: '$2,800/mo',
      features: ['Edge Processing', 'Real-time Analytics', 'Device Management', 'Data Synchronization'],
      path: '/services/iot-edge',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      description: 'Innovative space technology solutions for aerospace and satellite applications.',
      category: 'innovation',
      icon: Satellite,
      price: '$4,500/mo',
      features: ['Satellite Systems', 'Aerospace Solutions', 'Navigation Systems', 'Communication Tech'],
      path: '/services/space-tech',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'green-it',
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions for environmentally conscious organizations.',
      category: 'innovation',
      icon: Leaf,
      price: '$2,100/mo',
      features: ['Energy Efficiency', 'Sustainable Practices', 'Carbon Footprint Reduction', 'Green Certifications'],
      path: '/services/green-it',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive technology solutions designed to transform your business. 
              From AI-powered analytics to infrastructure management, we have the expertise 
              to drive your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${service.color} rounded-xl`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.featured && (
                    <span className="inline-flex items-center gap-1 text-xs text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? We specialize in custom solutions 
              tailored to your specific business needs and requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}