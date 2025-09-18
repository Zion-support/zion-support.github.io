import React from 'react';

const RevolutionaryTechShowcase2034: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 py-16">
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Experience the Future Today
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Step into the most advanced technology showcase ever created and witness the future of human-AI collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Start Interactive Demo →
              </button>
              <button className="border-2 border-white text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white hover:text-indigo-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevolutionaryTechShowcase2034;