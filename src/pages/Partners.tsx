import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Handshake, 
  Users, 
  Star, 
  Award, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Building2,
  Heart,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Leaf,
  Scale,
  Factory,
  ShoppingCart,
  GraduationCap,
  Zap,
  Cpu,
  Lock,
  Database,
  BarChart3,
  Phone,
  Mail,
  MapPin,
  Crown
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate with leading technology platforms and tools',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'API access and documentation',
        'Joint go-to-market strategies',
        'Technical integration support',
        'Co-marketing opportunities'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions to your customers',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Competitive commission structure',
        'Sales training and enablement',
        'Marketing materials and support',
        'Dedicated partner success manager'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Deep collaboration on joint solutions and markets',
      icon: Handshake,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Joint product development',
        'Shared intellectual property',
        'Market expansion support',
        'Strategic planning collaboration'
      ]
    },
    {
      title: 'Implementation Partners',
      description: 'Deliver our solutions to end customers',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Certification programs',
        'Implementation toolkits',
        'Technical training and support',
        'Revenue sharing opportunities'
      ]
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Technical Innovation',
      description: 'Leverage cutting-edge AI and technology',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Market Expansion',
      description: 'Reach new customer segments and geographies',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Brand Enhancement',
      description: 'Strengthen your market position and credibility',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: 'Microsoft',
      type: 'Technology Partner',
      description: 'Cloud infrastructure and AI platform integration',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AWS',
      logo: 'AWS',
      type: 'Technology Partner',
      description: 'Cloud services and machine learning solutions',
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Google Cloud',
      logo: 'Google Cloud',
      type: 'Technology Partner',
      description: 'AI and analytics platform collaboration',
      icon: Brain,
      color: 'from-blue-500 to-green-500'
    },
    {
      name: 'Salesforce',
      logo: 'Salesforce',
      type: 'Strategic Partner',
      description: 'CRM integration and business process automation',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const partnerPrograms = [
    {
      level: 'Bronze',
      requirements: 'Annual revenue: $100K+',
      benefits: [
        'Basic partner portal access',
        'Marketing materials',
        'Email support',
        'Partner directory listing'
      ],
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      level: 'Silver',
      requirements: 'Annual revenue: $500K+',
      benefits: [
        'Advanced partner portal',
        'Dedicated partner manager',
        'Sales training programs',
        'Co-marketing campaigns',
        'Technical certification'
      ],
      icon: Award,
      color: 'from-gray-500 to-slate-500'
    },
    {
      level: 'Gold',
      requirements: 'Annual revenue: $2M+',
      benefits: [
        'Premium partner portal',
        'Strategic planning sessions',
        'Custom marketing campaigns',
        'Revenue sharing programs',
        'Executive sponsorship'
      ],
      icon: Crown,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      level: 'Platinum',
      requirements: 'Annual revenue: $5M+',
      benefits: [
        'Exclusive partner benefits',
        'Joint innovation labs',
        'Market development funds',
        'Strategic alliance programs',
        'Board-level engagement'
      ],
      icon: Diamond,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with cutting-edge AI and technology solutions. Explore partnership opportunities and programs."
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
              Partner With
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Join our ecosystem of technology partners and grow your business with cutting-edge AI solutions, innovative services, and collaborative opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/partners/programs"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities.
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
                <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:bg-slate-700/50">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem and how it can accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Partner Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partner level that matches your business goals and unlock exclusive benefits and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {program.level}
                  </h3>
                  
                  <p className="text-sm text-cyan-400 mb-4 font-medium">
                    {program.requirements}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-4 py-2 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 rounded-lg transition-colors text-sm font-medium">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have already partnered with Zion Tech Group to deliver innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <partner.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-sm text-cyan-400 mb-2 font-medium">
                    {partner.type}
                  </p>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
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
              Join our partner ecosystem and start growing your business with cutting-edge AI and technology solutions. Let's discuss how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Partnership Discussion
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/partners/programs"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                View Partner Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
