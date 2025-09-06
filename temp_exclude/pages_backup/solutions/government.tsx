  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Comprehensive government technology solutions for public sector organizations. Digital services, citizen engagement, and government process automation."
      keywords="government solutions, digital government, public sector, citizen services, government technology, e-government"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform government operations with secure, compliant technology solutions
                designed for public sector organizations and citizen services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
  );
}