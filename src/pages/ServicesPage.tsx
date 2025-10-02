import React from 'react';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI services, micro SaaS solutions, and IT services. Transform your business with our cutting-edge technology solutions."
        keywords="AI services, micro SaaS, IT services, cloud migration, DevOps, cybersecurity"
      />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🧠</div>
                <h2 className="text-2xl font-bold mb-4">AI Services</h2>
                <p className="text-gray-600 mb-4">
                  Leverage artificial intelligence to automate processes, gain insights, and drive innovation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine Learning Solutions</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              {/* Micro SaaS */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold mb-4">Micro SaaS Solutions</h2>
                <p className="text-gray-600 mb-4">
                  Scalable software solutions that address specific business needs and workflows.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom Web Applications</li>
                  <li>• API Development</li>
                  <li>• Database Solutions</li>
                  <li>• Integration Services</li>
                </ul>
              </div>

              {/* IT Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">💻</div>
                <h2 className="text-2xl font-bold mb-4">IT Services</h2>
                <p className="text-gray-600 mb-4">
                  Comprehensive IT solutions to modernize your infrastructure and operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cloud Migration</li>
                  <li>• DevOps & SRE</li>
                  <li>• Cybersecurity</li>
                  <li>• System Administration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicesPage;