import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Planet,
  Star,
  Orbit,
  Signal,
  Database,
  Shield,
  Clock,
  DollarSign,
  Award,
  Monitor,
  Smartphone,
  Cloud,
  Activity,
  Target,
  Lightbulb,
  Gauge,
  Telescope,
  Antenna,
  Navigation,
  Radar
} from 'lucide-react';

export default function SpaceTech() {
  const features = [
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Advanced satellite systems for communication, navigation, and Earth observation',
      benefits: ['High-speed data transmission', 'Global coverage', 'Real-time monitoring', 'Low-latency communication']
    },
    {
      icon: Globe,
      title: 'Earth Observation',
      description: 'AI-powered satellite imagery analysis for environmental and commercial applications',
      benefits: ['Climate monitoring', 'Agricultural insights', 'Urban planning', 'Disaster response']
    },
    {
      icon: Signal,
      title: 'Space Communications',
      description: 'Next-generation space-based communication networks and infrastructure',
      benefits: ['Global connectivity', 'High bandwidth', 'Low latency', 'Reliable transmission']
    },
    {
      icon: Rocket,
      title: 'Space Infrastructure',
      description: 'Comprehensive space infrastructure solutions for commercial and government applications',
      benefits: ['Launch services', 'Orbital platforms', 'Space stations', 'Deep space exploration']
    }
  ];

  const solutions = [
    {
      title: 'Satellite Constellation Management',
      description: 'AI-powered management of large satellite constellations for optimal performance',
      icon: Orbit,
      features: ['Orbital optimization', 'Collision avoidance', 'Power management', 'Data routing']
    },
    {
      title: 'Space Data Analytics',
      description: 'Advanced analytics platform for processing and analyzing space-based data',
      icon: Database,
      features: ['Real-time processing', 'Machine learning', 'Predictive analytics', 'Data visualization']
    },
    {
      title: 'Space Security Systems',
      description: 'Comprehensive security solutions for space assets and communications',
      icon: Shield,
      features: ['Cyber protection', 'Signal encryption', 'Threat detection', 'Incident response']
    },
    {
      title: 'Space Tourism Platforms',
      description: 'Digital platforms for space tourism and commercial space travel',
      icon: Rocket,
      features: ['Booking systems', 'Training programs', 'Safety protocols', 'Experience management']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$5,000',
      period: '/month',
      description: 'Basic space technology solutions for small organizations',
      features: [
        'Satellite data access (up to 100GB/month)',
        'Basic Earth observation',
        'Standard API access',
        'Email support',
        'Basic integrations',
        'Monthly reports'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: '/month',
      description: 'Advanced space technology for growing organizations',
      features: [
        'Unlimited satellite data access',
        'Advanced Earth observation',
        'AI-powered analytics',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'Space security features',
        'SLA guarantee'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive space technology solutions for large organizations',
      features: [
        'Full space technology suite',
        'Custom satellite solutions',
        'Multi-constellation support',
        'Dedicated infrastructure',
        '24/7 dedicated support',
        'Custom analytics and reporting',
        'White-label solutions',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const marketInfo = {
    marketSize: '$469.8 billion',
    growthRate: '6.2% CAGR',
    averageMarketPrice: '$10,000-$50,000/month',
    setupTime: '4-8 weeks',
    roi: '500-800% within 24 months'
  };

  const applications = [
    {
      title: 'Telecommunications',
      description: 'Global satellite communications and internet services',
      icon: Signal
    },
    {
      title: 'Navigation',
      description: 'GPS and satellite navigation systems',
      icon: Navigation
    },
    {
      title: 'Earth Observation',
      description: 'Environmental monitoring and climate research',
      icon: Globe
    },
    {
      title: 'Space Exploration',
      description: 'Deep space missions and planetary exploration',
      icon: Rocket
    }
  ];

  const technologies = [
    'CubeSat Technology',
    'Small Satellite Platforms',
    'Space-Based IoT',
    'Quantum Communications',
    'Advanced Propulsion',
    'Space Debris Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Space Technology Solutions - Zion Tech Group"
        description="Advanced space technology solutions including satellite systems, Earth observation, space communications, and space infrastructure. Cutting-edge space technology for commercial and government applications."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Next-Generation Space Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Space
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneer the future of space technology with our advanced satellite systems, 
              Earth observation platforms, and space infrastructure solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {Object.entries(marketInfo).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-purple-400 mb-2">{value}</div>
                <div className="text-sm text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Technology Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space technology solutions power critical applications across 
              telecommunications, navigation, Earth observation, and space exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{app.title}</h3>
                <p className="text-gray-400 text-sm">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Space Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our space technology solutions leverage cutting-edge innovations 
              to provide reliable, scalable, and efficient space-based services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Space Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From satellite constellation management to space tourism platforms, 
              our solutions cover every aspect of modern space technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                    <p className="text-gray-400 text-sm">{solution.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Space Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest advancements in space technology to deliver 
              innovative solutions for the next generation of space exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Space Technology Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the space technology solution that best fits your organization's needs. 
              All plans include advanced satellite technology and space infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                  plan.popular 
                    ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore the Final Frontier?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations that are already leveraging advanced space technology 
              to drive innovation and expand human capabilities beyond Earth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Space Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
