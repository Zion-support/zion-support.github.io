import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Globe,
  Shield,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Building,
  Star,
  Zap,
  Heart,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

const Partners: React.FC = () => {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies we collaborate with to deliver cutting-edge solutions',
      icon: Zap,
      partners: [
        {
          name: 'Amazon Web Services',
          category: 'Cloud Infrastructure',
          description: 'Premier cloud services partner providing scalable computing solutions',
          logo: '/api/placeholder/200/80',
          website: 'https://aws.amazon.com'
        },
        {
          name: 'Microsoft Azure',
          category: 'Cloud Platform',
          description: 'Enterprise cloud solutions and AI services integration',
          logo: '/api/placeholder/200/80',
          website: 'https://azure.microsoft.com'
        },
        {
          name: 'Google Cloud',
          category: 'AI & Machine Learning',
          description: 'Advanced AI and quantum computing collaboration',
          logo: '/api/placeholder/200/80',
          website: 'https://cloud.google.com'
        },
        {
          name: 'NVIDIA',
          category: 'AI Hardware',
          description: 'GPU computing and AI acceleration solutions',
          logo: '/api/placeholder/200/80',
          website: 'https://nvidia.com'
        }
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Key strategic alliances that enhance our service offerings',
      icon: Target,
      partners: [
        {
          name: 'Accenture',
          category: 'Consulting',
          description: 'Global consulting partnership for enterprise transformations',
          logo: '/api/placeholder/200/80',
          website: 'https://accenture.com'
        },
        {
          name: 'Deloitte',
          category: 'Professional Services',
          description: 'Collaborative approach to digital transformation projects',
          logo: '/api/placeholder/200/80',
          website: 'https://deloitte.com'
        },
        {
          name: 'IBM',
          category: 'Enterprise Solutions',
          description: 'Hybrid cloud and AI solutions partnership',
          logo: '/api/placeholder/200/80',
          website: 'https://ibm.com'
        }
      ]
    },
    {
      title: 'Security Partners',
      description: 'Cybersecurity specialists ensuring robust protection',
      icon: Shield,
      partners: [
        {
          name: 'CrowdStrike',
          category: 'Endpoint Protection',
          description: 'Advanced threat detection and response solutions',
          logo: '/api/placeholder/200/80',
          website: 'https://crowdstrike.com'
        },
        {
          name: 'Palo Alto Networks',
          category: 'Network Security',
          description: 'Next-generation firewall and security platform integration',
          logo: '/api/placeholder/200/80',
          website: 'https://paloaltonetworks.com'
        },
        {
          name: 'Okta',
          category: 'Identity Management',
          description: 'Identity and access management solutions',
          logo: '/api/placeholder/200/80',
          website: 'https://okta.com'
        }
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide networks and resources for international projects'
    },
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Industry-recognized certifications and specialized knowledge'
    },
    {
      icon: Users,
      title: 'Combined Teams',
      description: 'Collaborative teams bringing diverse skills and perspectives'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technologies and innovative solution development'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Multi-layered security approaches and compliance expertise'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous quality standards and proven delivery methodologies'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Integration',
      description: 'Seamlessly integrate your solutions with our technology stack',
      icon: Building,
      features: ['API Integration', 'Custom Connectors', 'Shared Infrastructure', 'Joint Development']
    },
    {
      title: 'Reseller Program',
      description: 'Become an authorized reseller of our services and solutions',
      icon: Users,
      features: ['Sales Training', 'Marketing Support', 'Commission Structure', 'Lead Sharing']
    },
    {
      title: 'Strategic Alliance',
      description: 'Long-term strategic partnerships for mutual growth',
      icon: Star,
      features: ['Joint Go-to-Market', 'Co-Innovation', 'Shared Resources', 'Executive Alignment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}Partners
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Collaborating with industry leaders to deliver exceptional technology solutions 
            and drive innovation across all sectors.
          </p>
        </motion.div>

        {/* Partner Categories */}
        {partnerCategories.map((category, categoryIndex) => (
          <motion.section
            key={categoryIndex}
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
                <p className="text-gray-300">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.partners.map((partner, partnerIndex) => (
                <motion.div
                  key={partnerIndex}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-white transition-colors text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Partnership Benefits */}
        <motion.section
          className="py-16 bg-black/20 -mx-4 px-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Why leading companies choose to partner with Zion Tech Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partnership Types */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore different ways to collaborate with Zion Tech Group
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/30">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of innovative partners and unlock new opportunities for growth. 
              Let's build the future of technology together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`mailto:${contactInfo.email}?subject=Partnership Inquiry`}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Partner with Us
              </motion.a>
              <motion.a
                href="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Us
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Partners;