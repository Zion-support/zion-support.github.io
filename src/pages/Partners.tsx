import React from 'react';
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
    }
  ];

  return (
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
              </Link>
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default Partners;