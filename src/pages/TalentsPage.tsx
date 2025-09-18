import React from 'react';

const TalentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Talents</h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore our network of talented professionals.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg">
              Browse through our curated list of talented individuals ready to 
              help you achieve your technology goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentsPage;