import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Star, 
  Award, 
  TrendingUp, 
  Globe, 
  Building, 
  Zap,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Shield,
  Rocket,
  Brain,
  Cloud
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Partners() {
  const partnershipTypes = [
    {
      name: "Technology Partners",
      description: "Strategic technology alliances and integrations",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      benefits: [
        "Joint product development",
        "Technology integration",
        "Shared R&D initiatives",
        "Co-marketing opportunities"
      ]
    },
    {
      name: "Channel Partners",
      description: "Distribution and sales partnerships",
      icon: Users,
      color: "from-green-600 to-emerald-600",
      benefits: [
        "Revenue sharing programs",
        "Sales training and support",
        "Marketing materials",
        "Dedicated partner portal"
      ]
    },
    {
      name: "Solution Partners",
      description: "Joint solution development and delivery",
      icon: Building,
      color: "from-purple-600 to-pink-600",
      benefits: [
        "Solution co-creation",
        "Joint go-to-market",
        "Technical collaboration",
        "Customer success sharing"
      ]
    },
    {
      name: "Strategic Partners",
      description: "Long-term strategic alliances",
      icon: Handshake,
      color: "from-orange-600 to-red-600",
      benefits: [
        "Strategic planning",
        "Investment opportunities",
        "Market expansion",
        "Innovation partnerships"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.svg",
      category: "Technology Partner",
      description: "Cloud infrastructure and AI collaboration",
      partnership: "Strategic Technology Alliance",
      year: "2023"
    },
    {
      name: "AWS",
      logo: "/images/partners/aws.svg",
      category: "Technology Partner",
      description: "Cloud services and infrastructure",
      partnership: "Cloud Solutions Partnership",
      year: "2022"
    },
    {
      name: "Google Cloud",
      logo: "/images/partners/google-cloud.svg",
      category: "Technology Partner",
      description: "AI and machine learning platforms",
      partnership: "AI Innovation Partnership",
      year: "2023"
    },
    {
      name: "Salesforce",
      logo: "/images/partners/salesforce.svg",
      category: "Solution Partner",
      description: "CRM and business automation",
      partnership: "Business Solutions Alliance",
      year: "2022"
    },
    {
      name: "Oracle",
      logo: "/images/partners/oracle.svg",
      category: "Technology Partner",
      description: "Enterprise database and cloud",
      partnership: "Enterprise Solutions Partnership",
      year: "2023"
    },
    {
      name: "IBM",
      logo: "/images/partners/ibm.svg",
      category: "Strategic Partner",
      description: "AI and quantum computing",
      partnership: "Innovation and Research Alliance",
      year: "2021"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Revenue Growth",
      description: "Access new markets and customer segments",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Technology Innovation",
      description: "Collaborate on cutting-edge solutions",
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Market Expansion",
      description: "Reach global markets together",
      icon: Globe,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Risk Mitigation",
      description: "Share resources and expertise",
      icon: Shield,
      color: "from-orange-600 to-red-600"
    }
  ];

  const partnerPrograms = [
    {
      name: "Silver Partner",
      requirements: "Annual revenue: $100K+",
      benefits: [
        "Basic partner portal access",
        "Marketing materials",
        "Sales training",
        "Technical support"
      ],
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "Gold Partner",
      requirements: "Annual revenue: $500K+",
      benefits: [
        "Enhanced partner portal",
        "Dedicated partner manager",
        "Advanced training programs",
        "Co-marketing opportunities",
        "Revenue sharing"
      ],
      color: "from-yellow-600 to-orange-600"
    },
    {
      name: "Platinum Partner",
      requirements: "Annual revenue: $1M+",
      benefits: [
        "Full partner portal access",
        "Strategic planning sessions",
        "Custom training programs",
        "Joint innovation projects",
        "Premium revenue sharing",
        "Executive relationship"
      ],
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships for technology innovation and market expansion."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join our partner ecosystem and grow your business with Zion Tech Group. Together, we can achieve more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
              </Link>
              <Link
                to="#partnership-types"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Partnership Types */}
      <div id="partnership-types" className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the partnership model that best fits your business goals and objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {type.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Partners */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted technology leaders who have chosen to partner with Zion Tech Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-12 h-12 text-slate-500" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full">
                    {partner.category}
                  </span>
                  <span className="text-slate-400 text-xs">{partner.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  {partner.description}
                </p>
                <div className="text-cyan-400 text-sm font-medium">
                  {partner.partnership}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the advantages of joining our partner ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner Programs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Partner Programs</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the partner level that matches your business goals and commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerPrograms.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                program.name === 'Gold Partner' ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'border-slate-700'
              } transition-all duration-300 hover:transform hover:scale-105 h-full relative`}>
                {program.name === 'Gold Partner' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{program.name}</h3>
                <p className="text-slate-400 mb-6">{program.requirements}</p>
                <ul className="space-y-3 mb-8">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    program.name === 'Gold Partner'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Join Program
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partner Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Partner Success Stories</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how our partners have grown their businesses through strategic collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TechCorp Solutions</h3>
                <p className="text-slate-400">Gold Partner since 2022</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              "Partnering with Zion Tech Group has transformed our business. We've seen a 300% increase in revenue and expanded into three new markets."
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                300% Revenue Growth
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-blue-400" />
                3 New Markets
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">InnovateAI Labs</h3>
                <p className="text-slate-400">Platinum Partner since 2021</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              "The strategic partnership with Zion Tech Group has enabled us to develop breakthrough AI solutions and capture market leadership."
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Brain className="w-4 h-4 text-purple-400" />
                5 AI Products Launched
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-400" />
                Market Leader
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and start growing your business with Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link
              to="/partner-resources"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Partner Resources
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-slate-400">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-400">partners@ziontechgroup.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-slate-400">San Francisco, CA</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
