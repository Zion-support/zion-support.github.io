import React from 'react';
import Card from '../components/Card';

const Training: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Training Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your team's skills with our comprehensive training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="AI & Machine Learning" description="Learn the fundamentals of AI and ML technologies." />
          <Card title="Cybersecurity" description="Master security best practices and threat protection." />
          <Card title="Cloud Computing" description="Get hands-on experience with cloud platforms." />
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Training;
