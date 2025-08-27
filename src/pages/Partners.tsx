import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Handshake, 
  Globe, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Cloud,
  Lock,
  Rocket,
  Star
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Partners() {
  const partners = [
    {
      name: 'Microsoft Azure',
      logo: '🔵',
      category: 'Cloud Platform',
      description: 'Strategic cloud infrastructure partner providing enterprise-grade solutions.',
      benefits: ['Azure credits', 'Technical support', 'Joint go-to-market']
    },
    {
      name: 'AWS',
      logo: '🟠',
      category: 'Cloud Services',
      description: 'Leading cloud provider for scalable and reliable infrastructure.',
      benefits: ['AWS credits', 'Architecture guidance', 'Marketplace integration']
    },
    {
      name: 'Google Cloud',
      logo: '🔴',
      category: 'AI & ML Platform',
      description: 'Advanced AI and machine learning capabilities for enterprise solutions.',
      benefits: ['GCP credits', 'AI/ML expertise', 'Innovation labs access']
    },
    {
      name: 'Cisco',
      logo: '🔵',
      category: 'Networking',
      description: 'Enterprise networking and security solutions for modern businesses.',
      benefits: ['Certification programs', 'Technical training', 'Partner support']
    },
    {
      name: 'Dell Technologies',
      logo: '🔵',
      category: 'Hardware & Infrastructure',
      description: 'End-to-end technology solutions for enterprise transformation.',
      benefits: ['Hardware discounts', 'Technical expertise', 'Joint solutions']
    },
    {
      name: 'Intel',
      logo: '🔵',
      category: 'Processor Technology',
      description: 'Leading processor technology for AI and high-performance computing.',
      benefits: ['Early access programs', 'Technical resources', 'Innovation support']
    }
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partner',
      icon: Star,
      description: 'Deep integration and joint go-to-market initiatives',
      benefits: [
        'Dedicated partner manager',
        'Joint marketing campaigns',
        'Revenue sharing programs',
        'Early access to new features',
        'Co-innovation projects'
      ]
    },
    {
      name: 'Gold Partner',
      icon: Award,
      description: 'Strong collaboration with enhanced support and resources',
      benefits: [
        'Enhanced technical support',
        'Marketing development funds',
        'Training and certification',
        'Joint customer events',
        'Solution development support'
      ]
    },
    {
      name: 'Silver Partner',
      icon: TrendingUp,
      description: 'Growing partnership with foundational support',
      benefits: [
        'Basic technical support',
        'Partner portal access',
        'Training resources',
        'Marketing materials',
        'Lead generation support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our network of technology partners and unlock new opportunities for growth, innovation, and market expansion."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our network of technology leaders and unlock new opportunities for growth, 
              innovation, and market expansion in the digital transformation landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Become a Partner
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Partnership Tiers
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Partner With Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive support, resources, and opportunities to help our partners 
              succeed in the rapidly evolving technology landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expanded Market Reach',
                description: 'Access our extensive customer base and market presence across multiple industries.'
              },
              {
                icon: Handshake,
                title: 'Joint Go-to-Market',
                description: 'Collaborate on marketing campaigns, events, and customer acquisition strategies.'
              },
              {
                icon: Globe,
                title: 'Global Presence',
                description: 'Leverage our international network and local market expertise.'
              },
              {
                icon: Award,
                title: 'Recognition & Rewards',
                description: 'Earn rewards, certifications, and recognition for your partnership achievements.'
              },
              {
                icon: TrendingUp,
                title: 'Revenue Growth',
                description: 'Increase your revenue through joint solutions and referral programs.'
              },
              {
                icon: Shield,
                title: 'Technical Support',
                description: 'Access our technical expertise and resources to enhance your solutions.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and growth objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  index === 0 
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                    : 'border-slate-700/50 hover:border-cyan-400/50'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    index === 0 
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-500' 
                      : 'bg-gradient-to-br from-slate-600 to-slate-700'
                  }`}>
                    <tier.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <Zap className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  {index === 0 ? 'Apply Now' : 'Learn More'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders who share our vision for 
              innovation and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                    {partner.category}
                  </span>
                </div>
                <p className="text-gray-300 text-center mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <Rocket className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Partner Network?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's explore how we can work together to drive innovation, 
              expand market reach, and deliver exceptional value to customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-105">
                Start Partnership Discussion
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Download Partner Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
