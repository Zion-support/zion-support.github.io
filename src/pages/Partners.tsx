import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
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
  Heart,
  Cpu,
  Atom,
  Network,
  Eye,
  BarChart3,
  Lock,
  Leaf,
  Satellite,
  Target,
  Users2,
  Briefcase,
  BookOpen,
  Code,
  Server,
  Database,
  Smartphone,
  Truck,
  Building2,
  GraduationCap,
  Shield2,
  Zap2
} from 'lucide-react';
import SEO from '../components/SEO';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  website: string;
  location: string;
  specialties: string[];
}

interface PartnershipTier {
  name: string;
  icon: any;
  description: string;
  benefits: string[];
  requirements: string[];
  color: string;
}

const partners: Partner[] = [
  {
    id: '1',
    name: 'Microsoft Azure',
    logo: '/logos/microsoft-azure.svg',
    description: 'Leading cloud platform provider offering comprehensive cloud services and AI solutions.',
    category: 'Cloud & AI',
    tier: 'Platinum',
    website: 'https://azure.microsoft.com',
    location: 'Redmond, WA',
    specialties: ['Cloud Computing', 'AI Services', 'Enterprise Solutions']
  },
  {
    id: '2',
    name: 'Amazon Web Services',
    logo: '/logos/aws.svg',
    description: 'World\'s most comprehensive cloud platform with advanced AI and machine learning capabilities.',
    category: 'Cloud & AI',
    tier: 'Platinum',
    website: 'https://aws.amazon.com',
    location: 'Seattle, WA',
    specialties: ['Cloud Infrastructure', 'Machine Learning', 'IoT Solutions']
  },
  {
    id: '3',
    name: 'Google Cloud',
    logo: '/logos/google-cloud.svg',
    description: 'Innovative cloud platform with cutting-edge AI and data analytics solutions.',
    category: 'Cloud & AI',
    tier: 'Gold',
    website: 'https://cloud.google.com',
    location: 'Mountain View, CA',
    specialties: ['AI/ML', 'Data Analytics', 'Security']
  },
  {
    id: '4',
    name: 'IBM',
    logo: '/logos/ibm.svg',
    description: 'Global technology leader in AI, quantum computing, and enterprise solutions.',
    category: 'Enterprise & AI',
    tier: 'Gold',
    website: 'https://www.ibm.com',
    location: 'Armonk, NY',
    specialties: ['Quantum Computing', 'AI Solutions', 'Enterprise Software']
  },
  {
    id: '5',
    name: 'Oracle',
    logo: '/logos/oracle.svg',
    description: 'Leading provider of enterprise software and cloud infrastructure solutions.',
    category: 'Enterprise & Cloud',
    tier: 'Gold',
    website: 'https://www.oracle.com',
    location: 'Austin, TX',
    specialties: ['Database Solutions', 'Cloud Infrastructure', 'Enterprise Applications']
  },
  {
    id: '6',
    name: 'Salesforce',
    logo: '/logos/salesforce.svg',
    description: 'World\'s #1 CRM platform with AI-powered business solutions.',
    category: 'Business Solutions',
    tier: 'Silver',
    website: 'https://www.salesforce.com',
    location: 'San Francisco, CA',
    specialties: ['CRM', 'AI Analytics', 'Business Intelligence']
  },
  {
    id: '7',
    name: 'Cisco',
    logo: '/logos/cisco.svg',
    description: 'Global leader in networking, cybersecurity, and collaboration solutions.',
    category: 'Networking & Security',
    tier: 'Silver',
    website: 'https://www.cisco.com',
    location: 'San Jose, CA',
    specialties: ['Networking', 'Cybersecurity', 'Collaboration']
  },
  {
    id: '8',
    name: 'Dell Technologies',
    logo: '/logos/dell.svg',
    description: 'Leading provider of IT infrastructure and digital transformation solutions.',
    category: 'Infrastructure',
    tier: 'Silver',
    website: 'https://www.dell.com',
    location: 'Round Rock, TX',
    specialties: ['IT Infrastructure', 'Digital Transformation', 'Storage Solutions']
  }
];

const partnershipTiers: PartnershipTier[] = [
  {
    name: 'Platinum Partner',
    icon: Star,
    description: 'Our highest tier partnership with exclusive benefits and priority support.',
    benefits: [
      'Exclusive access to beta features and early releases',
      'Dedicated account manager and priority support',
      'Co-marketing opportunities and joint events',
      'Revenue sharing up to 30%',
      'Custom integration development',
      'White-label solutions',
      'Priority access to our AI and quantum computing resources'
    ],
    requirements: [
      'Minimum $1M annual revenue',
      '50+ enterprise customers',
      'Global presence in 3+ regions',
      'Certified technical team',
      'Joint go-to-market strategy'
    ],
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Gold Partner',
    icon: Award,
    description: 'Strategic partnership with significant benefits and growth opportunities.',
    benefits: [
      'Access to advanced features and APIs',
      'Dedicated partner success manager',
      'Revenue sharing up to 25%',
      'Joint marketing campaigns',
      'Technical training and certification',
      'Access to our AI services platform',
      'Priority customer referrals'
    ],
    requirements: [
      'Minimum $500K annual revenue',
      '25+ enterprise customers',
      'Regional market leadership',
      'Technical expertise in our domains',
      'Active partnership engagement'
    ],
    color: 'from-yellow-500 to-amber-600'
  },
  {
    name: 'Silver Partner',
    icon: TrendingUp,
    description: 'Growing partnership with solid foundation and expansion potential.',
    benefits: [
      'Standard feature access and APIs',
      'Partner success manager support',
      'Revenue sharing up to 20%',
      'Marketing materials and resources',
      'Technical documentation and training',
      'Access to our micro SaaS platform',
      'Partner portal access'
    ],
    requirements: [
      'Minimum $100K annual revenue',
      '10+ customers',
      'Market presence in target regions',
      'Basic technical capabilities',
      'Regular partnership activities'
    ],
    color: 'from-gray-400 to-slate-500'
  },
  {
    name: 'Bronze Partner',
    icon: Users,
    description: 'Entry-level partnership with growth opportunities and basic benefits.',
    benefits: [
      'Basic feature access',
      'Partner portal access',
      'Revenue sharing up to 15%',
      'Marketing resources',
      'Basic training materials',
      'Community access',
      'Growth path to higher tiers'
    ],
    requirements: [
      'Active business operations',
      'Interest in our technology domains',
      'Commitment to partnership growth',
      'Basic technical understanding',
      'Regular communication'
    ],
    color: 'from-amber-600 to-orange-700'
  }
];

const partnershipCategories = [
  {
    name: 'Technology Partners',
    icon: Cpu,
    description: 'Software, hardware, and platform providers',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'AI & ML Partners',
    icon: Brain,
    description: 'Artificial intelligence and machine learning specialists',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Cloud platforms and infrastructure providers',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Cybersecurity Partners',
    icon: Shield,
    description: 'Security and compliance solution providers',
    color: 'from-red-500 to-orange-500'
  },
  {
    name: 'Business Solutions',
    icon: Building,
    description: 'Enterprise software and business applications',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Emerging Technologies',
    icon: Atom,
    description: 'Quantum computing, IoT, and space tech',
    color: 'from-indigo-500 to-purple-500'
  }
];

export function Partners() {
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPartners = partners.filter(partner => {
    const matchesTier = selectedTier === 'All' || partner.tier === selectedTier;
    const matchesCategory = selectedCategory === 'All' || partner.category === selectedCategory;
    return matchesTier && matchesCategory;
  });

  const tiers = ['All', ...Array.from(new Set(partners.map(p => p.tier)))];
  const categories = ['All', ...Array.from(new Set(partners.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Partners - Zion Tech Group"
        description="Join our network of technology partners and unlock new opportunities for growth, innovation, and market expansion."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our network of technology leaders and unlock new opportunities for growth,
              innovation, and market expansion in the digital transformation landscape.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Partner With Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive support, resources, and opportunities to help our partners
              succeed in the rapidly evolving technology landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expanded Market Reach',
                description: 'Access our extensive customer base and market presence across multiple industries.'
              },
              {
                icon: Users,
                title: 'Joint Go-to-Market',
                description: 'Collaborate on marketing campaigns, events, and customer acquisition strategies.'
              },
              {
                icon: Globe,
                title: 'Global Presence',
                description: 'Leverage our international network and local market expertise.'
              },
              {
                icon: Award,
                title: 'Recognition & Rewards',
                description: 'Earn rewards, certifications, and recognition for your partnership achievements.'
              },
              {
                icon: TrendingUp,
                title: 'Revenue Growth',
                description: 'Increase your revenue through joint solutions and referral programs.'
              },
              {
                icon: Shield,
                title: 'Technical Support',
                description: 'Access our technical expertise and resources to enhance your solutions.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Tiers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  index === 0
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20'
                    : 'border-slate-700/50 hover:border-cyan-400/50'
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    index === 0
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-500'
                      : 'bg-gradient-to-br from-slate-600 to-slate-700'
                  }`}>
                    <tier.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Current Partners */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders who share our vision for
              innovation and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                {tiers.map(tier => (
                  <option key={tier} value={tier}>{tier} Tier</option>
                ))}
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-zion-slate-dark/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                    partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :
                    partner.tier === 'Silver' ? 'bg-gray-500/20 text-gray-300' :
                    'bg-amber-600/20 text-amber-300'
                  }`}>
                    {partner.tier}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                
                <div className="mb-4">
                  <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {partner.location}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white text-sm font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  Visit Website
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Partner Network?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's explore how we can work together to drive innovation,
              expand market reach, and deliver exceptional value to customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Partnership Discussion
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Our Team
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Accelerate Growth</h4>
                <p className="text-gray-300 text-sm">Access cutting-edge technology and expand your market reach</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Expand Network</h4>
                <p className="text-gray-300 text-sm">Connect with industry leaders and potential customers</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Increase Revenue</h4>
                <p className="text-gray-300 text-sm">Benefit from our revenue sharing and referral programs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Partners;
