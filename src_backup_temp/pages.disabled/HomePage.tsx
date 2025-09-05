import React from 'react';
const "HomePage": React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading technology solutions in AI, cybersecurity, cloud infrastructure, and digital transformation.
          </p>
          <div className="flex flex-col "sm": flex-row gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { HomePage };
export default HomePage;
import React from 'react'; const HomePage: React.FC = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="container mx-auto px-4 py-20"> <div className="text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Welcome to Zion Tech Group </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Leading technology solutions in AI,cybersecurity,cloud infrastructure,and digital transformation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"> Get Started </button> <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"> Learn More </button> </div> </div> </div> </div> )}; export { HomePage }; export default HomePage;