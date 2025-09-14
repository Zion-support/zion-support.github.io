import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites and web applications built with modern technologies.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• React & Next.js</li>
              <li>• Node.js & Express</li>
              <li>• Database Design</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-4">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• React Native</li>
              <li>• Flutter</li>
              <li>• Native iOS/Android</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and deployment solutions.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• AWS & Azure</li>
              <li>• Docker & Kubernetes</li>
              <li>• CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;