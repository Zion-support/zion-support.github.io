import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
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
} from 'lucide-react';

export default function Partners() {
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
  );
}
