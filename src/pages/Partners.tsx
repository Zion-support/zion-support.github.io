import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Globe, 
  Building, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket
} from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies that provide cutting-edge solutions and platforms",
      icon: Brain,
      partners: [
        {
          name: "Microsoft",
          logo: "/images/partners/microsoft.png",
          description: "Azure cloud services and enterprise solutions",
          tier: "Platinum",
          benefits: ["Azure credits", "Joint go-to-market", "Technical support"]
        },
        {
          name: "Amazon Web Services",
          logo: "/images/partners/aws.png",
          description: "Cloud infrastructure and AI services",
          tier: "Platinum",
          benefits: ["AWS credits", "Solution architect support", "Training programs"]
        },
        {
          name: "Google Cloud",
          logo: "/images/partners/google-cloud.png",
          description: "AI/ML platforms and cloud services",
          tier: "Gold",
          benefits: ["GCP credits", "AI/ML expertise", "Market development"]
        }
      ]
    },
    {
      title: "Security Partners",
      description: "Cybersecurity leaders providing advanced threat protection and compliance solutions",
      icon: Shield,
      partners: [
        {
          name: "CrowdStrike",
          logo: "/images/partners/crowdstrike.png",
          description: "Endpoint security and threat intelligence",
          tier: "Gold",
          benefits: ["Security expertise", "Joint solutions", "Training programs"]
        },
        {
          name: "Palo Alto Networks",
          logo: "/images/partners/palo-alto.png",
          description: "Network security and cloud protection",
          tier: "Silver",
          benefits: ["Technical support", "Solution integration", "Market access"]
        }
      ]
    },
    {
      title: "Consulting Partners",
      description: "Strategic consulting firms that help us deliver comprehensive business solutions",
      icon: Users,
      partners: [
        {
          name: "McKinsey & Company",
          logo: "/images/partners/mckinsey.png",
          description: "Strategic business consulting and digital transformation",
          tier: "Strategic",
          benefits: ["Joint consulting", "Market insights", "Client referrals"]
        },
        {
          name: "Deloitte",
          logo: "/images/partners/deloitte.png",
          description: "Technology consulting and implementation services",
          tier: "Strategic",
          benefits: ["Joint delivery", "Industry expertise", "Global reach"]
        }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Access to new markets and customer segments through partner networks",
      benefits: ["Joint go-to-market programs", "Revenue sharing models", "Market expansion support"]
    },
    {
      icon: Zap,
      title: "Technology Innovation",
      description: "Early access to cutting-edge technologies and platforms",
      benefits: ["Beta program access", "Technical expertise", "Innovation labs"]
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your business presence across international markets",
      benefits: ["Local market knowledge", "Cultural expertise", "Regulatory compliance"]
    },
    {
      icon: Award,
      title: "Credibility & Trust",
      description: "Build trust with customers through established partner relationships",
      benefits: ["Joint certifications", "Case studies", "Reference programs"]
    }
  ];

  const partnershipTiers = [
    {
      name: "Platinum",
      color: "from-purple-500 to-pink-500",
      benefits: [
        "Highest revenue sharing",
        "Dedicated partner manager",
        "Priority technical support",
        "Joint marketing campaigns",
        "Exclusive training programs",
        "Early access to new features"
      ],
      requirements: "Annual revenue commitment of $1M+"
    },
    {
      name: "Gold",
      color: "from-yellow-500 to-orange-500",
      benefits: [
        "Competitive revenue sharing",
        "Assigned partner manager",
        "Enhanced technical support",
        "Marketing support",
        "Training programs",
        "Beta program access"
      ],
      requirements: "Annual revenue commitment of $500K+"
    },
    {
      name: "Silver",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Standard revenue sharing",
        "Partner portal access",
        "Basic technical support",
        "Marketing materials",
        "Training resources",
        "Solution integration support"
      ],
      requirements: "Annual revenue commitment of $100K+"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Handshake className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Strategic{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Join forces with Zion Tech Group to deliver innovative solutions, expand market reach, 
              and create mutual value through strategic partnerships and collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the advantages of partnering with Zion Tech Group and how we can help 
              grow your business together.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnershipBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and growth objectives.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnershipTiers.map((tier, index) => (
              <motion.div 
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light text-sm">{tier.requirements}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                  Become a {tier.name} Partner
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Valued Partners
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet the industry leaders and technology innovators who have chosen to partner with Zion Tech Group.
            </p>
          </motion.div>

          {partnerCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-zion-slate-light">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <motion.div 
                    key={partnerIndex}
                    className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: partnerIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {partner.tier}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{partner.name}</h4>
                    <p className="text-zion-slate-light text-sm mb-4">{partner.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-zion-cyan font-medium text-sm mb-2">Key Benefits:</p>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Become Our Partner?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join our network of strategic partners and discover new opportunities for growth, 
              innovation, and market expansion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Partnership Discussion
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Download Partner Guide
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quick Onboarding</h3>
                <p className="text-zion-slate-light text-sm">Get started in as little as 2 weeks</p>
              </div>
              
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>
                <p className="text-zion-slate-light text-sm">Personal partner success manager</p>
              </div>
              
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Growth Programs</h3>
                <p className="text-zion-slate-light text-sm">Joint go-to-market initiatives</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
