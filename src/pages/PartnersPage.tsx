import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Handshake, 
  Globe, 
  Award, 
  TrendingUp, 
  Building,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider',
      benefits: ['Azure credits', 'Technical support', 'Joint marketing']
    },
    {
      name: 'AWS',
      logo: 'A',
      category: 'Cloud Partner',
      description: 'World-class cloud infrastructure services',
      benefits: ['AWS credits', 'Architecture support', 'Training resources']
    },
    {
      name: 'Google Cloud',
      logo: 'G',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning platform',
      benefits: ['GCP credits', 'AI expertise', 'Research collaboration']
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partnership',
      description: 'Collaborate on cutting-edge technology solutions',
      icon: Building,
      benefits: ['Shared R&D', 'Technology licensing', 'Joint innovation']
    },
    {
      title: 'Channel Partnership',
      description: 'Expand market reach through strategic alliances',
      icon: Globe,
      benefits: ['Market expansion', 'Revenue sharing', 'Joint sales']
    },
    {
      title: 'Strategic Alliance',
      description: 'Long-term strategic collaboration for mutual growth',
      icon: Handshake,
      benefits: ['Strategic planning', 'Resource sharing', 'Market leadership']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed">
              Join forces with Zion Tech Group to create innovative solutions and expand your market reach. 
              Together, we can achieve more than we could alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partnership Types</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We offer various partnership models to suit different business needs and objectives.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <type.icon className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-zion-cyan/80 text-sm mb-4">{type.description}</p>
                <ul className="text-left space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-zion-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies worldwide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-white">{partner.logo}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                  <span className="text-sm text-zion-cyan/60">{partner.category}</span>
                </div>
                <p className="text-zion-cyan/80 text-sm mb-4 text-center">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-zion-cyan/60 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-zion-cyan" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
            <p className="text-xl text-zion-cyan/80 mb-8">
              Let's explore how we can work together to create innovative solutions and drive mutual success.
            </p>
            <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;