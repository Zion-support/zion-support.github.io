import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Users, 
  Handshake, 
  TrendingUp, 
  Star, 
  Award, 
  Globe, 
  Zap, 
  Shield,
  Rocket,
  Lightbulb,
  Target,
  CheckCircle
} from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate cutting-edge AI, cloud, and emerging technology solutions',
      icon: Zap,
      benefits: ['API Access', 'Technical Support', 'Co-marketing', 'Revenue Sharing']
    },
    {
      title: 'Solution Partners',
      description: 'Deliver comprehensive technology solutions to your clients',
      icon: Rocket,
      benefits: ['White-label Solutions', 'Training Programs', 'Sales Support', 'Certification']
    },
    {
      title: 'Channel Partners',
      description: 'Resell our services and earn competitive commissions',
      icon: Users,
      benefits: ['High Margins', 'Marketing Materials', 'Lead Generation', 'Dedicated Support']
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access to high-demand technology solutions with proven ROI',
      icon: TrendingUp
    },
    {
      title: 'Technical Excellence',
      description: 'World-class technology platform with continuous innovation',
      icon: Award
    },
    {
      title: 'Global Reach',
      description: 'Expand your business internationally with our global presence',
      icon: Globe
    },
    {
      title: 'Innovation Leadership',
      description: 'Stay ahead with access to cutting-edge AI and emerging tech',
      icon: Lightbulb
    }
  ];

  const existingPartners = [
    {
      name: 'TechCorp Solutions',
      logo: '🏢',
      category: 'Technology',
      description: 'Leading enterprise software provider specializing in AI integration',
      year: '2022'
    },
    {
      name: 'CloudWorks Inc',
      logo: '☁️',
      category: 'Cloud',
      description: 'Cloud infrastructure and DevOps automation specialists',
      year: '2023'
    },
    {
      name: 'DataFlow Systems',
      logo: '📊',
      category: 'Analytics',
      description: 'Advanced data analytics and business intelligence platform',
      year: '2021'
    }
  ];

  const partnershipSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Discuss your business goals and partnership opportunities',
      icon: Handshake
    },
    {
      step: '02',
      title: 'Technical Assessment',
      description: 'Evaluate technical requirements and integration needs',
      icon: Target
    },
    {
      step: '03',
      title: 'Partnership Agreement',
      description: 'Finalize terms and sign partnership agreement',
      icon: CheckCircle
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Go live with comprehensive support and training',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partnership Opportunities | Zion Tech Group"
        description="Join our technology partnership ecosystem. Access cutting-edge AI, cloud, and emerging technology solutions with competitive benefits and comprehensive support."
        keywords="partnership, technology partners, solution partners, channel partners, AI solutions, cloud services, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partnership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Opportunities
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our technology ecosystem and help organizations leverage the power of AI, 
              cloud computing, and emerging technologies for digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300">Choose the partnership model that best fits your business</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-600 transition-colors duration-300">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the advantages of joining our technology ecosystem
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
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
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                      {partner.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{partner.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Partner since {partner.year}</span>
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partnership Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simple steps to become a valued technology partner
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Partnership Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our partnership team to discuss opportunities and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Contact Partnership Team
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
