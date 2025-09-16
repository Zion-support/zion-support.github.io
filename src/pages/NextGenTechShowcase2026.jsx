import React from 'react';

const NextGenTechShowcase2026 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-fuchsia-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Next-Gen Tech Showcase 2026</h1>
          <p className="text-xl text-gray-700">
            Discover the most advanced technologies of 2026
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold mb-4">Revolutionary Innovations</h2>
            <p className="text-gray-600">
              Showcase of the most revolutionary technological innovations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Future Technologies</h2>
            <p className="text-gray-600">
              Preview of future technologies and their applications.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold mb-4">Breakthrough Solutions</h2>
            <p className="text-gray-600">
              Breakthrough solutions that solve complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2026;