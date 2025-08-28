import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building, 
  Globe, 
  Star, 
  ArrowRight, 
  Handshake, 
  Award, 
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that enhance our solutions',
      icon: Brain,
      partners: [
        { name: 'Microsoft', logo: 'M', tier: 'Platinum', category: 'Cloud & AI' },
        { name: 'AWS', logo: 'AWS', tier: 'Platinum', category: 'Cloud Infrastructure' },
        { name: 'Google Cloud', logo: 'GC', tier: 'Gold', category: 'AI & ML' },
        { name: 'IBM', logo: 'IBM', tier: 'Gold', category: 'Enterprise Solutions' },
        { name: 'OpenAI', logo: 'O', tier: 'Gold', category: 'AI Research' },
        { name: 'Anthropic', logo: 'A', tier: 'Silver', category: 'AI Safety' },
        { name: 'NVIDIA', logo: 'N', tier: 'Gold', category: 'AI Hardware' },
        { name: 'Intel', logo: 'I', tier: 'Silver', category: 'AI Processors' }
      ]
    },
    {
      title: 'System Integrators',
      description: 'Partners who help implement our solutions worldwide',
      icon: Building,
      partners: [
        { name: 'Accenture', logo: 'A', tier: 'Platinum', category: 'Global SI' },
        { name: 'Deloitte', logo: 'D', tier: 'Platinum', category: 'Consulting' },
        { name: 'PwC', logo: 'P', tier: 'Gold', category: 'Advisory' }
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resellers and distributors expanding our reach',
      icon: Globe,
      partners: [
        { name: 'TechCorp', logo: 'TC', tier: 'Silver', category: 'Reseller' },
        { name: 'InnovateTech', logo: 'IT', tier: 'Silver', category: 'Distributor' }
      ]
    },
    {
      title: 'AI Research Partners',
      description: 'Leading AI research institutions and specialized AI companies',
      icon: Brain,
      partners: [
        { name: 'MIT AI Lab', logo: 'MIT', tier: 'Platinum', category: 'AI Research' },
        { name: 'Stanford AI', logo: 'S', tier: 'Platinum', category: 'AI Research' },
        { name: 'DeepMind', logo: 'D', tier: 'Gold', category: 'AI Research' },
        { name: 'Meta AI', logo: 'M', tier: 'Gold', category: 'AI Research' }
      ]
    }
  ];

  const benefits = [
    { icon: Star, title: 'Exclusive Access', description: 'Early access to new features and beta programs' },
    { icon: Shield, title: 'Technical Support', description: 'Dedicated technical support and training' },
    { icon: TrendingUp, title: 'Revenue Growth', description: 'Competitive margins and growth opportunities' },
    { icon: Award, title: 'Recognition', description: 'Partner awards and marketing support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <Handshake className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Partners</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our global partner ecosystem and help organizations transform their business with cutting-edge technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Partner Categories */}
        <div className="space-y-12">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.1) + (partnerIndex * 0.05) }}
                    className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                      {partner.logo}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{partner.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{partner.category}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      partner.tier === 'Platinum' ? 'bg-yellow-100 text-yellow-800' :
                      partner.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {partner.tier}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Partnership Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
