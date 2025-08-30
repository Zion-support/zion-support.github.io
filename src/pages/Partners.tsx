import React from 'react';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Handshake, 
  Users, 
  Building, 
  Globe, 
  Star, 
  ArrowRight, 
  Handshake, 
  Award, 
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  Building,
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
      name: 'Strategic Partners',
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
      name: 'Consulting Partners',
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
      partners: [
        { name: 'TechCorp', logo: 'TC', tier: 'Silver', category: 'Reseller' },
        { name: 'InnovateTech', logo: 'IT', tier: 'Silver', category: 'Distributor' }
      ]
    }
  ];

  const benefits = [
    { icon: Star, title: 'Exclusive Access', description: 'Early access to new features and beta programs' },
    { icon: Shield, title: 'Technical Support', description: 'Dedicated technical support and training' },
    { icon: TrendingUp, title: 'Revenue Growth', description: 'Competitive margins and growth opportunities' },
    { icon: Award, title: 'Recognition', description: 'Partner awards and marketing support' }
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Schedule a meeting to discuss partnership opportunities and alignment',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Partnership Agreement',
      description: 'Review and sign partnership terms and conditions',
      duration: '2-3 weeks'
    },
    {
      step: '3',
      title: 'Onboarding & Training',
      description: 'Complete partner onboarding and receive comprehensive training',
      duration: '1-2 weeks'
    },
    {
      step: '4',
      title: 'Go-to-Market',
      description: 'Launch partnership and start generating revenue together',
      duration: 'Ongoing'
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology',
      description: 'Leading cloud and AI partner',
      year: '2020'
    },
    {
      name: 'AWS',
      logo: 'AWS',
      category: 'Cloud',
      description: 'Cloud infrastructure partner',
      year: '2021'
    },
    {
      name: 'Accenture',
      logo: 'A',
      category: 'Consulting',
      description: 'Global system integrator',
      year: '2022'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join Zion Tech Group's partner ecosystem. Explore partnership opportunities in AI, cloud, and technology solutions."
        keywords="partnerships, technology partners, channel partners, strategic alliances, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Handshake className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Partner With Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our ecosystem of technology innovators and business leaders
          </motion.p>
          <motion.div 
            className="text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Together, we're transforming industries through AI and technology
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Partnership Types
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals
            </p>
          </motion.div>
          
          <div className="grid md: grid-cols-2 gap-8">
            {partnershipTypes.map((type, index)  => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
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
            {partnerBenefits.map((benefit, index)  => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Partner With Us?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index)  => (
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
                  <p className="text-slate-400 text-sm mb-4">{partner.description}</p>
                  
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index)  => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    
                    {index < partnershipProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2 z-0"></div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
