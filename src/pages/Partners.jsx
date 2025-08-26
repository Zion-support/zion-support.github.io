import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  Shield, 
  Zap, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Microsoft",
      logo: "https://via.placeholder.com/120x60/0078D4/FFFFFF?text=Microsoft",
      category: "Technology Partner",
      description: "Strategic partnership for cloud solutions and AI services",
      benefits: ["Azure credits", "Joint go-to-market", "Technical support"],
      tier: "Platinum"
    },
    {
      id: 2,
      name: "Amazon Web Services",
      logo: "https://via.placeholder.com/120x60/FF9900/FFFFFF?text=AWS",
      category: "Cloud Partner",
      description: "Premier consulting partner for AWS solutions",
      benefits: ["AWS credits", "Training programs", "Solution architect support"],
      tier: "Platinum"
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "https://via.placeholder.com/120x60/4285F4/FFFFFF?text=Google+Cloud",
      category: "AI Partner",
      description: "Advanced AI and machine learning solutions",
      benefits: ["GCP credits", "AI/ML expertise", "Joint innovation"],
      tier: "Gold"
    },
    {
      id: 4,
      name: "IBM",
      logo: "https://via.placeholder.com/120x60/006699/FFFFFF?text=IBM",
      category: "Enterprise Partner",
      description: "Enterprise solutions and consulting services",
      benefits: ["IBM Cloud credits", "Watson AI access", "Enterprise support"],
      tier: "Gold"
    },
    {
      id: 5,
      name: "Oracle",
      logo: "https://via.placeholder.com/120x60/F80000/FFFFFF?text=Oracle",
      category: "Database Partner",
      description: "Database and enterprise software solutions",
      benefits: ["Oracle Cloud credits", "Database expertise", "Enterprise support"],
      tier: "Silver"
    },
    {
      id: 6,
      name: "Cisco",
      logo: "https://via.placeholder.com/120x60/1BA0D7/FFFFFF?text=Cisco",
      category: "Networking Partner",
      description: "Network infrastructure and security solutions",
      benefits: ["Cisco credits", "Network expertise", "Security solutions"],
      tier: "Silver"
    }
  ];

  const partnershipTiers = [
    {
      name: "Platinum",
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Exclusive access to beta features",
        "Dedicated account manager",
        "Priority support 24/7",
        "Joint marketing campaigns",
        "Revenue sharing opportunities",
        "Custom integration support"
      ],
      requirements: "$10M+ annual revenue"
    },
    {
      name: "Gold",
      color: "from-yellow-500 to-orange-500",
      benefits: [
        "Advanced technical support",
        "Joint go-to-market activities",
        "Training and certification",
        "Marketing development funds",
        "Solution architect support"
      ],
      requirements: "$5M+ annual revenue"
    },
    {
      name: "Silver",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Standard technical support",
        "Partner portal access",
        "Training materials",
        "Marketing resources",
        "Basic integration support"
      ],
      requirements: "$1M+ annual revenue"
    }
  ];

  const industries = [
    "Healthcare", "Finance", "Manufacturing", "Retail", "Education", 
    "Government", "Telecommunications", "Energy", "Transportation", "Media"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Handshake className="w-4 h-4 mr-2" />
            Strategic Partnerships
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partner with
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Zion Tech Group</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join our global network of technology partners and unlock new opportunities for growth, innovation, and market expansion.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg"
            >
              Become a Partner
            </Link>
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium text-lg">
              View Partnership Guide
            </button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access cutting-edge technology, expand your market reach, and drive innovation together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description: "Access to our worldwide network of clients and markets"
              },
              {
                icon: TrendingUp,
                title: "Revenue Growth",
                description: "Increase your revenue through joint solutions and referrals"
              },
              {
                icon: Shield,
                title: "Trusted Brand",
                description: "Leverage our reputation and credibility in the market"
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Stay ahead with access to cutting-edge technology"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bg-gray-800 rounded-xl p-8 border-2 ${
                  tier.name === "Platinum" 
                    ? "border-purple-500/50 bg-gradient-to-br from-gray-800 to-gray-900" 
                    : "border-gray-700"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${tier.color} text-white rounded-full text-sm font-medium mb-4`}>
                    {tier.name} Partner
                  </div>
                  <p className="text-gray-400 text-sm">{tier.requirements}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  tier.name === "Platinum"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}>
                  Apply for {tier.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry leaders who have already partnered with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 object-contain"
                  />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    partner.tier === "Platinum" ? "bg-purple-500/20 text-purple-400" :
                    partner.tier === "Gold" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-gray-500/20 text-gray-400"
                  }`}>
                    {partner.tier}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{partner.category}</p>
                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                
                <div className="space-y-2 mb-4">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with us to serve diverse industries with innovative technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-medium">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of technology partners and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-medium"
              >
                Start Partnership Discussion
              </Link>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Download Partnership Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
