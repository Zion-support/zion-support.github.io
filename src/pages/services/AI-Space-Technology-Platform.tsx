import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  Shield, 
  Database, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lock,
  Network,
  BarChart3,
  Code,
  Server,
  Chip,
  Atom,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Navigation,
  Telescope,
  Planet,
  Orbit,
  Signal,
  Wifi
} from 'lucide-react';

const AISpaceTechnologyPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Satellite,
      title: 'Advanced Satellite Technology',
      description: 'Next-generation satellite systems with AI-powered autonomous operations'
    },
    {
      icon: Navigation,
      title: 'Precision Navigation Systems',
      description: 'AI-enhanced GPS and navigation for space and terrestrial applications'
    },
    {
      icon: Telescope,
      title: 'Space Observation & Analytics',
      description: 'Real-time space data collection and AI-powered analysis'
    },
    {
      icon: Signal,
      title: 'Quantum Communication Networks',
      description: 'Secure space-based communication using quantum encryption'
    },
    {
      icon: Planet,
      title: 'Planetary Exploration AI',
      description: 'Autonomous robots and AI systems for space exploration'
    },
    {
      icon: Orbit,
      title: 'Orbital Optimization',
      description: 'AI algorithms for optimal satellite positioning and trajectory planning'
    }
  ];

  const useCases = [
    {
      title: 'Satellite Communications',
      description: 'High-speed internet and communication services from space',
      icon: Wifi
    },
    {
      title: 'Earth Observation',
      description: 'Climate monitoring, agriculture, and disaster response',
      icon: Globe
    },
    {
      title: 'Space Mining',
      description: 'AI-powered asteroid mining and resource extraction',
      icon: Rocket
    },
    {
      title: 'Space Tourism',
      description: 'Safe and efficient space travel experiences',
      icon: Users
    },
    {
      title: 'Scientific Research',
      description: 'Advanced research platforms for space science',
      icon: Telescope
    },
    {
      title: 'Defense & Security',
      description: 'Space-based security and surveillance systems',
      icon: Shield
    }
  ];

  const pricing = [
    {
      plan: 'Explorer',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for research institutions and space startups',
      features: [
        'Basic satellite data access',
        'Standard AI analytics',
        'Community support',
        '10GB data transfer/month',
        'Basic security protocols',
        'API access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Pioneer',
      price: '$12,500',
      period: '/month',
      description: 'Ideal for growing space companies and research teams',
      features: [
        'Advanced satellite capabilities',
        'Full AI integration suite',
        'Priority support',
        '100GB data transfer/month',
        'Advanced security protocols',
        'Custom algorithm development',
        'Real-time monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$45,000',
      period: '/month',
      description: 'For large organizations requiring maximum space capabilities',
      features: [
        'Unlimited satellite access',
        'Custom AI model development',
        '24/7 dedicated support',
        'Unlimited data transfer',
        'Military-grade security',
        'Custom infrastructure setup',
        'On-site consultation',
        'Exclusive space missions'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Space Innovation',
      description: 'Access to cutting-edge space technology and AI systems'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide satellite coverage and communication networks'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Military-grade security protocols for space operations'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Edge',
      description: 'Stay ahead with revolutionary space technology solutions'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Prepare for the next generation of space exploration'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated space technology specialists and AI experts'
    }
  ];

  const technologies = [
    {
      name: 'Quantum Satellites',
      description: 'Next-generation quantum communication satellites',
      icon: Satellite
    },
    {
      name: 'AI Navigation',
      description: 'Autonomous navigation systems for space vehicles',
      icon: Navigation
    },
    {
      name: 'Space Robotics',
      description: 'AI-powered robots for space exploration and maintenance',
      icon: Rocket
    },
    {
      name: 'Orbital Networks',
      description: 'Advanced satellite constellation management',
      icon: Network
    },
    {
      name: 'Space Analytics',
      description: 'Real-time data analysis from space sensors',
      icon: BarChart3
    },
    {
      name: 'Planetary AI',
      description: 'Intelligent systems for planetary exploration',
      icon: Planet
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Space Technology Platform
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
                Revolutionize space exploration and satellite technology with our cutting-edge 
                AI-powered space platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                  <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <div className="w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Space Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of space technology with our cutting-edge AI platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Space Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered space technology can revolutionize your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Space Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the most advanced space technologies available
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Space Technology Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to meet your space technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-600 to-blue-700 text-white shadow-2xl scale-105' 
                    : 'bg-white border-2 border-slate-200 hover:border-purple-300'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.plan}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`ml-2 text-lg ${
                      plan.popular ? 'text-purple-100' : 'text-gray-600'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`mt-2 ${
                    plan.popular ? 'text-purple-100' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 ${
                        plan.popular ? 'text-green-400' : 'text-green-500'
                      }`} />
                      <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Space Technology Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of the most advanced space technology solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore the Final Frontier?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the space revolution and transform your operations with AI-powered space technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your space technology needs? Contact our experts today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-purple-600 font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-purple-600 font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-purple-600 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceTechnologyPlatform;