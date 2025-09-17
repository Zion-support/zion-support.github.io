export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research & Development
          </h1>
          <p className="text-xl text-gray-600">
            Advancing the frontiers of technology through cutting-edge research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Research
            </h3>
            <p className="text-gray-600 mb-4">
              Pioneering research in artificial intelligence, machine learning, 
              and neural network architectures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Computing
            </h3>
            <p className="text-gray-600 mb-4">
              Exploring quantum algorithms and their applications in solving 
              complex computational problems.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Blockchain Technology
            </h3>
            <p className="text-gray-600 mb-4">
              Researching next-generation blockchain protocols and 
              decentralized systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}