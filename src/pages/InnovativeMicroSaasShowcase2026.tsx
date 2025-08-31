import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Zap, 
  Server, 
  Cloud, 
  Lock, 
  BarChart3, 
  Users, 
  Target, 
  Leaf, 
  Workflow,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Rocket,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Atom,
  Palette,
  MessageCircle,
  FileText,
  ShoppingCart,
  Building2,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Wifi,
  Activity,
  Eye,
  Search,
  Settings,
  Palette as PaletteIcon,
  Coins,
  Satellite,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  HelpCircle,
  ShoppingCart as ShoppingCartIcon
} from 'lucide-react';

const InnovativeMicroSaasShowcase2026: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'AI & Automation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI-Powered Customer Churn Predictor',
        'AI-Powered Invoice Automation',
        'AI-Powered Legal Document Analyzer',
        'AI-Powered HR Recruitment Assistant',
        'AI-Powered Marketing Automation'
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        'Quantum-Secure Password Manager',
        'Quantum-Encrypted File Storage'
      ]
    },
    {
      name: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'AI-Powered Customer Churn Predictor',
        'AI-Powered Marketing Automation'
      ]
    },
    {
      name: 'Workflow Automation',
      icon: Workflow,
      color: 'from-green-500 to-emerald-500',
      services: [
        'AI-Powered Invoice Automation',
        'AI-Powered HR Recruitment Assistant'
      ]
    },
    {
      name: 'Sustainability',
      icon: Leaf,
      color: 'from-emerald-500 to-teal-500',
      services: [
        'Sustainable Business Carbon Tracker',
        'IoT Energy Optimization Platform'
      ]
    },
    {
      name: 'Financial Tech',
      icon: Coins,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'Blockchain Supply Chain Verifier'
      ]
    }
  ];

  const featuredServices = [
    {
      id: 'ai-powered-customer-churn-predictor',
      title: 'AI-Powered Customer Churn Predictor',
      description: 'Advanced machine learning platform that predicts customer churn with 95% accuracy, enabling proactive retention strategies and revenue protection.',
      price: '$299',
      billing: 'month',
      savings: '63%',
      marketPrice: '$800',
      features: [
        'Real-time churn risk scoring',
        'Behavioral pattern analysis',
        'Predictive analytics dashboard',
        'Automated retention campaigns',
        'Customer lifetime value prediction'
      ],
      benefits: [
        'Reduce churn by up to 40%',
        'Increase customer lifetime value',
        'Optimize retention spend',
        'Data-driven decision making'
      ],
      category: 'Business Intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-secure-password-manager',
      title: 'Quantum-Secure Password Manager',
      description: 'Next-generation password management solution using quantum-resistant cryptography, ensuring your passwords remain secure even against future quantum computers.',
      price: '$19.99',
      billing: 'month',
      savings: '45%',
      marketPrice: '$36',
      features: [
        'Quantum-resistant encryption (CRYSTALS-Kyber)',
        'Zero-knowledge architecture',
        'Biometric authentication',
        'Cross-platform synchronization',
        'Secure password sharing'
      ],
      benefits: [
        'Future-proof security against quantum attacks',
        'Complete privacy with zero-knowledge design',
        'Compliance with SOC 2, GDPR, HIPAA',
        'Reduced security risks'
      ],
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-powered-invoice-automation',
      title: 'AI-Powered Invoice Automation',
      description: 'Intelligent invoice processing platform that automatically extracts, validates, and processes invoices with 99.5% accuracy, reducing manual work by 90%.',
      price: '$149',
      billing: 'month',
      savings: '63%',
      marketPrice: '$400',
      features: [
        'OCR and AI-powered data extraction',
        'Automatic invoice validation',
        'Multi-currency support',
        'Approval workflow automation',
        'Integration with accounting systems'
      ],
      benefits: [
        '90% reduction in manual processing time',
        '99.5% accuracy in data extraction',
        'Faster payment processing',
        'Reduced processing costs'
      ],
      category: 'Workflow Automation',
      icon: Workflow,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Micro SAAS Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                2026 Edition
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS solutions that combine AI, quantum computing, 
              and blockchain technology to solve real business challenges at startup-friendly prices.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative services span across multiple domains, each designed to solve 
              specific business challenges with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most popular and innovative micro SAAS solutions that are 
              transforming businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <span className="text-sm text-gray-400">/{service.billing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400 line-through">{service.marketPrice}</span>
                      <span className="text-green-400 font-semibold">Save {service.savings}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with practical business solutions to deliver 
              exceptional value at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Excellence</h3>
              <p className="text-gray-300 text-sm">
                Award-winning solutions with proven track records across industries
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300 text-sm">
                Get up and running in weeks, not months with our streamlined processes
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cost Effective</h3>
              <p className="text-gray-300 text-sm">
                Enterprise-grade solutions at startup prices with significant cost savings
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2, ISO 27001, and GDPR compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how our innovative micro SAAS solutions can help 
            you achieve your business goals with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Globe className="w-5 h-5 mr-2" />
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeMicroSaasShowcase2026;