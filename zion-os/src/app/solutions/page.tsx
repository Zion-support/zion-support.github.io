export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI-Powered Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Leverage artificial intelligence to automate processes and gain insights.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Blockchain Technology
            </h3>
            <p className="text-gray-600 mb-4">
              Secure, transparent, and decentralized solutions for your business.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cloud Infrastructure
            </h3>
            <p className="text-gray-600 mb-4">
              Scalable and reliable cloud solutions for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}