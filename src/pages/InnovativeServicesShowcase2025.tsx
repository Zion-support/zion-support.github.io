import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const serviceCategories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iot',
      name: 'IoT & Edge Computing',
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = {
    ai: [
      {
        title: 'Autonomous AI Agents',
        description: 'Self-learning AI systems that can handle complex business processes autonomously.',
        features: ['Natural Language Processing', 'Predictive Analytics', 'Automated Decision Making'],
        price: 'Starting at $2,999/month',
        badge: 'Most Popular'
      },
      {
        title: 'AI-Powered Customer Experience',
        description: 'Revolutionary customer service solutions powered by advanced AI.',
        features: ['24/7 Chat Support', 'Sentiment Analysis', 'Personalized Recommendations'],
        price: 'Starting at $1,499/month',
        badge: 'New'
      },
      {
        title: 'Computer Vision Solutions',
        description: 'Advanced image and video analysis for business applications.',
        features: ['Object Detection', 'Facial Recognition', 'Quality Control'],
        price: 'Starting at $2,199/month',
        badge: 'Enterprise'
      }
    ],
    blockchain: [
      {
        title: 'Smart Contract Development',
        description: 'Secure, automated contract execution on blockchain networks.',
        features: ['Multi-chain Support', 'Security Audits', 'Automated Execution'],
        price: 'Starting at $3,499/month',
        badge: 'Featured'
      },
      {
        title: 'DeFi Solutions',
        description: 'Decentralized finance applications for modern businesses.',
        features: ['Yield Farming', 'Liquidity Pools', 'Cross-chain Swaps'],
        price: 'Starting at $4,999/month',
        badge: 'Premium'
      },
      {
        title: 'NFT Marketplace',
        description: 'Complete NFT marketplace solutions with advanced features.',
        features: ['Minting Platform', 'Royalty Management', 'Multi-wallet Support'],
        price: 'Starting at $2,799/month',
        badge: 'Popular'
      }
    ],
    quantum: [
      {
        title: 'Quantum Security',
        description: 'Next-generation encryption using quantum computing principles.',
        features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Unbreakable Encryption'],
        price: 'Starting at $5,999/month',
        badge: 'Cutting Edge'
      },
      {
        title: 'Quantum Machine Learning',
        description: 'AI acceleration through quantum computing algorithms.',
        features: ['Quantum Neural Networks', 'Optimization Algorithms', 'Faster Training'],
        price: 'Starting at $7,999/month',
        badge: 'Revolutionary'
      }
    ],
    iot: [
      {
        title: 'Smart City Solutions',
        description: 'Comprehensive IoT infrastructure for smart city development.',
        features: ['Traffic Management', 'Environmental Monitoring', 'Energy Optimization'],
        price: 'Starting at $9,999/month',
        badge: 'Enterprise'
      },
      {
        title: 'Industrial IoT',
        description: 'Advanced IoT solutions for manufacturing and industrial applications.',
        features: ['Predictive Maintenance', 'Asset Tracking', 'Process Optimization'],
        price: 'Starting at $4,499/month',
        badge: 'Industrial'
      }
    ]
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Industries',
      rating: 5,
      text: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.'
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      rating: 5,
      text: 'The blockchain solutions provided by Zion Tech have revolutionized our financial operations.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'FutureSystems',
      rating: 5,
      text: 'Their quantum computing expertise is unmatched. We\'re seeing incredible performance improvements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Innovation Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our revolutionary services across cutting-edge technology domains
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeTab as keyof typeof services]?.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{service.price}</span>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Innovation?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: '99.9% success rate across all implementations'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'World-class engineers and researchers'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security for all solutions'
              },
              {
                icon: Rocket,
                title: 'Fast Deployment',
                description: 'Rapid implementation and go-live'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;