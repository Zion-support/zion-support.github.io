import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Handshake, 
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
  Brain,
  Cloud,
  Lock,
  Rocket,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedPartner, setExpandedPartner] = useState<any>(null);

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
      description: 'Leading cloud infrastructure and AI services provider.',
      longDescription: 'Amazon Web Services (AWS) is the world\'s most comprehensive and broadly adopted cloud platform. Our partnership enables us to deliver scalable, secure, and cost-effective cloud solutions to our clients, leveraging AWS\'s extensive portfolio of services.',
      category: 'technology',
      partnershipType: 'Technology Partner',
      partnershipDuration: '3+ years',
      jointProjects: 8,
      successStories: 5,
      website: 'https://aws.amazon.com',
      contact: 'partnerships@amazon.com',
      featured: true,
      benefits: [
        'AWS credits and discounts',
        'Technical architecture guidance',
        'Marketplace integration',
        'Joint customer success programs'
      ],
      testimonials: [
        {
          quote: 'Working with Zion Tech Group on AWS has accelerated our cloud transformation journey.',
          author: 'Michael Chen',
          role: 'CTO',
          company: 'TechCorp Solutions'
        }
      ]
    },
    {
      id: 'partner-003',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud-logo.png',
      description: 'Innovative AI and machine learning platform provider.',
      longDescription: 'Google Cloud provides enterprise-ready cloud services that help organizations transform their business. Our partnership focuses on AI and machine learning solutions, leveraging Google\'s cutting-edge research and technology.',
      category: 'technology',
      partnershipType: 'AI Innovation Partner',
      partnershipDuration: '2+ years',
      jointProjects: 6,
      successStories: 4,
      website: 'https://cloud.google.com',
      contact: 'partnerships@google.com',
      featured: true,
      benefits: [
        'AI/ML platform access',
        'Research collaboration opportunities',
        'Joint innovation labs',
        'Technical expertise sharing'
      ],
      testimonials: [
        {
          quote: 'The AI solutions we\'ve developed with Zion Tech Group on Google Cloud are game-changing.',
          author: 'Dr. Emily Rodriguez',
          role: 'Head of AI Research',
          company: 'InnovateAI Labs'
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
      description: 'Enterprise solutions and AI consulting services.',
      category: 'technology',
      partnershipType: 'Enterprise Partner',
      featured: false
    },
    {
      id: 'partner-005',
      name: 'Accenture',
      logo: '/images/partners/accenture-logo.png',
      description: 'Global consulting and technology services.',
      category: 'consulting',
      partnershipType: 'Strategic Partner',
      featured: false
    },
    {
      id: 'partner-006',
      name: 'Deloitte',
      logo: '/images/partners/deloitte-logo.png',
      description: 'Professional services and digital transformation.',
      category: 'consulting',
      partnershipType: 'Advisory Partner',
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
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Discover our strategic partnerships with leading technology companies, consulting firms, and innovative startups. Join our partner ecosystem."
        keywords="partners, partnerships, technology partners, consulting partners, strategic alliances, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Partners
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building the future together with industry leaders and innovative partners
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-white cursor-pointer"
                >
                  {partnerCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Partners
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo ? partner.logo : partner.name.charAt(0)}
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Building2 className="w-4 h-4 mr-2" />
                      {partner.partnershipType}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {partner.partnershipDuration}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => togglePartnerExpansion(partner.id)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    {expandedPartner === partner.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
                
                {/* Expanded Content */}
                {expandedPartner === partner.id && (
                  <motion.div
                    className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {partner.longDescription}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-600">{partner.jointProjects}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Joint Projects</div>
                      </div>
                      <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{partner.successStories}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Success Stories</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-600 hover:text-cyan-700 text-sm"
                        >
                          Visit Website
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                        <a
                          href={`mailto:${partner.contact}`}
                          className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          Contact
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            All Partners
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {partner.logo ? partner.logo : partner.name.charAt(0)}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {partner.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {partner.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                      {partner.partnershipType}
                    </span>
                  </div>
                  
                  {partner.featured && (
                    <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Join Our Partner Ecosystem?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Partner with Zion Tech Group to access cutting-edge AI solutions, expand your market reach, and drive innovation together.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
              </Link>
              <Link 
                to="/resources" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Partner Resources
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
