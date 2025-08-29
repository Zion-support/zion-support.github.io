import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Star, 
  Award, 
  TrendingUp, 
  Globe, 
  Building, 
  Zap,
  ArrowRight,
  CheckCircle,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Heart,
  Lock,
  Cpu,
  Database
} from 'lucide-react';

const partnerTiers = [
  {
    name: 'Strategic Partners',
    level: 'Platinum',
    icon: Star,
    color: 'from-yellow-400 to-orange-500',
    description: 'Our highest-level partnership for enterprise technology leaders',
    benefits: [
      'Exclusive access to beta features',
      'Joint go-to-market initiatives',
      'Dedicated partnership manager',
      'Revenue sharing opportunities',
      'Co-marketing campaigns',
      'Priority technical support'
    ],
    requirements: [
      'Minimum $10M annual revenue',
      'Established market presence',
      'Complementary technology stack',
      'Shared customer base'
    ]
  },
  {
    name: 'Technology Partners',
    level: 'Gold',
    icon: Award,
    color: 'from-amber-400 to-yellow-500',
    description: 'Technology integration and solution development partnerships',
    benefits: [
      'API access and documentation',
      'Technical integration support',
      'Joint solution development',
      'Marketing collaboration',
      'Training and certification',
      'Technical support access'
    ],
    requirements: [
      'Technology integration capabilities',
      'Developer resources',
      'Quality assurance processes',
      'Customer support infrastructure'
    ]
  },
  {
    name: 'Solution Partners',
    level: 'Silver',
    icon: TrendingUp,
    color: 'from-slate-400 to-gray-500',
    description: 'Implementation and delivery partnerships for customer success',
    benefits: [
      'Implementation training',
      'Sales enablement materials',
      'Technical documentation',
      'Customer referral program',
      'Partner portal access',
      'Basic support access'
    ],
    requirements: [
      'Implementation expertise',
      'Customer delivery capabilities',
      'Quality standards compliance',
      'Ongoing support commitment'
    ]
  }
];

const currentPartners = [
  {
    name: 'Microsoft',
    logo: 'MS',
    tier: 'Strategic',
    description: 'Cloud infrastructure and AI platform integration',
    specialties: ['Azure', 'AI Services', 'Enterprise Solutions'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Amazon Web Services',
    logo: 'AWS',
    tier: 'Strategic',
    description: 'Cloud computing and machine learning services',
    specialties: ['Cloud Infrastructure', 'ML/AI', 'IoT Solutions'],
    color: 'from-orange-500 to-yellow-600'
  },
  {
    name: 'Google Cloud',
    logo: 'GC',
    tier: 'Strategic',
    description: 'Cloud platform and AI/ML capabilities',
    specialties: ['Cloud Platform', 'AI/ML', 'Data Analytics'],
    color: 'from-blue-500 to-green-600'
  },
  {
    name: 'Salesforce',
    logo: 'SF',
    tier: 'Technology',
    description: 'CRM and business process automation',
    specialties: ['CRM', 'Automation', 'Business Intelligence'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Oracle',
    logo: 'OR',
    tier: 'Technology',
    description: 'Database and enterprise software solutions',
    specialties: ['Databases', 'Enterprise Software', 'Cloud Services'],
    color: 'from-red-500 to-orange-600'
  },
  {
    name: 'IBM',
    logo: 'IBM',
    tier: 'Technology',
    description: 'AI, cloud, and enterprise solutions',
    specialties: ['AI/ML', 'Cloud', 'Enterprise Solutions'],
    color: 'from-blue-500 to-purple-600'
  }
];

const partnershipAreas = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    description: 'Collaborate on AI solutions and ML model development',
    opportunities: [
      'Joint AI research and development',
      'Model training and optimization',
      'AI ethics and governance',
      'Custom AI solution development'
    ]
  },
  {
    name: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-400 to-cyan-500',
    description: 'Build scalable cloud solutions and infrastructure',
    opportunities: [
      'Multi-cloud strategies',
      'Infrastructure automation',
      'Performance optimization',
      'Security and compliance'
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-400 to-orange-500',
    description: 'Develop advanced security and compliance solutions',
    opportunities: [
      'Threat detection and response',
      'Zero trust architecture',
      'Compliance automation',
      'Security analytics'
    ]
  },
  {
    name: 'Digital Transformation',
    icon: Rocket,
    color: 'from-green-400 to-emerald-500',
    description: 'Transform business processes and customer experiences',
    opportunities: [
      'Process automation',
      'Customer experience optimization',
      'Legacy system modernization',
      'Change management'
    ]
  },
  {
    name: 'IoT & Edge Computing',
    icon: Cpu,
    color: 'from-indigo-400 to-purple-500',
    description: 'Build connected solutions and edge intelligence',
    opportunities: [
      'IoT platform development',
      'Edge computing solutions',
      'Real-time analytics',
      'Device management'
    ]
  },
  {
    name: 'Data & Analytics',
    icon: Database,
    color: 'from-cyan-400 to-blue-500',
    description: 'Unlock insights from data and build analytics solutions',
    opportunities: [
      'Data platform development',
      'Advanced analytics',
      'Business intelligence',
      'Data governance'
    ]
  }
];

const successStories = [
  {
    partner: 'TechCorp Solutions',
    industry: 'Healthcare',
    challenge: 'Legacy system modernization and AI integration',
    solution: 'Implemented AI-powered patient analytics and automated compliance monitoring',
    results: [
      '40% reduction in administrative overhead',
      'Improved patient outcomes by 25%',
      '100% compliance with healthcare regulations',
      'ROI achieved in 18 months'
    ]
  },
  {
    partner: 'InnovateTech',
    industry: 'Manufacturing',
    challenge: 'Digital twin implementation and predictive maintenance',
    solution: 'Built comprehensive digital twin platform with IoT integration',
    results: [
      '30% reduction in equipment downtime',
      'Predictive maintenance accuracy of 95%',
      '$2M annual cost savings',
      'Improved production efficiency by 20%'
    ]
  },
  {
    partner: 'SecureNet Systems',
    industry: 'Financial Services',
    challenge: 'Zero trust security implementation',
    solution: 'Deployed comprehensive zero trust architecture with AI threat detection',
    results: [
      '99.9% threat detection accuracy',
      'Zero security breaches in 2 years',
      'Compliance with all regulatory requirements',
      'Reduced security incidents by 80%'
    ]
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic, technology, and solution partnerships available."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Join our ecosystem of technology partners and grow your business with innovative solutions
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/30"
              >
                Become a Partner
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Contact Partnerships
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Tiers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                      <span className="text-sm text-slate-400">{tier.level} Level</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6">
                    {tier.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((requirement, requirementIndex) => (
                        <li key={requirementIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-center block"
                  >
                    Apply for {tier.level}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by leading technology companies and solution providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{partner.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                    <span className="text-sm text-cyan-400">{partner.tier} Partner</span>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm mb-4">
                  {partner.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {partner.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Areas */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore opportunities across our key technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {area.name}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    {area.opportunities.map((opportunity, opportunityIndex) => (
                      <div key={opportunityIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{opportunity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our partners are achieving remarkable results with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.partner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.partner}</h3>
                  <span className="text-sm text-cyan-400">{story.industry}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-slate-300 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-slate-300 text-sm">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our ecosystem and unlock new growth opportunities for your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Start Partnership Discussion
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Email Partnerships Team
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-600/50">
              <p className="text-slate-400 text-sm">
                Have questions about partnerships? Contact us at{' '}
                <a href="mailto:partnerships@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  partnerships@ziontechgroup.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
