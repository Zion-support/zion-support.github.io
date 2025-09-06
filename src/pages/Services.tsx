import React from "react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Services
              </h3>
              <p className="text-gray-600 mb-4">
                Cutting-edge artificial intelligence solutions including machine
                learning, natural language processing, and computer vision.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                IT Services
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive IT support including infrastructure management,
                system administration, and technical consulting.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure and migration services to help
                businesses modernize their technology stack.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cybersecurity
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions to protect your digital assets and
                ensure compliance with industry standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your data into actionable insights with our advanced
                analytics and business intelligence solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Digital Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Complete digital transformation services to modernize your
                business processes and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
