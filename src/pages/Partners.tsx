import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Users, 
  Building, 
  Globe, 
  Star, 
  ArrowRight, 
  Award, 
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Handshake,
  CheckCircle,
  X
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  longDescription?: string;
  category: string;
  partnershipType: string;
  partnershipDuration: string;
  jointProjects: number;
  successStories: number;
  website: string;
  contact: string;
  featured: boolean;
  benefits: string[];
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
}

const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const featuredPartners: Partner[] = [
    {
      id: 'partner-001',
      name: 'Microsoft',
      logo: '/images/partners/microsoft-logo.png',
      description: 'Global technology leader providing cloud computing and AI solutions.',
      longDescription: 'Microsoft is a global technology leader that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Our partnership focuses on cloud computing, AI, and digital transformation solutions.',
      category: 'technology',
      partnershipType: 'Strategic Partnership',
      partnershipDuration: '5+ years',
      jointProjects: 12,
      successStories: 8,
      website: 'https://microsoft.com',
      contact: 'partnerships@microsoft.com',
      featured: true,
      benefits: [
        'Azure cloud platform access',
        'Joint solution development',
        'Shared go-to-market initiatives',
        'Technical training and certification'
      ],
      testimonials: [
        {
          quote: 'Zion Tech Group has been instrumental in helping our customers leverage Azure and AI technologies for digital transformation.',
          author: 'Sarah Johnson',
          role: 'Senior Partner Manager',
          company: 'Microsoft'
        }
      ]
    },
    {
      id: 'partner-002',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws-logo.png',
      description: 'Leading cloud computing platform providing scalable infrastructure and services.',
      longDescription: 'AWS is the world\'s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Our partnership enables us to deliver robust, scalable cloud solutions to our clients.',
      category: 'technology',
      partnershipType: 'Cloud Partnership',
      partnershipDuration: '3+ years',
      jointProjects: 8,
      successStories: 6,
      website: 'https://aws.amazon.com',
      contact: 'partnerships@amazon.com',
      featured: true,
      benefits: [
        'Advanced cloud infrastructure',
        'Joint solution development',
        'Shared customer success programs',
        'Technical collaboration'
      ],
      testimonials: [
        {
          quote: 'Zion Tech Group has been an exceptional partner in helping our customers achieve their cloud transformation goals.',
          author: 'Michael Chen',
          role: 'Director of Partner Success',
          company: 'AWS'
        }
      ]
    }
  ];

  const regularPartners: Partner[] = [
    {
      id: 'partner-003',
      name: 'Deloitte',
      logo: '/images/partners/deloitte-logo.png',
      description: 'Global consulting firm specializing in digital transformation and technology strategy.',
      category: 'consulting',
      partnershipType: 'Consulting Partnership',
      partnershipDuration: '4+ years',
      jointProjects: 15,
      successStories: 12,
      website: 'https://deloitte.com',
      contact: 'partnerships@deloitte.com',
      featured: false,
      benefits: [
        'Joint consulting engagements',
        'Shared methodology and frameworks',
        'Collaborative thought leadership'
      ]
    },
    {
      id: 'partner-004',
      name: 'Stanford University',
      logo: '/images/partners/stanford-logo.png',
      description: 'Leading research institution advancing AI and technology innovation.',
      category: 'academic',
      partnershipType: 'Research Collaboration',
      partnershipDuration: '2+ years',
      jointProjects: 6,
      successStories: 4,
      website: 'https://stanford.edu',
      contact: 'research@stanford.edu',
      featured: false,
      benefits: [
        'Joint research initiatives',
        'Academic-industry collaboration',
        'Talent development programs'
      ]
    },
    {
      id: 'partner-005',
      name: 'Salesforce',
      logo: '/images/partners/salesforce-logo.png',
      description: 'Customer relationship management platform and business applications.',
      category: 'technology',
      partnershipType: 'Platform Partnership',
      partnershipDuration: '3+ years',
      jointProjects: 10,
      successStories: 7,
      website: 'https://salesforce.com',
      contact: 'partnerships@salesforce.com',
      featured: false,
      benefits: [
        'Platform integration expertise',
        'Joint solution development',
        'Shared customer success'
      ]
    }
  ];

  const allPartners = [...featuredPartners, ...regularPartners];

  const categories = [
    { id: 'all', name: 'All Partners', count: allPartners.length },
    { id: 'technology', name: 'Technology', count: allPartners.filter(p => p.category === 'technology').length },
    { id: 'consulting', name: 'Consulting', count: allPartners.filter(p => p.category === 'consulting').length },
    { id: 'academic', name: 'Academic', count: allPartners.filter(p => p.category === 'academic').length }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? allPartners 
    : allPartners.filter(partner => partner.category === selectedCategory);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Our Partners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We collaborate with industry leaders, technology innovators, and academic institutions to deliver cutting-edge solutions and drive digital transformation.
            </motion.p>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Strategic Partners
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <Building className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                        <p className="text-slate-400 text-sm">{partner.partnershipType}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4">{partner.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{partner.jointProjects}</div>
                        <div className="text-xs text-slate-400">Joint Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{partner.successStories}</div>
                        <div className="text-xs text-slate-400">Success Stories</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.benefits.slice(0, 3).map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => setSelectedPartner(partner)}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Partners */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners
                .filter(partner => !partner.featured)
                .map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                        <p className="text-slate-400 text-xs">{partner.partnershipType}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-3">{partner.description}</p>
                    
                    <div className="flex justify-between text-xs text-slate-400 mb-3">
                      <span>{partner.jointProjects} projects</span>
                      <span>{partner.successStories} successes</span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedPartner(partner)}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      View Details →
                    </button>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Partner Modal */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{selectedPartner.name}</h2>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-slate-300 mb-4">{selectedPartner.longDescription || selectedPartner.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-slate-400">Partnership Type</div>
                  <div className="text-white">{selectedPartner.partnershipType}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Duration</div>
                  <div className="text-white">{selectedPartner.partnershipDuration}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-slate-400 mb-2">Key Benefits</div>
                <div className="space-y-1">
                  {selectedPartner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedPartner.testimonials && selectedPartner.testimonials.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Testimonial</div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-white text-sm italic mb-2">"{selectedPartner.testimonials[0].quote}"</p>
                    <div className="text-slate-400 text-xs">
                      — {selectedPartner.testimonials[0].author}, {selectedPartner.testimonials[0].role}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-3">
                <a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors"
                >
                  Visit Website
                </a>
                <a
                  href={`mailto:${selectedPartner.contact}`}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded-lg transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Partners;
