import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Handshake, 
  Users, 
  Building, 
  Globe, 
  Star, 
  ArrowRight, 
  Award, 
  Users, 
  Rocket, 
  Shield, 
  Cpu,
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  Briefcase
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver comprehensive solutions.',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint solution development',
        'Shared go-to-market strategies',
        'Technical collaboration and support'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach and service delivery.',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing and sales support',
        'Training and certification programs',
        'Dedicated partner success managers'
      ]
    },
    {
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Innovation Support',
      description: 'Access to cutting-edge research and development resources',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and Microsoft 365 integration.'
    },
    {
      name: 'AWS',
      logo: 'A',
      category: 'Cloud Partner',
      description: 'Advanced consulting partner for AWS cloud infrastructure and services.'
    },
    {
      name: 'Google Cloud',
      logo: 'G',
      category: 'Cloud Partner',
      description: 'Partnership for Google Cloud Platform solutions and AI services.'
    },
    {
  const partnershipTiers = [
    {
      name: "Platinum",
      description: "Strategic technology partnerships with joint go-to-market initiatives",
      benefits: [
        "Joint product development",
        "Shared marketing campaigns",
        "Technical integration support",
        "Revenue sharing opportunities",
        "Executive relationship management"
      ],
      requirements: "Annual revenue >$100M, strategic alignment, technical integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Gold",
      description: "Technology partnerships with co-marketing and technical collaboration",
      benefits: [
        "Technical collaboration",
        "Co-marketing opportunities",
        "Training and certification",
        "Market development funds",
        "Dedicated partner manager"
      ],
      requirements: "Annual revenue >$50M, technical expertise, market presence",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Silver",
      description: "Solution partnerships with basic support and collaboration",
      benefits: [
        "Solution integration support",
        "Marketing materials",
        "Basic training resources",
        "Partner portal access",
        "Quarterly business reviews"
      ],
      requirements: "Annual revenue >$10M, solution alignment, customer success",
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Research",
      description: "Academic and research partnerships for innovation",
      benefits: [
        "Research collaboration",
        "Student internships",
        "Joint publications",
        "Technology transfer",
        "Academic recognition"
      ],
      requirements: "Research excellence, innovation focus, academic credibility",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const successStories = [
    {
      title: "Microsoft Azure Partnership Success",
      description: "Joint development of AI-powered enterprise solutions resulted in 200% revenue growth and 50+ enterprise customers.",
      metrics: ["200% Revenue Growth", "50+ Enterprise Customers", "3 Joint Solutions"],
      partner: "Microsoft Azure",
      category: "Technology"
    },
    {
      title: "MIT Research Collaboration",
      description: "Collaborative research in autonomous AI systems led to breakthrough algorithms and joint patent applications.",
      metrics: ["5 Research Papers", "2 Patent Applications", "10 Student Interns"],
      partner: "MIT CSAIL",
      category: "Research"
    },
    {
      title: "Healthcare Industry Partnership",
      description: "AI-powered healthcare solutions developed with industry partners improved patient outcomes by 30%.",
      metrics: ["30% Patient Outcome Improvement", "15 Healthcare Systems", "5 Joint Products"],
      partner: "Johnson & Johnson",
      category: "Industry"
      name: 'Cisco',
      logo: 'C',
      category: 'Network Partner',
      description: 'Strategic partnership for networking and cybersecurity solutions.'
    }
  ];

  const existingPartners = [
    {
      name: 'TechCorp',
      logo: 'TC',
      category: 'Technology Partner',
      description: 'Leading technology solutions provider',
      year: '2022'
    },
    {
      name: 'InnovateTech',
      logo: 'IT',
      category: 'System Integrator',
      description: 'Global system integration expertise',
      year: '2021'
    },
    {
      name: 'CloudSolutions',
      logo: 'CS',
      category: 'Cloud Partner',
      description: 'Specialized cloud infrastructure services',
      year: '2023'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's partner network. Strategic partnerships for technology solutions, growth opportunities, and market expansion." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Partnership Opportunities</h1>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Join our network of strategic partners and unlock new opportunities for growth, 
                innovation, and market expansion in the technology sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#partnerships" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Explore Partnerships
                </a>
                <a 
                  href="#contact" 
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Become a Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
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
              Discover the advantages of joining our technology ecosystem
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our partner ecosystem and help organizations leverage the power of AI, cloud, and emerging technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {existingPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                        {partner.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-slate-300 text-sm mb-4">{partner.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Partner since {partner.year}</span>
                      <Star className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}

      {/* Partnership Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partnership Process
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simple steps to become a Zion Tech Group partner
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    
                    {index < partnershipProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2 z-0"></div>
                    )}
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-400">Partner</p>
                  <p className="text-sm text-white font-medium">{story.partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our network of strategic partners and help us deliver innovative 
            solutions that transform businesses and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Strategic Partners</h2>
              <p className="text-gray-300">Our key alliance partners driving innovation and growth</p>
        {/* Partnership Types */}
        <section id="partnerships" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various partnership models to suit different business needs and objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
