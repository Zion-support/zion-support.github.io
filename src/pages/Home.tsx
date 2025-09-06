import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Advanced technology solutions for modern businesses. We provide cutting-edge AI, cloud services, and automation solutions.
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-efe6
