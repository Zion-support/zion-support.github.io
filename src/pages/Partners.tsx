import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  Zap, 
  Building2,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Rocket
} from 'lucide-react';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const partnerCategories = [
    { id: 'all', name: 'All Partners', count: 25 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'consulting', name: 'Consulting', count: 6 },
    { id: 'enterprise', name: 'Enterprise', count: 7 },
    { id: 'startup', name: 'Startup', count: 4 }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term collaborations to drive mutual growth and innovation.',
      benefits: [
        'Joint go-to-market strategies',
        'Shared technology development',
        'Co-marketing opportunities',
        'Revenue sharing models'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partnerships',
      description: 'Reseller and referral partnerships to expand market reach.',
      benefits: [
        'Reseller certification programs',
        'Marketing support and materials',
        'Technical training and enablement',
        'Competitive pricing and margins'
      ]
    },
    {
      icon: Building2,
      title: 'Technology Alliances',
      description: 'Integration partnerships to enhance product capabilities.',
      benefits: [
        'API access and documentation',
        'Joint product development',
        'Technical support collaboration',
        'Co-innovation initiatives'
      ]
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Partnerships to enter new markets and regions.',
      benefits: [
        'Local market expertise',
        'Regulatory compliance support',
        'Cultural adaptation guidance',
        'Local customer relationships'
      ]
    }
  ];

  const featuredPartners = [
    {
      name: 'Microsoft',
      category: 'technology',
      logo: 'MS',
      description: 'Strategic cloud and AI partnership for enterprise solutions.',
      rating: 5,
      partnershipYears: 3,
      jointProjects: 12
    },
    {
      name: 'AWS',
      category: 'technology',
      logo: 'AWS',
      description: 'Cloud infrastructure and AI services collaboration.',
      rating: 5,
      partnershipYears: 4,
      jointProjects: 18
    },
    {
      name: 'Deloitte',
      category: 'consulting',
      logo: 'DT',
      description: 'Digital transformation consulting and implementation.',
      rating: 5,
      partnershipYears: 2,
      jointProjects: 8
    },
    {
      name: 'Salesforce',
      category: 'technology',
      logo: 'SF',
      description: 'CRM integration and business process automation.',
      rating: 4,
      partnershipYears: 2,
      jointProjects: 6
    },
    {
      name: 'McKinsey',
      category: 'consulting',
      logo: 'MK',
      description: 'Strategic consulting and change management.',
      rating: 5,
      partnershipYears: 1,
      jointProjects: 4
    },
    {
      name: 'Oracle',
      category: 'technology',
      logo: 'OR',
      description: 'Enterprise database and cloud solutions.',
      rating: 4,
      partnershipYears: 3,
      jointProjects: 10
    }
  ];

  const partnershipBenefits = [
    {
      icon: Zap,
      title: 'Accelerated Growth',
      description: 'Leverage our combined strengths to scale faster and reach new markets.'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share resources and expertise to reduce project risks and costs.'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Opportunities',
      description: 'Access new revenue streams through joint solutions and referrals.'
    },
    {
      icon: Rocket,
      title: 'Innovation Boost',
      description: 'Collaborate on cutting-edge technologies and breakthrough solutions.'
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? featuredPartners 
    : featuredPartners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join forces with Zion Tech Group to create innovative solutions, 
              expand market reach, and drive mutual success in the digital transformation era.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#partnership-opportunities"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Explore Opportunities
              </a>
              <a
                href="#become-partner"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Become a Partner
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-opportunities" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Models</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the partnership model that best fits your business goals and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet some of our strategic partners who are helping us transform industries worldwide.
            </p>
          </motion.div>

          {/* Partner Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {partner.logo}
                  </div>
                  <div className="flex items-center">
                    {[...Array(partner.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{partner.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Partnership:</span>
                    <span className="text-cyan-400">{partner.partnershipYears} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Joint Projects:</span>
                    <span className="text-purple-400">{partner.jointProjects}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
                  View Partnership
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group and how we can help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our streamlined process makes it easy to establish and grow our partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Discussion',
                description: 'Schedule a meeting to discuss partnership opportunities and mutual goals.'
              },
              {
                step: '2',
                title: 'Proposal Development',
                description: 'We create a customized partnership proposal tailored to your needs.'
              },
              {
                step: '3',
                title: 'Agreement & Onboarding',
                description: 'Finalize terms and begin the partnership onboarding process.'
              },
              {
                step: '4',
                title: 'Growth & Success',
                description: 'Collaborate on joint initiatives and scale the partnership together.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="become-partner" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600/50"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to create innovative solutions 
              and drive mutual success in the digital transformation landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Partnerships Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
