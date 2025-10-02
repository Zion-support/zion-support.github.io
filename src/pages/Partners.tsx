import React from 'react';
import { Helmet } from 'react-helmet-async';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',',
      category: 'Cloud Platform',',
      description: 'Strategic cloud and AI partnership',',
      logo: '/images/partners/microsoft.png',',
      website: 'https://microsoft.com},
    {
      name: 'Amazon Web Services',',
      category: 'Cloud Infrastructure',',
      description: 'AWS Advanced Technology Partner',',
      logo: '/images/partners/aws.png',',
      website: 'https://aws.amazon.com},
    {
      name: 'Google Cloud',',
      category: 'AI & Machine Learning',',
      description: 'Google Cloud AI/ML Specialization Partner',',
      logo: '/images/partners/google-cloud.png',',
      website: 'https://cloud.google.com},
    {
      name: 'IBM',',
      category: 'Enterprise AI',',
      description: 'IBM Business Partner for AI Solutions',',
      logo: '/images/partners/ibm.png',',
      website: 'https://ibm.com},
    {
      name: 'Salesforce',',
      category: 'CRM Integration',',
      description: 'Salesforce Consulting Partner',',
      logo: '/images/partners/salesforce.png',',
      website: 'https://salesforce.com},
    {
      name: 'ServiceNow',',
      category: 'IT Service Management',',
      description: 'ServiceNow Implementation Partner',',
      logo: '/images/partners/servicenow.png',',
      website: 'https://servicenow.com}
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology providers and platform partners',
      icon: '🔧',
      benefits: [,
        'Access to cutting-edge technology',
        'Joint go-to-market strategies',
        'Technical support and training'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized solution providers and integrators',
      icon: '🤝',
      benefits: [,
        'Complementary solution offerings',
        'Joint customer implementations',
        'Shared expertise and resources'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resellers and distribution partners',
      icon: '📈',
      benefits: [,
        'Extended market reach',
        'Local customer support',
        'Revenue sharing opportunities'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Strategic partnerships with leading technology providers to deliver comprehensive AI and IT solutions." /><link rel="canonical" href="https://ziontechgroup.com/partners/>",
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">",
            <div className="text-center">
              <h1 className="text-4xl md: text-5xl font-bold mb-4">",
                Our Partners
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Strategic partnerships with industry leaders to deliver 
                comprehensive AI and IT solutions that drive business success.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">",
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">",
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-all duration-300 text-center",
              >
                <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-gray-600">{partner.name}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {partner.category}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {partner.description}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover: text-blue-700 transition-colors",
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">",
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partnership Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer different types of partnerships to meet various business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">",
              {partnershipTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <ul className="text-left space-y-2 text-gray-600">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd/>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Partner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">",
            <h2 className="text-3xl font-bold mb-4">
              Become a Partner
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">",
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover: bg-gray-100 transition-colors font-medium",
              >
                Partner with Us
              </a>
              <a
                href="/partners/benefits"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover: bg-white hover:text-blue-600 transition-colors font-medium",
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;