import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
      id: 'partner-002',
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
      testimonials: [
        {
          quote: 'Zion Tech Group has been an exceptional partner in helping our customers achieve their cloud transformation goals.',
          author: 'Michael Chen',
          role: 'Director of Partner Success',
          company: 'AWS'
        }
      ]
    }
  ];
  const regularPartners = [
    {
      id: 'partner-003',
      name: 'Deloitte',
      logo: '/images/partners/deloitte-logo.png',
      description: 'Global consulting firm specializing in digital transformation and technology strategy.',
      category: 'consulting',
      partnershipType: 'Consulting Partnership',
      partnershipDuration: '4+ years',
      jointProjects: 15,
      successStories: 12,
      website: 'https://deloitte.com',
      contact: 'partnerships@deloitte.com',
      featured: false,
      benefits: [
        'Joint consulting engagements',
        'Shared methodology and frameworks',
        'Collaborative thought leadership'
      ]
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
        'Joint strategy consulting',
        'Shared industry insights',
        'Collaborative client delivery'
      ]
  ];
  const partnershipBenefits = [
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
<<<<<<< HEAD
=======
  const partnershipTypes = [
    {
      type: 'Strategic Alliance',
      description: 'Long-term partnerships focused on joint market development and innovation',
      examples: ['Microsoft', 'Amazon Web Services', 'Google Cloud'],
      icon: Star
    },
    {
      type: 'Technology Partnership',
      description: 'Collaboration on technology integration and platform development',
      examples: ['Salesforce', 'Oracle', 'Adobe'],
      icon: Zap
    },
    {
      type: 'Consulting Partnership',
      description: 'Joint delivery of consulting services and strategic advisory',
      examples: ['Deloitte', 'McKinsey', 'Bain & Company'],
      icon: BookOpen
    },
    {
      type: 'Academic Partnership',
      description: 'Research collaboration and talent development initiatives',
      examples: ['Stanford University', 'MIT', 'Harvard'],
      icon: Building2
    }
  ];
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const togglePartnerExpansion = (partnerId: string) => {
    setExpandedPartner(expandedPartner === partnerId ? null : partnerId);
  };
  const allPartners = [...featuredPartners, ...regularPartners];
  const filteredPartners = allPartners.filter(partner => {
    if (selectedCategory !== 'all' && partner.category !== selectedCategory) return false;
    if (searchQuery) {
      return partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             partner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             partner.partnershipType.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technology': return 'bg-blue-500/20 text-blue-400';
      case 'consulting': return 'bg-green-500/20 text-green-400';
      case 'enterprise': return 'bg-purple-500/20 text-purple-400';
      case 'startup': return 'bg-orange-500/20 text-orange-400';
      case 'academic': return 'bg-cyan-500/20 text-cyan-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Partners - Zion Tech Group"
        description="Strategic partnerships with leading technology companies, consulting firms, and academic institutions."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">
              <Handshake className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We collaborate with industry leaders, technology innovators, and academic institutions 
              to deliver exceptional value to our clients and drive innovation forward.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300">
              Discover the benefits of strategic partnerships with Zion Tech Group
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300">
              Different ways we collaborate with our partners
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6">
                    <type.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.type}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-300">
              Our strategic alliances with industry leaders
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-4">
                        <Building2 className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-gray-400 text-sm">Partner Logo</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(partner.category)}`}>
                        {partnerCategories.find(c => c.id === partner.category)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {partner.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Partnership Type</div>
                        <div className="text-white font-medium">{partner.partnershipType}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Duration</div>
                        <div className="text-white font-medium">{partner.partnershipDuration}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Joint Projects</div>
                        <div className="text-white font-medium">{partner.jointProjects}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Success Stories</div>
                        <div className="text-white font-medium">{partner.successStories}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {partner.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => togglePartnerExpansion(partner.id)}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        {expandedPartner === partner.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {expandedPartner === partner.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {partner.longDescription}
                        </p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {partner.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                                <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {partner.testimonials && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white mb-2">What They Say:</h4>
                            <div className="bg-slate-700/30 rounded-lg p-3">
                              <p className="text-gray-300 text-sm italic mb-2">
                                "{partner.testimonials[0].quote}"
                              </p>
                              <div className="text-gray-400 text-xs">
                                — {partner.testimonials[0].author}, {partner.testimonials[0].role}
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center gap-3">
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105"
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                          <a
                            href={`mailto:${partner.contact}`}
                            className="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                          >
                            Contact
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search partners..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  />
                </div>
              </div>
              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                >
                  {partnerCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* All Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Partners</h2>
            <p className="text-xl text-gray-300">
              Our complete network of strategic partners
            </p>
          </motion.div>
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
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-3">
                        <Building2 className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-gray-400 text-xs">Partner Logo</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(partner.category)}`}>
                        {partnerCategories.find(c => c.id === partner.category)?.name}
                      </span>
                      {partner.featured && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {partner.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Type</div>
                        <div className="text-white font-medium">{partner.partnershipType}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Projects</div>
                        <div className="text-white font-medium">{partner.jointProjects}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {partner.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
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
      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
              Join our global network and unlock new opportunities for growth, 
              innovation, and market expansion.
=======
              Interested in partnering with Zion Tech Group? Let's explore how we can 
              create value together and drive innovation in the technology industry.
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const partnershipTypes = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Integrate our AI and cloud solutions into your platforms',
      icon: Zap,
      benefits: [
        'API Access & Documentation',
        'Technical Support',
        'Co-marketing Opportunities',
        'Revenue Sharing',
        'Joint Product Development'
      ],
      requirements: [
        'Technical expertise in relevant domains',
        'Active customer base',
        'Commitment to quality standards'
      ]
    },
    {
      id: 'channel',
      name: 'Channel Partners',
      description: 'Resell our services to your customers',
      icon: Users,
      benefits: [
        'Competitive Pricing',
        'Sales Training & Support',
        'Marketing Materials',
        'Lead Generation',
        'Dedicated Account Manager'
      ],
      requirements: [
        'Established sales channels',
        'Customer relationships',
        'Service delivery capabilities'
      ]
    },
    {
      id: 'strategic',
      name: 'Strategic Partners',
      description: 'Deep collaboration on joint ventures and initiatives',
      icon: Globe,
      benefits: [
        'Exclusive Market Access',
        'Joint Innovation Labs',
        'Shared IP Development',
        'Global Expansion Support',
        'Board-level Collaboration'
      ],
      requirements: [
        'Strategic alignment',
        'Significant market presence',
        'Long-term commitment'
      ]
    },
    {
      id: 'ecosystem',
      name: 'Ecosystem Partners',
      description: 'Join our technology ecosystem and marketplace',
      icon: Cloud,
      benefits: [
        'Marketplace Integration',
        'Developer Tools & SDKs',
        'Community Support',
        'Event Participation',
        'Thought Leadership'
      ],
      requirements: [
        'Innovative solutions',
        'Active development',
        'Community engagement'
      ]
    }
  ];
  const partnerBenefits = [
    {
      icon: Award,
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our global network'
    },
    {
      icon: Brain,
      title: 'Technology Innovation',
      description: 'Leverage cutting-edge AI and cloud technologies in your solutions'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards for your customers'
    },
    {
      icon: Users,
      title: 'Global Reach',
      description: 'Expand your business globally with our international presence'
    }
  ];
  const successStories = [
    {
      partner: 'TechFlow Solutions',
      type: 'Technology Partner',
      description: 'Integrated our AI analytics into their platform, resulting in 300% increase in user engagement',
      results: ['300% user engagement increase', 'New market expansion', 'Joint patent applications'],
      logo: '🚀'
    },
    {
      partner: 'Global Systems Inc.',
      type: 'Channel Partner',
      description: 'Successfully reselling our cloud services across 15 countries with 95% customer satisfaction',
      results: ['15 countries expansion', '95% customer satisfaction', '$2M+ annual revenue'],
      logo: '🌍'
    },
    {
      partner: 'InnovateCorp',
      type: 'Strategic Partner',
      description: 'Joint development of quantum computing solutions for financial services',
      results: ['Joint R&D facility', 'Quantum computing patents', 'Financial services focus'],
      logo: '⚡'
    }
  ];
  const applicationSteps = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'Reach out to discuss partnership opportunities and alignment',
      duration: '1-2 weeks',
      icon: Mail
    },
    {
      step: 2,
      title: 'Assessment',
      description: 'We evaluate your capabilities and strategic fit',
      duration: '2-3 weeks',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Agreement',
      description: 'Negotiate terms and sign partnership agreement',
      duration: '3-4 weeks',
      icon: Handshake
    },
    {
      step: 4,
      title: 'Launch',
      description: 'Begin partnership activities and go-to-market',
      duration: '1-2 weeks',
      icon: Zap
    }
  ];
  const contactInfo = [
    {
      icon: Mail,
      label: 'Partnership Inquiries',
      value: 'partnerships@ziontechgroup.com',
      href: 'mailto:partnerships@ziontechgroup.com'
    },
    {
      icon: Phone,
      label: 'Partnership Team',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ];
  return (
    <>
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join Zion Tech Group's partner ecosystem. Explore partnership opportunities in AI, cloud, and technology solutions."
        keywords="partnerships, technology partners, channel partners, strategic alliances, Zion Tech Group"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
                <Handshake className="w-5 h-5 text-zion-purple mr-2" />
                <span className="text-zion-purple font-medium">Partnership Opportunities</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Partner With Us
              </h1>
              <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto leading-relaxed mb-8">
                Join our ecosystem of technology innovators and business leaders. 
                Together, we're transforming industries through AI and technology.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Partnership Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities. 
                We offer flexible arrangements to support your growth.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-blue rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white">
                        {type.name}
                      </CardTitle>
                      <CardDescription className="text-zion-cyan-light">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {type.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Partner Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem and 
                how we can help accelerate your business growth.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-zion-cyan-light">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Success Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Partner Success Stories
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                See how our partners have achieved remarkable results through collaboration 
                with Zion Tech Group.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.partner}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{story.logo}</div>
                      <CardTitle className="text-xl font-bold text-white">
                        {story.partner}
                      </CardTitle>
                      <CardDescription className="text-zion-cyan-light">
                        {story.type}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {story.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold">Key Results:</h4>
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2 text-sm">
                            <Star className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Application Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                How to Become a Partner
              </h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Our partnership application process is straightforward and designed 
                to get you started quickly.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-blue rounded-full mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < applicationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-zion-purple to-zion-blue transform translate-x-4"></div>
                    )}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zion-cyan-light mb-2">
                    {step.description}
                  </p>
                  <div className="text-sm text-zion-purple font-medium">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
                Let's discuss how we can work together to create value for both our businesses 
                and your customers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-blue rounded-lg mb-4">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {contact.label}
                    </h3>
                    <a
                      href={contact.href}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple/80 hover:to-zion-blue/80 text-white"
                  onClick={() => window.open('mailto:partnerships@ziontechgroup.com?subject=Partnership Inquiry', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                  onClick={() => window.open('tel:+13024640950', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Partnership Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Partners;
