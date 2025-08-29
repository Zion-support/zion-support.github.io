import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Leaf, 
  Globe, 
  Zap, 
  Brain, 
  Target, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  TrendingUp,
  Award,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Sun,
  Wind,
  Droplets,
  Recycle,
  Tree
} from 'lucide-react';

export default function AIGreenTechnology() {
  const features = [
    {
      icon: Leaf,
      title: 'Green Energy Optimization',
      description: 'AI algorithms for renewable energy production, storage, and distribution optimization'
    },
    {
      icon: Globe,
      title: 'Environmental Monitoring',
      description: 'Real-time AI monitoring of air quality, water resources, and ecosystem health'
    },
    {
      icon: Recycle,
      title: 'Waste Management AI',
      description: 'Intelligent waste sorting, recycling optimization, and circular economy solutions'
    },
    {
      icon: Brain,
      title: 'Climate Prediction Models',
      description: 'Advanced AI models for climate change forecasting and impact assessment'
    },
    {
      icon: Target,
      title: 'Carbon Footprint Tracking',
      description: 'AI-powered carbon accounting and reduction strategies for businesses'
    },
    {
      icon: Shield,
      title: 'Sustainable Supply Chain',
      description: 'AI-driven supply chain optimization for environmental and social responsibility'
    }
  ];

  const benefits = [
    'Reduced environmental impact and carbon emissions',
    'Optimized resource utilization and efficiency',
    'Predictive maintenance for green infrastructure',
    'Automated sustainability reporting and compliance',
    'Enhanced renewable energy integration',
    'Improved circular economy practices'
  ];

  const useCases = [
    {
      title: 'Renewable Energy Management',
      description: 'AI-powered optimization of solar, wind, and hydroelectric energy systems for maximum efficiency and grid stability'
    },
    {
      title: 'Smart Cities & Buildings',
      description: 'Intelligent building management systems that optimize energy consumption, water usage, and waste management'
    },
    {
      title: 'Agriculture & Food Systems',
      description: 'AI-driven precision agriculture, sustainable farming practices, and food waste reduction solutions'
    },
    {
      title: 'Manufacturing & Industry',
      description: 'Green manufacturing processes, energy-efficient production, and sustainable material management'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$699',
      period: '/month',
      description: 'Basic AI green technology platform for small organizations',
      features: [
        'Environmental monitoring dashboard',
        'Basic sustainability analytics',
        'Email support',
        'Standard reporting tools'
      ]
    },
    {
      name: 'Professional',
      price: '$1,399',
      period: '/month',
      description: 'Advanced AI platform for medium-scale sustainability initiatives',
      features: [
        'Advanced AI algorithms',
        'Real-time monitoring',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,499',
      period: '/month',
      description: 'Full-scale AI green technology solution for large operations',
      features: [
        'Custom AI models',
        '24/7 dedicated support',
        'White-label solutions',
        'Advanced security',
        'Custom development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI Green Technology Platform - Zion Tech Group"
        description="Revolutionary AI-powered green technology solutions for environmental protection, renewable energy, and sustainable innovation. Advanced machine learning for a greener future."
        keywords="AI green technology, green AI, renewable energy AI, environmental monitoring, climate AI, sustainable innovation"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-teal-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Green Technology
            </h1>
            <p className="text-xl text-green-200 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of environmental sustainability with cutting-edge AI technology. 
              From renewable energy optimization to climate prediction, our platform drives green innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-futuristic text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="btn-futuristic-outline text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Green Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with environmental expertise 
              to deliver unprecedented capabilities in sustainability and green technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Green Technology?
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Experience the future of environmental sustainability with our AI-powered platform that delivers 
              unprecedented efficiency, accuracy, and positive environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI green technology platform is transforming industries and enabling new possibilities 
              in environmental protection and green innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your AI Green Technology Plan
            </h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your sustainability initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-futuristic">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
               Join the green technology revolution with our AI-powered platform. 
               Contact us today to learn how we can help you achieve your sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic-outline text-lg px-8 py-4 bg-white text-green-600 hover:bg-green-50">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
              <button className="btn-futuristic text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to explore the future of sustainable technology? Our team of experts 
                is here to help you build a greener, more sustainable future with AI.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your sustainability goals"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-futuristic">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}