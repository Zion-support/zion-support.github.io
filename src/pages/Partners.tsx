import React from 'react';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { Handshake, 
  Users, 
  Building, 
  Globe, 
  Star, 
  ArrowRight, 
  Award, 
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  Briefcase
} from 'lucide-react';

  const partnershipTypes = [
    { id: 'all', name: 'All Types', icon: Handshake, count: 24 },
    { id: 'strategic', name: 'Strategic Partners', icon: Target, count: 8 },
    { id: 'technology', name: 'Technology Partners', icon: Code, count: 10 },
    { id: 'reseller', name: 'Reseller Partners', icon: DollarSign, count: 4 },
    { id: 'referral', name: 'Referral Partners', icon: Network, count: 2 }
  ];

  const partners: Partner[] = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/api/placeholder/120/60',
      description: 'Global technology leader providing cloud infrastructure and AI solutions.',
      category: 'technology',
      partnershipType: 'strategic',
      since: '2020',
      website: 'https://microsoft.com',
      featured: true
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/api/placeholder/120/60',
      description: 'Leading cloud computing platform enabling scalable and secure solutions.',
      category: 'cloud',
      partnershipType: 'technology',
      since: '2021',
      website: 'https://aws.amazon.com',
      featured: true
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

  const partnershipOpportunities: PartnershipOpportunity[] = [
    {
      id: '1',
      title: 'Technology Integration Partner',
      description: 'Integrate your technology solutions with our AI and quantum computing platforms to create innovative joint offerings.',
      requirements: [
        'Proven technology solution with enterprise customers',
        'Strong technical team and support capabilities',
        'Commitment to joint go-to-market activities',
        'Alignment with our technology roadmap'
      ],
      benefits: [
        'Access to our cutting-edge AI and quantum technologies',
        'Joint marketing and sales support',
        'Technical integration assistance',
        'Revenue sharing opportunities'
      ],
      category: 'technology',
      icon: Code
    },
    {
      id: '2',
      title: 'Reseller Partner',
      description: 'Resell our AI and technology solutions to your customer base with attractive margins and comprehensive support.',
      requirements: [
        'Established customer base in target industries',
        'Sales and technical team capabilities',
        'Commitment to training and certification',
        'Minimum sales targets and growth plans'
      ],
      benefits: [
        'Competitive margins and pricing',
        'Comprehensive training and certification',
        'Marketing and sales enablement support',
        'Technical pre-sales and post-sales assistance'
      ],
      category: 'reseller',
      icon: DollarSign
    },
    {
      title: 'Market Expansion',
      description: 'Expand your reach into new industries and geographies',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Innovation Access',
      description: 'Early access to cutting-edge technologies and research',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const existingPartners = [
    {
      name: 'TechCorp',
      logo: 'TC',
      category: 'Reseller',
      year: '2023',
      description: 'Leading technology reseller with global reach'
    },
    {
      name: 'InnovateTech',
      logo: 'IT',
      category: 'Distributor',
      year: '2022',
      description: 'Innovative technology distribution partner'
    },
    {
      name: 'CloudSolutions',
      logo: 'CS',
      category: 'Implementation',
      year: '2023',
      description: 'Specialized cloud implementation services'
    }
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Reach out to discuss partnership opportunities',
      duration: '1-2 weeks'
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'Evaluate mutual fit and alignment',
      duration: '2-3 weeks'
    },
    {
      step: '3',
      title: 'Agreement',
      description: 'Finalize partnership terms and conditions',
      duration: '3-4 weeks'
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Begin partnership activities and go-to-market',
      duration: '1-2 weeks'
    }
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
    <>
      <SEO
        title="Partnerships | Zion Tech Group - Join Our Ecosystem"
        description="Partner with Zion Tech Group to expand your business with AI-powered solutions, cloud services, and cutting-edge technology. Join our global partner ecosystem."
        keywords="partnerships, technology partners, system integrators, consulting partners, strategic alliances, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Partner With <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our global ecosystem of technology partners, system integrators, and consulting firms. 
                Together, we're transforming businesses with AI-powered solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Partnership Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    
                    {type.partners && (
                      <div className="space-y-2 mb-4">
                        {type.partners.slice(0, 2).map((partner, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{partner.name}</span>
                            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                              {partner.tier}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <button className="w-full bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Partner since {partner.year}</span>
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                    {partnerCategories.find(c => c.id === partner.category)?.name}
                  </span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    {partnershipTypes.find(t => t.id === partner.partnershipType)?.name}
                  </span>
                </div>
              </motion.div>
            ))}
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
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-4`}>
                    <benefit.icon className="h-8 w-8 text-white" />
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
