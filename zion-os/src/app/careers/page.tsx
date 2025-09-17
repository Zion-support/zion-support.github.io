export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Build the future with us at Zion OS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Software Engineer
            </h3>
            <p className="text-gray-600 mb-4">
              Build cutting-edge applications and systems that power our platform.
            </p>
            <div className="text-sm text-gray-500">
              Full-time • Remote • $80k - $120k
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Product Manager
            </h3>
            <p className="text-gray-600 mb-4">
              Lead product strategy and work with cross-functional teams.
            </p>
            <div className="text-sm text-gray-500">
              Full-time • Remote • $90k - $130k
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              DevOps Engineer
            </h3>
            <p className="text-gray-600 mb-4">
              Manage infrastructure and deployment pipelines for our platform.
            </p>
            <div className="text-sm text-gray-500">
              Full-time • Remote • $85k - $125k
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            View All Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}