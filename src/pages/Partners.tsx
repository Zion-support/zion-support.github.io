import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Award, 
  Globe, 
  Users, 
  Star, 
  CheckCircle,
  ArrowRight,
  Building,
  Shield,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Cloud & AI',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud services and AI solutions.',
      benefits: ['Azure Credits', 'Technical Support', 'Co-marketing']
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Infrastructure',
      logo: '/images/partners/aws.png',
      description: 'Premier AWS partner delivering scalable cloud solutions.',
      benefits: ['AWS Credits', 'Training Programs', 'Certification Support']
    },
    {
      name: 'Google Cloud',
      category: 'AI & Analytics',
      logo: '/images/partners/google.png',
      description: 'Google Cloud partner specializing in AI and data analytics.',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Technical Expertise']
    },
    {
      name: 'IBM',
      category: 'Enterprise Solutions',
      logo: '/images/partners/ibm.png',
      description: 'IBM partner for enterprise AI and quantum computing solutions.',
      benefits: ['Watson AI', 'Quantum Access', 'Enterprise Support']
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Access to enterprise-grade security tools and compliance frameworks.'
    },
    {
      icon: Zap,
      title: 'Priority Support',
      description: 'Get priority technical support and faster issue resolution.'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Optimized pricing and credits to reduce your technology costs.'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Strategic alliances with leading technology providers',
      icon: Building,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Solution Partners',
      description: 'Collaborative partnerships for integrated solutions',
      icon: Handshake,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Channel Partners',
      description: 'Distribution and reseller partnerships',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Integration Partners',
      description: 'Specialized integration and implementation services',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Strategic Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We work with industry-leading technology partners to deliver the best solutions 
              and services to our clients. Our partnerships enable us to provide cutting-edge 
              technology and exceptional support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technology Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading technology providers to deliver exceptional solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Building className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{partner.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Benefits:</h4>
                    {partner.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partnership Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different types of partnerships to meet various business needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships provide significant advantages for our clients and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our network of strategic partners and unlock new opportunities for growth 
              and collaboration. Let's work together to deliver exceptional solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                Partner With Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;