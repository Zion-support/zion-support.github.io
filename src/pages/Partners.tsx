import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building2, 
  Users, 
  Star, 
  Award, 
  TrendingUp, 
  Globe, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Target,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      icon: Brain,
      description: 'Collaborate on cutting-edge AI, quantum computing, and emerging technology solutions',
      benefits: [
        'Joint product development',
        'Technology integration',
        'Shared intellectual property',
        'Co-marketing opportunities'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Channel Partners',
      icon: Users,
      description: 'Resell and implement our solutions to your customer base',
      benefits: [
        'Competitive margins',
        'Sales enablement support',
        'Technical training',
        'Marketing materials'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Strategic Partners',
      icon: Handshake,
      description: 'Long-term strategic relationships for market expansion and innovation',
      benefits: [
        'Exclusive market access',
        'Strategic planning support',
        'Investment opportunities',
        'Board representation'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Implementation Partners',
      icon: Rocket,
      description: 'Deliver our solutions with your implementation expertise',
      benefits: [
        'Certification programs',
        'Implementation support',
        'Revenue sharing',
        'Technical resources'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.svg',
      type: 'Technology Partner',
      description: 'Strategic partnership for Azure AI and cloud solutions integration',
      year: '2023',
      featured: true
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.svg',
      type: 'Cloud Partner',
      description: 'AWS cloud infrastructure and AI services collaboration',
      year: '2023',
      featured: true
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.svg',
      type: 'Technology Partner',
      description: 'Google Cloud AI and machine learning platform integration',
      year: '2023',
      featured: true
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.svg',
      type: 'Strategic Partner',
      description: 'IBM Watson AI and enterprise solutions partnership',
      year: '2022',
      featured: false
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.svg',
      type: 'Technology Partner',
      description: 'Oracle Cloud and database technology integration',
      year: '2022',
      featured: false
    },
    {
      name: 'Salesforce',
      logo: '/partners/salesforce.svg',
      type: 'Platform Partner',
      description: 'Salesforce CRM and AI integration solutions',
      year: '2023',
      featured: false
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      icon: TrendingUp,
      description: 'Access new markets and revenue streams through our partnership network',
      metrics: 'Average 40% revenue increase'
    },
    {
      title: 'Technology Access',
      icon: Brain,
      description: 'Get early access to cutting-edge AI and quantum computing technologies',
      metrics: 'Exclusive beta access'
    },
    {
      title: 'Market Expansion',
      icon: Globe,
      description: 'Expand your reach into new geographic and industry markets',
      metrics: 'Access to 50+ countries'
    },
    {
      title: 'Innovation Support',
      icon: Zap,
      description: 'Collaborate on innovative solutions and research projects',
      metrics: 'Joint R&D programs'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Schedule a meeting to discuss partnership opportunities and alignment',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Partnership Assessment',
      description: 'Evaluate strategic fit, capabilities, and mutual benefits',
      duration: '2-4 weeks'
    },
    {
      step: '03',
      title: 'Agreement Development',
      description: 'Develop partnership terms, agreements, and implementation plans',
      duration: '4-6 weeks'
    },
    {
      step: '04',
      title: 'Launch & Execution',
      description: 'Launch partnership with joint go-to-market activities',
      duration: 'Ongoing'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'partnerships@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Join our partnership network and unlock new opportunities in AI, quantum computing, and emerging technologies. Strategic partnerships for mutual growth and innovation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Partnerships
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join our global partnership network and unlock new opportunities in AI, 
              quantum computing, and emerging technologies. Together, we can achieve 
              more than we ever could alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=partnership"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#partnership-types"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise. 
              Each type offers unique benefits and growth opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 h-full">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${type.color} w-16 h-16 mb-6 flex items-center justify-center`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact?type=partnership"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More About {type.title}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies 
              across technology, cloud, and enterprise solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-xl border transition-all duration-300 h-full ${
                  partner.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`}>
                  {/* Placeholder for partner logo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-gray-400" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{partner.type}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{partner.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Since {partner.year}</span>
                    {partner.featured && (
                      <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our partnerships are built on mutual success, innovation, and growth. 
              Discover the benefits of joining our ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-sm text-cyan-400 font-semibold">{benefit.metrics}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined partnership process ensures a smooth journey from initial 
              discussion to successful collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  
                  {index < partnershipProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform translate-x-4"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                <div className="text-sm text-cyan-400 font-semibold">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can work together to create innovative solutions 
              and drive mutual growth. Our partnership team is ready to help you get started.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white group-hover:text-cyan-400 transition-colors">{contactInfo.phone}</span>
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white group-hover:text-cyan-400 transition-colors">{contactInfo.email}</span>
              </a>
              
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white text-sm">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=partnership"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Partnership Discussion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule a Meeting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
