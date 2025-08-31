import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Zap, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Rocket,
  BarChart3,
  Users,
  Lock,
  Lightbulb,
  Cog,
  TrendingUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Artificial Intelligence',
    'Cloud & Infrastructure', 
    'Cybersecurity',
    'Digital Transformation',
    'Data Analytics',
    'Industry-Specific'
  ];

  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced machine learning algorithms and predictive analytics.',
      category: 'Artificial Intelligence',
      icon: Brain,
      features: [
        'Real-time data processing',
        'Predictive modeling',
        'Natural language queries',
        'Automated reporting',
        'Custom AI models'
      ],
      benefits: [
        'Increase decision accuracy by 85%',
        'Reduce analysis time by 70%',
        'Improve forecast precision'
      ],
      industries: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'],
      pricing: 'From $2,999/month',
      popular: true
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions',
      description: 'Leverage quantum computing power for complex optimization problems and advanced cryptography.',
      category: 'Artificial Intelligence',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Hybrid quantum-classical computing',
        'Quantum cryptography',
        'Optimization problems',
        'Research partnerships'
      ],
      benefits: [
        'Solve complex problems exponentially faster',
        'Enhanced security protocols',
        'Breakthrough research capabilities'
      ],
      industries: ['Research', 'Finance', 'Pharmaceuticals', 'Logistics'],
      pricing: 'Custom pricing',
      popular: false
    },
    {
      id: 3,
      title: 'Multi-Cloud Infrastructure',
      description: 'Scalable, secure, and optimized cloud infrastructure across AWS, Azure, and Google Cloud platforms.',
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      features: [
        'Multi-cloud deployment',
        'Auto-scaling infrastructure',
        'Load balancing',
        'Disaster recovery',
        '24/7 monitoring'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        '99.99% uptime guarantee',
        'Seamless scalability'
      ],
      industries: ['E-commerce', 'SaaS', 'Media', 'Gaming'],
      pricing: 'From $1,499/month',
      popular: true
    },
    {
      id: 4,
      title: 'Zero Trust Security Framework',
      description: 'Comprehensive cybersecurity solution with zero trust architecture, advanced threat detection, and compliance.',
      category: 'Cybersecurity',
      icon: Shield,
      features: [
        'Identity verification',
        'Endpoint security',
        'Network segmentation',
        'Threat intelligence',
        'Compliance management'
      ],
      benefits: [
        'Reduce security breaches by 90%',
        'Ensure regulatory compliance',
        'Real-time threat response'
      ],
      industries: ['Banking', 'Government', 'Healthcare', 'Legal'],
      pricing: 'From $999/month',
      popular: false
    },
    {
      id: 5,
      title: 'Digital Transformation Platform',
      description: 'End-to-end digital transformation solution with process automation, AI integration, and change management.',
      category: 'Digital Transformation',
      icon: Rocket,
      features: [
        'Process automation',
        'Legacy system integration',
        'Change management',
        'Training programs',
        'Performance analytics'
      ],
      benefits: [
        'Accelerate transformation by 60%',
        'Improve operational efficiency',
        'Reduce implementation risks'
      ],
      industries: ['Manufacturing', 'Government', 'Education', 'Non-profit'],
      pricing: 'From $5,999/month',
      popular: true
    },
    {
      id: 6,
      title: 'Advanced Data Analytics',
      description: 'Comprehensive data analytics platform with real-time processing, visualization, and machine learning.',
      category: 'Data Analytics',
      icon: BarChart3,
      features: [
        'Real-time data streaming',
        'Interactive dashboards',
        'Machine learning models',
        'Data governance',
        'API integrations'
      ],
      benefits: [
        'Increase data accuracy by 95%',
        'Faster insights delivery',
        'Improved decision making'
      ],
      industries: ['Retail', 'Marketing', 'Sports', 'Research'],
      pricing: 'From $1,999/month',
      popular: false
    },
    {
      id: 7,
      title: 'Smart IoT Platform',
      description: 'Connected device management and analytics platform for IoT ecosystems with edge computing capabilities.',
      category: 'Cloud & Infrastructure',
      icon: Globe,
      features: [
        'Device management',
        'Edge computing',
        'Real-time monitoring',
        'Predictive maintenance',
        'Security protocols'
      ],
      benefits: [
        'Reduce maintenance costs by 50%',
        'Improve device performance',
        'Enhance operational visibility'
      ],
      industries: ['Smart Cities', 'Agriculture', 'Energy', 'Transportation'],
      pricing: 'From $799/month',
      popular: false
    },
    {
      id: 8,
      title: 'AI Customer Experience',
      description: 'Intelligent customer service platform with chatbots, sentiment analysis, and personalization.',
      category: 'Artificial Intelligence',
      icon: Users,
      features: [
        'AI-powered chatbots',
        'Sentiment analysis',
        'Personalization engine',
        'Omnichannel support',
        'Analytics dashboard'
      ],
      benefits: [
        'Improve customer satisfaction by 75%',
        'Reduce support costs by 60%',
        '24/7 customer service'
      ],
      industries: ['E-commerce', 'Banking', 'Telecommunications', 'Travel'],
      pricing: 'From $1,299/month',
      popular: true
    }
  ];

  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory);

  const popularSolutions = solutions.filter(solution => solution.popular);

  return (
    <>
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions including AI, quantum computing, cloud infrastructure, cybersecurity, and digital transformation services."
        keywords="AI solutions, quantum computing, cloud infrastructure, cybersecurity, digital transformation, data analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Comprehensive solutions powered by AI, quantum computing, and cutting-edge technologies to transform your business operations.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Solutions */}
          {selectedCategory === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Popular Solutions
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {popularSolutions.slice(0, 2).map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                    
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300">
                              <TrendingUp className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{solution.pricing}</span>
                        <div className="text-gray-400 text-sm mt-1">
                          Industries: {solution.industries.slice(0, 2).join(', ')}
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Solutions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {selectedCategory === 'All' ? 'All Solutions' : `${selectedCategory} Solutions`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {solution.popular && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm mb-3">
                    {solution.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-lg font-bold text-cyan-400 mb-1">{solution.pricing}</div>
                    <div className="text-gray-400 text-xs">
                      Industries: {solution.industries.slice(0, 2).join(', ')}
                      {solution.industries.length > 2 && '...'}
                    </div>
                  </div>
                  
                  <button className="w-full py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: 'Rapid Implementation',
                  description: 'Deploy solutions 60% faster with our proven methodologies'
                },
                {
                  icon: Cog,
                  title: 'Customizable',
                  description: 'Tailored solutions that adapt to your specific business needs'
                },
                {
                  icon: Lock,
                  title: 'Enterprise Security',
                  description: 'Bank-level security with compliance certifications'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation-Driven',
                  description: 'Cutting-edge technology with continuous updates'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-20 text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Let our experts help you choose the right solution for your specific needs. Schedule a consultation to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
