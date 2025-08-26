import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Building,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  Cpu,
  Zap
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      icon: <Building className="w-8 h-8 text-blue-400" />,
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver comprehensive solutions.',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint solution development',
        'Shared go-to-market strategies',
        'Technical collaboration and support'
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach and service delivery.',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing and sales support',
        'Training and certification programs',
        'Dedicated partner success managers'
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Partners',
      description: 'International partnerships to serve clients across different regions and markets.',
      benefits: [
        'Local market expertise',
        'Regional compliance knowledge',
        'Cultural and language support',
        'Expanded service coverage'
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Strategic Alliances',
      description: 'Long-term strategic partnerships focused on innovation and market leadership.',
      benefits: [
        'Joint research and development',
        'Innovation labs and centers',
        'Thought leadership collaboration',
        'Industry influence and recognition'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and Microsoft 365 integration.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'AWS',
      logo: 'A',
      category: 'Cloud Partner',
      description: 'Advanced consulting partner for AWS cloud infrastructure and services.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Google Cloud',
      logo: 'G',
      category: 'Cloud Partner',
      description: 'Partnership for Google Cloud Platform solutions and AI services.',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'IBM',
      logo: 'I',
      category: 'AI Partner',
      description: 'Collaboration on enterprise AI solutions and Watson platform integration.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Oracle',
      logo: 'O',
      category: 'Database Partner',
      description: 'Strategic partnership for enterprise database solutions and cloud services.',
      color: 'from-red-600 to-red-700'
    },
    {
      name: 'Cisco',
      logo: 'C',
      category: 'Networking Partner',
      description: 'Partnership for enterprise networking and cybersecurity solutions.',
      color: 'from-blue-700 to-blue-800'
    }
  ];

  const partnershipTiers = [
    {
      name: "Platinum",
      description: "Strategic technology partnerships with joint go-to-market initiatives",
      benefits: [
        "Joint product development",
        "Shared marketing campaigns",
        "Technical integration support",
        "Revenue sharing opportunities",
        "Executive relationship management"
      ],
      requirements: "Annual revenue >$100M, strategic alignment, technical integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Gold",
      description: "Advanced partnership with comprehensive collaboration and support",
      benefits: [
        "Co-marketing opportunities",
        "Technical training and certification",
        "Dedicated partner success manager",
        "Revenue sharing programs",
        "Priority support and escalation"
      ],
      requirements: "Annual revenue >$50M, proven track record, technical expertise",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Silver",
      description: "Standard partnership with essential collaboration and support",
      benefits: [
        "Marketing materials and support",
        "Basic training and certification",
        "Partner portal access",
        "Revenue sharing opportunities",
        "Standard support channels"
      ],
      requirements: "Annual revenue >$10M, business alignment, commitment to growth",
      color: "from-gray-400 to-gray-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Handshake className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Join our network of technology partners and strategic alliances to deliver 
            innovative solutions and drive mutual growth in the AI and tech ecosystem.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{type.title}</h3>
                <p className="text-zion-slate-light text-center text-sm mb-4">{type.description}</p>
                <ul className="space-y-2 text-sm">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-zion-cyan flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Partners */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Current Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${partner.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                    <span className="text-sm text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Tiers */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Tiers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full mb-4`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light">{tier.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-zion-slate-light flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                  <p className="text-zion-slate-light text-sm">{tier.requirements}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join our network of technology partners and strategic alliances. 
              Let's explore how we can work together to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnerships@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Start Partnership Discussion
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
