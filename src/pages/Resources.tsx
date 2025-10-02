import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access valuable resources, documentation, and tools to support your technology journey.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're building a comprehensive resource library with guides, whitepapers, and tools.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Request Resources
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;