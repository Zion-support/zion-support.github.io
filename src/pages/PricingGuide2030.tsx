import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Star, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Rocket,
  Cloud,
  Cpu,
  Globe,
  Heart,
  Users,
  Target,
  Lightbulb,
  Code,
  Database,
  Lock,
  BarChart3,
  PenTool,
  MessageCircle,
  Calendar,
  Award,
  Atom,
  Satellite,
  Leaf,
  Eye,
  Clock,
  BarChart
} from 'lucide-react';

const PricingGuide2030: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI-powered analytics dashboard',
        'Basic automation workflows',
        'Email support',
        '5 user licenses',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Starter',
        'Advanced AI algorithms',
        'Priority support',
        '15 user licenses',
        'Custom integrations',
        'Advanced reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Dedicated support team',
        'Unlimited user licenses',
        'White-label solutions',
        'Advanced security',
        'Custom development',
        'On-premise options'
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Business Intelligence', price: '$299/month', description: 'Advanced analytics and insights' },
        { name: 'AI Content Creation', price: '$199/month', description: 'Automated content generation' },
        { name: 'AI Cybersecurity', price: '$399/month', description: 'Threat detection and prevention' },
        { name: 'AI Healthcare Analytics', price: '$599/month', description: 'Medical AI and diagnostics' }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Quantum AI Platform', price: '$999/month', description: 'Next-gen quantum computing' },
        { name: 'Quantum Optimization', price: '$799/month', description: 'Complex problem solving' },
        { name: 'Quantum Security', price: '$699/month', description: 'Unbreakable encryption' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Space Technology', price: '$799/month', description: 'Satellite and space solutions' },
        { name: 'Neuromorphic Computing', price: '$599/month', description: 'Brain-inspired computing' },
        { name: 'Synthetic Biology', price: '$699/month', description: 'Bio-computing solutions' },
        { name: 'Brain-Computer Interface', price: '$1,299/month', description: 'Neural interface technology' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs by up to 60% with AI automation',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      title: 'Future-Proof',
      description: 'Stay ahead with cutting-edge 2030 technology',
      icon: TrendingUp,
      color: 'text-blue-500'
    },
    {
      title: 'Scalability',
      description: 'Grow without proportional cost increases',
      icon: BarChart,
      color: 'text-purple-500'
    },
    {
      title: 'ROI Focused',
      description: 'Proven returns on investment within 6-12 months',
      icon: Star,
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing Guide 2030
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced pricing strategies and transparent costs for next-generation technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                View Pricing Plans
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                  tier.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-slate-700/50 hover:border-green-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Service Pricing by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed pricing for our comprehensive range of 2030 technology services
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Our Pricing is Different
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent, value-driven pricing that puts your business first
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
                <div className={`w-20 h-20 rounded-full bg-slate-700/50 flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 border border-green-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team for a personalized pricing consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Get Custom Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingGuide2030;