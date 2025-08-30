import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield, 
  Zap,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      name: 'Technology Partners',
      description: 'Leading technology companies providing cutting-edge solutions',
      icon: <Zap className="w-8 h-8" />,
      benefits: ['Access to latest technologies', 'Joint go-to-market strategies', 'Technical support and training'],
      count: 25
    },
    {
      name: 'System Integrators',
      description: 'Expert consultants helping clients implement our solutions',
      icon: <Users className="w-8 h-8" />,
      benefits: ['Implementation expertise', 'Local market knowledge', 'Ongoing support services'],
      count: 18
    },
    {
      name: 'Resellers',
      description: 'Trusted partners selling our solutions to their customer base',
      icon: <Users className="w-8 h-8" />,
      benefits: ['Revenue sharing opportunities', 'Marketing support', 'Sales enablement'],
      count: 32
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access to our comprehensive portfolio of AI and technology solutions',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Technical Excellence',
      description: 'World-class technical support and training for your team',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Global Reach',
      description: 'Expand your business with our international presence',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance standards',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const successStories = [
    {
      partner: 'TechCorp Solutions',
      industry: 'Healthcare Technology',
      result: 'Increased revenue by 300% through AI solutions',
      testimonial: 'Partnering with Zion Tech Group has transformed our business and opened new opportunities in the healthcare sector.'
    },
    {
      partner: 'Innovate Systems',
      industry: 'Financial Services',
      result: 'Successfully deployed AI compliance solutions to 50+ clients',
      testimonial: 'The technical expertise and support from Zion Tech Group have been exceptional.'
    },
    {
      partner: 'CloudFirst Partners',
      industry: 'Cloud Infrastructure',
      result: 'Expanded service portfolio and increased market share',
      testimonial: 'Our partnership has been a game-changer for our cloud services business.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners | Zion Tech Group - Join Our Ecosystem"
        description="Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies."
        keywords="partners, partnership, technology partners, system integrators, resellers, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Partner with Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Become a Partner
              </a>
              <a
                href="#partner-types"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section id="partner-types" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partner Types
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We work with different types of partners to deliver value to our customers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-slate-300 mb-4">{type.description}</p>
                  <div className="text-3xl font-bold text-cyan-400">{type.count}+</div>
                </div>
                
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
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
              Discover the advantages of joining our partner ecosystem
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partner Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our partners have grown their businesses with us
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{story.partner}</h3>
                <p className="text-cyan-400 text-sm mb-3">{story.industry}</p>
                <p className="text-green-400 font-semibold mb-4">{story.result}</p>
                <p className="text-slate-300 text-sm italic">"{story.testimonial}"</p>
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
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our ecosystem and start growing your business with cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}