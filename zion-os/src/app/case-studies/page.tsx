export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how we've helped organizations transform their operations with cutting-edge technology
        </p>
      </section>

      {/* Case Studies Grid */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">AI-Powered Manufacturing</h3>
          <p className="text-gray-600 mb-4">
            Implemented machine learning algorithms to optimize production efficiency by 40%
          </p>
          <div className="text-sm text-blue-600">Manufacturing • AI/ML</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Quantum Computing Research</h3>
          <p className="text-gray-600 mb-4">
            Developed quantum algorithms for complex optimization problems in logistics
          </p>
          <div className="text-sm text-blue-600">Research • Quantum Computing</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Blockchain Integration</h3>
          <p className="text-gray-600 mb-4">
            Created secure, transparent supply chain management system using blockchain
          </p>
          <div className="text-sm text-blue-600">Blockchain • Supply Chain</div>
        </div>
      </div>
    </div>
  );
}