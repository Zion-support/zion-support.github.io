import React from 'react';
import Card from '../components/Card';

const WhitePapers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">White Papers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth research and insights on technology trends and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="AI in Business" description="How artificial intelligence is transforming modern business operations." />
          <Card title="Cybersecurity Trends" description="Latest trends and threats in cybersecurity for 2025." />
          <Card title="Cloud Migration" description="Best practices for migrating to cloud infrastructure." />
        </div>
      </div>
    </div>
  );
};

export default WhitePapers;
