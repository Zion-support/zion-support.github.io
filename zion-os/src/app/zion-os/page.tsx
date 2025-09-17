import Link from "next/link";

export const metadata = {
  title: "Zion OS - Sovereign AI-Powered Digital Economies Platform | Zion Tech Group",
  description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
  keywords: "Zion OS, digital economy, blockchain, governance, marketplace, deployment, sovereign, AI-powered, Zion Tech Group"
};

export default function ZionOSPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion OS
          </h1>
          <p className="text-xl text-gray-600">
            Launch sovereign AI-powered digital economies with one click
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Unified Deployment
            </h3>
            <p className="text-gray-600 mb-4">
              Deploy complete digital economies with a single command.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI-Powered Governance
            </h3>
            <p className="text-gray-600 mb-4">
              Intelligent governance systems that adapt and evolve.
            </p>
            <Link href="#" className="text-indigo-600 hover:text-indigo-500">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Marketplace Integration
            </h3>
            <p className="text-gray-600 mb-4">
              Built-in marketplace and trading capabilities.
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