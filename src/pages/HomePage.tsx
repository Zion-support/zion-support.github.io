import React from 'react;'
import react-helmet-async from 'react-helmet-async;'
const HomePage: React.FC = () => {return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta
          name="description""
          content="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.""
        />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">"
        <main className="container mx-auto px-4 py-16">"
          <section className="text-center mb-16">"
            <h1 className="text-5xl font-bold mb-6">"
              Welcome to <span className="text-blue-400">Zion Tech Group</span>"
            </h1>
            <p className="text-xl text-gray-300 mb-8">"
              Leading provider of AI-powered enterprise solutions
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"

              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"

              >
                Our Solutions
              </a>
            </div>
          </section>
          <section className="mb-16">"
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>"
            <div className="grid md:grid-cols-3 gap-8">"
              <div className="bg-gray-800 p-6 rounded-lg">"
                <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>"
                <p className="text-gray-300">"
                  Advanced artificial intelligence solutions for your business needs.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">"
                <h3 className="text-xl font-semibold mb-4">Cloud Computing</h3>"
                <p className="text-gray-300">"
                  Scalable cloud infrastructure and migration services.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">"
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>"
                <p className="text-gray-300">"
                  Comprehensive security solutions to protect your data.
                </p>
              </div>
            </div>
          </section>
          <section className="text-center">"
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>"
            <p className="text-xl text-gray-300 mb-8">"
              Contact us today to learn how we can help you achieve your goals.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"

            >
              Contact Us
            </a>
          </section>
        </main>
      </div>
    </>
  )};
export default HomePage
'