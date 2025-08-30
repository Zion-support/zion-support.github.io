import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Globe, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Star,
  CheckCircle,
  Building,
  Cpu,
  Brain,
  Shield,
  Cloud,
  Zap,
  Target,
  Lightbulb,
  Rocket,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

export function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Building },
    { id: 'technology', name: 'Technology', icon: Cpu },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'consulting', name: 'Consulting', icon: Briefcase },
    { id: 'startups', name: 'Startups & Innovation', icon: Rocket }
  ];

  const regions = [
    { id: 'all', name: 'All Regions', icon: Globe },
    { id: 'northamerica', name: 'North America', icon: Globe },
    { id: 'europe', name: 'Europe', icon: Globe },
    { id: 'asia', name: 'Asia Pacific', icon: Globe },
    { id: 'middleeast', name: 'Middle East', icon: Globe },
    { id: 'africa', name: 'Africa', icon: Globe }
  ];

  const strategicPartners = [
    {
      id: 1,
      name: 'QuantumTech Solutions',
      category: 'technology',
      region: 'northamerica',
      logo: '🔬',
      description: 'Leading quantum computing research and development company specializing in quantum algorithms and quantum-safe cryptography.',
      partnershipType: 'Strategic Technology Alliance',
      benefits: [
        'Joint quantum computing research initiatives',
        'Shared intellectual property development',
        'Co-marketing and go-to-market strategies',
        'Technology integration and interoperability'
      ],
      achievements: [
        'Successfully deployed quantum-resistant encryption for 50+ enterprise clients',
        'Published 15+ joint research papers in top-tier journals',
        'Generated $25M+ in combined revenue from joint solutions'
      ],
      website: 'https://quantumtechsolutions.com',
      contact: 'partnerships@quantumtechsolutions.com',
      established: '2022',
      tier: 'platinum'
    },
    {
      id: 2,
      name: 'CyberShield Global',
      category: 'cybersecurity',
      region: 'europe',
      logo: '🛡️',
      description: 'European cybersecurity leader providing advanced threat detection, incident response, and security consulting services.',
      partnershipType: 'Cybersecurity Solutions Partnership',
      benefits: [
        'Joint cybersecurity product development',
        'Shared threat intelligence and research',
        'Cross-border security operations centers',
        'Unified security compliance frameworks'
      ],
      achievements: [
        'Protected 200+ multinational corporations from cyber threats',
        'Reduced average incident response time by 60%',
        'Achieved 99.9% threat detection accuracy rate'
      ],
      website: 'https://cybershieldglobal.eu',
      contact: 'partnerships@cybershieldglobal.eu',
      established: '2021',
      tier: 'gold'
    },
    {
      id: 3,
      name: 'CloudForge Systems',
      category: 'cloud',
      region: 'asia',
      logo: '☁️',
      description: 'Asia-Pacific cloud infrastructure and DevOps automation company specializing in multi-cloud management and optimization.',
      partnershipType: 'Cloud Infrastructure Partnership',
      benefits: [
        'Multi-cloud deployment and management solutions',
        'Joint DevOps automation platform development',
        'Regional cloud infrastructure expansion',
        'Cost optimization and performance tuning services'
      ],
      achievements: [
        'Deployed cloud solutions for 300+ enterprises across APAC',
        'Achieved 40% cost reduction for cloud infrastructure',
        'Reduced deployment time by 80% through automation'
      ],
      website: 'https://cloudforgesystems.asia',
      contact: 'partnerships@cloudforgesystems.asia',
      established: '2023',
      tier: 'gold'
    },
    {
      id: 4,
      name: 'AIMind Labs',
      category: 'ai',
      region: 'northamerica',
      logo: '🧠',
      description: 'AI research laboratory focused on natural language processing, computer vision, and ethical AI development.',
      partnershipType: 'AI Research & Development Partnership',
      benefits: [
        'Joint AI model development and training',
        'Shared AI ethics and governance frameworks',
        'Co-development of industry-specific AI solutions',
        'Joint AI talent development programs'
      ],
      achievements: [
        'Developed 25+ industry-specific AI models',
        'Trained 100+ AI engineers through joint programs',
        'Published 30+ research papers on AI ethics and governance'
      ],
      website: 'https://aimindlabs.ai',
      contact: 'partnerships@aimindlabs.ai',
      established: '2022',
      tier: 'platinum'
    },
    {
      id: 5,
      name: 'InnovateHub',
      category: 'startups',
      region: 'europe',
      logo: '🚀',
      description: 'European innovation hub connecting startups with enterprise clients and providing incubation services.',
      partnershipType: 'Startup Ecosystem Partnership',
      benefits: [
        'Startup incubation and acceleration programs',
        'Enterprise-startup matchmaking services',
        'Joint innovation labs and co-working spaces',
        'Investment and funding opportunities'
      ],
      achievements: [
        'Accelerated 150+ technology startups',
        'Facilitated 75+ enterprise-startup partnerships',
        'Generated €50M+ in startup funding and investments'
      ],
      website: 'https://innovatehub.eu',
      contact: 'partnerships@innovatehub.eu',
      established: '2021',
      tier: 'silver'
    },
    {
      id: 6,
      name: 'TechConsult Pro',
      category: 'consulting',
      region: 'middleeast',
      logo: '💼',
      description: 'Middle Eastern technology consulting firm specializing in digital transformation and enterprise architecture.',
      partnershipType: 'Consulting Services Partnership',
      benefits: [
        'Joint consulting service delivery',
        'Shared methodology and best practices',
        'Regional market expansion support',
        'Knowledge sharing and training programs'
      ],
      achievements: [
        'Delivered digital transformation projects for 100+ enterprises',
        'Trained 500+ consultants in modern methodologies',
        'Achieved 95% client satisfaction rate'
      ],
      website: 'https://techconsultpro.me',
      contact: 'partnerships@techconsultpro.me',
      established: '2023',
      tier: 'silver'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Exclusive technology access and early adoption',
        'Joint product development and co-ownership',
        'Shared marketing and sales resources',
        'Priority support and dedicated account management',
        'Revenue sharing and joint profit participation'
      ],
      requirements: [
        'Minimum 5-year partnership commitment',
        'Annual joint investment of $1M+',
        'Shared intellectual property development',
        'Joint go-to-market strategy execution'
      ]
    },
    {
      name: 'Gold',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Advanced technology access and beta testing',
        'Joint solution development and integration',
        'Co-marketing and lead sharing',
        'Enhanced support and account management',
        'Revenue sharing on joint solutions'
      ],
      requirements: [
        'Minimum 3-year partnership commitment',
        'Annual joint investment of $500K+',
        'Product integration and interoperability',
        'Joint marketing and sales activities'
      ]
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Standard technology access and support',
        'Solution integration and compatibility',
        'Marketing support and lead generation',
        'Standard support and account management',
        'Referral commission on joint deals'
      ],
      requirements: [
        'Minimum 1-year partnership commitment',
        'Annual joint investment of $100K+',
        'Basic integration and compatibility',
        'Joint marketing activities'
      ]
    }
  ];

  const filteredPartners = strategicPartners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || partner.region === selectedRegion;
    return matchesCategory && matchesRegion;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'from-purple-500 to-pink-500';
      case 'gold': return 'from-yellow-500 to-orange-500';
      case 'silver': return 'from-gray-400 to-gray-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover Zion Tech Group's strategic partnerships with leading technology companies worldwide. Join our partner ecosystem and drive innovation together." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, AI partners, cybersecurity partners" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join forces with Zion Tech Group and our global network of technology leaders. 
              Together, we're building the future of AI, cybersecurity, and digital innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Strategic Partners</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Countries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">$100M+</div>
              <div className="text-gray-300">Joint Revenue</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Joint Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and commitment level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{tier.name} Partner</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Apply for {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Region Filter */}
              <div className="flex gap-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedRegion === region.id
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-purple-500'
                    }`}
                  >
                    <region.icon className="w-4 h-4" />
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Strategic Partners</h2>
            <p className="text-gray-300">Discover the innovative companies we collaborate with worldwide</p>
          </motion.div>

          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Partner Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-3 py-1 bg-gradient-to-r ${getTierColor(partner.tier)} text-white text-sm rounded-full`}>
                            {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)} Partner
                          </span>
                          <span className="text-sm text-gray-400">Since {partner.established}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partner Description */}
                  <p className="text-gray-300 mb-6">{partner.description}</p>

                  {/* Partnership Type */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Partnership Type:</h4>
                    <p className="text-cyan-400 font-medium">{partner.partnershipType}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {partner.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact & Website */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${partner.contact}`}
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Contact Partner
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No partners found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedRegion('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Partner Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Zion Tech Group and gain access to cutting-edge technology, 
              global markets, and a network of industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Apply for Partnership
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule a Meeting
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Inquiries</h2>
              <p className="text-xl text-gray-300">
                Ready to explore partnership opportunities? Contact our partnership team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Mon-Fri 9AM-6PM EST</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">24/7 response</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                <p className="text-cyan-400 font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm mt-2">Middletown, DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}