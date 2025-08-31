import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Zap,
  Brain,
  Atom,
  Shield,
  Users,
  BarChart3,
  Rocket,
  Activity,
  Cloud,
  Globe,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  Eye,
  Code,
  Server,
  Network,
  Lock,
  TrendingUp,
  Cpu,
  Database,
  Building,
  FileText,
  GraduationCap,
  HelpCircle,
  Settings,
  Monitor,
  Smartphone,
  Watch,
  Headphones,
  Printer,
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
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  Calendar,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Navigation,
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
  AlertTriangle,
  Info
} from 'lucide-react';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const services = [
    {
      name: 'AI Micro SaaS Platform',
      description: 'Build, deploy, and scale intelligent SaaS applications in minutes',
      icon: Brain,
      category: 'AI & SaaS',
      pricing: {
        monthly: { starter: 99, professional: 299, enterprise: 'Custom' },
        yearly: { starter: 990, professional: 2990, enterprise: 'Custom' }
      },
      features: {
        starter: [
          'Up to 100 users',
          'Basic AI automation',
          'Standard security',
          'Email support',
          '5GB storage',
          'Basic analytics'
        ],
        professional: [
          'Up to 1,000 users',
          'Advanced AI features',
          'Enhanced security',
          'Priority support',
          '50GB storage',
          'Advanced analytics',
          'Custom integrations',
          'White-label options'
        ],
        enterprise: [
          'Unlimited users',
          'Full AI capabilities',
          'Enterprise security',
          '24/7 dedicated support',
          'Unlimited storage',
          'Custom AI models',
          'On-premise options',
          'SLA guarantees'
        ]
      },
      popular: false,
      link: '/services/ai-micro-saas-platform'
    },
    {
      name: 'Quantum AI Trading Platform',
      description: 'Experience the future of trading with quantum-powered AI',
      icon: Atom,
      category: 'Quantum & Trading',
      pricing: {
        monthly: { starter: 199, professional: 499, enterprise: 'Custom' },
        yearly: { starter: 1990, professional: 4990, enterprise: 'Custom' }
      },
      features: {
        starter: [
          'Basic quantum algorithms',
          'Real-time market data',
          'Standard security',
          'Email support',
          'Basic analytics',
          'Up to 100 trades/month'
        ],
        professional: [
          'Advanced quantum algorithms',
          'Premium market data',
          'Enhanced security',
          'Priority support',
          'Advanced analytics',
          'Unlimited trades',
          'Custom strategies',
          'API access'
        ],
        enterprise: [
          'Full quantum capabilities',
          'Institutional data feeds',
          'Enterprise security',
          '24/7 dedicated support',
          'Custom algorithms',
          'White-label solutions',
          'On-premise options',
          'SLA guarantees'
        ]
      },
      popular: true,
      link: '/services/quantum-ai-trading-platform'
    },
    {
      name: 'AI Cybersecurity Platform',
      description: 'Protect your business with AI-powered threat detection',
      icon: Shield,
      category: 'Security',
      pricing: {
        monthly: { starter: 149, professional: 399, enterprise: 'Custom' },
        yearly: { starter: 1490, professional: 3990, enterprise: 'Custom' }
      },
      features: {
        starter: [
          'Basic AI threat detection',
          'Email security',
          'Web filtering',
          'Basic reporting',
          'Email support',
          'Up to 50 users'
        ],
        professional: [
          'Advanced AI detection',
          'Endpoint protection',
          'Network security',
          'Advanced analytics',
          'Priority support',
          'Up to 500 users',
          'Compliance tools',
          'API access'
        ],
        enterprise: [
          'Full AI capabilities',
          'Custom integrations',
          'Enterprise features',
          '24/7 dedicated support',
          'Unlimited users',
          'Custom deployment',
          'On-premise options',
          'SLA guarantees'
        ]
      },
      popular: false,
      link: '/services/ai-cybersecurity-platform'
    }
  ];

  const categories = ['All', 'AI & SaaS', 'Quantum & Trading', 'Security', 'Enterprise'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Select the perfect plan for your business needs. All plans include our core AI capabilities 
              and enterprise-grade security with transparent pricing and no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'
                    : 'text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {filteredServices.map((service, serviceIndex) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.2 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
              >
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                    {service.category}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {['starter', 'professional', 'enterprise'].map((plan, planIndex) => (
                    <motion.div
                      key={plan}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: planIndex * 0.1 }}
                      className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                        service.popular && plan === 'professional'
                          ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                          : 'border-gray-700'
                      }`}
                    >
                      {service.popular && plan === 'professional' && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold mb-2 capitalize">{plan}</h3>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-3xl font-bold">
                            {typeof service.pricing[billingCycle][plan] === 'number' 
                              ? `$${service.pricing[billingCycle][plan]}` 
                              : service.pricing[billingCycle][plan]
                            }
                          </span>
                          {typeof service.pricing[billingCycle][plan] === 'number' && (
                            <span className="text-gray-400 ml-1">
                              {billingCycle === 'monthly' ? '/month' : '/year'}
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {service.features[plan].map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={service.link}
                        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                          service.popular && plan === 'professional'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                            : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                        }`}
                      >
                        {plan === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn more about {service.name}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our enterprise plans offer custom integrations, dedicated support, 
              and on-premise deployment options for large organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Get answers to common questions about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
              },
              {
                question: 'Do you offer volume discounts?',
                answer: 'Yes, we offer volume discounts for enterprise customers with 100+ users. Contact our sales team for custom pricing.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'Yes, all our plans come with a 14-day free trial. No credit card required to start your trial.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and wire transfers for enterprise customers.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
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