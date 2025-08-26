import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';

const Partners: React.FC = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies we collaborate with to deliver cutting-edge solutions",
      partners: [
        {
          name: "Microsoft",
          logo: "🔵",
          description: "Cloud infrastructure and AI services",
          category: "Cloud & AI"
        },
        {
          name: "Amazon Web Services",
          logo: "🟠",
          description: "Cloud computing and machine learning",
          category: "Cloud & ML"
        },
        {
          name: "Google Cloud",
          logo: "🔴",
          description: "AI and data analytics solutions",
          category: "AI & Analytics"
        },
        {
          name: "IBM",
          logo: "🔵",
          description: "Enterprise AI and quantum computing",
          category: "AI & Quantum"
        }
      ]
    },
    {
      title: "Security Partners",
      description: "Cybersecurity experts ensuring robust protection for our clients",
      partners: [
        {
          name: "CrowdStrike",
          logo: "🟢",
          description: "Endpoint security and threat intelligence",
          category: "Endpoint Security"
        },
        {
          name: "Palo Alto Networks",
          logo: "🟡",
          description: "Network security and firewall solutions",
          category: "Network Security"
        },
        {
          name: "Fortinet",
          logo: "🔴",
          description: "Unified threat management",
          category: "UTM Solutions"
        }
      ]
    },
    {
      title: "Innovation Partners",
      description: "Research institutions and startups driving technological advancement",
      partners: [
        {
          name: "MIT Technology Review",
          logo: "🟣",
          description: "Technology insights and research",
          category: "Research & Insights"
        },
        {
          name: "Stanford AI Lab",
          logo: "🔴",
          description: "AI research and development",
          category: "AI Research"
        },
        {
          name: "OpenAI",
          logo: "🟢",
          description: "Advanced AI models and research",
          category: "AI Innovation"
        }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: "Technology Integration",
      description: "Seamless integration with leading platforms and tools",
      icon: "🔗"
    },
    {
      title: "Joint Innovation",
      description: "Collaborative development of cutting-edge solutions",
      icon: "🚀"
    },
    {
      title: "Market Access",
      description: "Expanded reach and market opportunities",
      icon: "🌍"
    },
    {
      title: "Shared Expertise",
      description: "Combined knowledge and best practices",
      icon: "🧠"
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
import { Link } from 'react-router-dom';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      category: "Technology Partner",
      description: "Strategic partnership for Azure cloud solutions and AI services",
      logo: "MS"
    },
    {
      name: "AWS",
      category: "Cloud Partner",
      description: "Premier consulting partner for AWS cloud infrastructure and services",
      logo: "AWS"
    },
    {
      name: "Google Cloud",
      category: "AI Partner",
      description: "Collaboration on AI and machine learning solutions",
      logo: "GC"
    },
    {
      name: "Cisco",
      category: "Security Partner",
      description: "Joint cybersecurity solutions and network infrastructure",
      logo: "CISCO"
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic Partnerships
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional technology solutions. 
            Our partnerships enable us to provide cutting-edge services and innovative approaches 
            to complex business challenges.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Categories */}
        <div className="space-y-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-8 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-slate-700/50 rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-3xl mb-3">{partner.logo}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">
                        {partner.description}
                      </p>
                      <span className="inline-block bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Become a Partner
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Interested in partnering with Zion Tech Group? We're always looking for innovative 
              companies and organizations to collaborate with on cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Partnership Team
              </Link>
              <Link
                to="/about"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Learn More About Us
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver comprehensive technology solutions 
              and drive innovation for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {partner.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{partner.category}</span>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{partner.description}</p>
                
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-6">
                Interested in partnering with Zion Tech Group? Let's explore how we can 
                create value together and deliver exceptional solutions to our clients.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Partner With Us
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Partnership Types */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership Types
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Technology Partnerships</h3>
              <p className="text-gray-300 mb-4">
                Integrate our solutions with your platforms and create seamless user experiences.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• API integrations</li>
                <li>• Platform partnerships</li>
                <li>• Co-development opportunities</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Channel Partnerships</h3>
              <p className="text-gray-300 mb-4">
                Resell our services and earn competitive margins while expanding your portfolio.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Reseller programs</li>
                <li>• Referral partnerships</li>
                <li>• White-label solutions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Alliances</h3>
              <p className="text-gray-300 mb-4">
                Collaborate on joint ventures and innovative projects in emerging technologies.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Joint R&D projects</li>
                <li>• Market expansion</li>
                <li>• Innovation labs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Ready to Partner?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can work together to create innovative solutions and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Partnership Discussion
            </Link>
            <Link
              to="/services"
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
=======
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
        </div>
      </section>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Partners;
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
export default Partners;
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
export default $page;
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
