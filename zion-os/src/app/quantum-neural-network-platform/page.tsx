import Link from "next/link";

export const metadata = {
  title: "Quantum Neural Network Platform - Zion Tech Group",
  description: "Revolutionary quantum neural network platform that combines quantum computing with artificial intelligence to solve previously intractable problems.",
  keywords: "quantum neural networks, quantum computing, AI, machine learning, quantum machine learning, Zion Tech Group"
};

export default function QuantumNeuralNetworkPlatformPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quantum Neural Network Platform
          </h1>
          <p className="text-xl text-gray-600">
            Revolutionary quantum computing meets artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Machine Learning
            </h3>
            <p className="text-gray-600 mb-4">
              Leverage quantum computing power to accelerate machine learning algorithms 
              and solve complex optimization problems.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Neural Networks
            </h3>
            <p className="text-gray-600 mb-4">
              Build and train neural networks that harness quantum properties for 
              unprecedented computational capabilities.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Optimization
            </h3>
            <p className="text-gray-600 mb-4">
              Solve complex optimization problems using quantum algorithms that 
              outperform classical methods.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}