"use client";

export default function ITSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive IT solutions for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cloud Migration
            </h3>
            <p className="text-gray-600 mb-4">
              Seamlessly migrate your infrastructure to the cloud.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              DevOps Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Streamline development and deployment processes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Security Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Protect your systems with comprehensive security measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}