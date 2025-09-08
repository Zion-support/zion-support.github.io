import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Handshake,
  Building,
  Users,
  Globe,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Target,
  TrendingUp,
  Lightbulb,
  Code,
  Server,
  Shield,
  Cloud,
  Rocket,
  Atom,
  Leaf,
  Zap,
  Brain,
  Heart,
  Factory,
  ShoppingCart,
  Building2,
  GraduationCap,
  BookOpen,
  Video,
  ExternalLink,
  FileText
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Strategic Partners',
      description: 'Long-term strategic partnerships for joint market expansion and innovation.',
      benefits: ['Joint go-to-market strategies', 'Shared R&D initiatives', 'Market expansion support', 'Revenue sharing opportunities'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Technology Partners',
      description: 'Technology integration partnerships for enhanced solution capabilities.',
      benefits: ['API integrations', 'Platform partnerships', 'Technology licensing', 'Joint development'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Channel Partners',
      description: 'Distribution and reseller partnerships for global market reach.',
      benefits: ['Reseller programs', 'Distribution networks', 'Training and certification', 'Marketing support'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Alliance Partners',
      description: 'Industry alliance partnerships for thought leadership and standards.',
      benefits: ['Industry standards development', 'Thought leadership initiatives', 'Joint research projects', 'Conference participation'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft-logo.png',
      type: 'Strategic Partner',
      description: 'Cloud infrastructure and AI platform partnership for enterprise solutions.',
      year: '2023',
      category: 'Technology'
    },
    {
      name: 'AWS',
      logo: '/partners/aws-logo.png',
      type: 'Technology Partner',
      description: 'Cloud services and machine learning platform integration.',
      year: '2023',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud-logo.png',
      type: 'Technology Partner',
      description: 'AI and machine learning platform collaboration.',
      year: '2024',
      category: 'AI/ML'
    },
    {
      name: 'IBM',
      logo: '/partners/ibm-logo.png',
      type: 'Strategic Partner',
      description: 'Enterprise AI and quantum computing research partnership.',
      year: '2024',
      category: 'Enterprise'
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce-logo.png',
      type: 'Technology Partner',
      description: 'CRM integration and business process automation.',
      year: '2023',
      category: 'CRM'
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle-logo.png',
      type: 'Technology Partner',
      description: 'Database and enterprise application integration.',
      year: '2024',
      category: 'Database'
    }
  ];

  const partnerBenefits = [
    {
      icon: Target,
      title: 'Market Expansion',
      description: 'Access new markets and customer segments through our global network.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Increase revenue through joint solutions and referral programs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Collaborate on cutting-edge technology solutions and research.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expertise Access',
      description: 'Leverage our specialized knowledge in AI, quantum computing, and cybersecurity.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share risks and costs in large-scale technology projects.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your presence with our international operations and networks.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Schedule a meeting to discuss partnership opportunities and mutual goals.',
      icon: Phone
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Evaluate partnership fit, market opportunities, and technical compatibility.',
      icon: Target
    },
    {
      step: '03',
      title: 'Proposal',
      description: 'Develop detailed partnership proposal with terms, benefits, and timeline.',
      icon: FileText
    },
    {
      step: '04',
      title: 'Agreement',
      description: 'Finalize partnership agreement and begin collaboration planning.',
      icon: Handshake
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Execute partnership initiatives and go-to-market strategies.',
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join Zion Tech Group's partner ecosystem. Strategic partnerships, technology integrations, and global market expansion opportunities for technology companies."
        keywords="partnerships, strategic partners, technology partners, channel partners, alliance partners, Zion Tech Group, business partnerships"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner with <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our ecosystem of technology partners and unlock new opportunities for growth, 
              innovation, and market expansion. Together, we can transform industries and create 
              lasting value for our customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 inline-flex items-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Partnership <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Types</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  
                  <div className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading technology companies and industry leaders worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded-full">
                      {partner.type}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{partner.year}</span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-sm mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="text-xs text-gray-500">
                    Category: {partner.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Partner</span> With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Partnership <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to become a Zion Tech Group partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  {index < partnershipProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-indigo-400" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Partner</span> With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can create value together and transform industries through strategic partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 inline-flex items-center group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}