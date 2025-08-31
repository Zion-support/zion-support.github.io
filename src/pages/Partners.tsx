import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Star, 
  ArrowRight,
  Building2,
  Award,
  TrendingUp,
  Target,
  Rocket,
  Lightbulb,
  Database,
  Network,
  Cloud,
  Server,
  Chip,
  Cpu,
  Brain,
  Zap,
  Shield
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Strategic Partnerships",
      description: "Long-term collaborations to develop innovative solutions and expand market reach",
      benefits: ["Joint product development", "Shared resources", "Market expansion", "Innovation acceleration"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Technology Alliances",
      description: "Technical partnerships to integrate complementary technologies and platforms",
      benefits: ["API integration", "Platform compatibility", "Technical expertise sharing", "Performance optimization"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Distribution",
      description: "Partnerships to expand our global presence and reach new markets",
      benefits: ["Local market knowledge", "Distribution networks", "Cultural expertise", "Regulatory compliance"]
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Innovation Partners",
      description: "Collaborations with research institutions and startups to drive innovation",
      benefits: ["Research collaboration", "Innovation funding", "Talent acquisition", "Technology transfer"]
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "M",
      description: "Cloud infrastructure and AI platform partnership",
      category: "Technology",
      partnershipSince: "2023"
    },
    {
      name: "AWS",
      logo: "A",
      description: "Cloud services and machine learning collaboration",
      category: "Cloud Services",
      partnershipSince: "2023"
    },
    {
      name: "Intel",
      logo: "I",
      description: "Hardware optimization and AI acceleration",
      category: "Hardware",
      partnershipSince: "2024"
    },
    {
      name: "Stanford University",
      logo: "S",
      description: "AI research and development collaboration",
      category: "Research",
      partnershipSince: "2024"
    }
  ];

  const benefits = [
    "Access to cutting-edge technology and innovation",
    "Expanded market reach and customer base",
    "Shared resources and expertise",
    "Joint marketing and sales opportunities",
    "Revenue sharing and growth potential",
    "Enhanced brand recognition and credibility"
  ];

  const industries = [
    {
      name: "Technology",
      description: "Software, hardware, and platform providers",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      name: "Healthcare",
      description: "Medical devices, pharmaceuticals, and health tech",
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Financial Services",
      description: "Banks, fintech, and financial technology",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      name: "Manufacturing",
      description: "Industrial automation and smart manufacturing",
      icon: <Building2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Partnership Opportunities
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join forces with Zion Tech Group to create innovative solutions and expand your business reach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Models
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6 flex justify-center">{type.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Current Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join an elite network of industry leaders and innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400">{partner.category}</span>
                  <span className="text-gray-400">Since {partner.partnershipSince}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner with Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our partnership ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Focus Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're actively seeking partnerships in these key industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to become a Zion Tech Group partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Contact", description: "Reach out to discuss partnership opportunities" },
              { step: "2", title: "Discovery", description: "Explore mutual goals and alignment" },
              { step: "3", title: "Agreement", description: "Define partnership terms and structure" },
              { step: "4", title: "Launch", description: "Begin collaboration and joint initiatives" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of innovative partners and create the future together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Start Partnership Discussion
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
