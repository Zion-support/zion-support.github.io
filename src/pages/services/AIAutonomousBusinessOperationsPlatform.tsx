import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Smartphone,
  Cloud,
  MessageCircle,
  FileText,
  Search,
  BarChart,
  Settings,
  Palette,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Leaf,
  Factory,
  Heart,
  Building,
  GraduationCap,
  Handshake,
  Newspaper,
  Video,
  Play,
  Briefcase,
  Automation,
  Gauge,
  PieChart,
  TrendingDown,
  Calendar,
  Clock4,
  AlertCircle,
  CheckSquare,
  FileCheck,
  UserCheck,
  Target2
} from 'lucide-react';

const AIAutonomousBusinessOperationsPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const features = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and optimizes business processes in real-time',
      icon: Automation,
      category: 'automation'
    },
    {
      title: 'Predictive Analytics & Insights',
      description: 'Advanced analytics that predict trends and provide actionable business intelligence',
      icon: BarChart3,
      category: 'analytics'
    },
    {
      title: 'Autonomous Decision Making',
      description: 'AI systems that make intelligent decisions based on data and business rules',
      icon: Brain,
      category: 'ai'
    },
    {
      title: 'Real-time Performance Monitoring',
      description: 'Continuous monitoring of all business operations with instant alerts',
      icon: Gauge,
      category: 'monitoring'
    },
    {
      title: 'Smart Resource Allocation',
      description: 'Intelligent allocation of resources based on demand and priorities',
      icon: Target2,
      category: 'optimization'
    },
    {
      title: 'Automated Compliance & Risk Management',
      description: 'Continuous compliance monitoring and risk assessment automation',
      icon: Shield,
      category: 'compliance'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,499',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 10 automated workflows',
        'Basic AI insights dashboard',
        'Standard compliance monitoring',
        'Email support',
        '5 user accounts',
        'Basic reporting tools',
        'Integration with 10+ apps'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 50 automated workflows',
        'Advanced AI analytics',
        'Comprehensive compliance suite',
        'Priority support',
        '25 user accounts',
        'Advanced reporting & dashboards',
        'Integration with 50+ apps',
        'Custom workflow development',
        'API access',
        'Multi-department management'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/month',
      description: 'For large enterprises and complex operations',
      features: [
        'Unlimited automated workflows',
        'Enterprise AI analytics',
        'Full compliance & risk management',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Custom analytics & reporting',
        'Integration with 200+ apps',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment options',
        'Advanced security features'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Operations Automation',
      description: 'Automate invoice processing, expense management, and financial reporting',
      icon: Coins,
      benefits: ['90% faster processing', 'Reduced errors by 95%', 'Real-time financial insights']
    },
    {
      title: 'HR & Talent Management',
      description: 'Automate recruitment, onboarding, performance reviews, and payroll',
      icon: Users,
      benefits: ['60% faster hiring', 'Improved employee satisfaction', 'Reduced HR costs']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent inventory management and supplier relationship automation',
      icon: Factory,
      benefits: ['25% inventory reduction', 'Faster supplier onboarding', 'Real-time tracking']
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered customer support and relationship management',
      icon: MessageCircle,
      benefits: ['24/7 customer support', '80% faster response times', 'Improved satisfaction']
    }
  ];

  const benefits = [
    {
      title: 'Operational Efficiency',
      description: 'Streamline operations and eliminate manual processes',
      icon: TrendingUp,
      metric: '85% faster'
    },
    {
      title: 'Cost Reduction',
      description: 'Significantly reduce operational costs and resource waste',
      icon: DollarSign,
      metric: '40% savings'
    },
    {
      title: 'Scalability',
      description: 'Scale operations seamlessly as your business grows',
      icon: Rocket,
      metric: 'Unlimited scale'
    },
    {
      title: 'Compliance & Risk',
      description: 'Automated compliance monitoring and risk management',
      icon: ShieldCheck,
      metric: '99.9% compliance'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Patient care automation, compliance monitoring, and resource optimization'
    },
    {
      name: 'Financial Services',
      icon: Coins,
      description: 'Risk management, compliance automation, and customer service optimization'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Production optimization, quality control, and supply chain management'
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Inventory management, customer service, and sales optimization'
    },
    {
      name: 'Technology',
      icon: Code,
      description: 'Development automation, testing, and deployment optimization'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Student management, course optimization, and administrative automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered autonomous operations. Automate processes, optimize performance, and scale efficiently with intelligent business automation." />
        <meta name="keywords" content="business automation, AI operations, process automation, business intelligence, autonomous business, workflow automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-business-operations-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Automation className="w-4 h-4" />
                <span>Autonomous Operations</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Business Operations Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business operations with AI-powered automation. Streamline processes, 
              optimize performance, and scale efficiently with intelligent business automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border border-blue-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 border border-cyan-500/30 rounded-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Business Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with business process automation to deliver 
              unprecedented operational efficiency and intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique needs of various industries, 
              providing specialized automation and optimization solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business automation needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-blue-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI Autonomous Business Operations Platform is transforming 
              industries and solving complex operational challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of business operations with our revolutionary AI-powered automation platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-blue-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the automation revolution and transform your business operations with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessOperationsPlatform;