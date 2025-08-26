import React from 'react';
import { SEO } from '@/components/SEO';

export default function Partners() {
  const strategicPartners = [
    {
      name: 'Microsoft',
      logo: '🪟',
      description: 'Strategic partner for Azure cloud solutions and enterprise software integration.',
      partnership: 'Cloud & AI Solutions',
      benefits: ['Azure Credits', 'Technical Support', 'Joint Go-to-Market']
    },
    {
      name: 'Amazon Web Services',
      logo: '☁️',
      description: 'Premier consulting partner for AWS cloud migration and optimization services.',
      partnership: 'Cloud Infrastructure',
      benefits: ['AWS Credits', 'Training & Certification', 'Solution Architecture Support']
    },
    {
      name: 'Google Cloud',
      logo: '🔍',
      description: 'Partner for AI/ML solutions and data analytics on Google Cloud Platform.',
      partnership: 'AI & Analytics',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Data Engineering Support']
    },
    {
      name: 'IBM',
      logo: '💙',
      description: 'Collaboration on enterprise AI solutions and quantum computing initiatives.',
      partnership: 'Enterprise AI',
      benefits: ['Watson AI Platform', 'Quantum Computing Access', 'Industry Solutions']
    }
  ];

  const technologyPartners = [
    {
      name: 'OpenAI',
      logo: '🤖',
      description: 'Access to cutting-edge AI models and research for enterprise applications.',
      category: 'AI & Machine Learning'
    },
    {
      name: 'NVIDIA',
      logo: '🎮',
      description: 'GPU computing solutions for AI training and inference workloads.',
      category: 'Hardware & Computing'
    },
    {
      name: 'Databricks',
      logo: '📊',
      description: 'Unified analytics platform for data engineering and machine learning.',
      category: 'Data & Analytics'
    },
    {
      name: 'Snowflake',
      logo: '❄️',
      description: 'Cloud data platform for data warehousing and analytics.',
      category: 'Data & Analytics'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Strategic Partnerships',
      description: 'Long-term collaborations with major technology providers for comprehensive solutions.',
      icon: '🤝',
      benefits: ['Joint Go-to-Market', 'Technical Integration', 'Revenue Sharing']
    },
    {
      title: 'Technology Alliances',
      description: 'Technology partnerships for specialized tools and platforms.',
      icon: '🔧',
      benefits: ['Early Access', 'Technical Support', 'Training Programs']
    },
    {
      title: 'Channel Partnerships',
      description: 'Distribution partnerships for reaching new markets and customers.',
      icon: '🌐',
      benefits: ['Market Expansion', 'Local Expertise', 'Cultural Adaptation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Strategic partnerships with leading technology providers. Collaborate with us to deliver innovative solutions and expand your market reach."
        keywords="partners, partnerships, technology alliances, strategic collaboration, Zion Tech Group"
        canonical="https://ziontechgroup.com/partners"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Strategic Partnerships
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Collaborating with industry leaders to deliver exceptional technology solutions and drive innovation
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer multiple partnership models to meet your business needs and growth objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {type.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {type.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {type.description}
                </p>
                
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Long-term collaborations with industry leaders for comprehensive technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{partner.partnership}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Partnership Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized technology partnerships for cutting-edge tools and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {partner.logo}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{partner.category}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our network of technology partners and unlock new opportunities for growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Partnership Team
            </a>
            <a
              href="/partnership-opportunities"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}