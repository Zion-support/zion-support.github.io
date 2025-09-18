import React from 'react';

const EmergingTech: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">Emerging Technologies</h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the latest breakthroughs in technology.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg">
              Stay ahead of the curve with insights into the most promising 
              emerging technologies that will shape the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergingTech;