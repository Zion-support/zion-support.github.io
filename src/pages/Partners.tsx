import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building2, 
  Users, 
  Globe, 
  Star, 
  Award, 
  TrendingUp, 
  Zap,
  Shield,
  Heart,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Leaf,
  Atom,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Phone,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Partners() {
  const partnershipTiers = [
    {
      name: "Strategic Partner",
      description: "Deep integration and joint go-to-market strategies",
      benefits: [
        "Exclusive territory rights",
        "Joint product development",
        "Revenue sharing opportunities",
        "Priority support and training",
        "Co-marketing campaigns",
        "Early access to new features"
      ],
      requirements: [
        "Minimum $1M annual revenue",
        "50+ enterprise customers",
        "Dedicated partnership team",
        "Joint business plan commitment"
      ],
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Gold Partner",
      description: "Premium partnership with enhanced benefits and support",
      benefits: [
        "Regional exclusivity",
        "Enhanced technical support",
        "Marketing development funds",
        "Joint customer success programs",
        "Advanced training and certification",
        "Quarterly business reviews"
      ],
      requirements: [
        "Minimum $500K annual revenue",
        "25+ enterprise customers",
        "Certified technical team",
        "Quarterly business reviews"
      ],
      icon: Award,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Silver Partner",
      description: "Standard partnership with growth opportunities",
      benefits: [
        "Standard technical support",
        "Marketing materials and tools",
        "Training and certification",
        "Partner portal access",
        "Lead sharing program",
        "Quarterly updates"
      ],
      requirements: [
        "Minimum $100K annual revenue",
        "10+ enterprise customers",
        "Basic technical competency",
        "Monthly business reviews"
      ],
      icon: TrendingUp,
      color: "from-gray-400 to-gray-600"
    }
  ];

  const partnerCategories = [
    {
      name: "Technology Partners",
      description: "Software and platform integrations",
      partners: [
        { name: "Microsoft", logo: "🔵", status: "Strategic", since: "2020" },
        { name: "AWS", logo: "🟠", status: "Gold", since: "2021" },
        { name: "Google Cloud", logo: "🔴", status: "Silver", since: "2022" },
        { name: "Salesforce", logo: "🔵", status: "Gold", since: "2021" }
      ],
      icon: Cloud
    },
    {
      name: "System Integrators",
      description: "Implementation and consulting services",
      partners: [
        { name: "Accenture", logo: "🔵", status: "Strategic", since: "2019" },
        { name: "Deloitte", logo: "🟢", status: "Gold", since: "2020" },
        { name: "PwC", logo: "🔵", status: "Silver", since: "2021" },
        { name: "EY", logo: "🟡", status: "Silver", since: "2022" }
      ],
      icon: Building2
    },
    {
      name: "Industry Specialists",
      description: "Domain expertise and vertical solutions",
      partners: [
        { name: "McKinsey", logo: "🔵", status: "Strategic", since: "2020" },
        { name: "BCG", logo: "🟢", status: "Gold", since: "2021" },
        { name: "Bain", logo: "🔵", status: "Silver", since: "2022" }
      ],
      icon: Users
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our global partner network and unlock new business opportunities with Zion Tech Group's innovative AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Partner With
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join our global partner network and unlock new business opportunities with cutting-edge AI, 
              quantum computing, and sustainable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Handshake className="w-6 h-6" />
                Become a Partner
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Globe className="w-6 h-6" />
                View Partner Portal
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and unlock exclusive benefits, 
              training, and support to accelerate your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with organizations across different sectors to deliver comprehensive 
              solutions that drive innovation and business transformation.
            </p>
          </motion.div>

          <div className="space-y-12">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.partners.map((partner, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
                      <div className="text-3xl mb-2">{partner.logo}</div>
                      <h4 className="font-semibold text-white mb-1">{partner.name}</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          partner.status === 'Strategic' ? 'bg-yellow-500/20 text-yellow-400' :
                          partner.status === 'Gold' ? 'bg-yellow-400/20 text-yellow-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {partner.status}
                        </span>
                        <span className="text-gray-400">Since {partner.since}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can work together to drive innovation and create value for your customers.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <Handshake className="w-6 h-6" />
              Start Partnership Discussion
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper component for checkmark
function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
