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

      {/* Featured Case Study */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Healthcare AI Diagnostic Platform
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Revolutionized medical diagnostics for a major healthcare network using AI-powered image analysis and predictive modeling.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">95%</div>
                    <div className="text-white/70 text-sm">Accuracy Improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">60%</div>
                    <div className="text-white/70 text-sm">Faster Diagnosis</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">$2M+</div>
                    <div className="text-white/70 text-sm">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">50K+</div>
                    <div className="text-white/70 text-sm">Patients Served</div>
                  </div>
                </div>
                <a
                  href="/case-studies/healthcare-ai-diagnostics"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read Full Case Study →
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Key Technologies Used</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Computer Vision AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80">Predictive Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80">Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/80">Natural Language Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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