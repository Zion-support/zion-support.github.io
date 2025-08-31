import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Users,
  Globe,
  Award,
  ArrowRight,
  Building2,
  Shield,
  Cloud,
  Brain,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Mail,
  Phone
} from 'lucide-react';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnerCategories = [
    { id: 'all', name: 'All Partners', icon: Handshake },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'consulting', name: 'Consulting', icon: Users },
    { id: 'enterprise', name: 'Enterprise', icon: Building2 }
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft Azure',
      category: 'cloud',
      logo: '🔵',
      description: 'Strategic cloud infrastructure partner providing scalable Azure solutions.',
      partnership: 'Strategic Alliance',
      benefits: [
        'Azure cloud credits and discounts',
        'Joint go-to-market initiatives',
        'Technical training and certification',
        'Early access to new Azure features'
      ],
      tier: 'Platinum'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      category: 'cloud',
      logo: '🟠',
      description: 'Leading cloud services partner for enterprise-grade infrastructure solutions.',
      partnership: 'Advanced Consulting Partner',
      benefits: [
        'AWS solution architect support',
        'Joint customer success programs',
        'Technical enablement resources',
        'Market development funds'
      ],
      tier: 'Gold'
    },
    {
      id: 3,
      name: 'Google Cloud Platform',
      category: 'cloud',
      logo: '🔴',
      description: 'Innovative cloud partner for AI and machine learning solutions.',
      partnership: 'Technology Partner',
      benefits: [
        'GCP technical expertise',
        'AI/ML solution development',
        'Joint innovation labs',
        'Customer referral programs'
      ],
      tier: 'Silver'
    },
    {
      id: 4,
      name: 'Cisco Systems',
      category: 'technology',
      logo: '🔵',
      description: 'Networking and security partner for enterprise infrastructure.',
      partnership: 'Technology Alliance',
      benefits: [
        'Cisco certification programs',
        'Joint security solutions',
        'Technical support and training',
        'Market development initiatives'
      ],
      tier: 'Gold'
    },
    {
      id: 5,
      name: 'IBM',
      category: 'technology',
      logo: '🔵',
      description: 'Enterprise technology partner for AI and quantum computing solutions.',
      partnership: 'Strategic Partner',
      benefits: [
        'IBM Watson AI platform access',
        'Quantum computing expertise',
        'Enterprise sales support',
        'Joint research initiatives'
      ],
      tier: 'Platinum'
    },
    {
      id: 6,
      name: 'Deloitte',
      category: 'consulting',
      logo: '🟢',
      description: 'Global consulting partner for digital transformation projects.',
      partnership: 'Strategic Alliance',
      benefits: [
        'Joint client engagements',
        'Digital transformation expertise',
        'Global delivery capabilities',
        'Industry thought leadership'
      ],
      tier: 'Platinum'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      color: 'from-purple-500 to-pink-600',
      benefits: [
        'Highest level of support and resources',
        'Exclusive market development funds',
        'Priority technical assistance',
        'Joint innovation programs',
        'Executive relationship management'
      ],
      requirements: [
        'Annual revenue commitment: $5M+',
        'Certified technical expertise',
        'Joint go-to-market strategy',
        'Customer success stories'
      ]
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'Enhanced support and resources',
        'Market development funds',
        'Technical enablement programs',
        'Joint marketing initiatives',
        'Dedicated partner manager'
      ],
      requirements: [
        'Annual revenue commitment: $2M+',
        'Technical certifications',
        'Customer references',
        'Regular business reviews'
      ]
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Standard support and resources',
        'Training and certification access',
        'Marketing materials and tools',
        'Partner portal access',
        'Basic technical support'
      ],
      requirements: [
        'Annual revenue commitment: $500K+',
        'Basic technical training',
        'Customer engagement',
        'Quarterly business reviews'
      ]
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Technology Partnerships',
      description: 'Integrate with leading technology platforms and solutions.',
      benefits: [
        'API access and technical support',
        'Joint solution development',
        'Co-marketing opportunities',
        'Revenue sharing programs'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partnerships',
      description: 'Expand your reach through our global partner network.',
      benefits: [
        'Lead generation and referrals',
        'Joint sales initiatives',
        'Training and certification',
        'Marketing support and materials'
      ]
    },
    {
      icon: Globe,
      title: 'Global Alliances',
      description: 'Partner with us to serve international markets.',
      benefits: [
        'Local market expertise',
        'Regulatory compliance support',
        'Cultural adaptation services',
        'Multi-language support'
      ]
    },
    {
      icon: Award,
      title: 'Innovation Partnerships',
      description: 'Collaborate on cutting-edge research and development.',
      benefits: [
        'Joint R&D initiatives',
        'Patent sharing opportunities',
        'Academic collaborations',
        'Technology transfer programs'
      ]
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our global network of technology partners and unlock new opportunities 
              for growth, innovation, and market expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#partnerships"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Partnerships
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer multiple partnership models to fit your business needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{type.title}</h3>
                <p className="text-gray-400 mb-6 text-center">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that aligns with your business objectives and growth plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">{tier.name[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{tier.name} Partner</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                        <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section id="partnerships" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative technology companies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    partner.tier === 'Platinum' ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' :
                    partner.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white' :
                    'bg-gradient-to-r from-gray-400 to-gray-600 text-white'
                  }`}>
                    {partner.tier}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-400 mb-4">{partner.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-cyan-400">{partner.partnership}</span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {partner.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-400 mb-4">
                No partners found in this category.
              </p>
              <p className="text-gray-500">
                Check back later or contact us to discuss partnership opportunities.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our global network and unlock new opportunities for growth, 
              innovation, and market expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Email Partnerships Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
