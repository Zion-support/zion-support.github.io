import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Handshake, 
  Users, 
  Globe, 
  Rocket, 
  Star, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle,
  Building,
  Code,
  Cloud,
  Brain,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Partnerships() {
  const [selectedPartnership, setSelectedPartnership] = useState<string | null>(null);

  const partnershipTypes = [
    {
      id: 'technology-partners',
      title: 'Technology Partners',
      description: 'Integrate cutting-edge AI and quantum technologies into your solutions',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Access to revolutionary AI technologies',
        'Quantum computing capabilities',
        'Advanced cybersecurity solutions',
        'Cloud infrastructure expertise'
      ],
      requirements: [
        'Technology company or startup',
        'Innovation-focused mindset',
        'Commitment to excellence',
        'Global market presence'
      ]
    },
    {
      id: 'channel-partners',
      title: 'Channel Partners',
      description: 'Resell and implement our solutions in your markets',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'High-margin reseller opportunities',
        'Comprehensive training and support',
        'Marketing and sales enablement',
        'Dedicated partner success team'
      ],
      requirements: [
        'Established sales channels',
        'Technical implementation capabilities',
        'Strong customer relationships',
        'Regional market expertise'
      ]
    },
    {
      id: 'strategic-partners',
      title: 'Strategic Partners',
      description: 'Deep collaboration on joint ventures and market expansion',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Joint product development',
        'Shared intellectual property',
        'Co-marketing initiatives',
        'Revenue sharing opportunities'
      ],
      requirements: [
        'Complementary business model',
        'Significant market presence',
        'Innovation leadership',
        'Long-term commitment'
      ]
    },
    {
      id: 'ecosystem-partners',
      title: 'Ecosystem Partners',
      description: 'Join our technology ecosystem and innovation network',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Access to innovation network',
        'Collaboration opportunities',
        'Technology sharing',
        'Market intelligence'
      ],
      requirements: [
        'Innovation-focused organization',
        'Technology expertise',
        'Collaborative mindset',
        'Global perspective'
      ]
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Global',
      partnership: 'Technology Partner',
      result: 'Integrated our AI platform, increasing efficiency by 300%',
      logo: '/images/partners/techcorp.png'
    },
    {
      company: 'InnovateTech Solutions',
      partnership: 'Channel Partner',
      result: 'Generated $2M in revenue through our solutions',
      logo: '/images/partners/innovatetech.png'
    },
    {
      company: 'FutureSystems Inc',
      partnership: 'Strategic Partner',
      result: 'Co-developed revolutionary AI platform',
      logo: '/images/partners/futuresystems.png'
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'Let\'s explore how we can work together',
      icon: MessageCircle
    },
    {
      step: 2,
      title: 'Partnership Assessment',
      description: 'Evaluate mutual benefits and alignment',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Agreement & Onboarding',
      description: 'Formalize partnership and begin collaboration',
      icon: Handshake
    },
    {
      step: 4,
      title: 'Growth & Success',
      description: 'Scale together and achieve mutual success',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <SEO 
        title="Partnerships | Zion Tech Group"
        description="Join Zion Tech Group's partnership network. Technology partners, channel partners, strategic partnerships, and ecosystem collaboration opportunities."
        keywords="partnerships, technology partners, channel partners, strategic partnerships, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-8"
              >
                <Handshake className="w-4 h-4 mr-2" />
                Strategic Partnerships
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Partner With
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Join our global network of innovative partners and together we'll shape the future 
                of technology, drive market transformation, and create unprecedented value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and 
                join our ecosystem of innovation leaders.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((partnership, index) => (
                <motion.div
                  key={partnership.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${partnership.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <partnership.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {partnership.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {partnership.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-purple-400 text-sm uppercase tracking-wide mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {partnership.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-400 text-sm uppercase tracking-wide mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {partnership.requirements.map((requirement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined process makes it easy to become a partner and start 
                creating value together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    {index < partnershipProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-4"></div>
                    )}
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partner Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our partners have transformed their businesses and achieved 
                remarkable results through collaboration.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {story.company}
                  </h3>
                  
                  <p className="text-purple-400 text-sm font-medium mb-4">
                    {story.partnership}
                  </p>
                  
                  <p className="text-gray-300">
                    {story.result}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Join our network of innovative partners and together we'll shape 
                the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Start Partnership Discussion
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  Download Partnership Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  Let's Discuss Partnership Opportunities
                </h3>
                <p className="text-gray-300 mb-8">
                  Ready to explore how we can work together? Our partnership team 
                  is here to discuss opportunities and answer your questions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    +1 302 464 0950
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    partnerships@ziontechgroup.com
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    364 E Main St STE 1008, Middletown DE 19709
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
              >
                <h4 className="text-xl font-bold text-white mb-6">
                  Quick Partnership Inquiry
                </h4>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400">
                    <option value="">Select Partnership Type</option>
                    <option value="technology">Technology Partner</option>
                    <option value="channel">Channel Partner</option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="ecosystem">Ecosystem Partner</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your partnership goals..."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  ></textarea>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Send Inquiry
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}