import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive AI and automation solutions for large enterprises',
      href: '/solutions/enterprise',
      icon: '🏢'
    },
    {
      title: 'SMB Solutions',
      description: 'Scalable solutions designed for small and medium businesses',
      href: '/solutions/smb',
      icon: '🏪'
    },
    {
      title: 'Startup Solutions',
      description: 'Cost-effective solutions to accelerate startup growth',
      href: '/solutions/startup',
      icon: '🚀'
    },
    {
      title: 'Government Solutions',
      description: 'Secure and compliant solutions for government agencies',
      href: '/solutions/government',
      icon: '🏛️'
    },
    {
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for healthcare organizations',
      href: '/solutions/healthcare',
      icon: '🏥'
    },
    {
      title: 'Financial Solutions',
      description: 'FinTech and financial services automation solutions',
      href: '/solutions/financial',
      icon: '💳'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions tailored for enterprises, SMBs, startups, government, healthcare, and financial services." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Comprehensive Solutions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Tailored AI and IT solutions for every industry and business size. 
                Transform your organization with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team can create bespoke solutions tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;