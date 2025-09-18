import React from 'react';

const TalentDirectory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Talent Directory</h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover top talent in AI, technology, and innovation.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg">
              Connect with skilled professionals and experts in artificial intelligence, 
              quantum computing, cybersecurity, and emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDirectory;