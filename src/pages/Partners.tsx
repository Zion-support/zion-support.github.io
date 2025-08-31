import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Globe, 
  Users,
  Handshake,
  Target,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Building2,
  Network,
  Lightbulb,
  Briefcase,
  DollarSign,
  Clock,
  Shield as ShieldIcon,
  Cpu,
  Database,
  Workflow,
  Palette,
  Monitor,
  Smartphone,
  Server,
  Lock,
  BarChart3
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  partnershipType: string;
  since: string;
  website: string;
  featured: boolean;
}

interface PartnershipOpportunity {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
  icon: any;
}

const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const partnerCategories = [
    { id: 'all', name: 'All Partners', icon: Users, count: 24 },
    { id: 'technology', name: 'Technology', icon: Cpu, count: 12 },
    { id: 'consulting', name: 'Consulting', icon: Briefcase, count: 6 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 4 },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 2 }
  ];

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
      id: '3',
      name: 'Google Cloud',
      logo: '/api/placeholder/120/60',
      description: 'Innovative cloud platform with advanced AI and machine learning capabilities.',
      category: 'cloud',
      partnershipType: 'technology',
      since: '2021',
      website: 'https://cloud.google.com',
      featured: true
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/api/placeholder/120/60',
      description: 'Enterprise technology leader in AI, quantum computing, and hybrid cloud.',
      category: 'technology',
      partnershipType: 'strategic',
      since: '2019',
      website: 'https://ibm.com',
      featured: true
    },
    {
      id: '5',
      name: 'Oracle',
      logo: '/api/placeholder/120/60',
      description: 'Leading provider of enterprise software and cloud infrastructure.',
      category: 'technology',
      partnershipType: 'technology',
      since: '2022',
      website: 'https://oracle.com',
      featured: false
    },
    {
      id: '6',
      name: 'Cisco',
      logo: '/api/placeholder/120/60',
      description: 'Global leader in networking, cybersecurity, and collaboration solutions.',
      category: 'security',
      partnershipType: 'technology',
      since: '2021',
      website: 'https://cisco.com',
      featured: false
    },
    {
      id: '7',
      name: 'Deloitte',
      logo: '/api/placeholder/120/60',
      description: 'Professional services firm specializing in digital transformation consulting.',
      category: 'consulting',
      partnershipType: 'strategic',
      since: '2020',
      website: 'https://deloitte.com',
      featured: false
    },
    {
      id: '8',
      name: 'Accenture',
      logo: '/api/placeholder/120/60',
      description: 'Global consulting firm with expertise in technology and digital innovation.',
      category: 'consulting',
      partnershipType: 'strategic',
      since: '2021',
      website: 'https://accenture.com',
      featured: false
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
      id: '3',
      title: 'Strategic Consulting Partner',
      description: 'Collaborate on large-scale digital transformation projects and share expertise in emerging technologies.',
      requirements: [
        'Proven consulting capabilities in target industries',
        'Strong client relationships and project delivery track record',
        'Expertise in AI, cloud, or cybersecurity',
        'Commitment to joint project delivery'
      ],
      benefits: [
        'Access to our technology portfolio',
        'Joint project opportunities',
        'Shared expertise and best practices',
        'Revenue sharing on joint projects'
      ],
      category: 'consulting',
      icon: Briefcase
    },
    {
      id: '4',
      title: 'Referral Partner',
      description: 'Refer potential customers to our solutions and earn attractive referral fees for successful deals.',
      requirements: [
        'Network of potential customers in target industries',
        'Understanding of our solution capabilities',
        'Commitment to quality referrals',
        'Professional representation of our brand'
      ],
      benefits: [
        'Attractive referral fees',
        'Marketing materials and support',
        'Training on our solutions',
        'Ongoing relationship management'
      ],
      category: 'referral',
      icon: Network
    }
  ];

  const filteredPartners = partners.filter(partner => {
    if (selectedCategory !== 'all' && partner.category !== selectedCategory) return false;
    if (selectedType !== 'all' && partner.partnershipType !== selectedType) return false;
    return true;
  });

  const featuredPartners = filteredPartners.filter(partner => partner.featured);
  const regularPartners = filteredPartners.filter(partner => !partner.featured);

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Alignment',
      description: 'Partners that align with our vision and complement our capabilities'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Access to new markets, customers, and revenue streams'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Collaboration',
      description: 'Joint development of cutting-edge solutions and technologies'
    },
    {
      icon: Users,
      title: 'Expanded Reach',
      description: 'Leverage partner networks to reach new customers and markets'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Partners that maintain our high standards of excellence'
    },
    {
      icon: Handshake,
      title: 'Mutual Success',
      description: 'Partnerships built on shared goals and mutual benefits'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Strategic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Partnerships</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join our ecosystem of technology leaders, consultants, and innovators. 
                Together, we're building the future of AI, quantum computing, and digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300">Discover the advantages of joining our partner ecosystem</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-300">Explore different ways to collaborate with Zion Tech Group</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <opportunity.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{opportunity.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{opportunity.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-300">Meet the innovative companies that are part of our ecosystem</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {partnerCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Partnership Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {partnershipTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name} ({type.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Featured Partners */}
          {featuredPartners.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Partners</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredPartners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{partner.name}</h4>
                    <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {partnerCategories.find(c => c.id === partner.category)?.name}
                      </span>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                        {partnershipTypes.find(t => t.id === partner.partnershipType)?.name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Partner since {partner.since}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Partners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-md rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{partner.name}</h4>
                    <p className="text-gray-400 text-sm">Partner since {partner.since}</p>
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

          {filteredPartners.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No partners match your current filters. Try adjusting your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Become a Partner?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem and help shape the future of technology. 
              Let's discuss how we can create value together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Start Partnership Discussion
              </a>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Partnerships Team
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">partnerships@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
