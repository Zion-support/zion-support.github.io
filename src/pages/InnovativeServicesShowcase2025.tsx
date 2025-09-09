import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Search, 
  PenTool, 
  MessageCircle,
  Workflow,
  Bot,
  BarChart3,
  Cloud,
  Server,
  DollarSign,
  BarChart3 as BarChart3Icon,
  Lock,
  Eye,
  Atom,
  Network,
  Smartphone,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Settings,
  Rocket,
  Globe,
  Cpu,
  Database,
  Target,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2025() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3 },
    { id: 'emerging', name: 'Emerging Tech', icon: Atom }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Transform business operations with intelligent process automation',
      category: 'ai-ml',
      icon: Workflow,
      price: 'From $99/month',
      features: ['Process recognition', 'Visual designer', 'Smart triggers', 'Performance monitoring'],
      benefits: ['Reduce manual tasks by 80%', 'Improve efficiency by 60%', 'Cut costs by 40%'],
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      id: 'ai-virtual-assistant',
      name: 'AI Virtual Assistant',
      description: '24/7 intelligent customer support and business operations',
      category: 'ai-ml',
      icon: Bot,
      price: 'From $79/month',
      features: ['Natural language processing', 'Multi-channel support', '24/7 availability', 'Personalized interactions'],
      benefits: ['Reduce response time by 90%', 'Increase conversions by 40%', 'Save 30+ hours/week'],
      color: 'from-purple-500 to-pink-500',
      popular: false
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Transform data into actionable insights with machine learning',
      category: 'ai-ml',
      icon: BarChart3,
      price: 'From $149/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Data integration', 'Automated insights'],
      benefits: ['Improve decisions by 60%', 'Increase retention by 45%', 'Reduce risks by 70%'],
      color: 'from-emerald-500 to-teal-500',
      popular: false
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and machine learning insights',
      category: 'ai-ml',
      icon: Brain,
      price: 'From $299/month',
      features: ['Predictive modeling', 'Real-time analytics', 'Custom dashboards', 'AI insights'],
      benefits: ['Boost revenue by 25%', 'Improve efficiency by 40%', 'Faster decision making'],
      color: 'from-indigo-500 to-purple-500',
      popular: false
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      description: 'Automated regulatory compliance and monitoring',
      category: 'ai-ml',
      icon: Shield,
      price: 'From $199/month',
      features: ['Regulatory monitoring', 'Automated reporting', 'Risk assessment', 'Compliance tracking'],
      benefits: ['Reduce compliance costs by 50%', 'Eliminate manual errors', '24/7 monitoring'],
      color: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'Intelligent sales optimization and lead management',
      category: 'ai-ml',
      icon: Users,
      price: 'From $179/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automated follow-ups'],
      benefits: ['Increase sales by 35%', 'Improve conversion rates', 'Reduce sales cycle'],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      id: 'ai-seo',
      name: 'AI-Powered SEO',
      description: 'Machine learning SEO optimization and content strategy',
      category: 'ai-ml',
      icon: Search,
      price: 'From $129/month',
      features: ['Keyword research', 'Content optimization', 'Ranking analysis', 'Competitive insights'],
      benefits: ['Improve rankings by 40%', 'Increase organic traffic', 'Better ROI'],
      color: 'from-orange-500 to-red-500',
      popular: false
    },
    {
      id: 'interview-assessment',
      name: 'Interview Assessment AI',
      description: 'AI-powered candidate evaluation and recruitment',
      category: 'ai-ml',
      icon: Users,
      price: 'From $89/month',
      features: ['Skill assessment', 'Behavioral analysis', 'Cultural fit', 'Automated screening'],
      benefits: ['Reduce hiring time by 60%', 'Improve candidate quality', 'Save HR resources'],
      color: 'from-pink-500 to-rose-500',
      popular: false
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Automated content creation and marketing',
      category: 'ai-ml',
      icon: PenTool,
      price: 'From $99/month',
      features: ['Content creation', 'SEO optimization', 'Brand consistency', 'Multi-format support'],
      benefits: ['10x content production', 'Improve engagement', 'Reduce costs'],
      color: 'from-yellow-500 to-orange-500',
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Intelligent support automation and customer service',
      category: 'ai-ml',
      icon: MessageCircle,
      price: 'From $149/month',
      features: ['24/7 support', 'Multi-language', 'Ticket routing', 'Knowledge base'],
      benefits: ['Reduce support costs by 70%', 'Improve satisfaction', 'Faster resolution'],
      color: 'from-teal-500 to-cyan-500',
      popular: false
    },
    // Cloud & DevOps Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      description: 'Infrastructure automation and scaling solutions',
      category: 'cloud',
      icon: Cloud,
      price: 'From $399/month',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Auto-scaling', 'Monitoring'],
      benefits: ['Deploy 10x faster', 'Reduce downtime by 90%', 'Scale automatically'],
      color: 'from-sky-500 to-blue-500',
      popular: false
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      description: 'Enterprise infrastructure solutions and management',
      category: 'cloud',
      icon: Server,
      price: 'From $599/month',
      features: ['Network design', 'Server management', 'Backup solutions', '24/7 monitoring'],
      benefits: ['Improve reliability', 'Reduce costs', 'Better performance'],
      color: 'from-slate-500 to-gray-500',
      popular: false
    },
    // Cybersecurity Services
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Platform',
      description: 'Advanced security solutions and threat protection',
      category: 'security',
      icon: Shield,
      price: 'From $299/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Security training'],
      benefits: ['Protect against 99.9% of threats', 'Compliance ready', 'Peace of mind'],
      color: 'from-red-500 to-pink-500',
      popular: false
    },
    // Data & Analytics Services
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Business intelligence and data insights',
      category: 'data',
      icon: BarChart3Icon,
      price: 'From $199/month',
      features: ['Data visualization', 'Reporting tools', 'KPI tracking', 'Custom dashboards'],
      benefits: ['Data-driven decisions', 'Identify opportunities', 'Improve performance'],
      color: 'from-violet-500 to-purple-500',
      popular: false
    },
    // Emerging Technology Services
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation computational power and solutions',
      category: 'emerging',
      icon: Atom,
      price: 'From $1,999/month',
      features: ['Quantum algorithms', 'Optimization problems', 'Research support', 'Consulting'],
      benefits: ['Solve complex problems', 'Future-proof technology', 'Competitive advantage'],
      color: 'from-indigo-500 to-purple-500',
      popular: false
    },
    {
      id: 'iot-edge-computing',
      name: 'IoT Edge Computing',
      description: 'Smart device networks and edge processing',
      category: 'emerging',
      icon: Network,
      price: 'From $299/month',
      features: ['Device management', 'Edge processing', 'Real-time analytics', 'Security'],
      benefits: ['Reduce latency', 'Lower bandwidth costs', 'Better reliability'],
      color: 'from-green-500 to-emerald-500',
      popular: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services, IT solutions, and cutting-edge technology services. Transform your business with Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation Showcase 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered micro SAAS services, IT solutions, 
              and cutting-edge technology services designed to transform your business operations 
              and drive growth in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-cyan-500/30 text-cyan-400 font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {activeCategory === 'all' ? 'All Services' : `${categories.find(c => c.id === activeCategory)?.name}`}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {activeCategory === 'all' 
                ? 'Comprehensive solutions for modern businesses'
                : `Specialized ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()} solutions`
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${service.popular ? 'scale-105' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 rounded-2xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold text-lg mb-4">{service.price}</div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have revolutionized their operations with our innovative services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-cyan-500/30 text-cyan-400 font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}