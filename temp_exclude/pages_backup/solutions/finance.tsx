  return (
    <Layout
      title="Finance Solutions - Zion Tech Group"
      description="Secure financial technology solutions for banks, fintech companies, and financial institutions. Regulatory compliant and secure."
      keywords="finance solutions, fintech, banking technology, financial services, regulatory compliance, risk management"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Finance Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Secure, compliant, and innovative financial technology solutions
                designed for modern financial institutions and fintech companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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