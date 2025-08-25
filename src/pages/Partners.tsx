import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building, 
  Globe, 
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const categories = [
    { id: 'all', name: 'All Partners', count: 45 },
    { id: 'technology', name: 'Technology', count: 18 },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 12 },
    { id: 'consulting', name: 'Consulting & Services', count: 8 },
    { id: 'academic', name: 'Academic & Research', count: 7 }
  ];

  const regions = [
    { id: 'all', name: 'All Regions', count: 45 },
    { id: 'north-america', name: 'North America', count: 25 },
    { id: 'europe', name: 'Europe', count: 12 },
    { id: 'asia-pacific', name: 'Asia Pacific', count: 8 }
  ];

  const partners = [
    {
      id: 1,
      name: "Microsoft Azure",
      logo: "/partners/microsoft-azure.png",
      category: "cloud",
      region: "north-america",
      description: "Strategic cloud partner providing enterprise-grade infrastructure and AI services",
      partnershipType: "Strategic Alliance",
      since: "2020",
      services: ["Cloud Infrastructure", "AI Services", "Enterprise Solutions"],
      benefits: [
        "Joint go-to-market initiatives",
        "Technical integration support",
        "Co-innovation programs",
        "Shared customer success stories"
      ],
      website: "https://azure.microsoft.com",
      contact: {
        name: "Azure Partnership Team",
        email: "partnerships@microsoft.com",
        phone: "+1 (425) 882-8080"
      },
      featured: true
    },
    {
      id: 2,
      name: "Amazon Web Services",
      logo: "/partners/aws.png",
      category: "cloud",
      region: "north-america",
      description: "Leading cloud computing platform partner for scalable AI and ML solutions",
      partnershipType: "Technology Partner",
      since: "2021",
      services: ["Cloud Computing", "Machine Learning", "IoT Solutions"],
      benefits: [
        "AWS Marketplace integration",
        "Technical certification programs",
        "Joint solution development",
        "Customer referral programs"
      ],
      website: "https://aws.amazon.com",
      contact: {
        name: "AWS Partner Network",
        email: "partner-support@amazon.com",
        phone: "+1 (206) 266-1000"
      },
      featured: true
    },
    {
      id: 3,
      name: "Google Cloud",
      logo: "/partners/google-cloud.png",
      category: "cloud",
      region: "north-america",
      description: "Innovative cloud partner specializing in AI and data analytics solutions",
      partnershipType: "Technology Partner",
      since: "2022",
      services: ["AI/ML Platform", "Data Analytics", "Cloud Infrastructure"],
      benefits: [
        "Google Cloud Partner Program",
        "Technical training and certification",
        "Joint customer workshops",
        "Innovation lab access"
      ],
      website: "https://cloud.google.com",
      contact: {
        name: "Google Cloud Partnerships",
        email: "partnerships@google.com",
        phone: "+1 (650) 253-0000"
      },
      featured: false
    },
    {
      id: 4,
      name: "IBM",
      logo: "/partners/ibm.png",
      category: "technology",
      region: "north-america",
      description: "Enterprise technology partner for quantum computing and AI solutions",
      partnershipType: "Strategic Partner",
      since: "2019",
      services: ["Quantum Computing", "AI Solutions", "Enterprise Software"],
      benefits: [
        "Quantum computing access",
        "Joint research initiatives",
        "Enterprise customer base",
        "Technical expertise sharing"
      ],
      website: "https://www.ibm.com",
      contact: {
        name: "IBM Partner Ecosystem",
        email: "partners@ibm.com",
        phone: "+1 (800) 426-4968"
      },
      featured: true
    },
    {
      id: 5,
      name: "Oracle",
      logo: "/partners/oracle.png",
      category: "technology",
      region: "north-america",
      description: "Database and enterprise software partner for comprehensive business solutions",
      partnershipType: "Technology Partner",
      since: "2021",
      services: ["Database Solutions", "Enterprise Software", "Cloud Services"],
      benefits: [
        "Oracle Partner Network",
        "Technical certification",
        "Joint solution development",
        "Customer success programs"
      ],
      website: "https://www.oracle.com",
      contact: {
        name: "Oracle Partner Network",
        email: "partner-support@oracle.com",
        phone: "+1 (800) 633-0738"
      },
      featured: false
    },
    {
      id: 6,
      name: "SAP",
      logo: "/partners/sap.png",
      category: "technology",
      region: "europe",
      description: "Enterprise software partner for business process optimization and AI integration",
      partnershipType: "Technology Partner",
      since: "2022",
      services: ["ERP Solutions", "Business Intelligence", "AI Integration"],
      benefits: [
        "SAP PartnerEdge Program",
        "Technical training and support",
        "Joint go-to-market",
        "Customer success collaboration"
      ],
      website: "https://www.sap.com",
      contact: {
        name: "SAP Partner Network",
        email: "partner-network@sap.com",
        phone: "+49 (0) 6227 7-47474"
      },
      featured: false
    },
    {
      id: 7,
      name: "Accenture",
      logo: "/partners/accenture.png",
      category: "consulting",
      region: "north-america",
      description: "Global consulting partner for digital transformation and AI implementation",
      partnershipType: "Strategic Alliance",
      since: "2020",
      services: ["Digital Transformation", "AI Implementation", "Change Management"],
      benefits: [
        "Joint client engagements",
        "Shared expertise and resources",
        "Co-innovation initiatives",
        "Global market access"
      ],
      website: "https://www.accenture.com",
      contact: {
        name: "Accenture Partnerships",
        email: "partnerships@accenture.com",
        phone: "+1 (312) 737-5678"
      },
      featured: true
    },
    {
      id: 8,
      name: "MIT Technology Review",
      logo: "/partners/mit-tech-review.png",
      category: "academic",
      region: "north-america",
      description: "Academic partner for technology research and innovation insights",
      partnershipType: "Research Partner",
      since: "2023",
      services: ["Technology Research", "Innovation Insights", "Academic Collaboration"],
      benefits: [
        "Research collaboration",
        "Technology trend insights",
        "Academic network access",
        "Publication opportunities"
      ],
      website: "https://www.technologyreview.com",
      contact: {
        name: "MIT Technology Review",
        email: "partnerships@technologyreview.com",
        phone: "+1 (617) 475-8000"
      },
      featured: false
    }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || partner.region === selectedRegion;
    return matchesCategory && matchesRegion;
  });

  const featuredPartners = filteredPartners.filter(partner => partner.featured);
  const regularPartners = filteredPartners.filter(partner => !partner.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Strategic Alliances
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Collaborating with industry leaders to deliver innovative solutions and drive digital transformation across enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Regions */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedRegion === region.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {region.name}
                  <span className="ml-1 text-xs opacity-75">({region.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      {featuredPartners.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Strategic Partners</h2>
              <p className="text-gray-300">Our key alliance partners driving innovation and growth</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Building className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Strategic Partner
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{partner.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2">Partnership Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {regions.find(r => r.id === partner.region)?.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Since {partner.since}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {partner.services.slice(0, 3).map((service) => (
                          <span key={service} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {service}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-colors duration-200">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Partners */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technology Partners</h2>
            <p className="text-gray-300">
              {filteredPartners.length > 0 
                ? `Showing ${filteredPartners.length} partners` 
                : 'No partners found matching your criteria'
              }
            </p>
          </div>
          
          {regularPartners.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Building className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{partner.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {partner.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-300 mb-2 text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {partner.services.slice(0, 2).map((service) => (
                          <span key={service} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {regions.find(r => r.id === partner.region)?.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {partner.since}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {partner.partnershipType}
                      </span>
                      
                      <div className="flex gap-2">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-md hover:bg-cyan-500/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <button className="p-1.5 bg-gray-700/50 text-gray-300 rounded-md hover:bg-gray-600/50 transition-colors duration-200">
                          <Mail className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {regularPartners.length === 0 && (
            <div className="text-center py-12">
              <Handshake className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No partners found</h3>
              <p className="text-gray-300">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Handshake className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and help shape the future of enterprise technology. 
              Let's explore opportunities for collaboration and mutual growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Users className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Access to Markets</h3>
                <p className="text-gray-300 text-sm text-center">Reach new customers through our global network</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Star className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Innovation Support</h3>
                <p className="text-gray-300 text-sm text-center">Collaborate on cutting-edge technology solutions</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Award className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Recognition</h3>
                <p className="text-gray-300 text-sm text-center">Gain industry recognition and credibility</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Apply for Partnership
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
