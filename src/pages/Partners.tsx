import React from 'react';
import { motion } from 'framer-motion';
import {
  Handshake,
  Users,
  Building,
  Globe,
  Star,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide cutting-edge solutions and infrastructure',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Access to latest tech', 'Joint R&D projects', 'Market expansion']
    },
    {
      title: 'Solution Partners',
      description: 'Specialized solution providers that complement our service offerings',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
      benefits: ['Integrated solutions', 'Shared expertise', 'Co-marketing opportunities']
    },
    {
      title: 'Channel Partners',
      description: 'Resellers and distributors that help us reach new markets and customers',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      benefits: ['Market reach', 'Local expertise', 'Revenue sharing']
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic relationships that drive mutual growth and innovation',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      benefits: ['Strategic alignment', 'Innovation focus', 'Long-term growth']
    }
  ];

  const currentPartners = [
    {
      name: 'TechCorp Solutions',
      type: 'Technology Partner',
      logo: '/partners/techcorp.png',
      description: 'Leading provider of cloud infrastructure and AI platforms'
    },
    {
      name: 'SecureNet Systems',
      type: 'Solution Partner',
      logo: '/partners/securenet.png',
      description: 'Cybersecurity solutions and compliance expertise'
    },
    {
      name: 'GlobalTech Distribution',
      type: 'Channel Partner',
      logo: '/partners/globaltech.png',
      description: 'International distribution and market access'
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through our partner network'
    },
    {
      icon: Users,
      title: 'Market Expansion',
      description: 'Leverage our global presence and established customer relationships'
    },
    {
      icon: Zap,
      title: 'Technology Access',
      description: 'Get early access to cutting-edge AI and quantum computing solutions'
    },
    {
      icon: Award,
      title: 'Brand Recognition',
      description: 'Associate with a recognized leader in AI and technology innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic partnerships that drive innovation and deliver exceptional
            value to our clients
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Current Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{partner.type}</p>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology partners and grow your business with cutting-edge AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Become a Partner
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
