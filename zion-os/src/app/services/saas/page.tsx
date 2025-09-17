export default function SAASServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SaaS Services
          </h1>
          <p className="text-xl text-gray-600">
            Software as a Service solutions for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cloud Applications
            </h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud-based applications for your business needs.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              API Development
            </h3>
            <p className="text-gray-600 mb-4">
              RESTful APIs and microservices for seamless integration.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              User Management
            </h3>
            <p className="text-gray-600 mb-4">
              Complete user authentication and management systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}