import React from 'react';

const DigitalTransformationServices: Reac t.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Digital Transformation Services</h1>
        <p className="text-lg text-gray-600 mb-8">
          Modernize your business with cloud, AI, data, and automation. We design and implement
          secure, scalable solutions that accelerate innovation and reduce operational costs.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Cloud migration and FinOps optimization</li>
          <li>AI-powered process automation</li>
          <li>Data platforms and analytics modernization</li>
          <li>Zero-trust security and governance</li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalTransformationServices;
