import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Building2, 
  Brain, 
  Shield, 
  MapPin, 
  Camera, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Globe, 
  Lock, 
  TrendingUp,
  BarChart3,
  Settings,
  Database,
  Network,
  Smartphone,
  Cloud,
  Leaf,
  Target,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  TrafficCone,
  Lightbulb,
  Car,
  Wifi,
  Battery,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISmartCityPlatform() {
  const features = [
    'Intelligent Traffic Management & Optimization',
    'Smart Energy Grid Management & Distribution',
    'Environmental Monitoring & Air Quality Control',
    'Public Safety & Emergency Response Systems',
    'Smart Parking & Mobility Solutions',
    'Waste Management & Recycling Optimization',
    'Water Management & Conservation Systems',
    'Public Transportation & Route Optimization',
    'Smart Street Lighting & Infrastructure',
    'Citizen Engagement & Digital Services Platform'
  ];

  const benefits = [
    'Reduce traffic congestion by 25-35%',
    'Lower energy consumption by 20-30%',
    'Improve public safety response times by 40%',
    'Reduce operational costs by 30-45%',
    'Enhance citizen satisfaction and engagement',
    'Optimize resource allocation and planning',
    'Real-time monitoring and predictive analytics',
    'Scalable solution for cities of any size'
  ];

  const pricingPlans = [
    {
      name: 'Smart City Starter',
      price: 4999,
      period: 'month',
      description: 'For small cities (50K-200K population)',
      features: [
        'Basic traffic management system',
        'Smart street lighting control',
        'Environmental monitoring',
        'Basic analytics dashboard',
        'Email support',
        'Up to 100 IoT sensors',
        'Basic mobile app for citizens'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Smart City Professional',
      price: 14999,
      period: 'month',
      description: 'For medium cities (200K-1M population)',
      features: [
        'Advanced traffic optimization',
        'Smart energy grid management',
        'Comprehensive environmental monitoring',
        'Advanced analytics & reporting',
        'Priority support',
        'Up to 1000 IoT sensors',
        'Advanced citizen engagement platform',
        'Custom integrations',
        'Training & onboarding'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Smart City Enterprise',
      price: 49999,
      period: 'month',
      description: 'For large cities (1M+ population)',
      features: [
        'Full smart city ecosystem',
        'Custom AI model development',
        'Advanced predictive analytics',
        'Dedicated support team',
        'Custom development',
        'Unlimited IoT sensors',
        'On-site training',
        'SLA guarantees',
        '24/7 monitoring'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Traffic Management',
      description: 'AI-powered traffic flow optimization and congestion reduction',
      icon: TrafficCone,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Energy Management',
      description: 'Smart grid optimization and renewable energy integration',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Public Safety',
      description: 'Emergency response optimization and crime prevention',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Environmental Control',
      description: 'Air quality monitoring and pollution control systems',
      icon: Leaf,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const technologies = [
    {
      name: 'IoT Sensors & Networks',
      description: 'Comprehensive sensor deployment for real-time data collection',
      icon: Wifi,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Edge Computing',
      description: 'Local processing for low-latency decision making',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Machine Learning',
      description: 'AI algorithms for predictive analytics and optimization',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud platform for data storage and processing',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Smart City Platform - Zion Tech Group"
        description="Transform your city into a smart, sustainable, and efficient urban environment with our AI-powered smart city platform. Optimize traffic, energy, and public services."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Smart City Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart City
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your city into a smart, sustainable, and efficient urban environment. 
              Our AI-powered platform optimizes traffic, energy, public services, and citizen engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Comprehensive Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform integrates cutting-edge AI, IoT, and data analytics to create 
              intelligent urban systems that improve quality of life for all citizens.
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
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your City's Future
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented efficiency, sustainability, and citizen satisfaction 
              with our comprehensive smart city platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our smart city platform addresses the most critical urban challenges 
              with intelligent, data-driven solutions.
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
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${useCase.color} mb-4`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on the latest technologies to ensure scalability, security, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
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
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your city's size and requirements. All plans include our core smart city capabilities.
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
                className={`bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border-2 ${
                  plan.popular ? 'border-green-500' : 'border-slate-600'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-300">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/request-quote'}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the City of Tomorrow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the smart city revolution. Contact us today to learn how our AI platform 
              can transform your urban environment and improve the lives of your citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-green-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-8 h-8 text-green-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}