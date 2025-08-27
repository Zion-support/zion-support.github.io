import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Search, 
  Filter,
  ArrowRight,
  ExternalLink,
  Star,
  Building2,
  Zap,
  Shield,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone
} from 'lucide-react';

export default function Partners() {
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
      logo: '/images/partners/aws-logo.png',
      description: 'Leading cloud computing platform providing scalable infrastructure and services.',
      longDescription: 'AWS is the world\'s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Our partnership enables us to deliver robust, scalable cloud solutions to our clients while leveraging AWS\'s cutting-edge infrastructure and services.',
      category: 'technology',
      partnershipType: 'Cloud Partnership',
      partnershipDuration: '3+ years',
      jointProjects: 8,
      successStories: 6,
      website: 'https://aws.amazon.com',
      contact: 'partnerships@amazon.com',
      featured: true,
      benefits: [
        'Advanced cloud infrastructure',
        'Joint solution development',
        'Shared customer success programs',
        'Technical collaboration'
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
      name: 'Stanford University',
      logo: '/images/partners/stanford-logo.png',
      description: 'Leading research institution advancing AI and technology innovation.',
      category: 'academic',
      partnershipType: 'Research Collaboration',
      partnershipDuration: '2+ years',
      jointProjects: 6,
      successStories: 4,
      website: 'https://stanford.edu',
      contact: 'research@stanford.edu',
      featured: false,
      benefits: [
        'Joint research initiatives',
        'Academic-industry collaboration',
        'Talent development programs'
      ]
    },
    {
      id: 'partner-005',
      name: 'Salesforce',
      logo: '/images/partners/salesforce-logo.png',
      description: 'Customer relationship management platform and business applications.',
      category: 'technology',
      partnershipType: 'Platform Partnership',
      partnershipDuration: '3+ years',
      jointProjects: 10,
      successStories: 7,
      website: 'https://salesforce.com',
      contact: 'partnerships@salesforce.com',
      featured: false,
      benefits: [
        'Platform integration expertise',
        'Joint solution development',
        'Shared customer success'
      ]
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
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and customers through our extensive partner network',
      benefits: [
        'Joint go-to-market strategies',
        'Referral programs',
        'Co-selling opportunities',
        'Market expansion support'
      ]
    },
    {
      icon: Zap,
      title: 'Innovation Acceleration',
      description: 'Collaborate on cutting-edge technology solutions and research initiatives',
      benefits: [
        'Joint R&D projects',
        'Technology sharing',
        'Innovation workshops',
        'Patent collaboration'
      ]
    },
    {
      icon: Users,
      title: 'Network Access',
      description: 'Connect with industry leaders, customers, and other strategic partners',
      benefits: [
        'Industry events and conferences',
        'Customer introductions',
        'Partner networking',
        'Thought leadership opportunities'
      ]
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share resources and expertise to reduce project risks and costs',
      benefits: [
        'Shared project delivery',
        'Resource pooling',
        'Expertise sharing',
        'Cost optimization'
      ]
    }
  ];

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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
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
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                key={type.type}
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
            transition={{ duration: 0.8 }}
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
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
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
              </motion.div>
            ))}
          </div>
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
              Become a Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in partnering with Zion Tech Group? Let's explore how we can 
              create value together and drive innovation in the technology industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Start Partnership Discussion
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Partnerships Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
