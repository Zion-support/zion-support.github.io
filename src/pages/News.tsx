
import React from 'react';
import Card from '../components/Card';

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Latest News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments in technology and our company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="AI Breakthrough" description="New AI technology revolutionizes business processes." />
          <Card title="Security Update" description="Enhanced cybersecurity measures protect against new threats." />
          <Card title="Cloud Innovation" description="Next-generation cloud solutions improve performance." />
        </div>
      </div>
    </div>
  );
};

export default News;

