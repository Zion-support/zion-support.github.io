import React from 'react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          We deliver innovative solutions tailored to your business needs, leveraging cutting-edge technology to drive growth and efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
            <p className="text-gray-300">Intelligent automation and decision-making systems</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
            <p className="text-gray-300">Scalable and secure cloud solutions</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-gray-300">Advanced threat protection and security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage; 