import Link from "next/link";

export const metadata = {
  title: "Quantum Computing Services - Zion Tech Group | Advanced Quantum Solutions",
  description: "Transform your business with Zion Tech Group's cutting-edge quantum computing services. From algorithm optimization to quantum machine learning, unlock unprecedented computational power.",
  keywords: "quantum computing, quantum algorithms, quantum machine learning, quantum optimization, Zion Tech Group, quantum services"
};

export default function QuantumServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quantum Computing Services
          </h1>
          <p className="text-xl text-gray-600">
            Unlock the power of quantum computing for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Algorithm Development
            </h3>
            <p className="text-gray-600 mb-4">
              Custom quantum algorithms designed for your specific business challenges 
              and optimization problems.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Machine Learning
            </h3>
            <p className="text-gray-600 mb-4">
              Implement quantum-enhanced machine learning models that can process 
              data at unprecedented speeds.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quantum Consulting
            </h3>
            <p className="text-gray-600 mb-4">
              Expert guidance on quantum computing strategy and implementation 
              for your organization.
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