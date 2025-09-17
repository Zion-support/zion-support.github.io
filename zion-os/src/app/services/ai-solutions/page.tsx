"use client";

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive AI solutions for your business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Machine Learning Models
            </h3>
            <p className="text-gray-600 mb-4">
              Custom ML models for your specific business needs
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Natural Language Processing
            </h3>
            <p className="text-gray-600 mb-4">
              Text analysis and language understanding solutions
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Computer Vision
            </h3>
            <p className="text-gray-600 mb-4">
              Image and video analysis using advanced AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}