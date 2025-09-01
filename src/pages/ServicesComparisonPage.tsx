import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  DollarSign,
  Users,
  Target,
  BarChart3,
  MessageCircle,
  FileText,
  Settings,
  ShoppingCart,
  Truck,
  Building,
  Car,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesComparisonPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI & Analytics', icon: Brain },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'micro-saas', name: 'Micro SaaS', icon: ShoppingCart },
    { id: 'emerging', name: 'Emerging Tech', icon: Zap }
  ];

  const services = [
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      category: 'ai',
      description: 'Multi-agent AI coordination & workflow automation',
      features: [
        'Multi-agent coordination',
        'Workflow automation',
        'Process optimization',
        'Real-time monitoring',
        'Predictive analytics',
        'Custom integrations'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$12,000/month'
      },
      rating: 4.9,
      reviews: 127,
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      featured: true
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai',
      description: 'Machine Learning & Data Science solutions',
      features: [
        'Predictive analytics',
        'Data visualization',
        'Machine learning models',
        'Real-time insights',
        'Custom dashboards',
        'API integrations'
      ],
      pricing: {
        starter: '$1,800/month',
        professional: '$3,500/month',
        enterprise: '$8,500/month'
      },
      rating: 4.8,
      reviews: 89,
      icon: BarChart3,
      color: 'from-blue-600 to-cyan-600',
      featured: true
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'security',
      description: 'AI-Powered Threat Detection & Response',
      features: [
        'Threat detection',
        'Automated response',
        'Behavioral analysis',
        'Incident management',
        'Compliance reporting',
        '24/7 monitoring'
      ],
      pricing: {
        starter: '$3,200/month',
        professional: '$6,500/month',
        enterprise: '$15,000/month'
      },
      rating: 4.9,
      reviews: 156,
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      featured: true
    },
    {
      id: 'quantum-ai-platform',
      name: 'Quantum AI Platform',
      category: 'emerging',
      description: 'Next-Generation Quantum Computing',
      features: [
        'Quantum algorithms',
        'Hybrid computing',
        'Optimization problems',
        'Research support',
        'Custom development',
        'Training & consultation'
      ],
      pricing: {
        starter: '$8,000/month',
        professional: '$15,000/month',
        enterprise: '$35,000/month'
      },
      rating: 4.7,
      reviews: 34,
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      featured: true
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      category: 'infrastructure',
      description: 'Infrastructure & Automation solutions',
      features: [
        'Cloud migration',
        'CI/CD pipelines',
        'Infrastructure as code',
        'Monitoring & logging',
        'Auto-scaling',
        'Disaster recovery'
      ],
      pricing: {
        starter: '$2,000/month',
        professional: '$4,500/month',
        enterprise: '$10,000/month'
      },
      rating: 4.8,
      reviews: 203,
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      featured: false
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Solutions',
      category: 'emerging',
      description: 'Simulation & Monitoring platforms',
      features: [
        '3D modeling',
        'Real-time simulation',
        'Predictive maintenance',
        'Performance optimization',
        'IoT integration',
        'Analytics dashboard'
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$7,000/month',
        enterprise: '$18,000/month'
      },
      rating: 4.6,
      reviews: 67,
      icon: Target,
      color: 'from-green-600 to-emerald-600',
      featured: false
    },
    {
      id: 'micro-saas-solutions',
      name: 'Micro SaaS Solutions',
      category: 'micro-saas',
      description: 'Productized SaaS for specific niches',
      features: [
        'Custom development',
        'White-label options',
        'API access',
        'Analytics dashboard',
        'Multi-tenant support',
        'Scalable architecture'
      ],
      pricing: {
        starter: '$1,500/month',
        professional: '$3,000/month',
        enterprise: '$7,500/month'
      ],
      rating: 4.7,
      reviews: 142,
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'ai',
      description: 'AI-powered sales automation',
      features: [
        'Lead scoring',
        'Sales forecasting',
        'Pipeline management',
        'Email automation',
        'Performance analytics',
        'CRM integration'
      ],
      pricing: {
        starter: '$800/month',
        professional: '$1,800/month',
        enterprise: '$4,500/month'
      ],
      rating: 4.8,
      reviews: 98,
      icon: TrendingUp,
      color: 'from-green-500 to-blue-500',
      featured: false
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const pricingPlans = [
    { id: 'starter', name: 'Starter', description: 'Perfect for small teams' },
    { id: 'professional', name: 'Professional', description: 'Ideal for growing businesses' },
    { id: 'enterprise', name: 'Enterprise', description: 'For large organizations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Services Comparison
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Compare our comprehensive range of AI, infrastructure, and emerging technology services. 
              Find the perfect solution for your business needs with transparent pricing and feature comparisons.
            </motion.p>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Plan Selector */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Select Pricing Plan
          </h3>
          <div className="flex justify-center gap-4">
            {pricingPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedPlan === plan.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-slate-700'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                service.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {service.rating} ({service.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.pricing[selectedPlan as keyof typeof service.pricing]}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pricingPlans.find(p => p.id === selectedPlan)?.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/request-quote"
                    className="bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Our team can create tailored solutions that perfectly fit your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Zion Tech Group</h4>
              <p className="text-gray-400 mb-4">
                Leading provider of AI, infrastructure, and emerging technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/ai-services" className="hover:text-white transition-colors">AI Services</Link></li>
                <li><Link to="/it-services" className="hover:text-white transition-colors">IT Services</Link></li>
                <li><Link to="/micro-saas" className="hover:text-white transition-colors">Micro SaaS</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Tech Street, Innovation City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesComparisonPage;