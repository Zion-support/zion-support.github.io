import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users,
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
  Star,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Building2,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Check
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

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
      description: 'Advanced AI and machine learning platform for enterprise solutions.',
      benefits: ['AI/ML tools', 'Cloud credits', 'Technical support']
    }
  ];

  const filteredPartners = featuredPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO 
        title="Strategic Partners - Zion Tech Group"
        description="Discover our network of strategic partners and technology alliances that enable us to deliver cutting-edge solutions."
        keywords="partners, alliances, technology partnerships, strategic relationships"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent">
              Our Strategic Partners
            </h1>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver innovative solutions that drive business transformation and technological advancement.
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-zion-cyan-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan"
                />
              </div>
              
              <div className="flex gap-2">
                {partnerCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-zion-purple border-zion-purple text-white'
                        : 'border-white/20 text-zion-cyan-light hover:border-zion-cyan hover:text-white'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center text-2xl">
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                    <p className="text-zion-cyan-light text-sm">{partner.category}</p>
                  </div>
                </div>
                
                <p className="text-zion-cyan-light mb-4">{partner.description}</p>
                
                {partner.benefits && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-zion-cyan-light flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                  <button className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
            <p className="text-zion-cyan-light mb-8 max-w-2xl mx-auto">
              Join our network of strategic partners and help shape the future of technology. 
              Let's explore opportunities for collaboration and mutual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Partner With Us
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
