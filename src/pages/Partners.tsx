import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Building, 
  Globe, 
  Star, 
  Award, 
  TrendingUp, 
  Zap, 
  Shield, 
  Rocket,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      description: 'Leading technology companies providing cutting-edge solutions',
      benefits: [
        'Access to latest technologies',
        'Joint product development',
        'Technical expertise sharing',
        'Market expansion support'
      ]
    },
    {
      title: 'Channel Partners',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      description: 'Resellers and distributors expanding our market reach',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing support',
        'Training and certification',
        'Dedicated partner portal'
      ]
    },
    {
      title: 'Strategic Partners',
      icon: Building,
      color: 'from-purple-600 to-pink-600',
      description: 'Long-term strategic relationships driving mutual growth',
      benefits: [
        'Joint go-to-market strategies',
        'Shared innovation initiatives',
        'Cross-selling opportunities',
        'Strategic planning collaboration'
      ]
    },
    {
      title: 'Global Partners',
      icon: Globe,
      color: 'from-orange-600 to-red-600',
      description: 'International partners expanding our global presence',
      benefits: [
        'Local market expertise',
        'Cultural understanding',
        'Regulatory compliance',
        'Regional support networks'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider',
      partnership: 'Azure cloud services and AI integration'
    },
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      category: 'Technology Partner',
      description: 'Premier cloud computing platform',
      partnership: 'Cloud infrastructure and AI services'
    },
    {
      name: 'Google Cloud',
      logo: 'GC',
      category: 'Technology Partner',
      description: 'Innovative cloud and AI platform',
      partnership: 'Machine learning and data analytics'
    },
    {
      name: 'IBM',
      logo: 'IBM',
      category: 'Strategic Partner',
      description: 'Enterprise technology solutions',
      partnership: 'AI and quantum computing initiatives'
    },
    {
      name: 'Oracle',
      logo: 'O',
      category: 'Technology Partner',
      description: 'Database and enterprise software',
      partnership: 'Enterprise data management solutions'
    },
    {
      name: 'Salesforce',
      logo: 'SF',
      category: 'Strategic Partner',
      description: 'Customer relationship management',
      partnership: 'AI-powered CRM integration'
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Revenue Growth',
      icon: TrendingUp,
      description: 'Increase your revenue through our proven solutions and market expertise',
      metrics: 'Average 40% revenue increase'
    },
    {
      title: 'Technical Excellence',
      icon: Star,
      description: 'Access to cutting-edge AI and technology solutions',
      metrics: '100+ technology patents'
    },
    {
      title: 'Market Expansion',
      icon: Globe,
      description: 'Expand into new markets with our global presence',
      metrics: '25+ countries served'
    },
    {
      title: 'Innovation Support',
      icon: Rocket,
      description: 'Collaborate on innovative solutions and research',
      metrics: '$50M+ R&D investment'
    }
  ];

  const partnerPrograms = [
    {
      name: 'Silver Partner',
      requirements: 'Basic partnership agreement',
      benefits: [
        'Access to partner portal',
        'Basic marketing materials',
        'Email support',
        'Training resources'
      ],
      revenue: 'Up to $100K annually'
    },
    {
      name: 'Gold Partner',
      requirements: 'Demonstrated success and commitment',
      benefits: [
        'All Silver benefits',
        'Dedicated partner manager',
        'Advanced training programs',
        'Marketing development funds',
        'Joint marketing campaigns'
      ],
      revenue: '$100K - $500K annually'
    },
    {
      name: 'Platinum Partner',
      requirements: 'Strategic partnership with proven results',
      benefits: [
        'All Gold benefits',
        'Executive relationship management',
        'Custom development support',
        'Exclusive market access',
        'Strategic planning sessions'
      ],
      revenue: '$500K+ annually'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Strategic partnerships and collaboration opportunities with leading technology companies. Join our partner ecosystem and grow together."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology partners and grow your business with cutting-edge AI solutions and global market access.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
              </Link>
              <Link
                to="/partnership-opportunities"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Opportunities
              </Link>
            </div>
          </motion.div>
        </div>

      {/* Partnership Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We offer various partnership models to suit different business needs and collaboration goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                    <p className="text-slate-400 text-sm">{type.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Partners</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We're proud to collaborate with industry leaders and innovative companies worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{partner.logo}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                  <span className="text-sm text-cyan-400">{partner.category}</span>
                </div>
                
                <p className="text-slate-300 text-sm mb-3">{partner.description}</p>
                <p className="text-slate-400 text-xs">{partner.partnership}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Discover the advantages of joining our partner ecosystem and growing your business with Zion Tech Group.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{benefit.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{benefit.metrics}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Partner Programs</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose the partnership level that best fits your business goals and growth objectives.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 rounded-xl p-6 border ${index === 1 ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-slate-700'}`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{program.name}</h3>
                  <div className="text-cyan-400 font-semibold mb-2">{program.revenue}</div>
                  <p className="text-slate-400 text-sm">{program.requirements}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    index === 1
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">How to Become a Partner</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Simple steps to start your partnership journey with Zion Tech Group.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Initial Contact', description: 'Reach out to discuss partnership opportunities' },
              { step: '2', title: 'Assessment', description: 'We evaluate mutual fit and potential' },
              { step: '3', title: 'Agreement', description: 'Sign partnership agreement and begin onboarding' },
              { step: '4', title: 'Launch', description: 'Start collaborating and growing together' }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Let's discuss how we can grow together and create mutual value for our businesses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <div className="text-slate-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
