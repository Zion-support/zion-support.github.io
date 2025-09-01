import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Target,
  Rocket,
  Zap,
  Eye,
  FileText,
  Monitor,
  TrendingUp,
  Leaf,
  Building,
  Users,
  Award,
  Clock,
  DollarSign,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'blockchain',
      name: 'Blockchain & Web3',
      icon: Network,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'iot-edge',
      name: 'IoT & Edge Computing',
      icon: Smartphone,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'data-analytics',
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'specialized',
      name: 'Specialized Solutions',
      icon: Target,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const allServices = [
    // AI & Machine Learning
    {
      id: 'ai-autonomous-business-intelligence',
      name: 'AI Autonomous Business Intelligence',
      category: 'ai-ml',
      icon: Brain,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Transform your business with AI-powered autonomous intelligence',
      features: [
        'Autonomous Data Analysis',
        'Predictive Analytics',
        'Real-time Processing',
        'Enterprise Security',
        'Custom AI Models',
        'API Access',
        '24/7 Support',
        'SLA Guarantee'
      ],
      popular: true,
      href: '/services/ai-autonomous-business-intelligence'
    },
    {
      id: 'ai-cybersecurity-platform',
      name: 'AI Cybersecurity Platform',
      category: 'cybersecurity',
      icon: Shield,
      monthlyPrice: 499,
      yearlyPrice: 4990,
      description: 'Next-generation cybersecurity powered by artificial intelligence',
      features: [
        'AI Threat Detection',
        'Zero-Day Prevention',
        'Automated Response',
        'Multi-Layer Security',
        'Compliance Management',
        'Threat Intelligence',
        '24/7 Monitoring',
        'Incident Response'
      ],
      popular: true,
      href: '/services/ai-cybersecurity-platform'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'ai-ml',
      icon: Zap,
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'Intelligent workflow automation that learns and adapts',
      features: [
        'Process Automation',
        'Intelligent Routing',
        'Performance Analytics',
        'Custom Workflows',
        'Integration APIs',
        'User Management',
        'Email Support',
        'Documentation'
      ],
      popular: false,
      href: '/services/ai-workflow-automation'
    },
    {
      id: 'ai-content-creation',
      name: 'AI Content Creation Studio',
      category: 'ai-ml',
      icon: FileText,
      monthlyPrice: 149,
      yearlyPrice: 1490,
      description: 'AI-powered content creation for marketing and communications',
      features: [
        'Content Generation',
        'Multi-format Support',
        'Brand Consistency',
        'Performance Analytics',
        'Template Library',
        'Collaboration Tools',
        'Email Support',
        'Training Resources'
      ],
      popular: false,
      href: '/services/ai-content-creation'
    },
    // Cybersecurity
    {
      id: 'ai-threat-intelligence',
      name: 'AI Threat Intelligence Platform',
      category: 'cybersecurity',
      icon: Eye,
      monthlyPrice: 399,
      yearlyPrice: 3990,
      description: 'Advanced threat intelligence powered by AI',
      features: [
        'Real-time Monitoring',
        'Predictive Analysis',
        'Global Intelligence',
        'Automated Alerts',
        'Threat Hunting',
        'Compliance Reporting',
        'Priority Support',
        'Custom Integrations'
      ],
      popular: false,
      href: '/services/ai-threat-intelligence'
    },
    // Cloud & DevOps
    {
      id: 'cloud-devops',
      name: 'Cloud Infrastructure & DevOps',
      category: 'cloud-devops',
      icon: Cloud,
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'Comprehensive cloud infrastructure and DevOps automation',
      features: [
        'Cloud Migration',
        'DevOps Automation',
        'Infrastructure Management',
        'Monitoring & Alerting',
        'CI/CD Pipelines',
        'Cost Optimization',
        'Email Support',
        'Best Practices'
      ],
      popular: false,
      href: '/services/cloud-devops'
    },
    // Blockchain
    {
      id: 'blockchain-supply-chain',
      name: 'Blockchain Supply Chain Platform',
      category: 'blockchain',
      icon: Network,
      monthlyPrice: 399,
      yearlyPrice: 3990,
      description: 'Transparent and secure supply chain management',
      features: [
        'Supply Chain Tracking',
        'Smart Contracts',
        'Transparency',
        'Security',
        'Integration APIs',
        'Analytics Dashboard',
        'Priority Support',
        'Custom Development'
      ],
      popular: false,
      href: '/services/blockchain-supply-chain'
    },
    // Quantum Computing
    {
      id: 'quantum-computing',
      name: 'Quantum Computing as a Service',
      category: 'quantum',
      icon: Cpu,
      monthlyPrice: 999,
      yearlyPrice: 9990,
      description: 'Access to quantum computing resources',
      features: [
        'Quantum Processing',
        'Algorithm Optimization',
        'Research Support',
        'Expert Consultation',
        'Custom Algorithms',
        'Performance Analytics',
        'Dedicated Support',
        'Training Programs'
      ],
      popular: false,
      href: '/services/quantum-computing'
    },
    // IoT & Edge
    {
      id: 'iot-edge-computing',
      name: 'IoT Edge Computing Platform',
      category: 'iot-edge',
      icon: Smartphone,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Edge computing solutions for IoT devices',
      features: [
        'Edge Processing',
        'IoT Integration',
        'Real-time Analytics',
        'Device Management',
        'Security Features',
        'Scalability',
        'Priority Support',
        'Custom Development'
      ],
      popular: false,
      href: '/services/iot-edge-computing'
    },
    // Data Analytics
    {
      id: 'data-analytics',
      name: 'Data Analytics & Business Intelligence',
      category: 'data-analytics',
      icon: BarChart3,
      monthlyPrice: 249,
      yearlyPrice: 2490,
      description: 'Advanced data analytics and business intelligence',
      features: [
        'Data Visualization',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Integration',
        'Advanced Analytics',
        'Email Support',
        'Training Resources'
      ],
      popular: false,
      href: '/services/data-analytics'
    },
    // Specialized Solutions
    {
      id: 'ai-legal-tech',
      name: 'AI Legal Tech Platform',
      category: 'specialized',
      icon: Building,
      monthlyPrice: 599,
      yearlyPrice: 5990,
      description: 'Comprehensive legal technology solutions',
      features: [
        'Document Analysis',
        'Legal Research',
        'Compliance Monitoring',
        'Contract Management',
        'AI-powered Insights',
        'Integration APIs',
        'Priority Support',
        'Custom Development'
      ],
      popular: false,
      href: '/services/ai-legal-tech'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Platform',
      category: 'specialized',
      icon: Monitor,
      monthlyPrice: 799,
      yearlyPrice: 7990,
      description: 'AI-powered healthcare solutions',
      features: [
        'Diagnostic Support',
        'Treatment Planning',
        'Patient Monitoring',
        'Data Analytics',
        'HIPAA Compliance',
        'Integration APIs',
        'Dedicated Support',
        'Custom Development'
      ],
      popular: false,
      href: '/services/ai-healthcare'
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Personal Finance Advisor',
      category: 'specialized',
      icon: TrendingUp,
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'Intelligent financial planning and investment advice',
      features: [
        'Financial Planning',
        'Investment Advice',
        'Risk Assessment',
        'Portfolio Management',
        'Real-time Updates',
        'Mobile App',
        'Email Support',
        'Educational Resources'
      ],
      popular: false,
      href: '/services/ai-financial-advisor'
    },
    {
      id: 'sustainability-analytics',
      name: 'AI Sustainability Analytics Platform',
      category: 'specialized',
      icon: Leaf,
      monthlyPrice: 349,
      yearlyPrice: 3490,
      description: 'AI-powered sustainability analytics',
      features: [
        'Environmental Impact',
        'Sustainability Metrics',
        'Optimization',
        'Reporting',
        'Compliance Monitoring',
        'Integration APIs',
        'Priority Support',
        'Custom Development'
      ],
      popular: false,
      href: '/services/ai-sustainability-analytics'
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Services',
      category: 'specialized',
      icon: Rocket,
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      description: 'End-to-end digital transformation consulting',
      features: [
        'Strategy Development',
        'Technology Implementation',
        'Change Management',
        'Training',
        'Project Management',
        'Ongoing Support',
        'Dedicated Team',
        'Custom Solutions'
      ],
      popular: false,
      href: '/services/digital-transformation'
    }
  ];

  // Filter services based on category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getPrice = (service: any) => {
    return billingCycle === 'monthly' ? service.monthlyPrice : service.yearlyPrice;
  };

  const getSavings = (service: any) => {
    if (billingCycle === 'yearly') {
      const monthlyTotal = service.monthlyPrice * 12;
      const yearlyPrice = service.yearlyPrice;
      return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-cyan-100">
              Choose the perfect plan for your business needs. All our services include 
              enterprise-grade features with transparent, competitive pricing.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-cyan-200'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-cyan-200'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <span className="ml-2 inline-block bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    Save up to 20%
                  </span>
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {allServices.filter(service => 
                    category.id === 'all' || service.category === category.id
                  ).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {selectedCategory !== 'all' 
                ? `${serviceCategories.find(c => c.id === selectedCategory)?.name} Services`
                : 'All Technology Services'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                  service.popular 
                    ? 'border-cyan-500 shadow-cyan-100' 
                    : 'border-gray-200 hover:border-cyan-300'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-cyan-600">
                      ${getPrice(service)}
                      <span className="text-lg text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && getSavings(service) > 0 && (
                      <div className="text-sm text-green-600 font-medium">
                        Save {getSavings(service)}% with yearly billing
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors text-center inline-block"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need custom solutions or enterprise-grade services? Our team can create 
              tailored packages to meet your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-6">
                Tailored solutions built specifically for your business needs and requirements.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">Custom Pricing</div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Get Quote
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Support</h3>
              <p className="text-gray-600 mb-6">
                Dedicated support team with 24/7 availability and priority response times.
              </p>
              <div className="text-2xl font-bold text-green-600 mb-4">From $999/month</div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600 mb-6">
                Full-service implementation with training, support, and ongoing maintenance.
              </p>
              <div className="text-2xl font-bold text-orange-600 mb-4">Custom Pricing</div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Pricing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team is here to help you choose the right services and pricing plans 
              for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-cyan-600 hover:text-cyan-700">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-cyan-600 hover:text-cyan-700">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Request Custom Quote
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>Select services...</option>
                    <option>AI & Machine Learning</option>
                    <option>Cybersecurity</option>
                    <option>Cloud & DevOps</option>
                    <option>Blockchain Solutions</option>
                    <option>Quantum Computing</option>
                    <option>IoT & Edge Computing</option>
                    <option>Data Analytics</option>
                    <option>Specialized Solutions</option>
                    <option>Custom Development</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option>Select budget range...</option>
                    <option>$1,000 - $5,000/month</option>
                    <option>$5,000 - $10,000/month</option>
                    <option>$10,000 - $25,000/month</option>
                    <option>$25,000 - $50,000/month</option>
                    <option>$50,000+/month</option>
                    <option>Custom/Project-based</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Describe your project requirements and timeline"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of services or contact us for custom solutions. 
            Start transforming your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Contact Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;