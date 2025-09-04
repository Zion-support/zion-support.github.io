import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building, Brain, Zap, Car, Leaf, Shield, Globe, 
  CheckCircle, Star, Target, BarChart3, Camera,
  Phone, Mail, MapPin, Users, Clock, Smartphone
} from 'lucide-react';

const AISmartCityManagement = (props: any) => {
  const features = [
    {
      icon: Ca r,
      title: 'Intelligent Traffic Management',
      description: 'AI-powered traffic optimization reducing congestion by up to 40% and emergency response times by 60%.',
      benefits: ['Real-time traffic optimization', 'Predictive congestion analysis', 'Emergency vehicle priority routing']
    },
    {
      icon: Za p,
      title: 'Smart Energy Grid',
      description: 'Optimize city-wide energy consumption with predictive analytics and renewable energy integration.',
      benefits: ['30% energy cost reduction', 'Renewable energy optimization', 'Predictive maintenance']
    },
    {
      icon: Lea f,
      title: 'Environmental Monitoring',
      description: 'Real-time air quality, noise, and environmental data with predictive pollution modeling.',
      benefits: ['Real-time pollution tracking', 'Health impact predictions', 'Environmental compliance']
    },
    {
      icon: Shiel d,
      title: 'Public Safety AI',
      description: 'Intelligent surveillance and predictive policing to enhance public safety and security.',
      benefits: ['Crime prediction models', 'Automated incident detection', 'Emergency response optimization']
    },
    {
      icon: Buildin g,
      title: 'Smart Infrastructure',
      description: 'IoT-enabled infrastructure monitoring with predictive maintenance and optimization.',
      benefits: ['Predictive maintenance', 'Infrastructure health monitoring', 'Cost optimization']
    },
    {
      icon: User s,
      title: 'Citizen Engagement Platform',
      description: 'AI-powered citizen services with chatbots, service requests, and satisfaction tracking.',
      benefits: ['24/7 citizen services', 'Automated service routing', 'Satisfaction analytics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Smart District',
      price: '$49,999',
      period: '/month',
      description: 'Perfect for small districts and neighborhoods',
      features: [
        'Up to 50,000 residents',
        'Basic traffic management',
        'Energy monitoring',
        'Citizen service portal',
        'Monthly reports',
        'Email support',
        '99.5% uptime SLA'
      ],
      popular: fals e
    },
    {
      name: 'Smart City Pro',
      price: '$199,999',
      period: '/month',
      description: 'Comprehensive solution for mid-size cities',
      features: [
        'Up to 500,000 residents',
        'Advanced AI traffic optimization',
        'Smart energy grid management',
        'Environmental monitoring',
        'Public safety analytics',
        'Real-time dashboards',
        'Priority support',
        '99.9% uptime SLA'
      ],
      popular: tru e
    },
    {
      name: 'Metropolis Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for major metropolitan areas',
      features: [
        'Unlimited population',
        'Full AI suite deployment',
        'Custom integrations',
        'Dedicated infrastructure',
        'Predictive analytics',
        '24/7 dedicated support',
        'On-site implementation',
        '99.99% uptime SLA',
        'Government compliance',
        'Multi-language support'
      ],
      popular: fals e
    }
  ];

  const caseStudies = [
    {
      city: 'Barcelona, Spain',
      population: '1.6M',
      improvement: '35% traffic reduction',
      description: 'Implemented comprehensive smart city solution reducing traffic congestion and improving air quality.',
      metrics: ['35% less traffic congestion', '25% energy savings', '40% faster emergency response']
    },
    {
      city: 'Singapore',
      population: '5.9M',
      improvement: '45% energy savings',
      description: 'Smart energy grid optimization and predictive maintenance across the city-state.',
      metrics: ['45% energy cost reduction', '60% fewer power outages', '30% lower carbon emissions']
    }
  ];

  const stats = [
    { label: 'Cities Transformed', value: '150+', icon: Buildin g },
    { label: 'Average Traffic Reduction', value: '40%', icon: Ca r },
    { label: 'Energy Savings', value: '35%', icon: Za p },
    { label: 'Emergency Response Improvement', value: '60%', icon: Shiel d }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                <Building className="w-10 h-10 text-white"  />
              </div>
            </div>
            
            <h1 className="text-5xl md: tex t-7xl font-bold text-white mb-6">
              AI Smart City
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Management
              </span>
            </h1>
            
            <p className="text-xl md: tex t-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your city into an intelligent, sustainable, and efficient urban environment 
              with our comprehensive AI-powered smart city management platform.
            </p>
            
            <div className="flex flex-col sm: fle x-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover: fro m-blue-600 hover: t o-cyan-600 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover: shado w-xl"
              >
                Transform Your City
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover: b g-blue-500 hover: tex t-white transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 2 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: inde x * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
                      <stat.icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Comprehensive Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of city management optimized with artificial intelligence
            </p>
          </motion.div>

          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover: borde r-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how cities around the world have transformed with our solutions
            </p>
          </motion.div>

          <div className="grid md: gri d-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.city}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.city}</h3>
                    <p className="text-gray-400">Population: {study.population}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{study.improvement}</div>
                    <div className="text-sm text-gray-400">Key Improvement</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Scalable Pricing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your city size and requirements
            </p>
          </motion.div>

          <div className="grid md: gri d-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 2 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: tru e }}
                transition={{ duration: 0.5, delay: inde x * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-white/20 hover: borde r-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover: fro m-blue-600 hover: t o-cyan-600'
                      : 'border-2 border-blue-500 text-blue-400 hover: b g-blue-500 hover: tex t-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: tru e }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md: tex t-5xl font-bold text-white mb-6">
              Ready to Build Your Smart City?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the global movement towards intelligent urban environments. Transform your city today.
            </p>
            
            <div className="flex flex-col sm: fle x-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover: b g-gray-100 transition-all duration-200 transform hover:-translate-y-1"
              >
                Start Your Transformation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover: b g-white hover: tex t-blue-900 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md: gri d-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5"  />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5"  />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5"  />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCityManagement;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>