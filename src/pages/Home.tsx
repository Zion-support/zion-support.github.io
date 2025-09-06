import React from 'react';

<<<<<<< HEAD
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            Welcome to <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading provider of AI-powered technology solutions and enterprise services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white rounded-lg font-semibold transition-colors">
=======
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading the future of technology with innovative AI, blockchain, and IT solutions 
            that transform businesses and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-gray-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
}
export default Home;
};
;
export default Home;
=======
};

export default Home;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
