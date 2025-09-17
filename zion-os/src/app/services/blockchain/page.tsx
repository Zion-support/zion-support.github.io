export default function BlockchainServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blockchain Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive blockchain solutions for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Smart Contract Development
            </h3>
            <p className="text-gray-600 mb-4">
              Secure and efficient smart contracts for various blockchain platforms.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              DeFi Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Decentralized finance applications and protocols.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              NFT Platforms
            </h3>
            <p className="text-gray-600 mb-4">
              NFT marketplaces and tokenization solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}