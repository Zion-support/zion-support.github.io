import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';

const Partners = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Technology Partners',
      description: 'Collaborate with leading technology providers to deliver comprehensive solutions',
      benefits: ['Access to cutting-edge technology', 'Joint go-to-market strategies', 'Technical support and training'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Expand your reach through our global network of trusted partners',
      benefits: ['Revenue sharing opportunities', 'Marketing and sales support', 'Dedicated partner success team'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Innovation Partners',
      description: 'Join forces to develop next-generation solutions and breakthrough technologies',
      benefits: ['R&D collaboration', 'Intellectual property sharing', 'Joint patent opportunities'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'Extend your presence worldwide through our international partnership network',
      benefits: ['Local market expertise', 'Regulatory compliance support', 'Cultural adaptation assistance'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      year: '2023'
    },
    {
      name: 'AWS',
      logo: 'A',
      category: 'Cloud',
      description: 'Premier consulting partner for AWS infrastructure and services',
      year: '2022'
    },
    {
      name: 'Google Cloud',
      logo: 'G',
      category: 'Technology',
      description: 'Partner for Google Cloud AI and machine learning solutions',
      year: '2023'
    },
    {
      name: 'IBM',
      logo: 'I',
      category: 'Enterprise',
      description: 'Collaboration on enterprise AI and quantum computing solutions',
      year: '2022'
    },
    {
      name: 'Oracle',
      logo: 'O',
      category: 'Database',
      description: 'Strategic partner for Oracle cloud and database solutions',
      year: '2023'
    },
    {
      name: 'Salesforce',
      logo: 'S',
      category: 'CRM',
      description: 'Partner for Salesforce implementation and customization services',
      year: '2022'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Target,
      title: 'Expanded Market Reach',
      description: 'Access new markets and customer segments through our global network'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Increase sales and revenue through joint go-to-market initiatives'
    },
    {
      icon: Brain,
      title: 'Innovation Access',
      description: 'Gain access to cutting-edge technologies and research capabilities'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share risks and costs while expanding your business capabilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partnerships
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join our network of strategic partners and unlock new opportunities for growth, 
              innovation, and market expansion. Together, we can achieve more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Opportunities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the different ways you can partner with Zion Tech Group to create 
              mutual value and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-medium">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies 
              to deliver exceptional value to our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {partner.logo}
                  </div>
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {partner.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-sm text-cyan-400 mb-3">{partner.category}</p>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group and how 
              we can help accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined partnership process ensures a smooth onboarding experience 
              and sets the foundation for long-term success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Initial consultation to understand your business and partnership goals'
              },
              {
                step: '2',
                title: 'Evaluation',
                description: 'Assess mutual fit and identify collaboration opportunities'
              },
              {
                step: '3',
                title: 'Agreement',
                description: 'Define partnership terms and sign formal agreement'
              },
              {
                step: '4',
                title: 'Launch',
                description: 'Begin collaboration with dedicated support and resources'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of successful partners and unlock new opportunities 
              for growth and innovation. Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Partnership Discussion
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Download Partnership Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
