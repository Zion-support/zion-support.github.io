import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Users,
  BarChart3,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Target,
  Heart,
  Eye,
  Activity,
  Code,
  Server,
  Network,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  Award,
  Lightbulb,
  Sparkles,
  Atom,
  AlertTriangle,
  Bug,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  Info,
  Key,
  Fingerprint,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Timer,
  Stopwatch,
  Thermometer,
  Compass,
  Map,
  Navigation
} from 'lucide-react';

export function InnovativeServicesShowcase2025() {
  const services = [
    {
      id: 'ai-legal-contract-analyzer',
      title: 'AI Legal Contract Analyzer',
      description: 'Revolutionize your legal contract review process with AI-powered analysis, risk assessment, and compliance automation.',
      icon: FileText,
      category: 'Legal Technology',
      price: 'Starting at $299/month',
      features: [
        'AI-Powered Contract Analysis',
        'Risk Assessment Engine',
        'Real-time Processing',
        'Collaborative Review',
        'Compliance Automation',
        'Multi-jurisdiction Support'
      ],
      benefits: [
        'Save 80% of contract review time',
        'Reduce legal risk by 95%',
        'Ensure 100% compliance',
        'Improve team collaboration'
      ],
      link: '/services/ai-legal-contract-analyzer',
      popular: true
    },
    {
      id: 'ai-healthcare-predictive-analytics',
      title: 'AI Healthcare Predictive Analytics',
      description: 'Transform healthcare delivery with AI-powered predictive analytics, disease prediction, and clinical decision support.',
      icon: Stethoscope,
      category: 'Healthcare Technology',
      price: 'Starting at $599/month',
      features: [
        'AI-Powered Disease Prediction',
        'Clinical Decision Support',
        'Real-time Monitoring',
        'Population Health Analytics',
        'Predictive Modeling',
        'Clinical Intelligence'
      ],
      benefits: [
        'Improve patient outcomes by 40%',
        'Reduce readmission rates by 30%',
        'Enable early disease detection',
        'Optimize resource allocation'
      ],
      link: '/services/ai-healthcare-predictive-analytics',
      popular: true
    },
    {
      id: 'ai-financial-trading-platform',
      title: 'AI Financial Trading Platform',
      description: 'Revolutionize your trading operations with AI-powered algorithms, real-time risk management, and institutional-grade execution.',
      icon: TrendingUp,
      category: 'Financial Technology',
      price: 'Starting at $999/month',
      features: [
        'AI-Powered Trading Algorithms',
        'Real-time Risk Management',
        'High-Frequency Trading',
        'Multi-Asset Support',
        'Algorithmic Trading',
        'Risk Analytics'
      ],
      benefits: [
        'Increase trading accuracy by 25%',
        'Reduce risk exposure by 60%',
        'Enable 24/7 automated trading',
        'Support multiple asset classes'
      ],
      link: '/services/ai-financial-trading-platform',
      popular: false
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain operations with AI-powered optimization, real-time visibility, and intelligent demand forecasting.',
      icon: Truck,
      category: 'Supply Chain Technology',
      price: 'Starting at $399/month',
      features: [
        'AI-Powered Demand Forecasting',
        'Route Optimization',
        'Real-time Visibility',
        'Supplier Management',
        'Inventory Optimization',
        'Risk Management'
      ],
      benefits: [
        'Reduce costs by 25%',
        'Improve efficiency by 40%',
        'Achieve 99.5% on-time delivery',
        'Enable sustainable operations'
      ],
      link: '/services/ai-supply-chain-optimization',
      popular: false
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Transform customer relationships with AI-powered analytics, sentiment analysis, and predictive insights.',
      icon: Users,
      category: 'Customer Experience',
      price: 'Starting at $199/month',
      features: [
        'AI-Powered Sentiment Analysis',
        'Customer Journey Mapping',
        'Predictive Customer Behavior',
        'Real-time Analytics Dashboard',
        'Sentiment Intelligence',
        'Journey Optimization'
      ],
      benefits: [
        'Improve customer satisfaction by 35%',
        'Reduce churn by 45%',
        'Increase conversion rates by 30%',
        'Enable personalized experiences'
      ],
      link: '/services/ai-customer-experience-analytics',
      popular: false
    }
  ];

  const categories = [
    'Legal Technology',
    'Healthcare Technology',
    'Financial Technology',
    'Supply Chain Technology',
    'Customer Experience'
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-blue via-blue-900 to-zion-blue">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovative Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge AI-powered micro SAAS services and solutions. 
              Transform your business with intelligent automation, predictive analytics, 
              and industry-leading technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI-Powered Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our innovative services combine cutting-edge AI with industry expertise 
              to deliver unprecedented value and transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 ${
                  service.popular ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-gray-700'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-cyan-400">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="w-full text-center py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver 
              exceptional value and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-First Approach</h3>
              <p className="text-gray-400">
                Our services are built from the ground up with AI and machine learning 
                at their core, ensuring maximum intelligence and automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-grade security and compliance with SOC 2, ISO 27001, GDPR, and 
                industry-specific regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Implementation</h3>
              <p className="text-gray-400">
                Get up and running in days, not months. Our services are designed for 
                quick deployment and immediate value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered services 
              to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
