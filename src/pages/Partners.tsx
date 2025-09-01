import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Users, Building, Globe, Award, Star, CheckCircle, ArrowRight, Zap, Shield, Cloud, Brain, Rocket, Target, TrendingUp, Heart, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide cutting-edge solutions and infrastructure.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      partners: [
        { name: 'Microsoft', logo: '/images/partners/microsoft.svg', description: 'Cloud computing and enterprise solutions' },
        { name: 'Amazon Web Services', logo: '/images/partners/aws.svg', description: 'Cloud infrastructure and AI services' },
        { name: 'Google Cloud', logo: '/images/partners/google-cloud.svg', description: 'Cloud platform and machine learning' },
        { name: 'IBM', logo: '/images/partners/ibm.svg', description: 'AI and enterprise software' }
      ]
    },
    {
      title: 'Consulting Partners',
      description: 'Expert consulting firms that help us deliver comprehensive business solutions.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      partners: [
        { name: 'McKinsey & Company', logo: '/images/partners/mckinsey.svg', description: 'Strategic business consulting' },
        { name: 'Bain & Company', logo: '/images/partners/bain.svg', description: 'Management consulting and strategy' },
        { name: 'Boston Consulting Group', logo: '/images/partners/bcg.svg', description: 'Business strategy and transformation' },
        { name: 'Deloitte', logo: '/images/partners/deloitte.svg', description: 'Technology consulting and advisory' }
      ]
    },
    {
      title: 'Industry Partners',
      description: 'Industry leaders across various sectors who share our vision for digital transformation.',
      icon: Building,
      color: 'from-green-500 to-blue-500',
      partners: [
        { name: 'General Electric', logo: '/images/partners/ge.svg', description: 'Industrial digital transformation' },
        { name: 'Siemens', logo: '/images/partners/siemens.svg', description: 'Smart manufacturing and IoT' },
        { name: 'Johnson & Johnson', logo: '/images/partners/jnj.svg', description: 'Healthcare innovation and technology' },
        { name: 'JPMorgan Chase', logo: '/images/partners/jpmorgan.svg', description: 'Financial technology and innovation' }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Access to Latest Technology',
      description: 'Stay ahead with cutting-edge tools and platforms from our technology partners.',
      icon: Rocket
    },
    {
      title: 'Expert Consultation',
      description: 'Leverage specialized expertise from industry-leading consulting partners.',
      icon: Brain
    },
    {
      title: 'Industry Insights',
      description: 'Gain valuable insights and best practices from sector leaders.',
      icon: Target
    },
    {
      title: 'Innovation Collaboration',
      description: 'Collaborate on innovative solutions and research initiatives.',
      icon: TrendingUp
    }
  ];

  const partnershipTypes = [
    {
      title: 'Strategic Partnership',
      description: 'Long-term collaboration on major initiatives and market expansion.',
      features: ['Joint go-to-market strategies', 'Shared technology development', 'Co-marketing opportunities', 'Revenue sharing models'],
      icon: Users
    },
    {
      title: 'Technology Partnership',
      description: 'Integration and co-development of technology solutions.',
      features: ['API integration', 'Joint product development', 'Technical support collaboration', 'Certification programs'],
      icon: Cloud
    },
    {
      title: 'Channel Partnership',
      description: 'Distribution and reseller relationships for mutual growth.',
      features: ['Reseller agreements', 'Training and certification', 'Marketing support', 'Sales enablement'],
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Partners - Zion Tech Group"
        description="Strategic partnerships that drive innovation and deliver exceptional value to our clients."
        keywords="partners, partnerships, technology partners, consulting partners, Zion Tech Group"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-500/20 rounded-full">
              <Users className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Partners
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic partnerships that drive innovation and deliver exceptional
            value to our clients
          </p>
        </div>
      </div>

      {/* Partner Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-6">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.partners.map((partner, partnerIndex) => (
                      <div
                        key={partnerIndex}
                        className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg"
                      >
                        <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                          <Building className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">
                            {partner.name}
                          </h4>
                          <p className="text-slate-400 text-xs">
                            {partner.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-slate-300">
                Discover the benefits of partnering with Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-full">
                      <benefit.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Types */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <p className="text-slate-300">
                Choose the partnership model that best fits your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <type.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 mb-6">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's explore how we can work together to drive innovation and create value for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="mailto:partnerships@ziontechgroup.com"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}