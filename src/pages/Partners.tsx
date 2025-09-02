import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
<<<<<<< HEAD
  Globe, 
  Award, 
  Users, 
  Building2, 
  Rocket,
  Brain,
  Shield,
  Cloud,
  Target,
  Star,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone
=======
  Users, 
  Globe, 
  Award, 
  Target, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Building,
  Shield,
  TrendingUp,
  Lightbulb,
  Network,
  Briefcase
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Partners() {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Partners', icon: Globe },
    { id: 'technology', name: 'Technology', icon: Brain },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'consulting', name: 'Consulting', icon: Building2 },
    { id: 'startups', name: 'Startups & Innovation', icon: Rocket }
  ];

  const strategicPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      category: 'technology',
      description: 'Strategic partnership for Azure cloud solutions and AI integration services.',
      partnership: 'Cloud & AI Solutions',
      benefits: ['Azure Integration', 'AI Platform Access', 'Joint Go-to-Market'],
      website: 'https://microsoft.com',
      featured: true
    },
    {
      name: 'Amazon Web Services',
      logo: '/partners/aws.png',
      category: 'cloud',
      description: 'Premier consulting partner for AWS cloud infrastructure and AI services.',
      partnership: 'Cloud Infrastructure',
      benefits: ['AWS Solutions', 'Technical Support', 'Training Programs'],
      website: 'https://aws.amazon.com',
      featured: true
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      category: 'cloud',
      description: 'Partnership for Google Cloud AI and machine learning solutions.',
      partnership: 'AI & ML Platform',
      benefits: ['Google AI Tools', 'Cloud Infrastructure', 'Joint Innovation'],
      website: 'https://cloud.google.com',
      featured: true
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      category: 'technology',
      description: 'Strategic alliance for enterprise AI and quantum computing solutions.',
      partnership: 'Enterprise AI',
      benefits: ['Watson Platform', 'Quantum Computing', 'Enterprise Solutions'],
      website: 'https://ibm.com',
      featured: false
    },
    {
      name: 'Oracle',
      logo: '/partners/oracle.png',
      category: 'technology',
      description: 'Partnership for Oracle Cloud and enterprise database solutions.',
      partnership: 'Enterprise Cloud',
      benefits: ['Oracle Cloud', 'Database Solutions', 'Enterprise Support'],
      website: 'https://oracle.com',
      featured: false
    },
    {
      name: 'Cisco',
      logo: '/partners/cisco.png',
      category: 'security',
      description: 'Alliance for cybersecurity and networking infrastructure solutions.',
      partnership: 'Cybersecurity',
      benefits: ['Security Solutions', 'Network Infrastructure', 'Joint Certifications'],
      website: 'https://cisco.com',
      featured: false
    }
  ];

  const consultingPartners = [
    {
      name: 'McKinsey & Company',
      logo: '/partners/mckinsey.png',
      category: 'consulting',
      description: 'Strategic consulting partnership for digital transformation initiatives.',
      partnership: 'Digital Transformation',
      benefits: ['Strategy Consulting', 'Change Management', 'Industry Expertise']
    },
    {
      name: 'Deloitte',
      logo: '/partners/deloitte.png',
      category: 'consulting',
      description: 'Alliance for technology consulting and implementation services.',
      partnership: 'Technology Consulting',
      benefits: ['Implementation Support', 'Risk Management', 'Compliance']
    },
    {
      name: 'Accenture',
      logo: '/partners/accenture.png',
      category: 'consulting',
      description: 'Partnership for technology innovation and digital transformation.',
      partnership: 'Innovation & Digital',
      benefits: ['Innovation Labs', 'Digital Solutions', 'Global Delivery']
    }
  ];

  const startupPartners = [
    {
      name: 'AI Startup Incubator',
      logo: '/partners/startup-incubator.png',
      category: 'startups',
      description: 'Innovation hub for AI startups and emerging technology companies.',
      partnership: 'Startup Ecosystem',
      benefits: ['Incubation Support', 'Funding Access', 'Mentorship Programs']
    },
    {
      name: 'Tech Ventures Fund',
      logo: '/partners/tech-ventures.png',
      category: 'startups',
      description: 'Venture capital partnership for technology investment opportunities.',
      partnership: 'Investment & Growth',
      benefits: ['Funding Support', 'Strategic Guidance', 'Network Access']
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? strategicPartners 
    : strategicPartners.filter(partner => partner.category === selectedCategory);

  const partnershipLevels = [
    {
      level: 'Strategic',
      description: 'Deep integration and joint go-to-market strategies',
      benefits: ['Exclusive Access', 'Joint Development', 'Revenue Sharing', 'Priority Support'],
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      level: 'Premier',
      description: 'Advanced technical collaboration and joint solutions',
      benefits: ['Technical Support', 'Training Programs', 'Marketing Support', 'Dedicated Team'],
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      level: 'Alliance',
      description: 'Standard partnership with mutual benefits',
      benefits: ['Solution Integration', 'Referral Programs', 'Basic Support', 'Joint Events'],
      color: 'from-zion-slate-light to-zion-purple'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zion-cyan mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Building powerful alliances with industry leaders to deliver innovative solutions and drive digital transformation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join our ecosystem of partners and unlock new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: 'Innovation Leadership',
                description: 'Access to cutting-edge AI and emerging technologies that drive market differentiation.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Expand your market presence through our extensive global network and customer base.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Collaborate with our world-class team of AI researchers, engineers, and business experts.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-zion-slate-dark rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <benefit.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Partnership Tiers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the partnership level that best fits your business objectives and growth strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl p-8 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zion-cyan mb-3 text-center">{level.level}</h3>
                <p className="text-zion-slate-light text-center mb-6">{level.description}</p>
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-4">
                  Strategic Partners
                </h2>
                <p className="text-xl text-zion-slate-light">
                  Our premier technology and business partners
                </p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                        : 'border-zion-purple/20 text-zion-slate-light hover:border-zion-cyan/40 hover:text-zion-cyan'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.article
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl overflow-hidden border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-zion-cyan" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {partner.partnership}
                    </span>
                    {partner.featured && (
                      <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-zion-cyan transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {partner.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2 uppercase tracking-wide">Key Benefits</h4>
                    <div className="space-y-1">
                      {partner.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:text-zion-cyan/80 text-sm font-medium flex items-center transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      Partner Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Consulting Partners
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Strategic alliances with leading consulting firms to deliver comprehensive solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3 text-center">{partner.name}</h3>
                <p className="text-zion-slate-light text-center mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Startup Ecosystem
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Supporting the next generation of innovative companies and entrepreneurs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {startupPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark rounded-xl p-6 border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-zion-cyan mb-3 text-center">{partner.name}</h3>
                <p className="text-zion-slate-light text-center mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-cyan mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Ready to join our ecosystem? Let's explore partnership opportunities that drive mutual growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Apply for Partnership
              </button>
              <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Partnership Guide
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Ready to discuss partnership opportunities? Get in touch with our partnership team.
                </p>
                <a href="mailto:partnerships@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80">
                  partnerships@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-zion-slate-dark/50 rounded-xl p-6 border border-zion-cyan/30">
                <h3 className="text-lg font-semibold text-zion-cyan mb-3 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </h3>
                <p className="text-zion-slate-light mb-3">
                  Prefer to speak directly? Call our partnership development team.
                </p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
  const [selectedPartnerType, setSelectedPartnerType] = useState('All');

  const partnerTypes = [
    'All',
    'Technology Partners',
    'Strategic Alliances',
    'Channel Partners',
    'Research Partners',
    'Cloud Providers'
  ];

  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      type: 'Technology Partners',
      level: 'Gold Partner',
      logo: '/images/partners/microsoft-logo.png',
      description: 'Strategic partnership for Azure cloud solutions and AI development platforms.',
      services: ['Azure Cloud Services', 'AI & Machine Learning', 'Power Platform', 'Microsoft 365'],
      achievements: ['Gold Cloud Platform Competency', 'AI Partner of the Year 2023'],
      yearsPartnership: 5,
      jointSolutions: 12,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      type: 'Cloud Providers',
      level: 'Advanced Consulting Partner',
      logo: '/images/partners/aws-logo.png',
      description: 'Leading cloud infrastructure partnership for scalable enterprise solutions.',
      services: ['Cloud Migration', 'DevOps', 'Data Analytics', 'Machine Learning'],
      achievements: ['AWS Partner of the Year', 'Migration Competency'],
      yearsPartnership: 7,
      jointSolutions: 18,
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 3,
      name: 'Google Cloud',
      type: 'Cloud Providers',
      level: 'Premier Partner',
      logo: '/images/partners/google-cloud-logo.png',
      description: 'Innovation partnership focusing on AI, quantum computing, and data analytics.',
      services: ['Google AI Platform', 'BigQuery', 'Kubernetes', 'Cloud Security'],
      achievements: ['Innovation Partner Award', 'AI/ML Specialization'],
      yearsPartnership: 4,
      jointSolutions: 10,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      name: 'IBM',
      type: 'Technology Partners',
      level: 'Platinum Partner',
      logo: '/images/partners/ibm-logo.png',
      description: 'Strategic alliance for quantum computing research and enterprise AI solutions.',
      services: ['Watson AI', 'Quantum Computing', 'Hybrid Cloud', 'Security'],
      achievements: ['Quantum Network Member', 'AI Excellence Award'],
      yearsPartnership: 6,
      jointSolutions: 8,
      color: 'from-blue-800 to-indigo-900'
    },
    {
      id: 5,
      name: 'Salesforce',
      type: 'Technology Partners',
      level: 'Consulting Partner',
      logo: '/images/partners/salesforce-logo.png',
      description: 'Customer experience and CRM integration partnership.',
      services: ['CRM Integration', 'Customer Analytics', 'Sales Automation', 'Service Cloud'],
      achievements: ['AppExchange Partner', 'Customer Success Award'],
      yearsPartnership: 3,
      jointSolutions: 6,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 6,
      name: 'NVIDIA',
      type: 'Technology Partners',
      level: 'Elite Partner',
      logo: '/images/partners/nvidia-logo.png',
      description: 'AI and high-performance computing partnership for advanced solutions.',
      services: ['GPU Computing', 'AI Training', 'Deep Learning', 'Edge Computing'],
      achievements: ['AI Partner Excellence', 'DGX Partner'],
      yearsPartnership: 4,
      jointSolutions: 7,
      color: 'from-green-600 to-green-800'
    },
    {
      id: 7,
      name: 'Oracle',
      type: 'Strategic Alliances',
      level: 'Gold Partner',
      logo: '/images/partners/oracle-logo.png',
      description: 'Enterprise database and cloud infrastructure partnership.',
      services: ['Database Solutions', 'Enterprise Applications', 'Cloud Infrastructure'],
      achievements: ['Cloud Excellence Award', 'Database Specialization'],
      yearsPartnership: 8,
      jointSolutions: 14,
      color: 'from-red-600 to-red-800'
    },
    {
      id: 8,
      name: 'MIT',
      type: 'Research Partners',
      level: 'Research Collaboration',
      logo: '/images/partners/mit-logo.png',
      description: 'Academic research partnership for AI and quantum computing innovation.',
      services: ['Research Collaboration', 'Technology Innovation', 'Talent Development'],
      achievements: ['Joint Research Publications', 'Innovation Lab Partnership'],
      yearsPartnership: 2,
      jointSolutions: 3,
      color: 'from-purple-600 to-purple-800'
    }
  ];

  const partnershipPrograms = [
    {
      title: 'Technology Alliance Program',
      icon: Network,
      description: 'Partner with us to integrate cutting-edge technologies and create innovative solutions.',
      benefits: [
        'Joint solution development',
        'Technical certification programs',
        'Co-marketing opportunities',
        'Revenue sharing models'
      ],
      requirements: [
        'Established technology platform',
        'Proven market presence',
        'Technical expertise',
        'Commitment to innovation'
      ]
    },
    {
      title: 'Channel Partner Program',
      icon: Briefcase,
      description: 'Expand your business by reselling our solutions to your customer base.',
      benefits: [
        'Competitive margins',
        'Sales training and support',
        'Marketing development funds',
        'Lead generation support'
      ],
      requirements: [
        'Sales experience in technology',
        'Customer base alignment',
        'Market coverage commitment',
        'Certification completion'
      ]
    },
    {
      title: 'Research Collaboration',
      icon: Lightbulb,
      description: 'Join our research initiatives to advance technology and scientific understanding.',
      benefits: [
        'Access to cutting-edge research',
        'Joint publication opportunities',
        'Funding opportunities',
        'Technology transfer rights'
      ],
      requirements: [
        'Academic or research credentials',
        'Relevant expertise',
        'Research publication history',
        'Long-term commitment'
      ]
    }
  ];

  const filteredPartners = selectedPartnerType === 'All' 
    ? partners 
    : partners.filter(partner => partner.type === selectedPartnerType);

  const stats = [
    { number: '50+', label: 'Global Partners', icon: Globe },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Joint Solutions', icon: Target },
    { number: '99%', label: 'Partner Satisfaction', icon: Star }
  ];

  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group"
        description="Strategic partnerships with leading technology companies, cloud providers, and research institutions. Join our partner ecosystem."
        keywords="technology partners, strategic alliances, cloud partners, research partnerships, channel partners"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Strategic Partners
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Collaborating with industry leaders to deliver innovative solutions and drive technological advancement worldwide.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Partner Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {partnerTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedPartnerType(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedPartnerType === type
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Partner Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${partner.color} flex items-center justify-center`}>
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold">
                      {partner.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm mb-3">
                    {partner.type}
                  </span>
                  <p className="text-gray-300 text-sm mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Services</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.services.slice(0, 3).map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                        >
                          {service}
                        </span>
                      ))}
                      {partner.services.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                          +{partner.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{partner.yearsPartnership}+</div>
                      <div className="text-xs text-gray-400">Years Partnership</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{partner.jointSolutions}</div>
                      <div className="text-xs text-gray-400">Joint Solutions</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Recent Achievements</h4>
                    <ul className="space-y-1">
                      {partner.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-gray-300 text-xs">
                          <Award className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-2 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                    View Partnership
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Partnership Programs
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((requirement, requirementIndex) => (
                        <li key={requirementIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Partner With Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Work with industry-leading experts and researchers'
                },
                {
                  icon: Zap,
                  title: 'Innovation Focus',
                  description: 'Cutting-edge technology and continuous innovation'
                },
                {
                  icon: Shield,
                  title: 'Trusted Partnership',
                  description: 'Reliable, long-term partnerships built on trust'
                },
                {
                  icon: TrendingUp,
                  title: 'Mutual Growth',
                  description: 'Shared success and sustainable business growth'
                }
              ].map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-400/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join our growing ecosystem of partners and unlock new opportunities for innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Become a Partner
                <Handshake className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  );
}
