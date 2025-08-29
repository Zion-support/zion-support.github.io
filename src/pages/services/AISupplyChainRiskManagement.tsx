import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Globe, 
  BarChart3, 
  Target,
  Zap,
  Users,
  Database,
  LineChart,
  PieChart,
  Building,
  Truck,
  Ship,
  Plane,
  Train,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  ExternalLink,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Network,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Sparkles,
  Clock,
  Award,
  Lock,
  Activity,
  AlertCircle,
  CheckSquare,
  FileText,
  Settings,
  Bell,
  Calendar,
  DollarSign,
  Percent
} from 'lucide-react';

export default function AISupplyChainRiskManagement() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Risk Prediction',
      description: 'Advanced machine learning algorithms predict supply chain disruptions with 90%+ accuracy up to 6 months in advance'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Mapping',
      description: 'Comprehensive visualization of your entire supply network with real-time monitoring of suppliers, logistics, and inventory'
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Proactive alerts for potential disruptions including natural disasters, political instability, and supplier issues'
    },
    {
      icon: BarChart3,
      title: 'Risk Analytics Dashboard',
      description: 'Real-time risk scoring, trend analysis, and impact assessment for informed decision-making'
    },
    {
      icon: Network,
      title: 'Supplier Risk Assessment',
      description: 'Continuous monitoring of supplier financial health, compliance, and performance metrics'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated tracking of regulatory requirements, certifications, and industry standards'
    }
  ];

  const benefits = [
    'Reduce supply chain disruptions by 60-80% through predictive analytics',
    'Save 15-25% on logistics costs with optimized routing and inventory management',
    'Improve supplier relationships with data-driven performance insights',
    'Ensure regulatory compliance and avoid costly penalties',
    'Enhance customer satisfaction with reliable delivery performance',
    'Gain competitive advantage with resilient supply chain operations'
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: 'month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 suppliers monitored',
        'Basic risk scoring',
        'Email alerts',
        'Standard reporting',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,199',
      period: 'month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 500 suppliers monitored',
        'Advanced AI risk prediction',
        'Real-time monitoring',
        'Custom dashboards',
        'API access',
        'Priority support',
        'Compliance tracking',
        'Supplier performance analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: 'month',
      description: 'For large multinational corporations',
      features: [
        'Unlimited suppliers',
        'Custom AI models',
        'White-label solutions',
        'Dedicated account manager',
        'Advanced integrations',
        'Team collaboration tools',
        '24/7 phone support',
        'Custom training programs'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Monitor suppliers and optimize production schedules',
      icon: Building
    },
    {
      title: 'Retail & E-commerce',
      description: 'Ensure product availability and delivery reliability',
      icon: Truck
    },
    {
      title: 'Healthcare',
      description: 'Maintain critical medical supply chains',
      icon: Shield
    },
    {
      title: 'Logistics',
      description: 'Optimize routes and reduce transportation risks',
      icon: Ship
    }
  ];

  const riskTypes = [
    {
      category: 'Supplier Risks',
      risks: ['Financial instability', 'Quality issues', 'Capacity constraints', 'Geographic concentration']
    },
    {
      category: 'Logistics Risks',
      risks: ['Transportation delays', 'Port congestion', 'Customs issues', 'Infrastructure failures']
    },
    {
      category: 'Market Risks',
      risks: ['Demand fluctuations', 'Price volatility', 'Currency fluctuations', 'Regulatory changes']
    },
    {
      category: 'Environmental Risks',
      risks: ['Natural disasters', 'Climate change', 'Resource scarcity', 'Sustainability compliance']
    }
  ];

  const marketData = {
    marketSize: '$8.9B (Supply Chain Risk Management)',
    growthRate: '18.7% CAGR',
    targetAudience: 'Manufacturers, retailers, logistics companies, healthcare organizations',
    competitiveAdvantage: 'AI-first approach with 90%+ prediction accuracy and real-time global monitoring'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Supply Chain Risk Management Platform | Zion Tech Group"
        description="Protect your supply chain with AI-powered risk prediction, real-time monitoring, and proactive disruption prevention. Get 90%+ accuracy on risk forecasting."
        keywords="AI supply chain, risk management, supply chain monitoring, disruption prevention, supplier risk, logistics optimization"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/10 border border-blue-200/20 text-blue-200 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Risk Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your supply chain with AI-powered risk prediction, real-time monitoring, and proactive disruption prevention. 
              Get 90%+ accuracy on risk forecasting and ensure business continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Supply Chain Risk Management Demo Request`}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-200/20 text-blue-200 font-semibold hover:bg-blue-200/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features for Risk Prevention
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence to predict, monitor, and prevent supply chain disruptions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-200/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform monitors and predicts all types of supply chain risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskTypes.map((riskType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{riskType.category}</h3>
                <ul className="space-y-2">
                  {riskType.risks.map((risk, riskIndex) => (
                    <li key={riskIndex} className="flex items-center text-gray-300 text-sm">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of AI-driven supply chain risk management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options for every size organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-400/50 bg-blue-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${contactInfo.email}?subject=${plan.name} Plan - AI Supply Chain Risk Management`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed for all industries with complex supply chains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the rapidly growing AI-powered supply chain risk management market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{marketData.marketSize}</div>
              <p className="text-gray-300">Market Size</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{marketData.growthRate}</div>
              <p className="text-gray-300">Growth Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%+</div>
              <p className="text-gray-300">Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Real-time Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations who are already using AI to prevent supply chain disruptions and ensure business continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Supply Chain Risk Management Demo Request`}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-200/20 text-blue-200 font-semibold hover:bg-blue-200/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}