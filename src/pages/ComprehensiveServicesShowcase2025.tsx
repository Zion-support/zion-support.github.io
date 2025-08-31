import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Star,
  Database,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  PieChart,
  LineChart,
  Target,
  Zap,
  Clock,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertCircle,
  FileCheck,
  Calendar,
  Lock,
  Cloud,
  Server,
  Activity,
  Heart,
  Scale,
  Truck,
  Package,
  DollarSign,
  FileText,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Gavel,
  Stethoscope,
  Pill,
  Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesShowcase2025() {
  const featuredServices = [
    {
      id: 'ai-legal-research-compliance-platform',
      title: 'AI-Powered Legal Research & Compliance Platform',
      description: 'Transform your legal practice with AI-driven research, automated compliance monitoring, and intelligent document analysis.',
      category: 'Legal Technology',
      price: 'From $399/month',
      features: [
        'AI-powered legal research',
        'Intelligent document analysis',
        'Regulatory compliance monitoring',
        'Legal document generation',
        'Risk assessment & mitigation',
        'Collaborative legal workspace'
      ],
      benefits: [
        'Reduce legal research time by 80%',
        'Improve compliance accuracy by 95%',
        'Cut legal document review costs by 60%'
      ],
      icon: Scale,
      color: 'blue',
      href: '/services/ai-legal-research-compliance-platform'
    },
    {
      id: 'ai-healthcare-predictive-analytics-platform',
      title: 'AI-Powered Healthcare Predictive Analytics Platform',
      description: 'Transform healthcare delivery with AI-driven predictive analytics, real-time patient monitoring, and intelligent clinical decision support.',
      category: 'Healthcare Technology',
      price: 'From $599/month',
      features: [
        'AI-powered disease prediction',
        'Real-time patient monitoring',
        'Predictive analytics dashboard',
        'Population health management',
        'Clinical decision support',
        'Automated medical reporting'
      ],
      benefits: [
        'Improve patient outcomes by 35%',
        'Reduce hospital readmissions by 40%',
        'Cut healthcare costs by 25%'
      ],
      icon: Heart,
      color: 'red',
      href: '/services/ai-healthcare-predictive-analytics-platform'
    },
    {
      id: 'ai-financial-risk-management-trading-platform',
      title: 'AI-Powered Financial Risk Management & Trading Platform',
      description: 'Transform your financial operations with AI-driven risk management, intelligent trading algorithms, and comprehensive compliance monitoring.',
      category: 'Financial Technology',
      price: 'From $799/month',
      features: [
        'AI-powered risk assessment',
        'Intelligent trading algorithms',
        'Comprehensive risk monitoring',
        'Advanced analytics dashboard',
        'Portfolio management tools',
        'Regulatory compliance'
      ],
      benefits: [
        'Reduce portfolio risk by 40%',
        'Improve trading performance by 25%',
        'Cut compliance costs by 60%'
      ],
      icon: DollarSign,
      color: 'green',
      href: '/services/ai-financial-risk-management-trading-platform'
    },
    {
      id: 'ai-supply-chain-intelligence-optimization-platform',
      title: 'AI-Powered Supply Chain Intelligence & Optimization Platform',
      description: 'Transform your supply chain operations with AI-driven intelligence, predictive analytics, and automated optimization.',
      category: 'Supply Chain Technology',
      price: 'From $499/month',
      features: [
        'AI-powered demand forecasting',
        'Global supply chain visibility',
        'Intelligent route optimization',
        'Inventory optimization',
        'Risk management & mitigation',
        'Advanced analytics dashboard'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve forecast accuracy by 40%',
        'Cut transportation costs by 25%'
      ],
      icon: Truck,
      color: 'orange',
      href: '/services/ai-supply-chain-intelligence-optimization-platform'
    }
  ];

  const allServices = [
    {
      title: 'AI Business Intelligence Dashboard',
      description: 'Advanced analytics platform with AI-powered insights and real-time dashboards',
      price: 'From $299/month',
      href: '/services/ai-business-intelligence-dashboard'
    },
    {
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support with automated responses and sentiment analysis',
      price: 'From $199/month',
      href: '/services/ai-customer-support-automation'
    },
    {
      title: 'AI Project Management Platform',
      description: 'AI-driven project management with predictive analytics and resource optimization',
      price: 'From $149/month',
      href: '/services/ai-project-management-platform'
    },
    {
      title: 'AI Marketing Automation Platform',
      description: 'Intelligent marketing automation with personalized campaigns and ROI optimization',
      price: 'From $399/month',
      href: '/services/ai-marketing-automation-platform'
    },
    {
      title: 'AI Workflow Orchestrator',
      description: 'Automated workflow management with intelligent process optimization',
      price: 'From $249/month',
      href: '/services/ai-workflow-orchestrator'
    },
    {
      title: 'AI Predictive Maintenance',
      description: 'Predictive maintenance platform for industrial equipment and machinery',
      price: 'From $599/month',
      href: '/services/ai-predictive-maintenance'
    },
    {
      title: 'AI HR Platform',
      description: 'Intelligent HR management with recruitment automation and employee analytics',
      price: 'From $299/month',
      href: '/services/ai-hr-platform'
    },
    {
      title: 'AI Financial Trading Risk Management',
      description: 'Advanced risk management for financial trading with AI-powered analytics',
      price: 'From $799/month',
      href: '/services/ai-financial-trading-risk-management'
    }
  ];

  const categories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: Brain,
      color: 'blue'
    },
    {
      name: 'Healthcare Technology',
      description: 'Innovative healthcare solutions powered by AI and predictive analytics',
      icon: Heart,
      color: 'red'
    },
    {
      name: 'Financial Technology',
      description: 'Advanced financial solutions with AI-driven risk management and trading',
      icon: DollarSign,
      color: 'green'
    },
    {
      name: 'Supply Chain Technology',
      description: 'Intelligent supply chain optimization and management solutions',
      icon: Truck,
      color: 'orange'
    },
    {
      name: 'Legal Technology',
      description: 'AI-powered legal research, compliance, and document automation',
      icon: Scale,
      color: 'purple'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced cybersecurity solutions with AI-powered threat detection',
      icon: Shield,
      color: 'indigo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive AI Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Discover our comprehensive suite of AI-powered micro-SaaS services, IT solutions, and innovative technology platforms. 
              Transform your business with cutting-edge artificial intelligence and machine learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our most innovative and transformative AI-powered solutions designed to revolutionize your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across different technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.name}</h3>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our complete collection of AI-powered services and solutions designed to meet every business need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{service.price}</span>
                  <Link
                    to={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent Pricing Structure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Competitive pricing plans designed to fit businesses of all sizes, from startups to enterprise organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">$199</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Perfect for small businesses and startups</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic AI capabilities
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard support
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Core features
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 relative text-center">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">$599</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Ideal for growing businesses</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  API access
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-slate-900">$1,999</span>
                <span className="text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mb-6">For large organizations</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Full AI capabilities
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  White-label options
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust our AI-powered platforms to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-slate-300 mb-2">Mobile: +1 302 464 0950</p>
              <p className="text-slate-300 mb-2">Email: kleber@ziontechgroup.com</p>
              <p className="text-slate-300">Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
                <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Featured Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/ai-legal-research-compliance-platform" className="text-slate-300 hover:text-white">Legal Research Platform</Link></li>
                <li><Link to="/services/ai-healthcare-predictive-analytics-platform" className="text-slate-300 hover:text-white">Healthcare Analytics</Link></li>
                <li><Link to="/services/ai-financial-risk-management-trading-platform" className="text-slate-300 hover:text-white">Financial Platform</Link></li>
                <li><Link to="/services/ai-supply-chain-intelligence-optimization-platform" className="text-slate-300 hover:text-white">Supply Chain Platform</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-white">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
