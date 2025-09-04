import React from 'react';

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Stay updated with the latest news and announcements
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  New AI Services Launch
                </h3>
                <p className="text-gray-500 mb-4">January 15, 2025</p>
                <p className="text-gray-600">
                  We're excited to announce the launch of our new AI services suite, 
                  featuring advanced machine learning and natural language processing capabilities.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Partnership with Leading Cloud Provider
                </h3>
                <p className="text-gray-500 mb-4">January 10, 2025</p>
                <p className="text-gray-600">
                  We've partnered with a leading cloud provider to offer enhanced 
                  cloud infrastructure solutions to our clients.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Company Expansion
                </h3>
                <p className="text-gray-500 mb-4">January 5, 2025</p>
                <p className="text-gray-600">
                  Zion Tech Group is expanding its operations to better serve our 
                  growing client base with new offices and team members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;