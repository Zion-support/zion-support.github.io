import React from 'react';
import SEO from '../components/SEO';

const SolutionsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Tailored solutions for enterprise, SMB, and startup businesses. AI-powered solutions that drive growth and efficiency."
        keywords="enterprise solutions, SMB solutions, startup solutions, AI business solutions"
      />
      
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Solutions</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enterprise */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🏢</div>
                <h2 className="text-2xl font-bold mb-4">Enterprise Solutions</h2>
                <p className="text-gray-600 mb-4">
                  Scalable, enterprise-grade solutions for large organizations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Enterprise AI Platforms</li>
                  <li>• Cloud Infrastructure</li>
                  <li>• Security & Compliance</li>
                  <li>• Custom Development</li>
                </ul>
              </div>

              {/* SMB */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🏪</div>
                <h2 className="text-2xl font-bold mb-4">SMB Solutions</h2>
                <p className="text-gray-600 mb-4">
                  Cost-effective solutions designed for small to medium businesses.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Business Automation</li>
                  <li>• Digital Transformation</li>
                  <li>• IT Support</li>
                  <li>• Software Integration</li>
                </ul>
              </div>

              {/* Startup */}
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold mb-4">Startup Solutions</h2>
                <p className="text-gray-600 mb-4">
                  Fast, agile solutions to help startups scale quickly.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MVP Development</li>
                  <li>• Rapid Prototyping</li>
                  <li>• Technical Consulting</li>
                  <li>• Growth Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SolutionsPage;