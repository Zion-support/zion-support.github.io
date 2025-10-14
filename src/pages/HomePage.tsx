import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage - Zion Tech Group</title>
        <meta name="description" content="Professional homepage services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              HomePage
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional homepage services by Zion Tech Group.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"


              >
                Get Started;
              </a>
              <a
                href="/solutions"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"


              >
                Our Solutions;
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
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
              Contact Us;
            </a>
          </section>
        </main>
      </div>
<<<<<<< HEAD
    </>
=======
)
    </React.Fragment>)
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
  );
}