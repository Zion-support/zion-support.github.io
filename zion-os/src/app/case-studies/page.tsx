export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      company: "TechCorp Inc.",
      description: "Successfully migrated 500+ applications to our cloud platform, reducing costs by 40%.",
      results: ["40% cost reduction", "99.9% uptime", "50% faster deployment"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "AI-Powered Analytics",
      company: "DataFlow Systems",
      description: "Implemented AI-driven analytics platform processing 1TB+ data daily.",
      results: ["60% faster insights", "95% accuracy", "Real-time processing"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Microservices Architecture",
      company: "StartupXYZ",
      description: "Transformed monolithic application into scalable microservices architecture.",
      results: ["300% performance boost", "Zero downtime", "Auto-scaling"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600">
            See how our solutions have transformed businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Case Study Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-indigo-600 mb-3">
                  {study.company}
                </p>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}