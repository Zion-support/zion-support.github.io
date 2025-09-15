export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of AI-powered technology solutions and autonomous business operations.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Leading the AI Revolution</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to democratize advanced AI technology, Zion Tech Group has been at the forefront of innovation in artificial intelligence, quantum computing, and autonomous systems.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to empower businesses of all sizes with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation First</h3>
                    <p className="text-gray-600">Pioneering breakthrough technologies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Security Focused</h3>
                    <p className="text-gray-600">Enterprise-grade security standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

