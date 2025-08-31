import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
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
  Phone,
  CheckCircle
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
      name: 'AWS',
      logo: '/images/partners/aws-logo.png',
      description: 'Leading cloud provider for scalable and reliable infrastructure.',
      longDescription: 'Amazon Web Services (AWS) is the world\'s most comprehensive and broadly adopted cloud platform. Our partnership enables us to deliver enterprise-grade cloud solutions with unmatched scalability, security, and performance.',
      category: 'technology',
      partnershipType: 'Technology Partner',
      partnershipDuration: '4+ years',
      jointProjects: 8,
      successStories: 5,
      website: 'https://aws.amazon.com',
      contact: 'partnerships@amazon.com',
      featured: true,
      benefits: [
        'AWS credits and resources',
        'Architecture guidance',
        'Marketplace integration',
        'Joint customer support'
      ],
      testimonials: [
        {
          quote: 'Working with Zion Tech Group has accelerated our customers\' cloud adoption journey.',
          author: 'Michael Chen',
          role: 'Director of Partner Success',
          company: 'AWS'
        }
      ]
    },
    {
      id: 'partner-003',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud-logo.png',
      description: 'AI and machine learning platform for next-generation applications.',
      longDescription: 'Google Cloud provides enterprise-ready cloud services that help organizations transform their business. Our partnership focuses on AI and machine learning solutions, leveraging Google\'s cutting-edge technology.',
      category: 'technology',
      partnershipType: 'Innovation Partner',
      partnershipDuration: '3+ years',
      jointProjects: 6,
      successStories: 4,
      website: 'https://cloud.google.com',
      contact: 'partnerships@google.com',
      featured: true,
      benefits: [
        'AI/ML platform access',
        'Innovation lab collaboration',
        'Go-to-market support',
        'Technical training'
      ],
      testimonials: [
        {
          quote: 'Zion Tech Group\'s expertise in AI perfectly complements our cloud platform capabilities.',
          author: 'Emily Rodriguez',
          role: 'Head of Strategic Partnerships',
          company: 'Google Cloud'
        }
      ]
    }
  ];

  const allPartners = [
    ...featuredPartners,
    {
      id: 'partner-004',
      name: 'IBM',
      logo: '/images/partners/ibm-logo.png',
      description: 'Enterprise technology solutions and consulting services.',
      category: 'technology',
      partnershipType: 'Enterprise Partner',
      partnershipDuration: '2+ years',
      jointProjects: 4,
      successStories: 3,
      website: 'https://ibm.com',
      contact: 'partnerships@ibm.com',
      featured: false
    },
    {
      id: 'partner-005',
      name: 'Oracle',
      logo: '/images/partners/oracle-logo.png',
      description: 'Database and enterprise software solutions.',
      category: 'technology',
      partnershipType: 'Technology Partner',
      partnershipDuration: '2+ years',
      jointProjects: 3,
      successStories: 2,
      website: 'https://oracle.com',
      contact: 'partnerships@oracle.com',
      featured: false
    },
    {
      id: 'partner-006',
      name: 'Deloitte',
      logo: '/images/partners/deloitte-logo.png',
      description: 'Global consulting and professional services.',
      category: 'consulting',
      partnershipType: 'Strategic Partner',
      partnershipDuration: '3+ years',
      jointProjects: 7,
      successStories: 6,
      website: 'https://deloitte.com',
      contact: 'partnerships@deloitte.com',
      featured: false
    }
  ];

  const filteredPartners = allPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const togglePartnerExpansion = (partnerId: string) => {
    setExpandedPartner(expandedPartner === partnerId ? null : partnerId);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO 
        title="Partners - Zion Tech Group | Strategic Technology Partnerships"
        description="Discover Zion Tech Group's strategic partnerships with leading technology companies, cloud providers, and consulting firms."
        keywords="partners, partnerships, technology partners, cloud providers, consulting partners, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Strategic partnerships with industry leaders to deliver exceptional technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
      </section>

      {/* Featured Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Partners</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our strategic alliances with industry leaders enable us to deliver cutting-edge solutions
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-slate-300 text-sm">{partner.partnershipType}</p>
                  </div>
                  
                  <p className="text-slate-300 mb-6 text-center">
                    {partner.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">{partner.jointProjects}</div>
                      <div className="text-sm text-slate-400">Joint Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">{partner.successStories}</div>
                      <div className="text-sm text-slate-400">Success Stories</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <button
                      onClick={() => togglePartnerExpansion(partner.id)}
                      className="px-4 py-2 border border-cyan-500 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      {expandedPartner === partner.id ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>
                </div>
                
                {/* Expanded Content */}
                {expandedPartner === partner.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700 bg-slate-800/50"
                  >
                    <div className="p-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Partnership Details</h4>
                      <p className="text-slate-300 mb-6">{partner.longDescription}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-white mb-3">Key Benefits</h5>
                          <ul className="space-y-2">
                            {partner.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-sm text-slate-300">
                                <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-white mb-3">Partnership Stats</h5>
                          <div className="space-y-2 text-sm text-slate-300">
                            <div>Duration: {partner.partnershipDuration}</div>
                            <div>Type: {partner.partnershipType}</div>
                            <div>Contact: {partner.contact}</div>
                          </div>
                        </div>
                      </div>
                      
                      {partner.testimonials && partner.testimonials.length > 0 && (
                        <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                          <blockquote className="text-slate-300 italic">
                            "{partner.testimonials[0].quote}"
                          </blockquote>
                          <div className="mt-3 text-sm text-slate-400">
                            — {partner.testimonials[0].author}, {partner.testimonials[0].role}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Partners</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our complete network of technology and consulting partners
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.filter(p => !p.featured).map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 p-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-cyan-500/20 text-cyan-400 text-sm rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Visit
                    </a>
                    <button
                      onClick={() => togglePartnerExpansion(partner.id)}
                      className="px-3 py-2 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Become a Partner</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join our network of strategic partners and help us deliver innovative technology solutions to businesses worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Partnership Inquiry
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Strategic Alignment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Joint Go-to-Market</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technology Integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
