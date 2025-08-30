import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Star, Users, Handshake, TrendingUp, Award, Globe, Building, Rocket } from 'lucide-react';

const Partners: React.FC = () => {
  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and customers through our extensive network',
      icon: TrendingUp
    },
    {
      title: 'Technical Support',
      description: 'Get expert guidance and technical assistance from our team',
      icon: Users
    },
    {
      title: 'Marketing Support',
      description: 'Leverage our marketing resources and brand recognition',
      icon: Award
    },
    {
      title: 'Global Reach',
      description: 'Expand your business internationally with our global presence',
      icon: Globe
    }
  ];

  const existingPartners = [
    {
      name: 'TechCorp Solutions',
      logo: '🏢',
      category: 'Technology',
      description: 'Leading provider of enterprise software solutions',
      year: '2022'
    },
    {
      name: 'CloudNet Systems',
      logo: '☁️',
      category: 'Cloud',
      description: 'Specialized in cloud infrastructure and DevOps',
      year: '2023'
    },
    {
      name: 'DataFlow Analytics',
      logo: '📊',
      category: 'Analytics',
      description: 'Advanced data analytics and business intelligence',
      year: '2023'
    }
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Contact',
      description: 'Reach out to discuss partnership opportunities',
      duration: '1-2 days'
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'We evaluate your capabilities and fit',
      duration: '3-5 days'
    },
    {
      step: '3',
      title: 'Agreement',
      description: 'Sign partnership agreement and terms',
      duration: '1-2 weeks'
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Begin collaboration and joint initiatives',
      duration: 'Ongoing'
    }
  ];

  return (
    <>
      <SEO
        title="Partnership Opportunities | Zion Tech Group"
        description="Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies."
        keywords="partnership, technology partners, AI partners, cloud partners, Zion Tech Group partners"
        canonical="https://ziontechgroup.com/partners"
      />
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Partner With <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
                Join our ecosystem of technology innovators and help organizations transform their business with cutting-edge solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Become a Partner
                </button>
                <button className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
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
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partnership Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Simple steps to become a Zion Tech Group partner
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      
                      {index < partnershipProcess.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2 z-0"></div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{step.description}</p>
                    <div className="text-cyan-400 text-sm font-medium">{step.duration}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;
