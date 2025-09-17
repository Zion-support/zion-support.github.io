export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive artificial intelligence solutions for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Machine Learning
            </h3>
            <p className="text-gray-600 mb-4">
              Build and deploy custom machine learning models tailored to your needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Natural Language Processing
            </h3>
            <p className="text-gray-600 mb-4">
              Extract insights from text data with advanced NLP capabilities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Computer Vision
            </h3>
            <p className="text-gray-600 mb-4">
              Analyze images and videos with state-of-the-art computer vision AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}