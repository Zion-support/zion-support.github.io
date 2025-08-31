import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Zap, Users, Globe, Cpu, Lock, 
  ShoppingCart, MessageCircle, DollarSign, Heart, 
  Target, Leaf, Factory, Clock, Phone, Mail, MapPin, 
  TrendingUp, Bot, Rocket, Atom, FileText, Server,
  Check, Search
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'healthcare', name: 'Healthcare Tech', icon: Heart, color: 'from-pink-500 to-rose-500' },
    { id: 'fintech', name: 'Financial Tech', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-teal-500 to-cyan-500' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-yellow-500 to-orange-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
    { id: 'sustainability', name: 'Sustainability', icon: Leaf, color: 'from-emerald-500 to-teal-500' }
  ];

  const services = [
    // AI & Machine Learning
    {
      id: 'ai-autonomous-research',
      name: 'AI Autonomous Research Assistant',
      category: 'ai-ml',
      description: 'Advanced AI-powered research automation platform',
      features: ['NLP research queries', 'Automated data collection', 'Intelligent analysis', 'Report generation'],
      benefits: ['Reduce research time by 80%', 'Improve accuracy', '24/7 operations'],
      pricing: '$299/month',
      marketPrice: '$500-800/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-autonomous-research-assistant'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      description: 'Next-generation AI-powered threat detection',
      features: ['AI threat detection', 'Behavioral analytics', 'Automated response', 'Predictive security'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 90%', '24/7 monitoring'],
      pricing: '$399/month',
      marketPrice: '$600-1200/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Analytics Platform',
      category: 'healthcare',
      description: 'Comprehensive healthcare AI with HIPAA compliance',
      features: ['Patient data analysis', 'Predictive modeling', 'Medical imaging', 'Clinical support'],
      benefits: ['Improve diagnostics by 25%', 'Reduce readmissions by 30%', 'Early detection'],
      pricing: '$299/month',
      marketPrice: '$400-800/month',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      link: '/services/ai-healthcare-platform'
    },
    {
      id: 'quantum-hybrid',
      name: 'AI Quantum Hybrid Platform',
      category: 'quantum',
      description: 'Revolutionary quantum-classical computing',
      features: ['Hybrid architecture', 'Quantum ML algorithms', 'Optimization', 'Simulation'],
      benefits: ['1000x faster problem solving', 'Breakthrough capabilities', 'Quantum advantage'],
      pricing: '$999/month',
      marketPrice: '$1500-3000/month',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      link: '/services/ai-quantum-hybrid-platform'
    },
    {
      id: 'supply-chain-ai',
      name: 'AI Supply Chain Optimization',
      category: 'ai-ml',
      description: 'Intelligent supply chain management',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk assessment'],
      benefits: ['Reduce costs by 20-30%', 'Improve delivery by 25%', 'Reduce disruptions'],
      pricing: '$249/month',
      marketPrice: '$300-600/month',
      icon: Factory,
      color: 'from-blue-500 to-cyan-500',
      link: '/services/ai-supply-chain-optimization'
    },
    {
      id: 'customer-analytics',
      name: 'AI Customer Experience Analytics',
      category: 'ai-ml',
      description: 'Advanced customer behavior analysis',
      features: ['Behavior tracking', 'Sentiment analysis', 'Churn prediction', 'Journey mapping'],
      benefits: ['Increase retention by 35%', 'Improve satisfaction by 40%', 'Personalization'],
      pricing: '$179/month',
      marketPrice: '$250-500/month',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-customer-experience-analytics'
    },
    {
      id: 'financial-trading',
      name: 'AI Financial Trading Platform',
      category: 'fintech',
      description: 'Sophisticated algorithmic trading',
      features: ['Market analysis', 'Algorithmic trading', 'Risk management', 'Portfolio optimization'],
      benefits: ['Improve performance by 15-25%', 'Reduce risks', '24/7 trading'],
      pricing: '$599/month',
      marketPrice: '$800-1500/month',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      link: '/services/ai-financial-trading-platform'
    },
    {
      id: 'project-management',
      name: 'AI Project Management Platform',
      category: 'ai-ml',
      description: 'Intelligent project optimization',
      features: ['AI planning', 'Resource optimization', 'Risk prediction', 'Team analytics'],
      benefits: ['Improve completion by 30%', 'Reduce delays by 40%', 'Resource optimization'],
      pricing: '$199/month',
      marketPrice: '$250-500/month',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      link: '/services/ai-project-management-platform'
    },
    {
      id: 'workflow-automation',
      name: 'AI Workflow Automation',
      category: 'ai-ml',
      description: 'Advanced process automation',
      features: ['Process discovery', 'Workflow optimization', 'Task automation', 'Performance analytics'],
      benefits: ['Reduce manual work by 60-80%', 'Improve efficiency by 40%', '24/7 operations'],
      pricing: '$149/month',
      marketPrice: '$200-400/month',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/ai-workflow-automation'
    },
    {
      id: 'content-optimizer',
      name: 'AI Content Optimizer Pro',
      category: 'ai-ml',
      description: 'Professional content optimization',
      features: ['Quality analysis', 'SEO optimization', 'Performance prediction', 'Brand consistency'],
      benefits: ['Improve engagement by 45%', 'Boost SEO by 30%', 'Reduce creation time'],
      pricing: '$79/month',
      marketPrice: '$100-200/month',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/ai-content-optimizer-pro'
    },
    {
      id: 'devops-automation',
      name: 'AI DevOps Automation',
      category: 'ai-ml',
      description: 'Intelligent deployment optimization',
      features: ['Deployment optimization', 'Infrastructure monitoring', 'Issue prediction', 'Performance optimization'],
      benefits: ['Reduce failures by 70%', 'Improve performance by 35%', 'Cost reduction'],
      pricing: '$199/month',
      marketPrice: '$300-600/month',
      icon: Server,
      color: 'from-teal-500 to-cyan-500',
      link: '/services/ai-devops-automation-platform'
    },
    {
      id: 'iot-edge',
      name: 'AI IoT Edge Computing',
      category: 'iot-edge',
      description: 'Advanced edge AI processing',
      features: ['Edge AI processing', 'Real-time analysis', 'Device management', 'Predictive maintenance'],
      benefits: ['Reduce latency by 90%', 'Lower bandwidth costs', 'Offline processing'],
      pricing: '$279/month',
      marketPrice: '$400-800/month',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/ai-iot-edge-computing-platform'
    },
    {
      id: 'blockchain-enterprise',
      name: 'Blockchain Enterprise Solutions',
      category: 'blockchain',
      description: 'Enterprise-grade blockchain',
      features: ['Enterprise infrastructure', 'Smart contracts', 'DApp development', 'Cross-chain solutions'],
      benefits: ['Reduce costs by 40-60%', 'Improve transparency', 'Secure records'],
      pricing: '$349/month',
      marketPrice: '$500-1000/month',
      icon: Lock,
      color: 'from-yellow-500 to-orange-500',
      link: '/services/blockchain-enterprise-solutions'
    },
    {
      id: 'green-it',
      name: 'Green IT Solutions',
      category: 'sustainability',
      description: 'Sustainable technology solutions',
      features: ['Energy optimization', 'Carbon monitoring', 'Sustainable infrastructure', 'Compliance'],
      benefits: ['Reduce energy costs by 25-40%', 'Lower carbon footprint', 'Sustainability ratings'],
      pricing: '$199/month',
      marketPrice: '$250-500/month',
      icon: Leaf,
      color: 'from-emerald-500 to-teal-500',
      link: '/services/green-it-solutions'
    },
    {
      id: 'micro-crm',
      name: 'Micro CRM Platform',
      category: 'micro-saas',
      description: 'Lightweight CRM for small businesses',
      features: ['Contact management', 'Sales tracking', 'Email integration', 'Basic analytics'],
      benefits: ['Reduce acquisition costs by 20%', 'Improve retention by 25%', 'Affordable solution'],
      pricing: '$29/month',
      marketPrice: '$50-100/month',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      link: '/services/micro-crm'
    },
    {
      id: 'employee-scheduling',
      name: 'Employee Scheduling SaaS',
      category: 'micro-saas',
      description: 'Intelligent workforce management',
      features: ['AI scheduling', 'Availability tracking', 'Automated algorithms', 'Mobile app'],
      benefits: ['Reduce conflicts by 80%', 'Improve satisfaction by 30%', 'Reduce overhead'],
      pricing: '$39/month',
      marketPrice: '$60-120/month',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      link: '/services/employee-scheduling-saas'
    },
    {
      id: 'returns-management',
      name: 'Returns Management SaaS',
      category: 'micro-saas',
      description: 'E-commerce returns platform',
      features: ['Automated processing', 'Reason analysis', 'Self-service portal', 'Integration'],
      benefits: ['Reduce processing time by 60%', 'Improve satisfaction by 35%', 'Reduce fraud'],
      pricing: '$49/month',
      marketPrice: '$80-150/month',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      link: '/services/returns-management-saas'
    },
    {
      id: 'mobile-survey',
      name: 'Mobile Survey Tool',
      category: 'micro-saas',
      description: 'Mobile-first feedback platform',
      features: ['Mobile optimization', 'Multi-channel distribution', 'Real-time collection', 'Advanced analytics'],
      benefits: ['Increase response rates by 40%', 'Improve data quality', 'Real-time feedback'],
      pricing: '$19/month',
      marketPrice: '$30-60/month',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      link: '/services/mobile-survey'
    },
    {
      id: 'ai-email-responder',
      name: 'AI Auto Email Responder',
      category: 'ai-ml',
      description: 'Intelligent email automation',
      features: ['AI response generation', 'Personalized templates', 'Email categorization', 'Smart routing'],
      benefits: ['Reduce response time by 80%', 'Improve quality', '24/7 responsiveness'],
      pricing: '$79/month',
      marketPrice: '$100-200/month',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-500',
      link: '/services/ai-auto-email-responder'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Comprehensive Services
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              2025 Showcase
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Discover our complete portfolio of innovative AI, IT, and Micro SaaS solutions designed to transform your business and drive growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-6 pb-16">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 group"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Our Price:</span>
                    <span className="text-xl font-bold text-cyan-400">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Market Price:</span>
                    <span className="text-sm text-gray-300">{service.marketPrice}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our comprehensive services are designed to drive growth, improve efficiency, and create competitive advantages. 
              Let's discuss how we can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Start Your Journey
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-2">Contact Information</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
