import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Rocket, 
  Star,
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Building2,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Partners: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState<string | null>(null);

  const partnerCategories = [
    { id: 'all', name: 'All Partners', count: 24 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'consulting', name: 'Consulting', count: 6 },
    { id: 'enterprise', name: 'Enterprise', count: 5 },
    { id: 'startup', name: 'Startups', count: 3 },
    { id: 'academic', name: 'Academic', count: 2 }
  ];

  const featuredPartners = [
    {
      id: 'partner-001',
      name: 'Microsoft',
      logo: '/images/partners/microsoft-logo.png',
      description: 'Global technology leader providing cloud computing, AI, and enterprise solutions.',
      longDescription: 'Microsoft is a global technology leader that has been at the forefront of innovation for decades. Our partnership focuses on cloud computing solutions, AI integration, and enterprise software development. Together, we deliver cutting-edge solutions that transform businesses and drive digital transformation.',
      category: 'technology',
      partnershipType: 'Strategic Alliance',
      partnershipDuration: '5+ years',
      jointProjects: 12,
      successStories: 8,
      website: 'https://microsoft.com',
      contact: 'partnerships@microsoft.com',
      featured: true,
      benefits: [
        'Joint go-to-market strategies',
        'Co-development of AI solutions',
        'Shared technology roadmaps',
        'Collaborative customer success'
      ],
      testimonials: [
        {
          quote: 'Our partnership with Zion Tech Group has been instrumental in delivering innovative AI solutions to our enterprise customers.',
          author: 'Sarah Williams',
          role: 'VP of Strategic Partnerships',
          company: 'Microsoft'
        }
      ]
    },
    {
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
      id: 'partner-004',
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
      id: 'partner-005',
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
      id: 'partner-006',
      name: 'McKinsey & Company',
      logo: '/images/partners/mckinsey-logo.png',
      description: 'Global management consulting firm specializing in business strategy and operations.',
      category: 'consulting',
      partnershipType: 'Strategic Consulting',
      partnershipDuration: '3+ years',
      jointProjects: 9,
      successStories: 6,
      website: 'https://mckinsey.com',
      contact: 'partnerships@mckinsey.com',
      featured: false,
      benefits: [
        'Joint strategy consulting',
        'Shared industry insights',
        'Collaborative client delivery'
      ]
    }
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

  const togglePartnerExpansion = (partnerId: string) => {
    setExpandedPartner(expandedPartner === partnerId ? null : partnerId);
  };

  const allPartners = [...featuredPartners, ...regularPartners];
  const filteredPartners = allPartners.filter(partner => {
    if (selectedCategory !== 'all' && partner.category !== selectedCategory) return false;
    if (searchQuery) {
      return partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             partner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
             (partner.partnershipType && partner.partnershipType.toLowerCase().includes(searchQuery.toLowerCase()));
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
      case 'cloud': return 'bg-indigo-500/20 text-indigo-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{benefit.name}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {benefit.name} partnership level benefits
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
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl mb-6">
                    <type.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                    {partner.partnershipType && (
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
                    )}
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
                          <ArrowRight className="w-5 h-5 rotate-90" />
                        ) : (
                          <ArrowRight className="w-5 h-5" />
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
                    {partner.partnershipType && (
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
                    )}
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
              Join our global network and unlock new opportunities for growth, 
              innovation, and market expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
              </a>
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
