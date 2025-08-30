import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  HandshakeIcon, 
  Users, 
  Building, 
  Globe, 
  Star, 
  ArrowRight, 
  Award, 
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  Briefcase
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that enhance our solutions',
      icon: Brain,
      partners: [
        { name: 'Microsoft', logo: 'M', tier: 'Platinum', category: 'Cloud & AI' },
        { name: 'AWS', logo: 'AWS', tier: 'Platinum', category: 'Cloud Infrastructure' },
        { name: 'Google Cloud', logo: 'GC', tier: 'Gold', category: 'AI & ML' },
        { name: 'IBM', logo: 'IBM', tier: 'Gold', category: 'Enterprise Solutions' }
      ]
    },
    {
      title: 'System Integrators',
      description: 'Partners who help implement our solutions worldwide',
      icon: Building,
      partners: [
        { name: 'Accenture', logo: 'A', tier: 'Platinum', category: 'Global SI' },
        { name: 'Deloitte', logo: 'D', tier: 'Platinum', category: 'Consulting' },
        { name: 'PwC', logo: 'P', tier: 'Gold', category: 'Advisory' }
      ]
    },
    {
      title: 'Strategic Partners',
      icon: Handshake,
      description: 'Long-term collaboration on major initiatives',
      benefits: [
        'Exclusive market access',
        'Joint go-to-market strategies',
        'Shared R&D investments',
        'Strategic advisory board seats'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Consulting Partners',
      icon: Briefcase,
      description: 'Deliver our solutions through your consulting practice',
      benefits: [
        'Implementation certification',
        'Technical expertise training',
        'Project delivery support',
        'Referral commission programs'
      ],
      color: 'from-orange-600 to-red-600'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our partnership',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Technical Expertise',
      description: 'Leverage our cutting-edge AI and cloud technology solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Market Expansion',
      description: 'Expand your reach into new industries and geographies',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Technical Support',
      description: 'Dedicated technical support and training programs',
      icon: Shield,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const existingPartners = [
    {
      name: 'TechCorp Solutions',
      logo: '🚀',
      category: 'Technology',
      description: 'Leading provider of enterprise software solutions',
      year: '2022'
    },
    {
      name: 'InnovateTech Systems',
      logo: '💡',
      category: 'Consulting',
      description: 'Specialized in digital transformation consulting',
      year: '2023'
    },
    {
      name: 'CloudFirst Partners',
      logo: '☁️',
      category: 'Cloud',
      description: 'Expert cloud infrastructure and migration services',
      year: '2021'
    },
    {
      name: 'DataFlow Analytics',
      logo: '📊',
      category: 'Analytics',
      description: 'Advanced data analytics and business intelligence',
      year: '2023'
    },
    {
      name: 'SecureNet Solutions',
      logo: '🔒',
      category: 'Security',
      description: 'Cybersecurity and compliance expertise',
      year: '2022'
    },
    {
      name: 'AIFirst Consulting',
      logo: '🤖',
      category: 'AI',
      description: 'AI strategy and implementation specialists',
      year: '2024'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Schedule a call to discuss partnership opportunities and mutual goals',
      icon: Handshake
    },
    {
      step: '02',
      title: 'Assessment & Planning',
      description: 'Evaluate technical capabilities and create partnership roadmap',
      icon: CheckCircle
    },
    {
      step: '03',
      title: 'Agreement & Onboarding',
      description: 'Finalize partnership terms and begin onboarding process',
      icon: Award
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Go-to-market execution and ongoing partnership development',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join Zion Tech Group's partner ecosystem. Access cutting-edge AI solutions, expand your market reach, and grow your business through strategic partnerships."
        keywords="partnerships, technology partners, system integrators, consulting partners, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Partnerships
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner With
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology partners, system integrators, and consultants. 
              Together, we'll deliver innovative AI solutions that transform businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#partnership-types" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                <Handshake className="w-5 h-5 mr-2" />
                Explore Partnerships
              </a>
              <a href="/contact" className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Partnership Types
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color || 'from-blue-500 to-purple-600'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-slate-300 mb-4">{type.description}</p>
                  
                  {type.partners && (
                    <div className="space-y-2">
                      {type.partners.slice(0, 3).map((partner, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">{partner.name}</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                            {partner.tier}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {type.benefits && (
                    <div className="space-y-2">
                      {type.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300 mt-4">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the advantages of joining our technology ecosystem
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-4`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Valued Partners
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet some of the organizations already benefiting from our partnership
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Partner since {partner.year}</span>
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partnership Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simple steps to become a Zion Tech Group partner
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < partnershipProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
